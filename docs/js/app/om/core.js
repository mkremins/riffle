// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.display_name[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.display_name["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.init_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.init_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.should_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto__.call(null,this$,next_props,next_state));
} else {
var m__7068__auto____$1 = (om.core.should_update["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_mount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.will_mount["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.did_mount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.did_mount["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_unmount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto__.call(null,this$,next_props,next_state));
} else {
var m__7068__auto____$1 = (om.core.will_update["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.did_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__7068__auto__.call(null,this$,prev_props,prev_state));
} else {
var m__7068__auto____$1 = (om.core.did_update["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__7068__auto____$1.call(null,this$,prev_props,prev_state));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_receive_props[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__7068__auto__.call(null,this$,next_props));
} else {
var m__7068__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__7068__auto____$1.call(null,this$,next_props));
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.render["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render_props[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__7068__auto__.call(null,this$,props,state));
} else {
var m__7068__auto____$1 = (om.core.render_props["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__7068__auto____$1.call(null,this$,props,state));
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__7068__auto__.call(null,this$,state));
} else {
var m__7068__auto____$1 = (om.core.render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,state) : m__7068__auto____$1.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$5 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__7068__auto__.call(null,this$,cursor,korks,f,tag));
} else {
var m__7068__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__7068__auto____$1.call(null,this$,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args21123 = [];
var len__7479__auto___21126 = arguments.length;
var i__7480__auto___21127 = (0);
while(true){
if((i__7480__auto___21127 < len__7479__auto___21126)){
args21123.push((arguments[i__7480__auto___21127]));

var G__21128 = (i__7480__auto___21127 + (1));
i__7480__auto___21127 = G__21128;
continue;
} else {
}
break;
}

var G__21125 = args21123.length;
switch (G__21125) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21123.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto__.call(null,this$,ks));
} else {
var m__7068__auto____$1 = (om.core._get_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args21130 = [];
var len__7479__auto___21133 = arguments.length;
var i__7480__auto___21134 = (0);
while(true){
if((i__7480__auto___21134 < len__7479__auto___21133)){
args21130.push((arguments[i__7480__auto___21134]));

var G__21135 = (i__7480__auto___21134 + (1));
i__7480__auto___21134 = G__21135;
continue;
} else {
}
break;
}

var G__21132 = args21130.length;
switch (G__21132) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21130.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto__.call(null,this$,ks));
} else {
var m__7068__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args21137 = [];
var len__7479__auto___21140 = arguments.length;
var i__7480__auto___21141 = (0);
while(true){
if((i__7480__auto___21141 < len__7479__auto___21140)){
args21137.push((arguments[i__7480__auto___21141]));

var G__21142 = (i__7480__auto___21141 + (1));
i__7480__auto___21141 = G__21142;
continue;
} else {
}
break;
}

var G__21139 = args21137.length;
switch (G__21139) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21137.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__7068__auto__.call(null,this$,val,render));
} else {
var m__7068__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__7068__auto____$1.call(null,this$,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__7068__auto__.call(null,this$,ks,val,render));
} else {
var m__7068__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__7068__auto____$1.call(null,this$,ks,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_queue[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_queue["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto__.call(null,this$,c));
} else {
var m__7068__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._value[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__7068__auto__.call(null,x));
} else {
var m__7068__auto____$1 = (om.core._value["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__7068__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._path[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto__.call(null,cursor));
} else {
var m__7068__auto____$1 = (om.core._path["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto__.call(null,cursor));
} else {
var m__7068__auto____$1 = (om.core._state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args21144 = [];
var len__7479__auto___21147 = arguments.length;
var i__7480__auto___21148 = (0);
while(true){
if((i__7480__auto___21148 < len__7479__auto___21147)){
args21144.push((arguments[i__7480__auto___21148]));

var G__21149 = (i__7480__auto___21148 + (1));
i__7480__auto___21148 = G__21149;
continue;
} else {
}
break;
}

var G__21146 = args21144.length;
switch (G__21146) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21144.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__7067__auto__ = (((value == null))?null:value);
var m__7068__auto__ = (om.core._to_cursor[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__7068__auto__.call(null,value,state));
} else {
var m__7068__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(value,state) : m__7068__auto____$1.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__7067__auto__ = (((value == null))?null:value);
var m__7068__auto__ = (om.core._to_cursor[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__7068__auto__.call(null,value,state,path));
} else {
var m__7068__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__7068__auto____$1.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._derive[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__7068__auto__.call(null,cursor,derived,state,path));
} else {
var m__7068__auto____$1 = (om.core._derive["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__7068__auto____$1.call(null,cursor,derived,state,path));
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._transact_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__7068__auto__.call(null,cursor,korks,f,tag));
} else {
var m__7068__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__7068__auto____$1.call(null,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._listen_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__7068__auto__.call(null,x,key,tx_listen));
} else {
var m__7068__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__7068__auto____$1.call(null,x,key,tx_listen));
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(x,key) : m__7068__auto__.call(null,x,key));
} else {
var m__7068__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(x,key) : m__7068__auto____$1.call(null,x,key));
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._notify_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__7068__auto__.call(null,x,tx_data,root_cursor));
} else {
var m__7068__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__7068__auto____$1.call(null,x,tx_data,root_cursor));
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__7068__auto__.call(null,this$,id,p,val));
} else {
var m__7068__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__7068__auto____$1.call(null,this$,id,p,val));
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto__.call(null,this$,id,p));
} else {
var m__7068__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__7068__auto__.call(null,this$,id));
} else {
var m__7068__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,id) : m__7068__auto____$1.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_property[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto__.call(null,this$,id,p));
} else {
var m__7068__auto____$1 = (om.core._get_property["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._root_key[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto__.call(null,cursor));
} else {
var m__7068__auto____$1 = (om.core._root_key["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._adapt[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,other) : m__7068__auto__.call(null,this$,other));
} else {
var m__7068__auto____$1 = (om.core._adapt["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,other) : m__7068__auto____$1.call(null,this$,other));
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto__.call(null,this$,c));
} else {
var m__7068__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto__.call(null,this$,c));
} else {
var m__7068__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_deps[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_deps["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(om.core.path(cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state)))?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.cst$kw$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path),cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))], null);
if(!((tag == null))){
var G__21155 = cursor;
var G__21156 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.cst$kw$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__21155,G__21156) : om.core.notify_STAR_.call(null,G__21155,G__21156));
} else {
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args21159 = [];
var len__7479__auto___21163 = arguments.length;
var i__7480__auto___21164 = (0);
while(true){
if((i__7480__auto___21164 < len__7479__auto___21163)){
args21159.push((arguments[i__7480__auto___21164]));

var G__21165 = (i__7480__auto___21164 + (1));
i__7480__auto___21164 = G__21165;
continue;
} else {
}
break;
}

var G__21161 = args21159.length;
switch (G__21161) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21159.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__21162 = (x.props["__om_cursor"]);
if(cljs.core.seq(korks__$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__21162,korks__$1);
} else {
return G__21162;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args21167 = [];
var len__7479__auto___21170 = arguments.length;
var i__7480__auto___21171 = (0);
while(true){
if((i__7480__auto___21171 < len__7479__auto___21170)){
args21167.push((arguments[i__7480__auto___21171]));

var G__21172 = (i__7480__auto___21171 + (1));
i__7480__auto___21171 = G__21172;
continue;
} else {
}
break;
}

var G__21169 = args21167.length;
switch (G__21169) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21167.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args21174 = [];
var len__7479__auto___21177 = arguments.length;
var i__7480__auto___21178 = (0);
while(true){
if((i__7480__auto___21178 < len__7479__auto___21177)){
args21174.push((arguments[i__7480__auto___21178]));

var G__21179 = (i__7480__auto___21178 + (1));
i__7480__auto___21178 = G__21179;
continue;
} else {
}
break;
}

var G__21176 = args21174.length;
switch (G__21176) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21174.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__21182 = state;
(G__21182["__om_prev_state"] = (state["__om_state"]));

(G__21182["__om_state"] = pending_state);

(G__21182["__om_pending_state"] = null);

return G__21182;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args21183 = [];
var len__7479__auto___21186 = arguments.length;
var i__7480__auto___21187 = (0);
while(true){
if((i__7480__auto___21187 < len__7479__auto___21186)){
args21183.push((arguments[i__7480__auto___21187]));

var G__21188 = (i__7480__auto___21187 + (1));
i__7480__auto___21187 = G__21188;
continue;
} else {
}
break;
}

var G__21185 = args21183.length;
switch (G__21185) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21183.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__6404__auto__ = props;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__6404__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__21191 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21191) : cljs.core.deref.call(null,G__21191));
})(),om.core.path(ref),cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = om.core.path(ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref_state) : cljs.core.deref.call(null,ref_state)),ref_path,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.cst$kw$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(ref_val_SINGLEQUOTE_,ref_state,ref_path) : om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path)));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$isOmComponent,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$getDisplayName,cljs.core.cst$kw$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_21214 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": prev_props, "isOmComponent": true})),(function (){var or__6404__auto__ = (state_21214["__om_prev_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state_21214["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

var temp__4657__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__21195 = cljs.core.seq(refs);
var chunk__21196 = null;
var count__21197 = (0);
var i__21198 = (0);
while(true){
if((i__21198 < count__21197)){
var ref = chunk__21196.cljs$core$IIndexed$_nth$arity$2(null,i__21198);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__21215 = seq__21195;
var G__21216 = chunk__21196;
var G__21217 = count__21197;
var G__21218 = (i__21198 + (1));
seq__21195 = G__21215;
chunk__21196 = G__21216;
count__21197 = G__21217;
i__21198 = G__21218;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__21195);
if(temp__4657__auto____$1){
var seq__21195__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21195__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__21195__$1);
var G__21219 = cljs.core.chunk_rest(seq__21195__$1);
var G__21220 = c__7215__auto__;
var G__21221 = cljs.core.count(c__7215__auto__);
var G__21222 = (0);
seq__21195 = G__21219;
chunk__21196 = G__21220;
count__21197 = G__21221;
i__21198 = G__21222;
continue;
} else {
var ref = cljs.core.first(seq__21195__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__21223 = cljs.core.next(seq__21195__$1);
var G__21224 = null;
var G__21225 = (0);
var G__21226 = (0);
seq__21195 = G__21223;
chunk__21196 = G__21224;
count__21197 = G__21225;
i__21198 = G__21226;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c))){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__6392__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__6392__auto__){
return cljs.core.some(((function (and__6392__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__21192_SHARP_){
return om.core.ref_changed_QMARK_(p1__21192_SHARP_);
});})(and__6392__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_21201 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_21202 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_21203 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_21204 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_21205 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c))){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21205;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21204;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21203;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21202;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_21201;
}}),(function (next_props,next_state){
var this$ = this;
var c_21227 = om.core.children(this$);
if(((!((c_21227 == null)))?(((false) || (c_21227.om$core$IWillUpdate$))?true:(((!c_21227.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_21227):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_21227))){
var state_21228 = this$.state;
om.core.will_update(c_21227,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__6404__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__6404__auto__ = id;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id)], 0))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c))){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_21229 = om.core.children(this$);
if(((!((c_21229 == null)))?(((false) || (c_21229.om$core$IWillMount$))?true:(((!c_21229.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_21229):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_21229))){
om.core.will_mount(c_21229);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x21231 = obj;
x21231.om$core$ISetState$ = true;

x21231.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21231){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__6392__auto__ = !((app_state == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x21231))
;

x21231.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21231){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__6392__auto__ = !((app_state == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x21231))
;

x21231.om$core$IGetRenderState$ = true;

x21231.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21231){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x21231))
;

x21231.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21231){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21231))
;

x21231.om$core$IGetState$ = true;

x21231.om$core$IGetState$_get_state$arity$1 = ((function (x21231){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__6404__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state["__om_state"]);
}
});})(x21231))
;

x21231.om$core$IGetState$_get_state$arity$2 = ((function (x21231){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21231))
;

return x21231;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (function (){var G__21234 = (om.core.get_node.cljs$core$IFn$_invoke$arity$1 ? om.core.get_node.cljs$core$IFn$_invoke$arity$1(x) : om.core.get_node.call(null,x));
var G__21235 = "reactid";
return goog.dom.dataset.get(G__21234,G__21235);
})();
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),spath);
if(cljs.core.truth_(cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.cst$kw$previous_DASH_state,cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.cst$kw$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.cst$kw$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.cst$kw$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__6404__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__6404__auto__ = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null)], 0));
(props["__om_init_state"] = null);

return ({"__om_id": om_id});
}),cljs.core.array_seq([cljs.core.cst$kw$componentDidMount,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$),cljs.core.cst$kw$render_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_21246 = om.core.children(this$);
if(((!((c_21246 == null)))?(((false) || (c_21246.om$core$IWillMount$))?true:(((!c_21246.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_21246):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_21246))){
om.core.will_mount(c_21246);
} else {
}

if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : om.core.mounted_QMARK_.call(null,this$)))){
return om.core.no_local_merge_pending_state(this$);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4657__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__21240 = cljs.core.seq(refs);
var chunk__21241 = null;
var count__21242 = (0);
var i__21243 = (0);
while(true){
if((i__21243 < count__21242)){
var ref = chunk__21241.cljs$core$IIndexed$_nth$arity$2(null,i__21243);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__21247 = seq__21240;
var G__21248 = chunk__21241;
var G__21249 = count__21242;
var G__21250 = (i__21243 + (1));
seq__21240 = G__21247;
chunk__21241 = G__21248;
count__21242 = G__21249;
i__21243 = G__21250;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__21240);
if(temp__4657__auto____$1){
var seq__21240__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21240__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__21240__$1);
var G__21251 = cljs.core.chunk_rest(seq__21240__$1);
var G__21252 = c__7215__auto__;
var G__21253 = cljs.core.count(c__7215__auto__);
var G__21254 = (0);
seq__21240 = G__21251;
chunk__21241 = G__21252;
count__21242 = G__21253;
i__21243 = G__21254;
continue;
} else {
var ref = cljs.core.first(seq__21240__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__21255 = cljs.core.next(seq__21240__$1);
var G__21256 = null;
var G__21257 = (0);
var G__21258 = (0);
seq__21240 = G__21255;
chunk__21241 = G__21256;
count__21242 = G__21257;
i__21243 = G__21258;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_21259 = this$.props;
var c_21260 = om.core.children(this$);
if(((!((c_21260 == null)))?(((false) || (c_21260.om$core$IWillUpdate$))?true:(((!c_21260.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_21260):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_21260))){
var state_21261 = this$.state;
om.core.will_update(c_21260,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.cst$kw$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_21262 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": prev_props, "isOmComponent": true})),(function (){var or__6404__auto__ = cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x21266 = cljs.core.clj__GT_js(methods$);
x21266.om$core$ISetState$ = true;

x21266.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21266){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__6392__auto__ = !((gstate == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x21266))
;

x21266.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21266){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x21266))
;

x21266.om$core$IGetRenderState$ = true;

x21266.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21266){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21267 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21267) : cljs.core.deref.call(null,G__21267));
})(),spath);
});})(x21266))
;

x21266.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21266){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21266))
;

x21266.om$core$IGetState$ = true;

x21266.om$core$IGetState$_get_state$arity$1 = ((function (x21266){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : om.core.mounted_QMARK_.call(null,this$__$1)))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21268 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21268) : cljs.core.deref.call(null,G__21268));
})(),spath);
var or__6404__auto__ = cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x21266))
;

x21266.om$core$IGetState$_get_state$arity$2 = ((function (x21266){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21266))
;

return x21266;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_(om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__21272){
var vec__21273 = p__21272;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21273,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__21276 = null;
var G__21276__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21276__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21276 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21276__2.call(this,self__,k);
case 3:
return G__21276__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21276.cljs$core$IFn$_invoke$arity$2 = G__21276__2;
G__21276.cljs$core$IFn$_invoke$arity$3 = G__21276__3;
return G__21276;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args21271){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21271)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__21278 = null;
var G__21278__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21278__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21278 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21278__2.call(this,self__,k);
case 3:
return G__21278__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21278.cljs$core$IFn$_invoke$arity$2 = G__21278__2;
G__21278.cljs$core$IFn$_invoke$arity$3 = G__21278__3;
return G__21278;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args21277){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21277)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x21280 = cljs.core.clone(val);
x21280.cljs$core$IDeref$ = true;

x21280.cljs$core$IDeref$_deref$arity$1 = ((function (x21280){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path,cljs.core.cst$kw$om$core_SLASH_invalid);
});})(x21280))
;

x21280.om$core$ICursor$ = true;

x21280.om$core$ICursor$_path$arity$1 = ((function (x21280){
return (function (_){
var ___$1 = this;
return path;
});})(x21280))
;

x21280.om$core$ICursor$_state$arity$1 = ((function (x21280){
return (function (_){
var ___$1 = this;
return state;
});})(x21280))
;

x21280.om$core$ITransact$ = true;

x21280.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21280){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x21280))
;

x21280.cljs$core$IEquiv$ = true;

x21280.cljs$core$IEquiv$_equiv$arity$2 = ((function (x21280){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x21280))
;

return x21280;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args21281 = [];
var len__7479__auto___21286 = arguments.length;
var i__7480__auto___21287 = (0);
while(true){
if((i__7480__auto___21287 < len__7479__auto___21286)){
args21281.push((arguments[i__7480__auto___21287]));

var G__21288 = (i__7480__auto___21287 + (1));
i__7480__auto___21287 = G__21288;
continue;
} else {
}
break;
}

var G__21283 = args21281.length;
switch (G__21283) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21281.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__21292 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21292) : cljs.core.atom.call(null,G__21292));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x21298 = cljs.core.clone(x);
x21298.cljs$core$ICloneable$ = true;

x21298.cljs$core$ICloneable$_clone$arity$1 = ((function (x21298){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x21298))
;

x21298.om$core$IAdapt$ = true;

x21298.om$core$IAdapt$_adapt$arity$2 = ((function (x21298){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x21298))
;

x21298.om$core$ICursorDerive$ = true;

x21298.om$core$ICursorDerive$_derive$arity$4 = ((function (x21298){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21298))
;

x21298.om$core$ITransact$ = true;

x21298.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21298){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$1,korks,f) : om.core.commit_BANG_.call(null,cursor__$1,korks,f));

return om.core._refresh_deps_BANG_(parent);
});})(x21298))
;

return x21298;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(cursor))){
return cursor;
} else {
var path = om.core.path(cursor);
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__21307 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21307) : cljs.core.atom.call(null,G__21307));
})())),path);
var x21308 = cljs.core.clone(cursor);
x21308.om$core$ICursorDerive$ = true;

x21308.om$core$ICursorDerive$_derive$arity$4 = ((function (x21308,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21308,path,storage))
;

x21308.om$core$IOmRef$ = true;

x21308.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x21308,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)),c);
});})(x21308,path,storage))
;

x21308.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x21308,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)));
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x21308,path,storage))
;

x21308.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x21308,path,storage){
return (function (_){
var ___$1 = this;
var seq__21309 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage))));
var chunk__21310 = null;
var count__21311 = (0);
var i__21312 = (0);
while(true){
if((i__21312 < count__21311)){
var c = chunk__21310.cljs$core$IIndexed$_nth$arity$2(null,i__21312);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__21313 = seq__21309;
var G__21314 = chunk__21310;
var G__21315 = count__21311;
var G__21316 = (i__21312 + (1));
seq__21309 = G__21313;
chunk__21310 = G__21314;
count__21311 = G__21315;
i__21312 = G__21316;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__21309);
if(temp__4657__auto__){
var seq__21309__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21309__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__21309__$1);
var G__21317 = cljs.core.chunk_rest(seq__21309__$1);
var G__21318 = c__7215__auto__;
var G__21319 = cljs.core.count(c__7215__auto__);
var G__21320 = (0);
seq__21309 = G__21317;
chunk__21310 = G__21318;
count__21311 = G__21319;
i__21312 = G__21320;
continue;
} else {
var c = cljs.core.first(seq__21309__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__21321 = cljs.core.next(seq__21309__$1);
var G__21322 = null;
var G__21323 = (0);
var G__21324 = (0);
seq__21309 = G__21321;
chunk__21310 = G__21322;
count__21311 = G__21323;
i__21312 = G__21324;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21308,path,storage))
;

x21308.om$core$IOmRef$_get_deps$arity$1 = ((function (x21308,path,storage){
return (function (_){
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage));
});})(x21308,path,storage))
;

x21308.om$core$ITransact$ = true;

x21308.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21308,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$2,korks,f) : om.core.commit_BANG_.call(null,cursor__$2,korks,f));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x21308,path,storage))
;

return x21308;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__6404__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_(ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__21325 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21325) : cljs.core.atom.call(null,G__21325));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__6404__auto__ = state.om$render$T;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args21326 = [];
var len__7479__auto___21333 = arguments.length;
var i__7480__auto___21334 = (0);
while(true){
if((i__7480__auto___21334 < len__7479__auto___21333)){
args21326.push((arguments[i__7480__auto___21334]));

var G__21335 = (i__7480__auto___21334 + (1));
i__7480__auto___21334 = G__21335;
continue;
} else {
}
break;
}

var G__21328 = args21326.length;
switch (G__21328) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21326.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__21329_21337 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)));
var chunk__21330_21338 = null;
var count__21331_21339 = (0);
var i__21332_21340 = (0);
while(true){
if((i__21332_21340 < count__21331_21339)){
var f_21341 = chunk__21330_21338.cljs$core$IIndexed$_nth$arity$2(null,i__21332_21340);
(f_21341.cljs$core$IFn$_invoke$arity$0 ? f_21341.cljs$core$IFn$_invoke$arity$0() : f_21341.call(null));

var G__21342 = seq__21329_21337;
var G__21343 = chunk__21330_21338;
var G__21344 = count__21331_21339;
var G__21345 = (i__21332_21340 + (1));
seq__21329_21337 = G__21342;
chunk__21330_21338 = G__21343;
count__21331_21339 = G__21344;
i__21332_21340 = G__21345;
continue;
} else {
var temp__4657__auto___21346 = cljs.core.seq(seq__21329_21337);
if(temp__4657__auto___21346){
var seq__21329_21347__$1 = temp__4657__auto___21346;
if(cljs.core.chunked_seq_QMARK_(seq__21329_21347__$1)){
var c__7215__auto___21348 = cljs.core.chunk_first(seq__21329_21347__$1);
var G__21349 = cljs.core.chunk_rest(seq__21329_21347__$1);
var G__21350 = c__7215__auto___21348;
var G__21351 = cljs.core.count(c__7215__auto___21348);
var G__21352 = (0);
seq__21329_21337 = G__21349;
chunk__21330_21338 = G__21350;
count__21331_21339 = G__21351;
i__21332_21340 = G__21352;
continue;
} else {
var f_21353 = cljs.core.first(seq__21329_21347__$1);
(f_21353.cljs$core$IFn$_invoke$arity$0 ? f_21353.cljs$core$IFn$_invoke$arity$0() : f_21353.call(null));

var G__21354 = cljs.core.next(seq__21329_21347__$1);
var G__21355 = null;
var G__21356 = (0);
var G__21357 = (0);
seq__21329_21337 = G__21354;
chunk__21330_21338 = G__21355;
count__21331_21339 = G__21356;
i__21332_21340 = G__21357;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = (function (){var G__21358 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21358) : cljs.core.atom.call(null,G__21358));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__6404__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,x));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x));
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$descriptor,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$react_DASH_key,null,cljs.core.cst$kw$key,null,cljs.core.cst$kw$init_DASH_state,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$key_DASH_fn,null,cljs.core.cst$kw$opts,null,cljs.core.cst$kw$om$core_SLASH_index,null,cljs.core.cst$kw$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args21369 = [];
var len__7479__auto___21373 = arguments.length;
var i__7480__auto___21374 = (0);
while(true){
if((i__7480__auto___21374 < len__7479__auto___21373)){
args21369.push((arguments[i__7480__auto___21374]));

var G__21375 = (i__7480__auto___21374 + (1));
i__7480__auto___21374 = G__21375;
continue;
} else {
}
break;
}

var G__21371 = args21369.length;
switch (G__21371) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21369.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_21377 = (function (){var or__6404__auto__ = descriptor;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_21377 === goog.object.get(f,"om$tag"))))){
var factory_21378 = (function (){var G__21372 = React.createClass(rdesc_21377);
return React.createFactory(G__21372);
})();
goog.object.set(f,"om$descriptor",factory_21378);

goog.object.set(f,"om$tag",rdesc_21377);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args21379 = [];
var len__7479__auto___21382 = arguments.length;
var i__7480__auto___21383 = (0);
while(true){
if((i__7480__auto___21383 < len__7479__auto___21382)){
args21379.push((arguments[i__7480__auto___21383]));

var G__21384 = (i__7480__auto___21383 + (1));
i__7480__auto___21383 = G__21384;
continue;
} else {
}
break;
}

var G__21381 = args21379.length;
switch (G__21381) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21379.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args21386 = [];
var len__7479__auto___21393 = arguments.length;
var i__7480__auto___21394 = (0);
while(true){
if((i__7480__auto___21394 < len__7479__auto___21393)){
args21386.push((arguments[i__7480__auto___21394]));

var G__21395 = (i__7480__auto___21394 + (1));
i__7480__auto___21394 = G__21395;
continue;
} else {
}
break;
}

var G__21388 = args21386.length;
switch (G__21388) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21386.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__21389 = ({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
});
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__21389) : ctor.call(null,G__21389));
} else {
var map__21390 = m;
var map__21390__$1 = ((((!((map__21390 == null)))?((((map__21390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21390):map__21390);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.cst$kw$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.cst$kw$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.cst$kw$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.cst$kw$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.cst$kw$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else {
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(cursor_SINGLEQUOTE_) : key_fn.call(null,cursor_SINGLEQUOTE_)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$react_DASH_key)
));
var shared = (function (){var or__6404__auto__ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.cst$kw$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__21392 = ({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__21390,map__21390__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__21390,map__21390__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__21390,map__21390__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__21390,map__21390__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__6404__auto__ = rkey;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__21392) : ctor.call(null,G__21392));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args21397 = [];
var len__7479__auto___21400 = arguments.length;
var i__7480__auto___21401 = (0);
while(true){
if((i__7480__auto___21401 < len__7479__auto___21400)){
args21397.push((arguments[i__7480__auto___21401]));

var G__21402 = (i__7480__auto___21401 + (1));
i__7480__auto___21401 = G__21402;
continue;
} else {
}
break;
}

var G__21399 = args21397.length;
switch (G__21399) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21397.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m) : om.core._STAR_instrument_STAR_.call(null,f,x,m));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args21404 = [];
var len__7479__auto___21407 = arguments.length;
var i__7480__auto___21408 = (0);
while(true){
if((i__7480__auto___21408 < len__7479__auto___21407)){
args21404.push((arguments[i__7480__auto___21408]));

var G__21409 = (i__7480__auto___21408 + (1));
i__7480__auto___21408 = G__21409;
continue;
} else {
}
break;
}

var G__21406 = args21404.length;
switch (G__21406) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21404.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_(om.core.INotify,state))){
} else {
var properties_21441 = (function (){var G__21427 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21427) : cljs.core.atom.call(null,G__21427));
})();
var listeners_21442 = (function (){var G__21428 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21428) : cljs.core.atom.call(null,G__21428));
})();
var render_queue_21443 = (function (){var G__21429 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21429) : cljs.core.atom.call(null,G__21429));
})();
var x21430_21444 = state;
x21430_21444.om$core$IRootProperties$ = true;

x21430_21444.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_21441,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_21441,cljs.core.dissoc,id,k);
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_21441,cljs.core.dissoc,id);
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$IRootProperties$_get_property$arity$3 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(properties_21441) : cljs.core.deref.call(null,properties_21441)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$INotify$ = true;

x21430_21444.om$core$INotify$_listen_BANG_$arity$3 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_21442,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_21442,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$INotify$_notify_BANG_$arity$3 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__21431_21445 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(listeners_21442) : cljs.core.deref.call(null,listeners_21442)));
var chunk__21432_21446 = null;
var count__21433_21447 = (0);
var i__21434_21448 = (0);
while(true){
if((i__21434_21448 < count__21433_21447)){
var vec__21435_21449 = chunk__21432_21446.cljs$core$IIndexed$_nth$arity$2(null,i__21434_21448);
var __21450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21435_21449,(0),null);
var f_21451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21435_21449,(1),null);
(f_21451.cljs$core$IFn$_invoke$arity$2 ? f_21451.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_21451.call(null,tx_data,root_cursor));

var G__21452 = seq__21431_21445;
var G__21453 = chunk__21432_21446;
var G__21454 = count__21433_21447;
var G__21455 = (i__21434_21448 + (1));
seq__21431_21445 = G__21452;
chunk__21432_21446 = G__21453;
count__21433_21447 = G__21454;
i__21434_21448 = G__21455;
continue;
} else {
var temp__4657__auto___21456 = cljs.core.seq(seq__21431_21445);
if(temp__4657__auto___21456){
var seq__21431_21457__$1 = temp__4657__auto___21456;
if(cljs.core.chunked_seq_QMARK_(seq__21431_21457__$1)){
var c__7215__auto___21458 = cljs.core.chunk_first(seq__21431_21457__$1);
var G__21459 = cljs.core.chunk_rest(seq__21431_21457__$1);
var G__21460 = c__7215__auto___21458;
var G__21461 = cljs.core.count(c__7215__auto___21458);
var G__21462 = (0);
seq__21431_21445 = G__21459;
chunk__21432_21446 = G__21460;
count__21433_21447 = G__21461;
i__21434_21448 = G__21462;
continue;
} else {
var vec__21438_21463 = cljs.core.first(seq__21431_21457__$1);
var __21464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21438_21463,(0),null);
var f_21465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21438_21463,(1),null);
(f_21465.cljs$core$IFn$_invoke$arity$2 ? f_21465.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_21465.call(null,tx_data,root_cursor));

var G__21466 = cljs.core.next(seq__21431_21457__$1);
var G__21467 = null;
var G__21468 = (0);
var G__21469 = (0);
seq__21431_21445 = G__21466;
chunk__21432_21446 = G__21467;
count__21433_21447 = G__21468;
i__21434_21448 = G__21469;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$IRenderQueue$ = true;

x21430_21444.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (this$){
var this$__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_21443) : cljs.core.deref.call(null,render_queue_21443));
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_21443) : cljs.core.deref.call(null,render_queue_21443)),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_21443,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

x21430_21444.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x21430_21444,properties_21441,listeners_21442,render_queue_21443){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_21443,cljs.core.empty);
});})(x21430_21444,properties_21441,listeners_21442,render_queue_21443))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x21475 = cljs.core.clone(cursor);
x21475.cljs$core$ICloneable$ = true;

x21475.cljs$core$ICloneable$_clone$arity$1 = ((function (x21475){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x21475))
;

x21475.om$core$IAdapt$ = true;

x21475.om$core$IAdapt$_adapt$arity$2 = ((function (x21475){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x21475))
;

x21475.om$core$IRootKey$ = true;

x21475.om$core$IRootKey$_root_key$arity$1 = ((function (x21475){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x21475))
;

return x21475;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__21476){
var map__21569 = p__21476;
var map__21569__$1 = ((((!((map__21569 == null)))?((((map__21569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21569):map__21569);
var options = map__21569__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,cljs.core.cst$kw$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,cljs.core.cst$kw$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,cljs.core.cst$kw$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,cljs.core.cst$kw$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,cljs.core.cst$kw$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,cljs.core.cst$kw$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,cljs.core.cst$kw$raf);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__21661 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots));
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__21661,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__21661,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value)))?value:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.atom.call(null,value)));
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__6404__auto__ = adapt;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$target,cljs.core.array_seq([cljs.core.cst$kw$tx_DASH_listen,cljs.core.cst$kw$path,cljs.core.cst$kw$adapt,cljs.core.cst$kw$raf], 0));
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state__$1) : cljs.core.deref.call(null,state__$1));
var cursor = (function (){var G__21615 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__21615) : adapt__$1.call(null,G__21615));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root))){
} else {
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,true);

var c_21662 = om.dom.render((function (){var _STAR_descriptor_STAR_21616 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_21617 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_21618 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_21619 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21619;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21618;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21617;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21616;
}})(),target);
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c_21662) : cljs.core.reset_BANG_.call(null,ret,c_21662));
} else {
}
}

var queue_21663 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_21663)){
} else {
var seq__21620_21664 = cljs.core.seq(queue_21663);
var chunk__21621_21665 = null;
var count__21622_21666 = (0);
var i__21623_21667 = (0);
while(true){
if((i__21623_21667 < count__21622_21666)){
var c_21668 = chunk__21621_21665.cljs$core$IIndexed$_nth$arity$2(null,i__21623_21667);
if(cljs.core.truth_(c_21668.isMounted())){
var temp__4657__auto___21669 = (c_21668.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___21669)){
var next_props_21670 = temp__4657__auto___21669;
(c_21668.props["__om_cursor"] = next_props_21670);

(c_21668.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6404__auto__ = !((function (){var G__21625 = om.core.children(c_21668);
if(!((G__21625 == null))){
if((false) || (G__21625.om$core$ICheckState$)){
return true;
} else {
if((!G__21625.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21625);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21625);
}
})());
if(or__6404__auto__){
return or__6404__auto__;
} else {
return c_21668.shouldComponentUpdate(c_21668.props,c_21668.state);
}
})())){
c_21668.forceUpdate();
} else {
}
} else {
}

var G__21671 = seq__21620_21664;
var G__21672 = chunk__21621_21665;
var G__21673 = count__21622_21666;
var G__21674 = (i__21623_21667 + (1));
seq__21620_21664 = G__21671;
chunk__21621_21665 = G__21672;
count__21622_21666 = G__21673;
i__21623_21667 = G__21674;
continue;
} else {
var temp__4657__auto___21675 = cljs.core.seq(seq__21620_21664);
if(temp__4657__auto___21675){
var seq__21620_21676__$1 = temp__4657__auto___21675;
if(cljs.core.chunked_seq_QMARK_(seq__21620_21676__$1)){
var c__7215__auto___21677 = cljs.core.chunk_first(seq__21620_21676__$1);
var G__21678 = cljs.core.chunk_rest(seq__21620_21676__$1);
var G__21679 = c__7215__auto___21677;
var G__21680 = cljs.core.count(c__7215__auto___21677);
var G__21681 = (0);
seq__21620_21664 = G__21678;
chunk__21621_21665 = G__21679;
count__21622_21666 = G__21680;
i__21623_21667 = G__21681;
continue;
} else {
var c_21682 = cljs.core.first(seq__21620_21676__$1);
if(cljs.core.truth_(c_21682.isMounted())){
var temp__4657__auto___21683__$1 = (c_21682.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___21683__$1)){
var next_props_21684 = temp__4657__auto___21683__$1;
(c_21682.props["__om_cursor"] = next_props_21684);

(c_21682.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6404__auto__ = !((function (){var G__21627 = om.core.children(c_21682);
if(!((G__21627 == null))){
if((false) || (G__21627.om$core$ICheckState$)){
return true;
} else {
if((!G__21627.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21627);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21627);
}
})());
if(or__6404__auto__){
return or__6404__auto__;
} else {
return c_21682.shouldComponentUpdate(c_21682.props,c_21682.state);
}
})())){
c_21682.forceUpdate();
} else {
}
} else {
}

var G__21685 = cljs.core.next(seq__21620_21676__$1);
var G__21686 = null;
var G__21687 = (0);
var G__21688 = (0);
seq__21620_21664 = G__21685;
chunk__21621_21665 = G__21686;
count__21622_21666 = G__21687;
i__21623_21667 = G__21688;
continue;
}
} else {
}
}
break;
}
}

var _refs_21689 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core._refs) : cljs.core.deref.call(null,om.core._refs));
if(cljs.core.empty_QMARK_(_refs_21689)){
} else {
var seq__21628_21690 = cljs.core.seq(_refs_21689);
var chunk__21629_21691 = null;
var count__21630_21692 = (0);
var i__21631_21693 = (0);
while(true){
if((i__21631_21693 < count__21630_21692)){
var vec__21632_21694 = chunk__21629_21691.cljs$core$IIndexed$_nth$arity$2(null,i__21631_21693);
var path_21695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632_21694,(0),null);
var cs_21696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632_21694,(1),null);
var cs_21697__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_21696) : cljs.core.deref.call(null,cs_21696));
var seq__21635_21698 = cljs.core.seq(cs_21697__$1);
var chunk__21636_21699 = null;
var count__21637_21700 = (0);
var i__21638_21701 = (0);
while(true){
if((i__21638_21701 < count__21637_21700)){
var vec__21639_21702 = chunk__21636_21699.cljs$core$IIndexed$_nth$arity$2(null,i__21638_21701);
var id_21703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21639_21702,(0),null);
var c_21704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21639_21702,(1),null);
if(cljs.core.truth_(c_21704.shouldComponentUpdate(c_21704.props,c_21704.state))){
c_21704.forceUpdate();
} else {
}

var G__21705 = seq__21635_21698;
var G__21706 = chunk__21636_21699;
var G__21707 = count__21637_21700;
var G__21708 = (i__21638_21701 + (1));
seq__21635_21698 = G__21705;
chunk__21636_21699 = G__21706;
count__21637_21700 = G__21707;
i__21638_21701 = G__21708;
continue;
} else {
var temp__4657__auto___21709 = cljs.core.seq(seq__21635_21698);
if(temp__4657__auto___21709){
var seq__21635_21710__$1 = temp__4657__auto___21709;
if(cljs.core.chunked_seq_QMARK_(seq__21635_21710__$1)){
var c__7215__auto___21711 = cljs.core.chunk_first(seq__21635_21710__$1);
var G__21712 = cljs.core.chunk_rest(seq__21635_21710__$1);
var G__21713 = c__7215__auto___21711;
var G__21714 = cljs.core.count(c__7215__auto___21711);
var G__21715 = (0);
seq__21635_21698 = G__21712;
chunk__21636_21699 = G__21713;
count__21637_21700 = G__21714;
i__21638_21701 = G__21715;
continue;
} else {
var vec__21642_21716 = cljs.core.first(seq__21635_21710__$1);
var id_21717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21642_21716,(0),null);
var c_21718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21642_21716,(1),null);
if(cljs.core.truth_(c_21718.shouldComponentUpdate(c_21718.props,c_21718.state))){
c_21718.forceUpdate();
} else {
}

var G__21719 = cljs.core.next(seq__21635_21710__$1);
var G__21720 = null;
var G__21721 = (0);
var G__21722 = (0);
seq__21635_21698 = G__21719;
chunk__21636_21699 = G__21720;
count__21637_21700 = G__21721;
i__21638_21701 = G__21722;
continue;
}
} else {
}
}
break;
}

var G__21723 = seq__21628_21690;
var G__21724 = chunk__21629_21691;
var G__21725 = count__21630_21692;
var G__21726 = (i__21631_21693 + (1));
seq__21628_21690 = G__21723;
chunk__21629_21691 = G__21724;
count__21630_21692 = G__21725;
i__21631_21693 = G__21726;
continue;
} else {
var temp__4657__auto___21727 = cljs.core.seq(seq__21628_21690);
if(temp__4657__auto___21727){
var seq__21628_21728__$1 = temp__4657__auto___21727;
if(cljs.core.chunked_seq_QMARK_(seq__21628_21728__$1)){
var c__7215__auto___21729 = cljs.core.chunk_first(seq__21628_21728__$1);
var G__21730 = cljs.core.chunk_rest(seq__21628_21728__$1);
var G__21731 = c__7215__auto___21729;
var G__21732 = cljs.core.count(c__7215__auto___21729);
var G__21733 = (0);
seq__21628_21690 = G__21730;
chunk__21629_21691 = G__21731;
count__21630_21692 = G__21732;
i__21631_21693 = G__21733;
continue;
} else {
var vec__21645_21734 = cljs.core.first(seq__21628_21728__$1);
var path_21735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21645_21734,(0),null);
var cs_21736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21645_21734,(1),null);
var cs_21737__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_21736) : cljs.core.deref.call(null,cs_21736));
var seq__21648_21738 = cljs.core.seq(cs_21737__$1);
var chunk__21649_21739 = null;
var count__21650_21740 = (0);
var i__21651_21741 = (0);
while(true){
if((i__21651_21741 < count__21650_21740)){
var vec__21652_21742 = chunk__21649_21739.cljs$core$IIndexed$_nth$arity$2(null,i__21651_21741);
var id_21743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652_21742,(0),null);
var c_21744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652_21742,(1),null);
if(cljs.core.truth_(c_21744.shouldComponentUpdate(c_21744.props,c_21744.state))){
c_21744.forceUpdate();
} else {
}

var G__21745 = seq__21648_21738;
var G__21746 = chunk__21649_21739;
var G__21747 = count__21650_21740;
var G__21748 = (i__21651_21741 + (1));
seq__21648_21738 = G__21745;
chunk__21649_21739 = G__21746;
count__21650_21740 = G__21747;
i__21651_21741 = G__21748;
continue;
} else {
var temp__4657__auto___21749__$1 = cljs.core.seq(seq__21648_21738);
if(temp__4657__auto___21749__$1){
var seq__21648_21750__$1 = temp__4657__auto___21749__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21648_21750__$1)){
var c__7215__auto___21751 = cljs.core.chunk_first(seq__21648_21750__$1);
var G__21752 = cljs.core.chunk_rest(seq__21648_21750__$1);
var G__21753 = c__7215__auto___21751;
var G__21754 = cljs.core.count(c__7215__auto___21751);
var G__21755 = (0);
seq__21648_21738 = G__21752;
chunk__21649_21739 = G__21753;
count__21650_21740 = G__21754;
i__21651_21741 = G__21755;
continue;
} else {
var vec__21655_21756 = cljs.core.first(seq__21648_21750__$1);
var id_21757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21655_21756,(0),null);
var c_21758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21655_21756,(1),null);
if(cljs.core.truth_(c_21758.shouldComponentUpdate(c_21758.props,c_21758.state))){
c_21758.forceUpdate();
} else {
}

var G__21759 = cljs.core.next(seq__21648_21750__$1);
var G__21760 = null;
var G__21761 = (0);
var G__21762 = (0);
seq__21648_21738 = G__21759;
chunk__21649_21739 = G__21760;
count__21650_21740 = G__21761;
i__21651_21741 = G__21762;
continue;
}
} else {
}
}
break;
}

var G__21763 = cljs.core.next(seq__21628_21728__$1);
var G__21764 = null;
var G__21765 = (0);
var G__21766 = (0);
seq__21628_21690 = G__21763;
chunk__21629_21691 = G__21764;
count__21630_21692 = G__21765;
i__21631_21693 = G__21766;
continue;
}
} else {
}
}
break;
}
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$ignore,false);

if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__21658 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__21659 = (16);
return setTimeout(G__21658,G__21659);
} else {
var G__21660 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__21660);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21569,map__21569__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots)),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args21769 = [];
var len__7479__auto___21772 = arguments.length;
var i__7480__auto___21773 = (0);
while(true){
if((i__7480__auto___21773 < len__7479__auto___21772)){
args21769.push((arguments[i__7480__auto___21773]));

var G__21774 = (i__7480__auto___21773 + (1));
i__7480__auto___21773 = G__21774;
continue;
} else {
}
break;
}

var G__21771 = args21769.length;
switch (G__21771) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21769.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args21776 = [];
var len__7479__auto___21779 = arguments.length;
var i__7480__auto___21780 = (0);
while(true){
if((i__7480__auto___21780 < len__7479__auto___21779)){
args21776.push((arguments[i__7480__auto___21780]));

var G__21781 = (i__7480__auto___21780 + (1));
i__7480__auto___21780 = G__21781;
continue;
} else {
}
break;
}

var G__21778 = args21776.length;
switch (G__21778) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21776.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor)))?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path(cursor);
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.cst$kw$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args21785 = [];
var len__7479__auto___21789 = arguments.length;
var i__7480__auto___21790 = (0);
while(true){
if((i__7480__auto___21790 < len__7479__auto___21789)){
args21785.push((arguments[i__7480__auto___21790]));

var G__21791 = (i__7480__auto___21790 + (1));
i__7480__auto___21790 = G__21791;
continue;
} else {
}
break;
}

var G__21787 = args21785.length;
switch (G__21787) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21785.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__21788 = owner.refs;
var G__21788__$1 = (((G__21788 == null))?null:(G__21788[name]));
if((G__21788__$1 == null)){
return null;
} else {
return G__21788__$1.getDOMNode();
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__21794 = owner.refs;
if((G__21794 == null)){
return null;
} else {
return goog.object.get(G__21794,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args21795 = [];
var len__7479__auto___21798 = arguments.length;
var i__7480__auto___21799 = (0);
while(true){
if((i__7480__auto___21799 < len__7479__auto___21798)){
args21795.push((arguments[i__7480__auto___21799]));

var G__21800 = (i__7480__auto___21799 + (1));
i__7480__auto___21799 = G__21800;
continue;
} else {
}
break;
}

var G__21797 = args21795.length;
switch (G__21797) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21795.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args21802 = [];
var len__7479__auto___21805 = arguments.length;
var i__7480__auto___21806 = (0);
while(true){
if((i__7480__auto___21806 < len__7479__auto___21805)){
args21802.push((arguments[i__7480__auto___21806]));

var G__21807 = (i__7480__auto___21806 + (1));
i__7480__auto___21806 = G__21807;
continue;
} else {
}
break;
}

var G__21804 = args21802.length;
switch (G__21804) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21802.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args21809 = [];
var len__7479__auto___21814 = arguments.length;
var i__7480__auto___21815 = (0);
while(true){
if((i__7480__auto___21815 < len__7479__auto___21814)){
args21809.push((arguments[i__7480__auto___21815]));

var G__21816 = (i__7480__auto___21815 + (1));
i__7480__auto___21815 = G__21816;
continue;
} else {
}
break;
}

var G__21811 = args21809.length;
switch (G__21811) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21809.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__21812 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21812) : f.call(null,G__21812));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__21813 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21813) : f.call(null,G__21813));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args21818 = [];
var len__7479__auto___21823 = arguments.length;
var i__7480__auto___21824 = (0);
while(true){
if((i__7480__auto___21824 < len__7479__auto___21823)){
args21818.push((arguments[i__7480__auto___21824]));

var G__21825 = (i__7480__auto___21824 + (1));
i__7480__auto___21824 = G__21825;
continue;
} else {
}
break;
}

var G__21820 = args21818.length;
switch (G__21820) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21818.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__21821 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21821) : f.call(null,G__21821));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__21822 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21822) : f.call(null,G__21822));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args21827 = [];
var len__7479__auto___21830 = arguments.length;
var i__7480__auto___21831 = (0);
while(true){
if((i__7480__auto___21831 < len__7479__auto___21830)){
args21827.push((arguments[i__7480__auto___21831]));

var G__21832 = (i__7480__auto___21831 + (1));
i__7480__auto___21831 = G__21832;
continue;
} else {
}
break;
}

var G__21829 = args21827.length;
switch (G__21829) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21827.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

