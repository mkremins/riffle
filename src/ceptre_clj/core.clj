(ns ceptre-clj.core
  (:require [clojure.string :as str]
            [clojure.walk :as walk]
            [ceptre-clj.compiler :as compiler]
            [ceptre-clj.examples :as examples] ; for testing
            ))


;;; identify possible state transitions

(defn unify
  "Attempts to unify `pattern` with `value` in the context of `lvar-bindings`.
  Returns updated lvar-bindings if unification was successful, else nil."
  [pattern value lvar-bindings]
  (case (compiler/classify-pattern pattern)
    :compound ; succeed IFF value is also compound and all the individual parts match
      (when (and (sequential? value) (= (count pattern) (count value)))
        (reduce (fn [lvar-bindings [pattern' value']]
                  (some->> lvar-bindings (unify pattern' value')))
                lvar-bindings
                (map vector pattern value)))
    :literal ; succeed IFF value is identical to the literal pattern
      (when (= pattern value) lvar-bindings)
    :lvar ; if bound, succeed IFF value = bound, else succeed and bind the value 
      (if-let [bound (get lvar-bindings pattern)]
        (when (= bound value) lvar-bindings)
        (assoc lvar-bindings pattern value))
    :wildcard ; succeed and ignore the value
      lvar-bindings))

(defn match-pred
  "Given a `partial-match`, a `premise` representing a predicate test, and a
  map of `facts`, returns a seq of updated partial matches."
  [partial-match premise facts]
  (let [lvar-bindings (:bindings partial-match)
        already-used? (comp (set (map :id (:facts partial-match))) :id)]
    (->> (vals facts)
         ;; to prevent "double-spending", don't reuse facts we've already used earlier in this match
         (remove already-used?)
         ;; convert our seq of facts to a seq of pairs [fact updated-lvar-bindings]
         (map (juxt identity #(unify premise (:expr %) lvar-bindings)))
         ;; only keep facts that were successfully unified with the pattern
         (filter second)
         ;; for any successful unifications, update the :bindings and list of matched :facts
         (map (fn [[fact lvar-bindings]]
                (-> (assoc partial-match :bindings lvar-bindings)
                    (update :facts conj fact)))))))

(defn prove
  "Given a `goal` to prove and a map of backward-chaining predicates `bwds`,
  returns either an lvar-bindings map (if the proof was successful) or nil (if
  a proof could not be found)."
  [goal bwds]
  (loop [cases (:cases (get bwds (first goal)))]
    (when-let [case (first cases)]
      ;; test whether this case's :pattern matches the goal
      (if-let [lvar-bindings (unify (:pattern case) goal {})]
        (if (:base-case? case)
          lvar-bindings ; Q.E.D. – base case met
          (let [subgoals (map #(walk/prewalk-replace lvar-bindings %) (:goals case))]
            (when (every? #(prove % bwds) subgoals)
              lvar-bindings))) ; Q.E.D. – all subgoals met
        (recur (rest cases))))))

(defn test-bwd
  "Given a `partial-match`, a `premise` representing a backward-chaining
  predicate test, and a map of backward-chaining predicates `bwds`, returns
  either an updated partial match (if the test was successful) or nil."
  [partial-match premise bwds]
  (let [;; in premise, substitute bound lvars with their values to obtain our initial goal
        goal (walk/prewalk-replace (:bindings partial-match) premise)]
    (when-let [new-bindings (prove goal bwds)]
      (update partial-match :bindings merge new-bindings))))

(defn possible-applications
  "Given a `rule` and a `state`, returns a seq of possible applications
  of the rule to the state."
  [rule state]
  (let [partial-matches
        (reduce (fn [partial-matches premise]
                  (mapcat #(match-pred % premise (:facts state)) partial-matches))
                [{:rule rule :bindings {} :facts []}] ; initial partial match
                (into (:consume rule) (:check-pred rule))) ; all :pred premises for the rule
        partial-matches
        (reduce (fn [partial-matches premise]
                  (->> partial-matches
                       (map #(test-bwd % premise (:bwds state)))
                       (filter identity)))
                partial-matches
                (:check-bwd rule))]
    partial-matches))

(defn current-stage
  "Given a `state`, returns the currently active stage."
  [state]
  (let [stage (get (:stages state) (:stage state))]
    (assert stage
      (str "Stage " (:stage state) " not found!"))
    stage))

(defn possible-transitions
  "Given a `state`, returns a vector of possible state transitions."
  [state]
  (let [stage (current-stage state)
        rule-applications (vec (mapcat #(possible-applications % state) (:rules stage)))]
    (if (seq rule-applications)
      rule-applications
      (let [quiescence-rule-applications
            (vec (mapcat #(possible-applications % state) (:quiescence-rules stage)))]
        (assert (seq quiescence-rule-applications)
          "No applicable rules or quiescence rules for state!")
        quiescence-rule-applications))))


;;; select and apply a state transition

(defn transition->str
  "Converts a `transition` to a presentable string."
  [transition]
  (str (:name (:rule transition) "(quiescence)") " "
       (->> (:bindings transition) (sort-by first) (map second) (str/join " "))))

(defn interactively-select-transition [transitions]
  (loop []
    (doseq [[idx transition] (map vector (range) transitions)]
      (println (str idx ":") (transition->str transition)))
    (print "?- ")
    (flush)
    (let [input (read-line)
          selected-idx (read-string input)]
      (or (when (integer? selected-idx)
            (get transitions selected-idx))
          (do (println "Invalid index! Please select a valid index.")
              (recur))))))

(defn apply-transition
  "Applies `transition` to `state` and returns the resulting updated state."
  [state transition]
  (let [rule (:rule transition)
        ;; remove consumed facts from (:facts state)
        consumed-facts
        (->> (:facts transition)
             (split-at (count (:consume rule)))
             (first))
        state' (reduce #(update %1 :facts dissoc (:id %2)) state consumed-facts)
        ;; add new facts from (:results rule) to (:facts state)
        ;; TODO: should probably annotate these with causality info here
        next-fact-id (inc (apply max (keys (:facts state))))
        new-facts
        (->> (:results rule)
             (walk/prewalk-replace (:bindings transition)) ; replace lvars with bound values
             (map (fn [offset fact]
                    {:id (+ next-fact-id offset) :expr fact})
                  (range)))
        state' (reduce #(assoc-in %1 [:facts (:id %2)] %2) state' new-facts)
        ;; if rule was a quiescence rule, set the current stage to (:goto rule)
        stage' (:goto rule)
        state' (cond-> state' stage' (assoc :stage stage'))]
    state'))

(defn select-transition
  "Given a `state`, selects and returns a legal state transition."
  [state]
  (let [transitions (possible-transitions state)
        quiescent?  (:quiescence-rule? (:rule (first transitions)))
        ;; quiescence rules are always selected randomly, at least for now – TODO?
        selection-mode (if quiescent? :random (:selection (current-stage state)))]
    (case selection-mode
      :interactive (interactively-select-transition transitions)
      :ordered     (first transitions)
      :random      (rand-nth transitions))))


;;; testing

(defn run [program]
  (loop [state (compiler/compile-program program)]
    (let [transition (select-transition state)
          state' (apply-transition state transition)]
      (recur state'))))
