(ns riffle.app
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(enable-console-print!)

(def app-state
  {:program
   {:name "Hello World"
    :interaction-style :cyoa
    :init-stage nil
    :decls {}}
   :preview
   {:running? false :state {} :content []}})

(defn value [ev]
  (.. ev -target -value))

;;; editor

(defcomponent program-info [program owner]
  (render [_]
    (dom/div {:class "program-info"}
      (dom/table {}
        (dom/tr {}
          (dom/td "Name")
          (dom/td
            (dom/input
              {:on-change #(om/update! program :name (value %))
               :type :text
               :value (:name program)})))
        (dom/tr {}
          (dom/td "Interaction style")
          (dom/td
            (dom/select
              {:on-change #(om/update! program :interaction-style (keyword (value %)))
               :value (name (:interaction-style program))}
              (dom/option {:value "cyoa"} "CYOA")
              (dom/option {:value "parser"} "Parser")))
        (dom/tr {}
          (dom/td "Initial stage")
          (dom/td
            (let [stages (->> program :decls vals (filter #(= (:is %) :stage)))]
              (dom/select
                {:on-change #(om/update! program :init-stage (value %))
                 ; TODO automatically set (:init-stage program) to (:id (first stages)) when we go from 0 to 1 stages
                 :value (:init-stage program (:id (first stages)))}
                (when (nil? (:init-stage program))
                  (dom/option {:value nil} "(none)"))
                (for [stage stages]
                  (dom/option {:value (:id stage)} (:name stage))))))))))))

(defcomponent types-view [program owner]
  (render [_]
    (dom/div {:class "types"}
      (dom/h3 "Types")
      ;; TODO build views of individual types
      )))

(defcomponent preds-view [program owner]
  (render [_]
    (dom/div {:class "preds"}
      (dom/h3 "Resources")
      ;; TODO build views of individual preds
      )))

(defcomponent bwds-view [program owner]
  (render [_]
    (dom/div {:class "bwds"}
      (dom/h3 "Functions")
      ;; TODO build views of individual bwds
      )))

(defcomponent stages-view [program owner]
  (render [_]
    (dom/div {:class "stages"}
      (dom/h3 "Stages")
      ;; TODO build views of individual stages
      )))

(defcomponent facts-view [program owner]
  (render [_]
    (dom/div {:class "facts"}
      (dom/h3 "Initial facts")
      ;; TODO build views of individual stages
      )))

(defcomponent editor [program owner]
  (render [_]
    (let [decl-groups (group-by :is (vals (:decls program)))]
      (dom/div {:class "editor"}
        (om/build program-info program)
        (om/build types-view  (assoc program :types  (:type  decl-groups)))
        (om/build preds-view  (assoc program :preds  (:pred  decl-groups)))
        (om/build bwds-view   (assoc program :bwds   (:bwd   decl-groups)))
        (om/build stages-view (assoc program :stages (:stage decl-groups)))
        (om/build facts-view  (assoc program :facts  (:fact  decl-groups)))))))

;;; preview

(defcomponent preview [data owner]
  (render [_]
    (dom/div {:class "preview"}
      (if (:running? data)
        () ; TODO display live preview
        () ; TODO display run button (if no errors in program?)
        ))))

;;; top level

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (om/build editor (:program data)
      (om/build preview (:preview data))))))

(om/root app app-state {:target (js/document.getElementById "app")})
