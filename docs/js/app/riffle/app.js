// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('riffle.app');
goog.require('cljs.core');
goog.require('riffle.engine');
goog.require('riffle.compiler');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('riffle.editor');
goog.require('riffle.util');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
riffle.app.app_state = (function (){var G__22307 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$editor,riffle.editor.init_editor_state_BANG_(),cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$running_QMARK_,false,cljs.core.cst$kw$state,cljs.core.PersistentArrayMap.EMPTY], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22307) : cljs.core.atom.call(null,G__22307));
})();
riffle.app.value = (function riffle$app$value(ev){
return ev.target.value;
});
riffle.app.int_value = (function riffle$app$int_value(ev){
var G__22309 = riffle.app.value(ev);
if((G__22309 == null)){
return null;
} else {
return parseInt(G__22309,(10));
}
});
riffle.app.copy_computed_styles_BANG_ = (function riffle$app$copy_computed_styles_BANG_(from,to,css_props){
var from_style = window.getComputedStyle(from);
var to_style = to.style;
var seq__22314 = cljs.core.seq(css_props);
var chunk__22315 = null;
var count__22316 = (0);
var i__22317 = (0);
while(true){
if((i__22317 < count__22316)){
var prop = chunk__22315.cljs$core$IIndexed$_nth$arity$2(null,i__22317);
to_style.setProperty(prop,from_style.getPropertyValue(prop));

var G__22318 = seq__22314;
var G__22319 = chunk__22315;
var G__22320 = count__22316;
var G__22321 = (i__22317 + (1));
seq__22314 = G__22318;
chunk__22315 = G__22319;
count__22316 = G__22320;
i__22317 = G__22321;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22314);
if(temp__4657__auto__){
var seq__22314__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22314__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__22314__$1);
var G__22322 = cljs.core.chunk_rest(seq__22314__$1);
var G__22323 = c__7215__auto__;
var G__22324 = cljs.core.count(c__7215__auto__);
var G__22325 = (0);
seq__22314 = G__22322;
chunk__22315 = G__22323;
count__22316 = G__22324;
i__22317 = G__22325;
continue;
} else {
var prop = cljs.core.first(seq__22314__$1);
to_style.setProperty(prop,from_style.getPropertyValue(prop));

var G__22326 = cljs.core.next(seq__22314__$1);
var G__22327 = null;
var G__22328 = (0);
var G__22329 = (0);
seq__22314 = G__22326;
chunk__22315 = G__22327;
count__22316 = G__22328;
i__22317 = G__22329;
continue;
}
} else {
return null;
}
}
break;
}
});

var ufv___22369 = schema.utils.use_fn_validation;
var output_schema22331_22370 = schema.core.Any;
var input_schema22332_22371 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.cst$sym$arg2)], null);
var input_checker22333_22372 = schema.core.checker(input_schema22332_22371);
var output_checker22334_22373 = schema.core.checker(output_schema22331_22370);
/**
 * Inputs: [props owner {:keys [multiline?]}]
 */
riffle.app.autoresizing_text_input = ((function (ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function riffle$app$autoresizing_text_input(G__22335,G__22336,G__22337){
var validate__17386__auto__ = ufv___22369.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22335,G__22336,G__22337], null);
var temp__4657__auto___22375 = (input_checker22333_22372.cljs$core$IFn$_invoke$arity$1 ? input_checker22333_22372.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22374) : input_checker22333_22372.call(null,args__17387__auto___22374));
if(cljs.core.truth_(temp__4657__auto___22375)){
var error__17388__auto___22376 = temp__4657__auto___22375;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$autoresizing_DASH_text_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22376], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22332_22371,cljs.core.cst$kw$value,args__17387__auto___22374,cljs.core.cst$kw$error,error__17388__auto___22376], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22335;
var owner = G__22336;
var G__22353 = G__22337;
var map__22354 = G__22353;
var map__22354__$1 = ((((!((map__22354 == null)))?((((map__22354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22354):map__22354);
var multiline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22354__$1,cljs.core.cst$kw$multiline_QMARK_);
var props__$1 = props;
var owner__$1 = owner;
var G__22353__$1 = G__22353;
while(true){
var props__$2 = props__$1;
var owner__$2 = owner__$1;
var map__22356 = G__22353__$1;
var map__22356__$1 = ((((!((map__22356 == null)))?((((map__22356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22356):map__22356);
var multiline_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356__$1,cljs.core.cst$kw$multiline_QMARK_);
if(typeof riffle.app.t_riffle$app22358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22358 = (function (output_checker22334,autoresizing_text_input,G__22336,input_schema22332,owner,validate__17386__auto__,map__22354,G__22353,props,map__22356,multiline_QMARK_,output_schema22331,G__22335,G__22337,input_checker22333,ufv__,meta22359){
this.output_checker22334 = output_checker22334;
this.autoresizing_text_input = autoresizing_text_input;
this.G__22336 = G__22336;
this.input_schema22332 = input_schema22332;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.map__22354 = map__22354;
this.G__22353 = G__22353;
this.props = props;
this.map__22356 = map__22356;
this.multiline_QMARK_ = multiline_QMARK_;
this.output_schema22331 = output_schema22331;
this.G__22335 = G__22335;
this.G__22337 = G__22337;
this.input_checker22333 = input_checker22333;
this.ufv__ = ufv__;
this.meta22359 = meta22359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (_22360,meta22359__$1){
var self__ = this;
var _22360__$1 = this;
return (new riffle.app.t_riffle$app22358(self__.output_checker22334,self__.autoresizing_text_input,self__.G__22336,self__.input_schema22332,self__.owner,self__.validate__17386__auto__,self__.map__22354,self__.G__22353,self__.props,self__.map__22356,self__.multiline_QMARK_,self__.output_schema22331,self__.G__22335,self__.G__22337,self__.input_checker22333,self__.ufv__,meta22359__$1));
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (_22360){
var self__ = this;
var _22360__$1 = this;
return self__.meta22359;
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22358.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autoresizing-text-input";
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.prototype.om$core$IInitState$ = true;

riffle.app.t_riffle$app22358.prototype.om$core$IInitState$init_state$arity$1 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fake_DASH_input,(function (){var G__22361 = (cljs.core.truth_(self__.multiline_QMARK_)?"div":"span");
return document.createElement(G__22361);
})()], null);
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.prototype.om$core$IRenderState$ = true;

riffle.app.t_riffle$app22358.prototype.om$core$IRenderState$render_state$arity$2 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (_,p__22362){
var self__ = this;
var map__22363 = p__22362;
var map__22363__$1 = ((((!((map__22363 == null)))?((((map__22363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22363):map__22363);
var fake_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,cljs.core.cst$kw$fake_DASH_input);
var ___$1 = this;
om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$fake_DASH_input).textContent = ((cljs.core.seq(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(self__.props)))?cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(self__.props):cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(self__.props));

if(cljs.core.truth_(self__.multiline_QMARK_)){
return om_tools.dom.element(om.dom.textarea,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,[cljs.core.str(fake_input.offsetHeight),cljs.core.str("px")].join('')], null)),cljs.core.PersistentVector.EMPTY);
} else {
return om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(fake_input.offsetWidth),cljs.core.str("px")].join('')], null),cljs.core.array_seq([cljs.core.cst$kw$type,"text"], 0)),cljs.core.PersistentVector.EMPTY);
}
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.prototype.om$core$IDidMount$ = true;

riffle.app.t_riffle$app22358.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (_){
var self__ = this;
var ___$1 = this;
var fake_input = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$fake_DASH_input);
document.body.appendChild(fake_input);

riffle.app.copy_computed_styles_BANG_(om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner),fake_input,(function (){var G__22365 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","font","margin","padding","white-space"], null);
if(cljs.core.truth_(self__.multiline_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22365,"width");
} else {
return G__22365;
}
})());

fake_input.style.position = "fixed";

fake_input.style.top = "0";

fake_input.style.visibility = "hidden";

return om.core.refresh_BANG_(self__.owner);
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.prototype.om$core$IWillUnmount$ = true;

riffle.app.t_riffle$app22358.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$fake_DASH_input).remove();
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.getBasis = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_checker22334,cljs.core.with_meta(cljs.core.cst$sym$autoresizing_DASH_text_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$multiline_QMARK_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22331,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22332], null)),cljs.core.cst$kw$doc,"Inputs: [props owner {:keys [multiline?]}]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$multiline_QMARK_], null)], null)], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22336,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22332,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$map__22354,cljs.core.cst$sym$G__22353,cljs.core.cst$sym$props,cljs.core.cst$sym$map__22356,cljs.core.cst$sym$multiline_QMARK_,cljs.core.cst$sym$output_DASH_schema22331,cljs.core.with_meta(cljs.core.cst$sym$G__22335,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22337,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22333,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22359], null);
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.t_riffle$app22358.cljs$lang$type = true;

riffle.app.t_riffle$app22358.cljs$lang$ctorStr = "riffle.app/t_riffle$app22358";

riffle.app.t_riffle$app22358.cljs$lang$ctorPrWriter = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22358");
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

riffle.app.__GT_t_riffle$app22358 = ((function (props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373){
return (function riffle$app$autoresizing_text_input_$___GT_t_riffle$app22358(output_checker22334__$1,autoresizing_text_input__$1,G__22336__$1,input_schema22332__$1,owner__$3,validate__17386__auto____$1,map__22354__$2,G__22353__$2,props__$3,map__22356__$2,multiline_QMARK___$2,output_schema22331__$1,G__22335__$1,G__22337__$1,input_checker22333__$1,ufv____$1,meta22359){
return (new riffle.app.t_riffle$app22358(output_checker22334__$1,autoresizing_text_input__$1,G__22336__$1,input_schema22332__$1,owner__$3,validate__17386__auto____$1,map__22354__$2,G__22353__$2,props__$3,map__22356__$2,multiline_QMARK___$2,output_schema22331__$1,G__22335__$1,G__22337__$1,input_checker22333__$1,ufv____$1,meta22359));
});})(props__$2,owner__$2,map__22356,map__22356__$1,multiline_QMARK___$1,props,owner,G__22353,map__22354,map__22354__$1,multiline_QMARK_,validate__17386__auto__,ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

}

return (new riffle.app.t_riffle$app22358(output_checker22334_22373,riffle$app$autoresizing_text_input,G__22336,input_schema22332_22371,owner__$2,validate__17386__auto__,map__22354__$1,G__22353__$1,props__$2,map__22356__$1,multiline_QMARK___$1,output_schema22331_22370,G__22335,G__22337,input_checker22333_22372,ufv___22369,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22377 = (output_checker22334_22373.cljs$core$IFn$_invoke$arity$1 ? output_checker22334_22373.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22334_22373.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22377)){
var error__17388__auto___22378 = temp__4657__auto___22377;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$autoresizing_DASH_text_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22378], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22331_22370,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22378], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22369,output_schema22331_22370,input_schema22332_22371,input_checker22333_22372,output_checker22334_22373))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.autoresizing_text_input),schema.core.make_fn_schema(output_schema22331_22370,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22332_22371], null)));

riffle.app.__GT_autoresizing_text_input = (function riffle$app$__GT_autoresizing_text_input(var_args){
var args22366 = [];
var len__7479__auto___22379 = arguments.length;
var i__7480__auto___22380 = (0);
while(true){
if((i__7480__auto___22380 < len__7479__auto___22379)){
args22366.push((arguments[i__7480__auto___22380]));

var G__22381 = (i__7480__auto___22380 + (1));
i__7480__auto___22380 = G__22381;
continue;
} else {
}
break;
}

var G__22368 = args22366.length;
switch (G__22368) {
case 1:
return riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22366.length)].join('')));

}
});

riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,cursor__22252__auto__);
});

riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22330){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.autoresizing_text_input,cursor__22252__auto__,m22330);
});

riffle.app.__GT_autoresizing_text_input.cljs$lang$maxFixedArity = 2;

riffle.app.domify = (function riffle$app$domify(var_args){
var args22383 = [];
var len__7479__auto___22386 = arguments.length;
var i__7480__auto___22387 = (0);
while(true){
if((i__7480__auto___22387 < len__7479__auto___22386)){
args22383.push((arguments[i__7480__auto___22387]));

var G__22388 = (i__7480__auto___22387 + (1));
i__7480__auto___22387 = G__22388;
continue;
} else {
}
break;
}

var G__22385 = args22383.length;
switch (G__22385) {
case 2:
return riffle.app.domify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return riffle.app.domify.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22383.length)].join('')));

}
});

riffle.app.domify.cljs$core$IFn$_invoke$arity$2 = (function (component,cursor){
return riffle.app.domify.cljs$core$IFn$_invoke$arity$3(component,cursor,cljs.core.PersistentArrayMap.EMPTY);
});

riffle.app.domify.cljs$core$IFn$_invoke$arity$3 = (function (component,cursor,m){
return (function() { 
var G__22390__delegate = function (attrs,children){
return om.core.build.cljs$core$IFn$_invoke$arity$3(component,cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attrs,attrs,cljs.core.cst$kw$children,children], null)));
};
var G__22390 = function (attrs,var_args){
var children = null;
if (arguments.length > 1) {
var G__22391__i = 0, G__22391__a = new Array(arguments.length -  1);
while (G__22391__i < G__22391__a.length) {G__22391__a[G__22391__i] = arguments[G__22391__i + 1]; ++G__22391__i;}
  children = new cljs.core.IndexedSeq(G__22391__a,0);
} 
return G__22390__delegate.call(this,attrs,children);};
G__22390.cljs$lang$maxFixedArity = 1;
G__22390.cljs$lang$applyTo = (function (arglist__22392){
var attrs = cljs.core.first(arglist__22392);
var children = cljs.core.rest(arglist__22392);
return G__22390__delegate(attrs,children);
});
G__22390.cljs$core$IFn$_invoke$arity$variadic = G__22390__delegate;
return G__22390;
})()
;
});

riffle.app.domify.cljs$lang$maxFixedArity = 3;


var ufv___22451 = schema.utils.use_fn_validation;
var output_schema22394_22452 = schema.core.Any;
var input_schema22395_22453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22396_22454 = schema.core.checker(input_schema22395_22453);
var output_checker22397_22455 = schema.core.checker(output_schema22394_22452);
/**
 * Inputs: [_ owner]
 */
riffle.app.label_table = ((function (ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function riffle$app$label_table(G__22398,G__22399){
var validate__17386__auto__ = ufv___22451.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22398,G__22399], null);
var temp__4657__auto___22457 = (input_checker22396_22454.cljs$core$IFn$_invoke$arity$1 ? input_checker22396_22454.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22456) : input_checker22396_22454.call(null,args__17387__auto___22456));
if(cljs.core.truth_(temp__4657__auto___22457)){
var error__17388__auto___22458 = temp__4657__auto___22457;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$label_DASH_table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22458], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22395_22453,cljs.core.cst$kw$value,args__17387__auto___22456,cljs.core.cst$kw$error,error__17388__auto___22458], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var _ = G__22398;
var owner = G__22399;
while(true){
if(typeof riffle.app.t_riffle$app22424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22424 = (function (G__22398,owner,input_schema22395,validate__17386__auto__,G__22399,output_checker22397,output_schema22394,_,label_table,input_checker22396,ufv__,meta22425){
this.G__22398 = G__22398;
this.owner = owner;
this.input_schema22395 = input_schema22395;
this.validate__17386__auto__ = validate__17386__auto__;
this.G__22399 = G__22399;
this.output_checker22397 = output_checker22397;
this.output_schema22394 = output_schema22394;
this._ = _;
this.label_table = label_table;
this.input_checker22396 = input_checker22396;
this.ufv__ = ufv__;
this.meta22425 = meta22425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function (_22426,meta22425__$1){
var self__ = this;
var _22426__$1 = this;
return (new riffle.app.t_riffle$app22424(self__.G__22398,self__.owner,self__.input_schema22395,self__.validate__17386__auto__,self__.G__22399,self__.output_checker22397,self__.output_schema22394,self__._,self__.label_table,self__.input_checker22396,self__.ufv__,meta22425__$1));
});})(validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

riffle.app.t_riffle$app22424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function (_22426){
var self__ = this;
var _22426__$1 = this;
return self__.meta22425;
});})(validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

riffle.app.t_riffle$app22424.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22424.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "label-table";
});})(validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

riffle.app.t_riffle$app22424.prototype.om$core$IRenderState$ = true;

riffle.app.t_riffle$app22424.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function (___$1,p__22427){
var self__ = this;
var map__22428 = p__22427;
var map__22428__$1 = ((((!((map__22428 == null)))?((((map__22428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22428):map__22428);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22428__$1,cljs.core.cst$kw$children);
var ___$2 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.table,({"className": "label-table"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$2,map__22428,map__22428__$1,children,validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function riffle$app$label_table_$_iter__22430(s__22431){
return (new cljs.core.LazySeq(null,((function (___$2,map__22428,map__22428__$1,children,validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function (){
var s__22431__$1 = s__22431;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22431__$1);
if(temp__4657__auto__){
var s__22431__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22431__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22431__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22433 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22432 = (0);
while(true){
if((i__22432 < size__7183__auto__)){
var vec__22442 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22432);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22442,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22442,(1),null);
cljs.core.chunk_append(b__22433,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.td,label,cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.td,child,cljs.core.PersistentVector.EMPTY)],null)))));

var G__22459 = (i__22432 + (1));
i__22432 = G__22459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22433),riffle$app$label_table_$_iter__22430(cljs.core.chunk_rest(s__22431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22433),null);
}
} else {
var vec__22445 = cljs.core.first(s__22431__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22445,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22445,(1),null);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.td,label,cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.td,child,cljs.core.PersistentVector.EMPTY)],null)))),riffle$app$label_table_$_iter__22430(cljs.core.rest(s__22431__$2)));
}
} else {
return null;
}
break;
}
});})(___$2,map__22428,map__22428__$1,children,validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
,null,null));
});})(___$2,map__22428,map__22428__$1,children,validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;
return iter__7184__auto__(children);
})()],null))))],null))));
});})(validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

riffle.app.t_riffle$app22424.getBasis = ((function (validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__22398,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema22395,cljs.core.cst$sym$validate__17386__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__22399,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22397,cljs.core.cst$sym$output_DASH_schema22394,cljs.core.cst$sym$_,cljs.core.with_meta(cljs.core.cst$sym$label_DASH_table,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22394,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22395], null)),cljs.core.cst$kw$doc,"Inputs: [_ owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$input_DASH_checker22396,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22425], null);
});})(validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

riffle.app.t_riffle$app22424.cljs$lang$type = true;

riffle.app.t_riffle$app22424.cljs$lang$ctorStr = "riffle.app/t_riffle$app22424";

riffle.app.t_riffle$app22424.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22424");
});})(validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

riffle.app.__GT_t_riffle$app22424 = ((function (validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455){
return (function riffle$app$label_table_$___GT_t_riffle$app22424(G__22398__$1,owner__$1,input_schema22395__$1,validate__17386__auto____$1,G__22399__$1,output_checker22397__$1,output_schema22394__$1,___$1,label_table__$1,input_checker22396__$1,ufv____$1,meta22425){
return (new riffle.app.t_riffle$app22424(G__22398__$1,owner__$1,input_schema22395__$1,validate__17386__auto____$1,G__22399__$1,output_checker22397__$1,output_schema22394__$1,___$1,label_table__$1,input_checker22396__$1,ufv____$1,meta22425));
});})(validate__17386__auto__,ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

}

return (new riffle.app.t_riffle$app22424(G__22398,owner,input_schema22395_22453,validate__17386__auto__,G__22399,output_checker22397_22455,output_schema22394_22452,_,riffle$app$label_table,input_checker22396_22454,ufv___22451,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22460 = (output_checker22397_22455.cljs$core$IFn$_invoke$arity$1 ? output_checker22397_22455.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22397_22455.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22460)){
var error__17388__auto___22461 = temp__4657__auto___22460;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$label_DASH_table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22461], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22394_22452,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22461], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22451,output_schema22394_22452,input_schema22395_22453,input_checker22396_22454,output_checker22397_22455))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.label_table),schema.core.make_fn_schema(output_schema22394_22452,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22395_22453], null)));

riffle.app.__GT_label_table = (function riffle$app$__GT_label_table(var_args){
var args22448 = [];
var len__7479__auto___22462 = arguments.length;
var i__7480__auto___22463 = (0);
while(true){
if((i__7480__auto___22463 < len__7479__auto___22462)){
args22448.push((arguments[i__7480__auto___22463]));

var G__22464 = (i__7480__auto___22463 + (1));
i__7480__auto___22463 = G__22464;
continue;
} else {
}
break;
}

var G__22450 = args22448.length;
switch (G__22450) {
case 1:
return riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22448.length)].join('')));

}
});

riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,cursor__22252__auto__);
});

riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22393){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.label_table,cursor__22252__auto__,m22393);
});

riffle.app.__GT_label_table.cljs$lang$maxFixedArity = 2;

riffle.app.lookup_thing = (function riffle$app$lookup_thing(props){
return riffle.editor.lookup(cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(props),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props));
});

var ufv___22491 = schema.utils.use_fn_validation;
var output_schema22468_22492 = schema.core.Any;
var input_schema22469_22493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22470_22494 = schema.core.checker(input_schema22469_22493);
var output_checker22471_22495 = schema.core.checker(output_schema22468_22492);
/**
 * Inputs: [props owner]
 */
riffle.app.delete_button = ((function (ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function riffle$app$delete_button(G__22472,G__22473){
var validate__17386__auto__ = ufv___22491.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22472,G__22473], null);
var temp__4657__auto___22497 = (input_checker22470_22494.cljs$core$IFn$_invoke$arity$1 ? input_checker22470_22494.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22496) : input_checker22470_22494.call(null,args__17387__auto___22496));
if(cljs.core.truth_(temp__4657__auto___22497)){
var error__17388__auto___22498 = temp__4657__auto___22497;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22498], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22469_22493,cljs.core.cst$kw$value,args__17387__auto___22496,cljs.core.cst$kw$error,error__17388__auto___22498], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22472;
var owner = G__22473;
while(true){
if(typeof riffle.app.t_riffle$app22481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22481 = (function (owner,validate__17386__auto__,output_checker22471,props,input_checker22470,output_schema22468,input_schema22469,G__22473,delete_button,G__22472,ufv__,meta22482){
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.output_checker22471 = output_checker22471;
this.props = props;
this.input_checker22470 = input_checker22470;
this.output_schema22468 = output_schema22468;
this.input_schema22469 = input_schema22469;
this.G__22473 = G__22473;
this.delete_button = delete_button;
this.G__22472 = G__22472;
this.ufv__ = ufv__;
this.meta22482 = meta22482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (_22483,meta22482__$1){
var self__ = this;
var _22483__$1 = this;
return (new riffle.app.t_riffle$app22481(self__.owner,self__.validate__17386__auto__,self__.output_checker22471,self__.props,self__.input_checker22470,self__.output_schema22468,self__.input_schema22469,self__.G__22473,self__.delete_button,self__.G__22472,self__.ufv__,meta22482__$1));
});})(validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

riffle.app.t_riffle$app22481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (_22483){
var self__ = this;
var _22483__$1 = this;
return self__.meta22482;
});})(validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

riffle.app.t_riffle$app22481.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22481.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (_){
var self__ = this;
var ___$1 = this;
return "delete-button";
});})(validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

riffle.app.t_riffle$app22481.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22481.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22484 = self__.props;
var map__22484__$1 = ((((!((map__22484 == null)))?((((map__22484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22484):map__22484);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22484__$1,cljs.core.cst$kw$id);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22484__$1,cljs.core.cst$kw$program);
var G__22486 = ({"className": "delete-button", "onClick": om_tools.dom.format_opts(((function (map__22484,map__22484__$1,id,program,___$1,validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.PersistentVector.EMPTY,((function (map__22484,map__22484__$1,id,program,___$1,validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (p1__22466_SHARP_){
return riffle.editor.delete_thing(p1__22466_SHARP_,id);
});})(map__22484,map__22484__$1,id,program,___$1,validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
);
});})(map__22484,map__22484__$1,id,program,___$1,validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
)});
var G__22487 = "\u00D7";
return React.DOM.button(G__22486,G__22487);
});})(validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

riffle.app.t_riffle$app22481.getBasis = ((function (validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$output_DASH_checker22471,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_checker22470,cljs.core.cst$sym$output_DASH_schema22468,cljs.core.cst$sym$input_DASH_schema22469,cljs.core.with_meta(cljs.core.cst$sym$G__22473,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22468,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22469], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22472,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22482], null);
});})(validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

riffle.app.t_riffle$app22481.cljs$lang$type = true;

riffle.app.t_riffle$app22481.cljs$lang$ctorStr = "riffle.app/t_riffle$app22481";

riffle.app.t_riffle$app22481.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22481");
});})(validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

riffle.app.__GT_t_riffle$app22481 = ((function (validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495){
return (function riffle$app$delete_button_$___GT_t_riffle$app22481(owner__$1,validate__17386__auto____$1,output_checker22471__$1,props__$1,input_checker22470__$1,output_schema22468__$1,input_schema22469__$1,G__22473__$1,delete_button__$1,G__22472__$1,ufv____$1,meta22482){
return (new riffle.app.t_riffle$app22481(owner__$1,validate__17386__auto____$1,output_checker22471__$1,props__$1,input_checker22470__$1,output_schema22468__$1,input_schema22469__$1,G__22473__$1,delete_button__$1,G__22472__$1,ufv____$1,meta22482));
});})(validate__17386__auto__,ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

}

return (new riffle.app.t_riffle$app22481(owner,validate__17386__auto__,output_checker22471_22495,props,input_checker22470_22494,output_schema22468_22492,input_schema22469_22493,G__22473,riffle$app$delete_button,G__22472,ufv___22491,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22499 = (output_checker22471_22495.cljs$core$IFn$_invoke$arity$1 ? output_checker22471_22495.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22471_22495.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22499)){
var error__17388__auto___22500 = temp__4657__auto___22499;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22500], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22468_22492,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22500], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22491,output_schema22468_22492,input_schema22469_22493,input_checker22470_22494,output_checker22471_22495))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.delete_button),schema.core.make_fn_schema(output_schema22468_22492,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22469_22493], null)));

riffle.app.__GT_delete_button = (function riffle$app$__GT_delete_button(var_args){
var args22488 = [];
var len__7479__auto___22501 = arguments.length;
var i__7480__auto___22502 = (0);
while(true){
if((i__7480__auto___22502 < len__7479__auto___22501)){
args22488.push((arguments[i__7480__auto___22502]));

var G__22503 = (i__7480__auto___22502 + (1));
i__7480__auto___22502 = G__22503;
continue;
} else {
}
break;
}

var G__22490 = args22488.length;
switch (G__22490) {
case 1:
return riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22488.length)].join('')));

}
});

riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,cursor__22252__auto__);
});

riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22467){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.delete_button,cursor__22252__auto__,m22467);
});

riffle.app.__GT_delete_button.cljs$lang$maxFixedArity = 2;

riffle.app.display_name = (function riffle$app$display_name(kind){
var G__22506 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22506) {
case "pred":
return "resource type";

break;
case "bwd":
return "function";

break;
case "qui-rule":
return "fallback rule";

break;
case "context":
return "starting context";

break;
case "fact":
return "resource";

break;
default:
return cljs.core.name(kind);

}
});

var ufv___22529 = schema.utils.use_fn_validation;
var output_schema22510_22530 = schema.core.Any;
var input_schema22511_22531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22512_22532 = schema.core.checker(input_schema22511_22531);
var output_checker22513_22533 = schema.core.checker(output_schema22510_22530);
/**
 * Inputs: [props owner]
 */
riffle.app.create_button = ((function (ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function riffle$app$create_button(G__22514,G__22515){
var validate__17386__auto__ = ufv___22529.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22514,G__22515], null);
var temp__4657__auto___22535 = (input_checker22512_22532.cljs$core$IFn$_invoke$arity$1 ? input_checker22512_22532.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22534) : input_checker22512_22532.call(null,args__17387__auto___22534));
if(cljs.core.truth_(temp__4657__auto___22535)){
var error__17388__auto___22536 = temp__4657__auto___22535;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$create_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22536], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22511_22531,cljs.core.cst$kw$value,args__17387__auto___22534,cljs.core.cst$kw$error,error__17388__auto___22536], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22514;
var owner = G__22515;
while(true){
if(typeof riffle.app.t_riffle$app22521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22521 = (function (G__22515,input_schema22511,owner,validate__17386__auto__,props,output_schema22510,output_checker22513,create_button,input_checker22512,G__22514,ufv__,meta22522){
this.G__22515 = G__22515;
this.input_schema22511 = input_schema22511;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.output_schema22510 = output_schema22510;
this.output_checker22513 = output_checker22513;
this.create_button = create_button;
this.input_checker22512 = input_checker22512;
this.G__22514 = G__22514;
this.ufv__ = ufv__;
this.meta22522 = meta22522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (_22523,meta22522__$1){
var self__ = this;
var _22523__$1 = this;
return (new riffle.app.t_riffle$app22521(self__.G__22515,self__.input_schema22511,self__.owner,self__.validate__17386__auto__,self__.props,self__.output_schema22510,self__.output_checker22513,self__.create_button,self__.input_checker22512,self__.G__22514,self__.ufv__,meta22522__$1));
});})(validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

riffle.app.t_riffle$app22521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (_22523){
var self__ = this;
var _22523__$1 = this;
return self__.meta22522;
});})(validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

riffle.app.t_riffle$app22521.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22521.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (_){
var self__ = this;
var ___$1 = this;
return "create-button";
});})(validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

riffle.app.t_riffle$app22521.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22521.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22524 = self__.props;
var map__22524__$1 = ((((!((map__22524 == null)))?((((map__22524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22524):map__22524);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22524__$1,cljs.core.cst$kw$id);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22524__$1,cljs.core.cst$kw$kind);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22524__$1,cljs.core.cst$kw$program);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.button,({"className": "create-button", "onClick": om_tools.dom.format_opts(((function (map__22524,map__22524__$1,parent_id,kind,program,___$1,validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.PersistentVector.EMPTY,((function (map__22524,map__22524__$1,parent_id,kind,program,___$1,validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (p1__22508_SHARP_){
return riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$3(p1__22508_SHARP_,kind,parent_id);
});})(map__22524,map__22524__$1,parent_id,kind,program,___$1,validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
);
});})(map__22524,map__22524__$1,parent_id,kind,program,___$1,validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$2(self__.props,[cljs.core.str("New "),cljs.core.str(riffle.app.display_name(kind))].join(''))],null))));
});})(validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

riffle.app.t_riffle$app22521.getBasis = ((function (validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__22515,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22511,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_schema22510,cljs.core.cst$sym$output_DASH_checker22513,cljs.core.with_meta(cljs.core.cst$sym$create_DASH_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22510,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22511], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$input_DASH_checker22512,cljs.core.with_meta(cljs.core.cst$sym$G__22514,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22522], null);
});})(validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

riffle.app.t_riffle$app22521.cljs$lang$type = true;

riffle.app.t_riffle$app22521.cljs$lang$ctorStr = "riffle.app/t_riffle$app22521";

riffle.app.t_riffle$app22521.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22521");
});})(validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

riffle.app.__GT_t_riffle$app22521 = ((function (validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533){
return (function riffle$app$create_button_$___GT_t_riffle$app22521(G__22515__$1,input_schema22511__$1,owner__$1,validate__17386__auto____$1,props__$1,output_schema22510__$1,output_checker22513__$1,create_button__$1,input_checker22512__$1,G__22514__$1,ufv____$1,meta22522){
return (new riffle.app.t_riffle$app22521(G__22515__$1,input_schema22511__$1,owner__$1,validate__17386__auto____$1,props__$1,output_schema22510__$1,output_checker22513__$1,create_button__$1,input_checker22512__$1,G__22514__$1,ufv____$1,meta22522));
});})(validate__17386__auto__,ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

}

return (new riffle.app.t_riffle$app22521(G__22515,input_schema22511_22531,owner,validate__17386__auto__,props,output_schema22510_22530,output_checker22513_22533,riffle$app$create_button,input_checker22512_22532,G__22514,ufv___22529,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22537 = (output_checker22513_22533.cljs$core$IFn$_invoke$arity$1 ? output_checker22513_22533.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22513_22533.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22537)){
var error__17388__auto___22538 = temp__4657__auto___22537;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$create_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22538], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22510_22530,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22538], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22529,output_schema22510_22530,input_schema22511_22531,input_checker22512_22532,output_checker22513_22533))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.create_button),schema.core.make_fn_schema(output_schema22510_22530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22511_22531], null)));

riffle.app.__GT_create_button = (function riffle$app$__GT_create_button(var_args){
var args22526 = [];
var len__7479__auto___22539 = arguments.length;
var i__7480__auto___22540 = (0);
while(true){
if((i__7480__auto___22540 < len__7479__auto___22539)){
args22526.push((arguments[i__7480__auto___22540]));

var G__22541 = (i__7480__auto___22540 + (1));
i__7480__auto___22540 = G__22541;
continue;
} else {
}
break;
}

var G__22528 = args22526.length;
switch (G__22528) {
case 1:
return riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22526.length)].join('')));

}
});

riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cursor__22252__auto__);
});

riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22509){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.create_button,cursor__22252__auto__,m22509);
});

riffle.app.__GT_create_button.cljs$lang$maxFixedArity = 2;


var ufv___22582 = schema.utils.use_fn_validation;
var output_schema22545_22583 = schema.core.Any;
var input_schema22546_22584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22547_22585 = schema.core.checker(input_schema22546_22584);
var output_checker22548_22586 = schema.core.checker(output_schema22545_22583);
/**
 * Inputs: [props owner]
 */
riffle.app.stage_selector = ((function (ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function riffle$app$stage_selector(G__22549,G__22550){
var validate__17386__auto__ = ufv___22582.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22549,G__22550], null);
var temp__4657__auto___22588 = (input_checker22547_22585.cljs$core$IFn$_invoke$arity$1 ? input_checker22547_22585.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22587) : input_checker22547_22585.call(null,args__17387__auto___22587));
if(cljs.core.truth_(temp__4657__auto___22588)){
var error__17388__auto___22589 = temp__4657__auto___22588;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stage_DASH_selector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22589], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22546_22584,cljs.core.cst$kw$value,args__17387__auto___22587,cljs.core.cst$kw$error,error__17388__auto___22589], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22549;
var owner = G__22550;
while(true){
if(typeof riffle.app.t_riffle$app22565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22565 = (function (output_schema22545,input_checker22547,owner,validate__17386__auto__,output_checker22548,props,stage_selector,G__22549,G__22550,input_schema22546,ufv__,meta22566){
this.output_schema22545 = output_schema22545;
this.input_checker22547 = input_checker22547;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.output_checker22548 = output_checker22548;
this.props = props;
this.stage_selector = stage_selector;
this.G__22549 = G__22549;
this.G__22550 = G__22550;
this.input_schema22546 = input_schema22546;
this.ufv__ = ufv__;
this.meta22566 = meta22566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (_22567,meta22566__$1){
var self__ = this;
var _22567__$1 = this;
return (new riffle.app.t_riffle$app22565(self__.output_schema22545,self__.input_checker22547,self__.owner,self__.validate__17386__auto__,self__.output_checker22548,self__.props,self__.stage_selector,self__.G__22549,self__.G__22550,self__.input_schema22546,self__.ufv__,meta22566__$1));
});})(validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

riffle.app.t_riffle$app22565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (_22567){
var self__ = this;
var _22567__$1 = this;
return self__.meta22566;
});})(validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

riffle.app.t_riffle$app22565.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22565.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stage-selector";
});})(validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

riffle.app.t_riffle$app22565.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22565.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22568 = self__.props;
var map__22568__$1 = ((((!((map__22568 == null)))?((((map__22568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22568):map__22568);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568__$1,cljs.core.cst$kw$program);
var map__22569 = riffle.app.lookup_thing(self__.props);
var map__22569__$1 = ((((!((map__22569 == null)))?((((map__22569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22569):map__22569);
var thing = map__22569__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,cljs.core.cst$kw$is);
var stage_id_key = (function (){var G__22572 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22572) {
case "context":
return cljs.core.cst$kw$stage_DASH_id;

break;
case "qui-rule":
return cljs.core.cst$kw$goto_DASH_id;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(kind)].join('')));

}
})();
var current_stage_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(thing,stage_id_key);
var parent_stage_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,cljs.core.cst$kw$qui_DASH_rule))?cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(thing):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (map__22568,map__22568__$1,program,map__22569,map__22569__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (p1__22543_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(thing,stage_id_key,riffle.app.int_value(p1__22543_SHARP_));
});})(map__22568,map__22568__$1,program,map__22569,map__22569__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
), "value": om_tools.dom.format_opts(current_stage_id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__6404__auto__ = parent_stage_id;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (current_stage_id == null);
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": null}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(parent_stage_id)?"(end)":"(none)")],null)))):null),(function (){var iter__7184__auto__ = ((function (map__22568,map__22568__$1,program,map__22569,map__22569__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function riffle$app$stage_selector_$_iter__22573(s__22574){
return (new cljs.core.LazySeq(null,((function (map__22568,map__22568__$1,program,map__22569,map__22569__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (){
var s__22574__$1 = s__22574;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22574__$1);
if(temp__4657__auto__){
var s__22574__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22574__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22574__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22576 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22575 = (0);
while(true){
if((i__22575 < size__7183__auto__)){
var stage_id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22575);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stage_id,parent_stage_id)){
cljs.core.chunk_append(b__22576,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(stage_id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,stage_id),"(unnamed stage)")],null)))));

var G__22591 = (i__22575 + (1));
i__22575 = G__22591;
continue;
} else {
var G__22592 = (i__22575 + (1));
i__22575 = G__22592;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22576),riffle$app$stage_selector_$_iter__22573(cljs.core.chunk_rest(s__22574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22576),null);
}
} else {
var stage_id = cljs.core.first(s__22574__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stage_id,parent_stage_id)){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(stage_id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,stage_id),"(unnamed stage)")],null)))),riffle$app$stage_selector_$_iter__22573(cljs.core.rest(s__22574__$2)));
} else {
var G__22593 = cljs.core.rest(s__22574__$2);
s__22574__$1 = G__22593;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__22568,map__22568__$1,program,map__22569,map__22569__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
,null,null));
});})(map__22568,map__22568__$1,program,map__22569,map__22569__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;
return iter__7184__auto__(cljs.core.cst$kw$stage_DASH_ids.cljs$core$IFn$_invoke$arity$1(program));
})()],null))));
});})(validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

riffle.app.t_riffle$app22565.getBasis = ((function (validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema22545,cljs.core.cst$sym$input_DASH_checker22547,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$output_DASH_checker22548,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$stage_DASH_selector,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22545,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22546], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22549,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22550,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22546,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22566], null);
});})(validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

riffle.app.t_riffle$app22565.cljs$lang$type = true;

riffle.app.t_riffle$app22565.cljs$lang$ctorStr = "riffle.app/t_riffle$app22565";

riffle.app.t_riffle$app22565.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22565");
});})(validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

riffle.app.__GT_t_riffle$app22565 = ((function (validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586){
return (function riffle$app$stage_selector_$___GT_t_riffle$app22565(output_schema22545__$1,input_checker22547__$1,owner__$1,validate__17386__auto____$1,output_checker22548__$1,props__$1,stage_selector__$1,G__22549__$1,G__22550__$1,input_schema22546__$1,ufv____$1,meta22566){
return (new riffle.app.t_riffle$app22565(output_schema22545__$1,input_checker22547__$1,owner__$1,validate__17386__auto____$1,output_checker22548__$1,props__$1,stage_selector__$1,G__22549__$1,G__22550__$1,input_schema22546__$1,ufv____$1,meta22566));
});})(validate__17386__auto__,ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

}

return (new riffle.app.t_riffle$app22565(output_schema22545_22583,input_checker22547_22585,owner,validate__17386__auto__,output_checker22548_22586,props,riffle$app$stage_selector,G__22549,G__22550,input_schema22546_22584,ufv___22582,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22594 = (output_checker22548_22586.cljs$core$IFn$_invoke$arity$1 ? output_checker22548_22586.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22548_22586.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22594)){
var error__17388__auto___22595 = temp__4657__auto___22594;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stage_DASH_selector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22595], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22545_22583,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22595], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22582,output_schema22545_22583,input_schema22546_22584,input_checker22547_22585,output_checker22548_22586))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.stage_selector),schema.core.make_fn_schema(output_schema22545_22583,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22546_22584], null)));

riffle.app.__GT_stage_selector = (function riffle$app$__GT_stage_selector(var_args){
var args22579 = [];
var len__7479__auto___22596 = arguments.length;
var i__7480__auto___22597 = (0);
while(true){
if((i__7480__auto___22597 < len__7479__auto___22596)){
args22579.push((arguments[i__7480__auto___22597]));

var G__22598 = (i__7480__auto___22597 + (1));
i__7480__auto___22597 = G__22598;
continue;
} else {
}
break;
}

var G__22581 = args22579.length;
switch (G__22581) {
case 1:
return riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22579.length)].join('')));

}
});

riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.stage_selector,cursor__22252__auto__);
});

riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22544){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.stage_selector,cursor__22252__auto__,m22544);
});

riffle.app.__GT_stage_selector.cljs$lang$maxFixedArity = 2;

riffle.app.header_text_key = (function riffle$app$header_text_key(kind){
var G__22601 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22601) {
case "type":
return cljs.core.cst$kw$name;

break;
case "stage":
return cljs.core.cst$kw$name;

break;
case "context":
return cljs.core.cst$kw$name;

break;
case "bwd":
return cljs.core.cst$kw$input_DASH_str;

break;
case "case":
return cljs.core.cst$kw$input_DASH_str;

break;
case "rule":
return cljs.core.cst$kw$choice_DASH_text;

break;
case "qui-rule":
return cljs.core.cst$kw$choice_DASH_text;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(kind)].join('')));

}
});
riffle.app.header_placeholder_text = (function riffle$app$header_placeholder_text(kind){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(riffle.app.header_text_key(kind),cljs.core.cst$kw$name)){
return [cljs.core.str(riffle.app.display_name(kind)),cljs.core.str(" name")].join('');
} else {
var G__22604 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22604) {
case "bwd":
return "signature";

break;
case "case":
return "pattern";

break;
case "rule":
return "choice text";

break;
case "qui-rule":
return "choice text";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(kind)].join('')));

}
}
});
if(typeof riffle.app.decl_block_body !== 'undefined'){
} else {
riffle.app.decl_block_body = (function (){var method_table__7329__auto__ = (function (){var G__22606 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22606) : cljs.core.atom.call(null,G__22606));
})();
var prefer_table__7330__auto__ = (function (){var G__22607 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22607) : cljs.core.atom.call(null,G__22607));
})();
var method_cache__7331__auto__ = (function (){var G__22608 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22608) : cljs.core.atom.call(null,G__22608));
})();
var cached_hierarchy__7332__auto__ = (function (){var G__22609 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22609) : cljs.core.atom.call(null,G__22609));
})();
var hierarchy__7333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("riffle.app","decl-block-body"),((function (method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__,hierarchy__7333__auto__){
return (function (props,owner){
return cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(riffle.app.lookup_thing(props));
});})(method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__,hierarchy__7333__auto__))
,cljs.core.cst$kw$default,hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}

var ufv___22634 = schema.utils.use_fn_validation;
var output_schema22613_22635 = schema.core.Any;
var input_schema22614_22636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22615_22637 = schema.core.checker(input_schema22614_22636);
var output_checker22616_22638 = schema.core.checker(output_schema22613_22635);
/**
 * Inputs: [props owner]
 */
riffle.app.decl_block = ((function (ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function riffle$app$decl_block(G__22617,G__22618){
var validate__17386__auto__ = ufv___22634.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22617,G__22618], null);
var temp__4657__auto___22640 = (input_checker22615_22637.cljs$core$IFn$_invoke$arity$1 ? input_checker22615_22637.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22639) : input_checker22615_22637.call(null,args__17387__auto___22639));
if(cljs.core.truth_(temp__4657__auto___22640)){
var error__17388__auto___22641 = temp__4657__auto___22640;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$decl_DASH_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22641], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22614_22636,cljs.core.cst$kw$value,args__17387__auto___22639,cljs.core.cst$kw$error,error__17388__auto___22641], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22617;
var owner = G__22618;
while(true){
if(typeof riffle.app.t_riffle$app22625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22625 = (function (owner,input_schema22614,validate__17386__auto__,props,output_checker22616,input_checker22615,output_schema22613,G__22618,decl_block,G__22617,ufv__,meta22626){
this.owner = owner;
this.input_schema22614 = input_schema22614;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.output_checker22616 = output_checker22616;
this.input_checker22615 = input_checker22615;
this.output_schema22613 = output_schema22613;
this.G__22618 = G__22618;
this.decl_block = decl_block;
this.G__22617 = G__22617;
this.ufv__ = ufv__;
this.meta22626 = meta22626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (_22627,meta22626__$1){
var self__ = this;
var _22627__$1 = this;
return (new riffle.app.t_riffle$app22625(self__.owner,self__.input_schema22614,self__.validate__17386__auto__,self__.props,self__.output_checker22616,self__.input_checker22615,self__.output_schema22613,self__.G__22618,self__.decl_block,self__.G__22617,self__.ufv__,meta22626__$1));
});})(validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

riffle.app.t_riffle$app22625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (_22627){
var self__ = this;
var _22627__$1 = this;
return self__.meta22626;
});})(validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

riffle.app.t_riffle$app22625.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22625.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (_){
var self__ = this;
var ___$1 = this;
return "decl-block";
});})(validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

riffle.app.t_riffle$app22625.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22625.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22628 = riffle.app.lookup_thing(self__.props);
var map__22628__$1 = ((((!((map__22628 == null)))?((((map__22628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22628):map__22628);
var thing = map__22628__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.cst$kw$is);
var header_text_key = riffle.app.header_text_key(kind);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__22630 = [cljs.core.str("decl-block "),cljs.core.str(cljs.core.name(kind))].join('');
if(cljs.core.truth_(cljs.core.cst$kw$collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1(thing))){
return [cljs.core.str(G__22630),cljs.core.str(" collapsed")].join('');
} else {
return G__22630;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "header"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (map__22628,map__22628__$1,thing,kind,header_text_key,___$1,validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (p1__22610_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(thing,header_text_key,riffle.app.value(p1__22610_SHARP_));
});})(map__22628,map__22628__$1,thing,kind,header_text_key,___$1,validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
,cljs.core.cst$kw$placeholder,[cljs.core.str("("),cljs.core.str(riffle.app.header_placeholder_text(kind)),cljs.core.str(")")].join(''),cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(thing,header_text_key)], null)),(function (){var toggle_collapsed_BANG_ = ((function (map__22628,map__22628__$1,thing,kind,header_text_key,___$1,validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(thing,cljs.core.cst$kw$collapsed_QMARK_,cljs.core.not);
});})(map__22628,map__22628__$1,thing,kind,header_text_key,___$1,validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"className": "toggle-collapsed", "onClick": om_tools.dom.format_opts(toggle_collapsed_BANG_), "onKeyDown": om_tools.dom.format_opts(((function (toggle_collapsed_BANG_,map__22628,map__22628__$1,thing,kind,header_text_key,___$1,validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (p1__22611_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22611_SHARP_.key,"Enter")){
return toggle_collapsed_BANG_();
} else {
return null;
}
});})(toggle_collapsed_BANG_,map__22628,map__22628__$1,thing,kind,header_text_key,___$1,validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
), "tabIndex": "0"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1(thing))?"\u25BA":"\u25BC")],null))));
})(),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,self__.props)],null)))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block_body,self__.props)],null))));
});})(validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

riffle.app.t_riffle$app22625.getBasis = ((function (validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema22614,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_checker22616,cljs.core.cst$sym$input_DASH_checker22615,cljs.core.cst$sym$output_DASH_schema22613,cljs.core.with_meta(cljs.core.cst$sym$G__22618,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$decl_DASH_block,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22613,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22614], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22617,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22626], null);
});})(validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

riffle.app.t_riffle$app22625.cljs$lang$type = true;

riffle.app.t_riffle$app22625.cljs$lang$ctorStr = "riffle.app/t_riffle$app22625";

riffle.app.t_riffle$app22625.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22625");
});})(validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

riffle.app.__GT_t_riffle$app22625 = ((function (validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638){
return (function riffle$app$decl_block_$___GT_t_riffle$app22625(owner__$1,input_schema22614__$1,validate__17386__auto____$1,props__$1,output_checker22616__$1,input_checker22615__$1,output_schema22613__$1,G__22618__$1,decl_block__$1,G__22617__$1,ufv____$1,meta22626){
return (new riffle.app.t_riffle$app22625(owner__$1,input_schema22614__$1,validate__17386__auto____$1,props__$1,output_checker22616__$1,input_checker22615__$1,output_schema22613__$1,G__22618__$1,decl_block__$1,G__22617__$1,ufv____$1,meta22626));
});})(validate__17386__auto__,ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

}

return (new riffle.app.t_riffle$app22625(owner,input_schema22614_22636,validate__17386__auto__,props,output_checker22616_22638,input_checker22615_22637,output_schema22613_22635,G__22618,riffle$app$decl_block,G__22617,ufv___22634,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22642 = (output_checker22616_22638.cljs$core$IFn$_invoke$arity$1 ? output_checker22616_22638.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22616_22638.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22642)){
var error__17388__auto___22643 = temp__4657__auto___22642;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$decl_DASH_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22643], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22613_22635,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22643], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22634,output_schema22613_22635,input_schema22614_22636,input_checker22615_22637,output_checker22616_22638))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.decl_block),schema.core.make_fn_schema(output_schema22613_22635,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22614_22636], null)));

riffle.app.__GT_decl_block = (function riffle$app$__GT_decl_block(var_args){
var args22631 = [];
var len__7479__auto___22644 = arguments.length;
var i__7480__auto___22645 = (0);
while(true){
if((i__7480__auto___22645 < len__7479__auto___22644)){
args22631.push((arguments[i__7480__auto___22645]));

var G__22646 = (i__7480__auto___22645 + (1));
i__7480__auto___22645 = G__22646;
continue;
} else {
}
break;
}

var G__22633 = args22631.length;
switch (G__22633) {
case 1:
return riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22631.length)].join('')));

}
});

riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,cursor__22252__auto__);
});

riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22612){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.decl_block,cursor__22252__auto__,m22612);
});

riffle.app.__GT_decl_block.cljs$lang$maxFixedArity = 2;


var ufv___22669 = schema.utils.use_fn_validation;
var output_schema22650_22670 = schema.core.Any;
var input_schema22651_22671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22652_22672 = schema.core.checker(input_schema22651_22671);
var output_checker22653_22673 = schema.core.checker(output_schema22650_22670);
/**
 * Inputs: [props owner]
 */
riffle.app.logic_sentence = ((function (ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function riffle$app$logic_sentence(G__22654,G__22655){
var validate__17386__auto__ = ufv___22669.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22654,G__22655], null);
var temp__4657__auto___22675 = (input_checker22652_22672.cljs$core$IFn$_invoke$arity$1 ? input_checker22652_22672.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22674) : input_checker22652_22672.call(null,args__17387__auto___22674));
if(cljs.core.truth_(temp__4657__auto___22675)){
var error__17388__auto___22676 = temp__4657__auto___22675;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentence,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22676], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22651_22671,cljs.core.cst$kw$value,args__17387__auto___22674,cljs.core.cst$kw$error,error__17388__auto___22676], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22654;
var owner = G__22655;
while(true){
if(typeof riffle.app.t_riffle$app22661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22661 = (function (logic_sentence,owner,validate__17386__auto__,props,G__22655,G__22654,input_schema22651,input_checker22652,output_schema22650,ufv__,output_checker22653,meta22662){
this.logic_sentence = logic_sentence;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.G__22655 = G__22655;
this.G__22654 = G__22654;
this.input_schema22651 = input_schema22651;
this.input_checker22652 = input_checker22652;
this.output_schema22650 = output_schema22650;
this.ufv__ = ufv__;
this.output_checker22653 = output_checker22653;
this.meta22662 = meta22662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function (_22663,meta22662__$1){
var self__ = this;
var _22663__$1 = this;
return (new riffle.app.t_riffle$app22661(self__.logic_sentence,self__.owner,self__.validate__17386__auto__,self__.props,self__.G__22655,self__.G__22654,self__.input_schema22651,self__.input_checker22652,self__.output_schema22650,self__.ufv__,self__.output_checker22653,meta22662__$1));
});})(validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

riffle.app.t_riffle$app22661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function (_22663){
var self__ = this;
var _22663__$1 = this;
return self__.meta22662;
});})(validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

riffle.app.t_riffle$app22661.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22661.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function (_){
var self__ = this;
var ___$1 = this;
return "logic-sentence";
});})(validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

riffle.app.t_riffle$app22661.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22661.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22664 = riffle.app.lookup_thing(self__.props);
var map__22664__$1 = ((((!((map__22664 == null)))?((((map__22664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22664):map__22664);
var thing = map__22664__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22664__$1,cljs.core.cst$kw$is);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts([cljs.core.str("logic-sentence "),cljs.core.str(cljs.core.name(kind))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (map__22664,map__22664__$1,thing,kind,___$1,validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function (p1__22648_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(thing,cljs.core.cst$kw$input_DASH_str,riffle.app.value(p1__22648_SHARP_));
});})(map__22664,map__22664__$1,thing,kind,___$1,validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
,cljs.core.cst$kw$placeholder,[cljs.core.str("("),cljs.core.str(riffle.app.display_name(kind)),cljs.core.str(")")].join(''),cljs.core.cst$kw$value,cljs.core.cst$kw$input_DASH_str.cljs$core$IFn$_invoke$arity$1(thing)], null)),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,self__.props)],null))));
});})(validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

riffle.app.t_riffle$app22661.getBasis = ((function (validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentence,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22650,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22651], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22655,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22654,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22651,cljs.core.cst$sym$input_DASH_checker22652,cljs.core.cst$sym$output_DASH_schema22650,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_checker22653,cljs.core.cst$sym$meta22662], null);
});})(validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

riffle.app.t_riffle$app22661.cljs$lang$type = true;

riffle.app.t_riffle$app22661.cljs$lang$ctorStr = "riffle.app/t_riffle$app22661";

riffle.app.t_riffle$app22661.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22661");
});})(validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

riffle.app.__GT_t_riffle$app22661 = ((function (validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673){
return (function riffle$app$logic_sentence_$___GT_t_riffle$app22661(logic_sentence__$1,owner__$1,validate__17386__auto____$1,props__$1,G__22655__$1,G__22654__$1,input_schema22651__$1,input_checker22652__$1,output_schema22650__$1,ufv____$1,output_checker22653__$1,meta22662){
return (new riffle.app.t_riffle$app22661(logic_sentence__$1,owner__$1,validate__17386__auto____$1,props__$1,G__22655__$1,G__22654__$1,input_schema22651__$1,input_checker22652__$1,output_schema22650__$1,ufv____$1,output_checker22653__$1,meta22662));
});})(validate__17386__auto__,ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

}

return (new riffle.app.t_riffle$app22661(riffle$app$logic_sentence,owner,validate__17386__auto__,props,G__22655,G__22654,input_schema22651_22671,input_checker22652_22672,output_schema22650_22670,ufv___22669,output_checker22653_22673,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22677 = (output_checker22653_22673.cljs$core$IFn$_invoke$arity$1 ? output_checker22653_22673.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22653_22673.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22677)){
var error__17388__auto___22678 = temp__4657__auto___22677;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentence,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22678], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22650_22670,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22678], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22669,output_schema22650_22670,input_schema22651_22671,input_checker22652_22672,output_checker22653_22673))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.logic_sentence),schema.core.make_fn_schema(output_schema22650_22670,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22651_22671], null)));

riffle.app.__GT_logic_sentence = (function riffle$app$__GT_logic_sentence(var_args){
var args22666 = [];
var len__7479__auto___22679 = arguments.length;
var i__7480__auto___22680 = (0);
while(true){
if((i__7480__auto___22680 < len__7479__auto___22679)){
args22666.push((arguments[i__7480__auto___22680]));

var G__22681 = (i__7480__auto___22680 + (1));
i__7480__auto___22680 = G__22681;
continue;
} else {
}
break;
}

var G__22668 = args22666.length;
switch (G__22668) {
case 1:
return riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22666.length)].join('')));

}
});

riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentence,cursor__22252__auto__);
});

riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22649){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.logic_sentence,cursor__22252__auto__,m22649);
});

riffle.app.__GT_logic_sentence.cljs$lang$maxFixedArity = 2;


var ufv___22701 = schema.utils.use_fn_validation;
var output_schema22686_22702 = schema.core.Any;
var input_schema22687_22703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22688_22704 = schema.core.checker(input_schema22687_22703);
var output_checker22689_22705 = schema.core.checker(output_schema22686_22702);
/**
 * Inputs: [props owner]
 */
riffle.app.premise_view = ((function (ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function riffle$app$premise_view(G__22690,G__22691){
var validate__17386__auto__ = ufv___22701.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22690,G__22691], null);
var temp__4657__auto___22707 = (input_checker22688_22704.cljs$core$IFn$_invoke$arity$1 ? input_checker22688_22704.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22706) : input_checker22688_22704.call(null,args__17387__auto___22706));
if(cljs.core.truth_(temp__4657__auto___22707)){
var error__17388__auto___22708 = temp__4657__auto___22707;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$premise_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22708], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22687_22703,cljs.core.cst$kw$value,args__17387__auto___22706,cljs.core.cst$kw$error,error__17388__auto___22708], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22690;
var owner = G__22691;
while(true){
if(typeof riffle.app.t_riffle$app22695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22695 = (function (input_checker22688,owner,validate__17386__auto__,G__22690,props,premise_view,output_schema22686,G__22691,output_checker22689,input_schema22687,ufv__,meta22696){
this.input_checker22688 = input_checker22688;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.G__22690 = G__22690;
this.props = props;
this.premise_view = premise_view;
this.output_schema22686 = output_schema22686;
this.G__22691 = G__22691;
this.output_checker22689 = output_checker22689;
this.input_schema22687 = input_schema22687;
this.ufv__ = ufv__;
this.meta22696 = meta22696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (_22697,meta22696__$1){
var self__ = this;
var _22697__$1 = this;
return (new riffle.app.t_riffle$app22695(self__.input_checker22688,self__.owner,self__.validate__17386__auto__,self__.G__22690,self__.props,self__.premise_view,self__.output_schema22686,self__.G__22691,self__.output_checker22689,self__.input_schema22687,self__.ufv__,meta22696__$1));
});})(validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

riffle.app.t_riffle$app22695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (_22697){
var self__ = this;
var _22697__$1 = this;
return self__.meta22696;
});})(validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

riffle.app.t_riffle$app22695.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22695.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (_){
var self__ = this;
var ___$1 = this;
return "premise-view";
});})(validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

riffle.app.t_riffle$app22695.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22695.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (_){
var self__ = this;
var ___$1 = this;
var premise = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "logic-sentence premise"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var toggle_consume_BANG_ = ((function (premise,___$1,validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(premise,cljs.core.cst$kw$consume_QMARK_,cljs.core.not);
});})(premise,___$1,validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"className": "toggle-consume", "onClick": om_tools.dom.format_opts(toggle_consume_BANG_), "onKeyDown": om_tools.dom.format_opts(((function (toggle_consume_BANG_,premise,___$1,validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (p1__22683_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22683_SHARP_.key,"Enter")){
return toggle_consume_BANG_();
} else {
return null;
}
});})(toggle_consume_BANG_,premise,___$1,validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
), "tabIndex": "0"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$consume_QMARK_.cljs$core$IFn$_invoke$arity$1(premise))?"Consume":"Check")],null))));
})(),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (premise,___$1,validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (p1__22684_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(premise,cljs.core.cst$kw$input_DASH_str,riffle.app.value(p1__22684_SHARP_));
});})(premise,___$1,validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
,cljs.core.cst$kw$placeholder,"(premise)",cljs.core.cst$kw$value,cljs.core.cst$kw$input_DASH_str.cljs$core$IFn$_invoke$arity$1(premise)], null)),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,self__.props)],null))));
});})(validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

riffle.app.t_riffle$app22695.getBasis = ((function (validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_checker22688,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__22690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$premise_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22686,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22687], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_schema22686,cljs.core.with_meta(cljs.core.cst$sym$G__22691,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22689,cljs.core.cst$sym$input_DASH_schema22687,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22696], null);
});})(validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

riffle.app.t_riffle$app22695.cljs$lang$type = true;

riffle.app.t_riffle$app22695.cljs$lang$ctorStr = "riffle.app/t_riffle$app22695";

riffle.app.t_riffle$app22695.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22695");
});})(validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

riffle.app.__GT_t_riffle$app22695 = ((function (validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705){
return (function riffle$app$premise_view_$___GT_t_riffle$app22695(input_checker22688__$1,owner__$1,validate__17386__auto____$1,G__22690__$1,props__$1,premise_view__$1,output_schema22686__$1,G__22691__$1,output_checker22689__$1,input_schema22687__$1,ufv____$1,meta22696){
return (new riffle.app.t_riffle$app22695(input_checker22688__$1,owner__$1,validate__17386__auto____$1,G__22690__$1,props__$1,premise_view__$1,output_schema22686__$1,G__22691__$1,output_checker22689__$1,input_schema22687__$1,ufv____$1,meta22696));
});})(validate__17386__auto__,ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

}

return (new riffle.app.t_riffle$app22695(input_checker22688_22704,owner,validate__17386__auto__,G__22690,props,riffle$app$premise_view,output_schema22686_22702,G__22691,output_checker22689_22705,input_schema22687_22703,ufv___22701,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22709 = (output_checker22689_22705.cljs$core$IFn$_invoke$arity$1 ? output_checker22689_22705.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22689_22705.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22709)){
var error__17388__auto___22710 = temp__4657__auto___22709;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$premise_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22710], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22686_22702,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22710], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22701,output_schema22686_22702,input_schema22687_22703,input_checker22688_22704,output_checker22689_22705))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.premise_view),schema.core.make_fn_schema(output_schema22686_22702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22687_22703], null)));

riffle.app.__GT_premise_view = (function riffle$app$__GT_premise_view(var_args){
var args22698 = [];
var len__7479__auto___22711 = arguments.length;
var i__7480__auto___22712 = (0);
while(true){
if((i__7480__auto___22712 < len__7479__auto___22711)){
args22698.push((arguments[i__7480__auto___22712]));

var G__22713 = (i__7480__auto___22712 + (1));
i__7480__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var G__22700 = args22698.length;
switch (G__22700) {
case 1:
return riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22698.length)].join('')));

}
});

riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.premise_view,cursor__22252__auto__);
});

riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22685){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.premise_view,cursor__22252__auto__,m22685);
});

riffle.app.__GT_premise_view.cljs$lang$maxFixedArity = 2;


var ufv___22733 = schema.utils.use_fn_validation;
var output_schema22716_22734 = schema.core.Any;
var input_schema22717_22735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22718_22736 = schema.core.checker(input_schema22717_22735);
var output_checker22719_22737 = schema.core.checker(output_schema22716_22734);
/**
 * Inputs: [props owner]
 */
riffle.app.thing_view = ((function (ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function riffle$app$thing_view(G__22720,G__22721){
var validate__17386__auto__ = ufv___22733.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22720,G__22721], null);
var temp__4657__auto___22739 = (input_checker22718_22736.cljs$core$IFn$_invoke$arity$1 ? input_checker22718_22736.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22738) : input_checker22718_22736.call(null,args__17387__auto___22738));
if(cljs.core.truth_(temp__4657__auto___22739)){
var error__17388__auto___22740 = temp__4657__auto___22739;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$thing_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22740], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22717_22735,cljs.core.cst$kw$value,args__17387__auto___22738,cljs.core.cst$kw$error,error__17388__auto___22740], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22720;
var owner = G__22721;
while(true){
if(typeof riffle.app.t_riffle$app22726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22726 = (function (input_schema22717,owner,validate__17386__auto__,props,output_checker22719,G__22720,input_checker22718,output_schema22716,G__22721,thing_view,ufv__,meta22727){
this.input_schema22717 = input_schema22717;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.output_checker22719 = output_checker22719;
this.G__22720 = G__22720;
this.input_checker22718 = input_checker22718;
this.output_schema22716 = output_schema22716;
this.G__22721 = G__22721;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.meta22727 = meta22727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function (_22728,meta22727__$1){
var self__ = this;
var _22728__$1 = this;
return (new riffle.app.t_riffle$app22726(self__.input_schema22717,self__.owner,self__.validate__17386__auto__,self__.props,self__.output_checker22719,self__.G__22720,self__.input_checker22718,self__.output_schema22716,self__.G__22721,self__.thing_view,self__.ufv__,meta22727__$1));
});})(validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

riffle.app.t_riffle$app22726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function (_22728){
var self__ = this;
var _22728__$1 = this;
return self__.meta22727;
});})(validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

riffle.app.t_riffle$app22726.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22726.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

riffle.app.t_riffle$app22726.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22726.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22729 = (((cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(riffle.app.lookup_thing(self__.props)) instanceof cljs.core.Keyword))?cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(riffle.app.lookup_thing(self__.props)).fqn:null);
switch (G__22729) {
case "qui-rule":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,self__.props);

break;
case "stage":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,self__.props);

break;
case "pred":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentence,self__.props);

break;
case "rule":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,self__.props);

break;
case "goal":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentence,self__.props);

break;
case "type":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,self__.props);

break;
case "fact":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentence,self__.props);

break;
case "term":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentence,self__.props);

break;
case "result":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentence,self__.props);

break;
case "case":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,self__.props);

break;
case "context":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,self__.props);

break;
case "bwd":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,self__.props);

break;
case "premise":
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.premise_view,self__.props);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(riffle.app.lookup_thing(self__.props)))].join('')));

}
});})(validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

riffle.app.t_riffle$app22726.getBasis = ((function (validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22717,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_checker22719,cljs.core.with_meta(cljs.core.cst$sym$G__22720,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22718,cljs.core.cst$sym$output_DASH_schema22716,cljs.core.with_meta(cljs.core.cst$sym$G__22721,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$thing_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22716,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22717], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22727], null);
});})(validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

riffle.app.t_riffle$app22726.cljs$lang$type = true;

riffle.app.t_riffle$app22726.cljs$lang$ctorStr = "riffle.app/t_riffle$app22726";

riffle.app.t_riffle$app22726.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22726");
});})(validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

riffle.app.__GT_t_riffle$app22726 = ((function (validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737){
return (function riffle$app$thing_view_$___GT_t_riffle$app22726(input_schema22717__$1,owner__$1,validate__17386__auto____$1,props__$1,output_checker22719__$1,G__22720__$1,input_checker22718__$1,output_schema22716__$1,G__22721__$1,thing_view__$1,ufv____$1,meta22727){
return (new riffle.app.t_riffle$app22726(input_schema22717__$1,owner__$1,validate__17386__auto____$1,props__$1,output_checker22719__$1,G__22720__$1,input_checker22718__$1,output_schema22716__$1,G__22721__$1,thing_view__$1,ufv____$1,meta22727));
});})(validate__17386__auto__,ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

}

return (new riffle.app.t_riffle$app22726(input_schema22717_22735,owner,validate__17386__auto__,props,output_checker22719_22737,G__22720,input_checker22718_22736,output_schema22716_22734,G__22721,riffle$app$thing_view,ufv___22733,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22742 = (output_checker22719_22737.cljs$core$IFn$_invoke$arity$1 ? output_checker22719_22737.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22719_22737.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22742)){
var error__17388__auto___22743 = temp__4657__auto___22742;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$thing_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22743], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22716_22734,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22743], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22733,output_schema22716_22734,input_schema22717_22735,input_checker22718_22736,output_checker22719_22737))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.thing_view),schema.core.make_fn_schema(output_schema22716_22734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22717_22735], null)));

riffle.app.__GT_thing_view = (function riffle$app$__GT_thing_view(var_args){
var args22730 = [];
var len__7479__auto___22744 = arguments.length;
var i__7480__auto___22745 = (0);
while(true){
if((i__7480__auto___22745 < len__7479__auto___22744)){
args22730.push((arguments[i__7480__auto___22745]));

var G__22746 = (i__7480__auto___22745 + (1));
i__7480__auto___22745 = G__22746;
continue;
} else {
}
break;
}

var G__22732 = args22730.length;
switch (G__22732) {
case 1:
return riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22730.length)].join('')));

}
});

riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.thing_view,cursor__22252__auto__);
});

riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22715){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.thing_view,cursor__22252__auto__,m22715);
});

riffle.app.__GT_thing_view.cljs$lang$maxFixedArity = 2;

riffle.app.build_things = (function riffle$app$build_things(props){
return om.core.build_all.cljs$core$IFn$_invoke$arity$2(riffle.app.thing_view,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22748_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$id,p1__22748_SHARP_);
}),cljs.core.cst$kw$ids.cljs$core$IFn$_invoke$arity$1(props)));
});

var ufv___22765 = schema.utils.use_fn_validation;
var output_schema22750_22766 = schema.core.Any;
var input_schema22751_22767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22752_22768 = schema.core.checker(input_schema22751_22767);
var output_checker22753_22769 = schema.core.checker(output_schema22750_22766);
/**
 * Inputs: [props owner]
 */
riffle.app.logic_sentences = ((function (ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function riffle$app$logic_sentences(G__22754,G__22755){
var validate__17386__auto__ = ufv___22765.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22754,G__22755], null);
var temp__4657__auto___22771 = (input_checker22752_22768.cljs$core$IFn$_invoke$arity$1 ? input_checker22752_22768.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22770) : input_checker22752_22768.call(null,args__17387__auto___22770));
if(cljs.core.truth_(temp__4657__auto___22771)){
var error__17388__auto___22772 = temp__4657__auto___22771;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentences,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22772], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22751_22767,cljs.core.cst$kw$value,args__17387__auto___22770,cljs.core.cst$kw$error,error__17388__auto___22772], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22754;
var owner = G__22755;
while(true){
if(typeof riffle.app.t_riffle$app22759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22759 = (function (logic_sentences,G__22755,owner,validate__17386__auto__,props,input_schema22751,G__22754,output_checker22753,input_checker22752,ufv__,output_schema22750,meta22760){
this.logic_sentences = logic_sentences;
this.G__22755 = G__22755;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.input_schema22751 = input_schema22751;
this.G__22754 = G__22754;
this.output_checker22753 = output_checker22753;
this.input_checker22752 = input_checker22752;
this.ufv__ = ufv__;
this.output_schema22750 = output_schema22750;
this.meta22760 = meta22760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function (_22761,meta22760__$1){
var self__ = this;
var _22761__$1 = this;
return (new riffle.app.t_riffle$app22759(self__.logic_sentences,self__.G__22755,self__.owner,self__.validate__17386__auto__,self__.props,self__.input_schema22751,self__.G__22754,self__.output_checker22753,self__.input_checker22752,self__.ufv__,self__.output_schema22750,meta22760__$1));
});})(validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

riffle.app.t_riffle$app22759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function (_22761){
var self__ = this;
var _22761__$1 = this;
return self__.meta22760;
});})(validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

riffle.app.t_riffle$app22759.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22759.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function (_){
var self__ = this;
var ___$1 = this;
return "logic-sentences";
});})(validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

riffle.app.t_riffle$app22759.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22759.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "logic-sentences"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(self__.props),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$text,"+"))],null))));
});})(validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

riffle.app.t_riffle$app22759.getBasis = ((function (validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentences,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22750,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22751], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22755,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_schema22751,cljs.core.with_meta(cljs.core.cst$sym$G__22754,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22753,cljs.core.cst$sym$input_DASH_checker22752,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_schema22750,cljs.core.cst$sym$meta22760], null);
});})(validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

riffle.app.t_riffle$app22759.cljs$lang$type = true;

riffle.app.t_riffle$app22759.cljs$lang$ctorStr = "riffle.app/t_riffle$app22759";

riffle.app.t_riffle$app22759.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22759");
});})(validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

riffle.app.__GT_t_riffle$app22759 = ((function (validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769){
return (function riffle$app$logic_sentences_$___GT_t_riffle$app22759(logic_sentences__$1,G__22755__$1,owner__$1,validate__17386__auto____$1,props__$1,input_schema22751__$1,G__22754__$1,output_checker22753__$1,input_checker22752__$1,ufv____$1,output_schema22750__$1,meta22760){
return (new riffle.app.t_riffle$app22759(logic_sentences__$1,G__22755__$1,owner__$1,validate__17386__auto____$1,props__$1,input_schema22751__$1,G__22754__$1,output_checker22753__$1,input_checker22752__$1,ufv____$1,output_schema22750__$1,meta22760));
});})(validate__17386__auto__,ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

}

return (new riffle.app.t_riffle$app22759(riffle$app$logic_sentences,G__22755,owner,validate__17386__auto__,props,input_schema22751_22767,G__22754,output_checker22753_22769,input_checker22752_22768,ufv___22765,output_schema22750_22766,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22773 = (output_checker22753_22769.cljs$core$IFn$_invoke$arity$1 ? output_checker22753_22769.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22753_22769.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22773)){
var error__17388__auto___22774 = temp__4657__auto___22773;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentences,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22774], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22750_22766,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22774], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22765,output_schema22750_22766,input_schema22751_22767,input_checker22752_22768,output_checker22753_22769))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.logic_sentences),schema.core.make_fn_schema(output_schema22750_22766,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22751_22767], null)));

riffle.app.__GT_logic_sentences = (function riffle$app$__GT_logic_sentences(var_args){
var args22762 = [];
var len__7479__auto___22775 = arguments.length;
var i__7480__auto___22776 = (0);
while(true){
if((i__7480__auto___22776 < len__7479__auto___22775)){
args22762.push((arguments[i__7480__auto___22776]));

var G__22777 = (i__7480__auto___22776 + (1));
i__7480__auto___22776 = G__22777;
continue;
} else {
}
break;
}

var G__22764 = args22762.length;
switch (G__22764) {
case 1:
return riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22762.length)].join('')));

}
});

riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cursor__22252__auto__);
});

riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22749){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.logic_sentences,cursor__22252__auto__,m22749);
});

riffle.app.__GT_logic_sentences.cljs$lang$maxFixedArity = 2;


var ufv___22799 = schema.utils.use_fn_validation;
var output_schema22780_22800 = schema.core.Any;
var input_schema22781_22801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22782_22802 = schema.core.checker(input_schema22781_22801);
var output_checker22783_22803 = schema.core.checker(output_schema22780_22800);
/**
 * Inputs: [props owner]
 */
riffle.app.editor_section = ((function (ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function riffle$app$editor_section(G__22784,G__22785){
var validate__17386__auto__ = ufv___22799.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22784,G__22785], null);
var temp__4657__auto___22805 = (input_checker22782_22802.cljs$core$IFn$_invoke$arity$1 ? input_checker22782_22802.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22804) : input_checker22782_22802.call(null,args__17387__auto___22804));
if(cljs.core.truth_(temp__4657__auto___22805)){
var error__17388__auto___22806 = temp__4657__auto___22805;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor_DASH_section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22806], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22781_22801,cljs.core.cst$kw$value,args__17387__auto___22804,cljs.core.cst$kw$error,error__17388__auto___22806], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22784;
var owner = G__22785;
while(true){
if(typeof riffle.app.t_riffle$app22791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22791 = (function (owner,validate__17386__auto__,props,G__22785,G__22784,output_checker22783,input_checker22782,output_schema22780,editor_section,input_schema22781,ufv__,meta22792){
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.G__22785 = G__22785;
this.G__22784 = G__22784;
this.output_checker22783 = output_checker22783;
this.input_checker22782 = input_checker22782;
this.output_schema22780 = output_schema22780;
this.editor_section = editor_section;
this.input_schema22781 = input_schema22781;
this.ufv__ = ufv__;
this.meta22792 = meta22792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function (_22793,meta22792__$1){
var self__ = this;
var _22793__$1 = this;
return (new riffle.app.t_riffle$app22791(self__.owner,self__.validate__17386__auto__,self__.props,self__.G__22785,self__.G__22784,self__.output_checker22783,self__.input_checker22782,self__.output_schema22780,self__.editor_section,self__.input_schema22781,self__.ufv__,meta22792__$1));
});})(validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

riffle.app.t_riffle$app22791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function (_22793){
var self__ = this;
var _22793__$1 = this;
return self__.meta22792;
});})(validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

riffle.app.t_riffle$app22791.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22791.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function (_){
var self__ = this;
var ___$1 = this;
return "editor-section";
});})(validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

riffle.app.t_riffle$app22791.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22791.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22794 = self__.props;
var map__22794__$1 = ((((!((map__22794 == null)))?((((map__22794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22794):map__22794);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794__$1,cljs.core.cst$kw$kind);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": om_tools.dom.format_opts([cljs.core.str("editor-section "),cljs.core.str([cljs.core.str(cljs.core.name(kind)),cljs.core.str("s")].join(''))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-header"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(clojure.string.capitalize(riffle.app.display_name(kind))),cljs.core.str("s")].join('')],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.props),riffle.editor.kind__GT_ids_key(kind)))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,self__.props)],null))))],null))));
});})(validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

riffle.app.t_riffle$app22791.getBasis = ((function (validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22785,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22784,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22783,cljs.core.cst$sym$input_DASH_checker22782,cljs.core.cst$sym$output_DASH_schema22780,cljs.core.with_meta(cljs.core.cst$sym$editor_DASH_section,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22780,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22781], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$input_DASH_schema22781,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22792], null);
});})(validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

riffle.app.t_riffle$app22791.cljs$lang$type = true;

riffle.app.t_riffle$app22791.cljs$lang$ctorStr = "riffle.app/t_riffle$app22791";

riffle.app.t_riffle$app22791.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22791");
});})(validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

riffle.app.__GT_t_riffle$app22791 = ((function (validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803){
return (function riffle$app$editor_section_$___GT_t_riffle$app22791(owner__$1,validate__17386__auto____$1,props__$1,G__22785__$1,G__22784__$1,output_checker22783__$1,input_checker22782__$1,output_schema22780__$1,editor_section__$1,input_schema22781__$1,ufv____$1,meta22792){
return (new riffle.app.t_riffle$app22791(owner__$1,validate__17386__auto____$1,props__$1,G__22785__$1,G__22784__$1,output_checker22783__$1,input_checker22782__$1,output_schema22780__$1,editor_section__$1,input_schema22781__$1,ufv____$1,meta22792));
});})(validate__17386__auto__,ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

}

return (new riffle.app.t_riffle$app22791(owner,validate__17386__auto__,props,G__22785,G__22784,output_checker22783_22803,input_checker22782_22802,output_schema22780_22800,riffle$app$editor_section,input_schema22781_22801,ufv___22799,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22807 = (output_checker22783_22803.cljs$core$IFn$_invoke$arity$1 ? output_checker22783_22803.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22783_22803.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22807)){
var error__17388__auto___22808 = temp__4657__auto___22807;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor_DASH_section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22808], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22780_22800,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22808], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___22799,output_schema22780_22800,input_schema22781_22801,input_checker22782_22802,output_checker22783_22803))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.editor_section),schema.core.make_fn_schema(output_schema22780_22800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22781_22801], null)));

riffle.app.__GT_editor_section = (function riffle$app$__GT_editor_section(var_args){
var args22796 = [];
var len__7479__auto___22809 = arguments.length;
var i__7480__auto___22810 = (0);
while(true){
if((i__7480__auto___22810 < len__7479__auto___22809)){
args22796.push((arguments[i__7480__auto___22810]));

var G__22811 = (i__7480__auto___22810 + (1));
i__7480__auto___22810 = G__22811;
continue;
} else {
}
break;
}

var G__22798 = args22796.length;
switch (G__22798) {
case 1:
return riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22796.length)].join('')));

}
});

riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor_section,cursor__22252__auto__);
});

riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22779){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.editor_section,cursor__22252__auto__,m22779);
});

riffle.app.__GT_editor_section.cljs$lang$maxFixedArity = 2;

riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$type,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22815 = schema.core.Any;
var input_schema22816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22817 = schema.core.checker(input_schema22816);
var output_checker22818 = schema.core.checker(output_schema22815);
return schema.core.schematize_fn(((function (ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818){
return (function riffle$app$G__22813(G__22819,G__22820){
var validate__17386__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22819,G__22820], null);
var temp__4657__auto___22828 = (input_checker22817.cljs$core$IFn$_invoke$arity$1 ? input_checker22817.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22827) : input_checker22817.call(null,args__17387__auto___22827));
if(cljs.core.truth_(temp__4657__auto___22828)){
var error__17388__auto___22829 = temp__4657__auto___22828;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22813,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22829], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22816,cljs.core.cst$kw$value,args__17387__auto___22827,cljs.core.cst$kw$error,error__17388__auto___22829], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22819;
var owner = G__22820;
while(true){
if(typeof riffle.app.t_riffle$app22824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22824 = (function (owner,validate__17386__auto__,props,input_schema22816,output_schema22815,G__22820,G__22819,input_checker22817,ufv__,output_checker22818,G__22813,meta22825){
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.input_schema22816 = input_schema22816;
this.output_schema22815 = output_schema22815;
this.G__22820 = G__22820;
this.G__22819 = G__22819;
this.input_checker22817 = input_checker22817;
this.ufv__ = ufv__;
this.output_checker22818 = output_checker22818;
this.G__22813 = G__22813;
this.meta22825 = meta22825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818){
return (function (_22826,meta22825__$1){
var self__ = this;
var _22826__$1 = this;
return (new riffle.app.t_riffle$app22824(self__.owner,self__.validate__17386__auto__,self__.props,self__.input_schema22816,self__.output_schema22815,self__.G__22820,self__.G__22819,self__.input_checker22817,self__.ufv__,self__.output_checker22818,self__.G__22813,meta22825__$1));
});})(validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818))
;

riffle.app.t_riffle$app22824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818){
return (function (_22826){
var self__ = this;
var _22826__$1 = this;
return self__.meta22825;
});})(validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818))
;

riffle.app.t_riffle$app22824.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22824.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818){
return (function (_){
var self__ = this;
var ___$1 = this;
var type = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$term,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$term_DASH_ids.cljs$core$IFn$_invoke$arity$1(type)], 0)))],null))));
});})(validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818))
;

riffle.app.t_riffle$app22824.getBasis = ((function (validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_schema22816,cljs.core.cst$sym$output_DASH_schema22815,cljs.core.with_meta(cljs.core.cst$sym$G__22820,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22819,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22817,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_checker22818,cljs.core.with_meta(cljs.core.cst$sym$G__22813,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$meta22825], null);
});})(validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818))
;

riffle.app.t_riffle$app22824.cljs$lang$type = true;

riffle.app.t_riffle$app22824.cljs$lang$ctorStr = "riffle.app/t_riffle$app22824";

riffle.app.t_riffle$app22824.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22824");
});})(validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818))
;

riffle.app.__GT_t_riffle$app22824 = ((function (validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818){
return (function riffle$app$G__22813_$___GT_t_riffle$app22824(owner__$1,validate__17386__auto____$1,props__$1,input_schema22816__$1,output_schema22815__$1,G__22820__$1,G__22819__$1,input_checker22817__$1,ufv____$1,output_checker22818__$1,G__22813__$1,meta22825){
return (new riffle.app.t_riffle$app22824(owner__$1,validate__17386__auto____$1,props__$1,input_schema22816__$1,output_schema22815__$1,G__22820__$1,G__22819__$1,input_checker22817__$1,ufv____$1,output_checker22818__$1,G__22813__$1,meta22825));
});})(validate__17386__auto__,ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818))
;

}

return (new riffle.app.t_riffle$app22824(owner,validate__17386__auto__,props,input_schema22816,output_schema22815,G__22820,G__22819,input_checker22817,ufv__,output_checker22818,riffle$app$G__22813,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22830 = (output_checker22818.cljs$core$IFn$_invoke$arity$1 ? output_checker22818.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22818.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22830)){
var error__17388__auto___22831 = temp__4657__auto___22830;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22813,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22831], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22815,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22831], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv__,output_schema22815,input_schema22816,input_checker22817,output_checker22818))
,schema.core.make_fn_schema(output_schema22815,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22816], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$bwd,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22834 = schema.core.Any;
var input_schema22835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22836 = schema.core.checker(input_schema22835);
var output_checker22837 = schema.core.checker(output_schema22834);
return schema.core.schematize_fn(((function (ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837){
return (function riffle$app$G__22832(G__22838,G__22839){
var validate__17386__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22838,G__22839], null);
var temp__4657__auto___22847 = (input_checker22836.cljs$core$IFn$_invoke$arity$1 ? input_checker22836.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22846) : input_checker22836.call(null,args__17387__auto___22846));
if(cljs.core.truth_(temp__4657__auto___22847)){
var error__17388__auto___22848 = temp__4657__auto___22847;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22832,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22848], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22835,cljs.core.cst$kw$value,args__17387__auto___22846,cljs.core.cst$kw$error,error__17388__auto___22848], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22838;
var owner = G__22839;
while(true){
if(typeof riffle.app.t_riffle$app22843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22843 = (function (input_schema22835,owner,validate__17386__auto__,G__22838,props,G__22839,input_checker22836,G__22832,output_schema22834,ufv__,output_checker22837,meta22844){
this.input_schema22835 = input_schema22835;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.G__22838 = G__22838;
this.props = props;
this.G__22839 = G__22839;
this.input_checker22836 = input_checker22836;
this.G__22832 = G__22832;
this.output_schema22834 = output_schema22834;
this.ufv__ = ufv__;
this.output_checker22837 = output_checker22837;
this.meta22844 = meta22844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837){
return (function (_22845,meta22844__$1){
var self__ = this;
var _22845__$1 = this;
return (new riffle.app.t_riffle$app22843(self__.input_schema22835,self__.owner,self__.validate__17386__auto__,self__.G__22838,self__.props,self__.G__22839,self__.input_checker22836,self__.G__22832,self__.output_schema22834,self__.ufv__,self__.output_checker22837,meta22844__$1));
});})(validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837))
;

riffle.app.t_riffle$app22843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837){
return (function (_22845){
var self__ = this;
var _22845__$1 = this;
return self__.meta22844;
});})(validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837))
;

riffle.app.t_riffle$app22843.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22843.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837){
return (function (_){
var self__ = this;
var ___$1 = this;
var bwd = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "cases"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.cst$kw$case_DASH_ids.cljs$core$IFn$_invoke$arity$1(bwd))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$case))],null))))],null))));
});})(validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837))
;

riffle.app.t_riffle$app22843.getBasis = ((function (validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22835,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__22838,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22839,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22836,cljs.core.with_meta(cljs.core.cst$sym$G__22832,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema22834,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_checker22837,cljs.core.cst$sym$meta22844], null);
});})(validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837))
;

riffle.app.t_riffle$app22843.cljs$lang$type = true;

riffle.app.t_riffle$app22843.cljs$lang$ctorStr = "riffle.app/t_riffle$app22843";

riffle.app.t_riffle$app22843.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22843");
});})(validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837))
;

riffle.app.__GT_t_riffle$app22843 = ((function (validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837){
return (function riffle$app$G__22832_$___GT_t_riffle$app22843(input_schema22835__$1,owner__$1,validate__17386__auto____$1,G__22838__$1,props__$1,G__22839__$1,input_checker22836__$1,G__22832__$1,output_schema22834__$1,ufv____$1,output_checker22837__$1,meta22844){
return (new riffle.app.t_riffle$app22843(input_schema22835__$1,owner__$1,validate__17386__auto____$1,G__22838__$1,props__$1,G__22839__$1,input_checker22836__$1,G__22832__$1,output_schema22834__$1,ufv____$1,output_checker22837__$1,meta22844));
});})(validate__17386__auto__,ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837))
;

}

return (new riffle.app.t_riffle$app22843(input_schema22835,owner,validate__17386__auto__,G__22838,props,G__22839,input_checker22836,riffle$app$G__22832,output_schema22834,ufv__,output_checker22837,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22849 = (output_checker22837.cljs$core$IFn$_invoke$arity$1 ? output_checker22837.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22837.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22849)){
var error__17388__auto___22850 = temp__4657__auto___22849;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22832,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22850], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22834,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22850], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv__,output_schema22834,input_schema22835,input_checker22836,output_checker22837))
,schema.core.make_fn_schema(output_schema22834,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22835], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22854 = schema.core.Any;
var input_schema22855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22856 = schema.core.checker(input_schema22855);
var output_checker22857 = schema.core.checker(output_schema22854);
return schema.core.schematize_fn(((function (ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function riffle$app$G__22852(G__22858,G__22859){
var validate__17386__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22858,G__22859], null);
var temp__4657__auto___22869 = (input_checker22856.cljs$core$IFn$_invoke$arity$1 ? input_checker22856.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22868) : input_checker22856.call(null,args__17387__auto___22868));
if(cljs.core.truth_(temp__4657__auto___22869)){
var error__17388__auto___22870 = temp__4657__auto___22869;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22852,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22870], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22855,cljs.core.cst$kw$value,args__17387__auto___22868,cljs.core.cst$kw$error,error__17388__auto___22870], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22858;
var owner = G__22859;
while(true){
if(typeof riffle.app.t_riffle$app22864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22864 = (function (output_schema22854,owner,validate__17386__auto__,props,input_schema22855,input_checker22856,G__22852,G__22859,G__22858,ufv__,output_checker22857,meta22865){
this.output_schema22854 = output_schema22854;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.input_schema22855 = input_schema22855;
this.input_checker22856 = input_checker22856;
this.G__22852 = G__22852;
this.G__22859 = G__22859;
this.G__22858 = G__22858;
this.ufv__ = ufv__;
this.output_checker22857 = output_checker22857;
this.meta22865 = meta22865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function (_22866,meta22865__$1){
var self__ = this;
var _22866__$1 = this;
return (new riffle.app.t_riffle$app22864(self__.output_schema22854,self__.owner,self__.validate__17386__auto__,self__.props,self__.input_schema22855,self__.input_checker22856,self__.G__22852,self__.G__22859,self__.G__22858,self__.ufv__,self__.output_checker22857,meta22865__$1));
});})(validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
;

riffle.app.t_riffle$app22864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function (_22866){
var self__ = this;
var _22866__$1 = this;
return self__.meta22865;
});})(validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
;

riffle.app.t_riffle$app22864.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22864.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function (_){
var self__ = this;
var ___$1 = this;
var case$ = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Base case?",(function (){var toggle_base_case_BANG_ = ((function (case$,___$1,validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(case$,cljs.core.cst$kw$base_DASH_case_QMARK_,cljs.core.not);
});})(case$,___$1,validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
;
var G__22867 = ({"checked": om_tools.dom.format_opts(cljs.core.cst$kw$base_DASH_case_QMARK_.cljs$core$IFn$_invoke$arity$1(case$)), "onChange": om_tools.dom.format_opts(toggle_base_case_BANG_), "onKeyDown": om_tools.dom.format_opts(((function (toggle_base_case_BANG_,case$,___$1,validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function (p1__22851_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22851_SHARP_.key,"Enter")){
return toggle_base_case_BANG_();
} else {
return null;
}
});})(toggle_base_case_BANG_,case$,___$1,validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
), "type": "checkbox"});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__22867) : om.dom.input.call(null,G__22867));
})()], null)),(cljs.core.truth_(cljs.core.cst$kw$base_DASH_case_QMARK_.cljs$core$IFn$_invoke$arity$1(case$))?null:om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$goal,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$goal_DASH_ids.cljs$core$IFn$_invoke$arity$1(case$)], 0))))],null))));
});})(validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
;

riffle.app.t_riffle$app22864.getBasis = ((function (validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema22854,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_schema22855,cljs.core.cst$sym$input_DASH_checker22856,cljs.core.with_meta(cljs.core.cst$sym$G__22852,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22859,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22858,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_checker22857,cljs.core.cst$sym$meta22865], null);
});})(validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
;

riffle.app.t_riffle$app22864.cljs$lang$type = true;

riffle.app.t_riffle$app22864.cljs$lang$ctorStr = "riffle.app/t_riffle$app22864";

riffle.app.t_riffle$app22864.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22864");
});})(validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
;

riffle.app.__GT_t_riffle$app22864 = ((function (validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857){
return (function riffle$app$G__22852_$___GT_t_riffle$app22864(output_schema22854__$1,owner__$1,validate__17386__auto____$1,props__$1,input_schema22855__$1,input_checker22856__$1,G__22852__$1,G__22859__$1,G__22858__$1,ufv____$1,output_checker22857__$1,meta22865){
return (new riffle.app.t_riffle$app22864(output_schema22854__$1,owner__$1,validate__17386__auto____$1,props__$1,input_schema22855__$1,input_checker22856__$1,G__22852__$1,G__22859__$1,G__22858__$1,ufv____$1,output_checker22857__$1,meta22865));
});})(validate__17386__auto__,ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
;

}

return (new riffle.app.t_riffle$app22864(output_schema22854,owner,validate__17386__auto__,props,input_schema22855,input_checker22856,riffle$app$G__22852,G__22859,G__22858,ufv__,output_checker22857,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22871 = (output_checker22857.cljs$core$IFn$_invoke$arity$1 ? output_checker22857.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22857.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22871)){
var error__17388__auto___22872 = temp__4657__auto___22871;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22852,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22872], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22854,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22872], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv__,output_schema22854,input_schema22855,input_checker22856,output_checker22857))
,schema.core.make_fn_schema(output_schema22854,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22855], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stage,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22876 = schema.core.Any;
var input_schema22877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22878 = schema.core.checker(input_schema22877);
var output_checker22879 = schema.core.checker(output_schema22876);
return schema.core.schematize_fn(((function (ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function riffle$app$G__22874(G__22880,G__22881){
var validate__17386__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22880,G__22881], null);
var temp__4657__auto___22909 = (input_checker22878.cljs$core$IFn$_invoke$arity$1 ? input_checker22878.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22908) : input_checker22878.call(null,args__17387__auto___22908));
if(cljs.core.truth_(temp__4657__auto___22909)){
var error__17388__auto___22910 = temp__4657__auto___22909;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22874,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22910], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22877,cljs.core.cst$kw$value,args__17387__auto___22908,cljs.core.cst$kw$error,error__17388__auto___22910], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22880;
var owner = G__22881;
while(true){
if(typeof riffle.app.t_riffle$app22895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22895 = (function (owner,validate__17386__auto__,props,input_checker22878,input_schema22877,output_schema22876,output_checker22879,G__22881,G__22874,ufv__,G__22880,meta22896){
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.input_checker22878 = input_checker22878;
this.input_schema22877 = input_schema22877;
this.output_schema22876 = output_schema22876;
this.output_checker22879 = output_checker22879;
this.G__22881 = G__22881;
this.G__22874 = G__22874;
this.ufv__ = ufv__;
this.G__22880 = G__22880;
this.meta22896 = meta22896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function (_22897,meta22896__$1){
var self__ = this;
var _22897__$1 = this;
return (new riffle.app.t_riffle$app22895(self__.owner,self__.validate__17386__auto__,self__.props,self__.input_checker22878,self__.input_schema22877,self__.output_schema22876,self__.output_checker22879,self__.G__22881,self__.G__22874,self__.ufv__,self__.G__22880,meta22896__$1));
});})(validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
;

riffle.app.t_riffle$app22895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function (_22897){
var self__ = this;
var _22897__$1 = this;
return self__.meta22896;
});})(validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
;

riffle.app.t_riffle$app22895.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22895.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function (_){
var self__ = this;
var ___$1 = this;
var stage = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rule selection",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (stage,___$1,validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function (p1__22873_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(stage,cljs.core.cst$kw$selection,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(riffle.app.value(p1__22873_SHARP_)));
});})(stage,___$1,validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
), "value": om_tools.dom.format_opts(cljs.core.name(cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(stage)))}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (stage,___$1,validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function riffle$app$G__22874_$_iter__22898(s__22899){
return (new cljs.core.LazySeq(null,((function (stage,___$1,validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function (){
var s__22899__$1 = s__22899;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22899__$1);
if(temp__4657__auto__){
var s__22899__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22899__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22899__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22901 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22900 = (0);
while(true){
if((i__22900 < size__7183__auto__)){
var mode = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22900);
cljs.core.chunk_append(b__22901,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(mode)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.capitalize(mode)],null)))));

var G__22911 = (i__22900 + (1));
i__22900 = G__22911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22901),riffle$app$G__22874_$_iter__22898(cljs.core.chunk_rest(s__22899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22901),null);
}
} else {
var mode = cljs.core.first(s__22899__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(mode)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.capitalize(mode)],null)))),riffle$app$G__22874_$_iter__22898(cljs.core.rest(s__22899__$2)));
}
} else {
return null;
}
break;
}
});})(stage,___$1,validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
,null,null));
});})(stage,___$1,validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
;
return iter__7184__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["interactive","ordered","random"], null));
})()],null))))], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section rules"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22904 = ({"className": "section-header"});
var G__22905 = "Rules";
return React.DOM.div(G__22904,G__22905);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.cst$kw$rule_DASH_ids.cljs$core$IFn$_invoke$arity$1(stage))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$rule))],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section qui-rules"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22906 = ({"className": "section-header"});
var G__22907 = "Fallback rules";
return React.DOM.div(G__22906,G__22907);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.cst$kw$qui_DASH_rule_DASH_ids.cljs$core$IFn$_invoke$arity$1(stage))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$qui_DASH_rule))],null))))],null))))],null))));
});})(validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
;

riffle.app.t_riffle$app22895.getBasis = ((function (validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_checker22878,cljs.core.cst$sym$input_DASH_schema22877,cljs.core.cst$sym$output_DASH_schema22876,cljs.core.cst$sym$output_DASH_checker22879,cljs.core.with_meta(cljs.core.cst$sym$G__22881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22874,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$G__22880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$meta22896], null);
});})(validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
;

riffle.app.t_riffle$app22895.cljs$lang$type = true;

riffle.app.t_riffle$app22895.cljs$lang$ctorStr = "riffle.app/t_riffle$app22895";

riffle.app.t_riffle$app22895.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22895");
});})(validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
;

riffle.app.__GT_t_riffle$app22895 = ((function (validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879){
return (function riffle$app$G__22874_$___GT_t_riffle$app22895(owner__$1,validate__17386__auto____$1,props__$1,input_checker22878__$1,input_schema22877__$1,output_schema22876__$1,output_checker22879__$1,G__22881__$1,G__22874__$1,ufv____$1,G__22880__$1,meta22896){
return (new riffle.app.t_riffle$app22895(owner__$1,validate__17386__auto____$1,props__$1,input_checker22878__$1,input_schema22877__$1,output_schema22876__$1,output_checker22879__$1,G__22881__$1,G__22874__$1,ufv____$1,G__22880__$1,meta22896));
});})(validate__17386__auto__,ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
;

}

return (new riffle.app.t_riffle$app22895(owner,validate__17386__auto__,props,input_checker22878,input_schema22877,output_schema22876,output_checker22879,G__22881,riffle$app$G__22874,ufv__,G__22880,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22912 = (output_checker22879.cljs$core$IFn$_invoke$arity$1 ? output_checker22879.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22879.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22912)){
var error__17388__auto___22913 = temp__4657__auto___22912;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22874,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22913], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22876,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22913], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv__,output_schema22876,input_schema22877,input_checker22878,output_checker22879))
,schema.core.make_fn_schema(output_schema22876,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22877], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rule,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22917 = schema.core.Any;
var input_schema22918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22919 = schema.core.checker(input_schema22918);
var output_checker22920 = schema.core.checker(output_schema22917);
return schema.core.schematize_fn(((function (ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function riffle$app$G__22915(G__22921,G__22922){
var validate__17386__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22921,G__22922], null);
var temp__4657__auto___22938 = (input_checker22919.cljs$core$IFn$_invoke$arity$1 ? input_checker22919.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22937) : input_checker22919.call(null,args__17387__auto___22937));
if(cljs.core.truth_(temp__4657__auto___22938)){
var error__17388__auto___22939 = temp__4657__auto___22938;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22915,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22939], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22918,cljs.core.cst$kw$value,args__17387__auto___22937,cljs.core.cst$kw$error,error__17388__auto___22939], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22921;
var owner = G__22922;
while(true){
if(typeof riffle.app.t_riffle$app22930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22930 = (function (owner,G__22921,validate__17386__auto__,props,input_schema22918,output_checker22920,G__22922,input_checker22919,G__22915,output_schema22917,ufv__,meta22931){
this.owner = owner;
this.G__22921 = G__22921;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.input_schema22918 = input_schema22918;
this.output_checker22920 = output_checker22920;
this.G__22922 = G__22922;
this.input_checker22919 = input_checker22919;
this.G__22915 = G__22915;
this.output_schema22917 = output_schema22917;
this.ufv__ = ufv__;
this.meta22931 = meta22931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function (_22932,meta22931__$1){
var self__ = this;
var _22932__$1 = this;
return (new riffle.app.t_riffle$app22930(self__.owner,self__.G__22921,self__.validate__17386__auto__,self__.props,self__.input_schema22918,self__.output_checker22920,self__.G__22922,self__.input_checker22919,self__.G__22915,self__.output_schema22917,self__.ufv__,meta22931__$1));
});})(validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
;

riffle.app.t_riffle$app22930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function (_22932){
var self__ = this;
var _22932__$1 = this;
return self__.meta22931;
});})(validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
;

riffle.app.t_riffle$app22930.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22930.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function (_){
var self__ = this;
var ___$1 = this;
var rule = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"rule-description",cljs.core.cst$kw$on_DASH_change,((function (rule,___$1,validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function (p1__22914_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(rule,cljs.core.cst$kw$description,riffle.app.value(p1__22914_SHARP_));
});})(rule,___$1,validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
,cljs.core.cst$kw$placeholder,"(description)",cljs.core.cst$kw$value,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(rule)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiline_QMARK_,true], null)], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section premises"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22933 = ({"className": "section-header"});
var G__22934 = "Before";
return React.DOM.div(G__22933,G__22934);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$premise,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$premise_DASH_ids.cljs$core$IFn$_invoke$arity$1(rule)], 0)))],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section results"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22935 = ({"className": "section-header"});
var G__22936 = "After";
return React.DOM.div(G__22935,G__22936);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$result,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$result_DASH_ids.cljs$core$IFn$_invoke$arity$1(rule)], 0)))],null))))],null)))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(rule),cljs.core.cst$kw$qui_DASH_rule))?riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Go to stage",om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.stage_selector,self__.props)], null)):null)],null))));
});})(validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
;

riffle.app.t_riffle$app22930.getBasis = ((function (validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__22921,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_schema22918,cljs.core.cst$sym$output_DASH_checker22920,cljs.core.with_meta(cljs.core.cst$sym$G__22922,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22919,cljs.core.with_meta(cljs.core.cst$sym$G__22915,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema22917,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22931], null);
});})(validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
;

riffle.app.t_riffle$app22930.cljs$lang$type = true;

riffle.app.t_riffle$app22930.cljs$lang$ctorStr = "riffle.app/t_riffle$app22930";

riffle.app.t_riffle$app22930.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22930");
});})(validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
;

riffle.app.__GT_t_riffle$app22930 = ((function (validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920){
return (function riffle$app$G__22915_$___GT_t_riffle$app22930(owner__$1,G__22921__$1,validate__17386__auto____$1,props__$1,input_schema22918__$1,output_checker22920__$1,G__22922__$1,input_checker22919__$1,G__22915__$1,output_schema22917__$1,ufv____$1,meta22931){
return (new riffle.app.t_riffle$app22930(owner__$1,G__22921__$1,validate__17386__auto____$1,props__$1,input_schema22918__$1,output_checker22920__$1,G__22922__$1,input_checker22919__$1,G__22915__$1,output_schema22917__$1,ufv____$1,meta22931));
});})(validate__17386__auto__,ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
;

}

return (new riffle.app.t_riffle$app22930(owner,G__22921,validate__17386__auto__,props,input_schema22918,output_checker22920,G__22922,input_checker22919,riffle$app$G__22915,output_schema22917,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22940 = (output_checker22920.cljs$core$IFn$_invoke$arity$1 ? output_checker22920.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22920.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22940)){
var error__17388__auto___22941 = temp__4657__auto___22940;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22915,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22941], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22917,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22941], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv__,output_schema22917,input_schema22918,input_checker22919,output_checker22920))
,schema.core.make_fn_schema(output_schema22917,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22918], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$qui_DASH_rule,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22944 = schema.core.Any;
var input_schema22945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22946 = schema.core.checker(input_schema22945);
var output_checker22947 = schema.core.checker(output_schema22944);
return schema.core.schematize_fn(((function (ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947){
return (function riffle$app$G__22942(G__22948,G__22949){
var validate__17386__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22948,G__22949], null);
var temp__4657__auto___22957 = (input_checker22946.cljs$core$IFn$_invoke$arity$1 ? input_checker22946.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22956) : input_checker22946.call(null,args__17387__auto___22956));
if(cljs.core.truth_(temp__4657__auto___22957)){
var error__17388__auto___22958 = temp__4657__auto___22957;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22942,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22958], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22945,cljs.core.cst$kw$value,args__17387__auto___22956,cljs.core.cst$kw$error,error__17388__auto___22958], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22948;
var owner = G__22949;
while(true){
if(typeof riffle.app.t_riffle$app22953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22953 = (function (G__22949,owner,validate__17386__auto__,props,G__22948,input_schema22945,output_checker22947,input_checker22946,G__22942,output_schema22944,ufv__,meta22954){
this.G__22949 = G__22949;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.G__22948 = G__22948;
this.input_schema22945 = input_schema22945;
this.output_checker22947 = output_checker22947;
this.input_checker22946 = input_checker22946;
this.G__22942 = G__22942;
this.output_schema22944 = output_schema22944;
this.ufv__ = ufv__;
this.meta22954 = meta22954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947){
return (function (_22955,meta22954__$1){
var self__ = this;
var _22955__$1 = this;
return (new riffle.app.t_riffle$app22953(self__.G__22949,self__.owner,self__.validate__17386__auto__,self__.props,self__.G__22948,self__.input_schema22945,self__.output_checker22947,self__.input_checker22946,self__.G__22942,self__.output_schema22944,self__.ufv__,meta22954__$1));
});})(validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947))
;

riffle.app.t_riffle$app22953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947){
return (function (_22955){
var self__ = this;
var _22955__$1 = this;
return self__.meta22954;
});})(validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947))
;

riffle.app.t_riffle$app22953.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22953.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.cljs$core$IFn$_invoke$arity$2(cljs.core.get_method(riffle.app.decl_block_body,cljs.core.cst$kw$rule),self__.props);
});})(validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947))
;

riffle.app.t_riffle$app22953.getBasis = ((function (validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__22949,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22948,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22945,cljs.core.cst$sym$output_DASH_checker22947,cljs.core.cst$sym$input_DASH_checker22946,cljs.core.with_meta(cljs.core.cst$sym$G__22942,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema22944,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22954], null);
});})(validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947))
;

riffle.app.t_riffle$app22953.cljs$lang$type = true;

riffle.app.t_riffle$app22953.cljs$lang$ctorStr = "riffle.app/t_riffle$app22953";

riffle.app.t_riffle$app22953.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22953");
});})(validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947))
;

riffle.app.__GT_t_riffle$app22953 = ((function (validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947){
return (function riffle$app$G__22942_$___GT_t_riffle$app22953(G__22949__$1,owner__$1,validate__17386__auto____$1,props__$1,G__22948__$1,input_schema22945__$1,output_checker22947__$1,input_checker22946__$1,G__22942__$1,output_schema22944__$1,ufv____$1,meta22954){
return (new riffle.app.t_riffle$app22953(G__22949__$1,owner__$1,validate__17386__auto____$1,props__$1,G__22948__$1,input_schema22945__$1,output_checker22947__$1,input_checker22946__$1,G__22942__$1,output_schema22944__$1,ufv____$1,meta22954));
});})(validate__17386__auto__,ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947))
;

}

return (new riffle.app.t_riffle$app22953(G__22949,owner,validate__17386__auto__,props,G__22948,input_schema22945,output_checker22947,input_checker22946,riffle$app$G__22942,output_schema22944,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22959 = (output_checker22947.cljs$core$IFn$_invoke$arity$1 ? output_checker22947.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22947.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22959)){
var error__17388__auto___22960 = temp__4657__auto___22959;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22942,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22960], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22944,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22960], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv__,output_schema22944,input_schema22945,input_checker22946,output_checker22947))
,schema.core.make_fn_schema(output_schema22944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22945], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22963 = schema.core.Any;
var input_schema22964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22965 = schema.core.checker(input_schema22964);
var output_checker22966 = schema.core.checker(output_schema22963);
return schema.core.schematize_fn(((function (ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966){
return (function riffle$app$G__22961(G__22967,G__22968){
var validate__17386__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___22979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22967,G__22968], null);
var temp__4657__auto___22980 = (input_checker22965.cljs$core$IFn$_invoke$arity$1 ? input_checker22965.cljs$core$IFn$_invoke$arity$1(args__17387__auto___22979) : input_checker22965.call(null,args__17387__auto___22979));
if(cljs.core.truth_(temp__4657__auto___22980)){
var error__17388__auto___22981 = temp__4657__auto___22980;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22961,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22981], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22964,cljs.core.cst$kw$value,args__17387__auto___22979,cljs.core.cst$kw$error,error__17388__auto___22981], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var props = G__22967;
var owner = G__22968;
while(true){
if(typeof riffle.app.t_riffle$app22974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22974 = (function (G__22968,owner,validate__17386__auto__,props,input_checker22965,G__22961,input_schema22964,ufv__,output_checker22966,output_schema22963,G__22967,meta22975){
this.G__22968 = G__22968;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.props = props;
this.input_checker22965 = input_checker22965;
this.G__22961 = G__22961;
this.input_schema22964 = input_schema22964;
this.ufv__ = ufv__;
this.output_checker22966 = output_checker22966;
this.output_schema22963 = output_schema22963;
this.G__22967 = G__22967;
this.meta22975 = meta22975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966){
return (function (_22976,meta22975__$1){
var self__ = this;
var _22976__$1 = this;
return (new riffle.app.t_riffle$app22974(self__.G__22968,self__.owner,self__.validate__17386__auto__,self__.props,self__.input_checker22965,self__.G__22961,self__.input_schema22964,self__.ufv__,self__.output_checker22966,self__.output_schema22963,self__.G__22967,meta22975__$1));
});})(validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966))
;

riffle.app.t_riffle$app22974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966){
return (function (_22976){
var self__ = this;
var _22976__$1 = this;
return self__.meta22975;
});})(validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966))
;

riffle.app.t_riffle$app22974.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22974.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966){
return (function (_){
var self__ = this;
var ___$1 = this;
var context = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stage",om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.stage_selector,self__.props)], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section facts"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22977 = ({"className": "section-header"});
var G__22978 = "Resources";
return React.DOM.div(G__22977,G__22978);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$fact,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$fact_DASH_ids.cljs$core$IFn$_invoke$arity$1(context)], 0)))],null))))],null))))],null))));
});})(validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966))
;

riffle.app.t_riffle$app22974.getBasis = ((function (validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__22968,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_checker22965,cljs.core.with_meta(cljs.core.cst$sym$G__22961,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22964,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_checker22966,cljs.core.cst$sym$output_DASH_schema22963,cljs.core.with_meta(cljs.core.cst$sym$G__22967,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$meta22975], null);
});})(validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966))
;

riffle.app.t_riffle$app22974.cljs$lang$type = true;

riffle.app.t_riffle$app22974.cljs$lang$ctorStr = "riffle.app/t_riffle$app22974";

riffle.app.t_riffle$app22974.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22974");
});})(validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966))
;

riffle.app.__GT_t_riffle$app22974 = ((function (validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966){
return (function riffle$app$G__22961_$___GT_t_riffle$app22974(G__22968__$1,owner__$1,validate__17386__auto____$1,props__$1,input_checker22965__$1,G__22961__$1,input_schema22964__$1,ufv____$1,output_checker22966__$1,output_schema22963__$1,G__22967__$1,meta22975){
return (new riffle.app.t_riffle$app22974(G__22968__$1,owner__$1,validate__17386__auto____$1,props__$1,input_checker22965__$1,G__22961__$1,input_schema22964__$1,ufv____$1,output_checker22966__$1,output_schema22963__$1,G__22967__$1,meta22975));
});})(validate__17386__auto__,ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966))
;

}

return (new riffle.app.t_riffle$app22974(G__22968,owner,validate__17386__auto__,props,input_checker22965,riffle$app$G__22961,input_schema22964,ufv__,output_checker22966,output_schema22963,G__22967,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___22982 = (output_checker22966.cljs$core$IFn$_invoke$arity$1 ? output_checker22966.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22966.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___22982)){
var error__17388__auto___22983 = temp__4657__auto___22982;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22961,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___22983], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22963,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___22983], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv__,output_schema22963,input_schema22964,input_checker22965,output_checker22966))
,schema.core.make_fn_schema(output_schema22963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22964], null)));
})());

var ufv___23078 = schema.utils.use_fn_validation;
var output_schema22989_23079 = schema.core.Any;
var input_schema22990_23080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22991_23081 = schema.core.checker(input_schema22990_23080);
var output_checker22992_23082 = schema.core.checker(output_schema22989_23079);
/**
 * Inputs: [editor owner]
 */
riffle.app.program_info = ((function (ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function riffle$app$program_info(G__22993,G__22994){
var validate__17386__auto__ = ufv___23078.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___23083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22993,G__22994], null);
var temp__4657__auto___23084 = (input_checker22991_23081.cljs$core$IFn$_invoke$arity$1 ? input_checker22991_23081.cljs$core$IFn$_invoke$arity$1(args__17387__auto___23083) : input_checker22991_23081.call(null,args__17387__auto___23083));
if(cljs.core.truth_(temp__4657__auto___23084)){
var error__17388__auto___23085 = temp__4657__auto___23084;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$program_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23085], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22990_23080,cljs.core.cst$kw$value,args__17387__auto___23083,cljs.core.cst$kw$error,error__17388__auto___23085], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var editor = G__22993;
var owner = G__22994;
while(true){
if(typeof riffle.app.t_riffle$app23035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app23035 = (function (program_info,output_schema22989,owner,validate__17386__auto__,output_checker22992,G__22993,G__22994,input_checker22991,editor,ufv__,input_schema22990,meta23036){
this.program_info = program_info;
this.output_schema22989 = output_schema22989;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.output_checker22992 = output_checker22992;
this.G__22993 = G__22993;
this.G__22994 = G__22994;
this.input_checker22991 = input_checker22991;
this.editor = editor;
this.ufv__ = ufv__;
this.input_schema22990 = input_schema22990;
this.meta23036 = meta23036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app23035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (_23037,meta23036__$1){
var self__ = this;
var _23037__$1 = this;
return (new riffle.app.t_riffle$app23035(self__.program_info,self__.output_schema22989,self__.owner,self__.validate__17386__auto__,self__.output_checker22992,self__.G__22993,self__.G__22994,self__.input_checker22991,self__.editor,self__.ufv__,self__.input_schema22990,meta23036__$1));
});})(validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

riffle.app.t_riffle$app23035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (_23037){
var self__ = this;
var _23037__$1 = this;
return self__.meta23036;
});})(validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

riffle.app.t_riffle$app23035.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app23035.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (_){
var self__ = this;
var ___$1 = this;
return "program-info";
});})(validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

riffle.app.t_riffle$app23035.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app23035.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (_){
var self__ = this;
var ___$1 = this;
var program = riffle.editor.current_program(self__.editor);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "program-info"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "header story-title"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__23038 = ({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (p1__22984_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.cst$kw$title,riffle.app.value(p1__22984_SHARP_));
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
), "placeholder": "(title)", "type": "text", "value": om_tools.dom.format_opts(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(program))});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__23038) : om.dom.input.call(null,G__23038));
})(),(((cljs.core.count(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(self__.editor)) > (1)))?(function (){var G__23039 = ({"className": "delete-button", "onClick": om_tools.dom.format_opts(((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.editor,cljs.core.PersistentVector.EMPTY,((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (p1__22985_SHARP_){
return riffle.editor.delete_program(p1__22985_SHARP_,cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.editor));
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
);
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
)});
var G__23040 = "\u00D7";
return React.DOM.button(G__23039,G__23040);
})():null)],null)))),riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,program).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interaction style",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (p1__22986_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.cst$kw$interaction_DASH_style,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(riffle.app.value(p1__22986_SHARP_)));
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
), "value": om_tools.dom.format_opts(cljs.core.name(cljs.core.cst$kw$interaction_DASH_style.cljs$core$IFn$_invoke$arity$1(program)))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__23041 = ({"value": "cyoa"});
var G__23042 = "CYOA";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__23041,G__23042) : om.dom.option.call(null,G__23041,G__23042));
})(),(function (){var G__23043 = ({"value": "parser"});
var G__23044 = "Parser";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__23043,G__23044) : om.dom.option.call(null,G__23043,G__23044));
})()],null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting context",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (p1__22987_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.cst$kw$context_DASH_id,riffle.app.int_value(p1__22987_SHARP_));
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
), "value": om_tools.dom.format_opts(cljs.core.cst$kw$context_DASH_id.cljs$core$IFn$_invoke$arity$1(program))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(((cljs.core.cst$kw$context_DASH_id.cljs$core$IFn$_invoke$arity$1(program) == null))?(function (){var G__23045 = ({"value": null});
var G__23046 = "(none)";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__23045,G__23046) : om.dom.option.call(null,G__23045,G__23046));
})():null),(function (){var iter__7184__auto__ = ((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function riffle$app$program_info_$_iter__23047(s__23048){
return (new cljs.core.LazySeq(null,((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (){
var s__23048__$1 = s__23048;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23048__$1);
if(temp__4657__auto__){
var s__23048__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23048__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23048__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23050 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23049 = (0);
while(true){
if((i__23049 < size__7183__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23049);
cljs.core.chunk_append(b__23050,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,id),"(unnamed context)")],null)))));

var G__23086 = (i__23049 + (1));
i__23049 = G__23086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23050),riffle$app$program_info_$_iter__23047(cljs.core.chunk_rest(s__23048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23050),null);
}
} else {
var id = cljs.core.first(s__23048__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,id),"(unnamed context)")],null)))),riffle$app$program_info_$_iter__23047(cljs.core.rest(s__23048__$2)));
}
} else {
return null;
}
break;
}
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
,null,null));
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;
return iter__7184__auto__(cljs.core.cst$kw$context_DASH_ids.cljs$core$IFn$_invoke$arity$1(program));
})()],null))))], null)),riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,program).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Load saved",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (ev){
var v = riffle.app.int_value(ev);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(-1))){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.editor,cljs.core.PersistentVector.EMPTY,riffle.editor.create_program);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.editor,cljs.core.cst$kw$program,v);
}
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
), "value": om_tools.dom.format_opts(cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.editor))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function riffle$app$program_info_$_iter__23053(s__23054){
return (new cljs.core.LazySeq(null,((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (){
var s__23054__$1 = s__23054;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23054__$1);
if(temp__4657__auto__){
var s__23054__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23054__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23054__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23056 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23055 = (0);
while(true){
if((i__23055 < size__7183__auto__)){
var vec__23065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23055);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23065,(0),null);
var program__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23065,(1),null);
cljs.core.chunk_append(b__23056,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(idx)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(program__$1)],null)))));

var G__23087 = (i__23055 + (1));
i__23055 = G__23087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23056),riffle$app$program_info_$_iter__23053(cljs.core.chunk_rest(s__23054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23056),null);
}
} else {
var vec__23068 = cljs.core.first(s__23054__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23068,(0),null);
var program__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23068,(1),null);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(idx)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(program__$1)],null)))),riffle$app$program_info_$_iter__23053(cljs.core.rest(s__23054__$2)));
}
} else {
return null;
}
break;
}
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
,null,null));
});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;
return iter__7184__auto__(riffle.util.with_indexes(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(self__.editor)));
})(),(function (){var G__23071 = ({"value": (-1)});
var G__23072 = "(new program)";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__23071,G__23072) : om.dom.option.call(null,G__23071,G__23072));
})()],null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Copy/paste",(function (){var G__23073 = ({"className": "copy-paste", "onChange": om_tools.dom.format_opts(((function (program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (ev){
try{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.PersistentVector.EMPTY,cljs.reader.read_string(riffle.app.value(ev)));
}catch (e23074){var err = e23074;
return console.log(err);
}});})(program,___$1,validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
), "type": "text", "value": om_tools.dom.format_opts(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([program], 0)))});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__23073) : om.dom.input.call(null,G__23073));
})()], null))],null))));
});})(validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

riffle.app.t_riffle$app23035.getBasis = ((function (validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$program_DASH_info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22989,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22990], null)),cljs.core.cst$kw$doc,"Inputs: [editor owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$editor,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_schema22989,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$output_DASH_checker22992,cljs.core.with_meta(cljs.core.cst$sym$G__22993,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22994,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22991,cljs.core.cst$sym$editor,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$input_DASH_schema22990,cljs.core.cst$sym$meta23036], null);
});})(validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

riffle.app.t_riffle$app23035.cljs$lang$type = true;

riffle.app.t_riffle$app23035.cljs$lang$ctorStr = "riffle.app/t_riffle$app23035";

riffle.app.t_riffle$app23035.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app23035");
});})(validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

riffle.app.__GT_t_riffle$app23035 = ((function (validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082){
return (function riffle$app$program_info_$___GT_t_riffle$app23035(program_info__$1,output_schema22989__$1,owner__$1,validate__17386__auto____$1,output_checker22992__$1,G__22993__$1,G__22994__$1,input_checker22991__$1,editor__$1,ufv____$1,input_schema22990__$1,meta23036){
return (new riffle.app.t_riffle$app23035(program_info__$1,output_schema22989__$1,owner__$1,validate__17386__auto____$1,output_checker22992__$1,G__22993__$1,G__22994__$1,input_checker22991__$1,editor__$1,ufv____$1,input_schema22990__$1,meta23036));
});})(validate__17386__auto__,ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

}

return (new riffle.app.t_riffle$app23035(riffle$app$program_info,output_schema22989_23079,owner,validate__17386__auto__,output_checker22992_23082,G__22993,G__22994,input_checker22991_23081,editor,ufv___23078,input_schema22990_23080,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___23088 = (output_checker22992_23082.cljs$core$IFn$_invoke$arity$1 ? output_checker22992_23082.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker22992_23082.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___23088)){
var error__17388__auto___23089 = temp__4657__auto___23088;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$program_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23089], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22989_23079,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___23089], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___23078,output_schema22989_23079,input_schema22990_23080,input_checker22991_23081,output_checker22992_23082))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.program_info),schema.core.make_fn_schema(output_schema22989_23079,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22990_23080], null)));

riffle.app.__GT_program_info = (function riffle$app$__GT_program_info(var_args){
var args23075 = [];
var len__7479__auto___23090 = arguments.length;
var i__7480__auto___23091 = (0);
while(true){
if((i__7480__auto___23091 < len__7479__auto___23090)){
args23075.push((arguments[i__7480__auto___23091]));

var G__23092 = (i__7480__auto___23091 + (1));
i__7480__auto___23091 = G__23092;
continue;
} else {
}
break;
}

var G__23077 = args23075.length;
switch (G__23077) {
case 1:
return riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23075.length)].join('')));

}
});

riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.program_info,cursor__22252__auto__);
});

riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m22988){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.program_info,cursor__22252__auto__,m22988);
});

riffle.app.__GT_program_info.cljs$lang$maxFixedArity = 2;


var ufv___23122 = schema.utils.use_fn_validation;
var output_schema23095_23123 = schema.core.Any;
var input_schema23096_23124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23097_23125 = schema.core.checker(input_schema23096_23124);
var output_checker23098_23126 = schema.core.checker(output_schema23095_23123);
/**
 * Inputs: [editor owner]
 */
riffle.app.editor = ((function (ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function riffle$app$editor(G__23099,G__23100){
var validate__17386__auto__ = ufv___23122.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___23127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23099,G__23100], null);
var temp__4657__auto___23128 = (input_checker23097_23125.cljs$core$IFn$_invoke$arity$1 ? input_checker23097_23125.cljs$core$IFn$_invoke$arity$1(args__17387__auto___23127) : input_checker23097_23125.call(null,args__17387__auto___23127));
if(cljs.core.truth_(temp__4657__auto___23128)){
var error__17388__auto___23129 = temp__4657__auto___23128;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23129], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23096_23124,cljs.core.cst$kw$value,args__17387__auto___23127,cljs.core.cst$kw$error,error__17388__auto___23129], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var editor__$1 = G__23099;
var owner = G__23100;
while(true){
if(typeof riffle.app.t_riffle$app23110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app23110 = (function (owner,validate__17386__auto__,G__23100,G__23099,input_schema23096,input_checker23097,editor,ufv__,output_schema23095,output_checker23098,meta23111){
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.G__23100 = G__23100;
this.G__23099 = G__23099;
this.input_schema23096 = input_schema23096;
this.input_checker23097 = input_checker23097;
this.editor = editor;
this.ufv__ = ufv__;
this.output_schema23095 = output_schema23095;
this.output_checker23098 = output_checker23098;
this.meta23111 = meta23111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app23110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function (_23112,meta23111__$1){
var self__ = this;
var _23112__$1 = this;
return (new riffle.app.t_riffle$app23110(self__.owner,self__.validate__17386__auto__,self__.G__23100,self__.G__23099,self__.input_schema23096,self__.input_checker23097,self__.editor,self__.ufv__,self__.output_schema23095,self__.output_checker23098,meta23111__$1));
});})(validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

riffle.app.t_riffle$app23110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function (_23112){
var self__ = this;
var _23112__$1 = this;
return self__.meta23111;
});})(validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

riffle.app.t_riffle$app23110.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app23110.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function (_){
var self__ = this;
var ___$1 = this;
return "editor";
});})(validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

riffle.app.t_riffle$app23110.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app23110.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "editor"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.program_info,self__.editor),(function (){var program = riffle.editor.current_program(self__.editor);
var iter__7184__auto__ = ((function (program,___$1,validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function riffle$app$editor_$_iter__23113(s__23114){
return (new cljs.core.LazySeq(null,((function (program,___$1,validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function (){
var s__23114__$1 = s__23114;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23114__$1);
if(temp__4657__auto__){
var s__23114__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23114__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23114__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23116 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23115 = (0);
while(true){
if((i__23115 < size__7183__auto__)){
var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23115);
cljs.core.chunk_append(b__23116,om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$program,program,cljs.core.cst$kw$kind,kind], null)));

var G__23130 = (i__23115 + (1));
i__23115 = G__23130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23116),riffle$app$editor_$_iter__23113(cljs.core.chunk_rest(s__23114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23116),null);
}
} else {
var kind = cljs.core.first(s__23114__$2);
return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$program,program,cljs.core.cst$kw$kind,kind], null)),riffle$app$editor_$_iter__23113(cljs.core.rest(s__23114__$2)));
}
} else {
return null;
}
break;
}
});})(program,___$1,validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
,null,null));
});})(program,___$1,validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;
return iter__7184__auto__(riffle.editor.toplevel_kinds);
})()],null))));
});})(validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

riffle.app.t_riffle$app23110.getBasis = ((function (validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__23100,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__23099,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema23096,cljs.core.cst$sym$input_DASH_checker23097,cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23095,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23096], null)),cljs.core.cst$kw$doc,"Inputs: [editor owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$editor,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_schema23095,cljs.core.cst$sym$output_DASH_checker23098,cljs.core.cst$sym$meta23111], null);
});})(validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

riffle.app.t_riffle$app23110.cljs$lang$type = true;

riffle.app.t_riffle$app23110.cljs$lang$ctorStr = "riffle.app/t_riffle$app23110";

riffle.app.t_riffle$app23110.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app23110");
});})(validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

riffle.app.__GT_t_riffle$app23110 = ((function (validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126){
return (function riffle$app$editor_$___GT_t_riffle$app23110(owner__$1,validate__17386__auto____$1,G__23100__$1,G__23099__$1,input_schema23096__$1,input_checker23097__$1,editor__$2,ufv____$1,output_schema23095__$1,output_checker23098__$1,meta23111){
return (new riffle.app.t_riffle$app23110(owner__$1,validate__17386__auto____$1,G__23100__$1,G__23099__$1,input_schema23096__$1,input_checker23097__$1,editor__$2,ufv____$1,output_schema23095__$1,output_checker23098__$1,meta23111));
});})(validate__17386__auto__,ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

}

return (new riffle.app.t_riffle$app23110(owner,validate__17386__auto__,G__23100,G__23099,input_schema23096_23124,input_checker23097_23125,editor__$1,ufv___23122,output_schema23095_23123,output_checker23098_23126,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___23131 = (output_checker23098_23126.cljs$core$IFn$_invoke$arity$1 ? output_checker23098_23126.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker23098_23126.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___23131)){
var error__17388__auto___23132 = temp__4657__auto___23131;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23132], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23095_23123,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___23132], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___23122,output_schema23095_23123,input_schema23096_23124,input_checker23097_23125,output_checker23098_23126))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.editor),schema.core.make_fn_schema(output_schema23095_23123,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23096_23124], null)));

riffle.app.__GT_editor = (function riffle$app$__GT_editor(var_args){
var args23119 = [];
var len__7479__auto___23133 = arguments.length;
var i__7480__auto___23134 = (0);
while(true){
if((i__7480__auto___23134 < len__7479__auto___23133)){
args23119.push((arguments[i__7480__auto___23134]));

var G__23135 = (i__7480__auto___23134 + (1));
i__7480__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var G__23121 = args23119.length;
switch (G__23121) {
case 1:
return riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23119.length)].join('')));

}
});

riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor,cursor__22252__auto__);
});

riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m23094){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.editor,cursor__22252__auto__,m23094);
});

riffle.app.__GT_editor.cljs$lang$maxFixedArity = 2;

riffle.app.stop = (function riffle$app$stop(player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$running_QMARK_,false);
});
riffle.app.advance_or_stop = (function riffle$app$advance_or_stop(player){
var state_SINGLEQUOTE_ = riffle.engine.run_to_choice_point(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(player));
var G__23138 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$state,state_SINGLEQUOTE_);
if(cljs.core.truth_(cljs.core.cst$kw$reached_DASH_end_QMARK_.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_))){
return riffle.app.stop(G__23138);
} else {
return G__23138;
}
});
riffle.app.play = (function riffle$app$play(player,program){
try{var init_state = riffle.compiler.compile_program(riffle.editor.prep_for_compilation(program));
return riffle.app.advance_or_stop(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.cst$kw$running_QMARK_,true,cljs.core.array_seq([cljs.core.cst$kw$state,init_state,cljs.core.cst$kw$error,null], 0)));
}catch (e23140){var err = e23140;
console.log(err);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.cst$kw$running_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$error,err], 0));
}});
riffle.app.choose = (function riffle$app$choose(player,choice){
try{return riffle.app.advance_or_stop(cljs.core.update.cljs$core$IFn$_invoke$arity$4(player,cljs.core.cst$kw$state,riffle.engine.apply_transition,choice));
}catch (e23142){var err = e23142;
console.log(err);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.cst$kw$running_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$error,err], 0));
}});

var ufv___23197 = schema.utils.use_fn_validation;
var output_schema23146_23198 = schema.core.Any;
var input_schema23147_23199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23148_23200 = schema.core.checker(input_schema23147_23199);
var output_checker23149_23201 = schema.core.checker(output_schema23146_23198);
/**
 * Inputs: [data owner]
 */
riffle.app.player = ((function (ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function riffle$app$player(G__23150,G__23151){
var validate__17386__auto__ = ufv___23197.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___23202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23150,G__23151], null);
var temp__4657__auto___23203 = (input_checker23148_23200.cljs$core$IFn$_invoke$arity$1 ? input_checker23148_23200.cljs$core$IFn$_invoke$arity$1(args__17387__auto___23202) : input_checker23148_23200.call(null,args__17387__auto___23202));
if(cljs.core.truth_(temp__4657__auto___23203)){
var error__17388__auto___23204 = temp__4657__auto___23203;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23204], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23147_23199,cljs.core.cst$kw$value,args__17387__auto___23202,cljs.core.cst$kw$error,error__17388__auto___23204], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var data = G__23150;
var owner = G__23151;
while(true){
if(typeof riffle.app.t_riffle$app23173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app23173 = (function (output_schema23146,owner,validate__17386__auto__,data,input_checker23148,input_schema23147,output_checker23149,G__23151,G__23150,ufv__,player,meta23174){
this.output_schema23146 = output_schema23146;
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.data = data;
this.input_checker23148 = input_checker23148;
this.input_schema23147 = input_schema23147;
this.output_checker23149 = output_checker23149;
this.G__23151 = G__23151;
this.G__23150 = G__23150;
this.ufv__ = ufv__;
this.player = player;
this.meta23174 = meta23174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app23173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (_23175,meta23174__$1){
var self__ = this;
var _23175__$1 = this;
return (new riffle.app.t_riffle$app23173(self__.output_schema23146,self__.owner,self__.validate__17386__auto__,self__.data,self__.input_checker23148,self__.input_schema23147,self__.output_checker23149,self__.G__23151,self__.G__23150,self__.ufv__,self__.player,meta23174__$1));
});})(validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

riffle.app.t_riffle$app23173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (_23175){
var self__ = this;
var _23175__$1 = this;
return self__.meta23174;
});})(validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

riffle.app.t_riffle$app23173.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app23173.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (_){
var self__ = this;
var ___$1 = this;
return "player";
});})(validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

riffle.app.t_riffle$app23173.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app23173.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23176 = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(self__.data);
var map__23176__$1 = ((((!((map__23176 == null)))?((((map__23176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23176):map__23176);
var player__$1 = map__23176__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.cst$kw$state);
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.cst$kw$running_QMARK_);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts([cljs.core.str("player "),cljs.core.str((cljs.core.truth_(running_QMARK_)?"running":"stopped"))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "controls"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(running_QMARK_)?(function (){var G__23178 = ({"className": "stop-button", "onClick": om_tools.dom.format_opts(((function (map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,riffle.app.stop);
});})(map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
)});
var G__23179 = "Stop";
return React.DOM.button(G__23178,G__23179);
})():(function (){var G__23180 = ({"className": "play-button", "onClick": om_tools.dom.format_opts(((function (map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,((function (map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (p1__23143_SHARP_){
return riffle.app.play(p1__23143_SHARP_,cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.data));
});})(map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
);
});})(map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
)});
var G__23181 = "Play";
return React.DOM.button(G__23180,G__23181);
})())],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "content"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function riffle$app$player_$_iter__23182(s__23183){
return (new cljs.core.LazySeq(null,((function (map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (){
var s__23183__$1 = s__23183;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23183__$1);
if(temp__4657__auto__){
var s__23183__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23183__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23183__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23185 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23184 = (0);
while(true){
if((i__23184 < size__7183__auto__)){
var paragraph = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23184);
cljs.core.chunk_append(b__23185,om_tools.dom.element(React.DOM.p,paragraph,cljs.core.PersistentVector.EMPTY));

var G__23205 = (i__23184 + (1));
i__23184 = G__23205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23185),riffle$app$player_$_iter__23182(cljs.core.chunk_rest(s__23183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23185),null);
}
} else {
var paragraph = cljs.core.first(s__23183__$2);
return cljs.core.cons(om_tools.dom.element(React.DOM.p,paragraph,cljs.core.PersistentVector.EMPTY),riffle$app$player_$_iter__23182(cljs.core.rest(s__23183__$2)));
}
} else {
return null;
}
break;
}
});})(map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
,null,null));
});})(map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;
return iter__7184__auto__(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(state));
})()],null)))),(cljs.core.truth_(running_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,({"className": "choices"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function riffle$app$player_$_iter__23188(s__23189){
return (new cljs.core.LazySeq(null,((function (map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (){
var s__23189__$1 = s__23189;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23189__$1);
if(temp__4657__auto__){
var s__23189__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23189__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23189__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23191 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23190 = (0);
while(true){
if((i__23190 < size__7183__auto__)){
var choice = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23190);
cljs.core.chunk_append(b__23191,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({"className": "choice"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"onClick": om_tools.dom.format_opts(((function (i__23190,choice,c__7182__auto__,size__7183__auto__,b__23191,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,((function (i__23190,choice,c__7182__auto__,size__7183__auto__,b__23191,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (p1__23144_SHARP_){
return riffle.app.choose(p1__23144_SHARP_,choice);
});})(i__23190,choice,c__7182__auto__,size__7183__auto__,b__23191,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
);
});})(i__23190,choice,c__7182__auto__,size__7183__auto__,b__23191,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.engine.choice_text(choice)],null))))],null)))));

var G__23206 = (i__23190 + (1));
i__23190 = G__23206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23191),riffle$app$player_$_iter__23188(cljs.core.chunk_rest(s__23189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23191),null);
}
} else {
var choice = cljs.core.first(s__23189__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({"className": "choice"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"onClick": om_tools.dom.format_opts(((function (choice,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,((function (choice,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (p1__23144_SHARP_){
return riffle.app.choose(p1__23144_SHARP_,choice);
});})(choice,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
);
});})(choice,s__23189__$2,temp__4657__auto__,map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.engine.choice_text(choice)],null))))],null)))),riffle$app$player_$_iter__23188(cljs.core.rest(s__23189__$2)));
}
} else {
return null;
}
break;
}
});})(map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
,null,null));
});})(map__23176,map__23176__$1,player__$1,state,running_QMARK_,___$1,validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;
return iter__7184__auto__(cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(state));
})()],null)))):null),(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(player__$1))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "error"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(player__$1).message],null)))):null)],null))));
});})(validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

riffle.app.t_riffle$app23173.getBasis = ((function (validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema23146,cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_checker23148,cljs.core.cst$sym$input_DASH_schema23147,cljs.core.cst$sym$output_DASH_checker23149,cljs.core.with_meta(cljs.core.cst$sym$G__23151,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__23150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$player,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23146,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23147], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$meta23174], null);
});})(validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

riffle.app.t_riffle$app23173.cljs$lang$type = true;

riffle.app.t_riffle$app23173.cljs$lang$ctorStr = "riffle.app/t_riffle$app23173";

riffle.app.t_riffle$app23173.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app23173");
});})(validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

riffle.app.__GT_t_riffle$app23173 = ((function (validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201){
return (function riffle$app$player_$___GT_t_riffle$app23173(output_schema23146__$1,owner__$1,validate__17386__auto____$1,data__$1,input_checker23148__$1,input_schema23147__$1,output_checker23149__$1,G__23151__$1,G__23150__$1,ufv____$1,player__$1,meta23174){
return (new riffle.app.t_riffle$app23173(output_schema23146__$1,owner__$1,validate__17386__auto____$1,data__$1,input_checker23148__$1,input_schema23147__$1,output_checker23149__$1,G__23151__$1,G__23150__$1,ufv____$1,player__$1,meta23174));
});})(validate__17386__auto__,ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

}

return (new riffle.app.t_riffle$app23173(output_schema23146_23198,owner,validate__17386__auto__,data,input_checker23148_23200,input_schema23147_23199,output_checker23149_23201,G__23151,G__23150,ufv___23197,riffle$app$player,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___23207 = (output_checker23149_23201.cljs$core$IFn$_invoke$arity$1 ? output_checker23149_23201.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker23149_23201.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___23207)){
var error__17388__auto___23208 = temp__4657__auto___23207;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23208], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23146_23198,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___23208], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___23197,output_schema23146_23198,input_schema23147_23199,input_checker23148_23200,output_checker23149_23201))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.player),schema.core.make_fn_schema(output_schema23146_23198,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23147_23199], null)));

riffle.app.__GT_player = (function riffle$app$__GT_player(var_args){
var args23194 = [];
var len__7479__auto___23209 = arguments.length;
var i__7480__auto___23210 = (0);
while(true){
if((i__7480__auto___23210 < len__7479__auto___23209)){
args23194.push((arguments[i__7480__auto___23210]));

var G__23211 = (i__7480__auto___23210 + (1));
i__7480__auto___23210 = G__23211;
continue;
} else {
}
break;
}

var G__23196 = args23194.length;
switch (G__23196) {
case 1:
return riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23194.length)].join('')));

}
});

riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.player,cursor__22252__auto__);
});

riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m23145){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.player,cursor__22252__auto__,m23145);
});

riffle.app.__GT_player.cljs$lang$maxFixedArity = 2;


var ufv___23233 = schema.utils.use_fn_validation;
var output_schema23214_23234 = schema.core.Any;
var input_schema23215_23235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23216_23236 = schema.core.checker(input_schema23215_23235);
var output_checker23217_23237 = schema.core.checker(output_schema23214_23234);
/**
 * Inputs: [data owner]
 */
riffle.app.app = ((function (ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function riffle$app$app(G__23218,G__23219){
var validate__17386__auto__ = ufv___23233.get_cell();
if(cljs.core.truth_(validate__17386__auto__)){
var args__17387__auto___23238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23218,G__23219], null);
var temp__4657__auto___23239 = (input_checker23216_23236.cljs$core$IFn$_invoke$arity$1 ? input_checker23216_23236.cljs$core$IFn$_invoke$arity$1(args__17387__auto___23238) : input_checker23216_23236.call(null,args__17387__auto___23238));
if(cljs.core.truth_(temp__4657__auto___23239)){
var error__17388__auto___23240 = temp__4657__auto___23239;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23240], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23215_23235,cljs.core.cst$kw$value,args__17387__auto___23238,cljs.core.cst$kw$error,error__17388__auto___23240], null));
} else {
}
} else {
}

var o__17389__auto__ = (function (){var data = G__23218;
var owner = G__23219;
while(true){
if(typeof riffle.app.t_riffle$app23225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app23225 = (function (owner,validate__17386__auto__,data,input_checker23216,output_checker23217,G__23218,input_schema23215,output_schema23214,app,ufv__,G__23219,meta23226){
this.owner = owner;
this.validate__17386__auto__ = validate__17386__auto__;
this.data = data;
this.input_checker23216 = input_checker23216;
this.output_checker23217 = output_checker23217;
this.G__23218 = G__23218;
this.input_schema23215 = input_schema23215;
this.output_schema23214 = output_schema23214;
this.app = app;
this.ufv__ = ufv__;
this.G__23219 = G__23219;
this.meta23226 = meta23226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app23225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function (_23227,meta23226__$1){
var self__ = this;
var _23227__$1 = this;
return (new riffle.app.t_riffle$app23225(self__.owner,self__.validate__17386__auto__,self__.data,self__.input_checker23216,self__.output_checker23217,self__.G__23218,self__.input_schema23215,self__.output_schema23214,self__.app,self__.ufv__,self__.G__23219,meta23226__$1));
});})(validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

riffle.app.t_riffle$app23225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function (_23227){
var self__ = this;
var _23227__$1 = this;
return self__.meta23226;
});})(validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

riffle.app.t_riffle$app23225.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app23225.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

riffle.app.t_riffle$app23225.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app23225.prototype.om$core$IRender$render$arity$1 = ((function (validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor,cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(self__.data)),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.player,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$program,riffle.editor.current_program(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "debug", "style": ({"position": "fixed", "right": (0), "top": (0)})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__23228 = ({"onClick": om_tools.dom.format_opts(((function (___$1,validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function (){
return localStorage.removeItem("program");
});})(___$1,validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
)});
var G__23229 = "Clear localStorage";
return React.DOM.button(G__23228,G__23229);
})()],null))))],null))));
});})(validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

riffle.app.t_riffle$app23225.getBasis = ((function (validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$validate__17386__auto__,cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_checker23216,cljs.core.cst$sym$output_DASH_checker23217,cljs.core.with_meta(cljs.core.cst$sym$G__23218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema23215,cljs.core.cst$sym$output_DASH_schema23214,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23214,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23215], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$G__23219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$meta23226], null);
});})(validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

riffle.app.t_riffle$app23225.cljs$lang$type = true;

riffle.app.t_riffle$app23225.cljs$lang$ctorStr = "riffle.app/t_riffle$app23225";

riffle.app.t_riffle$app23225.cljs$lang$ctorPrWriter = ((function (validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app23225");
});})(validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

riffle.app.__GT_t_riffle$app23225 = ((function (validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237){
return (function riffle$app$app_$___GT_t_riffle$app23225(owner__$1,validate__17386__auto____$1,data__$1,input_checker23216__$1,output_checker23217__$1,G__23218__$1,input_schema23215__$1,output_schema23214__$1,app__$1,ufv____$1,G__23219__$1,meta23226){
return (new riffle.app.t_riffle$app23225(owner__$1,validate__17386__auto____$1,data__$1,input_checker23216__$1,output_checker23217__$1,G__23218__$1,input_schema23215__$1,output_schema23214__$1,app__$1,ufv____$1,G__23219__$1,meta23226));
});})(validate__17386__auto__,ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

}

return (new riffle.app.t_riffle$app23225(owner,validate__17386__auto__,data,input_checker23216_23236,output_checker23217_23237,G__23218,input_schema23215_23235,output_schema23214_23234,riffle$app$app,ufv___23233,G__23219,null));
break;
}
})();
if(cljs.core.truth_(validate__17386__auto__)){
var temp__4657__auto___23241 = (output_checker23217_23237.cljs$core$IFn$_invoke$arity$1 ? output_checker23217_23237.cljs$core$IFn$_invoke$arity$1(o__17389__auto__) : output_checker23217_23237.call(null,o__17389__auto__));
if(cljs.core.truth_(temp__4657__auto___23241)){
var error__17388__auto___23242 = temp__4657__auto___23241;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__17388__auto___23242], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23214_23234,cljs.core.cst$kw$value,o__17389__auto__,cljs.core.cst$kw$error,error__17388__auto___23242], null));
} else {
}
} else {
}

return o__17389__auto__;
});})(ufv___23233,output_schema23214_23234,input_schema23215_23235,input_checker23216_23236,output_checker23217_23237))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.app),schema.core.make_fn_schema(output_schema23214_23234,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23215_23235], null)));

riffle.app.__GT_app = (function riffle$app$__GT_app(var_args){
var args23230 = [];
var len__7479__auto___23243 = arguments.length;
var i__7480__auto___23244 = (0);
while(true){
if((i__7480__auto___23244 < len__7479__auto___23243)){
args23230.push((arguments[i__7480__auto___23244]));

var G__23245 = (i__7480__auto___23244 + (1));
i__7480__auto___23244 = G__23245;
continue;
} else {
}
break;
}

var G__23232 = args23230.length;
switch (G__23232) {
case 1:
return riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23230.length)].join('')));

}
});

riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22252__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.app,cursor__22252__auto__);
});

riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22252__auto__,m23213){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.app,cursor__22252__auto__,m23213);
});

riffle.app.__GT_app.cljs$lang$maxFixedArity = 2;

om.core.root(riffle.app.app,riffle.app.app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,document.getElementById("app"),cljs.core.cst$kw$tx_DASH_listen,(function (p__23247,_){
var map__23248 = p__23247;
var map__23248__$1 = ((((!((map__23248 == null)))?((((map__23248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23248):map__23248);
var old_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.cst$kw$old_DASH_state);
var new_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.cst$kw$new_DASH_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(new_state))){
return null;
} else {
return riffle.editor.save_editor_state_BANG_(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(new_state));
}
})], null));
