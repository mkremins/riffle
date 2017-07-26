(ns riffle.editor
  (:require [cljs.reader :as reader]
            [riffle.util :as util]))

(comment ; more "advanced" (but unfinished) parsing that allows infix notation, etc
(defn parse-parts [input-str]
  (let [[_ pre-text] (re-find #"^([^\$]*)" input-str)]
    (->> (re-seq #"\$([A-Za-z0-9_-]+)([^\$]*)" input-str)
         (mapcat (fn [[_ slot-name post-text]]
                   [[:slot slot-name] [:text post-text]]))
         (into (cond-> [] pre-text (conj [:text pre-text]))))))

(defn parts->parser
  "Given a seq of `parts` returned by `parse-parts`, returns a parser: a fn
  that, given a single string argument, returns either a map from slot names to
  matched strings (if the parse is successful) or nil (if the parse fails)."
  [parts]
  (let [slot-names (map second (filter #(= (first %) :slot) parts))
        regex-str
        (reduce (fn [regex-str [part-type part-text]]
                  (case part-type
                    :slot (str regex-str "(.*)")
                    :text (str regex-str (util/regex-escape part-text))))
                \^ parts)
        regex (js/RegExp. (str regex-str \$))]
    (fn [input-str]
      (when-let [[_ & captures] (re-find regex input-str)]
        (zipmap slot-names captures)))))

(defn parse-logic-sentence [input-str]
  (let [parts (parse-parts input-str)]
    (into [(symbol input-str)]
          (map (comp symbol second) (filter #(= (first %) :slot) parts)))))
)

(defn parse-logic-sentence [input-str]
  (reader/read-string (str \[ input-str \])))

;;; types

(defn create-type [program]
  (update program :types conj {:name "" :terms [""]}))

(defn create-term [program type-idx]
  (update-in program [:types type-idx :terms] conj ""))

;;; preds

(defn create-pred [program]
  (update program :preds conj ""))

;;; bwds

(def init-case
  {:pattern "" :base-case? true :subgoals [""]})

(def init-bwd
  {:signature "" :cases [init-case]})

(defn create-bwd [program]
  (update program :bwds conj init-bwd))

(defn create-case [program bwd-idx]
  (update-in program [:bwds bwd-idx :cases] conj init-case))

(defn create-subgoal [program bwd-idx case-idx]
  (update-in program [:bwds bwd-idx :cases case-idx :subgoals] conj ""))

;;; stages

(def init-premise
  {:input-str "" :consume? false})

(def init-rule
  {:choice-text "" :description "" :premises [init-premise] :results [""]})

(defn create-stage [program]
  (update program :stages conj {:name "" :selection :interactive :rules [init-rule]}))

(defn create-rule [program stage-idx]
  (update-in program [:stages stage-idx :rules] conj init-rule))

(defn create-premise [program stage-idx rule-idx]
  (update-in program [:stages stage-idx :rules rule-idx :premises] conj init-premise))

(defn create-result [program stage-idx rule-idx]
  (update-in program [:stages stage-idx :rules rule-idx :results] conj ""))

;;; facts

;; TODO replace :facts with :contexts?
;; (where a context is a named list/set of facts, and the author picks an
;; initial context just like they pick an initial stage)

(defn create-fact [program]
  (update program :facts conj ""))

;;; tie it all together

(def init-program
  (-> {:title "Hello World"
       :interaction-style :cyoa
       :init-stage nil
       :types  []
       :preds  []
       :bwds   []
       :stages []
       :facts  []}
      create-type create-pred create-bwd create-stage create-fact))

(defn- prep-type [type]
  (-> type
      (update :name symbol)
      (update :terms (partial mapv parse-logic-sentence))))

(defn- prep-bwd [bwd]
  (let [sig (parse-logic-sentence (:signature bwd))]
    (-> (assoc bwd :sig sig :name (first sig))
        (update :cases
          (fn [cases]
            (mapv #(-> (update % :pattern parse-logic-sentence)
                       (cond-> (not (:base-case? %))
                               (assoc :goals (mapv parse-logic-sentence (:subgoals %)))))
                  cases))))))

(defn- prep-rule [rule]
  (let [{consumes true checks false} (group-by (comp boolean :consume?) (:premises rule))
        parse-premise (comp parse-logic-sentence :input-str)]
    (-> (assoc rule
          :consume (mapv parse-premise consumes)
          :check   (mapv parse-premise checks)
          :name    (some-> (:choice-text rule) symbol))
        (update :results #(mapv parse-logic-sentence %)))))

(defn- prep-stage [stage]
  (let [{rules false qui-rules true}
        (->> (:rules stage) (mapv prep-rule) (group-by (comp boolean :quiescence-rule?)))]
    (-> (update stage :name symbol)
        (assoc :rules rules :quiescence-rules qui-rules))))

;; TODO this is *way* naïve - it's more a hack to finally get stuff running in the browser than anything else
(defn prep-for-compilation [program]
  (-> program
      (update :types  #(mapv prep-type %))
      (update :preds  #(mapv parse-logic-sentence %))
      (update :bwds   #(mapv prep-bwd %))
      (update :stages #(mapv prep-stage %))
      (update :facts  #(mapv parse-logic-sentence %))
      (assoc :stage (symbol (:init-stage program)))))
