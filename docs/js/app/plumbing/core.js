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
var args20693 = [];
var len__7479__auto___20708 = arguments.length;
var i__7480__auto___20709 = (0);
while(true){
if((i__7480__auto___20709 < len__7479__auto___20708)){
args20693.push((arguments[i__7480__auto___20709]));

var G__20710 = (i__7480__auto___20709 + (1));
i__7480__auto___20709 = G__20710;
continue;
} else {
}
break;
}

var G__20701 = args20693.length;
switch (G__20701) {
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
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20693.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7498__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20702) : f.call(null,G__20702));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20704 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20703,G__20704) : f.call(null,G__20703,G__20704));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20706 = x1;
var G__20707 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20705,G__20706,G__20707) : f.call(null,G__20705,G__20706,G__20707));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq20694){
var G__20695 = cljs.core.first(seq20694);
var seq20694__$1 = cljs.core.next(seq20694);
var G__20696 = cljs.core.first(seq20694__$1);
var seq20694__$2 = cljs.core.next(seq20694__$1);
var G__20697 = cljs.core.first(seq20694__$2);
var seq20694__$3 = cljs.core.next(seq20694__$2);
var G__20698 = cljs.core.first(seq20694__$3);
var seq20694__$4 = cljs.core.next(seq20694__$3);
var G__20699 = cljs.core.first(seq20694__$4);
var seq20694__$5 = cljs.core.next(seq20694__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__20695,G__20696,G__20697,G__20698,G__20699,seq20694__$5);
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
var m_atom__20431__auto__ = (function (){var G__20729 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20729) : cljs.core.atom.call(null,G__20729));
})();
var seq__20730_20744 = cljs.core.seq(m);
var chunk__20731_20745 = null;
var count__20732_20746 = (0);
var i__20733_20747 = (0);
while(true){
if((i__20733_20747 < count__20732_20746)){
var vec__20734_20748 = chunk__20731_20745.cljs$core$IIndexed$_nth$arity$2(null,i__20733_20747);
var k_20749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20734_20748,(0),null);
var v_20750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20734_20748,(1),null);
var m20728_20751 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20737_20752 = m_atom__20431__auto__;
var G__20738_20753 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20728_20751,k_20749,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20750) : f.call(null,v_20750)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20737_20752,G__20738_20753) : cljs.core.reset_BANG_.call(null,G__20737_20752,G__20738_20753));

var G__20754 = seq__20730_20744;
var G__20755 = chunk__20731_20745;
var G__20756 = count__20732_20746;
var G__20757 = (i__20733_20747 + (1));
seq__20730_20744 = G__20754;
chunk__20731_20745 = G__20755;
count__20732_20746 = G__20756;
i__20733_20747 = G__20757;
continue;
} else {
var temp__4657__auto___20758 = cljs.core.seq(seq__20730_20744);
if(temp__4657__auto___20758){
var seq__20730_20759__$1 = temp__4657__auto___20758;
if(cljs.core.chunked_seq_QMARK_(seq__20730_20759__$1)){
var c__7215__auto___20760 = cljs.core.chunk_first(seq__20730_20759__$1);
var G__20761 = cljs.core.chunk_rest(seq__20730_20759__$1);
var G__20762 = c__7215__auto___20760;
var G__20763 = cljs.core.count(c__7215__auto___20760);
var G__20764 = (0);
seq__20730_20744 = G__20761;
chunk__20731_20745 = G__20762;
count__20732_20746 = G__20763;
i__20733_20747 = G__20764;
continue;
} else {
var vec__20739_20765 = cljs.core.first(seq__20730_20759__$1);
var k_20766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739_20765,(0),null);
var v_20767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739_20765,(1),null);
var m20728_20768 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20742_20769 = m_atom__20431__auto__;
var G__20743_20770 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20728_20768,k_20766,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20767) : f.call(null,v_20767)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20742_20769,G__20743_20770) : cljs.core.reset_BANG_.call(null,G__20742_20769,G__20743_20770));

var G__20771 = cljs.core.next(seq__20730_20759__$1);
var G__20772 = null;
var G__20773 = (0);
var G__20774 = (0);
seq__20730_20744 = G__20771;
chunk__20731_20745 = G__20772;
count__20732_20746 = G__20773;
i__20733_20747 = G__20774;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__)));

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
var m_atom__20431__auto__ = (function (){var G__20792 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20792) : cljs.core.atom.call(null,G__20792));
})();
var seq__20793_20807 = cljs.core.seq(m);
var chunk__20794_20808 = null;
var count__20795_20809 = (0);
var i__20796_20810 = (0);
while(true){
if((i__20796_20810 < count__20795_20809)){
var vec__20797_20811 = chunk__20794_20808.cljs$core$IIndexed$_nth$arity$2(null,i__20796_20810);
var k_20812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20797_20811,(0),null);
var v_20813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20797_20811,(1),null);
var m20791_20814 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20800_20815 = m_atom__20431__auto__;
var G__20801_20816 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20791_20814,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20812) : f.call(null,k_20812)),v_20813);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20800_20815,G__20801_20816) : cljs.core.reset_BANG_.call(null,G__20800_20815,G__20801_20816));

var G__20817 = seq__20793_20807;
var G__20818 = chunk__20794_20808;
var G__20819 = count__20795_20809;
var G__20820 = (i__20796_20810 + (1));
seq__20793_20807 = G__20817;
chunk__20794_20808 = G__20818;
count__20795_20809 = G__20819;
i__20796_20810 = G__20820;
continue;
} else {
var temp__4657__auto___20821 = cljs.core.seq(seq__20793_20807);
if(temp__4657__auto___20821){
var seq__20793_20822__$1 = temp__4657__auto___20821;
if(cljs.core.chunked_seq_QMARK_(seq__20793_20822__$1)){
var c__7215__auto___20823 = cljs.core.chunk_first(seq__20793_20822__$1);
var G__20824 = cljs.core.chunk_rest(seq__20793_20822__$1);
var G__20825 = c__7215__auto___20823;
var G__20826 = cljs.core.count(c__7215__auto___20823);
var G__20827 = (0);
seq__20793_20807 = G__20824;
chunk__20794_20808 = G__20825;
count__20795_20809 = G__20826;
i__20796_20810 = G__20827;
continue;
} else {
var vec__20802_20828 = cljs.core.first(seq__20793_20822__$1);
var k_20829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20802_20828,(0),null);
var v_20830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20802_20828,(1),null);
var m20791_20831 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20805_20832 = m_atom__20431__auto__;
var G__20806_20833 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20791_20831,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20829) : f.call(null,k_20829)),v_20830);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20805_20832,G__20806_20833) : cljs.core.reset_BANG_.call(null,G__20805_20832,G__20806_20833));

var G__20834 = cljs.core.next(seq__20793_20822__$1);
var G__20835 = null;
var G__20836 = (0);
var G__20837 = (0);
seq__20793_20807 = G__20834;
chunk__20794_20808 = G__20835;
count__20795_20809 = G__20836;
i__20796_20810 = G__20837;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__)));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__20431__auto__ = (function (){var G__20849 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20849) : cljs.core.atom.call(null,G__20849));
})();
var seq__20850_20858 = cljs.core.seq(ks);
var chunk__20851_20859 = null;
var count__20852_20860 = (0);
var i__20853_20861 = (0);
while(true){
if((i__20853_20861 < count__20852_20860)){
var k_20862 = chunk__20851_20859.cljs$core$IIndexed$_nth$arity$2(null,i__20853_20861);
var m20848_20863 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20854_20864 = m_atom__20431__auto__;
var G__20855_20865 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20848_20863,k_20862,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20862) : f.call(null,k_20862)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20854_20864,G__20855_20865) : cljs.core.reset_BANG_.call(null,G__20854_20864,G__20855_20865));

var G__20866 = seq__20850_20858;
var G__20867 = chunk__20851_20859;
var G__20868 = count__20852_20860;
var G__20869 = (i__20853_20861 + (1));
seq__20850_20858 = G__20866;
chunk__20851_20859 = G__20867;
count__20852_20860 = G__20868;
i__20853_20861 = G__20869;
continue;
} else {
var temp__4657__auto___20870 = cljs.core.seq(seq__20850_20858);
if(temp__4657__auto___20870){
var seq__20850_20871__$1 = temp__4657__auto___20870;
if(cljs.core.chunked_seq_QMARK_(seq__20850_20871__$1)){
var c__7215__auto___20872 = cljs.core.chunk_first(seq__20850_20871__$1);
var G__20873 = cljs.core.chunk_rest(seq__20850_20871__$1);
var G__20874 = c__7215__auto___20872;
var G__20875 = cljs.core.count(c__7215__auto___20872);
var G__20876 = (0);
seq__20850_20858 = G__20873;
chunk__20851_20859 = G__20874;
count__20852_20860 = G__20875;
i__20853_20861 = G__20876;
continue;
} else {
var k_20877 = cljs.core.first(seq__20850_20871__$1);
var m20848_20878 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20856_20879 = m_atom__20431__auto__;
var G__20857_20880 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20848_20878,k_20877,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20877) : f.call(null,k_20877)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20856_20879,G__20857_20880) : cljs.core.reset_BANG_.call(null,G__20856_20879,G__20857_20880));

var G__20881 = cljs.core.next(seq__20850_20871__$1);
var G__20882 = null;
var G__20883 = (0);
var G__20884 = (0);
seq__20850_20858 = G__20881;
chunk__20851_20859 = G__20882;
count__20852_20860 = G__20883;
i__20853_20861 = G__20884;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__)));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__20431__auto__ = (function (){var G__20896 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20896) : cljs.core.atom.call(null,G__20896));
})();
var seq__20897_20905 = cljs.core.seq(vs);
var chunk__20898_20906 = null;
var count__20899_20907 = (0);
var i__20900_20908 = (0);
while(true){
if((i__20900_20908 < count__20899_20907)){
var v_20909 = chunk__20898_20906.cljs$core$IIndexed$_nth$arity$2(null,i__20900_20908);
var m20895_20910 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20901_20911 = m_atom__20431__auto__;
var G__20902_20912 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20895_20910,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20909) : f.call(null,v_20909)),v_20909);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20901_20911,G__20902_20912) : cljs.core.reset_BANG_.call(null,G__20901_20911,G__20902_20912));

var G__20913 = seq__20897_20905;
var G__20914 = chunk__20898_20906;
var G__20915 = count__20899_20907;
var G__20916 = (i__20900_20908 + (1));
seq__20897_20905 = G__20913;
chunk__20898_20906 = G__20914;
count__20899_20907 = G__20915;
i__20900_20908 = G__20916;
continue;
} else {
var temp__4657__auto___20917 = cljs.core.seq(seq__20897_20905);
if(temp__4657__auto___20917){
var seq__20897_20918__$1 = temp__4657__auto___20917;
if(cljs.core.chunked_seq_QMARK_(seq__20897_20918__$1)){
var c__7215__auto___20919 = cljs.core.chunk_first(seq__20897_20918__$1);
var G__20920 = cljs.core.chunk_rest(seq__20897_20918__$1);
var G__20921 = c__7215__auto___20919;
var G__20922 = cljs.core.count(c__7215__auto___20919);
var G__20923 = (0);
seq__20897_20905 = G__20920;
chunk__20898_20906 = G__20921;
count__20899_20907 = G__20922;
i__20900_20908 = G__20923;
continue;
} else {
var v_20924 = cljs.core.first(seq__20897_20918__$1);
var m20895_20925 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20903_20926 = m_atom__20431__auto__;
var G__20904_20927 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20895_20925,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20924) : f.call(null,v_20924)),v_20924);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20903_20926,G__20904_20927) : cljs.core.reset_BANG_.call(null,G__20903_20926,G__20904_20927));

var G__20928 = cljs.core.next(seq__20897_20918__$1);
var G__20929 = null;
var G__20930 = (0);
var G__20931 = (0);
seq__20897_20905 = G__20928;
chunk__20898_20906 = G__20929;
count__20899_20907 = G__20930;
i__20900_20908 = G__20931;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__)));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__20932){
var vec__20940 = p__20932;
var seq__20941 = cljs.core.seq(vec__20940);
var first__20942 = cljs.core.first(seq__20941);
var seq__20941__$1 = cljs.core.next(seq__20941);
var k = first__20942;
var ks = seq__20941__$1;
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
var m_atom__20431__auto__ = (function (){var G__20960 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20960) : cljs.core.atom.call(null,G__20960));
})();
var seq__20961_20975 = cljs.core.seq(x);
var chunk__20962_20976 = null;
var count__20963_20977 = (0);
var i__20964_20978 = (0);
while(true){
if((i__20964_20978 < count__20963_20977)){
var vec__20965_20979 = chunk__20962_20976.cljs$core$IIndexed$_nth$arity$2(null,i__20964_20978);
var k_20980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20965_20979,(0),null);
var v_20981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20965_20979,(1),null);
var m20959_20982 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20968_20983 = m_atom__20431__auto__;
var G__20969_20984 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20959_20982,((typeof k_20980 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_20980):k_20980),plumbing$core$keywordize_map(v_20981));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20968_20983,G__20969_20984) : cljs.core.reset_BANG_.call(null,G__20968_20983,G__20969_20984));

var G__20985 = seq__20961_20975;
var G__20986 = chunk__20962_20976;
var G__20987 = count__20963_20977;
var G__20988 = (i__20964_20978 + (1));
seq__20961_20975 = G__20985;
chunk__20962_20976 = G__20986;
count__20963_20977 = G__20987;
i__20964_20978 = G__20988;
continue;
} else {
var temp__4657__auto___20989 = cljs.core.seq(seq__20961_20975);
if(temp__4657__auto___20989){
var seq__20961_20990__$1 = temp__4657__auto___20989;
if(cljs.core.chunked_seq_QMARK_(seq__20961_20990__$1)){
var c__7215__auto___20991 = cljs.core.chunk_first(seq__20961_20990__$1);
var G__20992 = cljs.core.chunk_rest(seq__20961_20990__$1);
var G__20993 = c__7215__auto___20991;
var G__20994 = cljs.core.count(c__7215__auto___20991);
var G__20995 = (0);
seq__20961_20975 = G__20992;
chunk__20962_20976 = G__20993;
count__20963_20977 = G__20994;
i__20964_20978 = G__20995;
continue;
} else {
var vec__20970_20996 = cljs.core.first(seq__20961_20990__$1);
var k_20997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20970_20996,(0),null);
var v_20998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20970_20996,(1),null);
var m20959_20999 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__));
var G__20973_21000 = m_atom__20431__auto__;
var G__20974_21001 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20959_20999,((typeof k_20997 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_20997):k_20997),plumbing$core$keywordize_map(v_20998));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20973_21000,G__20974_21001) : cljs.core.reset_BANG_.call(null,G__20973_21000,G__20974_21001));

var G__21002 = cljs.core.next(seq__20961_20990__$1);
var G__21003 = null;
var G__21004 = (0);
var G__21005 = (0);
seq__20961_20975 = G__21002;
chunk__20962_20976 = G__21003;
count__20963_20977 = G__21004;
i__20964_20978 = G__21005;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__20431__auto__) : cljs.core.deref.call(null,m_atom__20431__auto__)));
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
var pair__20507__auto__ = temp__4655__auto__;
return cljs.core.val(pair__20507__auto__);
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
var G__21006 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__21007 = cljs.core.next(ks);
m = G__21006;
ks = G__21007;
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
var len__7479__auto___21028 = arguments.length;
var i__7480__auto___21029 = (0);
while(true){
if((i__7480__auto___21029 < len__7479__auto___21028)){
args__7486__auto__.push((arguments[i__7480__auto___21029]));

var G__21030 = (i__7480__auto___21029 + (1));
i__7480__auto___21029 = G__21030;
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
})(),(function (){var iter__7184__auto__ = (function plumbing$core$iter__21010(s__21011){
return (new cljs.core.LazySeq(null,(function (){
var s__21011__$1 = s__21011;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21011__$1);
if(temp__4657__auto__){
var s__21011__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21011__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21011__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21013 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21012 = (0);
while(true){
if((i__21012 < size__7183__auto__)){
var vec__21022 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21012);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__21013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21031 = (i__21012 + (1));
i__21012 = G__21031;
continue;
} else {
var G__21032 = (i__21012 + (1));
i__21012 = G__21032;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21013),plumbing$core$iter__21010(cljs.core.chunk_rest(s__21011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21013),null);
}
} else {
var vec__21025 = cljs.core.first(s__21011__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21025,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__21010(cljs.core.rest(s__21011__$2)));
} else {
var G__21033 = cljs.core.rest(s__21011__$2);
s__21011__$1 = G__21033;
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

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq21008){
var G__21009 = cljs.core.first(seq21008);
var seq21008__$1 = cljs.core.next(seq21008);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__21009,seq21008__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___21038 = arguments.length;
var i__7480__auto___21039 = (0);
while(true){
if((i__7480__auto___21039 < len__7479__auto___21038)){
args__7486__auto__.push((arguments[i__7480__auto___21039]));

var G__21040 = (i__7480__auto___21039 + (1));
i__7480__auto___21039 = G__21040;
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq21034){
var G__21035 = cljs.core.first(seq21034);
var seq21034__$1 = cljs.core.next(seq21034);
var G__21036 = cljs.core.first(seq21034__$1);
var seq21034__$2 = cljs.core.next(seq21034__$1);
var G__21037 = cljs.core.first(seq21034__$2);
var seq21034__$3 = cljs.core.next(seq21034__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__21035,G__21036,G__21037,seq21034__$3);
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
var args21042 = [];
var len__7479__auto___21045 = arguments.length;
var i__7480__auto___21046 = (0);
while(true){
if((i__7480__auto___21046 < len__7479__auto___21045)){
args21042.push((arguments[i__7480__auto___21046]));

var G__21047 = (i__7480__auto___21046 + (1));
i__7480__auto___21046 = G__21047;
continue;
} else {
}
break;
}

var G__21044 = args21042.length;
switch (G__21044) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21042.length)].join('')));

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
var s = (function (){var G__21056 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21056) : cljs.core.atom.call(null,G__21056));
})();
var iter__7184__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__21057(s__21058){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__21058__$1 = s__21058;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21058__$1);
if(temp__4657__auto__){
var s__21058__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21058__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21058__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21060 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21059 = (0);
while(true){
if((i__21059 < size__7183__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21059);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
cljs.core.chunk_append(b__21060,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__21063 = (i__21059 + (1));
i__21059 = G__21063;
continue;
} else {
var G__21064 = (i__21059 + (1));
i__21059 = G__21064;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21060),plumbing$core$distinct_by_$_iter__21057(cljs.core.chunk_rest(s__21058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21060),null);
}
} else {
var x = cljs.core.first(s__21058__$2);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__21057(cljs.core.rest(s__21058__$2)));
} else {
var G__21065 = cljs.core.rest(s__21058__$2);
s__21058__$1 = G__21065;
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
var len__7479__auto___21068 = arguments.length;
var i__7480__auto___21069 = (0);
while(true){
if((i__7480__auto___21069 < len__7479__auto___21068)){
args__7486__auto__.push((arguments[i__7480__auto___21069]));

var G__21070 = (i__7480__auto___21069 + (1));
i__7480__auto___21069 = G__21070;
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq21066){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21066));
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
var args21071 = [];
var len__7479__auto___21077 = arguments.length;
var i__7480__auto___21078 = (0);
while(true){
if((i__7480__auto___21078 < len__7479__auto___21077)){
args21071.push((arguments[i__7480__auto___21078]));

var G__21079 = (i__7480__auto___21078 + (1));
i__7480__auto___21078 = G__21079;
continue;
} else {
}
break;
}

var G__21076 = args21071.length;
switch (G__21076) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args21071.slice((2)),(0),null));
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
var G__21081 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__21082 = cljs.core.first(xs);
var G__21083 = cljs.core.next(xs);
coll = G__21081;
x = G__21082;
xs = G__21083;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq21072){
var G__21073 = cljs.core.first(seq21072);
var seq21072__$1 = cljs.core.next(seq21072);
var G__21074 = cljs.core.first(seq21072__$1);
var seq21072__$2 = cljs.core.next(seq21072__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__21073,G__21074,seq21072__$2);
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
var args21085 = [];
var len__7479__auto___21091 = arguments.length;
var i__7480__auto___21092 = (0);
while(true){
if((i__7480__auto___21092 < len__7479__auto___21091)){
args21085.push((arguments[i__7480__auto___21092]));

var G__21093 = (i__7480__auto___21092 + (1));
i__7480__auto___21092 = G__21093;
continue;
} else {
}
break;
}

var G__21090 = args21085.length;
switch (G__21090) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args21085.slice((2)),(0),null));
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
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__21084_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__21084_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq21086){
var G__21087 = cljs.core.first(seq21086);
var seq21086__$1 = cljs.core.next(seq21086);
var G__21088 = cljs.core.first(seq21086__$1);
var seq21086__$2 = cljs.core.next(seq21086__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21087,G__21088,seq21086__$2);
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
var args21095 = [];
var len__7479__auto___21101 = arguments.length;
var i__7480__auto___21102 = (0);
while(true){
if((i__7480__auto___21102 < len__7479__auto___21101)){
args21095.push((arguments[i__7480__auto___21102]));

var G__21103 = (i__7480__auto___21102 + (1));
i__7480__auto___21102 = G__21103;
continue;
} else {
}
break;
}

var G__21100 = args21095.length;
switch (G__21100) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args21095.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq21096){
var G__21097 = cljs.core.first(seq21096);
var seq21096__$1 = cljs.core.next(seq21096);
var G__21098 = cljs.core.first(seq21096__$1);
var seq21096__$2 = cljs.core.next(seq21096__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__21097,G__21098,seq21096__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

