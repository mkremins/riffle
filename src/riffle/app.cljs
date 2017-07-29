(ns riffle.app
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [riffle.compiler :as compiler]
            [riffle.editor :as editor]
            [riffle.engine :as engine]
            [riffle.util :as util]))

(enable-console-print!)

(def app-state
  (atom
    {:program editor/init-program
     :preview {:running? false :state {}}}))

(defn value [ev]
  (.. ev -target -value))

(defn int-value [ev]
  (some-> (value ev) (js/parseInt 10)))

;;; editor

(defn- copy-computed-styles! [from to css-props]
  (let [from-style (js/window.getComputedStyle from)
        to-style   (.-style to)]
    (doseq [prop css-props]
      (.setProperty to-style prop (.getPropertyValue from-style prop)))))

(defcomponent autoresizing-text-input [props owner {:keys [multiline?]}]
  (init-state [_]
    {:fake-input (js/document.createElement (if multiline? "div" "span"))})
  (render-state [_ {:keys [fake-input]}]
    (set! (.-textContent (om/get-state owner :fake-input))
          (if (seq (:value props)) (:value props) (:placeholder props)))
    (if multiline?
      (dom/textarea
        (assoc props
          :style {:height (str (.-offsetHeight fake-input) "px")}))
      (dom/input
        (assoc props
          :style {:width (str (.-offsetWidth fake-input) "px")}
          :type "text"))))
  (did-mount [_]
    ;; Our goal is to make the real input's dimensions match those of the fake
    ;; input, but the fake itself won't have the right dimensions until we copy
    ;; over computed styles from the rendered (real) input. Therefore, we have
    ;; to do things in the following order:
    ;; 1. Render the real input once, with incorrect (zeroed) dimensions.
    ;; 2. Copy over computed styles from the rendered input onto the fake. This
    ;;    ensures the fake will have the right dimensions on the next render
    ;;    (and all subsequent renders).
    ;; 3. Manually force a re-render. This resets the real input's dimensions
    ;;    to the (now correct) dimensions of the fake input.
    (let [fake-input (om/get-state owner :fake-input)]
      (js/document.body.appendChild fake-input)
      (copy-computed-styles! (om/get-node owner) fake-input
        (cond-> ["border" "font" "margin" "padding" "white-space"]
                multiline? (conj "width"))) ; TODO also max-width, min-width?
      (set! (.. fake-input -style -position) "fixed")
      (set! (.. fake-input -style -top) "0")
      (set! (.. fake-input -style -visibility) "hidden")
      (om/refresh! owner)))
  (will-unmount [_]
    (.remove (om/get-state owner :fake-input))))

(defcomponent delete-button [program owner]
  (render [_]
    (let [{:keys [path]} program]
      (dom/button
        {:class "delete-button"
         :on-click
         (:on-click program
           (fn [_] (om/transact! program (butlast path) #(util/delete-index % (last path)))))}
        "×"))))

(defcomponent stage-selector [program owner]
  (render [_]
    (let [{:keys [path]}       program
          selected-stage-idx   (get-in program path)
          containing-stage-idx (when (= (last path) :goto) (second path))]
      (dom/select
        {:on-change
         #(let [stage-idx (int-value %)]
            (when containing-stage-idx
              (om/update! program (conj (vec (butlast path)) :ending?) (= stage-idx -1)))
            (om/update! program path stage-idx))
         :value selected-stage-idx}
        (when (nil? selected-stage-idx)
          (dom/option {:value nil} "(none)"))
        (for [[stage-idx stage] (util/with-indexes (:stages program))
              ;; don't allow selection of the containing stage (for :goto in qui-rules)
              :when (not= stage-idx containing-stage-idx)]
          (dom/option {:value stage-idx}
            (:name stage (str "(unnamed stage " stage-idx ")"))))
        ;; when in qui-rule goto context, add an extra option for "end of story"
        (when containing-stage-idx
          (dom/option {:value -1} "(end)"))))))

;; from https://github.com/omcljs/om/issues/186#issuecomment-51731060
;; (allows us to write components that take children as arguments)
(defn domify
  ([component cursor] (domify component cursor {}))
  ([component cursor m]
    (fn [attrs & children]
      (om/build
        component cursor (assoc m :state {:attrs attrs :children children})))))

(defcomponent collapsible-section [_ owner]
  (init-state [_]
    {:collapsed? false})
  (render-state [_ {:keys [attrs children collapsed?]}]
    (dom/section {:class (cond-> (:class attrs) collapsed? (str " collapsed"))}
      (dom/div {:class "section-header"
                :on-click #(om/update-state! owner :collapsed? not)}
        (dom/span {:class "section-title"} (:title attrs))
        (dom/a {:class "toggle-collapsed"} (if collapsed? "►" "▼")))
      (dom/div {:class "section-body"} children))))

(defcomponent label-table [_ owner]
  (render-state [_ {:keys [children]}]
    (dom/table {:class "label-table"}
      (dom/tbody {}
        (for [[label child] children]
          (dom/tr {}
            (dom/td label)
            (dom/td child)))))))

(defcomponent program-info [program owner]
  (render [_]
    (dom/div {:class "program-info"}
      ((domify label-table program) {}
        ["Title"
         (om/build autoresizing-text-input
           {:on-change #(om/update! program :title (value %))
            :placeholder "(title)"
            :type :text
            :value (:title program)})]
        ["Interaction style"
         (dom/select
           {:on-change #(om/update! program :interaction-style (keyword (value %)))
            :value (name (:interaction-style program))}
           (dom/option {:value "cyoa"} "CYOA")
           (dom/option {:value "parser"} "Parser"))]
        ["Starting context"
         (dom/select
           {:on-change #(om/update! program :context (int-value %))
            :value (:context program)}
           (when (nil? (:context program))
             (dom/option {:value nil} "(none)"))
           (for [[idx context] (util/with-indexes (:contexts program))]
             (dom/option {:value idx}
               (:name context (str "(unnamed context " idx ")")))))]))))

(defcomponent type-view [program owner]
  (render [_]
    (let [idx  (:idx program)
          type (nth (:types program) idx)]
      (dom/div {:class "decl-block type"}
        (dom/div {:class "header"}
          (om/build autoresizing-text-input
            {:class "type-name"
             :on-change #(om/update! program [:types idx :name] (value %))
             :placeholder "(type name)"
             :value (:name type)})
          (om/build delete-button (assoc program :path [:types idx])))
        (dom/div {:class "logic-sentences"}
          (for [[term-idx term] (util/with-indexes (:terms type))]
            (dom/span {:class "logic-sentence term"}
              (om/build autoresizing-text-input
                {:on-change #(om/update! program [:types idx :terms term-idx] (value %))
                 :placeholder "(term)"
                 :value term})
              (om/build delete-button (assoc program :path [:types idx :terms term-idx]))))
            (dom/button
              {:class "create-button"
               :on-click (fn [_] (om/transact! program [] #(editor/create-term % idx)))}
              "Add term"))))))

(defcomponent types-view [program owner]
  (render [_]
    ((domify collapsible-section program)
      {:class "editor-section types"
       :title (str "Types (" (count (:types program)) ")")}
      (om/build-all type-view
        (map #(assoc program :idx %) (range (count (:types program)))))
      (dom/button
        {:class "create-button"
         :on-click #(om/transact! program [] editor/create-type)}
        "Add type"))))

(defcomponent pred-view [program owner]
  (render [_]
    (let [idx  (:idx program)
          pred (nth (:preds program) idx)]
      (dom/div {:class "logic-sentence pred"}
        (om/build autoresizing-text-input
          {:on-change #(om/update! program [:preds idx] (value %))
           :placeholder "(resource type)"
           :value pred})
        (om/build delete-button (assoc program :path [:preds idx]))))))

(defcomponent preds-view [program owner]
  (render [_]
    ((domify collapsible-section program)
      {:class "editor-section preds"
       :title (str "Resource types (" (count (:preds program)) ")")}
      (dom/div {:class "logic-sentences"}
        (om/build-all pred-view
          (map #(assoc program :idx %) (range (count (:preds program)))))
        (dom/button
          {:class "create-button"
           :on-click #(om/transact! program [] editor/create-pred)}
          "Add resource type")))))

(defcomponent case-view [program owner]
  (render [_]
    (let [{:keys [path]} program
          case (get-in program path)]
      (dom/div {:class "decl-block case"}
        (dom/div {:class "header"}
          (om/build autoresizing-text-input
            {:class "case-pattern"
             :on-change #(om/update! program (conj path :pattern) (value %))
             :placeholder "(pattern)"
             :value (:pattern case)})
          (om/build delete-button program))
        ((domify label-table program) {}
          ["Base case?"
           (dom/input
             {:checked (:base-case? case)
              :on-change #(om/transact! program (conj path :base-case?) not)
              :type "checkbox"})])
        (when-not (:base-case? case)
          (dom/div {:class "logic-sentences"}
            (for [[idx subgoal] (util/with-indexes (:subgoals case))]
              (dom/span {:class "logic-sentence subgoal"}
                (om/build autoresizing-text-input
                  {:on-change #(om/update! program (into path [:subgoals idx]) (value %))
                   :placeholder "(subgoal)"
                   :value subgoal})
                (om/build delete-button (update program :path into [:subgoals idx]))))
            (dom/button
              {:class "create-button"
               :on-click (fn [_] (om/transact! program [] #(editor/create-subgoal % (:idx program) (peek path))))}
              "+")))))))

(defcomponent bwd-view [program owner]
  (render [_]
    (let [idx (:idx program)
          bwd (nth (:bwds program) idx)]
      (dom/div {:class "decl-block bwd"}
        (dom/div {:class "header"}
          (om/build autoresizing-text-input
            {:class "bwd-signature"
             :on-change #(om/update! program [:bwds idx :signature] (value %))
             :placeholder "(signature)"
             :value (:signature bwd)})
          (om/build delete-button (assoc program :path [:bwds idx])))
        (dom/div {:class "cases"}
          (om/build-all case-view
            (map #(assoc program :path [:bwds idx :cases %])
                 (range (count (:cases bwd)))))
          (dom/button
            {:class "create-button"
             :on-click (fn [_] (om/transact! program #(editor/create-case % idx)))}
            "Add case"))))))

(defcomponent bwds-view [program owner]
  (render [_]
    ((domify collapsible-section program)
      {:class "editor-section bwds"
       :title (str "Functions (" (count (:bwds program)) ")")}
      (om/build-all bwd-view
        (map #(assoc program :idx %) (range (count (:bwds program)))))
      (dom/button
        {:class "create-button"
         :on-click #(om/transact! program [] editor/create-bwd)}
        "Add function"))))

(defcomponent premise-view [program owner]
  (render [_]
    (let [{:keys [premise-path]} program
          premise (get-in program premise-path)]
      (dom/span {:class "logic-sentence premise"}
        (let [toggle-consume! #(om/transact! program (conj premise-path :consume?) not)]
          (dom/a
            {:class "toggle-consume"
             :on-click toggle-consume!
             :on-key-down #(when (= (.-key %) "Enter") (toggle-consume!))
             :tab-index "0"}
            (if (:consume? premise) "Consume" "Check")))
        (om/build autoresizing-text-input
          {:on-change #(om/update! program (conj premise-path :input-str) (value %))
           :placeholder "(premise)"
           :value (:input-str premise)})
        (om/build delete-button (assoc program :path premise-path))))))

(defcomponent result-view [program owner]
  (render [_]
    (let [{:keys [result-path]} program
          result (get-in program result-path)]
      (dom/span {:class "logic-sentence result"}
        (om/build autoresizing-text-input
          {:on-change #(om/update! program result-path (value %))
           :placeholder "(result)"
           :value result})
        (om/build delete-button (assoc program :path result-path))))))

(defcomponent rule-view [program owner]
  (render [_]
    (let [{:keys [stage-idx rule-idx]} program
          rule-path [:stages stage-idx :rules rule-idx]
          rule      (get-in program rule-path)
          qui-rule? (:quiescence-rule? rule)]
      (dom/div {:class "decl-block rule"}
        (dom/div {:class "header"}
          (om/build autoresizing-text-input
            {:class "rule-choice-text"
             :on-change #(om/update! program (conj rule-path :choice-text) (value %))
             :placeholder "(choice text)"
             :value (:choice-text rule)})
          (om/build delete-button (assoc program :path rule-path)))
        (om/build autoresizing-text-input
          {:class "rule-description"
           :on-change #(om/update! program (conj rule-path :description) (value %))
           :placeholder "(description)"
           :value (:description rule)}
          {:opts {:multiline? true}})
        ((domify collapsible-section program)
          {:class "decl-block-section premises"
           :title (str "Before (" (count (:premises rule)) ")")}
          (dom/div {:class "logic-sentences"}
            (om/build-all premise-view
              (map #(assoc program :premise-path (into rule-path [:premises %]))
                   (range (count (:premises rule)))))
            (dom/button
              {:class "create-button"
               :on-click (fn [_] (om/transact! program [] #(editor/create-premise % stage-idx rule-idx)))}
              "+")))
        ((domify collapsible-section program)
          {:class "decl-block-section results"
           :title (str "After (" (count (:results rule)) ")")}
          (dom/div {:class "logic-sentences"}
            (om/build-all result-view
              (map #(assoc program :result-path (into rule-path [:results %]))
                   (range (count (:results rule)))))
            (dom/button
              {:class "create-button"
               :on-click (fn [_] (om/transact! program [] #(editor/create-result % stage-idx rule-idx)))}
              "+")))
        (when qui-rule?
          ((domify label-table program) {}
            ["Go to stage"
             (om/build stage-selector (assoc program :path (conj rule-path :goto)))]))))))

(defcomponent stage-view [program owner]
  (render [_]
    (let [idx   (:idx program)
          stage (nth (:stages program) idx)
          {rules false qui-rules true}
          (->> (map #(assoc %1 :idx %2) (:rules stage) (range))
               (group-by (comp boolean :quiescence-rule?)))]
      (dom/div {:class "decl-block stage"}
        (dom/div {:class "header"}
          (om/build autoresizing-text-input
            {:class "stage-name"
             :on-change #(om/update! program [:stages idx :name] (value %))
             :placeholder "(stage name)"
             :value (:name stage)})
          (om/build delete-button
            (assoc program :on-click
              (fn [_] (om/transact! program [] #(editor/delete-stage % idx))))))
        ((domify label-table program) {}
          ["Rule selection"
           (dom/select
             {:on-change #(om/update! program [:stages idx :selection] (keyword (value %)))
              :value (name (:selection stage))}
             (for [mode ["interactive" "ordered" "random"]]
               (dom/option {:value mode} (str/capitalize mode))))])
        ((domify collapsible-section program)
          {:class "decl-block-section rules"
           :title (str "Rules (" (count rules) ")")}
          (om/build-all rule-view
            (map #(assoc program :stage-idx idx :rule-idx (:idx %)) rules))
          (dom/button
            {:class "create-button"
             :on-click (fn [_] (om/transact! program [] #(editor/create-rule % idx)))}
            "Add rule"))
        ((domify collapsible-section program)
          {:class "decl-block-section qui-rules"
           :title (str "Fallback rules (" (count qui-rules) ")")}
          (om/build-all rule-view
            (map #(assoc program :stage-idx idx :rule-idx (:idx %)) qui-rules))
          (dom/button
            {:class "create-button"
             :on-click (fn [_] (om/transact! program [] #(editor/create-qui-rule % idx)))}
            "Add fallback rule"))))))

(defcomponent stages-view [program owner]
  (render [_]
    ((domify collapsible-section program)
      {:class "editor-section stages"
       :title (str "Stages (" (count (:stages program)) ")")}
      (om/build-all stage-view
        (map #(assoc program :idx %) (range (count (:stages program)))))
      (dom/button
        {:class "create-button"
         :on-click #(om/transact! program [] editor/create-stage)}
        "Add stage"))))

(defcomponent context-view [program owner]
  (render [_]
    (let [idx     (:idx program)
          context (nth (:contexts program) idx)]
      (dom/div {:class (cond-> "decl-block context"
                               (:selected? context) (str " selected"))}
        (dom/div {:class "header"}
          (om/build autoresizing-text-input
            {:class "context-name"
             :on-change #(om/update! program [:contexts idx :name] (value %))
             :placeholder "(context name)"
             :value (:name context)})
          (om/build delete-button
            (assoc program :on-click
              (fn [_] (om/transact! program [] #(editor/delete-context % idx))))))
        ((domify label-table program) {}
          ["Stage" (om/build stage-selector (assoc program :path [:contexts idx :stage]))])
        ((domify collapsible-section program)
          {:class "decl-block-section facts"
           :title (str "Resources (" (count (:facts context)) ")")}
          (dom/div {:class "logic-sentences"}
            (for [[fact-idx fact] (util/with-indexes (:facts context))
                  :let [fact-path [:contexts idx :facts fact-idx]]]
              (dom/span {:class "logic-sentence fact"}
                (om/build autoresizing-text-input
                  {:on-change #(om/update! program fact-path (value %))
                   :placeholder "(resource)"
                   :value fact})
                (om/build delete-button (assoc program :path fact-path))))
            (dom/button
              {:class "create-button"
               :on-click (fn [_] (om/transact! program [] #(editor/create-fact % idx)))}
              "+")))))))

(defcomponent contexts-view [program owner]
  (render [_]
    ((domify collapsible-section program)
      {:class "editor-section contexts"
       :title (str "Starting contexts (" (count (:contexts program)) ")")}
      (om/build-all context-view
        (map #(assoc program :idx %) (range (count (:contexts program)))))
      (dom/button
        {:class "create-button"
         :on-click #(om/transact! program [] editor/create-context)}
        "Add starting context"))))

(defcomponent editor [program owner]
  (render [_]
    (dom/div {:class "editor"}
      (om/build program-info  program)
      (om/build types-view    program)
      (om/build preds-view    program)
      (om/build bwds-view     program)
      (om/build stages-view   program)
      (om/build contexts-view program))))

;;; preview

(defn stop [player]
  (assoc player :running? false))

(defn advance-or-stop [player]
  (let [state' (engine/run-to-choice-point (:state player))]
    (cond-> (assoc player :state state') (:reached-end? state') stop)))

(defn play [player program]
  (try
    (let [init-state
          (-> program
              editor/prep-for-compilation
              compiler/compile-program)]
      (-> player
          (assoc :running? true :state init-state :error nil)
          advance-or-stop))
    (catch :default err
      (js/console.log err)
      (assoc player :running? false :error err))))

(defn choose [player choice]
  (try
    (-> player
        (update :state engine/apply-transition choice)
        advance-or-stop)
    (catch :default err
      (js/console.log err)
      (assoc player :running? false :error err))))

(defcomponent player [data owner]
  (render [_]
    (let [{:keys [state running?] :as player} (:player data)]
      (dom/div {:class (str "player " (if running? "running" "stopped"))}
        (dom/div {:class "controls"}
          (if running?
            (dom/button
              {:class "stop-button"
               :on-click #(om/transact! data :player stop)}
              "Stop")
            (dom/button
              {:class "play-button"
               :on-click (fn [_] (om/transact! data :player #(play % (:program data))))}
              "Play")))
        (dom/div {:class "content"}
          (for [paragraph (:content state)]
            (dom/p paragraph)))
        (when running?
          (dom/ul {:class "choices"}
            (for [choice (:choices state)]
              (dom/li {:class "choice"}
                (dom/a {:on-click (fn [_] (om/transact! data :player #(choose % choice)))}
                  (engine/choice-text choice))))))
        (when (:error player)
          (dom/p {:class "error"} (.-message (:error player))))))))

;;; top level

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (om/build editor (:program data))
      (om/build player data))))

(om/root app app-state {:target (js/document.getElementById "app")})
