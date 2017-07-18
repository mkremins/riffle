(ns ceptre-clj.util)

(defn all-distinct?
  "Returns true IFF `coll` contains no duplicate items."
  [coll]
  (= (count coll) (count (distinct coll))))

(defn indexed-by
  "Given a collection `coll` and an indexing function `f`, returns a map from
  `(f item)` to `item` for every `item` in `coll`."
  [f coll]
  (zipmap (map f coll) coll))
