(ns riffle.app
  (:require [cljs.reader :as reader]
            [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent defcomponentmethod]]
            [om-tools.dom :as dom]
            [riffle.compiler :as compiler]
            [riffle.editor :as editor]
            [riffle.engine :as engine]
            [riffle.util :as util]))

(enable-console-print!)

(def app-state
  (atom
    {:editor (editor/init-editor-state!)
     :player {:running? false :state {}}}))

(defn value [ev]
  (.. ev -target -value))

(defn int-value [ev]
  (some-> (value ev) (js/parseInt 10)))

;;; generic UI components

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

;; from https://github.com/omcljs/om/issues/186#issuecomment-51731060
;; (allows us to write components that take children as arguments)
(defn domify
  ([component cursor] (domify component cursor {}))
  ([component cursor m]
    (fn [attrs & children]
      (om/build
        component cursor (assoc m :state {:attrs attrs :children children})))))

(defcomponent label-table [_ owner]
  (render-state [_ {:keys [children]}]
    (dom/table {:class "label-table"}
      (dom/tbody {}
        (for [[label child] children]
          (dom/tr {}
            (dom/td label)
            (dom/td child)))))))

;;; app-specific input components (reusable)

(defn lookup-thing [props]
  (editor/lookup (:program props) (:id props)))

(defcomponent delete-button [props owner]
  (render [_]
    (let [{:keys [id program]} props]
      (dom/button
        {:class "delete-button"
         :on-click (fn [_] (om/transact! program [] #(editor/delete-thing % id)))}
        "×"))))

(defn- display-name [kind]
  (case kind
    :pred    "resource type"
    :bwd     "function"
    :context "starting context"
    :fact    "resource"
    (name kind)))

(defcomponent create-button [props owner]
  (render [_]
    (let [{parent-id :id, :keys [kind program]} props]
      (dom/button
        {:class "create-button"
         :on-click
         (fn [_] (om/transact! program [] #(editor/create-thing % kind parent-id)))}
        (:text props (str "New " (display-name kind)))))))

(defcomponent stage-selector [props owner]
  (render [_]
    (let [{:keys [program]}    props
          {kind :is :as thing} (lookup-thing props)
          stage-id-key         (case kind :context :stage-id :rule :goto-id)
          current-stage-id     (get thing stage-id-key)
          parent-stage-id      (when (= kind :rule) (:parent-id thing))]
      (dom/select
        {:on-change
         #(let [stage-id (int-value %)]
            (when parent-stage-id
              (om/update! thing :ending? (nil? stage-id)))
            (om/update! thing stage-id-key stage-id))
         :value current-stage-id}
        ;; when in qui-rule goto context, nil is legal as an "end of story" value
        (when (or parent-stage-id (nil? current-stage-id))
          (dom/option {:value nil} (if parent-stage-id "(end)" "(none)")))
        (for [stage-id (:stage-ids program)
              ;; don't allow selection of the parent stage (in qui-rule goto context)
              :when (not= stage-id parent-stage-id)]
          (dom/option {:value stage-id}
            (:name (editor/lookup program stage-id) "(unnamed stage)")))))))

;;; app-specific structural UI components
;;; (decl blocks, logic sentences, other reusable building blocks)

(defn- header-text-key [kind]
  (case kind
    (:type :stage :context) :name
    (:bwd :case) :input-str
    :rule :choice-text))

(defn- header-placeholder-text [kind]
  (if (= (header-text-key kind) :name)
    (str (display-name kind) " name")
    (case kind
      :bwd  "signature"
      :case "pattern"
      :rule "choice text")))

(defmulti decl-block-body
  (fn [props owner] (:is (lookup-thing props))))

(defcomponent decl-block [props owner]
  (render [_]
    (let [{kind :is :as thing} (lookup-thing props)
          header-text-key (header-text-key kind)]
      (dom/div {:class (cond-> (str "decl-block " (name kind))
                               (:collapsed? thing) (str " collapsed"))}
        (dom/div {:class "header"}
          (om/build autoresizing-text-input
            {:on-change #(om/update! thing header-text-key (value %))
             :placeholder (str "(" (header-placeholder-text kind) ")")
             :value (get thing header-text-key)})
          (dom/a {:class "toggle-collapsed"
                  :on-click #(om/transact! thing :collapsed? not)}
            (if (:collapsed? thing) "►" "▼"))
          (om/build delete-button props))
        (om/build decl-block-body props)))))

(defcomponent logic-sentence [props owner]
  (render [_]
    (let [{kind :is :as thing} (lookup-thing props)]
      (dom/div {:class (str "logic-sentence " (name kind))}
        (om/build autoresizing-text-input
          {:on-change #(om/update! thing :input-str (value %))
           :placeholder (str "(" (display-name kind) ")")
           :value (:input-str thing)})
        (om/build delete-button props)))))

(defcomponent premise-view [props owner]
  (render [_]
    (let [premise (lookup-thing props)]
      (dom/span {:class "logic-sentence premise"}
        (let [toggle-consume! #(om/transact! premise :consume? not)]
          (dom/a
            {:class "toggle-consume"
             :on-click toggle-consume!
             :on-key-down #(when (= (.-key %) "Enter") (toggle-consume!))
             :tab-index "0"}
            (if (:consume? premise) "Consume" "Check")))
        (om/build autoresizing-text-input
          {:on-change #(om/update! premise :input-str (value %))
           :placeholder "(premise)"
           :value (:input-str premise)})
        (om/build delete-button props)))))

(defcomponent thing-view [props owner]
  (render [_]
    (case (:is (lookup-thing props))
      (:type :bwd :case :stage :rule :context)
        (om/build decl-block props)
      (:term :pred :goal :result :fact)
        (om/build logic-sentence props)
      :premise
        (om/build premise-view props))))

(defn- build-things [props]
  (om/build-all thing-view (map #(assoc props :id %) (:ids props))))

(defcomponent logic-sentences [props owner]
  (render [_]
    (dom/div {:class "logic-sentences"}
      (build-things props)
      (om/build create-button (assoc props :text "+")))))

(defcomponent editor-section [props owner]
  (render [_]
    (let [{:keys [kind]} props]
      (dom/section {:class (str "editor-section " (str (name kind) "s"))}
        (dom/div {:class "section-header"}
          (str (str/capitalize (display-name kind)) "s"))
        (dom/div {:class "section-body"}
          (build-things (assoc props :ids (get (:program props) (editor/kind->ids-key kind))))
          (om/build create-button props))))))

;;; decl block bodies

(defcomponentmethod decl-block-body :type [props owner]
  (render [_]
    (let [type (lookup-thing props)]
      (dom/div {:class "body"}
        (om/build logic-sentences (assoc props :kind :term :ids (:term-ids type)))))))

(defcomponentmethod decl-block-body :bwd [props owner]
  (render [_]
    (let [bwd (lookup-thing props)]
      (dom/div {:class "body"}
        (dom/div {:class "cases"}
          (build-things (assoc props :ids (:case-ids bwd)))
          (om/build create-button (assoc props :kind :case)))))))

(defcomponentmethod decl-block-body :case [props owner]
  (render [_]
    (let [case (lookup-thing props)]
      (dom/div {:class "body"}
        ((domify label-table props) {}
          ["Base case?"
           (dom/input
             {:checked (:base-case? case)
              :on-change #(om/transact! case :base-case? not)
              :type "checkbox"})])
        (when-not (:base-case? case)
          (om/build logic-sentences (assoc props :kind :goal :ids (:goal-ids case))))))))

(defcomponentmethod decl-block-body :stage [props owner]
  (render [_]
    (let [{:keys [program]} props
          stage (lookup-thing props)
          {rule-ids false qui-rule-ids true}
          (group-by #(:quiescence-rule? (editor/lookup program %)) (:rule-ids stage))]
      (dom/div {:class "body"}
        ((domify label-table props) {}
          ["Rule selection"
           (dom/select
             {:on-change #(om/update! stage :selection (keyword (value %)))
              :value (name (:selection stage))}
             (for [mode ["interactive" "ordered" "random"]]
               (dom/option {:value mode} (str/capitalize mode))))])
        (dom/section {:class "decl-block-section rules"}
          (dom/div {:class "section-header"} "Rules")
          (dom/div {:class "section-body"}
            (build-things (assoc props :ids rule-ids))
            (om/build create-button (assoc props :kind :rule))))
        (dom/section {:class "decl-block-section qui-rules"}
          (dom/div {:class "section-header"} "Fallback rules")
          (dom/div {:class "section-body"}
            (build-things (assoc props :ids qui-rule-ids))
            (dom/button
              {:class "create-button"
               :on-click
               (fn [_] (om/transact! program [] #(editor/create-qui-rule % (:id stage))))}
              "New fallback rule")))))))

(defcomponentmethod decl-block-body :rule [props owner]
  (render [_]
    (let [rule (lookup-thing props)]
      (dom/div {:class "body"}
        (om/build autoresizing-text-input
          {:class "rule-description"
           :on-change #(om/update! rule :description (value %))
           :placeholder "(description)"
           :value (:description rule)}
          {:opts {:multiline? true}})
        (dom/section {:class "decl-block-section premises"}
          (dom/div {:class "section-header"} "Before")
          (dom/div {:class "section-body"}
            (om/build logic-sentences (assoc props :kind :premise :ids (:premise-ids rule)))))
        (dom/section {:class "decl-block-section results"}
          (dom/div {:class "section-header"} "After")
          (dom/div {:class "section-body"}
            (om/build logic-sentences (assoc props :kind :result :ids (:result-ids rule)))))
        (when (:quiescence-rule? rule)
          ((domify label-table props) {}
            ["Go to stage" (om/build stage-selector props)]))))))

(defcomponentmethod decl-block-body :context [props owner]
  (render [_]
    (let [context (lookup-thing props)]
      (dom/div {:class "body"}
        ((domify label-table props) {}
          ["Stage" (om/build stage-selector props)])
        (dom/section {:class "decl-block-section facts"}
          (dom/div {:class "section-header"} "Resources")
          (dom/div {:class "section-body"}
            (om/build logic-sentences (assoc props :kind :fact :ids (:fact-ids context)))))))))

;;; top-level editor UI

(defcomponent program-info [editor owner]
  (render [_]
    (let [program (editor/current-program editor)]
      (dom/div {:class "program-info"}
        (dom/div {:class "header story-title"}
          (dom/input
            {:on-change #(om/update! program :title (value %))
             :placeholder "(title)"
             :type "text"
             :value (:title program)})
          (when (> (count (:programs editor)) 1)
            (dom/button
              {:class "delete-button"
               :on-click
               (fn [_] (om/transact! editor [] #(editor/delete-program % (:program editor))))}
              "×")))
        ((domify label-table program) {}
          ["Interaction style"
           (dom/select
             {:on-change #(om/update! program :interaction-style (keyword (value %)))
              :value (name (:interaction-style program))}
             (dom/option {:value "cyoa"} "CYOA")
             (dom/option {:value "parser"} "Parser"))]
          ["Starting context"
           (dom/select
             {:on-change #(om/update! program :context-id (int-value %))
              :value (:context-id program)}
             (when (nil? (:context-id program))
               (dom/option {:value nil} "(none)"))
             (for [id (:context-ids program)]
               (dom/option {:value id}
                 (:name (editor/lookup program id) "(unnamed context)"))))])
        ((domify label-table program) {}
          ["Load saved"
           (dom/select
             {:on-change
              (fn [ev]
                (let [v (int-value ev)]
                  (if (= v -1)
                    (om/transact! editor [] editor/create-program)
                    (om/update! editor :program v))))
              :value (:program editor)}
             (for [[idx program] (util/with-indexes (:programs editor))]
               (dom/option {:value idx} (:title program)))
             (dom/option {:value -1} "(new program)"))]
          ["Copy/paste"
           (dom/input
             {:class "copy-paste"
              :on-change
              (fn [ev]
                (try
                  (om/update! program [] (reader/read-string (value ev)))
                  (catch :default err (js/console.log err))))
              :type "text"
              :value (pr-str program)})])))))

(defcomponent editor [editor owner]
  (render [_]
    (dom/div {:class "editor"}
      (om/build program-info editor)
      (let [program (editor/current-program editor)]
        (for [kind editor/toplevel-kinds]
          (om/build editor-section {:program program :kind kind}))))))

;;; player

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
      (om/build editor (:editor data))
      (om/build player (assoc data :program (editor/current-program (:editor data))))
      (dom/div
        {:class "debug"
         :style {:position "fixed" :right 0 :top 0}}
        (dom/button
          {:on-click #(js/localStorage.removeItem "program")}
          "Clear localStorage")))))

(om/root app app-state
  {:target (js/document.getElementById "app")
   :tx-listen
   (fn [{:keys [old-state new-state]} _]
     (when-not (= (:editor old-state) (:editor new-state))
       (editor/save-editor-state! (:editor new-state))))})
