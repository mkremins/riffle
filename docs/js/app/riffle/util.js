// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('riffle.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Returns true IFF `coll` contains no duplicate items.
 */
riffle.util.all_distinct_QMARK_ = (function riffle$util$all_distinct_QMARK_(coll){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll)));
});
/**
 * Clamps the number `n` to the range `[lo hi]`, both inclusive.
 */
riffle.util.clamp = (function riffle$util$clamp(n,lo,hi){
var x__6742__auto__ = (function (){var x__6735__auto__ = n;
var y__6736__auto__ = lo;
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})();
var y__6743__auto__ = hi;
return ((x__6742__auto__ < y__6743__auto__) ? x__6742__auto__ : y__6743__auto__);
});
var specials_16478 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","[","]","{","}","(",")","*","+","?",".","\\","^","$","|"], null);
var escapes_16479 = cljs.core.zipmap(specials_16478,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (specials_16478){
return (function (p1__16477_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__16477_SHARP_)].join('');
});})(specials_16478))
,specials_16478));
/**
 * Escapes regex special chars in the string `s`.
 */
riffle.util.regex_escape = ((function (specials_16478,escapes_16479){
return (function riffle$util$regex_escape(s){
return clojure.string.escape(s,escapes_16479);
});})(specials_16478,escapes_16479))
;
/**
 * Given a collection `coll` and an indexing function `f`, returns a map from
 *   `(f item)` to `item` for every `item` in `coll`.
 */
riffle.util.indexed_by = (function riffle$util$indexed_by(f,coll){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll),coll);
});
/**
 * Given a sequential `coll`, returns a seq of pairs `[index item]` for every
 *   `item` in `coll`.
 */
riffle.util.with_indexes = (function riffle$util$with_indexes(coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),coll);
});
/**
 * Deletes the item at index `idx` in vector `v`.
 */
riffle.util.delete_index = (function riffle$util$delete_index(v,idx){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16480_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__16480_SHARP_),idx);
}),riffle.util.with_indexes(v)));
});
