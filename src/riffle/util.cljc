(ns riffle.util
  (:require [clojure.string :as str]))

(defn all-distinct?
  "Returns true IFF `coll` contains no duplicate items."
  [coll]
  (= (count coll) (count (distinct coll))))

(comment ; doesn't work in CLJS – cmap param to `clojure.string/escape` has to be map
(let [special? #{\- \[ \] \{ \} \( \) \* \+ \? \. \\ \^ \$ \|}]
  (defn regex-escape
    "Escapes regex special chars in the string `s`."
    [s]
    (str/escape s #(when (special? %) (str \\ %)))))
)

(let [specials [\- \[ \] \{ \} \( \) \* \+ \? \. \\ \^ \$ \|]
      escapes  (zipmap specials (map #(str \\ %) specials))]
  (defn regex-escape
    "Escapes regex special chars in the string `s`."
    [s]
    (str/escape s escapes)))

(defn indexed-by
  "Given a collection `coll` and an indexing function `f`, returns a map from
  `(f item)` to `item` for every `item` in `coll`."
  [f coll]
  (zipmap (map f coll) coll))

(defn with-indexes
  "Given a sequential `coll`, returns a seq of pairs `[index item]` for every
  `item` in `coll`."
  [coll]
  (map vector (range) coll))

(defn delete-index
  "Deletes the item at index `idx` in vector `v`."
  [v idx]
  (->> (with-indexes v)
       (remove #(= (first %) idx))
       (mapv second)))
