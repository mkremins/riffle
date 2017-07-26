(ns riffle.cli
  (:require [riffle.compiler :as compiler]
            [riffle.engine :as engine]
            [riffle.examples :as examples] ; for testing
            ))

(defn interactively-choose [choices]
  (doseq [[idx choice] (map vector (range) choices)]
    (println (str idx ":") (engine/choice-text choice)))
  (print "?- ")
  (flush)
  (let [input (read-line)
        selected-idx (read-string input)]
    (or (when (integer? selected-idx)
          (get choices selected-idx))
        (do (println "Invalid index! Please select a valid index.")
            (recur choices)))))

(defn run [program]
  (loop [state (-> program compiler/compile-program engine/run-to-choice-point)]
    (let [choice (interactively-choose (:choices state))
          state' (-> state (engine/apply-transition choice) engine/run-to-choice-point)]
      (recur state'))))
