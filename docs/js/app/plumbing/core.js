// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.cst$kw$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args20194 = [];
var len__7479__auto___20209 = arguments.length;
var i__7480__auto___20210 = (0);
while(true){
if((i__7480__auto___20210 < len__7479__auto___20209)){
args20194.push((arguments[i__7480__auto___20210]));

var G__20211 = (i__7480__auto___20210 + (1));
i__7480__auto___20210 = G__20211;
continue;
} else {
}
break;
}

var G__20202 = args20194.length;
switch (G__20202) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20194.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7498__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20203) : f.call(null,G__20203));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20205 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20204,G__20205) : f.call(null,G__20204,G__20205));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20207 = x1;
var G__20208 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20206,G__20207,G__20208) : f.call(null,G__20206,G__20207,G__20208));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq20195){
var G__20196 = cljs.core.first(seq20195);
var seq20195__$1 = cljs.core.next(seq20195);
var G__20197 = cljs.core.first(seq20195__$1);
var seq20195__$2 = cljs.core.next(seq20195__$1);
var G__20198 = cljs.core.first(seq20195__$2);
var seq20195__$3 = cljs.core.next(seq20195__$2);
var G__20199 = cljs.core.first(seq20195__$3);
var seq20195__$4 = cljs.core.next(seq20195__$3);
var G__20200 = cljs.core.first(seq20195__$4);
var seq20195__$5 = cljs.core.next(seq20195__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__20196,G__20197,G__20198,G__20199,G__20200,seq20195__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__19932__auto__ = (function (){var G__20230 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20230) : cljs.core.atom.call(null,G__20230));
})();
var seq__20231_20245 = cljs.core.seq(m);
var chunk__20232_20246 = null;
var count__20233_20247 = (0);
var i__20234_20248 = (0);
while(true){
if((i__20234_20248 < count__20233_20247)){
var vec__20235_20249 = chunk__20232_20246.cljs$core$IIndexed$_nth$arity$2(null,i__20234_20248);
var k_20250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235_20249,(0),null);
var v_20251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235_20249,(1),null);
var m20229_20252 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20238_20253 = m_atom__19932__auto__;
var G__20239_20254 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20229_20252,k_20250,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20251) : f.call(null,v_20251)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20238_20253,G__20239_20254) : cljs.core.reset_BANG_.call(null,G__20238_20253,G__20239_20254));

var G__20255 = seq__20231_20245;
var G__20256 = chunk__20232_20246;
var G__20257 = count__20233_20247;
var G__20258 = (i__20234_20248 + (1));
seq__20231_20245 = G__20255;
chunk__20232_20246 = G__20256;
count__20233_20247 = G__20257;
i__20234_20248 = G__20258;
continue;
} else {
var temp__4657__auto___20259 = cljs.core.seq(seq__20231_20245);
if(temp__4657__auto___20259){
var seq__20231_20260__$1 = temp__4657__auto___20259;
if(cljs.core.chunked_seq_QMARK_(seq__20231_20260__$1)){
var c__7215__auto___20261 = cljs.core.chunk_first(seq__20231_20260__$1);
var G__20262 = cljs.core.chunk_rest(seq__20231_20260__$1);
var G__20263 = c__7215__auto___20261;
var G__20264 = cljs.core.count(c__7215__auto___20261);
var G__20265 = (0);
seq__20231_20245 = G__20262;
chunk__20232_20246 = G__20263;
count__20233_20247 = G__20264;
i__20234_20248 = G__20265;
continue;
} else {
var vec__20240_20266 = cljs.core.first(seq__20231_20260__$1);
var k_20267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20240_20266,(0),null);
var v_20268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20240_20266,(1),null);
var m20229_20269 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20243_20270 = m_atom__19932__auto__;
var G__20244_20271 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20229_20269,k_20267,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20268) : f.call(null,v_20268)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20243_20270,G__20244_20271) : cljs.core.reset_BANG_.call(null,G__20243_20270,G__20244_20271));

var G__20272 = cljs.core.next(seq__20231_20260__$1);
var G__20273 = null;
var G__20274 = (0);
var G__20275 = (0);
seq__20231_20245 = G__20272;
chunk__20232_20246 = G__20273;
count__20233_20247 = G__20274;
i__20234_20248 = G__20275;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__)));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__19932__auto__ = (function (){var G__20293 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20293) : cljs.core.atom.call(null,G__20293));
})();
var seq__20294_20308 = cljs.core.seq(m);
var chunk__20295_20309 = null;
var count__20296_20310 = (0);
var i__20297_20311 = (0);
while(true){
if((i__20297_20311 < count__20296_20310)){
var vec__20298_20312 = chunk__20295_20309.cljs$core$IIndexed$_nth$arity$2(null,i__20297_20311);
var k_20313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20298_20312,(0),null);
var v_20314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20298_20312,(1),null);
var m20292_20315 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20301_20316 = m_atom__19932__auto__;
var G__20302_20317 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20292_20315,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20313) : f.call(null,k_20313)),v_20314);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20301_20316,G__20302_20317) : cljs.core.reset_BANG_.call(null,G__20301_20316,G__20302_20317));

var G__20318 = seq__20294_20308;
var G__20319 = chunk__20295_20309;
var G__20320 = count__20296_20310;
var G__20321 = (i__20297_20311 + (1));
seq__20294_20308 = G__20318;
chunk__20295_20309 = G__20319;
count__20296_20310 = G__20320;
i__20297_20311 = G__20321;
continue;
} else {
var temp__4657__auto___20322 = cljs.core.seq(seq__20294_20308);
if(temp__4657__auto___20322){
var seq__20294_20323__$1 = temp__4657__auto___20322;
if(cljs.core.chunked_seq_QMARK_(seq__20294_20323__$1)){
var c__7215__auto___20324 = cljs.core.chunk_first(seq__20294_20323__$1);
var G__20325 = cljs.core.chunk_rest(seq__20294_20323__$1);
var G__20326 = c__7215__auto___20324;
var G__20327 = cljs.core.count(c__7215__auto___20324);
var G__20328 = (0);
seq__20294_20308 = G__20325;
chunk__20295_20309 = G__20326;
count__20296_20310 = G__20327;
i__20297_20311 = G__20328;
continue;
} else {
var vec__20303_20329 = cljs.core.first(seq__20294_20323__$1);
var k_20330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20303_20329,(0),null);
var v_20331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20303_20329,(1),null);
var m20292_20332 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20306_20333 = m_atom__19932__auto__;
var G__20307_20334 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20292_20332,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20330) : f.call(null,k_20330)),v_20331);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20306_20333,G__20307_20334) : cljs.core.reset_BANG_.call(null,G__20306_20333,G__20307_20334));

var G__20335 = cljs.core.next(seq__20294_20323__$1);
var G__20336 = null;
var G__20337 = (0);
var G__20338 = (0);
seq__20294_20308 = G__20335;
chunk__20295_20309 = G__20336;
count__20296_20310 = G__20337;
i__20297_20311 = G__20338;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__)));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__19932__auto__ = (function (){var G__20350 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20350) : cljs.core.atom.call(null,G__20350));
})();
var seq__20351_20359 = cljs.core.seq(ks);
var chunk__20352_20360 = null;
var count__20353_20361 = (0);
var i__20354_20362 = (0);
while(true){
if((i__20354_20362 < count__20353_20361)){
var k_20363 = chunk__20352_20360.cljs$core$IIndexed$_nth$arity$2(null,i__20354_20362);
var m20349_20364 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20355_20365 = m_atom__19932__auto__;
var G__20356_20366 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20349_20364,k_20363,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20363) : f.call(null,k_20363)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20355_20365,G__20356_20366) : cljs.core.reset_BANG_.call(null,G__20355_20365,G__20356_20366));

var G__20367 = seq__20351_20359;
var G__20368 = chunk__20352_20360;
var G__20369 = count__20353_20361;
var G__20370 = (i__20354_20362 + (1));
seq__20351_20359 = G__20367;
chunk__20352_20360 = G__20368;
count__20353_20361 = G__20369;
i__20354_20362 = G__20370;
continue;
} else {
var temp__4657__auto___20371 = cljs.core.seq(seq__20351_20359);
if(temp__4657__auto___20371){
var seq__20351_20372__$1 = temp__4657__auto___20371;
if(cljs.core.chunked_seq_QMARK_(seq__20351_20372__$1)){
var c__7215__auto___20373 = cljs.core.chunk_first(seq__20351_20372__$1);
var G__20374 = cljs.core.chunk_rest(seq__20351_20372__$1);
var G__20375 = c__7215__auto___20373;
var G__20376 = cljs.core.count(c__7215__auto___20373);
var G__20377 = (0);
seq__20351_20359 = G__20374;
chunk__20352_20360 = G__20375;
count__20353_20361 = G__20376;
i__20354_20362 = G__20377;
continue;
} else {
var k_20378 = cljs.core.first(seq__20351_20372__$1);
var m20349_20379 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20357_20380 = m_atom__19932__auto__;
var G__20358_20381 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20349_20379,k_20378,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20378) : f.call(null,k_20378)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20357_20380,G__20358_20381) : cljs.core.reset_BANG_.call(null,G__20357_20380,G__20358_20381));

var G__20382 = cljs.core.next(seq__20351_20372__$1);
var G__20383 = null;
var G__20384 = (0);
var G__20385 = (0);
seq__20351_20359 = G__20382;
chunk__20352_20360 = G__20383;
count__20353_20361 = G__20384;
i__20354_20362 = G__20385;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__)));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__19932__auto__ = (function (){var G__20397 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20397) : cljs.core.atom.call(null,G__20397));
})();
var seq__20398_20406 = cljs.core.seq(vs);
var chunk__20399_20407 = null;
var count__20400_20408 = (0);
var i__20401_20409 = (0);
while(true){
if((i__20401_20409 < count__20400_20408)){
var v_20410 = chunk__20399_20407.cljs$core$IIndexed$_nth$arity$2(null,i__20401_20409);
var m20396_20411 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20402_20412 = m_atom__19932__auto__;
var G__20403_20413 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20396_20411,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20410) : f.call(null,v_20410)),v_20410);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20402_20412,G__20403_20413) : cljs.core.reset_BANG_.call(null,G__20402_20412,G__20403_20413));

var G__20414 = seq__20398_20406;
var G__20415 = chunk__20399_20407;
var G__20416 = count__20400_20408;
var G__20417 = (i__20401_20409 + (1));
seq__20398_20406 = G__20414;
chunk__20399_20407 = G__20415;
count__20400_20408 = G__20416;
i__20401_20409 = G__20417;
continue;
} else {
var temp__4657__auto___20418 = cljs.core.seq(seq__20398_20406);
if(temp__4657__auto___20418){
var seq__20398_20419__$1 = temp__4657__auto___20418;
if(cljs.core.chunked_seq_QMARK_(seq__20398_20419__$1)){
var c__7215__auto___20420 = cljs.core.chunk_first(seq__20398_20419__$1);
var G__20421 = cljs.core.chunk_rest(seq__20398_20419__$1);
var G__20422 = c__7215__auto___20420;
var G__20423 = cljs.core.count(c__7215__auto___20420);
var G__20424 = (0);
seq__20398_20406 = G__20421;
chunk__20399_20407 = G__20422;
count__20400_20408 = G__20423;
i__20401_20409 = G__20424;
continue;
} else {
var v_20425 = cljs.core.first(seq__20398_20419__$1);
var m20396_20426 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20404_20427 = m_atom__19932__auto__;
var G__20405_20428 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20396_20426,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20425) : f.call(null,v_20425)),v_20425);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20404_20427,G__20405_20428) : cljs.core.reset_BANG_.call(null,G__20404_20427,G__20405_20428));

var G__20429 = cljs.core.next(seq__20398_20419__$1);
var G__20430 = null;
var G__20431 = (0);
var G__20432 = (0);
seq__20398_20406 = G__20429;
chunk__20399_20407 = G__20430;
count__20400_20408 = G__20431;
i__20401_20409 = G__20432;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__)));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__20433){
var vec__20441 = p__20433;
var seq__20442 = cljs.core.seq(vec__20441);
var first__20443 = cljs.core.first(seq__20442);
var seq__20442__$1 = cljs.core.next(seq__20442);
var k = first__20443;
var ks = seq__20442__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6392__auto__ = ks;
if(and__6392__auto__){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__19932__auto__ = (function (){var G__20461 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20461) : cljs.core.atom.call(null,G__20461));
})();
var seq__20462_20476 = cljs.core.seq(x);
var chunk__20463_20477 = null;
var count__20464_20478 = (0);
var i__20465_20479 = (0);
while(true){
if((i__20465_20479 < count__20464_20478)){
var vec__20466_20480 = chunk__20463_20477.cljs$core$IIndexed$_nth$arity$2(null,i__20465_20479);
var k_20481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466_20480,(0),null);
var v_20482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466_20480,(1),null);
var m20460_20483 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20469_20484 = m_atom__19932__auto__;
var G__20470_20485 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20460_20483,((typeof k_20481 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_20481):k_20481),plumbing$core$keywordize_map(v_20482));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20469_20484,G__20470_20485) : cljs.core.reset_BANG_.call(null,G__20469_20484,G__20470_20485));

var G__20486 = seq__20462_20476;
var G__20487 = chunk__20463_20477;
var G__20488 = count__20464_20478;
var G__20489 = (i__20465_20479 + (1));
seq__20462_20476 = G__20486;
chunk__20463_20477 = G__20487;
count__20464_20478 = G__20488;
i__20465_20479 = G__20489;
continue;
} else {
var temp__4657__auto___20490 = cljs.core.seq(seq__20462_20476);
if(temp__4657__auto___20490){
var seq__20462_20491__$1 = temp__4657__auto___20490;
if(cljs.core.chunked_seq_QMARK_(seq__20462_20491__$1)){
var c__7215__auto___20492 = cljs.core.chunk_first(seq__20462_20491__$1);
var G__20493 = cljs.core.chunk_rest(seq__20462_20491__$1);
var G__20494 = c__7215__auto___20492;
var G__20495 = cljs.core.count(c__7215__auto___20492);
var G__20496 = (0);
seq__20462_20476 = G__20493;
chunk__20463_20477 = G__20494;
count__20464_20478 = G__20495;
i__20465_20479 = G__20496;
continue;
} else {
var vec__20471_20497 = cljs.core.first(seq__20462_20491__$1);
var k_20498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471_20497,(0),null);
var v_20499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471_20497,(1),null);
var m20460_20500 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__));
var G__20474_20501 = m_atom__19932__auto__;
var G__20475_20502 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20460_20500,((typeof k_20498 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_20498):k_20498),plumbing$core$keywordize_map(v_20499));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20474_20501,G__20475_20502) : cljs.core.reset_BANG_.call(null,G__20474_20501,G__20475_20502));

var G__20503 = cljs.core.next(seq__20462_20491__$1);
var G__20504 = null;
var G__20505 = (0);
var G__20506 = (0);
seq__20462_20476 = G__20503;
chunk__20463_20477 = G__20504;
count__20464_20478 = G__20505;
i__20465_20479 = G__20506;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19932__auto__) : cljs.core.deref.call(null,m_atom__19932__auto__)));
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__20008__auto__ = temp__4655__auto__;
return cljs.core.val(pair__20008__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__20507 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__20508 = cljs.core.next(ks);
m = G__20507;
ks = G__20508;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20529 = arguments.length;
var i__7480__auto___20530 = (0);
while(true){
if((i__7480__auto___20530 < len__7479__auto___20529)){
args__7486__auto__.push((arguments[i__7480__auto___20530]));

var G__20531 = (i__7480__auto___20530 + (1));
i__7480__auto___20530 = G__20531;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__6404__auto__ = m;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7184__auto__ = (function plumbing$core$iter__20511(s__20512){
return (new cljs.core.LazySeq(null,(function (){
var s__20512__$1 = s__20512;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20512__$1);
if(temp__4657__auto__){
var s__20512__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20512__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20512__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20514 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20513 = (0);
while(true){
if((i__20513 < size__7183__auto__)){
var vec__20523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20513);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__20514,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20532 = (i__20513 + (1));
i__20513 = G__20532;
continue;
} else {
var G__20533 = (i__20513 + (1));
i__20513 = G__20533;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20514),plumbing$core$iter__20511(cljs.core.chunk_rest(s__20512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20514),null);
}
} else {
var vec__20526 = cljs.core.first(s__20512__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20526,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__20511(cljs.core.rest(s__20512__$2)));
} else {
var G__20534 = cljs.core.rest(s__20512__$2);
s__20512__$1 = G__20534;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq20509){
var G__20510 = cljs.core.first(seq20509);
var seq20509__$1 = cljs.core.next(seq20509);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__20510,seq20509__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20539 = arguments.length;
var i__7480__auto___20540 = (0);
while(true){
if((i__7480__auto___20540 < len__7479__auto___20539)){
args__7486__auto__.push((arguments[i__7480__auto___20540]));

var G__20541 = (i__7480__auto___20540 + (1));
i__7480__auto___20540 = G__20541;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq20535){
var G__20536 = cljs.core.first(seq20535);
var seq20535__$1 = cljs.core.next(seq20535);
var G__20537 = cljs.core.first(seq20535__$1);
var seq20535__$2 = cljs.core.next(seq20535__$1);
var G__20538 = cljs.core.first(seq20535__$2);
var seq20535__$3 = cljs.core.next(seq20535__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__20536,G__20537,G__20538,seq20535__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next(s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args20543 = [];
var len__7479__auto___20546 = arguments.length;
var i__7480__auto___20547 = (0);
while(true){
if((i__7480__auto___20547 < len__7479__auto___20546)){
args20543.push((arguments[i__7480__auto___20547]));

var G__20548 = (i__7480__auto___20547 + (1));
i__7480__auto___20547 = G__20548;
continue;
} else {
}
break;
}

var G__20545 = args20543.length;
switch (G__20545) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20543.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq(xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__20557 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20557) : cljs.core.atom.call(null,G__20557));
})();
var iter__7184__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__20558(s__20559){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__20559__$1 = s__20559;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20559__$1);
if(temp__4657__auto__){
var s__20559__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20559__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20559__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20561 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20560 = (0);
while(true){
if((i__20560 < size__7183__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20560);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
cljs.core.chunk_append(b__20561,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__20564 = (i__20560 + (1));
i__20560 = G__20564;
continue;
} else {
var G__20565 = (i__20560 + (1));
i__20560 = G__20565;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20561),plumbing$core$distinct_by_$_iter__20558(cljs.core.chunk_rest(s__20559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20561),null);
}
} else {
var x = cljs.core.first(s__20559__$2);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__20558(cljs.core.rest(s__20559__$2)));
} else {
var G__20566 = cljs.core.rest(s__20559__$2);
s__20559__$1 = G__20566;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__7184__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20569 = arguments.length;
var i__7480__auto___20570 = (0);
while(true){
if((i__7480__auto___20570 < len__7479__auto___20569)){
args__7486__auto__.push((arguments[i__7480__auto___20570]));

var G__20571 = (i__7480__auto___20570 + (1));
i__7480__auto___20570 = G__20571;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq20567){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20567));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args20572 = [];
var len__7479__auto___20578 = arguments.length;
var i__7480__auto___20579 = (0);
while(true){
if((i__7480__auto___20579 < len__7479__auto___20578)){
args20572.push((arguments[i__7480__auto___20579]));

var G__20580 = (i__7480__auto___20579 + (1));
i__7480__auto___20579 = G__20580;
continue;
} else {
}
break;
}

var G__20577 = args20572.length;
switch (G__20577) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20572.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__20582 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__20583 = cljs.core.first(xs);
var G__20584 = cljs.core.next(xs);
coll = G__20582;
x = G__20583;
xs = G__20584;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq20573){
var G__20574 = cljs.core.first(seq20573);
var seq20573__$1 = cljs.core.next(seq20573);
var G__20575 = cljs.core.first(seq20573__$1);
var seq20573__$2 = cljs.core.next(seq20573__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__20574,G__20575,seq20573__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args20586 = [];
var len__7479__auto___20592 = arguments.length;
var i__7480__auto___20593 = (0);
while(true){
if((i__7480__auto___20593 < len__7479__auto___20592)){
args20586.push((arguments[i__7480__auto___20593]));

var G__20594 = (i__7480__auto___20593 + (1));
i__7480__auto___20593 = G__20594;
continue;
} else {
}
break;
}

var G__20591 = args20586.length;
switch (G__20591) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20586.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__20585_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__20585_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq20587){
var G__20588 = cljs.core.first(seq20587);
var seq20587__$1 = cljs.core.next(seq20587);
var G__20589 = cljs.core.first(seq20587__$1);
var seq20587__$2 = cljs.core.next(seq20587__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20588,G__20589,seq20587__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args20596 = [];
var len__7479__auto___20602 = arguments.length;
var i__7480__auto___20603 = (0);
while(true){
if((i__7480__auto___20603 < len__7479__auto___20602)){
args20596.push((arguments[i__7480__auto___20603]));

var G__20604 = (i__7480__auto___20603 + (1));
i__7480__auto___20603 = G__20604;
continue;
} else {
}
break;
}

var G__20601 = args20596.length;
switch (G__20601) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20596.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq20597){
var G__20598 = cljs.core.first(seq20597);
var seq20597__$1 = cljs.core.next(seq20597);
var G__20599 = cljs.core.first(seq20597__$1);
var seq20597__$2 = cljs.core.next(seq20597__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__20598,G__20599,seq20597__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

