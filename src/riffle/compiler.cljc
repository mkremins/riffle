(ns riffle.compiler
  (:require [riffle.util :as util]))

;;; the core of the typechecker

(defn classify-pattern
  "Classifies a `pattern` as either:
  * A :compound pattern, i.e. a sequential form
  * A :literal pattern, i.e. a lowercased symbol or natural number
  * A logic variable :lvar, i.e. a symbol beginning with a $ character
  * A :wildcard, i.e. a symbol beginning with an underscore
  * An :invalid pattern, which should never actually appear"
  [pattern]
  (cond
    (symbol? pattern)
      (let [s (str pattern)]
        (cond (re-matches #"^_.*" s) :wildcard
              (re-matches #"^\$.*" s) :lvar
              :else :literal))
    (sequential? pattern)
      :compound
    (integer? pattern)
      :literal
    :else
      :invalid))

(defn typecheck-args
  "Checks a seq of arguments `args` (to a predicate or type constructor)
  against a seq of declared types `arg-types`, looking up additional type
  information in `types` and `lvar-types` as needed. On success, returns an
  updated lvar-types map that may contain type information for additional
  lvars; on failure, throws an error.

  The `context` argument can be either :pattern or :value. In pattern context,
  unbound logic variables are permitted within `args`; in value context, they
  are not."
  [args arg-types types lvar-types context]
  (assert arg-types)
  (assert (= (count args) (count arg-types)))
  (assert (contains? #{:pattern :value} context))
  (reduce
    (fn [lvar-types [arg arg-type]]
      (case (classify-pattern arg)
        :compound ; look up ctor & typecheck passed args against its signature
          (let [[ctor & ctor-args] arg
                [_    & ctor-arg-types] (get-in types [arg-type :terms ctor])]
            (typecheck-args ctor-args ctor-arg-types types lvar-types context))
        :literal ; succeed IFF literal is actually a member of declared type
          (if (symbol? arg)
            (let [ctor-sig (get-in types [arg-type :terms arg])]
              (assert ctor-sig)
              (assert (= (count ctor-sig) 1))
              lvar-types)
            (do (assert (and (integer? arg) (= arg-type 'nat)))
                lvar-types))
        :lvar ; if bound, check against bound type, else bind or fail depending on context
          (if-let [bound-type (get lvar-types arg)]
            (do (assert (= arg-type bound-type))
                lvar-types)
            (do (assert (= context :pattern))
                (assoc lvar-types arg arg-type)))
        :wildcard ; always succeed
          lvar-types))
    lvar-types
    (map vector args arg-types)))

(defn typecheck-pred-expr
  "Checks a predicate expression `expr` (i.e. an expression of the form
  `[pred & args]`) against the types declared in `program` and `lvar-types`. On
  success, returns an updated lvar-types map that may contain type information
  for additional lvars; on failure, throws an error.

  The `context` argument can be either :pattern or :value. In pattern context,
  unbound logic variables are permitted within `expr`; in value context, they
  are not."
  [expr program lvar-types context]
  (assert (sequential? expr)
    (str "Invalid predicate expression `" (pr-str expr) "` – should be of form `[name & args]`!"))
  (let [[pred & args] expr
        signature
        (or (get (:preds program) pred)
            (some-> (get (:bwds program) pred) :sig))
        _ (assert signature (str "No such pred or bwd `" pred "`!"))
        arg-types (rest signature)]
    (typecheck-args args arg-types (:types program) lvar-types context)))

;;; compilation helpers

(defn valid-ident?
  "Returns true IFF `ident` is a valid name symbol for a type, predicate, etc."
  [ident]
  (and (symbol? ident) (= (classify-pattern ident) :literal)))

(defn check-signature
  "If `sig` is a valid type signature of the form `[name & arg-types]`, returns
  `sig`, else throws an error. Will also coerce shorthand type signatures
  consisting of only a single ident into the \"proper\" form. Checks argument
  types for validity by looking them up in `types`."
  [sig types]
  (let [sig (cond-> sig (symbol? sig) vector)
        _   (assert (sequential? sig))
        [name & arg-types] sig]
    (assert (valid-ident? name))
    (doseq [arg-type arg-types]
      (assert (contains? types arg-type)
        (str "Type `" arg-type "` not found in provided types!")))
    sig))

;;; compile & typecheck type declarations

(defn compile-terms
  "Given a seq of uncompiled `terms` from a type declaration and a set of
  `type-names` representing legal argument types, returns a map of compiled
  terms in which keys are term names and values are term type signatures."
  [terms type-names]
  (assert (sequential? terms))
  (->> terms
       (map #(check-signature % type-names))
       (map #(do (println (str "    ◦ Term `" (first %) "`")) %))
       (util/indexed-by first)))

(defn compile-types
  "Given a seq of uncompiled `types`, returns a map of compiled types."
  [types]
  (println "◦ Compiling types…")
  (assert (sequential? types))
  ;; TODO include standard types (`nat`, `nat-list`, etc) by default?
  (let [type-names (set (map :name types))]
    (->> types
         (map (fn [type]
                (println (str "  ◦ Type `" (:name type) "`"))
                (assert (map? type))
                (assert (valid-ident? (:name type)))
                (update type :terms compile-terms type-names)))
         (util/indexed-by :name))))

;;; compile & typecheck forward-chaining predicate (pred) declarations

(defn compile-preds
  "Given a seq of uncompiled forward-chaining predicates `preds` and a map of
  compiled `types`, returns a map of compiled forward-chaining predicates."
  [preds types]
  (println "◦ Compiling forward-chaining predicates…")
  (assert (sequential? preds))
  (->> preds
       (map #(check-signature % types))
       (map #(do (println (str "  ◦ Pred `" (first %) "`")) %))
       (util/indexed-by first)))

;;; compile & typecheck backward-chaining predicate (bwd) declarations

(defn precompile-bwd [bwd types]
  (assert (map? bwd))
  (let [[name & arg-types :as sig] (check-signature (:sig bwd) types)]
    (assert (seq arg-types)) ; doesn't make any sense to create a bwd without args
    (assoc bwd :sig sig :name name)))

(defn compile-bwd-case [case bwd-name program]
  (println (str "    ◦ Case `" (pr-str (or (:pattern case) case)) "`"))
  (let [case       (cond-> case (sequential? case) (#(-> {:pattern %})))
        _          (assert (map? case))
        pattern    (:pattern case)
        _          (assert (= (first pattern) bwd-name))
        lvar-types (typecheck-pred-expr pattern program {} :pattern)
        _          (assert lvar-types)
        goals      (:goals case)]
    (if (empty? goals)
      (assoc case :base-case? true)
      (do (assert (every? #(typecheck-pred-expr % program lvar-types :value) goals))
          case))))

(defn compile-bwd [bwd program]
  (println (str "  ◦ Bwd `" (:name bwd) "`"))
  (let [cases (map #(compile-bwd-case % (:name bwd) program) (:cases bwd))]
    (assoc bwd :cases (->> cases (sort-by #(if (:base-case? %) 0 1)) (vec)))))

(defn compile-bwds
  "Given a seq of uncompiled backward-chaining predicates `bwds` and a map of
  compiled `types`, returns a map of compiled backward-chaining predicates."
  [bwds types]
  (println "◦ Compiling backward-chaining predicates…")
  (assert (sequential? bwds))
  (let [;; "precompile" all bwds to validate type signatures & retrieve names
        bwds (map #(precompile-bwd % types) bwds)
        ;; set up program for typechecking, with half-compiled bwds indexed by name
        ;; (for typechecking we just need the signatures, which are validated at precompile)
        program {:types types :bwds (util/indexed-by :name bwds)}]
    ;; actually compile the individual cases of each bwd
    (->> bwds (map #(compile-bwd % program)) (util/indexed-by :name))))

;;; compile & typecheck facts

(defn compile-facts
  "Given a seq of uncompiled `facts`, a map of compiled `types`, and a map of
  compiled `preds`, returns a map of compiled facts."
  [facts types preds]
  (println "◦ Compiling facts…")
  (assert (sequential? facts))
  (let [program {:types types :preds preds}]
    (->> facts
         (map (fn [id fact]
                (println (str "  ◦ Fact `" (pr-str fact) "`"))
                (let [fact (cond-> fact (symbol? fact) vector)]
                  (assert (sequential? fact))
                  (typecheck-pred-expr fact program {} :value)
                  {:id id :expr fact :initial? true}))
              (range))
         (util/indexed-by :id))))

;;; compile & typecheck stages

(defn compile-premises
  "Given a seq of rule `premises`, a `program`, and a map of `lvar-types`,
  returns a tuple `[compiled lvar-types]` in which `compiled` is a seq of
  compiled premises and `lvar-types` is an updated lvar-types map that may
  contain type information for additional lvars."
  [premises program lvar-types]
  (assert (sequential? premises))
  (loop [uncompiled premises
         compiled []
         lvar-types lvar-types]
    (if-let [premise (first uncompiled)]
      (let [premise (cond-> premise (symbol? premise) vector)]
        (assert (sequential? premise))
        (recur (rest uncompiled)
               (conj compiled premise)
               (typecheck-pred-expr premise program lvar-types :pattern)))
      [compiled lvar-types])))

(defn compile-results
  "Given a seq of rule `results`, a `program`, and a map of `lvar-types`,
  returns a seq of compiled results."
  [results program lvar-types]
  (assert (sequential? results))
  (mapv (fn [result]
          (let [result (cond-> result (symbol? result) vector)]
            (assert (sequential? result))
            (typecheck-pred-expr result program lvar-types :value)
            result))
        results))

(defn pred-type
  "Returns the type of predicate (:pred, :bwd or :invalid) that the `ident`
  represents within the `program`."
  [ident program]
  (cond
    (contains? (:preds program) ident) :pred
    (contains? (:bwds program) ident) :bwd
    :else :invalid))

(defn compile-rule [rule program]
  (println (str "    ◦ Rule `" (:name rule "(quiescence)") "`"))
  (assert (map? rule)
    "Rule must be declared as a map!")
  (let [pred-type' #(pred-type (first %) program)
        _      (doseq [premise (:consume rule)]
                 (assert (= (pred-type' premise) :pred)
                   (str "Can't consume instance of backward-chaining predicate `" (first premise) "`!")))
        checks (group-by pred-type' (:check rule))
        _      (assert (not (contains? checks :invalid)))
        ;; TODO should probably be grouping these differently somehow
        [consume    lvar-types] (compile-premises (:consume rule ()) program {})
        [check-pred lvar-types] (compile-premises (:pred checks ()) program lvar-types)
        [check-bwd  lvar-types] (compile-premises (:bwd checks ()) program lvar-types)]
    (-> (assoc rule :consume consume :check-pred check-pred :check-bwd check-bwd)
        (update :results compile-results program lvar-types)
        (dissoc :check))))

(defn compile-quiescence-rule [rule program]
  (assert (map? rule))
  (assert (or (:ending? rule) (contains? (:stages program) (:goto rule)))
    (str "Can't go to stage `" (:goto rule) "`: no such stage exists!"))
  (compile-rule (assoc rule :quiescence-rule? true) program))

(defn compile-stage [stage program]
  (println (str "  ◦ Stage `" (:name stage) "`"))
  (assert (map? stage)
    "Stage must be declared as a map!")
  (assert (valid-ident? (:name stage))
    "Stage name must be a valid identifier!")
  (assert (contains? #{:interactive :ordered :random} (:selection stage))
    "Stage selection mode must be one of :interactive, :ordered, or :random!")
  (-> stage
      (update :rules (partial mapv #(compile-rule % program)))
      (update :quiescence-rules (partial mapv #(compile-quiescence-rule % program)))))

(defn compile-stages [stages types preds bwds]
  (println "◦ Compiling stages…")
  (assert (sequential? stages)
    "Stages must be declared as a list!")
  (assert (seq stages)
    "Must declare at least one stage!")
  (let [program {:types types :preds preds :bwds bwds
                 :stages (util/indexed-by :name stages)}]
    (->> stages (map #(compile-stage % program)) (util/indexed-by :name))))

;;; compile & typecheck the whole program

(defn check-name-conflicts [{:keys [types preds bwds stages] :as program}]
  (let [type-names  (keys types)
        ctor-names  (mapcat (comp keys :terms) (vals types))
        pred-names  (keys preds)
        bwd-names   (keys bwds)
        stage-names (keys stages)
        rule-names  (map :name (mapcat :rules (vals stages)))]
    )) ; TODO actually perform the check

(defn compile-program
  "Main entry point for the entire `riffle.compiler` namespace. Given a valid
  `program`, compiles it and returns the resulting initial state."
  [program]
  (println "Compiling program… ⚙️")
  (let [types  (compile-types  (:types  program))
        preds  (compile-preds  (:preds  program) types)
        bwds   (compile-bwds   (:bwds   program) types)
        facts  (compile-facts  (:facts  program) types preds)
        stages (compile-stages (:stages program) types preds bwds)
        state  {:types types :preds preds :bwds bwds :facts facts
                :stages stages :stage (:stage program)}]
    (check-name-conflicts state)
    (assert (contains? stages (:stage program)))
    (println "Program compiled successfully! 🎉")
    (println)
    state))
