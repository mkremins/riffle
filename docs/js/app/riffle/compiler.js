// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('riffle.compiler');
goog.require('cljs.core');
goog.require('riffle.util');
/**
 * Classifies a `pattern` as either:
 *   * A :compound pattern, i.e. a sequential form
 *   * A :literal pattern, i.e. a lowercased symbol or natural number
 *   * A logic variable :lvar, i.e. a symbol beginning with a $ character
 *   * A :wildcard, i.e. a symbol beginning with an underscore
 *   * An :invalid pattern, which should never actually appear
 */
riffle.compiler.classify_pattern = (function riffle$compiler$classify_pattern(pattern){
if((pattern instanceof cljs.core.Symbol)){
var s = [cljs.core.str(pattern)].join('');
if(cljs.core.truth_(cljs.core.re_matches(/^_.*/,s))){
return cljs.core.cst$kw$wildcard;
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^\$.*/,s))){
return cljs.core.cst$kw$lvar;
} else {
return cljs.core.cst$kw$literal;

}
}
} else {
if(cljs.core.sequential_QMARK_(pattern)){
return cljs.core.cst$kw$compound;
} else {
if(cljs.core.integer_QMARK_(pattern)){
return cljs.core.cst$kw$literal;
} else {
return cljs.core.cst$kw$invalid;

}
}
}
});
/**
 * Checks a seq of arguments `args` (to a predicate or type constructor)
 *   against a seq of declared types `arg-types`, looking up additional type
 *   information in `types` and `lvar-types` as needed. On success, returns an
 *   updated lvar-types map that may contain type information for additional
 *   lvars; on failure, throws an error.
 * 
 *   The `context` argument can be either :pattern or :value. In pattern context,
 *   unbound logic variables are permitted within `args`; in value context, they
 *   are not.
 */
riffle.compiler.typecheck_args = (function riffle$compiler$typecheck_args(args,arg_types,types,lvar_types,context){
if(cljs.core.truth_(arg_types)){
} else {
throw (new Error("Assert failed: arg-types"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(arg_types))){
} else {
throw (new Error("Assert failed: (= (count args) (count arg-types))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$pattern,null], null), null),context)){
} else {
throw (new Error("Assert failed: (contains? #{:value :pattern} context)"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (lvar_types__$1,p__16995){
var vec__16996 = p__16995;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16996,(0),null);
var arg_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16996,(1),null);
var G__16999 = (((riffle.compiler.classify_pattern(arg) instanceof cljs.core.Keyword))?riffle.compiler.classify_pattern(arg).fqn:null);
switch (G__16999) {
case "compound":
var vec__17000 = arg;
var seq__17001 = cljs.core.seq(vec__17000);
var first__17002 = cljs.core.first(seq__17001);
var seq__17001__$1 = cljs.core.next(seq__17001);
var ctor = first__17002;
var ctor_args = seq__17001__$1;
var vec__17003 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_type,cljs.core.cst$kw$terms,ctor], null));
var seq__17004 = cljs.core.seq(vec__17003);
var first__17005 = cljs.core.first(seq__17004);
var seq__17004__$1 = cljs.core.next(seq__17004);
var _ = first__17005;
var ctor_arg_types = seq__17004__$1;
return riffle$compiler$typecheck_args(ctor_args,ctor_arg_types,types,lvar_types__$1,context);

break;
case "literal":
if((arg instanceof cljs.core.Symbol)){
var ctor_sig = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_type,cljs.core.cst$kw$terms,arg], null));
if(cljs.core.truth_(ctor_sig)){
} else {
throw (new Error("Assert failed: ctor-sig"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ctor_sig),(1))){
} else {
throw (new Error("Assert failed: (= (count ctor-sig) 1)"));
}

return lvar_types__$1;
} else {
if((cljs.core.integer_QMARK_(arg)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type,cljs.core.cst$sym$nat))){
} else {
throw (new Error("Assert failed: (and (integer? arg) (= arg-type (quote nat)))"));
}

return lvar_types__$1;
}

break;
case "lvar":
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lvar_types__$1,arg);
if(cljs.core.truth_(temp__4655__auto__)){
var bound_type = temp__4655__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type,bound_type)){
} else {
throw (new Error("Assert failed: (= arg-type bound-type)"));
}

return lvar_types__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$pattern)){
} else {
throw (new Error("Assert failed: (= context :pattern)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lvar_types__$1,arg,arg_type);
}

break;
case "wildcard":
return lvar_types__$1;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(riffle.compiler.classify_pattern(arg))].join('')));

}
}),lvar_types,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,arg_types));
});
/**
 * Checks a predicate expression `expr` (i.e. an expression of the form
 *   `[pred & args]`) against the types declared in `program` and `lvar-types`. On
 *   success, returns an updated lvar-types map that may contain type information
 *   for additional lvars; on failure, throws an error.
 * 
 *   The `context` argument can be either :pattern or :value. In pattern context,
 *   unbound logic variables are permitted within `expr`; in value context, they
 *   are not.
 */
riffle.compiler.typecheck_pred_expr = (function riffle$compiler$typecheck_pred_expr(expr,program,lvar_types,context){
if(cljs.core.sequential_QMARK_(expr)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid predicate expression `"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0))),cljs.core.str("` \u2013 should be of form `[name & args]`!")].join('')),cljs.core.str("\n"),cljs.core.str("(sequential? expr)")].join('')));
}

var vec__17011 = expr;
var seq__17012 = cljs.core.seq(vec__17011);
var first__17013 = cljs.core.first(seq__17012);
var seq__17012__$1 = cljs.core.next(seq__17012);
var pred = first__17013;
var args = seq__17012__$1;
var signature = (function (){var or__6404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$preds.cljs$core$IFn$_invoke$arity$1(program),pred);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var G__17014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bwds.cljs$core$IFn$_invoke$arity$1(program),pred);
if((G__17014 == null)){
return null;
} else {
return cljs.core.cst$kw$sig.cljs$core$IFn$_invoke$arity$1(G__17014);
}
}
})();
var _ = (cljs.core.truth_(signature)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No such pred or bwd `"),cljs.core.str(pred),cljs.core.str("`!")].join('')),cljs.core.str("\n"),cljs.core.str("signature")].join('')))})());
var arg_types = cljs.core.rest(signature);
return riffle.compiler.typecheck_args(args,arg_types,cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(program),lvar_types,context);
});
/**
 * Returns true IFF `ident` is a valid name symbol for a type, predicate, etc.
 */
riffle.compiler.valid_ident_QMARK_ = (function riffle$compiler$valid_ident_QMARK_(ident){
return ((ident instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(riffle.compiler.classify_pattern(ident),cljs.core.cst$kw$literal));
});
/**
 * If `sig` is a valid type signature of the form `[name & arg-types]`, returns
 *   `sig`, else throws an error. Will also coerce shorthand type signatures
 *   consisting of only a single ident into the "proper" form. Checks argument
 *   types for validity by looking them up in `types`.
 */
riffle.compiler.check_signature = (function riffle$compiler$check_signature(sig,types){
var sig__$1 = (function (){var G__17026 = sig;
if((sig instanceof cljs.core.Symbol)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__17026],null));
} else {
return G__17026;
}
})();
var _ = ((cljs.core.sequential_QMARK_(sig__$1))?null:(function(){throw (new Error("Assert failed: (sequential? sig)"))})());
var vec__17023 = sig__$1;
var seq__17024 = cljs.core.seq(vec__17023);
var first__17025 = cljs.core.first(seq__17024);
var seq__17024__$1 = cljs.core.next(seq__17024);
var name = first__17025;
var arg_types = seq__17024__$1;
if(cljs.core.truth_(riffle.compiler.valid_ident_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-ident? name)"));
}

var seq__17027_17031 = cljs.core.seq(arg_types);
var chunk__17028_17032 = null;
var count__17029_17033 = (0);
var i__17030_17034 = (0);
while(true){
if((i__17030_17034 < count__17029_17033)){
var arg_type_17035 = chunk__17028_17032.cljs$core$IIndexed$_nth$arity$2(null,i__17030_17034);
if(cljs.core.contains_QMARK_(types,arg_type_17035)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Type `"),cljs.core.str(arg_type_17035),cljs.core.str("` not found in provided types!")].join('')),cljs.core.str("\n"),cljs.core.str("(contains? types arg-type)")].join('')));
}

var G__17036 = seq__17027_17031;
var G__17037 = chunk__17028_17032;
var G__17038 = count__17029_17033;
var G__17039 = (i__17030_17034 + (1));
seq__17027_17031 = G__17036;
chunk__17028_17032 = G__17037;
count__17029_17033 = G__17038;
i__17030_17034 = G__17039;
continue;
} else {
var temp__4657__auto___17040 = cljs.core.seq(seq__17027_17031);
if(temp__4657__auto___17040){
var seq__17027_17041__$1 = temp__4657__auto___17040;
if(cljs.core.chunked_seq_QMARK_(seq__17027_17041__$1)){
var c__7215__auto___17042 = cljs.core.chunk_first(seq__17027_17041__$1);
var G__17043 = cljs.core.chunk_rest(seq__17027_17041__$1);
var G__17044 = c__7215__auto___17042;
var G__17045 = cljs.core.count(c__7215__auto___17042);
var G__17046 = (0);
seq__17027_17031 = G__17043;
chunk__17028_17032 = G__17044;
count__17029_17033 = G__17045;
i__17030_17034 = G__17046;
continue;
} else {
var arg_type_17047 = cljs.core.first(seq__17027_17041__$1);
if(cljs.core.contains_QMARK_(types,arg_type_17047)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Type `"),cljs.core.str(arg_type_17047),cljs.core.str("` not found in provided types!")].join('')),cljs.core.str("\n"),cljs.core.str("(contains? types arg-type)")].join('')));
}

var G__17048 = cljs.core.next(seq__17027_17041__$1);
var G__17049 = null;
var G__17050 = (0);
var G__17051 = (0);
seq__17027_17031 = G__17048;
chunk__17028_17032 = G__17049;
count__17029_17033 = G__17050;
i__17030_17034 = G__17051;
continue;
}
} else {
}
}
break;
}

return sig__$1;
});
/**
 * Given a seq of uncompiled `terms` from a type declaration and a set of
 *   `type-names` representing legal argument types, returns a map of compiled
 *   terms in which keys are term names and values are term type signatures.
 */
riffle.compiler.compile_terms = (function riffle$compiler$compile_terms(terms,type_names){
if(cljs.core.sequential_QMARK_(terms)){
} else {
throw (new Error("Assert failed: (sequential? terms)"));
}

return riffle.util.indexed_by(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17053_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("    \u25E6 Term `"),cljs.core.str(cljs.core.first(p1__17053_SHARP_)),cljs.core.str("`")].join('')], 0));

return p1__17053_SHARP_;
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17052_SHARP_){
return riffle.compiler.check_signature(p1__17052_SHARP_,type_names);
}),terms)));
});
/**
 * Given a seq of uncompiled `types`, returns a map of compiled types.
 */
riffle.compiler.compile_types = (function riffle$compiler$compile_types(types){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u25E6 Compiling types\u2026"], 0));

if(cljs.core.sequential_QMARK_(types)){
} else {
throw (new Error("Assert failed: (sequential? types)"));
}

var type_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,types));
return riffle.util.indexed_by(cljs.core.cst$kw$name,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (type_names){
return (function (type){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("  \u25E6 Type `"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(type)),cljs.core.str("`")].join('')], 0));

if(cljs.core.map_QMARK_(type)){
} else {
throw (new Error("Assert failed: (map? type)"));
}

if(cljs.core.truth_(riffle.compiler.valid_ident_QMARK_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(type)))){
} else {
throw (new Error("Assert failed: (valid-ident? (:name type))"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(type,cljs.core.cst$kw$terms,riffle.compiler.compile_terms,type_names);
});})(type_names))
,types));
});
/**
 * Given a seq of uncompiled forward-chaining predicates `preds` and a map of
 *   compiled `types`, returns a map of compiled forward-chaining predicates.
 */
riffle.compiler.compile_preds = (function riffle$compiler$compile_preds(preds,types){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u25E6 Compiling forward-chaining predicates\u2026"], 0));

if(cljs.core.sequential_QMARK_(preds)){
} else {
throw (new Error("Assert failed: (sequential? preds)"));
}

return riffle.util.indexed_by(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17055_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("  \u25E6 Pred `"),cljs.core.str(cljs.core.first(p1__17055_SHARP_)),cljs.core.str("`")].join('')], 0));

return p1__17055_SHARP_;
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17054_SHARP_){
return riffle.compiler.check_signature(p1__17054_SHARP_,types);
}),preds)));
});
riffle.compiler.precompile_bwd = (function riffle$compiler$precompile_bwd(bwd,types){
if(cljs.core.map_QMARK_(bwd)){
} else {
throw (new Error("Assert failed: (map? bwd)"));
}

var vec__17059 = riffle.compiler.check_signature(cljs.core.cst$kw$sig.cljs$core$IFn$_invoke$arity$1(bwd),types);
var seq__17060 = cljs.core.seq(vec__17059);
var first__17061 = cljs.core.first(seq__17060);
var seq__17060__$1 = cljs.core.next(seq__17060);
var name = first__17061;
var arg_types = seq__17060__$1;
var sig = vec__17059;
if(cljs.core.seq(arg_types)){
} else {
throw (new Error("Assert failed: (seq arg-types)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bwd,cljs.core.cst$kw$sig,sig,cljs.core.array_seq([cljs.core.cst$kw$name,name], 0));
});
riffle.compiler.compile_bwd_case = (function riffle$compiler$compile_bwd_case(case$,bwd_name,program){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("    \u25E6 Case `"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__6404__auto__ = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(case$);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return case$;
}
})()], 0))),cljs.core.str("`")].join('')], 0));

var case$__$1 = (function (){var G__17065 = case$;
if(cljs.core.sequential_QMARK_(case$)){
return ((function (G__17065){
return (function (p1__17062_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pattern,p1__17062_SHARP_], null);
});})(G__17065))
.call(null,G__17065);
} else {
return G__17065;
}
})();
var _ = ((cljs.core.map_QMARK_(case$__$1))?null:(function(){throw (new Error("Assert failed: (map? case)"))})());
var pattern = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(case$__$1);
var ___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern),bwd_name))?null:(function(){throw (new Error("Assert failed: (= (first pattern) bwd-name)"))})());
var lvar_types = riffle.compiler.typecheck_pred_expr(pattern,program,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pattern);
var ___$2 = (cljs.core.truth_(lvar_types)?null:(function(){throw (new Error("Assert failed: lvar-types"))})());
var goals = cljs.core.cst$kw$goals.cljs$core$IFn$_invoke$arity$1(case$__$1);
if(cljs.core.empty_QMARK_(goals)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(case$__$1,cljs.core.cst$kw$base_DASH_case_QMARK_,true);
} else {
if(cljs.core.every_QMARK_(((function (case$__$1,_,pattern,___$1,lvar_types,___$2,goals){
return (function (p1__17063_SHARP_){
return riffle.compiler.typecheck_pred_expr(p1__17063_SHARP_,program,lvar_types,cljs.core.cst$kw$value);
});})(case$__$1,_,pattern,___$1,lvar_types,___$2,goals))
,goals)){
} else {
throw (new Error("Assert failed: (every? (fn* [p1__17063#] (typecheck-pred-expr p1__17063# program lvar-types :value)) goals)"));
}

return case$__$1;
}
});
riffle.compiler.compile_bwd = (function riffle$compiler$compile_bwd(bwd,program){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("  \u25E6 Bwd `"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(bwd)),cljs.core.str("`")].join('')], 0));

var cases = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17066_SHARP_){
return riffle.compiler.compile_bwd_case(p1__17066_SHARP_,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(bwd),program);
}),cljs.core.cst$kw$cases.cljs$core$IFn$_invoke$arity$1(bwd));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bwd,cljs.core.cst$kw$cases,cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (cases){
return (function (p1__17067_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$base_DASH_case_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__17067_SHARP_))){
return (0);
} else {
return (1);
}
});})(cases))
,cases)));
});
/**
 * Given a seq of uncompiled backward-chaining predicates `bwds` and a map of
 *   compiled `types`, returns a map of compiled backward-chaining predicates.
 */
riffle.compiler.compile_bwds = (function riffle$compiler$compile_bwds(bwds,types){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u25E6 Compiling backward-chaining predicates\u2026"], 0));

if(cljs.core.sequential_QMARK_(bwds)){
} else {
throw (new Error("Assert failed: (sequential? bwds)"));
}

var bwds__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17068_SHARP_){
return riffle.compiler.precompile_bwd(p1__17068_SHARP_,types);
}),bwds);
var program = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$types,types,cljs.core.cst$kw$bwds,riffle.util.indexed_by(cljs.core.cst$kw$name,bwds__$1)], null);
return riffle.util.indexed_by(cljs.core.cst$kw$name,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (bwds__$1,program){
return (function (p1__17069_SHARP_){
return riffle.compiler.compile_bwd(p1__17069_SHARP_,program);
});})(bwds__$1,program))
,bwds__$1));
});
/**
 * Given a seq of uncompiled `facts`, a map of compiled `types`, and a map of
 *   compiled `preds`, returns a map of compiled facts.
 */
riffle.compiler.compile_facts = (function riffle$compiler$compile_facts(facts,types,preds){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u25E6 Compiling facts\u2026"], 0));

if(cljs.core.sequential_QMARK_(facts)){
} else {
throw (new Error("Assert failed: (sequential? facts)"));
}

var program = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$types,types,cljs.core.cst$kw$preds,preds], null);
return riffle.util.indexed_by(cljs.core.cst$kw$id,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (program){
return (function (id,fact){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("  \u25E6 Fact `"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fact], 0))),cljs.core.str("`")].join('')], 0));

var fact__$1 = (function (){var G__17071 = fact;
if((fact instanceof cljs.core.Symbol)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__17071],null));
} else {
return G__17071;
}
})();
if(cljs.core.sequential_QMARK_(fact__$1)){
} else {
throw (new Error("Assert failed: (sequential? fact)"));
}

riffle.compiler.typecheck_pred_expr(fact__$1,program,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$expr,fact__$1,cljs.core.cst$kw$initial_QMARK_,true], null);
});})(program))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),facts));
});
/**
 * Given a seq of rule `premises`, a `program`, and a map of `lvar-types`,
 *   returns a tuple `[compiled lvar-types]` in which `compiled` is a seq of
 *   compiled premises and `lvar-types` is an updated lvar-types map that may
 *   contain type information for additional lvars.
 */
riffle.compiler.compile_premises = (function riffle$compiler$compile_premises(premises,program,lvar_types){
if(cljs.core.sequential_QMARK_(premises)){
} else {
throw (new Error("Assert failed: (sequential? premises)"));
}

var uncompiled = premises;
var compiled = cljs.core.PersistentVector.EMPTY;
var lvar_types__$1 = lvar_types;
while(true){
var temp__4655__auto__ = cljs.core.first(uncompiled);
if(cljs.core.truth_(temp__4655__auto__)){
var premise = temp__4655__auto__;
var premise__$1 = (function (){var G__17073 = premise;
if((premise instanceof cljs.core.Symbol)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__17073],null));
} else {
return G__17073;
}
})();
if(cljs.core.sequential_QMARK_(premise__$1)){
} else {
throw (new Error("Assert failed: (sequential? premise)"));
}

var G__17074 = cljs.core.rest(uncompiled);
var G__17075 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(compiled,premise__$1);
var G__17076 = riffle.compiler.typecheck_pred_expr(premise__$1,program,lvar_types__$1,cljs.core.cst$kw$pattern);
uncompiled = G__17074;
compiled = G__17075;
lvar_types__$1 = G__17076;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled,lvar_types__$1], null);
}
break;
}
});
/**
 * Given a seq of rule `results`, a `program`, and a map of `lvar-types`,
 *   returns a seq of compiled results.
 */
riffle.compiler.compile_results = (function riffle$compiler$compile_results(results,program,lvar_types){
if(cljs.core.sequential_QMARK_(results)){
} else {
throw (new Error("Assert failed: (sequential? results)"));
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (result){
var result__$1 = (function (){var G__17078 = result;
if((result instanceof cljs.core.Symbol)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__17078],null));
} else {
return G__17078;
}
})();
if(cljs.core.sequential_QMARK_(result__$1)){
} else {
throw (new Error("Assert failed: (sequential? result)"));
}

riffle.compiler.typecheck_pred_expr(result__$1,program,lvar_types,cljs.core.cst$kw$value);

return result__$1;
}),results);
});
/**
 * Returns the type of predicate (:pred, :bwd or :invalid) that the `ident`
 *   represents within the `program`.
 */
riffle.compiler.pred_type = (function riffle$compiler$pred_type(ident,program){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$preds.cljs$core$IFn$_invoke$arity$1(program),ident)){
return cljs.core.cst$kw$pred;
} else {
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$bwds.cljs$core$IFn$_invoke$arity$1(program),ident)){
return cljs.core.cst$kw$bwd;
} else {
return cljs.core.cst$kw$invalid;

}
}
});
riffle.compiler.compile_rule = (function riffle$compiler$compile_rule(rule,program){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("    \u25E6 Rule `"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(rule,"(quiescence)")),cljs.core.str("`")].join('')], 0));

if(cljs.core.map_QMARK_(rule)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Rule must be declared as a map!"),cljs.core.str("\n"),cljs.core.str("(map? rule)")].join('')));
}

var pred_type_SINGLEQUOTE_ = (function (p1__17079_SHARP_){
return riffle.compiler.pred_type(cljs.core.first(p1__17079_SHARP_),program);
});
var _ = (function (){var seq__17102 = cljs.core.seq(cljs.core.cst$kw$consume.cljs$core$IFn$_invoke$arity$1(rule));
var chunk__17103 = null;
var count__17104 = (0);
var i__17105 = (0);
while(true){
if((i__17105 < count__17104)){
var premise = chunk__17103.cljs$core$IIndexed$_nth$arity$2(null,i__17105);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred_type_SINGLEQUOTE_(premise),cljs.core.cst$kw$pred)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't consume instance of backward-chaining predicate `"),cljs.core.str(cljs.core.first(premise)),cljs.core.str("`!")].join('')),cljs.core.str("\n"),cljs.core.str("(= (pred-type' premise) :pred)")].join('')));
}

var G__17106 = seq__17102;
var G__17107 = chunk__17103;
var G__17108 = count__17104;
var G__17109 = (i__17105 + (1));
seq__17102 = G__17106;
chunk__17103 = G__17107;
count__17104 = G__17108;
i__17105 = G__17109;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17102);
if(temp__4657__auto__){
var seq__17102__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17102__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__17102__$1);
var G__17110 = cljs.core.chunk_rest(seq__17102__$1);
var G__17111 = c__7215__auto__;
var G__17112 = cljs.core.count(c__7215__auto__);
var G__17113 = (0);
seq__17102 = G__17110;
chunk__17103 = G__17111;
count__17104 = G__17112;
i__17105 = G__17113;
continue;
} else {
var premise = cljs.core.first(seq__17102__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred_type_SINGLEQUOTE_(premise),cljs.core.cst$kw$pred)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't consume instance of backward-chaining predicate `"),cljs.core.str(cljs.core.first(premise)),cljs.core.str("`!")].join('')),cljs.core.str("\n"),cljs.core.str("(= (pred-type' premise) :pred)")].join('')));
}

var G__17114 = cljs.core.next(seq__17102__$1);
var G__17115 = null;
var G__17116 = (0);
var G__17117 = (0);
seq__17102 = G__17114;
chunk__17103 = G__17115;
count__17104 = G__17116;
i__17105 = G__17117;
continue;
}
} else {
return null;
}
}
break;
}
})();
var checks = cljs.core.group_by(pred_type_SINGLEQUOTE_,cljs.core.cst$kw$check.cljs$core$IFn$_invoke$arity$1(rule));
var ___$1 = ((!(cljs.core.contains_QMARK_(checks,cljs.core.cst$kw$invalid)))?null:(function(){throw (new Error("Assert failed: (not (contains? checks :invalid))"))})());
var vec__17093 = riffle.compiler.compile_premises(cljs.core.cst$kw$consume.cljs$core$IFn$_invoke$arity$2(rule,cljs.core.List.EMPTY),program,cljs.core.PersistentArrayMap.EMPTY);
var consume = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(0),null);
var lvar_types = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(1),null);
var vec__17096 = riffle.compiler.compile_premises(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$2(checks,cljs.core.List.EMPTY),program,lvar_types);
var check_pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(0),null);
var lvar_types__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(1),null);
var vec__17099 = riffle.compiler.compile_premises(cljs.core.cst$kw$bwd.cljs$core$IFn$_invoke$arity$2(checks,cljs.core.List.EMPTY),program,lvar_types__$1);
var check_bwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099,(0),null);
var lvar_types__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rule,cljs.core.cst$kw$consume,consume,cljs.core.array_seq([cljs.core.cst$kw$check_DASH_pred,check_pred,cljs.core.cst$kw$check_DASH_bwd,check_bwd], 0)),cljs.core.cst$kw$results,riffle.compiler.compile_results,program,lvar_types__$2),cljs.core.cst$kw$check);
});
riffle.compiler.compile_quiescence_rule = (function riffle$compiler$compile_quiescence_rule(rule,program){
if(cljs.core.map_QMARK_(rule)){
} else {
throw (new Error("Assert failed: (map? rule)"));
}

if(cljs.core.truth_((function (){var or__6404__auto__ = cljs.core.cst$kw$ending_QMARK_.cljs$core$IFn$_invoke$arity$1(rule);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.cst$kw$stages.cljs$core$IFn$_invoke$arity$1(program),cljs.core.cst$kw$goto.cljs$core$IFn$_invoke$arity$1(rule));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't go to stage `"),cljs.core.str(cljs.core.cst$kw$goto.cljs$core$IFn$_invoke$arity$1(rule)),cljs.core.str("`: no such stage exists!")].join('')),cljs.core.str("\n"),cljs.core.str("(or (:ending? rule) (contains? (:stages program) (:goto rule)))")].join('')));
}

return riffle.compiler.compile_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rule,cljs.core.cst$kw$quiescence_DASH_rule_QMARK_,true),program);
});
riffle.compiler.compile_stage = (function riffle$compiler$compile_stage(stage,program){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("  \u25E6 Stage `"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(stage)),cljs.core.str("`")].join('')], 0));

if(cljs.core.map_QMARK_(stage)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Stage must be declared as a map!"),cljs.core.str("\n"),cljs.core.str("(map? stage)")].join('')));
}

if(cljs.core.truth_(riffle.compiler.valid_ident_QMARK_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(stage)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Stage name must be a valid identifier!"),cljs.core.str("\n"),cljs.core.str("(valid-ident? (:name stage))")].join('')));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interactive,null,cljs.core.cst$kw$ordered,null,cljs.core.cst$kw$random,null], null), null),cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(stage))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Stage selection mode must be one of :interactive, :ordered, or :random!"),cljs.core.str("\n"),cljs.core.str("(contains? #{:interactive :ordered :random} (:selection stage))")].join('')));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(stage,cljs.core.cst$kw$rules,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__17118_SHARP_){
return riffle.compiler.compile_rule(p1__17118_SHARP_,program);
}))),cljs.core.cst$kw$quiescence_DASH_rules,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__17119_SHARP_){
return riffle.compiler.compile_quiescence_rule(p1__17119_SHARP_,program);
})));
});
riffle.compiler.compile_stages = (function riffle$compiler$compile_stages(stages,types,preds,bwds){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u25E6 Compiling stages\u2026"], 0));

if(cljs.core.sequential_QMARK_(stages)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Stages must be declared as a list!"),cljs.core.str("\n"),cljs.core.str("(sequential? stages)")].join('')));
}

if(cljs.core.seq(stages)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Must declare at least one stage!"),cljs.core.str("\n"),cljs.core.str("(seq stages)")].join('')));
}

var program = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$types,types,cljs.core.cst$kw$preds,preds,cljs.core.cst$kw$bwds,bwds,cljs.core.cst$kw$stages,riffle.util.indexed_by(cljs.core.cst$kw$name,stages)], null);
return riffle.util.indexed_by(cljs.core.cst$kw$name,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (program){
return (function (p1__17120_SHARP_){
return riffle.compiler.compile_stage(p1__17120_SHARP_,program);
});})(program))
,stages));
});
riffle.compiler.check_name_conflicts = (function riffle$compiler$check_name_conflicts(p__17121){
var map__17124 = p__17121;
var map__17124__$1 = ((((!((map__17124 == null)))?((((map__17124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17124):map__17124);
var program = map__17124__$1;
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,cljs.core.cst$kw$types);
var preds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,cljs.core.cst$kw$preds);
var bwds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,cljs.core.cst$kw$bwds);
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,cljs.core.cst$kw$stages);
var type_names = cljs.core.keys(types);
var ctor_names = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,cljs.core.cst$kw$terms),cljs.core.array_seq([cljs.core.vals(types)], 0));
var pred_names = cljs.core.keys(preds);
var bwd_names = cljs.core.keys(bwds);
var stage_names = cljs.core.keys(stages);
var rule_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$rules,cljs.core.array_seq([cljs.core.vals(stages)], 0)));
return null;
});
/**
 * Main entry point for the entire `riffle.compiler` namespace. Given a valid
 *   `program`, compiles it and returns the resulting initial state.
 */
riffle.compiler.compile_program = (function riffle$compiler$compile_program(program){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Compiling program\u2026 \u2699\uFE0F"], 0));

var types = riffle.compiler.compile_types(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(program));
var preds = riffle.compiler.compile_preds(cljs.core.cst$kw$preds.cljs$core$IFn$_invoke$arity$1(program),types);
var bwds = riffle.compiler.compile_bwds(cljs.core.cst$kw$bwds.cljs$core$IFn$_invoke$arity$1(program),types);
var facts = riffle.compiler.compile_facts(cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(program),types,preds);
var stages = riffle.compiler.compile_stages(cljs.core.cst$kw$stages.cljs$core$IFn$_invoke$arity$1(program),types,preds,bwds);
var state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$types,types,cljs.core.cst$kw$preds,preds,cljs.core.cst$kw$bwds,bwds,cljs.core.cst$kw$facts,facts,cljs.core.cst$kw$stages,stages,cljs.core.cst$kw$stage,cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(program)], null);
riffle.compiler.check_name_conflicts(state);

if(cljs.core.contains_QMARK_(stages,cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(program))){
} else {
throw (new Error("Assert failed: (contains? stages (:stage program))"));
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Program compiled successfully! \uD83C\uDF89"], 0));

cljs.core.println();

return state;
});
