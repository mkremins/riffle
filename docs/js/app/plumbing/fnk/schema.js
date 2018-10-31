// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$proto_DASH_sym,cljs.core.cst$sym$s_SLASH_Schema,cljs.core.cst$kw$proto_DASH_pred,(function (p1__18156__18157__auto__){
if(!((p1__18156__18157__auto__ == null))){
if((false) || (p1__18156__18157__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__18156__18157__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__18156__18157__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__18156__18157__auto__);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19768_SHARP_){
return (cljs.core.val(p1__19768_SHARP_) > (1));
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

var vec__19772 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19772,(1),null);
var p = vec__19772;
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
var ufv___19780 = schema.utils.use_fn_validation;
var output_schema19775_19781 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema19776_19782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker19777_19783 = schema.core.checker(input_schema19776_19782);
var output_checker19778_19784 = schema.core.checker(output_schema19775_19781);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19780,output_schema19775_19781,input_schema19776_19782,input_checker19777_19783,output_checker19778_19784){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__19779){
var validate__17386__auto__ = ufv___19780.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___19785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19779], null);
var temp__4657__auto___19786 = (input_checker19777_19783.cljs$core$IFn$_invoke$arity$1 ? input_checker19777_19783.cljs$core$IFn$_invoke$arity$1(args__17387__auto___19785) : input_checker19777_19783.call(null,args__17387__auto___19785));
if(cljs.core.truth_(temp__4657__auto___19786)){
var error__17388__auto___19787 = temp__4657__auto___19786;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19787], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19776_19782,cljs.core.cst$kw$value,args__17387__auto___19785,cljs.core.cst$kw$error,error__17388__auto___19787], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var k = G__19779;
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
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___19788 = (output_checker19778_19784.cljs$core$IFn$_invoke$arity$1 ? output_checker19778_19784.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker19778_19784.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___19788)){
var error__17388__auto___19789 = temp__4657__auto___19788;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19789], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19775_19781,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___19789], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___19780,output_schema19775_19781,input_schema19776_19782,input_checker19777_19783,output_checker19778_19784))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema19775_19781,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19776_19782], null)));
var ufv___19795 = schema.utils.use_fn_validation;
var output_schema19790_19796 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema19791_19797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker19792_19798 = schema.core.checker(input_schema19791_19797);
var output_checker19793_19799 = schema.core.checker(output_schema19790_19796);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19795,output_schema19790_19796,input_schema19791_19797,input_checker19792_19798,output_checker19793_19799){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__19794){
var validate__17386__auto__ = ufv___19795.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___19800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19794], null);
var temp__4657__auto___19801 = (input_checker19792_19798.cljs$core$IFn$_invoke$arity$1 ? input_checker19792_19798.cljs$core$IFn$_invoke$arity$1(args__17387__auto___19800) : input_checker19792_19798.call(null,args__17387__auto___19800));
if(cljs.core.truth_(temp__4657__auto___19801)){
var error__17388__auto___19802 = temp__4657__auto___19801;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19802], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19791_19797,cljs.core.cst$kw$value,args__17387__auto___19800,cljs.core.cst$kw$error,error__17388__auto___19802], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var s = G__19794;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___19803 = (output_checker19793_19799.cljs$core$IFn$_invoke$arity$1 ? output_checker19793_19799.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker19793_19799.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___19803)){
var error__17388__auto___19804 = temp__4657__auto___19803;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19804], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19790_19796,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___19804], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___19795,output_schema19790_19796,input_schema19791_19797,input_checker19792_19798,output_checker19793_19799))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema19790_19796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19791_19797], null)));
var ufv___19810 = schema.utils.use_fn_validation;
var output_schema19805_19811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$required),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$optional)], null);
var input_schema19806_19812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null)], null)))], null);
var input_checker19807_19813 = schema.core.checker(input_schema19806_19812);
var output_checker19808_19814 = schema.core.checker(output_schema19805_19811);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19810,output_schema19805_19811,input_schema19806_19812,input_checker19807_19813,output_checker19808_19814){
return (function plumbing$fnk$schema$split_schema_keys(G__19809){
var validate__17386__auto__ = ufv___19810.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___19815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19809], null);
var temp__4657__auto___19816 = (input_checker19807_19813.cljs$core$IFn$_invoke$arity$1 ? input_checker19807_19813.cljs$core$IFn$_invoke$arity$1(args__17387__auto___19815) : input_checker19807_19813.call(null,args__17387__auto___19815));
if(cljs.core.truth_(temp__4657__auto___19816)){
var error__17388__auto___19817 = temp__4657__auto___19816;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19817], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19806_19812,cljs.core.cst$kw$value,args__17387__auto___19815,cljs.core.cst$kw$error,error__17388__auto___19817], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var s = G__19809;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___19818 = (output_checker19808_19814.cljs$core$IFn$_invoke$arity$1 ? output_checker19808_19814.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker19808_19814.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___19818)){
var error__17388__auto___19819 = temp__4657__auto___19818;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19819], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19805_19811,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___19819], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___19810,output_schema19805_19811,input_schema19806_19812,input_checker19807_19813,output_checker19808_19814))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema19805_19811,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19806_19812], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7486__auto__ = [];
var len__7479__auto___19831 = arguments.length;
var i__7480__auto___19832 = (0);
while(true){
if((i__7480__auto___19832 < len__7479__auto___19831)){
args__7486__auto__.push((arguments[i__7480__auto___19832]));

var G__19833 = (i__7480__auto___19832 + (1));
i__7480__auto___19832 = G__19833;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__19824){
var vec__19825 = p__19824;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19825,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19825,(1),null);
var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__19828 = temp__4655__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq19820){
var G__19821 = cljs.core.first(seq19820);
var seq19820__$1 = cljs.core.next(seq19820);
var G__19822 = cljs.core.first(seq19820__$1);
var seq19820__$2 = cljs.core.next(seq19820__$1);
var G__19823 = cljs.core.first(seq19820__$2);
var seq19820__$3 = cljs.core.next(seq19820__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__19821,G__19822,G__19823,seq19820__$3);
});

var ufv___19841 = schema.utils.use_fn_validation;
var output_schema19835_19842 = plumbing.fnk.schema.InputSchema;
var input_schema19836_19843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker19837_19844 = schema.core.checker(input_schema19836_19843);
var output_checker19838_19845 = schema.core.checker(output_schema19835_19842);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845){
return (function plumbing$fnk$schema$union_input_schemata(G__19839,G__19840){
var validate__17386__auto__ = ufv___19841.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___19846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19839,G__19840], null);
var temp__4657__auto___19847 = (input_checker19837_19844.cljs$core$IFn$_invoke$arity$1 ? input_checker19837_19844.cljs$core$IFn$_invoke$arity$1(args__17387__auto___19846) : input_checker19837_19844.call(null,args__17387__auto___19846));
if(cljs.core.truth_(temp__4657__auto___19847)){
var error__17388__auto___19848 = temp__4657__auto___19847;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19848], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19836_19843,cljs.core.cst$kw$value,args__17387__auto___19846,cljs.core.cst$kw$error,error__17388__auto___19848], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var i1 = G__19839;
var i2 = G__19840;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__17386__auto__,ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845){
return (function (p1__19834_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__19834_SHARP_))){
return schema.core.explicit_schema_key(p1__19834_SHARP_);
} else {
return cljs.core.cst$kw$extra;
}
});})(validate__17386__auto__,ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845))
,((function (validate__17386__auto__,ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845){
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
});})(validate__17386__auto__,ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845))
,((function (validate__17386__auto__,ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845){
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
});})(validate__17386__auto__,ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___19849 = (output_checker19838_19845.cljs$core$IFn$_invoke$arity$1 ? output_checker19838_19845.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker19838_19845.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___19849)){
var error__17388__auto___19850 = temp__4657__auto___19849;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19850], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19835_19842,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___19850], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___19841,output_schema19835_19842,input_schema19836_19843,input_checker19837_19844,output_checker19838_19845))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema19835_19842,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19836_19843], null)));
var ufv___19856 = schema.utils.use_fn_validation;
var output_schema19851_19857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema19852_19858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$input_DASH_schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker19853_19859 = schema.core.checker(input_schema19852_19858);
var output_checker19854_19860 = schema.core.checker(output_schema19851_19857);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19856,output_schema19851_19857,input_schema19852_19858,input_checker19853_19859,output_checker19854_19860){
return (function plumbing$fnk$schema$required_toplevel_keys(G__19855){
var validate__17386__auto__ = ufv___19856.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___19861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19855], null);
var temp__4657__auto___19862 = (input_checker19853_19859.cljs$core$IFn$_invoke$arity$1 ? input_checker19853_19859.cljs$core$IFn$_invoke$arity$1(args__17387__auto___19861) : input_checker19853_19859.call(null,args__17387__auto___19861));
if(cljs.core.truth_(temp__4657__auto___19862)){
var error__17388__auto___19863 = temp__4657__auto___19862;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19863], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19852_19858,cljs.core.cst$kw$value,args__17387__auto___19861,cljs.core.cst$kw$error,error__17388__auto___19863], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var input_schema = G__19855;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__17386__auto__,ufv___19856,output_schema19851_19857,input_schema19852_19858,input_checker19853_19859,output_checker19854_19860){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__17386__auto__,ufv___19856,output_schema19851_19857,input_schema19852_19858,input_checker19853_19859,output_checker19854_19860))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___19864 = (output_checker19854_19860.cljs$core$IFn$_invoke$arity$1 ? output_checker19854_19860.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker19854_19860.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___19864)){
var error__17388__auto___19865 = temp__4657__auto___19864;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___19865], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19851_19857,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___19865], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___19856,output_schema19851_19857,input_schema19852_19858,input_checker19853_19859,output_checker19854_19860))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema19851_19857,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19852_19858], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__19884(s__19885){
return (new cljs.core.LazySeq(null,(function (){
var s__19885__$1 = s__19885;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19885__$1);
if(temp__4657__auto__){
var s__19885__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19885__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19885__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19887 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19886 = (0);
while(true){
if((i__19886 < size__7183__auto__)){
var vec__19896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19886);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19896,(1),null);
cljs.core.chunk_append(b__19887,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__19902 = (i__19886 + (1));
i__19886 = G__19902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19887),plumbing$fnk$schema$guess_expr_output_schema_$_iter__19884(cljs.core.chunk_rest(s__19885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19887),null);
}
} else {
var vec__19899 = cljs.core.first(s__19885__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__19884(cljs.core.rest(s__19885__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__19929(s__19930){
return (new cljs.core.LazySeq(null,(function (){
var s__19930__$1 = s__19930;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19930__$1);
if(temp__4657__auto__){
var s__19930__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19930__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19930__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19932 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19931 = (0);
while(true){
if((i__19931 < size__7183__auto__)){
var vec__19941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19931);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19941,(1),null);
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
cljs.core.chunk_append(b__19932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__19947 = (i__19931 + (1));
i__19931 = G__19947;
continue;
} else {
var G__19948 = (i__19931 + (1));
i__19931 = G__19948;
continue;
}
} else {
var G__19949 = (i__19931 + (1));
i__19931 = G__19949;
continue;
}
} else {
var G__19950 = (i__19931 + (1));
i__19931 = G__19950;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19932),plumbing$fnk$schema$schema_diff_$_iter__19929(cljs.core.chunk_rest(s__19930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19932),null);
}
} else {
var vec__19944 = cljs.core.first(s__19930__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(1),null);
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
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__19929(cljs.core.rest(s__19930__$2)));
} else {
var G__19951 = cljs.core.rest(s__19930__$2);
s__19930__$1 = G__19951;
continue;
}
} else {
var G__19952 = cljs.core.rest(s__19930__$2);
s__19930__$1 = G__19952;
continue;
}
} else {
var G__19953 = cljs.core.rest(s__19930__$2);
s__19930__$1 = G__19953;
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
var ufv___20000 = schema.utils.use_fn_validation;
var output_schema19954_20001 = schema.core.Any;
var input_schema19955_20002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null),cljs.core.cst$sym$arg1)], null);
var input_checker19956_20003 = schema.core.checker(input_schema19955_20002);
var output_checker19957_20004 = schema.core.checker(output_schema19954_20001);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___20000,output_schema19954_20001,input_schema19955_20002,input_checker19956_20003,output_checker19957_20004){
return (function plumbing$fnk$schema$compose_schemata(G__19958,G__19959){
var validate__17386__auto__ = true;
if(validate__17386__auto__){
var args__17387__auto___20005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19958,G__19959], null);
var temp__4657__auto___20006 = (input_checker19956_20003.cljs$core$IFn$_invoke$arity$1 ? input_checker19956_20003.cljs$core$IFn$_invoke$arity$1(args__17387__auto___20005) : input_checker19956_20003.call(null,args__17387__auto___20005));
if(cljs.core.truth_(temp__4657__auto___20006)){
var error__17388__auto___20007 = temp__4657__auto___20006;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___20007], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19955_20002,cljs.core.cst$kw$value,args__17387__auto___20005,cljs.core.cst$kw$error,error__17388__auto___20007], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var G__19986 = G__19958;
var vec__19988 = G__19986;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(1),null);
var G__19987 = G__19959;
var vec__19991 = G__19987;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19991,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19991,(1),null);
var G__19986__$1 = G__19986;
var G__19987__$1 = G__19987;
while(true){
var vec__19994 = G__19986__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19994,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19994,(1),null);
var vec__19997 = G__19987__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19997,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19997,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__17386__auto__){
var temp__4657__auto___20008 = (output_checker19957_20004.cljs$core$IFn$_invoke$arity$1 ? output_checker19957_20004.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker19957_20004.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___20008)){
var error__17388__auto___20009 = temp__4657__auto___20008;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___20009], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19954_20001,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___20009], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___20000,output_schema19954_20001,input_schema19955_20002,input_checker19956_20003,output_checker19957_20004))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema19954_20001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19955_20002], null)));
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
var ufv___20172 = schema.utils.use_fn_validation;
var output_schema20010_20173 = schema.core.Any;
var input_schema20011_20174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(cljs.core.cst$sym$ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null)], null)))], null);
var input_checker20012_20175 = schema.core.checker(input_schema20011_20174);
var output_checker20013_20176 = schema.core.checker(output_schema20010_20173);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176){
return (function plumbing$fnk$schema$split_schema(G__20014,G__20015){
var validate__17386__auto__ = ufv___20172.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___20177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20014,G__20015], null);
var temp__4657__auto___20178 = (input_checker20012_20175.cljs$core$IFn$_invoke$arity$1 ? input_checker20012_20175.cljs$core$IFn$_invoke$arity$1(args__17387__auto___20177) : input_checker20012_20175.call(null,args__17387__auto___20177));
if(cljs.core.truth_(temp__4657__auto___20178)){
var error__17388__auto___20179 = temp__4657__auto___20178;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___20179], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20011_20174,cljs.core.cst$kw$value,args__17387__auto___20177,cljs.core.cst$kw$error,error__17388__auto___20179], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var s = G__20014;
var ks = G__20015;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__7184__auto__ = ((function (ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176){
return (function plumbing$fnk$schema$split_schema_$_iter__20094(s__20095){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176){
return (function (){
var s__20095__$1 = s__20095;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20095__$1);
if(temp__4657__auto__){
var s__20095__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20095__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20095__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20097 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20096 = (0);
while(true){
if((i__20096 < size__7183__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20096);
cljs.core.chunk_append(b__20097,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (i__20096,in_QMARK_,c__7182__auto__,size__7183__auto__,b__20097,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176){
return (function plumbing$fnk$schema$split_schema_$_iter__20094_$_iter__20136(s__20137){
return (new cljs.core.LazySeq(null,((function (i__20096,in_QMARK_,c__7182__auto__,size__7183__auto__,b__20097,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176){
return (function (){
var s__20137__$1 = s__20137;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__20137__$1);
if(temp__4657__auto____$1){
var s__20137__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20137__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__20137__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__20139 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__20138 = (0);
while(true){
if((i__20138 < size__7183__auto____$1)){
var vec__20148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__20138);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__20139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20180 = (i__20138 + (1));
i__20138 = G__20180;
continue;
} else {
var G__20181 = (i__20138 + (1));
i__20138 = G__20181;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20139),plumbing$fnk$schema$split_schema_$_iter__20094_$_iter__20136(cljs.core.chunk_rest(s__20137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20139),null);
}
} else {
var vec__20151 = cljs.core.first(s__20137__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20151,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__20094_$_iter__20136(cljs.core.rest(s__20137__$2)));
} else {
var G__20182 = cljs.core.rest(s__20137__$2);
s__20137__$1 = G__20182;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__20096,in_QMARK_,c__7182__auto__,size__7183__auto__,b__20097,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176))
,null,null));
});})(i__20096,in_QMARK_,c__7182__auto__,size__7183__auto__,b__20097,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176))
;
return iter__7184__auto__(s);
})()));

var G__20183 = (i__20096 + (1));
i__20096 = G__20183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20097),plumbing$fnk$schema$split_schema_$_iter__20094(cljs.core.chunk_rest(s__20095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20097),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__20095__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (in_QMARK_,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176){
return (function plumbing$fnk$schema$split_schema_$_iter__20094_$_iter__20154(s__20155){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176){
return (function (){
var s__20155__$1 = s__20155;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__20155__$1);
if(temp__4657__auto____$1){
var s__20155__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20155__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20155__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20157 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20156 = (0);
while(true){
if((i__20156 < size__7183__auto__)){
var vec__20166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20156);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20166,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__20157,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20184 = (i__20156 + (1));
i__20156 = G__20184;
continue;
} else {
var G__20185 = (i__20156 + (1));
i__20156 = G__20185;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20157),plumbing$fnk$schema$split_schema_$_iter__20094_$_iter__20154(cljs.core.chunk_rest(s__20155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20157),null);
}
} else {
var vec__20169 = cljs.core.first(s__20155__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20169,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__20094_$_iter__20154(cljs.core.rest(s__20155__$2)));
} else {
var G__20186 = cljs.core.rest(s__20155__$2);
s__20155__$1 = G__20186;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176))
,null,null));
});})(in_QMARK_,s__20095__$2,temp__4657__auto__,ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176))
;
return iter__7184__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__20094(cljs.core.rest(s__20095__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176))
,null,null));
});})(ks__$1,validate__17386__auto__,ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176))
;
return iter__7184__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___20187 = (output_checker20013_20176.cljs$core$IFn$_invoke$arity$1 ? output_checker20013_20176.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker20013_20176.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___20187)){
var error__17388__auto___20188 = temp__4657__auto___20187;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___20188], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20010_20173,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___20188], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___20172,output_schema20010_20173,input_schema20011_20174,input_checker20012_20175,output_checker20013_20176))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema20010_20173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20011_20174], null)));
var ufv___20259 = schema.utils.use_fn_validation;
var output_schema20189_20260 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema20190_20261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),cljs.core.cst$sym$arg1)], null);
var input_checker20191_20262 = schema.core.checker(input_schema20190_20261);
var output_checker20192_20263 = schema.core.checker(output_schema20189_20260);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20259,output_schema20189_20260,input_schema20190_20261,input_checker20191_20262,output_checker20192_20263){
return (function plumbing$fnk$schema$sequence_schemata(G__20193,G__20194){
var validate__17386__auto__ = ufv___20259.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___20264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20193,G__20194], null);
var temp__4657__auto___20265 = (input_checker20191_20262.cljs$core$IFn$_invoke$arity$1 ? input_checker20191_20262.cljs$core$IFn$_invoke$arity$1(args__17387__auto___20264) : input_checker20191_20262.call(null,args__17387__auto___20264));
if(cljs.core.truth_(temp__4657__auto___20265)){
var error__17388__auto___20266 = temp__4657__auto___20265;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___20266], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20190_20261,cljs.core.cst$kw$value,args__17387__auto___20264,cljs.core.cst$kw$error,error__17388__auto___20266], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var G__20236 = G__20193;
var vec__20238 = G__20236;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20238,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20238,(1),null);
var G__20237 = G__20194;
var vec__20241 = G__20237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20241,(0),null);
var vec__20244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20241,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20244,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20244,(1),null);
var G__20236__$1 = G__20236;
var G__20237__$1 = G__20237;
while(true){
var vec__20247 = G__20236__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(1),null);
var vec__20250 = G__20237__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20250,(0),null);
var vec__20253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20250,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20253,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20253,(1),null);
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

var vec__20256 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___20267 = (output_checker20192_20263.cljs$core$IFn$_invoke$arity$1 ? output_checker20192_20263.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker20192_20263.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___20267)){
var error__17388__auto___20268 = temp__4657__auto___20267;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___20268], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20189_20260,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___20268], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___20259,output_schema20189_20260,input_schema20190_20261,input_checker20191_20262,output_checker20192_20263))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema20189_20260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20190_20261], null)));
