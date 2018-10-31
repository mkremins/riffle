// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$proto_DASH_sym,cljs.core.cst$sym$s_SLASH_Schema,cljs.core.cst$kw$proto_DASH_pred,(function (p1__17657__17658__auto__){
if(!((p1__17657__17658__auto__ == null))){
if((false) || (p1__17657__17658__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__17657__17658__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__17657__17658__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__17657__17658__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.OutputSchema,cljs.core.cst$sym$output)], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19269_SHARP_){
return (cljs.core.val(p1__19269_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__19273 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19273,(1),null);
var p = vec__19273;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$missing_DASH_key,cljs.core.cst$kw$key,k,cljs.core.cst$kw$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___19281 = schema.utils.use_fn_validation;
var output_schema19276_19282 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema19277_19283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker19278_19284 = schema.core.checker(input_schema19277_19283);
var output_checker19279_19285 = schema.core.checker(output_schema19276_19282);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19281,output_schema19276_19282,input_schema19277_19283,input_checker19278_19284,output_checker19279_19285){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__19280){
var validate__16887__auto__ = ufv___19281.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___19286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19280], null);
var temp__4657__auto___19287 = (input_checker19278_19284.cljs$core$IFn$_invoke$arity$1 ? input_checker19278_19284.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19286) : input_checker19278_19284.call(null,args__16888__auto___19286));
if(cljs.core.truth_(temp__4657__auto___19287)){
var error__16889__auto___19288 = temp__4657__auto___19287;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19288], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19277_19283,cljs.core.cst$kw$value,args__16888__auto___19286,cljs.core.cst$kw$error,error__16889__auto___19288], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var k = G__19280;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),cljs.core.cst$sym$schema$core_SLASH_optional_DASH_key))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___19289 = (output_checker19279_19285.cljs$core$IFn$_invoke$arity$1 ? output_checker19279_19285.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19279_19285.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19289)){
var error__16889__auto___19290 = temp__4657__auto___19289;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19290], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19276_19282,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19290], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19281,output_schema19276_19282,input_schema19277_19283,input_checker19278_19284,output_checker19279_19285))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema19276_19282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19277_19283], null)));
var ufv___19296 = schema.utils.use_fn_validation;
var output_schema19291_19297 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema19292_19298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker19293_19299 = schema.core.checker(input_schema19292_19298);
var output_checker19294_19300 = schema.core.checker(output_schema19291_19297);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19296,output_schema19291_19297,input_schema19292_19298,input_checker19293_19299,output_checker19294_19300){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__19295){
var validate__16887__auto__ = ufv___19296.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___19301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19295], null);
var temp__4657__auto___19302 = (input_checker19293_19299.cljs$core$IFn$_invoke$arity$1 ? input_checker19293_19299.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19301) : input_checker19293_19299.call(null,args__16888__auto___19301));
if(cljs.core.truth_(temp__4657__auto___19302)){
var error__16889__auto___19303 = temp__4657__auto___19302;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19303], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19292_19298,cljs.core.cst$kw$value,args__16888__auto___19301,cljs.core.cst$kw$error,error__16889__auto___19303], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var s = G__19295;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___19304 = (output_checker19294_19300.cljs$core$IFn$_invoke$arity$1 ? output_checker19294_19300.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19294_19300.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19304)){
var error__16889__auto___19305 = temp__4657__auto___19304;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19305], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19291_19297,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19305], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19296,output_schema19291_19297,input_schema19292_19298,input_checker19293_19299,output_checker19294_19300))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema19291_19297,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19292_19298], null)));
var ufv___19311 = schema.utils.use_fn_validation;
var output_schema19306_19312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$required),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$optional)], null);
var input_schema19307_19313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null)], null)))], null);
var input_checker19308_19314 = schema.core.checker(input_schema19307_19313);
var output_checker19309_19315 = schema.core.checker(output_schema19306_19312);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19311,output_schema19306_19312,input_schema19307_19313,input_checker19308_19314,output_checker19309_19315){
return (function plumbing$fnk$schema$split_schema_keys(G__19310){
var validate__16887__auto__ = ufv___19311.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___19316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19310], null);
var temp__4657__auto___19317 = (input_checker19308_19314.cljs$core$IFn$_invoke$arity$1 ? input_checker19308_19314.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19316) : input_checker19308_19314.call(null,args__16888__auto___19316));
if(cljs.core.truth_(temp__4657__auto___19317)){
var error__16889__auto___19318 = temp__4657__auto___19317;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19318], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19307_19313,cljs.core.cst$kw$value,args__16888__auto___19316,cljs.core.cst$kw$error,error__16889__auto___19318], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var s = G__19310;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___19319 = (output_checker19309_19315.cljs$core$IFn$_invoke$arity$1 ? output_checker19309_19315.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19309_19315.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19319)){
var error__16889__auto___19320 = temp__4657__auto___19319;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19320], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19306_19312,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19320], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19311,output_schema19306_19312,input_schema19307_19313,input_checker19308_19314,output_checker19309_19315))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema19306_19312,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19307_19313], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7486__auto__ = [];
var len__7479__auto___19332 = arguments.length;
var i__7480__auto___19333 = (0);
while(true){
if((i__7480__auto___19333 < len__7479__auto___19332)){
args__7486__auto__.push((arguments[i__7480__auto___19333]));

var G__19334 = (i__7480__auto___19333 + (1));
i__7480__auto___19333 = G__19334;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__19325){
var vec__19326 = p__19325;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19326,(1),null);
var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__19329 = temp__4655__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq19321){
var G__19322 = cljs.core.first(seq19321);
var seq19321__$1 = cljs.core.next(seq19321);
var G__19323 = cljs.core.first(seq19321__$1);
var seq19321__$2 = cljs.core.next(seq19321__$1);
var G__19324 = cljs.core.first(seq19321__$2);
var seq19321__$3 = cljs.core.next(seq19321__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__19322,G__19323,G__19324,seq19321__$3);
});

var ufv___19342 = schema.utils.use_fn_validation;
var output_schema19336_19343 = plumbing.fnk.schema.InputSchema;
var input_schema19337_19344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker19338_19345 = schema.core.checker(input_schema19337_19344);
var output_checker19339_19346 = schema.core.checker(output_schema19336_19343);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346){
return (function plumbing$fnk$schema$union_input_schemata(G__19340,G__19341){
var validate__16887__auto__ = ufv___19342.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___19347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19340,G__19341], null);
var temp__4657__auto___19348 = (input_checker19338_19345.cljs$core$IFn$_invoke$arity$1 ? input_checker19338_19345.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19347) : input_checker19338_19345.call(null,args__16888__auto___19347));
if(cljs.core.truth_(temp__4657__auto___19348)){
var error__16889__auto___19349 = temp__4657__auto___19348;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19349], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19337_19344,cljs.core.cst$kw$value,args__16888__auto___19347,cljs.core.cst$kw$error,error__16889__auto___19349], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var i1 = G__19340;
var i2 = G__19341;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__16887__auto__,ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346){
return (function (p1__19335_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__19335_SHARP_))){
return schema.core.explicit_schema_key(p1__19335_SHARP_);
} else {
return cljs.core.cst$kw$extra;
}
});})(validate__16887__auto__,ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346))
,((function (validate__16887__auto__,ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error("Assert failed: (= k1 k2)"));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__16887__auto__,ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346))
,((function (validate__16887__auto__,ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__6392__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__6392__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__6392__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__16887__auto__,ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___19350 = (output_checker19339_19346.cljs$core$IFn$_invoke$arity$1 ? output_checker19339_19346.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19339_19346.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19350)){
var error__16889__auto___19351 = temp__4657__auto___19350;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19351], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19336_19343,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19351], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19342,output_schema19336_19343,input_schema19337_19344,input_checker19338_19345,output_checker19339_19346))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema19336_19343,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19337_19344], null)));
var ufv___19357 = schema.utils.use_fn_validation;
var output_schema19352_19358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema19353_19359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$input_DASH_schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker19354_19360 = schema.core.checker(input_schema19353_19359);
var output_checker19355_19361 = schema.core.checker(output_schema19352_19358);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19357,output_schema19352_19358,input_schema19353_19359,input_checker19354_19360,output_checker19355_19361){
return (function plumbing$fnk$schema$required_toplevel_keys(G__19356){
var validate__16887__auto__ = ufv___19357.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___19362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19356], null);
var temp__4657__auto___19363 = (input_checker19354_19360.cljs$core$IFn$_invoke$arity$1 ? input_checker19354_19360.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19362) : input_checker19354_19360.call(null,args__16888__auto___19362));
if(cljs.core.truth_(temp__4657__auto___19363)){
var error__16889__auto___19364 = temp__4657__auto___19363;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19364], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19353_19359,cljs.core.cst$kw$value,args__16888__auto___19362,cljs.core.cst$kw$error,error__16889__auto___19364], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var input_schema = G__19356;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__16887__auto__,ufv___19357,output_schema19352_19358,input_schema19353_19359,input_checker19354_19360,output_checker19355_19361){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__16887__auto__,ufv___19357,output_schema19352_19358,input_schema19353_19359,input_checker19354_19360,output_checker19355_19361))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___19365 = (output_checker19355_19361.cljs$core$IFn$_invoke$arity$1 ? output_checker19355_19361.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19355_19361.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19365)){
var error__16889__auto___19366 = temp__4657__auto___19365;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19366], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19352_19358,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19366], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19357,output_schema19352_19358,input_schema19353_19359,input_checker19354_19360,output_checker19355_19361))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema19352_19358,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19353_19359], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__19385(s__19386){
return (new cljs.core.LazySeq(null,(function (){
var s__19386__$1 = s__19386;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19386__$1);
if(temp__4657__auto__){
var s__19386__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19386__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19386__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19388 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19387 = (0);
while(true){
if((i__19387 < size__7183__auto__)){
var vec__19397 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19387);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19397,(1),null);
cljs.core.chunk_append(b__19388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__19403 = (i__19387 + (1));
i__19387 = G__19403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19388),plumbing$fnk$schema$guess_expr_output_schema_$_iter__19385(cljs.core.chunk_rest(s__19386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19388),null);
}
} else {
var vec__19400 = cljs.core.first(s__19386__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__19385(cljs.core.rest(s__19386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(expr);
})());
} else {
return cljs.core.cst$sym$schema$core_SLASH_Any;
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.make_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(output_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__19430(s__19431){
return (new cljs.core.LazySeq(null,(function (){
var s__19431__$1 = s__19431;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19431__$1);
if(temp__4657__auto__){
var s__19431__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19431__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19431__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19433 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19432 = (0);
while(true){
if((i__19432 < size__7183__auto__)){
var vec__19442 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19432);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19442,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__19433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__19448 = (i__19432 + (1));
i__19432 = G__19448;
continue;
} else {
var G__19449 = (i__19432 + (1));
i__19432 = G__19449;
continue;
}
} else {
var G__19450 = (i__19432 + (1));
i__19432 = G__19450;
continue;
}
} else {
var G__19451 = (i__19432 + (1));
i__19432 = G__19451;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19433),plumbing$fnk$schema$schema_diff_$_iter__19430(cljs.core.chunk_rest(s__19431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19433),null);
}
} else {
var vec__19445 = cljs.core.first(s__19431__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19445,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__19430(cljs.core.rest(s__19431__$2)));
} else {
var G__19452 = cljs.core.rest(s__19431__$2);
s__19431__$1 = G__19452;
continue;
}
} else {
var G__19453 = cljs.core.rest(s__19431__$2);
s__19431__$1 = G__19453;
continue;
}
} else {
var G__19454 = cljs.core.rest(s__19431__$2);
s__19431__$1 = G__19454;
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
return iter__7184__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.cst$kw$failures,fails], null));
} else {
return null;
}
});
var ufv___19501 = schema.utils.use_fn_validation;
var output_schema19455_19502 = schema.core.Any;
var input_schema19456_19503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null),cljs.core.cst$sym$arg1)], null);
var input_checker19457_19504 = schema.core.checker(input_schema19456_19503);
var output_checker19458_19505 = schema.core.checker(output_schema19455_19502);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___19501,output_schema19455_19502,input_schema19456_19503,input_checker19457_19504,output_checker19458_19505){
return (function plumbing$fnk$schema$compose_schemata(G__19459,G__19460){
var validate__16887__auto__ = true;
if(validate__16887__auto__){
var args__16888__auto___19506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19459,G__19460], null);
var temp__4657__auto___19507 = (input_checker19457_19504.cljs$core$IFn$_invoke$arity$1 ? input_checker19457_19504.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19506) : input_checker19457_19504.call(null,args__16888__auto___19506));
if(cljs.core.truth_(temp__4657__auto___19507)){
var error__16889__auto___19508 = temp__4657__auto___19507;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19508], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19456_19503,cljs.core.cst$kw$value,args__16888__auto___19506,cljs.core.cst$kw$error,error__16889__auto___19508], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var G__19487 = G__19459;
var vec__19489 = G__19487;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19489,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19489,(1),null);
var G__19488 = G__19460;
var vec__19492 = G__19488;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19492,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19492,(1),null);
var G__19487__$1 = G__19487;
var G__19488__$1 = G__19488;
while(true){
var vec__19495 = G__19487__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19495,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19495,(1),null);
var vec__19498 = G__19488__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19498,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19498,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__16887__auto__){
var temp__4657__auto___19509 = (output_checker19458_19505.cljs$core$IFn$_invoke$arity$1 ? output_checker19458_19505.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19458_19505.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19509)){
var error__16889__auto___19510 = temp__4657__auto___19509;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19510], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19455_19502,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19510], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19501,output_schema19455_19502,input_schema19456_19503,input_checker19457_19504,output_checker19458_19505))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema19455_19502,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19456_19503], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___19673 = schema.utils.use_fn_validation;
var output_schema19511_19674 = schema.core.Any;
var input_schema19512_19675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(cljs.core.cst$sym$ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null)], null)))], null);
var input_checker19513_19676 = schema.core.checker(input_schema19512_19675);
var output_checker19514_19677 = schema.core.checker(output_schema19511_19674);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677){
return (function plumbing$fnk$schema$split_schema(G__19515,G__19516){
var validate__16887__auto__ = ufv___19673.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___19678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19515,G__19516], null);
var temp__4657__auto___19679 = (input_checker19513_19676.cljs$core$IFn$_invoke$arity$1 ? input_checker19513_19676.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19678) : input_checker19513_19676.call(null,args__16888__auto___19678));
if(cljs.core.truth_(temp__4657__auto___19679)){
var error__16889__auto___19680 = temp__4657__auto___19679;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19680], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19512_19675,cljs.core.cst$kw$value,args__16888__auto___19678,cljs.core.cst$kw$error,error__16889__auto___19680], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var s = G__19515;
var ks = G__19516;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__7184__auto__ = ((function (ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677){
return (function plumbing$fnk$schema$split_schema_$_iter__19595(s__19596){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677){
return (function (){
var s__19596__$1 = s__19596;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19596__$1);
if(temp__4657__auto__){
var s__19596__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19596__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19596__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19598 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19597 = (0);
while(true){
if((i__19597 < size__7183__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19597);
cljs.core.chunk_append(b__19598,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (i__19597,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19598,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677){
return (function plumbing$fnk$schema$split_schema_$_iter__19595_$_iter__19637(s__19638){
return (new cljs.core.LazySeq(null,((function (i__19597,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19598,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677){
return (function (){
var s__19638__$1 = s__19638;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19638__$1);
if(temp__4657__auto____$1){
var s__19638__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19638__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__19638__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__19640 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__19639 = (0);
while(true){
if((i__19639 < size__7183__auto____$1)){
var vec__19649 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__19639);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__19640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19681 = (i__19639 + (1));
i__19639 = G__19681;
continue;
} else {
var G__19682 = (i__19639 + (1));
i__19639 = G__19682;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19640),plumbing$fnk$schema$split_schema_$_iter__19595_$_iter__19637(cljs.core.chunk_rest(s__19638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19640),null);
}
} else {
var vec__19652 = cljs.core.first(s__19638__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__19595_$_iter__19637(cljs.core.rest(s__19638__$2)));
} else {
var G__19683 = cljs.core.rest(s__19638__$2);
s__19638__$1 = G__19683;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19597,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19598,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677))
,null,null));
});})(i__19597,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19598,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677))
;
return iter__7184__auto__(s);
})()));

var G__19684 = (i__19597 + (1));
i__19597 = G__19684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19598),plumbing$fnk$schema$split_schema_$_iter__19595(cljs.core.chunk_rest(s__19596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19598),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__19596__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (in_QMARK_,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677){
return (function plumbing$fnk$schema$split_schema_$_iter__19595_$_iter__19655(s__19656){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677){
return (function (){
var s__19656__$1 = s__19656;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19656__$1);
if(temp__4657__auto____$1){
var s__19656__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19656__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19656__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19658 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19657 = (0);
while(true){
if((i__19657 < size__7183__auto__)){
var vec__19667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19657);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19667,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__19658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19685 = (i__19657 + (1));
i__19657 = G__19685;
continue;
} else {
var G__19686 = (i__19657 + (1));
i__19657 = G__19686;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19658),plumbing$fnk$schema$split_schema_$_iter__19595_$_iter__19655(cljs.core.chunk_rest(s__19656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19658),null);
}
} else {
var vec__19670 = cljs.core.first(s__19656__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19670,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__19595_$_iter__19655(cljs.core.rest(s__19656__$2)));
} else {
var G__19687 = cljs.core.rest(s__19656__$2);
s__19656__$1 = G__19687;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677))
,null,null));
});})(in_QMARK_,s__19596__$2,temp__4657__auto__,ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677))
;
return iter__7184__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__19595(cljs.core.rest(s__19596__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677))
,null,null));
});})(ks__$1,validate__16887__auto__,ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677))
;
return iter__7184__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___19688 = (output_checker19514_19677.cljs$core$IFn$_invoke$arity$1 ? output_checker19514_19677.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19514_19677.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19688)){
var error__16889__auto___19689 = temp__4657__auto___19688;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19689], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19511_19674,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19689], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19673,output_schema19511_19674,input_schema19512_19675,input_checker19513_19676,output_checker19514_19677))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema19511_19674,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19512_19675], null)));
var ufv___19760 = schema.utils.use_fn_validation;
var output_schema19690_19761 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema19691_19762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),cljs.core.cst$sym$arg1)], null);
var input_checker19692_19763 = schema.core.checker(input_schema19691_19762);
var output_checker19693_19764 = schema.core.checker(output_schema19690_19761);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19760,output_schema19690_19761,input_schema19691_19762,input_checker19692_19763,output_checker19693_19764){
return (function plumbing$fnk$schema$sequence_schemata(G__19694,G__19695){
var validate__16887__auto__ = ufv___19760.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___19765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19694,G__19695], null);
var temp__4657__auto___19766 = (input_checker19692_19763.cljs$core$IFn$_invoke$arity$1 ? input_checker19692_19763.cljs$core$IFn$_invoke$arity$1(args__16888__auto___19765) : input_checker19692_19763.call(null,args__16888__auto___19765));
if(cljs.core.truth_(temp__4657__auto___19766)){
var error__16889__auto___19767 = temp__4657__auto___19766;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19767], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19691_19762,cljs.core.cst$kw$value,args__16888__auto___19765,cljs.core.cst$kw$error,error__16889__auto___19767], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var G__19737 = G__19694;
var vec__19739 = G__19737;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19739,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19739,(1),null);
var G__19738 = G__19695;
var vec__19742 = G__19738;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,(0),null);
var vec__19745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19745,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19745,(1),null);
var G__19737__$1 = G__19737;
var G__19738__$1 = G__19738;
while(true){
var vec__19748 = G__19737__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19748,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19748,(1),null);
var vec__19751 = G__19738__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19751,(0),null);
var vec__19754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19751,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19754,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19754,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__19757 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19757,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19757,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___19768 = (output_checker19693_19764.cljs$core$IFn$_invoke$arity$1 ? output_checker19693_19764.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker19693_19764.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___19768)){
var error__16889__auto___19769 = temp__4657__auto___19768;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___19769], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19690_19761,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___19769], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___19760,output_schema19690_19761,input_schema19691_19762,input_checker19692_19763,output_checker19693_19764))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema19690_19761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19691_19762], null)));
