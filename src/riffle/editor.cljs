(ns riffle.editor
  (:require [cljs.reader :as reader]
            [clojure.string :as str]
            [riffle.examples :as examples]
            [riffle.util :as util]))

(defn lookup
  "Looks up and returns the thing with ID `id` in `program`, or nil if no such
  thing exists."
  [program id]
  (get (:things program) id))

(defn set-thing-prop [program id prop value]
  (assoc-in program [:things id prop] value))

;;; schema (+ helper fns for traversing program structure)

(def toplevel-kinds
  [:type :pred :bwd :stage :context])

(def thing-templates
  {:type     {:name "" :term-ids []}
   :term     {:input-str ""}
   :pred     {:input-str ""}
   :bwd      {:input-str "" :case-ids []}
   :case     {:input-str "" :base-case? true :goal-ids []}
   :goal     {:input-str ""}
   :stage    {:name "" :selection :interactive :rule-ids [] :qui-rule-ids []}
   :rule     {:choice-text "" :description "" :premise-ids [] :result-ids []}
   :qui-rule {:choice-text "" :description "" :premise-ids [] :result-ids [] :goto-id nil}
   :premise  {:input-str "" :consume? false}
   :result   {:input-str ""}
   :context  {:name "" :stage-id nil :fact-ids []}
   :fact     {:input-str ""}})

(defn- ids-key? [k]
  (str/ends-with? (name k) "-ids"))

(defn kind->ids-key [kind]
  (keyword (str (name kind) "-ids")))

(defn- ids-key->kind [ids-key]
  (assert (ids-key? ids-key))
  (keyword (str/replace (name ids-key) #"-ids$" "")))

;;; create things

(declare create-thing)

(defn- next-id [program]
  [(:next-id program) (update program :next-id inc)])

(defn- create-kids [program {:keys [id] :as thing}]
  (reduce
    (fn [program kids-key]
      (let [kid-kind (ids-key->kind kids-key)]
        (create-thing program kid-kind id)))
    program
    (filter ids-key? (keys thing))))

(defn- add-to-parent [program {:keys [id parent-id], kind :is :as thing}]
  (let [kids-key  (kind->ids-key kind)
        kids-path (cond->> [kids-key] parent-id (into [:things parent-id]))]
    (update-in program kids-path (fnil conj []) id)))

(defn create-thing
  "Given a `program`, a `kind` of thing to create, and an optional `parent-id`
  specifying the parent of the created thing, returns an updated program in
  which a new thing of the appropriate kind has been created. The :prev-id key
  in the updated program will point to the ID of the newly-created thing."
  ([program kind] (create-thing program kind nil))
  ([program kind parent-id]
    (assert (contains? thing-templates kind)
      (str "Invalid kind of thing to create: " kind))
    (if (contains? (set toplevel-kinds) kind)
      (assert (not parent-id)
        (str "A thing of kind " kind " may not have a parent"))
      (assert parent-id
        (str "A thing of kind " kind " must have a parent")))
    ;; TODO assert parent is appropriate kind for the kind of kid we're creating?
    (let [[id program'] (next-id program)
          template (get thing-templates kind)
          thing (assoc template :id id :is kind :parent-id parent-id)]
      (-> program'
          (assoc-in [:things id] thing)
          (create-kids thing)
          (add-to-parent thing)
          (assoc :prev-id id)))))

;;; delete things

(declare delete-thing)

(defn- delete-kids [program thing]
  (let [kids-keys (filter ids-key? (keys thing))
        kid-ids   (mapcat #(get thing %) kids-keys)]
    (reduce delete-thing program kid-ids)))

(defn- remove-from-parent [program {:keys [id parent-id], kind :is :as thing}]
  (let [kids-key  (kind->ids-key kind)
        kids-path (cond->> [kids-key] parent-id (into [:things parent-id]))]
    (update-in program kids-path #(vec (remove #{id} %)))))

(defn- cleanup-dependents [program {:keys [id] :as thing}]
  (case (:is thing)
    :context
      (cond-> program (= (:context program) id) (assoc :context nil))
    :stage
      (reduce (fn [program [thing-id thing]]
                (cond-> program
                  (= (:goto-id thing) id)
                    (set-thing-prop thing-id :goto-id nil)
                  (= (:stage-id thing) id)
                    (set-thing-prop thing-id :stage-id nil)))
              program (:things program))
    ;else
      program))

(defn delete-thing
  "Returns an updated `program` in which the thing with ID `id`, and all its
  descendants, have been deleted. Also performs any necessary cleanup on other
  things that depended on the deleted thing."
  [program id]
  (let [thing (lookup program id)]
    ;; TODO assert thing actually exists?
    (-> program
        (delete-kids thing)
        (remove-from-parent thing)
        (cleanup-dependents thing)
        (update :things dissoc id))))

;;; create and delete whole programs

(defn current-program [editor]
  (nth (:programs editor) (:program editor)))

(def init-program
  (reduce create-thing
    {:title ""
     :interaction-style :cyoa
     :context-id nil
     :things {}
     :next-id 0}
    toplevel-kinds))

(defn create-program [editor]
  (let [editor' (update editor :programs conj init-program)]
    (assoc editor' :program (dec (count (:programs editor'))))))

(defn delete-program [editor idx]
  (let [editor' (update editor :programs util/delete-index idx)]
    (update editor' :program #(util/clamp % 0 (dec (count (:programs editor')))))))

;;; save and load editor state

(defn load-editor-state! []
  (try
    (when-let [saved (reader/read-string (js/localStorage.getItem "editor"))]
      (assert (map? saved) "Saved editor state must be an EDN map")
      (assert (vector? (:programs saved)) "Saved programs must be an EDN vector")
      (doseq [saved-program (:programs saved)]
        (assert (map? saved-program) "Saved program must be an EDN map")
        (assert (string? (:title saved-program)) "Saved program :title must be an EDN string"))
      saved)
    (catch :default err ; TODO report this error in some user-visible way?
      (js/console.log err)
      nil)))

(defn save-editor-state! [editor]
  (js/localStorage.setItem "editor" (pr-str editor)))

(defn init-editor-state! []
  (or ;(load-editor-state!)
      {:programs [examples/meetngreet] :program 0}))

;;; convert editor program format to a format the compiler will accept

(defn- pull-in-kids [program thing]
  (reduce
    (fn [thing kids-key]
      (let [kids-key' (keyword (str (name (ids-key->kind kids-key)) "s"))]
        (-> thing
            (dissoc kids-key :parent-id)
            (assoc kids-key'
              (->> (get thing kids-key)
                   (map #(lookup program %))
                   (mapv #(pull-in-kids program %)))))))
    thing
    (filter ids-key? (keys thing))))

(defn- parse-logic-sentence [{:keys [input-str]}]
  (reader/read-string (str \[ input-str \])))

(defn- prep-type [type]
  (-> type
      (update :name symbol)
      (update :terms (partial mapv parse-logic-sentence))))

(defn- prep-bwd [bwd]
  (let [sig (parse-logic-sentence bwd)]
    (-> (assoc bwd :sig sig :name (first sig))
        (update :cases
          (fn [cases]
            (mapv (fn [case]
                    (-> (dissoc case :input-str)
                        (assoc :pattern (parse-logic-sentence case))
                        (update :goals
                          #(when-not (:base-case? case) (mapv parse-logic-sentence %)))))
                  cases))))))

(defn- prep-qui-rule [{:keys [goto-id] :as qui-rule} program]
  (let [qui-rule' (dissoc qui-rule :goto-id)]
    (if (nil? goto-id)
      (assoc qui-rule' :ending? true)
      (assoc qui-rule' :goto (some-> (lookup program goto-id) :name symbol)))))

(defn- prep-rule [rule program]
  (let [{consumes true checks false} (group-by (comp boolean :consume?) (:premises rule))]
    (-> (assoc rule
          :consume (mapv parse-logic-sentence consumes)
          :check   (mapv parse-logic-sentence checks)
          :name    (some-> (:choice-text rule) symbol))
        (dissoc :premises)
        (update :results #(mapv parse-logic-sentence %))
        (cond-> (= (:is rule) :qui-rule) (prep-qui-rule program)))))

(defn- prep-stage [stage program]
  (assert (and (string? (:name stage)) (seq (:name stage)))
    (str "Invalid stage name: " (pr-str (:name stage))))
  (-> (update stage :name symbol)
      (update :rules (partial mapv #(prep-rule % program)))
      (assoc :quiescence-rules (mapv #(prep-rule % program) (:qui-rules stage)))
      (dissoc :qui-rules)))

(defn prep-for-compilation [program]
  (let [context (pull-in-kids program (lookup program (:context-id program)))]
    (assert context "Must specify a valid starting context")
    (-> (pull-in-kids program program)
        (dissoc :contexts :context-id)
        (update :types  #(mapv prep-type %))
        (update :preds  #(mapv parse-logic-sentence %))
        (update :bwds   #(mapv prep-bwd %))
        (update :stages (partial mapv #(prep-stage % program)))
        (assoc
          :stage (symbol (:name (lookup program (:stage-id context))))
          :facts (mapv parse-logic-sentence (:facts context))))))
