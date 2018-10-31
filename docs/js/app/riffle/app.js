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
riffle.app.app_state = (function (){var G__21808 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$editor,riffle.editor.init_editor_state_BANG_(),cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$running_QMARK_,false,cljs.core.cst$kw$state,cljs.core.PersistentArrayMap.EMPTY], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21808) : cljs.core.atom.call(null,G__21808));
})();
riffle.app.value = (function riffle$app$value(ev){
return ev.target.value;
});
riffle.app.int_value = (function riffle$app$int_value(ev){
var G__21810 = riffle.app.value(ev);
if((G__21810 == null)){
return null;
} else {
return parseInt(G__21810,(10));
}
});
riffle.app.copy_computed_styles_BANG_ = (function riffle$app$copy_computed_styles_BANG_(from,to,css_props){
var from_style = window.getComputedStyle(from);
var to_style = to.style;
var seq__21815 = cljs.core.seq(css_props);
var chunk__21816 = null;
var count__21817 = (0);
var i__21818 = (0);
while(true){
if((i__21818 < count__21817)){
var prop = chunk__21816.cljs$core$IIndexed$_nth$arity$2(null,i__21818);
to_style.setProperty(prop,from_style.getPropertyValue(prop));

var G__21819 = seq__21815;
var G__21820 = chunk__21816;
var G__21821 = count__21817;
var G__21822 = (i__21818 + (1));
seq__21815 = G__21819;
chunk__21816 = G__21820;
count__21817 = G__21821;
i__21818 = G__21822;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__21815);
if(temp__4657__auto__){
var seq__21815__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21815__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__21815__$1);
var G__21823 = cljs.core.chunk_rest(seq__21815__$1);
var G__21824 = c__7215__auto__;
var G__21825 = cljs.core.count(c__7215__auto__);
var G__21826 = (0);
seq__21815 = G__21823;
chunk__21816 = G__21824;
count__21817 = G__21825;
i__21818 = G__21826;
continue;
} else {
var prop = cljs.core.first(seq__21815__$1);
to_style.setProperty(prop,from_style.getPropertyValue(prop));

var G__21827 = cljs.core.next(seq__21815__$1);
var G__21828 = null;
var G__21829 = (0);
var G__21830 = (0);
seq__21815 = G__21827;
chunk__21816 = G__21828;
count__21817 = G__21829;
i__21818 = G__21830;
continue;
}
} else {
return null;
}
}
break;
}
});

var ufv___21870 = schema.utils.use_fn_validation;
var output_schema21832_21871 = schema.core.Any;
var input_schema21833_21872 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.cst$sym$arg2)], null);
var input_checker21834_21873 = schema.core.checker(input_schema21833_21872);
var output_checker21835_21874 = schema.core.checker(output_schema21832_21871);
/**
 * Inputs: [props owner {:keys [multiline?]}]
 */
riffle.app.autoresizing_text_input = ((function (ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function riffle$app$autoresizing_text_input(G__21836,G__21837,G__21838){
var validate__16887__auto__ = ufv___21870.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___21875 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21836,G__21837,G__21838], null);
var temp__4657__auto___21876 = (input_checker21834_21873.cljs$core$IFn$_invoke$arity$1 ? input_checker21834_21873.cljs$core$IFn$_invoke$arity$1(args__16888__auto___21875) : input_checker21834_21873.call(null,args__16888__auto___21875));
if(cljs.core.truth_(temp__4657__auto___21876)){
var error__16889__auto___21877 = temp__4657__auto___21876;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$autoresizing_DASH_text_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___21877], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21833_21872,cljs.core.cst$kw$value,args__16888__auto___21875,cljs.core.cst$kw$error,error__16889__auto___21877], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__21836;
var owner = G__21837;
var G__21854 = G__21838;
var map__21855 = G__21854;
var map__21855__$1 = ((((!((map__21855 == null)))?((((map__21855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21855):map__21855);
var multiline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,cljs.core.cst$kw$multiline_QMARK_);
var props__$1 = props;
var owner__$1 = owner;
var G__21854__$1 = G__21854;
while(true){
var props__$2 = props__$1;
var owner__$2 = owner__$1;
var map__21857 = G__21854__$1;
var map__21857__$1 = ((((!((map__21857 == null)))?((((map__21857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21857):map__21857);
var multiline_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21857__$1,cljs.core.cst$kw$multiline_QMARK_);
if(typeof riffle.app.t_riffle$app21859 !== 'undefined'){
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
riffle.app.t_riffle$app21859 = (function (G__21854,autoresizing_text_input,owner,input_checker21834,props,G__21838,multiline_QMARK_,map__21857,output_checker21835,G__21836,output_schema21832,map__21855,G__21837,validate__16887__auto__,input_schema21833,ufv__,meta21860){
this.G__21854 = G__21854;
this.autoresizing_text_input = autoresizing_text_input;
this.owner = owner;
this.input_checker21834 = input_checker21834;
this.props = props;
this.G__21838 = G__21838;
this.multiline_QMARK_ = multiline_QMARK_;
this.map__21857 = map__21857;
this.output_checker21835 = output_checker21835;
this.G__21836 = G__21836;
this.output_schema21832 = output_schema21832;
this.map__21855 = map__21855;
this.G__21837 = G__21837;
this.validate__16887__auto__ = validate__16887__auto__;
this.input_schema21833 = input_schema21833;
this.ufv__ = ufv__;
this.meta21860 = meta21860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app21859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (_21861,meta21860__$1){
var self__ = this;
var _21861__$1 = this;
return (new riffle.app.t_riffle$app21859(self__.G__21854,self__.autoresizing_text_input,self__.owner,self__.input_checker21834,self__.props,self__.G__21838,self__.multiline_QMARK_,self__.map__21857,self__.output_checker21835,self__.G__21836,self__.output_schema21832,self__.map__21855,self__.G__21837,self__.validate__16887__auto__,self__.input_schema21833,self__.ufv__,meta21860__$1));
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (_21861){
var self__ = this;
var _21861__$1 = this;
return self__.meta21860;
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app21859.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autoresizing-text-input";
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.prototype.om$core$IInitState$ = true;

riffle.app.t_riffle$app21859.prototype.om$core$IInitState$init_state$arity$1 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fake_DASH_input,(function (){var G__21862 = (cljs.core.truth_(self__.multiline_QMARK_)?"div":"span");
return document.createElement(G__21862);
})()], null);
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.prototype.om$core$IRenderState$ = true;

riffle.app.t_riffle$app21859.prototype.om$core$IRenderState$render_state$arity$2 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (_,p__21863){
var self__ = this;
var map__21864 = p__21863;
var map__21864__$1 = ((((!((map__21864 == null)))?((((map__21864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21864):map__21864);
var fake_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.cst$kw$fake_DASH_input);
var ___$1 = this;
om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$fake_DASH_input).textContent = ((cljs.core.seq(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(self__.props)))?cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(self__.props):cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(self__.props));

if(cljs.core.truth_(self__.multiline_QMARK_)){
return om_tools.dom.element(om.dom.textarea,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,[cljs.core.str(fake_input.offsetHeight),cljs.core.str("px")].join('')], null)),cljs.core.PersistentVector.EMPTY);
} else {
return om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(fake_input.offsetWidth),cljs.core.str("px")].join('')], null),cljs.core.array_seq([cljs.core.cst$kw$type,"text"], 0)),cljs.core.PersistentVector.EMPTY);
}
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.prototype.om$core$IDidMount$ = true;

riffle.app.t_riffle$app21859.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (_){
var self__ = this;
var ___$1 = this;
var fake_input = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$fake_DASH_input);
document.body.appendChild(fake_input);

riffle.app.copy_computed_styles_BANG_(om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner),fake_input,(function (){var G__21866 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","font","margin","padding","white-space"], null);
if(cljs.core.truth_(self__.multiline_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21866,"width");
} else {
return G__21866;
}
})());

fake_input.style.position = "fixed";

fake_input.style.top = "0";

fake_input.style.visibility = "hidden";

return om.core.refresh_BANG_(self__.owner);
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.prototype.om$core$IWillUnmount$ = true;

riffle.app.t_riffle$app21859.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$fake_DASH_input).remove();
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.getBasis = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$G__21854,cljs.core.with_meta(cljs.core.cst$sym$autoresizing_DASH_text_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$multiline_QMARK_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21832,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21833], null)),cljs.core.cst$kw$doc,"Inputs: [props owner {:keys [multiline?]}]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$multiline_QMARK_], null)], null)], null)))], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_checker21834,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__21838,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$multiline_QMARK_,cljs.core.cst$sym$map__21857,cljs.core.cst$sym$output_DASH_checker21835,cljs.core.with_meta(cljs.core.cst$sym$G__21836,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema21832,cljs.core.cst$sym$map__21855,cljs.core.with_meta(cljs.core.cst$sym$G__21837,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$input_DASH_schema21833,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta21860], null);
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.t_riffle$app21859.cljs$lang$type = true;

riffle.app.t_riffle$app21859.cljs$lang$ctorStr = "riffle.app/t_riffle$app21859";

riffle.app.t_riffle$app21859.cljs$lang$ctorPrWriter = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app21859");
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

riffle.app.__GT_t_riffle$app21859 = ((function (props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874){
return (function riffle$app$autoresizing_text_input_$___GT_t_riffle$app21859(G__21854__$2,autoresizing_text_input__$1,owner__$3,input_checker21834__$1,props__$3,G__21838__$1,multiline_QMARK___$2,map__21857__$2,output_checker21835__$1,G__21836__$1,output_schema21832__$1,map__21855__$2,G__21837__$1,validate__16887__auto____$1,input_schema21833__$1,ufv____$1,meta21860){
return (new riffle.app.t_riffle$app21859(G__21854__$2,autoresizing_text_input__$1,owner__$3,input_checker21834__$1,props__$3,G__21838__$1,multiline_QMARK___$2,map__21857__$2,output_checker21835__$1,G__21836__$1,output_schema21832__$1,map__21855__$2,G__21837__$1,validate__16887__auto____$1,input_schema21833__$1,ufv____$1,meta21860));
});})(props__$2,owner__$2,map__21857,map__21857__$1,multiline_QMARK___$1,props,owner,G__21854,map__21855,map__21855__$1,multiline_QMARK_,validate__16887__auto__,ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

}

return (new riffle.app.t_riffle$app21859(G__21854__$1,riffle$app$autoresizing_text_input,owner__$2,input_checker21834_21873,props__$2,G__21838,multiline_QMARK___$1,map__21857__$1,output_checker21835_21874,G__21836,output_schema21832_21871,map__21855__$1,G__21837,validate__16887__auto__,input_schema21833_21872,ufv___21870,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___21878 = (output_checker21835_21874.cljs$core$IFn$_invoke$arity$1 ? output_checker21835_21874.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker21835_21874.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___21878)){
var error__16889__auto___21879 = temp__4657__auto___21878;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$autoresizing_DASH_text_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___21879], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21832_21871,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___21879], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___21870,output_schema21832_21871,input_schema21833_21872,input_checker21834_21873,output_checker21835_21874))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.autoresizing_text_input),schema.core.make_fn_schema(output_schema21832_21871,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21833_21872], null)));

riffle.app.__GT_autoresizing_text_input = (function riffle$app$__GT_autoresizing_text_input(var_args){
var args21867 = [];
var len__7479__auto___21880 = arguments.length;
var i__7480__auto___21881 = (0);
while(true){
if((i__7480__auto___21881 < len__7479__auto___21880)){
args21867.push((arguments[i__7480__auto___21881]));

var G__21882 = (i__7480__auto___21881 + (1));
i__7480__auto___21881 = G__21882;
continue;
} else {
}
break;
}

var G__21869 = args21867.length;
switch (G__21869) {
case 1:
return riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21867.length)].join('')));

}
});

riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,cursor__21753__auto__);
});

riffle.app.__GT_autoresizing_text_input.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m21831){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.autoresizing_text_input,cursor__21753__auto__,m21831);
});

riffle.app.__GT_autoresizing_text_input.cljs$lang$maxFixedArity = 2;

riffle.app.domify = (function riffle$app$domify(var_args){
var args21884 = [];
var len__7479__auto___21887 = arguments.length;
var i__7480__auto___21888 = (0);
while(true){
if((i__7480__auto___21888 < len__7479__auto___21887)){
args21884.push((arguments[i__7480__auto___21888]));

var G__21889 = (i__7480__auto___21888 + (1));
i__7480__auto___21888 = G__21889;
continue;
} else {
}
break;
}

var G__21886 = args21884.length;
switch (G__21886) {
case 2:
return riffle.app.domify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return riffle.app.domify.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21884.length)].join('')));

}
});

riffle.app.domify.cljs$core$IFn$_invoke$arity$2 = (function (component,cursor){
return riffle.app.domify.cljs$core$IFn$_invoke$arity$3(component,cursor,cljs.core.PersistentArrayMap.EMPTY);
});

riffle.app.domify.cljs$core$IFn$_invoke$arity$3 = (function (component,cursor,m){
return (function() { 
var G__21891__delegate = function (attrs,children){
return om.core.build.cljs$core$IFn$_invoke$arity$3(component,cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attrs,attrs,cljs.core.cst$kw$children,children], null)));
};
var G__21891 = function (attrs,var_args){
var children = null;
if (arguments.length > 1) {
var G__21892__i = 0, G__21892__a = new Array(arguments.length -  1);
while (G__21892__i < G__21892__a.length) {G__21892__a[G__21892__i] = arguments[G__21892__i + 1]; ++G__21892__i;}
  children = new cljs.core.IndexedSeq(G__21892__a,0);
} 
return G__21891__delegate.call(this,attrs,children);};
G__21891.cljs$lang$maxFixedArity = 1;
G__21891.cljs$lang$applyTo = (function (arglist__21893){
var attrs = cljs.core.first(arglist__21893);
var children = cljs.core.rest(arglist__21893);
return G__21891__delegate(attrs,children);
});
G__21891.cljs$core$IFn$_invoke$arity$variadic = G__21891__delegate;
return G__21891;
})()
;
});

riffle.app.domify.cljs$lang$maxFixedArity = 3;


var ufv___21952 = schema.utils.use_fn_validation;
var output_schema21895_21953 = schema.core.Any;
var input_schema21896_21954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21897_21955 = schema.core.checker(input_schema21896_21954);
var output_checker21898_21956 = schema.core.checker(output_schema21895_21953);
/**
 * Inputs: [_ owner]
 */
riffle.app.label_table = ((function (ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function riffle$app$label_table(G__21899,G__21900){
var validate__16887__auto__ = ufv___21952.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___21957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21899,G__21900], null);
var temp__4657__auto___21958 = (input_checker21897_21955.cljs$core$IFn$_invoke$arity$1 ? input_checker21897_21955.cljs$core$IFn$_invoke$arity$1(args__16888__auto___21957) : input_checker21897_21955.call(null,args__16888__auto___21957));
if(cljs.core.truth_(temp__4657__auto___21958)){
var error__16889__auto___21959 = temp__4657__auto___21958;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$label_DASH_table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___21959], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21896_21954,cljs.core.cst$kw$value,args__16888__auto___21957,cljs.core.cst$kw$error,error__16889__auto___21959], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var _ = G__21899;
var owner = G__21900;
while(true){
if(typeof riffle.app.t_riffle$app21925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app21925 = (function (output_checker21898,G__21899,owner,G__21900,input_schema21896,_,output_schema21895,label_table,input_checker21897,validate__16887__auto__,ufv__,meta21926){
this.output_checker21898 = output_checker21898;
this.G__21899 = G__21899;
this.owner = owner;
this.G__21900 = G__21900;
this.input_schema21896 = input_schema21896;
this._ = _;
this.output_schema21895 = output_schema21895;
this.label_table = label_table;
this.input_checker21897 = input_checker21897;
this.validate__16887__auto__ = validate__16887__auto__;
this.ufv__ = ufv__;
this.meta21926 = meta21926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app21925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function (_21927,meta21926__$1){
var self__ = this;
var _21927__$1 = this;
return (new riffle.app.t_riffle$app21925(self__.output_checker21898,self__.G__21899,self__.owner,self__.G__21900,self__.input_schema21896,self__._,self__.output_schema21895,self__.label_table,self__.input_checker21897,self__.validate__16887__auto__,self__.ufv__,meta21926__$1));
});})(validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

riffle.app.t_riffle$app21925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function (_21927){
var self__ = this;
var _21927__$1 = this;
return self__.meta21926;
});})(validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

riffle.app.t_riffle$app21925.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app21925.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "label-table";
});})(validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

riffle.app.t_riffle$app21925.prototype.om$core$IRenderState$ = true;

riffle.app.t_riffle$app21925.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function (___$1,p__21928){
var self__ = this;
var map__21929 = p__21928;
var map__21929__$1 = ((((!((map__21929 == null)))?((((map__21929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21929):map__21929);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929__$1,cljs.core.cst$kw$children);
var ___$2 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.table,({"className": "label-table"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$2,map__21929,map__21929__$1,children,validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function riffle$app$label_table_$_iter__21931(s__21932){
return (new cljs.core.LazySeq(null,((function (___$2,map__21929,map__21929__$1,children,validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function (){
var s__21932__$1 = s__21932;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21932__$1);
if(temp__4657__auto__){
var s__21932__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21932__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21932__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21934 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21933 = (0);
while(true){
if((i__21933 < size__7183__auto__)){
var vec__21943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21933);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21943,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21943,(1),null);
cljs.core.chunk_append(b__21934,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.td,label,cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.td,child,cljs.core.PersistentVector.EMPTY)],null)))));

var G__21960 = (i__21933 + (1));
i__21933 = G__21960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21934),riffle$app$label_table_$_iter__21931(cljs.core.chunk_rest(s__21932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21934),null);
}
} else {
var vec__21946 = cljs.core.first(s__21932__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(1),null);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.td,label,cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.td,child,cljs.core.PersistentVector.EMPTY)],null)))),riffle$app$label_table_$_iter__21931(cljs.core.rest(s__21932__$2)));
}
} else {
return null;
}
break;
}
});})(___$2,map__21929,map__21929__$1,children,validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
,null,null));
});})(___$2,map__21929,map__21929__$1,children,validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;
return iter__7184__auto__(children);
})()],null))))],null))));
});})(validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

riffle.app.t_riffle$app21925.getBasis = ((function (validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_checker21898,cljs.core.with_meta(cljs.core.cst$sym$G__21899,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__21900,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema21896,cljs.core.cst$sym$_,cljs.core.cst$sym$output_DASH_schema21895,cljs.core.with_meta(cljs.core.cst$sym$label_DASH_table,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21895,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21896], null)),cljs.core.cst$kw$doc,"Inputs: [_ owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$input_DASH_checker21897,cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta21926], null);
});})(validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

riffle.app.t_riffle$app21925.cljs$lang$type = true;

riffle.app.t_riffle$app21925.cljs$lang$ctorStr = "riffle.app/t_riffle$app21925";

riffle.app.t_riffle$app21925.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app21925");
});})(validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

riffle.app.__GT_t_riffle$app21925 = ((function (validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956){
return (function riffle$app$label_table_$___GT_t_riffle$app21925(output_checker21898__$1,G__21899__$1,owner__$1,G__21900__$1,input_schema21896__$1,___$1,output_schema21895__$1,label_table__$1,input_checker21897__$1,validate__16887__auto____$1,ufv____$1,meta21926){
return (new riffle.app.t_riffle$app21925(output_checker21898__$1,G__21899__$1,owner__$1,G__21900__$1,input_schema21896__$1,___$1,output_schema21895__$1,label_table__$1,input_checker21897__$1,validate__16887__auto____$1,ufv____$1,meta21926));
});})(validate__16887__auto__,ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

}

return (new riffle.app.t_riffle$app21925(output_checker21898_21956,G__21899,owner,G__21900,input_schema21896_21954,_,output_schema21895_21953,riffle$app$label_table,input_checker21897_21955,validate__16887__auto__,ufv___21952,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___21961 = (output_checker21898_21956.cljs$core$IFn$_invoke$arity$1 ? output_checker21898_21956.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker21898_21956.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___21961)){
var error__16889__auto___21962 = temp__4657__auto___21961;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$label_DASH_table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___21962], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21895_21953,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___21962], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___21952,output_schema21895_21953,input_schema21896_21954,input_checker21897_21955,output_checker21898_21956))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.label_table),schema.core.make_fn_schema(output_schema21895_21953,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21896_21954], null)));

riffle.app.__GT_label_table = (function riffle$app$__GT_label_table(var_args){
var args21949 = [];
var len__7479__auto___21963 = arguments.length;
var i__7480__auto___21964 = (0);
while(true){
if((i__7480__auto___21964 < len__7479__auto___21963)){
args21949.push((arguments[i__7480__auto___21964]));

var G__21965 = (i__7480__auto___21964 + (1));
i__7480__auto___21964 = G__21965;
continue;
} else {
}
break;
}

var G__21951 = args21949.length;
switch (G__21951) {
case 1:
return riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21949.length)].join('')));

}
});

riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,cursor__21753__auto__);
});

riffle.app.__GT_label_table.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m21894){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.label_table,cursor__21753__auto__,m21894);
});

riffle.app.__GT_label_table.cljs$lang$maxFixedArity = 2;

riffle.app.lookup_thing = (function riffle$app$lookup_thing(props){
return riffle.editor.lookup(cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(props),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props));
});

var ufv___21992 = schema.utils.use_fn_validation;
var output_schema21969_21993 = schema.core.Any;
var input_schema21970_21994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21971_21995 = schema.core.checker(input_schema21970_21994);
var output_checker21972_21996 = schema.core.checker(output_schema21969_21993);
/**
 * Inputs: [props owner]
 */
riffle.app.delete_button = ((function (ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function riffle$app$delete_button(G__21973,G__21974){
var validate__16887__auto__ = ufv___21992.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___21997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21973,G__21974], null);
var temp__4657__auto___21998 = (input_checker21971_21995.cljs$core$IFn$_invoke$arity$1 ? input_checker21971_21995.cljs$core$IFn$_invoke$arity$1(args__16888__auto___21997) : input_checker21971_21995.call(null,args__16888__auto___21997));
if(cljs.core.truth_(temp__4657__auto___21998)){
var error__16889__auto___21999 = temp__4657__auto___21998;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___21999], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21970_21994,cljs.core.cst$kw$value,args__16888__auto___21997,cljs.core.cst$kw$error,error__16889__auto___21999], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__21973;
var owner = G__21974;
while(true){
if(typeof riffle.app.t_riffle$app21982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app21982 = (function (owner,G__21973,props,input_schema21970,output_schema21969,G__21974,output_checker21972,input_checker21971,validate__16887__auto__,delete_button,ufv__,meta21983){
this.owner = owner;
this.G__21973 = G__21973;
this.props = props;
this.input_schema21970 = input_schema21970;
this.output_schema21969 = output_schema21969;
this.G__21974 = G__21974;
this.output_checker21972 = output_checker21972;
this.input_checker21971 = input_checker21971;
this.validate__16887__auto__ = validate__16887__auto__;
this.delete_button = delete_button;
this.ufv__ = ufv__;
this.meta21983 = meta21983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app21982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (_21984,meta21983__$1){
var self__ = this;
var _21984__$1 = this;
return (new riffle.app.t_riffle$app21982(self__.owner,self__.G__21973,self__.props,self__.input_schema21970,self__.output_schema21969,self__.G__21974,self__.output_checker21972,self__.input_checker21971,self__.validate__16887__auto__,self__.delete_button,self__.ufv__,meta21983__$1));
});})(validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

riffle.app.t_riffle$app21982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (_21984){
var self__ = this;
var _21984__$1 = this;
return self__.meta21983;
});})(validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

riffle.app.t_riffle$app21982.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app21982.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (_){
var self__ = this;
var ___$1 = this;
return "delete-button";
});})(validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

riffle.app.t_riffle$app21982.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app21982.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__21985 = self__.props;
var map__21985__$1 = ((((!((map__21985 == null)))?((((map__21985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21985):map__21985);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21985__$1,cljs.core.cst$kw$id);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21985__$1,cljs.core.cst$kw$program);
var G__21987 = ({"className": "delete-button", "onClick": om_tools.dom.format_opts(((function (map__21985,map__21985__$1,id,program,___$1,validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.PersistentVector.EMPTY,((function (map__21985,map__21985__$1,id,program,___$1,validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (p1__21967_SHARP_){
return riffle.editor.delete_thing(p1__21967_SHARP_,id);
});})(map__21985,map__21985__$1,id,program,___$1,validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
);
});})(map__21985,map__21985__$1,id,program,___$1,validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
)});
var G__21988 = "\u00D7";
return React.DOM.button(G__21987,G__21988);
});})(validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

riffle.app.t_riffle$app21982.getBasis = ((function (validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__21973,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_schema21970,cljs.core.cst$sym$output_DASH_schema21969,cljs.core.with_meta(cljs.core.cst$sym$G__21974,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker21972,cljs.core.cst$sym$input_DASH_checker21971,cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21969,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21970], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta21983], null);
});})(validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

riffle.app.t_riffle$app21982.cljs$lang$type = true;

riffle.app.t_riffle$app21982.cljs$lang$ctorStr = "riffle.app/t_riffle$app21982";

riffle.app.t_riffle$app21982.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app21982");
});})(validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

riffle.app.__GT_t_riffle$app21982 = ((function (validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996){
return (function riffle$app$delete_button_$___GT_t_riffle$app21982(owner__$1,G__21973__$1,props__$1,input_schema21970__$1,output_schema21969__$1,G__21974__$1,output_checker21972__$1,input_checker21971__$1,validate__16887__auto____$1,delete_button__$1,ufv____$1,meta21983){
return (new riffle.app.t_riffle$app21982(owner__$1,G__21973__$1,props__$1,input_schema21970__$1,output_schema21969__$1,G__21974__$1,output_checker21972__$1,input_checker21971__$1,validate__16887__auto____$1,delete_button__$1,ufv____$1,meta21983));
});})(validate__16887__auto__,ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

}

return (new riffle.app.t_riffle$app21982(owner,G__21973,props,input_schema21970_21994,output_schema21969_21993,G__21974,output_checker21972_21996,input_checker21971_21995,validate__16887__auto__,riffle$app$delete_button,ufv___21992,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22000 = (output_checker21972_21996.cljs$core$IFn$_invoke$arity$1 ? output_checker21972_21996.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker21972_21996.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22000)){
var error__16889__auto___22001 = temp__4657__auto___22000;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22001], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21969_21993,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22001], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___21992,output_schema21969_21993,input_schema21970_21994,input_checker21971_21995,output_checker21972_21996))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.delete_button),schema.core.make_fn_schema(output_schema21969_21993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21970_21994], null)));

riffle.app.__GT_delete_button = (function riffle$app$__GT_delete_button(var_args){
var args21989 = [];
var len__7479__auto___22002 = arguments.length;
var i__7480__auto___22003 = (0);
while(true){
if((i__7480__auto___22003 < len__7479__auto___22002)){
args21989.push((arguments[i__7480__auto___22003]));

var G__22004 = (i__7480__auto___22003 + (1));
i__7480__auto___22003 = G__22004;
continue;
} else {
}
break;
}

var G__21991 = args21989.length;
switch (G__21991) {
case 1:
return riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21989.length)].join('')));

}
});

riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,cursor__21753__auto__);
});

riffle.app.__GT_delete_button.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m21968){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.delete_button,cursor__21753__auto__,m21968);
});

riffle.app.__GT_delete_button.cljs$lang$maxFixedArity = 2;

riffle.app.display_name = (function riffle$app$display_name(kind){
var G__22007 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22007) {
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

var ufv___22030 = schema.utils.use_fn_validation;
var output_schema22011_22031 = schema.core.Any;
var input_schema22012_22032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22013_22033 = schema.core.checker(input_schema22012_22032);
var output_checker22014_22034 = schema.core.checker(output_schema22011_22031);
/**
 * Inputs: [props owner]
 */
riffle.app.create_button = ((function (ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function riffle$app$create_button(G__22015,G__22016){
var validate__16887__auto__ = ufv___22030.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22015,G__22016], null);
var temp__4657__auto___22036 = (input_checker22013_22033.cljs$core$IFn$_invoke$arity$1 ? input_checker22013_22033.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22035) : input_checker22013_22033.call(null,args__16888__auto___22035));
if(cljs.core.truth_(temp__4657__auto___22036)){
var error__16889__auto___22037 = temp__4657__auto___22036;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$create_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22037], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22012_22032,cljs.core.cst$kw$value,args__16888__auto___22035,cljs.core.cst$kw$error,error__16889__auto___22037], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22015;
var owner = G__22016;
while(true){
if(typeof riffle.app.t_riffle$app22022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22022 = (function (owner,output_schema22011,props,output_checker22014,G__22016,input_schema22012,create_button,G__22015,input_checker22013,validate__16887__auto__,ufv__,meta22023){
this.owner = owner;
this.output_schema22011 = output_schema22011;
this.props = props;
this.output_checker22014 = output_checker22014;
this.G__22016 = G__22016;
this.input_schema22012 = input_schema22012;
this.create_button = create_button;
this.G__22015 = G__22015;
this.input_checker22013 = input_checker22013;
this.validate__16887__auto__ = validate__16887__auto__;
this.ufv__ = ufv__;
this.meta22023 = meta22023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (_22024,meta22023__$1){
var self__ = this;
var _22024__$1 = this;
return (new riffle.app.t_riffle$app22022(self__.owner,self__.output_schema22011,self__.props,self__.output_checker22014,self__.G__22016,self__.input_schema22012,self__.create_button,self__.G__22015,self__.input_checker22013,self__.validate__16887__auto__,self__.ufv__,meta22023__$1));
});})(validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

riffle.app.t_riffle$app22022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (_22024){
var self__ = this;
var _22024__$1 = this;
return self__.meta22023;
});})(validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

riffle.app.t_riffle$app22022.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22022.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (_){
var self__ = this;
var ___$1 = this;
return "create-button";
});})(validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

riffle.app.t_riffle$app22022.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22022.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22025 = self__.props;
var map__22025__$1 = ((((!((map__22025 == null)))?((((map__22025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22025):map__22025);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22025__$1,cljs.core.cst$kw$id);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22025__$1,cljs.core.cst$kw$kind);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22025__$1,cljs.core.cst$kw$program);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.button,({"className": "create-button", "onClick": om_tools.dom.format_opts(((function (map__22025,map__22025__$1,parent_id,kind,program,___$1,validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.PersistentVector.EMPTY,((function (map__22025,map__22025__$1,parent_id,kind,program,___$1,validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (p1__22009_SHARP_){
return riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$3(p1__22009_SHARP_,kind,parent_id);
});})(map__22025,map__22025__$1,parent_id,kind,program,___$1,validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
);
});})(map__22025,map__22025__$1,parent_id,kind,program,___$1,validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$2(self__.props,[cljs.core.str("New "),cljs.core.str(riffle.app.display_name(kind))].join(''))],null))));
});})(validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

riffle.app.t_riffle$app22022.getBasis = ((function (validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_schema22011,cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_checker22014,cljs.core.with_meta(cljs.core.cst$sym$G__22016,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22012,cljs.core.with_meta(cljs.core.cst$sym$create_DASH_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22011,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22012], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22015,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22013,cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22023], null);
});})(validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

riffle.app.t_riffle$app22022.cljs$lang$type = true;

riffle.app.t_riffle$app22022.cljs$lang$ctorStr = "riffle.app/t_riffle$app22022";

riffle.app.t_riffle$app22022.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22022");
});})(validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

riffle.app.__GT_t_riffle$app22022 = ((function (validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034){
return (function riffle$app$create_button_$___GT_t_riffle$app22022(owner__$1,output_schema22011__$1,props__$1,output_checker22014__$1,G__22016__$1,input_schema22012__$1,create_button__$1,G__22015__$1,input_checker22013__$1,validate__16887__auto____$1,ufv____$1,meta22023){
return (new riffle.app.t_riffle$app22022(owner__$1,output_schema22011__$1,props__$1,output_checker22014__$1,G__22016__$1,input_schema22012__$1,create_button__$1,G__22015__$1,input_checker22013__$1,validate__16887__auto____$1,ufv____$1,meta22023));
});})(validate__16887__auto__,ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

}

return (new riffle.app.t_riffle$app22022(owner,output_schema22011_22031,props,output_checker22014_22034,G__22016,input_schema22012_22032,riffle$app$create_button,G__22015,input_checker22013_22033,validate__16887__auto__,ufv___22030,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22038 = (output_checker22014_22034.cljs$core$IFn$_invoke$arity$1 ? output_checker22014_22034.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22014_22034.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22038)){
var error__16889__auto___22039 = temp__4657__auto___22038;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$create_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22039], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22011_22031,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22039], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22030,output_schema22011_22031,input_schema22012_22032,input_checker22013_22033,output_checker22014_22034))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.create_button),schema.core.make_fn_schema(output_schema22011_22031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22012_22032], null)));

riffle.app.__GT_create_button = (function riffle$app$__GT_create_button(var_args){
var args22027 = [];
var len__7479__auto___22040 = arguments.length;
var i__7480__auto___22041 = (0);
while(true){
if((i__7480__auto___22041 < len__7479__auto___22040)){
args22027.push((arguments[i__7480__auto___22041]));

var G__22042 = (i__7480__auto___22041 + (1));
i__7480__auto___22041 = G__22042;
continue;
} else {
}
break;
}

var G__22029 = args22027.length;
switch (G__22029) {
case 1:
return riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22027.length)].join('')));

}
});

riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cursor__21753__auto__);
});

riffle.app.__GT_create_button.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22010){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.create_button,cursor__21753__auto__,m22010);
});

riffle.app.__GT_create_button.cljs$lang$maxFixedArity = 2;


var ufv___22083 = schema.utils.use_fn_validation;
var output_schema22046_22084 = schema.core.Any;
var input_schema22047_22085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22048_22086 = schema.core.checker(input_schema22047_22085);
var output_checker22049_22087 = schema.core.checker(output_schema22046_22084);
/**
 * Inputs: [props owner]
 */
riffle.app.stage_selector = ((function (ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function riffle$app$stage_selector(G__22050,G__22051){
var validate__16887__auto__ = ufv___22083.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22050,G__22051], null);
var temp__4657__auto___22089 = (input_checker22048_22086.cljs$core$IFn$_invoke$arity$1 ? input_checker22048_22086.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22088) : input_checker22048_22086.call(null,args__16888__auto___22088));
if(cljs.core.truth_(temp__4657__auto___22089)){
var error__16889__auto___22090 = temp__4657__auto___22089;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stage_DASH_selector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22090], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22047_22085,cljs.core.cst$kw$value,args__16888__auto___22088,cljs.core.cst$kw$error,error__16889__auto___22090], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22050;
var owner = G__22051;
while(true){
if(typeof riffle.app.t_riffle$app22066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22066 = (function (output_checker22049,owner,input_schema22047,G__22051,props,G__22050,input_checker22048,stage_selector,validate__16887__auto__,output_schema22046,ufv__,meta22067){
this.output_checker22049 = output_checker22049;
this.owner = owner;
this.input_schema22047 = input_schema22047;
this.G__22051 = G__22051;
this.props = props;
this.G__22050 = G__22050;
this.input_checker22048 = input_checker22048;
this.stage_selector = stage_selector;
this.validate__16887__auto__ = validate__16887__auto__;
this.output_schema22046 = output_schema22046;
this.ufv__ = ufv__;
this.meta22067 = meta22067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (_22068,meta22067__$1){
var self__ = this;
var _22068__$1 = this;
return (new riffle.app.t_riffle$app22066(self__.output_checker22049,self__.owner,self__.input_schema22047,self__.G__22051,self__.props,self__.G__22050,self__.input_checker22048,self__.stage_selector,self__.validate__16887__auto__,self__.output_schema22046,self__.ufv__,meta22067__$1));
});})(validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

riffle.app.t_riffle$app22066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (_22068){
var self__ = this;
var _22068__$1 = this;
return self__.meta22067;
});})(validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

riffle.app.t_riffle$app22066.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22066.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stage-selector";
});})(validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

riffle.app.t_riffle$app22066.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22066.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22069 = self__.props;
var map__22069__$1 = ((((!((map__22069 == null)))?((((map__22069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22069):map__22069);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22069__$1,cljs.core.cst$kw$program);
var map__22070 = riffle.app.lookup_thing(self__.props);
var map__22070__$1 = ((((!((map__22070 == null)))?((((map__22070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22070):map__22070);
var thing = map__22070__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22070__$1,cljs.core.cst$kw$is);
var stage_id_key = (function (){var G__22073 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22073) {
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (map__22069,map__22069__$1,program,map__22070,map__22070__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (p1__22044_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(thing,stage_id_key,riffle.app.int_value(p1__22044_SHARP_));
});})(map__22069,map__22069__$1,program,map__22070,map__22070__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
), "value": om_tools.dom.format_opts(current_stage_id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__6404__auto__ = parent_stage_id;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (current_stage_id == null);
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": null}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(parent_stage_id)?"(end)":"(none)")],null)))):null),(function (){var iter__7184__auto__ = ((function (map__22069,map__22069__$1,program,map__22070,map__22070__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function riffle$app$stage_selector_$_iter__22074(s__22075){
return (new cljs.core.LazySeq(null,((function (map__22069,map__22069__$1,program,map__22070,map__22070__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (){
var s__22075__$1 = s__22075;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22075__$1);
if(temp__4657__auto__){
var s__22075__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22075__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22075__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22077 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22076 = (0);
while(true){
if((i__22076 < size__7183__auto__)){
var stage_id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22076);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stage_id,parent_stage_id)){
cljs.core.chunk_append(b__22077,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(stage_id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,stage_id),"(unnamed stage)")],null)))));

var G__22092 = (i__22076 + (1));
i__22076 = G__22092;
continue;
} else {
var G__22093 = (i__22076 + (1));
i__22076 = G__22093;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22077),riffle$app$stage_selector_$_iter__22074(cljs.core.chunk_rest(s__22075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22077),null);
}
} else {
var stage_id = cljs.core.first(s__22075__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stage_id,parent_stage_id)){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(stage_id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,stage_id),"(unnamed stage)")],null)))),riffle$app$stage_selector_$_iter__22074(cljs.core.rest(s__22075__$2)));
} else {
var G__22094 = cljs.core.rest(s__22075__$2);
s__22075__$1 = G__22094;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__22069,map__22069__$1,program,map__22070,map__22070__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
,null,null));
});})(map__22069,map__22069__$1,program,map__22070,map__22070__$1,thing,kind,stage_id_key,current_stage_id,parent_stage_id,___$1,validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;
return iter__7184__auto__(cljs.core.cst$kw$stage_DASH_ids.cljs$core$IFn$_invoke$arity$1(program));
})()],null))));
});})(validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

riffle.app.t_riffle$app22066.getBasis = ((function (validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_checker22049,cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema22047,cljs.core.with_meta(cljs.core.cst$sym$G__22051,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22050,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22048,cljs.core.with_meta(cljs.core.cst$sym$stage_DASH_selector,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22047], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$output_DASH_schema22046,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22067], null);
});})(validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

riffle.app.t_riffle$app22066.cljs$lang$type = true;

riffle.app.t_riffle$app22066.cljs$lang$ctorStr = "riffle.app/t_riffle$app22066";

riffle.app.t_riffle$app22066.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22066");
});})(validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

riffle.app.__GT_t_riffle$app22066 = ((function (validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087){
return (function riffle$app$stage_selector_$___GT_t_riffle$app22066(output_checker22049__$1,owner__$1,input_schema22047__$1,G__22051__$1,props__$1,G__22050__$1,input_checker22048__$1,stage_selector__$1,validate__16887__auto____$1,output_schema22046__$1,ufv____$1,meta22067){
return (new riffle.app.t_riffle$app22066(output_checker22049__$1,owner__$1,input_schema22047__$1,G__22051__$1,props__$1,G__22050__$1,input_checker22048__$1,stage_selector__$1,validate__16887__auto____$1,output_schema22046__$1,ufv____$1,meta22067));
});})(validate__16887__auto__,ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

}

return (new riffle.app.t_riffle$app22066(output_checker22049_22087,owner,input_schema22047_22085,G__22051,props,G__22050,input_checker22048_22086,riffle$app$stage_selector,validate__16887__auto__,output_schema22046_22084,ufv___22083,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22095 = (output_checker22049_22087.cljs$core$IFn$_invoke$arity$1 ? output_checker22049_22087.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22049_22087.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22095)){
var error__16889__auto___22096 = temp__4657__auto___22095;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stage_DASH_selector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22096], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22046_22084,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22096], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22083,output_schema22046_22084,input_schema22047_22085,input_checker22048_22086,output_checker22049_22087))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.stage_selector),schema.core.make_fn_schema(output_schema22046_22084,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22047_22085], null)));

riffle.app.__GT_stage_selector = (function riffle$app$__GT_stage_selector(var_args){
var args22080 = [];
var len__7479__auto___22097 = arguments.length;
var i__7480__auto___22098 = (0);
while(true){
if((i__7480__auto___22098 < len__7479__auto___22097)){
args22080.push((arguments[i__7480__auto___22098]));

var G__22099 = (i__7480__auto___22098 + (1));
i__7480__auto___22098 = G__22099;
continue;
} else {
}
break;
}

var G__22082 = args22080.length;
switch (G__22082) {
case 1:
return riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22080.length)].join('')));

}
});

riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.stage_selector,cursor__21753__auto__);
});

riffle.app.__GT_stage_selector.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22045){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.stage_selector,cursor__21753__auto__,m22045);
});

riffle.app.__GT_stage_selector.cljs$lang$maxFixedArity = 2;

riffle.app.header_text_key = (function riffle$app$header_text_key(kind){
var G__22102 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22102) {
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
var G__22105 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__22105) {
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
riffle.app.decl_block_body = (function (){var method_table__7329__auto__ = (function (){var G__22107 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22107) : cljs.core.atom.call(null,G__22107));
})();
var prefer_table__7330__auto__ = (function (){var G__22108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22108) : cljs.core.atom.call(null,G__22108));
})();
var method_cache__7331__auto__ = (function (){var G__22109 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22109) : cljs.core.atom.call(null,G__22109));
})();
var cached_hierarchy__7332__auto__ = (function (){var G__22110 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22110) : cljs.core.atom.call(null,G__22110));
})();
var hierarchy__7333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("riffle.app","decl-block-body"),((function (method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__,hierarchy__7333__auto__){
return (function (props,owner){
return cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(riffle.app.lookup_thing(props));
});})(method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__,hierarchy__7333__auto__))
,cljs.core.cst$kw$default,hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}

var ufv___22135 = schema.utils.use_fn_validation;
var output_schema22114_22136 = schema.core.Any;
var input_schema22115_22137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22116_22138 = schema.core.checker(input_schema22115_22137);
var output_checker22117_22139 = schema.core.checker(output_schema22114_22136);
/**
 * Inputs: [props owner]
 */
riffle.app.decl_block = ((function (ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function riffle$app$decl_block(G__22118,G__22119){
var validate__16887__auto__ = ufv___22135.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22118,G__22119], null);
var temp__4657__auto___22141 = (input_checker22116_22138.cljs$core$IFn$_invoke$arity$1 ? input_checker22116_22138.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22140) : input_checker22116_22138.call(null,args__16888__auto___22140));
if(cljs.core.truth_(temp__4657__auto___22141)){
var error__16889__auto___22142 = temp__4657__auto___22141;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$decl_DASH_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22142], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22115_22137,cljs.core.cst$kw$value,args__16888__auto___22140,cljs.core.cst$kw$error,error__16889__auto___22142], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22118;
var owner = G__22119;
while(true){
if(typeof riffle.app.t_riffle$app22126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22126 = (function (input_checker22116,owner,props,G__22119,input_schema22115,decl_block,output_checker22117,validate__16887__auto__,G__22118,output_schema22114,ufv__,meta22127){
this.input_checker22116 = input_checker22116;
this.owner = owner;
this.props = props;
this.G__22119 = G__22119;
this.input_schema22115 = input_schema22115;
this.decl_block = decl_block;
this.output_checker22117 = output_checker22117;
this.validate__16887__auto__ = validate__16887__auto__;
this.G__22118 = G__22118;
this.output_schema22114 = output_schema22114;
this.ufv__ = ufv__;
this.meta22127 = meta22127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (_22128,meta22127__$1){
var self__ = this;
var _22128__$1 = this;
return (new riffle.app.t_riffle$app22126(self__.input_checker22116,self__.owner,self__.props,self__.G__22119,self__.input_schema22115,self__.decl_block,self__.output_checker22117,self__.validate__16887__auto__,self__.G__22118,self__.output_schema22114,self__.ufv__,meta22127__$1));
});})(validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

riffle.app.t_riffle$app22126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (_22128){
var self__ = this;
var _22128__$1 = this;
return self__.meta22127;
});})(validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

riffle.app.t_riffle$app22126.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22126.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (_){
var self__ = this;
var ___$1 = this;
return "decl-block";
});})(validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

riffle.app.t_riffle$app22126.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22126.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22129 = riffle.app.lookup_thing(self__.props);
var map__22129__$1 = ((((!((map__22129 == null)))?((((map__22129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22129):map__22129);
var thing = map__22129__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,cljs.core.cst$kw$is);
var header_text_key = riffle.app.header_text_key(kind);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__22131 = [cljs.core.str("decl-block "),cljs.core.str(cljs.core.name(kind))].join('');
if(cljs.core.truth_(cljs.core.cst$kw$collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1(thing))){
return [cljs.core.str(G__22131),cljs.core.str(" collapsed")].join('');
} else {
return G__22131;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "header"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (map__22129,map__22129__$1,thing,kind,header_text_key,___$1,validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (p1__22111_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(thing,header_text_key,riffle.app.value(p1__22111_SHARP_));
});})(map__22129,map__22129__$1,thing,kind,header_text_key,___$1,validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
,cljs.core.cst$kw$placeholder,[cljs.core.str("("),cljs.core.str(riffle.app.header_placeholder_text(kind)),cljs.core.str(")")].join(''),cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(thing,header_text_key)], null)),(function (){var toggle_collapsed_BANG_ = ((function (map__22129,map__22129__$1,thing,kind,header_text_key,___$1,validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(thing,cljs.core.cst$kw$collapsed_QMARK_,cljs.core.not);
});})(map__22129,map__22129__$1,thing,kind,header_text_key,___$1,validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"className": "toggle-collapsed", "onClick": om_tools.dom.format_opts(toggle_collapsed_BANG_), "onKeyDown": om_tools.dom.format_opts(((function (toggle_collapsed_BANG_,map__22129,map__22129__$1,thing,kind,header_text_key,___$1,validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (p1__22112_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22112_SHARP_.key,"Enter")){
return toggle_collapsed_BANG_();
} else {
return null;
}
});})(toggle_collapsed_BANG_,map__22129,map__22129__$1,thing,kind,header_text_key,___$1,validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
), "tabIndex": "0"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1(thing))?"\u25BA":"\u25BC")],null))));
})(),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,self__.props)],null)))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block_body,self__.props)],null))));
});})(validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

riffle.app.t_riffle$app22126.getBasis = ((function (validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_checker22116,cljs.core.cst$sym$owner,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22119,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22115,cljs.core.with_meta(cljs.core.cst$sym$decl_DASH_block,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22115], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_checker22117,cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__22118,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema22114,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22127], null);
});})(validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

riffle.app.t_riffle$app22126.cljs$lang$type = true;

riffle.app.t_riffle$app22126.cljs$lang$ctorStr = "riffle.app/t_riffle$app22126";

riffle.app.t_riffle$app22126.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22126");
});})(validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

riffle.app.__GT_t_riffle$app22126 = ((function (validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139){
return (function riffle$app$decl_block_$___GT_t_riffle$app22126(input_checker22116__$1,owner__$1,props__$1,G__22119__$1,input_schema22115__$1,decl_block__$1,output_checker22117__$1,validate__16887__auto____$1,G__22118__$1,output_schema22114__$1,ufv____$1,meta22127){
return (new riffle.app.t_riffle$app22126(input_checker22116__$1,owner__$1,props__$1,G__22119__$1,input_schema22115__$1,decl_block__$1,output_checker22117__$1,validate__16887__auto____$1,G__22118__$1,output_schema22114__$1,ufv____$1,meta22127));
});})(validate__16887__auto__,ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

}

return (new riffle.app.t_riffle$app22126(input_checker22116_22138,owner,props,G__22119,input_schema22115_22137,riffle$app$decl_block,output_checker22117_22139,validate__16887__auto__,G__22118,output_schema22114_22136,ufv___22135,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22143 = (output_checker22117_22139.cljs$core$IFn$_invoke$arity$1 ? output_checker22117_22139.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22117_22139.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22143)){
var error__16889__auto___22144 = temp__4657__auto___22143;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$decl_DASH_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22144], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22114_22136,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22144], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22135,output_schema22114_22136,input_schema22115_22137,input_checker22116_22138,output_checker22117_22139))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.decl_block),schema.core.make_fn_schema(output_schema22114_22136,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22115_22137], null)));

riffle.app.__GT_decl_block = (function riffle$app$__GT_decl_block(var_args){
var args22132 = [];
var len__7479__auto___22145 = arguments.length;
var i__7480__auto___22146 = (0);
while(true){
if((i__7480__auto___22146 < len__7479__auto___22145)){
args22132.push((arguments[i__7480__auto___22146]));

var G__22147 = (i__7480__auto___22146 + (1));
i__7480__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var G__22134 = args22132.length;
switch (G__22134) {
case 1:
return riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22132.length)].join('')));

}
});

riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.decl_block,cursor__21753__auto__);
});

riffle.app.__GT_decl_block.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22113){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.decl_block,cursor__21753__auto__,m22113);
});

riffle.app.__GT_decl_block.cljs$lang$maxFixedArity = 2;


var ufv___22170 = schema.utils.use_fn_validation;
var output_schema22151_22171 = schema.core.Any;
var input_schema22152_22172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22153_22173 = schema.core.checker(input_schema22152_22172);
var output_checker22154_22174 = schema.core.checker(output_schema22151_22171);
/**
 * Inputs: [props owner]
 */
riffle.app.logic_sentence = ((function (ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function riffle$app$logic_sentence(G__22155,G__22156){
var validate__16887__auto__ = ufv___22170.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22155,G__22156], null);
var temp__4657__auto___22176 = (input_checker22153_22173.cljs$core$IFn$_invoke$arity$1 ? input_checker22153_22173.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22175) : input_checker22153_22173.call(null,args__16888__auto___22175));
if(cljs.core.truth_(temp__4657__auto___22176)){
var error__16889__auto___22177 = temp__4657__auto___22176;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentence,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22177], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22152_22172,cljs.core.cst$kw$value,args__16888__auto___22175,cljs.core.cst$kw$error,error__16889__auto___22177], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22155;
var owner = G__22156;
while(true){
if(typeof riffle.app.t_riffle$app22162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22162 = (function (logic_sentence,G__22155,owner,props,output_schema22151,output_checker22154,input_schema22152,input_checker22153,G__22156,validate__16887__auto__,ufv__,meta22163){
this.logic_sentence = logic_sentence;
this.G__22155 = G__22155;
this.owner = owner;
this.props = props;
this.output_schema22151 = output_schema22151;
this.output_checker22154 = output_checker22154;
this.input_schema22152 = input_schema22152;
this.input_checker22153 = input_checker22153;
this.G__22156 = G__22156;
this.validate__16887__auto__ = validate__16887__auto__;
this.ufv__ = ufv__;
this.meta22163 = meta22163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function (_22164,meta22163__$1){
var self__ = this;
var _22164__$1 = this;
return (new riffle.app.t_riffle$app22162(self__.logic_sentence,self__.G__22155,self__.owner,self__.props,self__.output_schema22151,self__.output_checker22154,self__.input_schema22152,self__.input_checker22153,self__.G__22156,self__.validate__16887__auto__,self__.ufv__,meta22163__$1));
});})(validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

riffle.app.t_riffle$app22162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function (_22164){
var self__ = this;
var _22164__$1 = this;
return self__.meta22163;
});})(validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

riffle.app.t_riffle$app22162.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22162.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function (_){
var self__ = this;
var ___$1 = this;
return "logic-sentence";
});})(validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

riffle.app.t_riffle$app22162.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22162.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22165 = riffle.app.lookup_thing(self__.props);
var map__22165__$1 = ((((!((map__22165 == null)))?((((map__22165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22165):map__22165);
var thing = map__22165__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,cljs.core.cst$kw$is);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts([cljs.core.str("logic-sentence "),cljs.core.str(cljs.core.name(kind))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (map__22165,map__22165__$1,thing,kind,___$1,validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function (p1__22149_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(thing,cljs.core.cst$kw$input_DASH_str,riffle.app.value(p1__22149_SHARP_));
});})(map__22165,map__22165__$1,thing,kind,___$1,validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
,cljs.core.cst$kw$placeholder,[cljs.core.str("("),cljs.core.str(riffle.app.display_name(kind)),cljs.core.str(")")].join(''),cljs.core.cst$kw$value,cljs.core.cst$kw$input_DASH_str.cljs$core$IFn$_invoke$arity$1(thing)], null)),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,self__.props)],null))));
});})(validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

riffle.app.t_riffle$app22162.getBasis = ((function (validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentence,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22151,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22152], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22155,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_schema22151,cljs.core.cst$sym$output_DASH_checker22154,cljs.core.cst$sym$input_DASH_schema22152,cljs.core.cst$sym$input_DASH_checker22153,cljs.core.with_meta(cljs.core.cst$sym$G__22156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22163], null);
});})(validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

riffle.app.t_riffle$app22162.cljs$lang$type = true;

riffle.app.t_riffle$app22162.cljs$lang$ctorStr = "riffle.app/t_riffle$app22162";

riffle.app.t_riffle$app22162.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22162");
});})(validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

riffle.app.__GT_t_riffle$app22162 = ((function (validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174){
return (function riffle$app$logic_sentence_$___GT_t_riffle$app22162(logic_sentence__$1,G__22155__$1,owner__$1,props__$1,output_schema22151__$1,output_checker22154__$1,input_schema22152__$1,input_checker22153__$1,G__22156__$1,validate__16887__auto____$1,ufv____$1,meta22163){
return (new riffle.app.t_riffle$app22162(logic_sentence__$1,G__22155__$1,owner__$1,props__$1,output_schema22151__$1,output_checker22154__$1,input_schema22152__$1,input_checker22153__$1,G__22156__$1,validate__16887__auto____$1,ufv____$1,meta22163));
});})(validate__16887__auto__,ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

}

return (new riffle.app.t_riffle$app22162(riffle$app$logic_sentence,G__22155,owner,props,output_schema22151_22171,output_checker22154_22174,input_schema22152_22172,input_checker22153_22173,G__22156,validate__16887__auto__,ufv___22170,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22178 = (output_checker22154_22174.cljs$core$IFn$_invoke$arity$1 ? output_checker22154_22174.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22154_22174.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22178)){
var error__16889__auto___22179 = temp__4657__auto___22178;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentence,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22179], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22151_22171,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22179], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22170,output_schema22151_22171,input_schema22152_22172,input_checker22153_22173,output_checker22154_22174))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.logic_sentence),schema.core.make_fn_schema(output_schema22151_22171,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22152_22172], null)));

riffle.app.__GT_logic_sentence = (function riffle$app$__GT_logic_sentence(var_args){
var args22167 = [];
var len__7479__auto___22180 = arguments.length;
var i__7480__auto___22181 = (0);
while(true){
if((i__7480__auto___22181 < len__7479__auto___22180)){
args22167.push((arguments[i__7480__auto___22181]));

var G__22182 = (i__7480__auto___22181 + (1));
i__7480__auto___22181 = G__22182;
continue;
} else {
}
break;
}

var G__22169 = args22167.length;
switch (G__22169) {
case 1:
return riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22167.length)].join('')));

}
});

riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentence,cursor__21753__auto__);
});

riffle.app.__GT_logic_sentence.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22150){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.logic_sentence,cursor__21753__auto__,m22150);
});

riffle.app.__GT_logic_sentence.cljs$lang$maxFixedArity = 2;


var ufv___22202 = schema.utils.use_fn_validation;
var output_schema22187_22203 = schema.core.Any;
var input_schema22188_22204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22189_22205 = schema.core.checker(input_schema22188_22204);
var output_checker22190_22206 = schema.core.checker(output_schema22187_22203);
/**
 * Inputs: [props owner]
 */
riffle.app.premise_view = ((function (ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function riffle$app$premise_view(G__22191,G__22192){
var validate__16887__auto__ = ufv___22202.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22191,G__22192], null);
var temp__4657__auto___22208 = (input_checker22189_22205.cljs$core$IFn$_invoke$arity$1 ? input_checker22189_22205.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22207) : input_checker22189_22205.call(null,args__16888__auto___22207));
if(cljs.core.truth_(temp__4657__auto___22208)){
var error__16889__auto___22209 = temp__4657__auto___22208;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$premise_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22209], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22188_22204,cljs.core.cst$kw$value,args__16888__auto___22207,cljs.core.cst$kw$error,error__16889__auto___22209], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22191;
var owner = G__22192;
while(true){
if(typeof riffle.app.t_riffle$app22196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22196 = (function (owner,input_schema22188,props,G__22191,output_checker22190,premise_view,G__22192,validate__16887__auto__,input_checker22189,output_schema22187,ufv__,meta22197){
this.owner = owner;
this.input_schema22188 = input_schema22188;
this.props = props;
this.G__22191 = G__22191;
this.output_checker22190 = output_checker22190;
this.premise_view = premise_view;
this.G__22192 = G__22192;
this.validate__16887__auto__ = validate__16887__auto__;
this.input_checker22189 = input_checker22189;
this.output_schema22187 = output_schema22187;
this.ufv__ = ufv__;
this.meta22197 = meta22197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (_22198,meta22197__$1){
var self__ = this;
var _22198__$1 = this;
return (new riffle.app.t_riffle$app22196(self__.owner,self__.input_schema22188,self__.props,self__.G__22191,self__.output_checker22190,self__.premise_view,self__.G__22192,self__.validate__16887__auto__,self__.input_checker22189,self__.output_schema22187,self__.ufv__,meta22197__$1));
});})(validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

riffle.app.t_riffle$app22196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (_22198){
var self__ = this;
var _22198__$1 = this;
return self__.meta22197;
});})(validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

riffle.app.t_riffle$app22196.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22196.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (_){
var self__ = this;
var ___$1 = this;
return "premise-view";
});})(validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

riffle.app.t_riffle$app22196.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22196.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (_){
var self__ = this;
var ___$1 = this;
var premise = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "logic-sentence premise"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var toggle_consume_BANG_ = ((function (premise,___$1,validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(premise,cljs.core.cst$kw$consume_QMARK_,cljs.core.not);
});})(premise,___$1,validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"className": "toggle-consume", "onClick": om_tools.dom.format_opts(toggle_consume_BANG_), "onKeyDown": om_tools.dom.format_opts(((function (toggle_consume_BANG_,premise,___$1,validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (p1__22184_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22184_SHARP_.key,"Enter")){
return toggle_consume_BANG_();
} else {
return null;
}
});})(toggle_consume_BANG_,premise,___$1,validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
), "tabIndex": "0"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$consume_QMARK_.cljs$core$IFn$_invoke$arity$1(premise))?"Consume":"Check")],null))));
})(),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (premise,___$1,validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (p1__22185_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(premise,cljs.core.cst$kw$input_DASH_str,riffle.app.value(p1__22185_SHARP_));
});})(premise,___$1,validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
,cljs.core.cst$kw$placeholder,"(premise)",cljs.core.cst$kw$value,cljs.core.cst$kw$input_DASH_str.cljs$core$IFn$_invoke$arity$1(premise)], null)),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.delete_button,self__.props)],null))));
});})(validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

riffle.app.t_riffle$app22196.getBasis = ((function (validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema22188,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22191,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22190,cljs.core.with_meta(cljs.core.cst$sym$premise_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22187,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22188], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22192,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$input_DASH_checker22189,cljs.core.cst$sym$output_DASH_schema22187,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22197], null);
});})(validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

riffle.app.t_riffle$app22196.cljs$lang$type = true;

riffle.app.t_riffle$app22196.cljs$lang$ctorStr = "riffle.app/t_riffle$app22196";

riffle.app.t_riffle$app22196.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22196");
});})(validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

riffle.app.__GT_t_riffle$app22196 = ((function (validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206){
return (function riffle$app$premise_view_$___GT_t_riffle$app22196(owner__$1,input_schema22188__$1,props__$1,G__22191__$1,output_checker22190__$1,premise_view__$1,G__22192__$1,validate__16887__auto____$1,input_checker22189__$1,output_schema22187__$1,ufv____$1,meta22197){
return (new riffle.app.t_riffle$app22196(owner__$1,input_schema22188__$1,props__$1,G__22191__$1,output_checker22190__$1,premise_view__$1,G__22192__$1,validate__16887__auto____$1,input_checker22189__$1,output_schema22187__$1,ufv____$1,meta22197));
});})(validate__16887__auto__,ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

}

return (new riffle.app.t_riffle$app22196(owner,input_schema22188_22204,props,G__22191,output_checker22190_22206,riffle$app$premise_view,G__22192,validate__16887__auto__,input_checker22189_22205,output_schema22187_22203,ufv___22202,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22210 = (output_checker22190_22206.cljs$core$IFn$_invoke$arity$1 ? output_checker22190_22206.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22190_22206.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22210)){
var error__16889__auto___22211 = temp__4657__auto___22210;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$premise_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22211], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22187_22203,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22211], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22202,output_schema22187_22203,input_schema22188_22204,input_checker22189_22205,output_checker22190_22206))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.premise_view),schema.core.make_fn_schema(output_schema22187_22203,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22188_22204], null)));

riffle.app.__GT_premise_view = (function riffle$app$__GT_premise_view(var_args){
var args22199 = [];
var len__7479__auto___22212 = arguments.length;
var i__7480__auto___22213 = (0);
while(true){
if((i__7480__auto___22213 < len__7479__auto___22212)){
args22199.push((arguments[i__7480__auto___22213]));

var G__22214 = (i__7480__auto___22213 + (1));
i__7480__auto___22213 = G__22214;
continue;
} else {
}
break;
}

var G__22201 = args22199.length;
switch (G__22201) {
case 1:
return riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22199.length)].join('')));

}
});

riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.premise_view,cursor__21753__auto__);
});

riffle.app.__GT_premise_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22186){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.premise_view,cursor__21753__auto__,m22186);
});

riffle.app.__GT_premise_view.cljs$lang$maxFixedArity = 2;


var ufv___22234 = schema.utils.use_fn_validation;
var output_schema22217_22235 = schema.core.Any;
var input_schema22218_22236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22219_22237 = schema.core.checker(input_schema22218_22236);
var output_checker22220_22238 = schema.core.checker(output_schema22217_22235);
/**
 * Inputs: [props owner]
 */
riffle.app.thing_view = ((function (ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function riffle$app$thing_view(G__22221,G__22222){
var validate__16887__auto__ = ufv___22234.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22221,G__22222], null);
var temp__4657__auto___22240 = (input_checker22219_22237.cljs$core$IFn$_invoke$arity$1 ? input_checker22219_22237.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22239) : input_checker22219_22237.call(null,args__16888__auto___22239));
if(cljs.core.truth_(temp__4657__auto___22240)){
var error__16889__auto___22241 = temp__4657__auto___22240;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$thing_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22241], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22218_22236,cljs.core.cst$kw$value,args__16888__auto___22239,cljs.core.cst$kw$error,error__16889__auto___22241], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22221;
var owner = G__22222;
while(true){
if(typeof riffle.app.t_riffle$app22227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22227 = (function (G__22222,G__22221,owner,props,output_schema22217,input_checker22219,validate__16887__auto__,thing_view,ufv__,input_schema22218,output_checker22220,meta22228){
this.G__22222 = G__22222;
this.G__22221 = G__22221;
this.owner = owner;
this.props = props;
this.output_schema22217 = output_schema22217;
this.input_checker22219 = input_checker22219;
this.validate__16887__auto__ = validate__16887__auto__;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.input_schema22218 = input_schema22218;
this.output_checker22220 = output_checker22220;
this.meta22228 = meta22228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function (_22229,meta22228__$1){
var self__ = this;
var _22229__$1 = this;
return (new riffle.app.t_riffle$app22227(self__.G__22222,self__.G__22221,self__.owner,self__.props,self__.output_schema22217,self__.input_checker22219,self__.validate__16887__auto__,self__.thing_view,self__.ufv__,self__.input_schema22218,self__.output_checker22220,meta22228__$1));
});})(validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

riffle.app.t_riffle$app22227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function (_22229){
var self__ = this;
var _22229__$1 = this;
return self__.meta22228;
});})(validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

riffle.app.t_riffle$app22227.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22227.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

riffle.app.t_riffle$app22227.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22227.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22230 = (((cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(riffle.app.lookup_thing(self__.props)) instanceof cljs.core.Keyword))?cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(riffle.app.lookup_thing(self__.props)).fqn:null);
switch (G__22230) {
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
});})(validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

riffle.app.t_riffle$app22227.getBasis = ((function (validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__22222,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22221,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_schema22217,cljs.core.cst$sym$input_DASH_checker22219,cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$thing_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22217,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22218], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$input_DASH_schema22218,cljs.core.cst$sym$output_DASH_checker22220,cljs.core.cst$sym$meta22228], null);
});})(validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

riffle.app.t_riffle$app22227.cljs$lang$type = true;

riffle.app.t_riffle$app22227.cljs$lang$ctorStr = "riffle.app/t_riffle$app22227";

riffle.app.t_riffle$app22227.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22227");
});})(validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

riffle.app.__GT_t_riffle$app22227 = ((function (validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238){
return (function riffle$app$thing_view_$___GT_t_riffle$app22227(G__22222__$1,G__22221__$1,owner__$1,props__$1,output_schema22217__$1,input_checker22219__$1,validate__16887__auto____$1,thing_view__$1,ufv____$1,input_schema22218__$1,output_checker22220__$1,meta22228){
return (new riffle.app.t_riffle$app22227(G__22222__$1,G__22221__$1,owner__$1,props__$1,output_schema22217__$1,input_checker22219__$1,validate__16887__auto____$1,thing_view__$1,ufv____$1,input_schema22218__$1,output_checker22220__$1,meta22228));
});})(validate__16887__auto__,ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

}

return (new riffle.app.t_riffle$app22227(G__22222,G__22221,owner,props,output_schema22217_22235,input_checker22219_22237,validate__16887__auto__,riffle$app$thing_view,ufv___22234,input_schema22218_22236,output_checker22220_22238,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22243 = (output_checker22220_22238.cljs$core$IFn$_invoke$arity$1 ? output_checker22220_22238.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22220_22238.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22243)){
var error__16889__auto___22244 = temp__4657__auto___22243;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$thing_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22244], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22217_22235,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22244], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22234,output_schema22217_22235,input_schema22218_22236,input_checker22219_22237,output_checker22220_22238))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.thing_view),schema.core.make_fn_schema(output_schema22217_22235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22218_22236], null)));

riffle.app.__GT_thing_view = (function riffle$app$__GT_thing_view(var_args){
var args22231 = [];
var len__7479__auto___22245 = arguments.length;
var i__7480__auto___22246 = (0);
while(true){
if((i__7480__auto___22246 < len__7479__auto___22245)){
args22231.push((arguments[i__7480__auto___22246]));

var G__22247 = (i__7480__auto___22246 + (1));
i__7480__auto___22246 = G__22247;
continue;
} else {
}
break;
}

var G__22233 = args22231.length;
switch (G__22233) {
case 1:
return riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22231.length)].join('')));

}
});

riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.thing_view,cursor__21753__auto__);
});

riffle.app.__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22216){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.thing_view,cursor__21753__auto__,m22216);
});

riffle.app.__GT_thing_view.cljs$lang$maxFixedArity = 2;

riffle.app.build_things = (function riffle$app$build_things(props){
return om.core.build_all.cljs$core$IFn$_invoke$arity$2(riffle.app.thing_view,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22249_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$id,p1__22249_SHARP_);
}),cljs.core.cst$kw$ids.cljs$core$IFn$_invoke$arity$1(props)));
});

var ufv___22266 = schema.utils.use_fn_validation;
var output_schema22251_22267 = schema.core.Any;
var input_schema22252_22268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22253_22269 = schema.core.checker(input_schema22252_22268);
var output_checker22254_22270 = schema.core.checker(output_schema22251_22267);
/**
 * Inputs: [props owner]
 */
riffle.app.logic_sentences = ((function (ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function riffle$app$logic_sentences(G__22255,G__22256){
var validate__16887__auto__ = ufv___22266.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22255,G__22256], null);
var temp__4657__auto___22272 = (input_checker22253_22269.cljs$core$IFn$_invoke$arity$1 ? input_checker22253_22269.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22271) : input_checker22253_22269.call(null,args__16888__auto___22271));
if(cljs.core.truth_(temp__4657__auto___22272)){
var error__16889__auto___22273 = temp__4657__auto___22272;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentences,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22273], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22252_22268,cljs.core.cst$kw$value,args__16888__auto___22271,cljs.core.cst$kw$error,error__16889__auto___22273], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22255;
var owner = G__22256;
while(true){
if(typeof riffle.app.t_riffle$app22260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22260 = (function (logic_sentences,input_checker22253,owner,props,G__22256,input_schema22252,output_checker22254,G__22255,validate__16887__auto__,output_schema22251,ufv__,meta22261){
this.logic_sentences = logic_sentences;
this.input_checker22253 = input_checker22253;
this.owner = owner;
this.props = props;
this.G__22256 = G__22256;
this.input_schema22252 = input_schema22252;
this.output_checker22254 = output_checker22254;
this.G__22255 = G__22255;
this.validate__16887__auto__ = validate__16887__auto__;
this.output_schema22251 = output_schema22251;
this.ufv__ = ufv__;
this.meta22261 = meta22261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function (_22262,meta22261__$1){
var self__ = this;
var _22262__$1 = this;
return (new riffle.app.t_riffle$app22260(self__.logic_sentences,self__.input_checker22253,self__.owner,self__.props,self__.G__22256,self__.input_schema22252,self__.output_checker22254,self__.G__22255,self__.validate__16887__auto__,self__.output_schema22251,self__.ufv__,meta22261__$1));
});})(validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

riffle.app.t_riffle$app22260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function (_22262){
var self__ = this;
var _22262__$1 = this;
return self__.meta22261;
});})(validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

riffle.app.t_riffle$app22260.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22260.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function (_){
var self__ = this;
var ___$1 = this;
return "logic-sentences";
});})(validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

riffle.app.t_riffle$app22260.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22260.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "logic-sentences"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(self__.props),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$text,"+"))],null))));
});})(validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

riffle.app.t_riffle$app22260.getBasis = ((function (validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentences,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22251,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22252], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$input_DASH_checker22253,cljs.core.cst$sym$owner,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22252,cljs.core.cst$sym$output_DASH_checker22254,cljs.core.with_meta(cljs.core.cst$sym$G__22255,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$output_DASH_schema22251,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22261], null);
});})(validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

riffle.app.t_riffle$app22260.cljs$lang$type = true;

riffle.app.t_riffle$app22260.cljs$lang$ctorStr = "riffle.app/t_riffle$app22260";

riffle.app.t_riffle$app22260.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22260");
});})(validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

riffle.app.__GT_t_riffle$app22260 = ((function (validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270){
return (function riffle$app$logic_sentences_$___GT_t_riffle$app22260(logic_sentences__$1,input_checker22253__$1,owner__$1,props__$1,G__22256__$1,input_schema22252__$1,output_checker22254__$1,G__22255__$1,validate__16887__auto____$1,output_schema22251__$1,ufv____$1,meta22261){
return (new riffle.app.t_riffle$app22260(logic_sentences__$1,input_checker22253__$1,owner__$1,props__$1,G__22256__$1,input_schema22252__$1,output_checker22254__$1,G__22255__$1,validate__16887__auto____$1,output_schema22251__$1,ufv____$1,meta22261));
});})(validate__16887__auto__,ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

}

return (new riffle.app.t_riffle$app22260(riffle$app$logic_sentences,input_checker22253_22269,owner,props,G__22256,input_schema22252_22268,output_checker22254_22270,G__22255,validate__16887__auto__,output_schema22251_22267,ufv___22266,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22274 = (output_checker22254_22270.cljs$core$IFn$_invoke$arity$1 ? output_checker22254_22270.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22254_22270.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22274)){
var error__16889__auto___22275 = temp__4657__auto___22274;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$logic_DASH_sentences,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22275], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22251_22267,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22275], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22266,output_schema22251_22267,input_schema22252_22268,input_checker22253_22269,output_checker22254_22270))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.logic_sentences),schema.core.make_fn_schema(output_schema22251_22267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22252_22268], null)));

riffle.app.__GT_logic_sentences = (function riffle$app$__GT_logic_sentences(var_args){
var args22263 = [];
var len__7479__auto___22276 = arguments.length;
var i__7480__auto___22277 = (0);
while(true){
if((i__7480__auto___22277 < len__7479__auto___22276)){
args22263.push((arguments[i__7480__auto___22277]));

var G__22278 = (i__7480__auto___22277 + (1));
i__7480__auto___22277 = G__22278;
continue;
} else {
}
break;
}

var G__22265 = args22263.length;
switch (G__22265) {
case 1:
return riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22263.length)].join('')));

}
});

riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cursor__21753__auto__);
});

riffle.app.__GT_logic_sentences.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22250){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.logic_sentences,cursor__21753__auto__,m22250);
});

riffle.app.__GT_logic_sentences.cljs$lang$maxFixedArity = 2;


var ufv___22300 = schema.utils.use_fn_validation;
var output_schema22281_22301 = schema.core.Any;
var input_schema22282_22302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22283_22303 = schema.core.checker(input_schema22282_22302);
var output_checker22284_22304 = schema.core.checker(output_schema22281_22301);
/**
 * Inputs: [props owner]
 */
riffle.app.editor_section = ((function (ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function riffle$app$editor_section(G__22285,G__22286){
var validate__16887__auto__ = ufv___22300.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22285,G__22286], null);
var temp__4657__auto___22306 = (input_checker22283_22303.cljs$core$IFn$_invoke$arity$1 ? input_checker22283_22303.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22305) : input_checker22283_22303.call(null,args__16888__auto___22305));
if(cljs.core.truth_(temp__4657__auto___22306)){
var error__16889__auto___22307 = temp__4657__auto___22306;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor_DASH_section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22307], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22282_22302,cljs.core.cst$kw$value,args__16888__auto___22305,cljs.core.cst$kw$error,error__16889__auto___22307], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22285;
var owner = G__22286;
while(true){
if(typeof riffle.app.t_riffle$app22292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22292 = (function (input_schema22282,input_checker22283,owner,props,output_schema22281,G__22285,G__22286,validate__16887__auto__,editor_section,output_checker22284,ufv__,meta22293){
this.input_schema22282 = input_schema22282;
this.input_checker22283 = input_checker22283;
this.owner = owner;
this.props = props;
this.output_schema22281 = output_schema22281;
this.G__22285 = G__22285;
this.G__22286 = G__22286;
this.validate__16887__auto__ = validate__16887__auto__;
this.editor_section = editor_section;
this.output_checker22284 = output_checker22284;
this.ufv__ = ufv__;
this.meta22293 = meta22293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function (_22294,meta22293__$1){
var self__ = this;
var _22294__$1 = this;
return (new riffle.app.t_riffle$app22292(self__.input_schema22282,self__.input_checker22283,self__.owner,self__.props,self__.output_schema22281,self__.G__22285,self__.G__22286,self__.validate__16887__auto__,self__.editor_section,self__.output_checker22284,self__.ufv__,meta22293__$1));
});})(validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

riffle.app.t_riffle$app22292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function (_22294){
var self__ = this;
var _22294__$1 = this;
return self__.meta22293;
});})(validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

riffle.app.t_riffle$app22292.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22292.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function (_){
var self__ = this;
var ___$1 = this;
return "editor-section";
});})(validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

riffle.app.t_riffle$app22292.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22292.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22295 = self__.props;
var map__22295__$1 = ((((!((map__22295 == null)))?((((map__22295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22295):map__22295);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22295__$1,cljs.core.cst$kw$kind);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": om_tools.dom.format_opts([cljs.core.str("editor-section "),cljs.core.str([cljs.core.str(cljs.core.name(kind)),cljs.core.str("s")].join(''))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-header"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(clojure.string.capitalize(riffle.app.display_name(kind))),cljs.core.str("s")].join('')],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.props),riffle.editor.kind__GT_ids_key(kind)))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,self__.props)],null))))],null))));
});})(validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

riffle.app.t_riffle$app22292.getBasis = ((function (validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22282,cljs.core.cst$sym$input_DASH_checker22283,cljs.core.cst$sym$owner,cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_schema22281,cljs.core.with_meta(cljs.core.cst$sym$G__22285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$editor_DASH_section,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22281,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22282], null)),cljs.core.cst$kw$doc,"Inputs: [props owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_checker22284,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22293], null);
});})(validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

riffle.app.t_riffle$app22292.cljs$lang$type = true;

riffle.app.t_riffle$app22292.cljs$lang$ctorStr = "riffle.app/t_riffle$app22292";

riffle.app.t_riffle$app22292.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22292");
});})(validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

riffle.app.__GT_t_riffle$app22292 = ((function (validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304){
return (function riffle$app$editor_section_$___GT_t_riffle$app22292(input_schema22282__$1,input_checker22283__$1,owner__$1,props__$1,output_schema22281__$1,G__22285__$1,G__22286__$1,validate__16887__auto____$1,editor_section__$1,output_checker22284__$1,ufv____$1,meta22293){
return (new riffle.app.t_riffle$app22292(input_schema22282__$1,input_checker22283__$1,owner__$1,props__$1,output_schema22281__$1,G__22285__$1,G__22286__$1,validate__16887__auto____$1,editor_section__$1,output_checker22284__$1,ufv____$1,meta22293));
});})(validate__16887__auto__,ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

}

return (new riffle.app.t_riffle$app22292(input_schema22282_22302,input_checker22283_22303,owner,props,output_schema22281_22301,G__22285,G__22286,validate__16887__auto__,riffle$app$editor_section,output_checker22284_22304,ufv___22300,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22308 = (output_checker22284_22304.cljs$core$IFn$_invoke$arity$1 ? output_checker22284_22304.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22284_22304.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22308)){
var error__16889__auto___22309 = temp__4657__auto___22308;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor_DASH_section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22309], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22281_22301,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22309], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22300,output_schema22281_22301,input_schema22282_22302,input_checker22283_22303,output_checker22284_22304))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.editor_section),schema.core.make_fn_schema(output_schema22281_22301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22282_22302], null)));

riffle.app.__GT_editor_section = (function riffle$app$__GT_editor_section(var_args){
var args22297 = [];
var len__7479__auto___22310 = arguments.length;
var i__7480__auto___22311 = (0);
while(true){
if((i__7480__auto___22311 < len__7479__auto___22310)){
args22297.push((arguments[i__7480__auto___22311]));

var G__22312 = (i__7480__auto___22311 + (1));
i__7480__auto___22311 = G__22312;
continue;
} else {
}
break;
}

var G__22299 = args22297.length;
switch (G__22299) {
case 1:
return riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22297.length)].join('')));

}
});

riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor_section,cursor__21753__auto__);
});

riffle.app.__GT_editor_section.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22280){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.editor_section,cursor__21753__auto__,m22280);
});

riffle.app.__GT_editor_section.cljs$lang$maxFixedArity = 2;

riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$type,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22316 = schema.core.Any;
var input_schema22317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22318 = schema.core.checker(input_schema22317);
var output_checker22319 = schema.core.checker(output_schema22316);
return schema.core.schematize_fn(((function (ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319){
return (function riffle$app$G__22314(G__22320,G__22321){
var validate__16887__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22320,G__22321], null);
var temp__4657__auto___22329 = (input_checker22318.cljs$core$IFn$_invoke$arity$1 ? input_checker22318.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22328) : input_checker22318.call(null,args__16888__auto___22328));
if(cljs.core.truth_(temp__4657__auto___22329)){
var error__16889__auto___22330 = temp__4657__auto___22329;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22314,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22330], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22317,cljs.core.cst$kw$value,args__16888__auto___22328,cljs.core.cst$kw$error,error__16889__auto___22330], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22320;
var owner = G__22321;
while(true){
if(typeof riffle.app.t_riffle$app22325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22325 = (function (owner,G__22314,props,input_schema22317,G__22321,output_checker22319,validate__16887__auto__,G__22320,output_schema22316,ufv__,input_checker22318,meta22326){
this.owner = owner;
this.G__22314 = G__22314;
this.props = props;
this.input_schema22317 = input_schema22317;
this.G__22321 = G__22321;
this.output_checker22319 = output_checker22319;
this.validate__16887__auto__ = validate__16887__auto__;
this.G__22320 = G__22320;
this.output_schema22316 = output_schema22316;
this.ufv__ = ufv__;
this.input_checker22318 = input_checker22318;
this.meta22326 = meta22326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319){
return (function (_22327,meta22326__$1){
var self__ = this;
var _22327__$1 = this;
return (new riffle.app.t_riffle$app22325(self__.owner,self__.G__22314,self__.props,self__.input_schema22317,self__.G__22321,self__.output_checker22319,self__.validate__16887__auto__,self__.G__22320,self__.output_schema22316,self__.ufv__,self__.input_checker22318,meta22326__$1));
});})(validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319))
;

riffle.app.t_riffle$app22325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319){
return (function (_22327){
var self__ = this;
var _22327__$1 = this;
return self__.meta22326;
});})(validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319))
;

riffle.app.t_riffle$app22325.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22325.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319){
return (function (_){
var self__ = this;
var ___$1 = this;
var type = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$term,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$term_DASH_ids.cljs$core$IFn$_invoke$arity$1(type)], 0)))],null))));
});})(validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319))
;

riffle.app.t_riffle$app22325.getBasis = ((function (validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__22314,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_schema22317,cljs.core.with_meta(cljs.core.cst$sym$G__22321,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22319,cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__22320,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema22316,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$input_DASH_checker22318,cljs.core.cst$sym$meta22326], null);
});})(validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319))
;

riffle.app.t_riffle$app22325.cljs$lang$type = true;

riffle.app.t_riffle$app22325.cljs$lang$ctorStr = "riffle.app/t_riffle$app22325";

riffle.app.t_riffle$app22325.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22325");
});})(validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319))
;

riffle.app.__GT_t_riffle$app22325 = ((function (validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319){
return (function riffle$app$G__22314_$___GT_t_riffle$app22325(owner__$1,G__22314__$1,props__$1,input_schema22317__$1,G__22321__$1,output_checker22319__$1,validate__16887__auto____$1,G__22320__$1,output_schema22316__$1,ufv____$1,input_checker22318__$1,meta22326){
return (new riffle.app.t_riffle$app22325(owner__$1,G__22314__$1,props__$1,input_schema22317__$1,G__22321__$1,output_checker22319__$1,validate__16887__auto____$1,G__22320__$1,output_schema22316__$1,ufv____$1,input_checker22318__$1,meta22326));
});})(validate__16887__auto__,ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319))
;

}

return (new riffle.app.t_riffle$app22325(owner,riffle$app$G__22314,props,input_schema22317,G__22321,output_checker22319,validate__16887__auto__,G__22320,output_schema22316,ufv__,input_checker22318,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22331 = (output_checker22319.cljs$core$IFn$_invoke$arity$1 ? output_checker22319.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22319.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22331)){
var error__16889__auto___22332 = temp__4657__auto___22331;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22314,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22332], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22316,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22332], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv__,output_schema22316,input_schema22317,input_checker22318,output_checker22319))
,schema.core.make_fn_schema(output_schema22316,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22317], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$bwd,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22335 = schema.core.Any;
var input_schema22336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22337 = schema.core.checker(input_schema22336);
var output_checker22338 = schema.core.checker(output_schema22335);
return schema.core.schematize_fn(((function (ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338){
return (function riffle$app$G__22333(G__22339,G__22340){
var validate__16887__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22339,G__22340], null);
var temp__4657__auto___22348 = (input_checker22337.cljs$core$IFn$_invoke$arity$1 ? input_checker22337.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22347) : input_checker22337.call(null,args__16888__auto___22347));
if(cljs.core.truth_(temp__4657__auto___22348)){
var error__16889__auto___22349 = temp__4657__auto___22348;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22333,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22349], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22336,cljs.core.cst$kw$value,args__16888__auto___22347,cljs.core.cst$kw$error,error__16889__auto___22349], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22339;
var owner = G__22340;
while(true){
if(typeof riffle.app.t_riffle$app22344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22344 = (function (owner,G__22333,props,output_checker22338,input_checker22337,G__22339,output_schema22335,G__22340,validate__16887__auto__,input_schema22336,ufv__,meta22345){
this.owner = owner;
this.G__22333 = G__22333;
this.props = props;
this.output_checker22338 = output_checker22338;
this.input_checker22337 = input_checker22337;
this.G__22339 = G__22339;
this.output_schema22335 = output_schema22335;
this.G__22340 = G__22340;
this.validate__16887__auto__ = validate__16887__auto__;
this.input_schema22336 = input_schema22336;
this.ufv__ = ufv__;
this.meta22345 = meta22345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338){
return (function (_22346,meta22345__$1){
var self__ = this;
var _22346__$1 = this;
return (new riffle.app.t_riffle$app22344(self__.owner,self__.G__22333,self__.props,self__.output_checker22338,self__.input_checker22337,self__.G__22339,self__.output_schema22335,self__.G__22340,self__.validate__16887__auto__,self__.input_schema22336,self__.ufv__,meta22345__$1));
});})(validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338))
;

riffle.app.t_riffle$app22344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338){
return (function (_22346){
var self__ = this;
var _22346__$1 = this;
return self__.meta22345;
});})(validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338))
;

riffle.app.t_riffle$app22344.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22344.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338){
return (function (_){
var self__ = this;
var ___$1 = this;
var bwd = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "cases"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.cst$kw$case_DASH_ids.cljs$core$IFn$_invoke$arity$1(bwd))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$case))],null))))],null))));
});})(validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338))
;

riffle.app.t_riffle$app22344.getBasis = ((function (validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__22333,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_checker22338,cljs.core.cst$sym$input_DASH_checker22337,cljs.core.with_meta(cljs.core.cst$sym$G__22339,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema22335,cljs.core.with_meta(cljs.core.cst$sym$G__22340,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$input_DASH_schema22336,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22345], null);
});})(validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338))
;

riffle.app.t_riffle$app22344.cljs$lang$type = true;

riffle.app.t_riffle$app22344.cljs$lang$ctorStr = "riffle.app/t_riffle$app22344";

riffle.app.t_riffle$app22344.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22344");
});})(validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338))
;

riffle.app.__GT_t_riffle$app22344 = ((function (validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338){
return (function riffle$app$G__22333_$___GT_t_riffle$app22344(owner__$1,G__22333__$1,props__$1,output_checker22338__$1,input_checker22337__$1,G__22339__$1,output_schema22335__$1,G__22340__$1,validate__16887__auto____$1,input_schema22336__$1,ufv____$1,meta22345){
return (new riffle.app.t_riffle$app22344(owner__$1,G__22333__$1,props__$1,output_checker22338__$1,input_checker22337__$1,G__22339__$1,output_schema22335__$1,G__22340__$1,validate__16887__auto____$1,input_schema22336__$1,ufv____$1,meta22345));
});})(validate__16887__auto__,ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338))
;

}

return (new riffle.app.t_riffle$app22344(owner,riffle$app$G__22333,props,output_checker22338,input_checker22337,G__22339,output_schema22335,G__22340,validate__16887__auto__,input_schema22336,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22350 = (output_checker22338.cljs$core$IFn$_invoke$arity$1 ? output_checker22338.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22338.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22350)){
var error__16889__auto___22351 = temp__4657__auto___22350;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22333,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22351], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22335,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22351], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv__,output_schema22335,input_schema22336,input_checker22337,output_checker22338))
,schema.core.make_fn_schema(output_schema22335,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22336], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22355 = schema.core.Any;
var input_schema22356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22357 = schema.core.checker(input_schema22356);
var output_checker22358 = schema.core.checker(output_schema22355);
return schema.core.schematize_fn(((function (ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function riffle$app$G__22353(G__22359,G__22360){
var validate__16887__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22359,G__22360], null);
var temp__4657__auto___22370 = (input_checker22357.cljs$core$IFn$_invoke$arity$1 ? input_checker22357.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22369) : input_checker22357.call(null,args__16888__auto___22369));
if(cljs.core.truth_(temp__4657__auto___22370)){
var error__16889__auto___22371 = temp__4657__auto___22370;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22353,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22371], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22356,cljs.core.cst$kw$value,args__16888__auto___22369,cljs.core.cst$kw$error,error__16889__auto___22371], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22359;
var owner = G__22360;
while(true){
if(typeof riffle.app.t_riffle$app22365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22365 = (function (input_schema22356,output_checker22358,owner,G__22353,props,output_schema22355,G__22359,G__22360,validate__16887__auto__,input_checker22357,ufv__,meta22366){
this.input_schema22356 = input_schema22356;
this.output_checker22358 = output_checker22358;
this.owner = owner;
this.G__22353 = G__22353;
this.props = props;
this.output_schema22355 = output_schema22355;
this.G__22359 = G__22359;
this.G__22360 = G__22360;
this.validate__16887__auto__ = validate__16887__auto__;
this.input_checker22357 = input_checker22357;
this.ufv__ = ufv__;
this.meta22366 = meta22366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function (_22367,meta22366__$1){
var self__ = this;
var _22367__$1 = this;
return (new riffle.app.t_riffle$app22365(self__.input_schema22356,self__.output_checker22358,self__.owner,self__.G__22353,self__.props,self__.output_schema22355,self__.G__22359,self__.G__22360,self__.validate__16887__auto__,self__.input_checker22357,self__.ufv__,meta22366__$1));
});})(validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
;

riffle.app.t_riffle$app22365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function (_22367){
var self__ = this;
var _22367__$1 = this;
return self__.meta22366;
});})(validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
;

riffle.app.t_riffle$app22365.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22365.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function (_){
var self__ = this;
var ___$1 = this;
var case$ = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Base case?",(function (){var toggle_base_case_BANG_ = ((function (case$,___$1,validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(case$,cljs.core.cst$kw$base_DASH_case_QMARK_,cljs.core.not);
});})(case$,___$1,validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
;
var G__22368 = ({"checked": om_tools.dom.format_opts(cljs.core.cst$kw$base_DASH_case_QMARK_.cljs$core$IFn$_invoke$arity$1(case$)), "onChange": om_tools.dom.format_opts(toggle_base_case_BANG_), "onKeyDown": om_tools.dom.format_opts(((function (toggle_base_case_BANG_,case$,___$1,validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function (p1__22352_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22352_SHARP_.key,"Enter")){
return toggle_base_case_BANG_();
} else {
return null;
}
});})(toggle_base_case_BANG_,case$,___$1,validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
), "type": "checkbox"});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__22368) : om.dom.input.call(null,G__22368));
})()], null)),(cljs.core.truth_(cljs.core.cst$kw$base_DASH_case_QMARK_.cljs$core$IFn$_invoke$arity$1(case$))?null:om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$goal,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$goal_DASH_ids.cljs$core$IFn$_invoke$arity$1(case$)], 0))))],null))));
});})(validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
;

riffle.app.t_riffle$app22365.getBasis = ((function (validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22356,cljs.core.cst$sym$output_DASH_checker22358,cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__22353,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.cst$sym$output_DASH_schema22355,cljs.core.with_meta(cljs.core.cst$sym$G__22359,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22360,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$input_DASH_checker22357,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22366], null);
});})(validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
;

riffle.app.t_riffle$app22365.cljs$lang$type = true;

riffle.app.t_riffle$app22365.cljs$lang$ctorStr = "riffle.app/t_riffle$app22365";

riffle.app.t_riffle$app22365.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22365");
});})(validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
;

riffle.app.__GT_t_riffle$app22365 = ((function (validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358){
return (function riffle$app$G__22353_$___GT_t_riffle$app22365(input_schema22356__$1,output_checker22358__$1,owner__$1,G__22353__$1,props__$1,output_schema22355__$1,G__22359__$1,G__22360__$1,validate__16887__auto____$1,input_checker22357__$1,ufv____$1,meta22366){
return (new riffle.app.t_riffle$app22365(input_schema22356__$1,output_checker22358__$1,owner__$1,G__22353__$1,props__$1,output_schema22355__$1,G__22359__$1,G__22360__$1,validate__16887__auto____$1,input_checker22357__$1,ufv____$1,meta22366));
});})(validate__16887__auto__,ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
;

}

return (new riffle.app.t_riffle$app22365(input_schema22356,output_checker22358,owner,riffle$app$G__22353,props,output_schema22355,G__22359,G__22360,validate__16887__auto__,input_checker22357,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22372 = (output_checker22358.cljs$core$IFn$_invoke$arity$1 ? output_checker22358.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22358.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22372)){
var error__16889__auto___22373 = temp__4657__auto___22372;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22353,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22373], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22355,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22373], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv__,output_schema22355,input_schema22356,input_checker22357,output_checker22358))
,schema.core.make_fn_schema(output_schema22355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22356], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stage,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22377 = schema.core.Any;
var input_schema22378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22379 = schema.core.checker(input_schema22378);
var output_checker22380 = schema.core.checker(output_schema22377);
return schema.core.schematize_fn(((function (ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function riffle$app$G__22375(G__22381,G__22382){
var validate__16887__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22381,G__22382], null);
var temp__4657__auto___22410 = (input_checker22379.cljs$core$IFn$_invoke$arity$1 ? input_checker22379.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22409) : input_checker22379.call(null,args__16888__auto___22409));
if(cljs.core.truth_(temp__4657__auto___22410)){
var error__16889__auto___22411 = temp__4657__auto___22410;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22375,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22411], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22378,cljs.core.cst$kw$value,args__16888__auto___22409,cljs.core.cst$kw$error,error__16889__auto___22411], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22381;
var owner = G__22382;
while(true){
if(typeof riffle.app.t_riffle$app22396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22396 = (function (input_schema22378,owner,G__22375,props,G__22381,output_schema22377,input_checker22379,output_checker22380,G__22382,validate__16887__auto__,ufv__,meta22397){
this.input_schema22378 = input_schema22378;
this.owner = owner;
this.G__22375 = G__22375;
this.props = props;
this.G__22381 = G__22381;
this.output_schema22377 = output_schema22377;
this.input_checker22379 = input_checker22379;
this.output_checker22380 = output_checker22380;
this.G__22382 = G__22382;
this.validate__16887__auto__ = validate__16887__auto__;
this.ufv__ = ufv__;
this.meta22397 = meta22397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function (_22398,meta22397__$1){
var self__ = this;
var _22398__$1 = this;
return (new riffle.app.t_riffle$app22396(self__.input_schema22378,self__.owner,self__.G__22375,self__.props,self__.G__22381,self__.output_schema22377,self__.input_checker22379,self__.output_checker22380,self__.G__22382,self__.validate__16887__auto__,self__.ufv__,meta22397__$1));
});})(validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
;

riffle.app.t_riffle$app22396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function (_22398){
var self__ = this;
var _22398__$1 = this;
return self__.meta22397;
});})(validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
;

riffle.app.t_riffle$app22396.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22396.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function (_){
var self__ = this;
var ___$1 = this;
var stage = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rule selection",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (stage,___$1,validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function (p1__22374_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(stage,cljs.core.cst$kw$selection,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(riffle.app.value(p1__22374_SHARP_)));
});})(stage,___$1,validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
), "value": om_tools.dom.format_opts(cljs.core.name(cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(stage)))}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (stage,___$1,validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function riffle$app$G__22375_$_iter__22399(s__22400){
return (new cljs.core.LazySeq(null,((function (stage,___$1,validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function (){
var s__22400__$1 = s__22400;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22400__$1);
if(temp__4657__auto__){
var s__22400__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22400__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22400__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22402 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22401 = (0);
while(true){
if((i__22401 < size__7183__auto__)){
var mode = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22401);
cljs.core.chunk_append(b__22402,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(mode)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.capitalize(mode)],null)))));

var G__22412 = (i__22401 + (1));
i__22401 = G__22412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22402),riffle$app$G__22375_$_iter__22399(cljs.core.chunk_rest(s__22400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22402),null);
}
} else {
var mode = cljs.core.first(s__22400__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(mode)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.capitalize(mode)],null)))),riffle$app$G__22375_$_iter__22399(cljs.core.rest(s__22400__$2)));
}
} else {
return null;
}
break;
}
});})(stage,___$1,validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
,null,null));
});})(stage,___$1,validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
;
return iter__7184__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["interactive","ordered","random"], null));
})()],null))))], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section rules"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22405 = ({"className": "section-header"});
var G__22406 = "Rules";
return React.DOM.div(G__22405,G__22406);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.cst$kw$rule_DASH_ids.cljs$core$IFn$_invoke$arity$1(stage))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$rule))],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section qui-rules"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22407 = ({"className": "section-header"});
var G__22408 = "Fallback rules";
return React.DOM.div(G__22407,G__22408);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.build_things(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$ids,cljs.core.cst$kw$qui_DASH_rule_DASH_ids.cljs$core$IFn$_invoke$arity$1(stage))),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.create_button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$qui_DASH_rule))],null))))],null))))],null))));
});})(validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
;

riffle.app.t_riffle$app22396.getBasis = ((function (validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22378,cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__22375,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22381,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema22377,cljs.core.cst$sym$input_DASH_checker22379,cljs.core.cst$sym$output_DASH_checker22380,cljs.core.with_meta(cljs.core.cst$sym$G__22382,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22397], null);
});})(validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
;

riffle.app.t_riffle$app22396.cljs$lang$type = true;

riffle.app.t_riffle$app22396.cljs$lang$ctorStr = "riffle.app/t_riffle$app22396";

riffle.app.t_riffle$app22396.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22396");
});})(validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
;

riffle.app.__GT_t_riffle$app22396 = ((function (validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380){
return (function riffle$app$G__22375_$___GT_t_riffle$app22396(input_schema22378__$1,owner__$1,G__22375__$1,props__$1,G__22381__$1,output_schema22377__$1,input_checker22379__$1,output_checker22380__$1,G__22382__$1,validate__16887__auto____$1,ufv____$1,meta22397){
return (new riffle.app.t_riffle$app22396(input_schema22378__$1,owner__$1,G__22375__$1,props__$1,G__22381__$1,output_schema22377__$1,input_checker22379__$1,output_checker22380__$1,G__22382__$1,validate__16887__auto____$1,ufv____$1,meta22397));
});})(validate__16887__auto__,ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
;

}

return (new riffle.app.t_riffle$app22396(input_schema22378,owner,riffle$app$G__22375,props,G__22381,output_schema22377,input_checker22379,output_checker22380,G__22382,validate__16887__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22413 = (output_checker22380.cljs$core$IFn$_invoke$arity$1 ? output_checker22380.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22380.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22413)){
var error__16889__auto___22414 = temp__4657__auto___22413;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22375,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22414], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22377,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22414], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv__,output_schema22377,input_schema22378,input_checker22379,output_checker22380))
,schema.core.make_fn_schema(output_schema22377,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22378], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rule,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22418 = schema.core.Any;
var input_schema22419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22420 = schema.core.checker(input_schema22419);
var output_checker22421 = schema.core.checker(output_schema22418);
return schema.core.schematize_fn(((function (ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function riffle$app$G__22416(G__22422,G__22423){
var validate__16887__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22422,G__22423], null);
var temp__4657__auto___22439 = (input_checker22420.cljs$core$IFn$_invoke$arity$1 ? input_checker22420.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22438) : input_checker22420.call(null,args__16888__auto___22438));
if(cljs.core.truth_(temp__4657__auto___22439)){
var error__16889__auto___22440 = temp__4657__auto___22439;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22416,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22440], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22419,cljs.core.cst$kw$value,args__16888__auto___22438,cljs.core.cst$kw$error,error__16889__auto___22440], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22422;
var owner = G__22423;
while(true){
if(typeof riffle.app.t_riffle$app22431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22431 = (function (output_schema22418,G__22423,owner,props,G__22416,G__22422,input_checker22420,validate__16887__auto__,output_checker22421,ufv__,input_schema22419,meta22432){
this.output_schema22418 = output_schema22418;
this.G__22423 = G__22423;
this.owner = owner;
this.props = props;
this.G__22416 = G__22416;
this.G__22422 = G__22422;
this.input_checker22420 = input_checker22420;
this.validate__16887__auto__ = validate__16887__auto__;
this.output_checker22421 = output_checker22421;
this.ufv__ = ufv__;
this.input_schema22419 = input_schema22419;
this.meta22432 = meta22432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function (_22433,meta22432__$1){
var self__ = this;
var _22433__$1 = this;
return (new riffle.app.t_riffle$app22431(self__.output_schema22418,self__.G__22423,self__.owner,self__.props,self__.G__22416,self__.G__22422,self__.input_checker22420,self__.validate__16887__auto__,self__.output_checker22421,self__.ufv__,self__.input_schema22419,meta22432__$1));
});})(validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
;

riffle.app.t_riffle$app22431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function (_22433){
var self__ = this;
var _22433__$1 = this;
return self__.meta22432;
});})(validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
;

riffle.app.t_riffle$app22431.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22431.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function (_){
var self__ = this;
var ___$1 = this;
var rule = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.autoresizing_text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"rule-description",cljs.core.cst$kw$on_DASH_change,((function (rule,___$1,validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function (p1__22415_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(rule,cljs.core.cst$kw$description,riffle.app.value(p1__22415_SHARP_));
});})(rule,___$1,validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
,cljs.core.cst$kw$placeholder,"(description)",cljs.core.cst$kw$value,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(rule)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiline_QMARK_,true], null)], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section premises"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22434 = ({"className": "section-header"});
var G__22435 = "Before";
return React.DOM.div(G__22434,G__22435);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$premise,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$premise_DASH_ids.cljs$core$IFn$_invoke$arity$1(rule)], 0)))],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section results"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22436 = ({"className": "section-header"});
var G__22437 = "After";
return React.DOM.div(G__22436,G__22437);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$result,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$result_DASH_ids.cljs$core$IFn$_invoke$arity$1(rule)], 0)))],null))))],null)))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(rule),cljs.core.cst$kw$qui_DASH_rule))?riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Go to stage",om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.stage_selector,self__.props)], null)):null)],null))));
});})(validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
;

riffle.app.t_riffle$app22431.getBasis = ((function (validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema22418,cljs.core.with_meta(cljs.core.cst$sym$G__22423,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22416,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22422,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22420,cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$output_DASH_checker22421,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$input_DASH_schema22419,cljs.core.cst$sym$meta22432], null);
});})(validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
;

riffle.app.t_riffle$app22431.cljs$lang$type = true;

riffle.app.t_riffle$app22431.cljs$lang$ctorStr = "riffle.app/t_riffle$app22431";

riffle.app.t_riffle$app22431.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22431");
});})(validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
;

riffle.app.__GT_t_riffle$app22431 = ((function (validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421){
return (function riffle$app$G__22416_$___GT_t_riffle$app22431(output_schema22418__$1,G__22423__$1,owner__$1,props__$1,G__22416__$1,G__22422__$1,input_checker22420__$1,validate__16887__auto____$1,output_checker22421__$1,ufv____$1,input_schema22419__$1,meta22432){
return (new riffle.app.t_riffle$app22431(output_schema22418__$1,G__22423__$1,owner__$1,props__$1,G__22416__$1,G__22422__$1,input_checker22420__$1,validate__16887__auto____$1,output_checker22421__$1,ufv____$1,input_schema22419__$1,meta22432));
});})(validate__16887__auto__,ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
;

}

return (new riffle.app.t_riffle$app22431(output_schema22418,G__22423,owner,props,riffle$app$G__22416,G__22422,input_checker22420,validate__16887__auto__,output_checker22421,ufv__,input_schema22419,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22441 = (output_checker22421.cljs$core$IFn$_invoke$arity$1 ? output_checker22421.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22421.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22441)){
var error__16889__auto___22442 = temp__4657__auto___22441;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22416,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22442], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22418,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22442], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv__,output_schema22418,input_schema22419,input_checker22420,output_checker22421))
,schema.core.make_fn_schema(output_schema22418,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22419], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$qui_DASH_rule,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22445 = schema.core.Any;
var input_schema22446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22447 = schema.core.checker(input_schema22446);
var output_checker22448 = schema.core.checker(output_schema22445);
return schema.core.schematize_fn(((function (ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448){
return (function riffle$app$G__22443(G__22449,G__22450){
var validate__16887__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22449,G__22450], null);
var temp__4657__auto___22458 = (input_checker22447.cljs$core$IFn$_invoke$arity$1 ? input_checker22447.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22457) : input_checker22447.call(null,args__16888__auto___22457));
if(cljs.core.truth_(temp__4657__auto___22458)){
var error__16889__auto___22459 = temp__4657__auto___22458;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22443,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22459], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22446,cljs.core.cst$kw$value,args__16888__auto___22457,cljs.core.cst$kw$error,error__16889__auto___22459], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22449;
var owner = G__22450;
while(true){
if(typeof riffle.app.t_riffle$app22454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22454 = (function (G__22449,input_schema22446,G__22443,owner,output_schema22445,props,input_checker22447,output_checker22448,G__22450,validate__16887__auto__,ufv__,meta22455){
this.G__22449 = G__22449;
this.input_schema22446 = input_schema22446;
this.G__22443 = G__22443;
this.owner = owner;
this.output_schema22445 = output_schema22445;
this.props = props;
this.input_checker22447 = input_checker22447;
this.output_checker22448 = output_checker22448;
this.G__22450 = G__22450;
this.validate__16887__auto__ = validate__16887__auto__;
this.ufv__ = ufv__;
this.meta22455 = meta22455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448){
return (function (_22456,meta22455__$1){
var self__ = this;
var _22456__$1 = this;
return (new riffle.app.t_riffle$app22454(self__.G__22449,self__.input_schema22446,self__.G__22443,self__.owner,self__.output_schema22445,self__.props,self__.input_checker22447,self__.output_checker22448,self__.G__22450,self__.validate__16887__auto__,self__.ufv__,meta22455__$1));
});})(validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448))
;

riffle.app.t_riffle$app22454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448){
return (function (_22456){
var self__ = this;
var _22456__$1 = this;
return self__.meta22455;
});})(validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448))
;

riffle.app.t_riffle$app22454.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22454.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.cljs$core$IFn$_invoke$arity$2(cljs.core.get_method(riffle.app.decl_block_body,cljs.core.cst$kw$rule),self__.props);
});})(validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448))
;

riffle.app.t_riffle$app22454.getBasis = ((function (validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__22449,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema22446,cljs.core.with_meta(cljs.core.cst$sym$G__22443,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_schema22445,cljs.core.cst$sym$props,cljs.core.cst$sym$input_DASH_checker22447,cljs.core.cst$sym$output_DASH_checker22448,cljs.core.with_meta(cljs.core.cst$sym$G__22450,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22455], null);
});})(validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448))
;

riffle.app.t_riffle$app22454.cljs$lang$type = true;

riffle.app.t_riffle$app22454.cljs$lang$ctorStr = "riffle.app/t_riffle$app22454";

riffle.app.t_riffle$app22454.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22454");
});})(validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448))
;

riffle.app.__GT_t_riffle$app22454 = ((function (validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448){
return (function riffle$app$G__22443_$___GT_t_riffle$app22454(G__22449__$1,input_schema22446__$1,G__22443__$1,owner__$1,output_schema22445__$1,props__$1,input_checker22447__$1,output_checker22448__$1,G__22450__$1,validate__16887__auto____$1,ufv____$1,meta22455){
return (new riffle.app.t_riffle$app22454(G__22449__$1,input_schema22446__$1,G__22443__$1,owner__$1,output_schema22445__$1,props__$1,input_checker22447__$1,output_checker22448__$1,G__22450__$1,validate__16887__auto____$1,ufv____$1,meta22455));
});})(validate__16887__auto__,ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448))
;

}

return (new riffle.app.t_riffle$app22454(G__22449,input_schema22446,riffle$app$G__22443,owner,output_schema22445,props,input_checker22447,output_checker22448,G__22450,validate__16887__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22460 = (output_checker22448.cljs$core$IFn$_invoke$arity$1 ? output_checker22448.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22448.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22460)){
var error__16889__auto___22461 = temp__4657__auto___22460;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22443,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22461], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22445,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22461], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv__,output_schema22445,input_schema22446,input_checker22447,output_checker22448))
,schema.core.make_fn_schema(output_schema22445,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22446], null)));
})());
riffle.app.decl_block_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22464 = schema.core.Any;
var input_schema22465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22466 = schema.core.checker(input_schema22465);
var output_checker22467 = schema.core.checker(output_schema22464);
return schema.core.schematize_fn(((function (ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467){
return (function riffle$app$G__22462(G__22468,G__22469){
var validate__16887__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22468,G__22469], null);
var temp__4657__auto___22481 = (input_checker22466.cljs$core$IFn$_invoke$arity$1 ? input_checker22466.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22480) : input_checker22466.call(null,args__16888__auto___22480));
if(cljs.core.truth_(temp__4657__auto___22481)){
var error__16889__auto___22482 = temp__4657__auto___22481;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22462,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22482], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22465,cljs.core.cst$kw$value,args__16888__auto___22480,cljs.core.cst$kw$error,error__16889__auto___22482], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var props = G__22468;
var owner = G__22469;
while(true){
if(typeof riffle.app.t_riffle$app22475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22475 = (function (input_schema22465,owner,props,G__22462,G__22469,input_checker22466,output_schema22464,output_checker22467,validate__16887__auto__,G__22468,ufv__,meta22476){
this.input_schema22465 = input_schema22465;
this.owner = owner;
this.props = props;
this.G__22462 = G__22462;
this.G__22469 = G__22469;
this.input_checker22466 = input_checker22466;
this.output_schema22464 = output_schema22464;
this.output_checker22467 = output_checker22467;
this.validate__16887__auto__ = validate__16887__auto__;
this.G__22468 = G__22468;
this.ufv__ = ufv__;
this.meta22476 = meta22476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467){
return (function (_22477,meta22476__$1){
var self__ = this;
var _22477__$1 = this;
return (new riffle.app.t_riffle$app22475(self__.input_schema22465,self__.owner,self__.props,self__.G__22462,self__.G__22469,self__.input_checker22466,self__.output_schema22464,self__.output_checker22467,self__.validate__16887__auto__,self__.G__22468,self__.ufv__,meta22476__$1));
});})(validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467))
;

riffle.app.t_riffle$app22475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467){
return (function (_22477){
var self__ = this;
var _22477__$1 = this;
return self__.meta22476;
});})(validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467))
;

riffle.app.t_riffle$app22475.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22475.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467){
return (function (_){
var self__ = this;
var ___$1 = this;
var context = riffle.app.lookup_thing(self__.props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,self__.props).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stage",om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.stage_selector,self__.props)], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,({"className": "decl-block-section facts"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22478 = ({"className": "section-header"});
var G__22479 = "Resources";
return React.DOM.div(G__22478,G__22479);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "section-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.logic_sentences,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.props,cljs.core.cst$kw$kind,cljs.core.cst$kw$fact,cljs.core.array_seq([cljs.core.cst$kw$ids,cljs.core.cst$kw$fact_DASH_ids.cljs$core$IFn$_invoke$arity$1(context)], 0)))],null))))],null))))],null))));
});})(validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467))
;

riffle.app.t_riffle$app22475.getBasis = ((function (validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22465,cljs.core.cst$sym$owner,cljs.core.cst$sym$props,cljs.core.with_meta(cljs.core.cst$sym$G__22462,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__22469,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22466,cljs.core.cst$sym$output_DASH_schema22464,cljs.core.cst$sym$output_DASH_checker22467,cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__22468,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22476], null);
});})(validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467))
;

riffle.app.t_riffle$app22475.cljs$lang$type = true;

riffle.app.t_riffle$app22475.cljs$lang$ctorStr = "riffle.app/t_riffle$app22475";

riffle.app.t_riffle$app22475.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22475");
});})(validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467))
;

riffle.app.__GT_t_riffle$app22475 = ((function (validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467){
return (function riffle$app$G__22462_$___GT_t_riffle$app22475(input_schema22465__$1,owner__$1,props__$1,G__22462__$1,G__22469__$1,input_checker22466__$1,output_schema22464__$1,output_checker22467__$1,validate__16887__auto____$1,G__22468__$1,ufv____$1,meta22476){
return (new riffle.app.t_riffle$app22475(input_schema22465__$1,owner__$1,props__$1,G__22462__$1,G__22469__$1,input_checker22466__$1,output_schema22464__$1,output_checker22467__$1,validate__16887__auto____$1,G__22468__$1,ufv____$1,meta22476));
});})(validate__16887__auto__,ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467))
;

}

return (new riffle.app.t_riffle$app22475(input_schema22465,owner,props,riffle$app$G__22462,G__22469,input_checker22466,output_schema22464,output_checker22467,validate__16887__auto__,G__22468,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22483 = (output_checker22467.cljs$core$IFn$_invoke$arity$1 ? output_checker22467.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22467.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22483)){
var error__16889__auto___22484 = temp__4657__auto___22483;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$G__22462,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22484], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22464,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22484], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv__,output_schema22464,input_schema22465,input_checker22466,output_checker22467))
,schema.core.make_fn_schema(output_schema22464,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22465], null)));
})());

var ufv___22579 = schema.utils.use_fn_validation;
var output_schema22490_22580 = schema.core.Any;
var input_schema22491_22581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22492_22582 = schema.core.checker(input_schema22491_22581);
var output_checker22493_22583 = schema.core.checker(output_schema22490_22580);
/**
 * Inputs: [editor owner]
 */
riffle.app.program_info = ((function (ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function riffle$app$program_info(G__22494,G__22495){
var validate__16887__auto__ = ufv___22579.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22494,G__22495], null);
var temp__4657__auto___22585 = (input_checker22492_22582.cljs$core$IFn$_invoke$arity$1 ? input_checker22492_22582.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22584) : input_checker22492_22582.call(null,args__16888__auto___22584));
if(cljs.core.truth_(temp__4657__auto___22585)){
var error__16889__auto___22586 = temp__4657__auto___22585;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$program_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22586], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22491_22581,cljs.core.cst$kw$value,args__16888__auto___22584,cljs.core.cst$kw$error,error__16889__auto___22586], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var editor = G__22494;
var owner = G__22495;
while(true){
if(typeof riffle.app.t_riffle$app22536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22536 = (function (input_checker22492,program_info,owner,G__22495,output_checker22493,G__22494,validate__16887__auto__,output_schema22490,editor,ufv__,input_schema22491,meta22537){
this.input_checker22492 = input_checker22492;
this.program_info = program_info;
this.owner = owner;
this.G__22495 = G__22495;
this.output_checker22493 = output_checker22493;
this.G__22494 = G__22494;
this.validate__16887__auto__ = validate__16887__auto__;
this.output_schema22490 = output_schema22490;
this.editor = editor;
this.ufv__ = ufv__;
this.input_schema22491 = input_schema22491;
this.meta22537 = meta22537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (_22538,meta22537__$1){
var self__ = this;
var _22538__$1 = this;
return (new riffle.app.t_riffle$app22536(self__.input_checker22492,self__.program_info,self__.owner,self__.G__22495,self__.output_checker22493,self__.G__22494,self__.validate__16887__auto__,self__.output_schema22490,self__.editor,self__.ufv__,self__.input_schema22491,meta22537__$1));
});})(validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

riffle.app.t_riffle$app22536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (_22538){
var self__ = this;
var _22538__$1 = this;
return self__.meta22537;
});})(validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

riffle.app.t_riffle$app22536.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22536.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (_){
var self__ = this;
var ___$1 = this;
return "program-info";
});})(validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

riffle.app.t_riffle$app22536.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22536.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (_){
var self__ = this;
var ___$1 = this;
var program = riffle.editor.current_program(self__.editor);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "program-info"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "header story-title"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22539 = ({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (p1__22485_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.cst$kw$title,riffle.app.value(p1__22485_SHARP_));
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
), "placeholder": "(title)", "type": "text", "value": om_tools.dom.format_opts(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(program))});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__22539) : om.dom.input.call(null,G__22539));
})(),(((cljs.core.count(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(self__.editor)) > (1)))?(function (){var G__22540 = ({"className": "delete-button", "onClick": om_tools.dom.format_opts(((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.editor,cljs.core.PersistentVector.EMPTY,((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (p1__22486_SHARP_){
return riffle.editor.delete_program(p1__22486_SHARP_,cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.editor));
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
);
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
)});
var G__22541 = "\u00D7";
return React.DOM.button(G__22540,G__22541);
})():null)],null)))),riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,program).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interaction style",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (p1__22487_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.cst$kw$interaction_DASH_style,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(riffle.app.value(p1__22487_SHARP_)));
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
), "value": om_tools.dom.format_opts(cljs.core.name(cljs.core.cst$kw$interaction_DASH_style.cljs$core$IFn$_invoke$arity$1(program)))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22542 = ({"value": "cyoa"});
var G__22543 = "CYOA";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__22542,G__22543) : om.dom.option.call(null,G__22542,G__22543));
})(),(function (){var G__22544 = ({"value": "parser"});
var G__22545 = "Parser";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__22544,G__22545) : om.dom.option.call(null,G__22544,G__22545));
})()],null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting context",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (p1__22488_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.cst$kw$context_DASH_id,riffle.app.int_value(p1__22488_SHARP_));
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
), "value": om_tools.dom.format_opts(cljs.core.cst$kw$context_DASH_id.cljs$core$IFn$_invoke$arity$1(program))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(((cljs.core.cst$kw$context_DASH_id.cljs$core$IFn$_invoke$arity$1(program) == null))?(function (){var G__22546 = ({"value": null});
var G__22547 = "(none)";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__22546,G__22547) : om.dom.option.call(null,G__22546,G__22547));
})():null),(function (){var iter__7184__auto__ = ((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function riffle$app$program_info_$_iter__22548(s__22549){
return (new cljs.core.LazySeq(null,((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (){
var s__22549__$1 = s__22549;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22549__$1);
if(temp__4657__auto__){
var s__22549__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22549__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22549__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22551 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22550 = (0);
while(true){
if((i__22550 < size__7183__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22550);
cljs.core.chunk_append(b__22551,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,id),"(unnamed context)")],null)))));

var G__22587 = (i__22550 + (1));
i__22550 = G__22587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22551),riffle$app$program_info_$_iter__22548(cljs.core.chunk_rest(s__22549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22551),null);
}
} else {
var id = cljs.core.first(s__22549__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(id)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(riffle.editor.lookup(program,id),"(unnamed context)")],null)))),riffle$app$program_info_$_iter__22548(cljs.core.rest(s__22549__$2)));
}
} else {
return null;
}
break;
}
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
,null,null));
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;
return iter__7184__auto__(cljs.core.cst$kw$context_DASH_ids.cljs$core$IFn$_invoke$arity$1(program));
})()],null))))], null)),riffle.app.domify.cljs$core$IFn$_invoke$arity$2(riffle.app.label_table,program).call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Load saved",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.select,({"onChange": om_tools.dom.format_opts(((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (ev){
var v = riffle.app.int_value(ev);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(-1))){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.editor,cljs.core.PersistentVector.EMPTY,riffle.editor.create_program);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.editor,cljs.core.cst$kw$program,v);
}
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
), "value": om_tools.dom.format_opts(cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.editor))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function riffle$app$program_info_$_iter__22554(s__22555){
return (new cljs.core.LazySeq(null,((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (){
var s__22555__$1 = s__22555;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22555__$1);
if(temp__4657__auto__){
var s__22555__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22555__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22555__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22557 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22556 = (0);
while(true){
if((i__22556 < size__7183__auto__)){
var vec__22566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22556);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22566,(0),null);
var program__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22566,(1),null);
cljs.core.chunk_append(b__22557,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(idx)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(program__$1)],null)))));

var G__22588 = (i__22556 + (1));
i__22556 = G__22588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22557),riffle$app$program_info_$_iter__22554(cljs.core.chunk_rest(s__22555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22557),null);
}
} else {
var vec__22569 = cljs.core.first(s__22555__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22569,(0),null);
var program__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22569,(1),null);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,({"value": om_tools.dom.format_opts(idx)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(program__$1)],null)))),riffle$app$program_info_$_iter__22554(cljs.core.rest(s__22555__$2)));
}
} else {
return null;
}
break;
}
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
,null,null));
});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;
return iter__7184__auto__(riffle.util.with_indexes(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(self__.editor)));
})(),(function (){var G__22572 = ({"value": (-1)});
var G__22573 = "(new program)";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__22572,G__22573) : om.dom.option.call(null,G__22572,G__22573));
})()],null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Copy/paste",(function (){var G__22574 = ({"className": "copy-paste", "onChange": om_tools.dom.format_opts(((function (program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (ev){
try{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(program,cljs.core.PersistentVector.EMPTY,cljs.reader.read_string(riffle.app.value(ev)));
}catch (e22575){var err = e22575;
return console.log(err);
}});})(program,___$1,validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
), "type": "text", "value": om_tools.dom.format_opts(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([program], 0)))});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__22574) : om.dom.input.call(null,G__22574));
})()], null))],null))));
});})(validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

riffle.app.t_riffle$app22536.getBasis = ((function (validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_checker22492,cljs.core.with_meta(cljs.core.cst$sym$program_DASH_info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22490,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22491], null)),cljs.core.cst$kw$doc,"Inputs: [editor owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$editor,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__22495,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22493,cljs.core.with_meta(cljs.core.cst$sym$G__22494,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$output_DASH_schema22490,cljs.core.cst$sym$editor,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$input_DASH_schema22491,cljs.core.cst$sym$meta22537], null);
});})(validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

riffle.app.t_riffle$app22536.cljs$lang$type = true;

riffle.app.t_riffle$app22536.cljs$lang$ctorStr = "riffle.app/t_riffle$app22536";

riffle.app.t_riffle$app22536.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22536");
});})(validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

riffle.app.__GT_t_riffle$app22536 = ((function (validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583){
return (function riffle$app$program_info_$___GT_t_riffle$app22536(input_checker22492__$1,program_info__$1,owner__$1,G__22495__$1,output_checker22493__$1,G__22494__$1,validate__16887__auto____$1,output_schema22490__$1,editor__$1,ufv____$1,input_schema22491__$1,meta22537){
return (new riffle.app.t_riffle$app22536(input_checker22492__$1,program_info__$1,owner__$1,G__22495__$1,output_checker22493__$1,G__22494__$1,validate__16887__auto____$1,output_schema22490__$1,editor__$1,ufv____$1,input_schema22491__$1,meta22537));
});})(validate__16887__auto__,ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

}

return (new riffle.app.t_riffle$app22536(input_checker22492_22582,riffle$app$program_info,owner,G__22495,output_checker22493_22583,G__22494,validate__16887__auto__,output_schema22490_22580,editor,ufv___22579,input_schema22491_22581,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22589 = (output_checker22493_22583.cljs$core$IFn$_invoke$arity$1 ? output_checker22493_22583.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22493_22583.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22589)){
var error__16889__auto___22590 = temp__4657__auto___22589;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$program_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22590], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22490_22580,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22590], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22579,output_schema22490_22580,input_schema22491_22581,input_checker22492_22582,output_checker22493_22583))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.program_info),schema.core.make_fn_schema(output_schema22490_22580,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22491_22581], null)));

riffle.app.__GT_program_info = (function riffle$app$__GT_program_info(var_args){
var args22576 = [];
var len__7479__auto___22591 = arguments.length;
var i__7480__auto___22592 = (0);
while(true){
if((i__7480__auto___22592 < len__7479__auto___22591)){
args22576.push((arguments[i__7480__auto___22592]));

var G__22593 = (i__7480__auto___22592 + (1));
i__7480__auto___22592 = G__22593;
continue;
} else {
}
break;
}

var G__22578 = args22576.length;
switch (G__22578) {
case 1:
return riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22576.length)].join('')));

}
});

riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.program_info,cursor__21753__auto__);
});

riffle.app.__GT_program_info.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22489){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.program_info,cursor__21753__auto__,m22489);
});

riffle.app.__GT_program_info.cljs$lang$maxFixedArity = 2;


var ufv___22623 = schema.utils.use_fn_validation;
var output_schema22596_22624 = schema.core.Any;
var input_schema22597_22625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22598_22626 = schema.core.checker(input_schema22597_22625);
var output_checker22599_22627 = schema.core.checker(output_schema22596_22624);
/**
 * Inputs: [editor owner]
 */
riffle.app.editor = ((function (ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function riffle$app$editor(G__22600,G__22601){
var validate__16887__auto__ = ufv___22623.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22600,G__22601], null);
var temp__4657__auto___22629 = (input_checker22598_22626.cljs$core$IFn$_invoke$arity$1 ? input_checker22598_22626.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22628) : input_checker22598_22626.call(null,args__16888__auto___22628));
if(cljs.core.truth_(temp__4657__auto___22629)){
var error__16889__auto___22630 = temp__4657__auto___22629;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22630], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22597_22625,cljs.core.cst$kw$value,args__16888__auto___22628,cljs.core.cst$kw$error,error__16889__auto___22630], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var editor__$1 = G__22600;
var owner = G__22601;
while(true){
if(typeof riffle.app.t_riffle$app22611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22611 = (function (owner,input_schema22597,output_schema22596,input_checker22598,output_checker22599,G__22601,validate__16887__auto__,G__22600,editor,ufv__,meta22612){
this.owner = owner;
this.input_schema22597 = input_schema22597;
this.output_schema22596 = output_schema22596;
this.input_checker22598 = input_checker22598;
this.output_checker22599 = output_checker22599;
this.G__22601 = G__22601;
this.validate__16887__auto__ = validate__16887__auto__;
this.G__22600 = G__22600;
this.editor = editor;
this.ufv__ = ufv__;
this.meta22612 = meta22612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function (_22613,meta22612__$1){
var self__ = this;
var _22613__$1 = this;
return (new riffle.app.t_riffle$app22611(self__.owner,self__.input_schema22597,self__.output_schema22596,self__.input_checker22598,self__.output_checker22599,self__.G__22601,self__.validate__16887__auto__,self__.G__22600,self__.editor,self__.ufv__,meta22612__$1));
});})(validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

riffle.app.t_riffle$app22611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function (_22613){
var self__ = this;
var _22613__$1 = this;
return self__.meta22612;
});})(validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

riffle.app.t_riffle$app22611.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22611.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function (_){
var self__ = this;
var ___$1 = this;
return "editor";
});})(validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

riffle.app.t_riffle$app22611.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22611.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "editor"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.program_info,self__.editor),(function (){var program = riffle.editor.current_program(self__.editor);
var iter__7184__auto__ = ((function (program,___$1,validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function riffle$app$editor_$_iter__22614(s__22615){
return (new cljs.core.LazySeq(null,((function (program,___$1,validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function (){
var s__22615__$1 = s__22615;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22615__$1);
if(temp__4657__auto__){
var s__22615__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22615__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22615__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22617 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22616 = (0);
while(true){
if((i__22616 < size__7183__auto__)){
var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22616);
cljs.core.chunk_append(b__22617,om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$program,program,cljs.core.cst$kw$kind,kind], null)));

var G__22631 = (i__22616 + (1));
i__22616 = G__22631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22617),riffle$app$editor_$_iter__22614(cljs.core.chunk_rest(s__22615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22617),null);
}
} else {
var kind = cljs.core.first(s__22615__$2);
return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$program,program,cljs.core.cst$kw$kind,kind], null)),riffle$app$editor_$_iter__22614(cljs.core.rest(s__22615__$2)));
}
} else {
return null;
}
break;
}
});})(program,___$1,validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
,null,null));
});})(program,___$1,validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;
return iter__7184__auto__(riffle.editor.toplevel_kinds);
})()],null))));
});})(validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

riffle.app.t_riffle$app22611.getBasis = ((function (validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema22597,cljs.core.cst$sym$output_DASH_schema22596,cljs.core.cst$sym$input_DASH_checker22598,cljs.core.cst$sym$output_DASH_checker22599,cljs.core.with_meta(cljs.core.cst$sym$G__22601,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__22600,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22596,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22597], null)),cljs.core.cst$kw$doc,"Inputs: [editor owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$editor,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22612], null);
});})(validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

riffle.app.t_riffle$app22611.cljs$lang$type = true;

riffle.app.t_riffle$app22611.cljs$lang$ctorStr = "riffle.app/t_riffle$app22611";

riffle.app.t_riffle$app22611.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22611");
});})(validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

riffle.app.__GT_t_riffle$app22611 = ((function (validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627){
return (function riffle$app$editor_$___GT_t_riffle$app22611(owner__$1,input_schema22597__$1,output_schema22596__$1,input_checker22598__$1,output_checker22599__$1,G__22601__$1,validate__16887__auto____$1,G__22600__$1,editor__$2,ufv____$1,meta22612){
return (new riffle.app.t_riffle$app22611(owner__$1,input_schema22597__$1,output_schema22596__$1,input_checker22598__$1,output_checker22599__$1,G__22601__$1,validate__16887__auto____$1,G__22600__$1,editor__$2,ufv____$1,meta22612));
});})(validate__16887__auto__,ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

}

return (new riffle.app.t_riffle$app22611(owner,input_schema22597_22625,output_schema22596_22624,input_checker22598_22626,output_checker22599_22627,G__22601,validate__16887__auto__,G__22600,editor__$1,ufv___22623,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22632 = (output_checker22599_22627.cljs$core$IFn$_invoke$arity$1 ? output_checker22599_22627.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22599_22627.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22632)){
var error__16889__auto___22633 = temp__4657__auto___22632;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22633], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22596_22624,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22633], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22623,output_schema22596_22624,input_schema22597_22625,input_checker22598_22626,output_checker22599_22627))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.editor),schema.core.make_fn_schema(output_schema22596_22624,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22597_22625], null)));

riffle.app.__GT_editor = (function riffle$app$__GT_editor(var_args){
var args22620 = [];
var len__7479__auto___22634 = arguments.length;
var i__7480__auto___22635 = (0);
while(true){
if((i__7480__auto___22635 < len__7479__auto___22634)){
args22620.push((arguments[i__7480__auto___22635]));

var G__22636 = (i__7480__auto___22635 + (1));
i__7480__auto___22635 = G__22636;
continue;
} else {
}
break;
}

var G__22622 = args22620.length;
switch (G__22622) {
case 1:
return riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22620.length)].join('')));

}
});

riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor,cursor__21753__auto__);
});

riffle.app.__GT_editor.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22595){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.editor,cursor__21753__auto__,m22595);
});

riffle.app.__GT_editor.cljs$lang$maxFixedArity = 2;

riffle.app.stop = (function riffle$app$stop(player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$running_QMARK_,false);
});
riffle.app.advance_or_stop = (function riffle$app$advance_or_stop(player){
var state_SINGLEQUOTE_ = riffle.engine.run_to_choice_point(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(player));
var G__22639 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$state,state_SINGLEQUOTE_);
if(cljs.core.truth_(cljs.core.cst$kw$reached_DASH_end_QMARK_.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_))){
return riffle.app.stop(G__22639);
} else {
return G__22639;
}
});
riffle.app.play = (function riffle$app$play(player,program){
try{var init_state = riffle.compiler.compile_program(riffle.editor.prep_for_compilation(program));
return riffle.app.advance_or_stop(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.cst$kw$running_QMARK_,true,cljs.core.array_seq([cljs.core.cst$kw$state,init_state,cljs.core.cst$kw$error,null], 0)));
}catch (e22641){var err = e22641;
console.log(err);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.cst$kw$running_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$error,err], 0));
}});
riffle.app.choose = (function riffle$app$choose(player,choice){
try{return riffle.app.advance_or_stop(cljs.core.update.cljs$core$IFn$_invoke$arity$4(player,cljs.core.cst$kw$state,riffle.engine.apply_transition,choice));
}catch (e22643){var err = e22643;
console.log(err);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.cst$kw$running_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$error,err], 0));
}});

var ufv___22698 = schema.utils.use_fn_validation;
var output_schema22647_22699 = schema.core.Any;
var input_schema22648_22700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22649_22701 = schema.core.checker(input_schema22648_22700);
var output_checker22650_22702 = schema.core.checker(output_schema22647_22699);
/**
 * Inputs: [data owner]
 */
riffle.app.player = ((function (ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function riffle$app$player(G__22651,G__22652){
var validate__16887__auto__ = ufv___22698.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22651,G__22652], null);
var temp__4657__auto___22704 = (input_checker22649_22701.cljs$core$IFn$_invoke$arity$1 ? input_checker22649_22701.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22703) : input_checker22649_22701.call(null,args__16888__auto___22703));
if(cljs.core.truth_(temp__4657__auto___22704)){
var error__16889__auto___22705 = temp__4657__auto___22704;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22705], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22648_22700,cljs.core.cst$kw$value,args__16888__auto___22703,cljs.core.cst$kw$error,error__16889__auto___22705], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var data = G__22651;
var owner = G__22652;
while(true){
if(typeof riffle.app.t_riffle$app22674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
riffle.app.t_riffle$app22674 = (function (G__22652,owner,G__22651,data,input_checker22649,input_schema22648,validate__16887__auto__,output_checker22650,output_schema22647,ufv__,player,meta22675){
this.G__22652 = G__22652;
this.owner = owner;
this.G__22651 = G__22651;
this.data = data;
this.input_checker22649 = input_checker22649;
this.input_schema22648 = input_schema22648;
this.validate__16887__auto__ = validate__16887__auto__;
this.output_checker22650 = output_checker22650;
this.output_schema22647 = output_schema22647;
this.ufv__ = ufv__;
this.player = player;
this.meta22675 = meta22675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (_22676,meta22675__$1){
var self__ = this;
var _22676__$1 = this;
return (new riffle.app.t_riffle$app22674(self__.G__22652,self__.owner,self__.G__22651,self__.data,self__.input_checker22649,self__.input_schema22648,self__.validate__16887__auto__,self__.output_checker22650,self__.output_schema22647,self__.ufv__,self__.player,meta22675__$1));
});})(validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

riffle.app.t_riffle$app22674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (_22676){
var self__ = this;
var _22676__$1 = this;
return self__.meta22675;
});})(validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

riffle.app.t_riffle$app22674.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22674.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (_){
var self__ = this;
var ___$1 = this;
return "player";
});})(validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

riffle.app.t_riffle$app22674.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22674.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22677 = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(self__.data);
var map__22677__$1 = ((((!((map__22677 == null)))?((((map__22677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22677):map__22677);
var player__$1 = map__22677__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,cljs.core.cst$kw$state);
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,cljs.core.cst$kw$running_QMARK_);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts([cljs.core.str("player "),cljs.core.str((cljs.core.truth_(running_QMARK_)?"running":"stopped"))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "controls"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(running_QMARK_)?(function (){var G__22679 = ({"className": "stop-button", "onClick": om_tools.dom.format_opts(((function (map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,riffle.app.stop);
});})(map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
)});
var G__22680 = "Stop";
return React.DOM.button(G__22679,G__22680);
})():(function (){var G__22681 = ({"className": "play-button", "onClick": om_tools.dom.format_opts(((function (map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,((function (map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (p1__22644_SHARP_){
return riffle.app.play(p1__22644_SHARP_,cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(self__.data));
});})(map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
);
});})(map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
)});
var G__22682 = "Play";
return React.DOM.button(G__22681,G__22682);
})())],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "content"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function riffle$app$player_$_iter__22683(s__22684){
return (new cljs.core.LazySeq(null,((function (map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (){
var s__22684__$1 = s__22684;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22684__$1);
if(temp__4657__auto__){
var s__22684__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22684__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22684__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22686 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22685 = (0);
while(true){
if((i__22685 < size__7183__auto__)){
var paragraph = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22685);
cljs.core.chunk_append(b__22686,om_tools.dom.element(React.DOM.p,paragraph,cljs.core.PersistentVector.EMPTY));

var G__22706 = (i__22685 + (1));
i__22685 = G__22706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22686),riffle$app$player_$_iter__22683(cljs.core.chunk_rest(s__22684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22686),null);
}
} else {
var paragraph = cljs.core.first(s__22684__$2);
return cljs.core.cons(om_tools.dom.element(React.DOM.p,paragraph,cljs.core.PersistentVector.EMPTY),riffle$app$player_$_iter__22683(cljs.core.rest(s__22684__$2)));
}
} else {
return null;
}
break;
}
});})(map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
,null,null));
});})(map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;
return iter__7184__auto__(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(state));
})()],null)))),(cljs.core.truth_(running_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,({"className": "choices"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function riffle$app$player_$_iter__22689(s__22690){
return (new cljs.core.LazySeq(null,((function (map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (){
var s__22690__$1 = s__22690;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22690__$1);
if(temp__4657__auto__){
var s__22690__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22690__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22690__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22692 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22691 = (0);
while(true){
if((i__22691 < size__7183__auto__)){
var choice = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22691);
cljs.core.chunk_append(b__22692,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({"className": "choice"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"onClick": om_tools.dom.format_opts(((function (i__22691,choice,c__7182__auto__,size__7183__auto__,b__22692,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,((function (i__22691,choice,c__7182__auto__,size__7183__auto__,b__22692,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (p1__22645_SHARP_){
return riffle.app.choose(p1__22645_SHARP_,choice);
});})(i__22691,choice,c__7182__auto__,size__7183__auto__,b__22692,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
);
});})(i__22691,choice,c__7182__auto__,size__7183__auto__,b__22692,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.engine.choice_text(choice)],null))))],null)))));

var G__22707 = (i__22691 + (1));
i__22691 = G__22707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22692),riffle$app$player_$_iter__22689(cljs.core.chunk_rest(s__22690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22692),null);
}
} else {
var choice = cljs.core.first(s__22690__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({"className": "choice"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"onClick": om_tools.dom.format_opts(((function (choice,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$player,((function (choice,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (p1__22645_SHARP_){
return riffle.app.choose(p1__22645_SHARP_,choice);
});})(choice,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
);
});})(choice,s__22690__$2,temp__4657__auto__,map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[riffle.engine.choice_text(choice)],null))))],null)))),riffle$app$player_$_iter__22689(cljs.core.rest(s__22690__$2)));
}
} else {
return null;
}
break;
}
});})(map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
,null,null));
});})(map__22677,map__22677__$1,player__$1,state,running_QMARK_,___$1,validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;
return iter__7184__auto__(cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(state));
})()],null)))):null),(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(player__$1))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "error"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(player__$1).message],null)))):null)],null))));
});})(validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

riffle.app.t_riffle$app22674.getBasis = ((function (validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__22652,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__22651,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_checker22649,cljs.core.cst$sym$input_DASH_schema22648,cljs.core.cst$sym$validate__16887__auto__,cljs.core.cst$sym$output_DASH_checker22650,cljs.core.cst$sym$output_DASH_schema22647,cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$player,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22647,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22648], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$meta22675], null);
});})(validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

riffle.app.t_riffle$app22674.cljs$lang$type = true;

riffle.app.t_riffle$app22674.cljs$lang$ctorStr = "riffle.app/t_riffle$app22674";

riffle.app.t_riffle$app22674.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22674");
});})(validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

riffle.app.__GT_t_riffle$app22674 = ((function (validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702){
return (function riffle$app$player_$___GT_t_riffle$app22674(G__22652__$1,owner__$1,G__22651__$1,data__$1,input_checker22649__$1,input_schema22648__$1,validate__16887__auto____$1,output_checker22650__$1,output_schema22647__$1,ufv____$1,player__$1,meta22675){
return (new riffle.app.t_riffle$app22674(G__22652__$1,owner__$1,G__22651__$1,data__$1,input_checker22649__$1,input_schema22648__$1,validate__16887__auto____$1,output_checker22650__$1,output_schema22647__$1,ufv____$1,player__$1,meta22675));
});})(validate__16887__auto__,ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

}

return (new riffle.app.t_riffle$app22674(G__22652,owner,G__22651,data,input_checker22649_22701,input_schema22648_22700,validate__16887__auto__,output_checker22650_22702,output_schema22647_22699,ufv___22698,riffle$app$player,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22708 = (output_checker22650_22702.cljs$core$IFn$_invoke$arity$1 ? output_checker22650_22702.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22650_22702.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22708)){
var error__16889__auto___22709 = temp__4657__auto___22708;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22709], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22647_22699,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22709], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22698,output_schema22647_22699,input_schema22648_22700,input_checker22649_22701,output_checker22650_22702))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.player),schema.core.make_fn_schema(output_schema22647_22699,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22648_22700], null)));

riffle.app.__GT_player = (function riffle$app$__GT_player(var_args){
var args22695 = [];
var len__7479__auto___22710 = arguments.length;
var i__7480__auto___22711 = (0);
while(true){
if((i__7480__auto___22711 < len__7479__auto___22710)){
args22695.push((arguments[i__7480__auto___22711]));

var G__22712 = (i__7480__auto___22711 + (1));
i__7480__auto___22711 = G__22712;
continue;
} else {
}
break;
}

var G__22697 = args22695.length;
switch (G__22697) {
case 1:
return riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22695.length)].join('')));

}
});

riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.player,cursor__21753__auto__);
});

riffle.app.__GT_player.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22646){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.player,cursor__21753__auto__,m22646);
});

riffle.app.__GT_player.cljs$lang$maxFixedArity = 2;


var ufv___22734 = schema.utils.use_fn_validation;
var output_schema22715_22735 = schema.core.Any;
var input_schema22716_22736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker22717_22737 = schema.core.checker(input_schema22716_22736);
var output_checker22718_22738 = schema.core.checker(output_schema22715_22735);
/**
 * Inputs: [data owner]
 */
riffle.app.app = ((function (ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function riffle$app$app(G__22719,G__22720){
var validate__16887__auto__ = ufv___22734.get_cell();
if(cljs.core.truth_(validate__16887__auto__)){
var args__16888__auto___22739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22719,G__22720], null);
var temp__4657__auto___22740 = (input_checker22717_22737.cljs$core$IFn$_invoke$arity$1 ? input_checker22717_22737.cljs$core$IFn$_invoke$arity$1(args__16888__auto___22739) : input_checker22717_22737.call(null,args__16888__auto___22739));
if(cljs.core.truth_(temp__4657__auto___22740)){
var error__16889__auto___22741 = temp__4657__auto___22740;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22741], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema22716_22736,cljs.core.cst$kw$value,args__16888__auto___22739,cljs.core.cst$kw$error,error__16889__auto___22741], null));
} else {
}
} else {
}

var o__16890__auto__ = (function (){var data = G__22719;
var owner = G__22720;
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
riffle.app.t_riffle$app22726 = (function (owner,data,G__22719,output_checker22718,input_schema22716,G__22720,input_checker22717,output_schema22715,validate__16887__auto__,app,ufv__,meta22727){
this.owner = owner;
this.data = data;
this.G__22719 = G__22719;
this.output_checker22718 = output_checker22718;
this.input_schema22716 = input_schema22716;
this.G__22720 = G__22720;
this.input_checker22717 = input_checker22717;
this.output_schema22715 = output_schema22715;
this.validate__16887__auto__ = validate__16887__auto__;
this.app = app;
this.ufv__ = ufv__;
this.meta22727 = meta22727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
riffle.app.t_riffle$app22726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function (_22728,meta22727__$1){
var self__ = this;
var _22728__$1 = this;
return (new riffle.app.t_riffle$app22726(self__.owner,self__.data,self__.G__22719,self__.output_checker22718,self__.input_schema22716,self__.G__22720,self__.input_checker22717,self__.output_schema22715,self__.validate__16887__auto__,self__.app,self__.ufv__,meta22727__$1));
});})(validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

riffle.app.t_riffle$app22726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function (_22728){
var self__ = this;
var _22728__$1 = this;
return self__.meta22727;
});})(validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

riffle.app.t_riffle$app22726.prototype.om$core$IDisplayName$ = true;

riffle.app.t_riffle$app22726.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

riffle.app.t_riffle$app22726.prototype.om$core$IRender$ = true;

riffle.app.t_riffle$app22726.prototype.om$core$IRender$render$arity$1 = ((function (validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.editor,cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(self__.data)),om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.player,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$program,riffle.editor.current_program(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "debug", "style": ({"position": "fixed", "right": (0), "top": (0)})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__22729 = ({"onClick": om_tools.dom.format_opts(((function (___$1,validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function (){
return localStorage.removeItem("program");
});})(___$1,validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
)});
var G__22730 = "Clear localStorage";
return React.DOM.button(G__22729,G__22730);
})()],null))))],null))));
});})(validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

riffle.app.t_riffle$app22726.getBasis = ((function (validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__22719,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker22718,cljs.core.cst$sym$input_DASH_schema22716,cljs.core.with_meta(cljs.core.cst$sym$G__22720,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker22717,cljs.core.cst$sym$output_DASH_schema22715,cljs.core.cst$sym$validate__16887__auto__,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema22715,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema22716], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta22727], null);
});})(validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

riffle.app.t_riffle$app22726.cljs$lang$type = true;

riffle.app.t_riffle$app22726.cljs$lang$ctorStr = "riffle.app/t_riffle$app22726";

riffle.app.t_riffle$app22726.cljs$lang$ctorPrWriter = ((function (validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"riffle.app/t_riffle$app22726");
});})(validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

riffle.app.__GT_t_riffle$app22726 = ((function (validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738){
return (function riffle$app$app_$___GT_t_riffle$app22726(owner__$1,data__$1,G__22719__$1,output_checker22718__$1,input_schema22716__$1,G__22720__$1,input_checker22717__$1,output_schema22715__$1,validate__16887__auto____$1,app__$1,ufv____$1,meta22727){
return (new riffle.app.t_riffle$app22726(owner__$1,data__$1,G__22719__$1,output_checker22718__$1,input_schema22716__$1,G__22720__$1,input_checker22717__$1,output_schema22715__$1,validate__16887__auto____$1,app__$1,ufv____$1,meta22727));
});})(validate__16887__auto__,ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

}

return (new riffle.app.t_riffle$app22726(owner,data,G__22719,output_checker22718_22738,input_schema22716_22736,G__22720,input_checker22717_22737,output_schema22715_22735,validate__16887__auto__,riffle$app$app,ufv___22734,null));
break;
}
})();
if(cljs.core.truth_(validate__16887__auto__)){
var temp__4657__auto___22742 = (output_checker22718_22738.cljs$core$IFn$_invoke$arity$1 ? output_checker22718_22738.cljs$core$IFn$_invoke$arity$1(o__16890__auto__) : output_checker22718_22738.call(null,o__16890__auto__));
if(cljs.core.truth_(temp__4657__auto___22742)){
var error__16889__auto___22743 = temp__4657__auto___22742;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16889__auto___22743], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema22715_22735,cljs.core.cst$kw$value,o__16890__auto__,cljs.core.cst$kw$error,error__16889__auto___22743], null));
} else {
}
} else {
}

return o__16890__auto__;
});})(ufv___22734,output_schema22715_22735,input_schema22716_22736,input_checker22717_22737,output_checker22718_22738))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(riffle.app.app),schema.core.make_fn_schema(output_schema22715_22735,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22716_22736], null)));

riffle.app.__GT_app = (function riffle$app$__GT_app(var_args){
var args22731 = [];
var len__7479__auto___22744 = arguments.length;
var i__7480__auto___22745 = (0);
while(true){
if((i__7480__auto___22745 < len__7479__auto___22744)){
args22731.push((arguments[i__7480__auto___22745]));

var G__22746 = (i__7480__auto___22745 + (1));
i__7480__auto___22745 = G__22746;
continue;
} else {
}
break;
}

var G__22733 = args22731.length;
switch (G__22733) {
case 1:
return riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22731.length)].join('')));

}
});

riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21753__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(riffle.app.app,cursor__21753__auto__);
});

riffle.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21753__auto__,m22714){
return om.core.build.cljs$core$IFn$_invoke$arity$3(riffle.app.app,cursor__21753__auto__,m22714);
});

riffle.app.__GT_app.cljs$lang$maxFixedArity = 2;

om.core.root(riffle.app.app,riffle.app.app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,document.getElementById("app"),cljs.core.cst$kw$tx_DASH_listen,(function (p__22748,_){
var map__22749 = p__22748;
var map__22749__$1 = ((((!((map__22749 == null)))?((((map__22749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22749):map__22749);
var old_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22749__$1,cljs.core.cst$kw$old_DASH_state);
var new_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22749__$1,cljs.core.cst$kw$new_DASH_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(new_state))){
return null;
} else {
return riffle.editor.save_editor_state_BANG_(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(new_state));
}
})], null));
