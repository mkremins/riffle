// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__6404__auto__ = (cljs.core.count(attr) < (5));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var G__15831 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__15831) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case(attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__15834 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__15834) {
case "class":
return cljs.core.cst$kw$className;

break;
case "for":
return cljs.core.cst$kw$htmlFor;

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(opt_val) : om_tools.dom.format_opts.call(null,opt_val));
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15840){
var vec__15841 = p__15840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15841,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__6404__auto__ = React.isValidElement;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_(opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__15847 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15847,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15847,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args15850 = [];
var len__7479__auto___16475 = arguments.length;
var i__7480__auto___16476 = (0);
while(true){
if((i__7480__auto___16476 < len__7479__auto___16475)){
args15850.push((arguments[i__7480__auto___16476]));

var G__16477 = (i__7480__auto___16476 + (1));
i__7480__auto___16476 = G__16477;
continue;
} else {
}
break;
}

var G__15854 = args15850.length;
switch (G__15854) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15850.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.a,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq15851){
var G__15852 = cljs.core.first(seq15851);
var seq15851__$1 = cljs.core.next(seq15851);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__15852,seq15851__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args15855 = [];
var len__7479__auto___16479 = arguments.length;
var i__7480__auto___16480 = (0);
while(true){
if((i__7480__auto___16480 < len__7479__auto___16479)){
args15855.push((arguments[i__7480__auto___16480]));

var G__16481 = (i__7480__auto___16480 + (1));
i__7480__auto___16480 = G__16481;
continue;
} else {
}
break;
}

var G__15859 = args15855.length;
switch (G__15859) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15855.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq15856){
var G__15857 = cljs.core.first(seq15856);
var seq15856__$1 = cljs.core.next(seq15856);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__15857,seq15856__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args15860 = [];
var len__7479__auto___16483 = arguments.length;
var i__7480__auto___16484 = (0);
while(true){
if((i__7480__auto___16484 < len__7479__auto___16483)){
args15860.push((arguments[i__7480__auto___16484]));

var G__16485 = (i__7480__auto___16484 + (1));
i__7480__auto___16484 = G__16485;
continue;
} else {
}
break;
}

var G__15864 = args15860.length;
switch (G__15864) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15860.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.address,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq15861){
var G__15862 = cljs.core.first(seq15861);
var seq15861__$1 = cljs.core.next(seq15861);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__15862,seq15861__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args15865 = [];
var len__7479__auto___16487 = arguments.length;
var i__7480__auto___16488 = (0);
while(true){
if((i__7480__auto___16488 < len__7479__auto___16487)){
args15865.push((arguments[i__7480__auto___16488]));

var G__16489 = (i__7480__auto___16488 + (1));
i__7480__auto___16488 = G__16489;
continue;
} else {
}
break;
}

var G__15869 = args15865.length;
switch (G__15869) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15865.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.area,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq15866){
var G__15867 = cljs.core.first(seq15866);
var seq15866__$1 = cljs.core.next(seq15866);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__15867,seq15866__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args15870 = [];
var len__7479__auto___16491 = arguments.length;
var i__7480__auto___16492 = (0);
while(true){
if((i__7480__auto___16492 < len__7479__auto___16491)){
args15870.push((arguments[i__7480__auto___16492]));

var G__16493 = (i__7480__auto___16492 + (1));
i__7480__auto___16492 = G__16493;
continue;
} else {
}
break;
}

var G__15874 = args15870.length;
switch (G__15874) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15870.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.article,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq15871){
var G__15872 = cljs.core.first(seq15871);
var seq15871__$1 = cljs.core.next(seq15871);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__15872,seq15871__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args15875 = [];
var len__7479__auto___16495 = arguments.length;
var i__7480__auto___16496 = (0);
while(true){
if((i__7480__auto___16496 < len__7479__auto___16495)){
args15875.push((arguments[i__7480__auto___16496]));

var G__16497 = (i__7480__auto___16496 + (1));
i__7480__auto___16496 = G__16497;
continue;
} else {
}
break;
}

var G__15879 = args15875.length;
switch (G__15879) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15875.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.aside,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq15876){
var G__15877 = cljs.core.first(seq15876);
var seq15876__$1 = cljs.core.next(seq15876);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__15877,seq15876__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args15880 = [];
var len__7479__auto___16499 = arguments.length;
var i__7480__auto___16500 = (0);
while(true){
if((i__7480__auto___16500 < len__7479__auto___16499)){
args15880.push((arguments[i__7480__auto___16500]));

var G__16501 = (i__7480__auto___16500 + (1));
i__7480__auto___16500 = G__16501;
continue;
} else {
}
break;
}

var G__15884 = args15880.length;
switch (G__15884) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15880.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.audio,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq15881){
var G__15882 = cljs.core.first(seq15881);
var seq15881__$1 = cljs.core.next(seq15881);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__15882,seq15881__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args15885 = [];
var len__7479__auto___16503 = arguments.length;
var i__7480__auto___16504 = (0);
while(true){
if((i__7480__auto___16504 < len__7479__auto___16503)){
args15885.push((arguments[i__7480__auto___16504]));

var G__16505 = (i__7480__auto___16504 + (1));
i__7480__auto___16504 = G__16505;
continue;
} else {
}
break;
}

var G__15889 = args15885.length;
switch (G__15889) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15885.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.b,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq15886){
var G__15887 = cljs.core.first(seq15886);
var seq15886__$1 = cljs.core.next(seq15886);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__15887,seq15886__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args15890 = [];
var len__7479__auto___16507 = arguments.length;
var i__7480__auto___16508 = (0);
while(true){
if((i__7480__auto___16508 < len__7479__auto___16507)){
args15890.push((arguments[i__7480__auto___16508]));

var G__16509 = (i__7480__auto___16508 + (1));
i__7480__auto___16508 = G__16509;
continue;
} else {
}
break;
}

var G__15894 = args15890.length;
switch (G__15894) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15890.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.base,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq15891){
var G__15892 = cljs.core.first(seq15891);
var seq15891__$1 = cljs.core.next(seq15891);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__15892,seq15891__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args15895 = [];
var len__7479__auto___16511 = arguments.length;
var i__7480__auto___16512 = (0);
while(true){
if((i__7480__auto___16512 < len__7479__auto___16511)){
args15895.push((arguments[i__7480__auto___16512]));

var G__16513 = (i__7480__auto___16512 + (1));
i__7480__auto___16512 = G__16513;
continue;
} else {
}
break;
}

var G__15899 = args15895.length;
switch (G__15899) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15895.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq15896){
var G__15897 = cljs.core.first(seq15896);
var seq15896__$1 = cljs.core.next(seq15896);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__15897,seq15896__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args15900 = [];
var len__7479__auto___16515 = arguments.length;
var i__7480__auto___16516 = (0);
while(true){
if((i__7480__auto___16516 < len__7479__auto___16515)){
args15900.push((arguments[i__7480__auto___16516]));

var G__16517 = (i__7480__auto___16516 + (1));
i__7480__auto___16516 = G__16517;
continue;
} else {
}
break;
}

var G__15904 = args15900.length;
switch (G__15904) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15900.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq15901){
var G__15902 = cljs.core.first(seq15901);
var seq15901__$1 = cljs.core.next(seq15901);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__15902,seq15901__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args15905 = [];
var len__7479__auto___16519 = arguments.length;
var i__7480__auto___16520 = (0);
while(true){
if((i__7480__auto___16520 < len__7479__auto___16519)){
args15905.push((arguments[i__7480__auto___16520]));

var G__16521 = (i__7480__auto___16520 + (1));
i__7480__auto___16520 = G__16521;
continue;
} else {
}
break;
}

var G__15909 = args15905.length;
switch (G__15909) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15905.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.big,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq15906){
var G__15907 = cljs.core.first(seq15906);
var seq15906__$1 = cljs.core.next(seq15906);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__15907,seq15906__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args15910 = [];
var len__7479__auto___16523 = arguments.length;
var i__7480__auto___16524 = (0);
while(true){
if((i__7480__auto___16524 < len__7479__auto___16523)){
args15910.push((arguments[i__7480__auto___16524]));

var G__16525 = (i__7480__auto___16524 + (1));
i__7480__auto___16524 = G__16525;
continue;
} else {
}
break;
}

var G__15914 = args15910.length;
switch (G__15914) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15910.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq15911){
var G__15912 = cljs.core.first(seq15911);
var seq15911__$1 = cljs.core.next(seq15911);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__15912,seq15911__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args15915 = [];
var len__7479__auto___16527 = arguments.length;
var i__7480__auto___16528 = (0);
while(true){
if((i__7480__auto___16528 < len__7479__auto___16527)){
args15915.push((arguments[i__7480__auto___16528]));

var G__16529 = (i__7480__auto___16528 + (1));
i__7480__auto___16528 = G__16529;
continue;
} else {
}
break;
}

var G__15919 = args15915.length;
switch (G__15919) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15915.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.body,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq15916){
var G__15917 = cljs.core.first(seq15916);
var seq15916__$1 = cljs.core.next(seq15916);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__15917,seq15916__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args15920 = [];
var len__7479__auto___16531 = arguments.length;
var i__7480__auto___16532 = (0);
while(true){
if((i__7480__auto___16532 < len__7479__auto___16531)){
args15920.push((arguments[i__7480__auto___16532]));

var G__16533 = (i__7480__auto___16532 + (1));
i__7480__auto___16532 = G__16533;
continue;
} else {
}
break;
}

var G__15924 = args15920.length;
switch (G__15924) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15920.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.br,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq15921){
var G__15922 = cljs.core.first(seq15921);
var seq15921__$1 = cljs.core.next(seq15921);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__15922,seq15921__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args15925 = [];
var len__7479__auto___16535 = arguments.length;
var i__7480__auto___16536 = (0);
while(true){
if((i__7480__auto___16536 < len__7479__auto___16535)){
args15925.push((arguments[i__7480__auto___16536]));

var G__16537 = (i__7480__auto___16536 + (1));
i__7480__auto___16536 = G__16537;
continue;
} else {
}
break;
}

var G__15929 = args15925.length;
switch (G__15929) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15925.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.button,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq15926){
var G__15927 = cljs.core.first(seq15926);
var seq15926__$1 = cljs.core.next(seq15926);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__15927,seq15926__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args15930 = [];
var len__7479__auto___16539 = arguments.length;
var i__7480__auto___16540 = (0);
while(true){
if((i__7480__auto___16540 < len__7479__auto___16539)){
args15930.push((arguments[i__7480__auto___16540]));

var G__16541 = (i__7480__auto___16540 + (1));
i__7480__auto___16540 = G__16541;
continue;
} else {
}
break;
}

var G__15934 = args15930.length;
switch (G__15934) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15930.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq15931){
var G__15932 = cljs.core.first(seq15931);
var seq15931__$1 = cljs.core.next(seq15931);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__15932,seq15931__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args15935 = [];
var len__7479__auto___16543 = arguments.length;
var i__7480__auto___16544 = (0);
while(true){
if((i__7480__auto___16544 < len__7479__auto___16543)){
args15935.push((arguments[i__7480__auto___16544]));

var G__16545 = (i__7480__auto___16544 + (1));
i__7480__auto___16544 = G__16545;
continue;
} else {
}
break;
}

var G__15939 = args15935.length;
switch (G__15939) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15935.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.caption,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq15936){
var G__15937 = cljs.core.first(seq15936);
var seq15936__$1 = cljs.core.next(seq15936);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__15937,seq15936__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args15940 = [];
var len__7479__auto___16547 = arguments.length;
var i__7480__auto___16548 = (0);
while(true){
if((i__7480__auto___16548 < len__7479__auto___16547)){
args15940.push((arguments[i__7480__auto___16548]));

var G__16549 = (i__7480__auto___16548 + (1));
i__7480__auto___16548 = G__16549;
continue;
} else {
}
break;
}

var G__15944 = args15940.length;
switch (G__15944) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15940.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.cite,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq15941){
var G__15942 = cljs.core.first(seq15941);
var seq15941__$1 = cljs.core.next(seq15941);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__15942,seq15941__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args15945 = [];
var len__7479__auto___16551 = arguments.length;
var i__7480__auto___16552 = (0);
while(true){
if((i__7480__auto___16552 < len__7479__auto___16551)){
args15945.push((arguments[i__7480__auto___16552]));

var G__16553 = (i__7480__auto___16552 + (1));
i__7480__auto___16552 = G__16553;
continue;
} else {
}
break;
}

var G__15949 = args15945.length;
switch (G__15949) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15945.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.code,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq15946){
var G__15947 = cljs.core.first(seq15946);
var seq15946__$1 = cljs.core.next(seq15946);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__15947,seq15946__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args15950 = [];
var len__7479__auto___16555 = arguments.length;
var i__7480__auto___16556 = (0);
while(true){
if((i__7480__auto___16556 < len__7479__auto___16555)){
args15950.push((arguments[i__7480__auto___16556]));

var G__16557 = (i__7480__auto___16556 + (1));
i__7480__auto___16556 = G__16557;
continue;
} else {
}
break;
}

var G__15954 = args15950.length;
switch (G__15954) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15950.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.col,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq15951){
var G__15952 = cljs.core.first(seq15951);
var seq15951__$1 = cljs.core.next(seq15951);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__15952,seq15951__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args15955 = [];
var len__7479__auto___16559 = arguments.length;
var i__7480__auto___16560 = (0);
while(true){
if((i__7480__auto___16560 < len__7479__auto___16559)){
args15955.push((arguments[i__7480__auto___16560]));

var G__16561 = (i__7480__auto___16560 + (1));
i__7480__auto___16560 = G__16561;
continue;
} else {
}
break;
}

var G__15959 = args15955.length;
switch (G__15959) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15955.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq15956){
var G__15957 = cljs.core.first(seq15956);
var seq15956__$1 = cljs.core.next(seq15956);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__15957,seq15956__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args15960 = [];
var len__7479__auto___16563 = arguments.length;
var i__7480__auto___16564 = (0);
while(true){
if((i__7480__auto___16564 < len__7479__auto___16563)){
args15960.push((arguments[i__7480__auto___16564]));

var G__16565 = (i__7480__auto___16564 + (1));
i__7480__auto___16564 = G__16565;
continue;
} else {
}
break;
}

var G__15964 = args15960.length;
switch (G__15964) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15960.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.data,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq15961){
var G__15962 = cljs.core.first(seq15961);
var seq15961__$1 = cljs.core.next(seq15961);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__15962,seq15961__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args15965 = [];
var len__7479__auto___16567 = arguments.length;
var i__7480__auto___16568 = (0);
while(true){
if((i__7480__auto___16568 < len__7479__auto___16567)){
args15965.push((arguments[i__7480__auto___16568]));

var G__16569 = (i__7480__auto___16568 + (1));
i__7480__auto___16568 = G__16569;
continue;
} else {
}
break;
}

var G__15969 = args15965.length;
switch (G__15969) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15965.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq15966){
var G__15967 = cljs.core.first(seq15966);
var seq15966__$1 = cljs.core.next(seq15966);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__15967,seq15966__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args15970 = [];
var len__7479__auto___16571 = arguments.length;
var i__7480__auto___16572 = (0);
while(true){
if((i__7480__auto___16572 < len__7479__auto___16571)){
args15970.push((arguments[i__7480__auto___16572]));

var G__16573 = (i__7480__auto___16572 + (1));
i__7480__auto___16572 = G__16573;
continue;
} else {
}
break;
}

var G__15974 = args15970.length;
switch (G__15974) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15970.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.dd,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq15971){
var G__15972 = cljs.core.first(seq15971);
var seq15971__$1 = cljs.core.next(seq15971);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__15972,seq15971__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args15975 = [];
var len__7479__auto___16575 = arguments.length;
var i__7480__auto___16576 = (0);
while(true){
if((i__7480__auto___16576 < len__7479__auto___16575)){
args15975.push((arguments[i__7480__auto___16576]));

var G__16577 = (i__7480__auto___16576 + (1));
i__7480__auto___16576 = G__16577;
continue;
} else {
}
break;
}

var G__15979 = args15975.length;
switch (G__15979) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15975.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.del,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq15976){
var G__15977 = cljs.core.first(seq15976);
var seq15976__$1 = cljs.core.next(seq15976);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__15977,seq15976__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args15980 = [];
var len__7479__auto___16579 = arguments.length;
var i__7480__auto___16580 = (0);
while(true){
if((i__7480__auto___16580 < len__7479__auto___16579)){
args15980.push((arguments[i__7480__auto___16580]));

var G__16581 = (i__7480__auto___16580 + (1));
i__7480__auto___16580 = G__16581;
continue;
} else {
}
break;
}

var G__15984 = args15980.length;
switch (G__15984) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15980.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq15981){
var G__15982 = cljs.core.first(seq15981);
var seq15981__$1 = cljs.core.next(seq15981);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__15982,seq15981__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args15985 = [];
var len__7479__auto___16583 = arguments.length;
var i__7480__auto___16584 = (0);
while(true){
if((i__7480__auto___16584 < len__7479__auto___16583)){
args15985.push((arguments[i__7480__auto___16584]));

var G__16585 = (i__7480__auto___16584 + (1));
i__7480__auto___16584 = G__16585;
continue;
} else {
}
break;
}

var G__15989 = args15985.length;
switch (G__15989) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15985.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.div,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq15986){
var G__15987 = cljs.core.first(seq15986);
var seq15986__$1 = cljs.core.next(seq15986);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__15987,seq15986__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args15990 = [];
var len__7479__auto___16587 = arguments.length;
var i__7480__auto___16588 = (0);
while(true){
if((i__7480__auto___16588 < len__7479__auto___16587)){
args15990.push((arguments[i__7480__auto___16588]));

var G__16589 = (i__7480__auto___16588 + (1));
i__7480__auto___16588 = G__16589;
continue;
} else {
}
break;
}

var G__15994 = args15990.length;
switch (G__15994) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15990.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.dl,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq15991){
var G__15992 = cljs.core.first(seq15991);
var seq15991__$1 = cljs.core.next(seq15991);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__15992,seq15991__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args15995 = [];
var len__7479__auto___16591 = arguments.length;
var i__7480__auto___16592 = (0);
while(true){
if((i__7480__auto___16592 < len__7479__auto___16591)){
args15995.push((arguments[i__7480__auto___16592]));

var G__16593 = (i__7480__auto___16592 + (1));
i__7480__auto___16592 = G__16593;
continue;
} else {
}
break;
}

var G__15999 = args15995.length;
switch (G__15999) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15995.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.dt,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq15996){
var G__15997 = cljs.core.first(seq15996);
var seq15996__$1 = cljs.core.next(seq15996);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__15997,seq15996__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args16000 = [];
var len__7479__auto___16595 = arguments.length;
var i__7480__auto___16596 = (0);
while(true){
if((i__7480__auto___16596 < len__7479__auto___16595)){
args16000.push((arguments[i__7480__auto___16596]));

var G__16597 = (i__7480__auto___16596 + (1));
i__7480__auto___16596 = G__16597;
continue;
} else {
}
break;
}

var G__16004 = args16000.length;
switch (G__16004) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16000.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.em,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq16001){
var G__16002 = cljs.core.first(seq16001);
var seq16001__$1 = cljs.core.next(seq16001);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__16002,seq16001__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args16005 = [];
var len__7479__auto___16599 = arguments.length;
var i__7480__auto___16600 = (0);
while(true){
if((i__7480__auto___16600 < len__7479__auto___16599)){
args16005.push((arguments[i__7480__auto___16600]));

var G__16601 = (i__7480__auto___16600 + (1));
i__7480__auto___16600 = G__16601;
continue;
} else {
}
break;
}

var G__16009 = args16005.length;
switch (G__16009) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16005.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.embed,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq16006){
var G__16007 = cljs.core.first(seq16006);
var seq16006__$1 = cljs.core.next(seq16006);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__16007,seq16006__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args16015 = [];
var len__7479__auto___16603 = arguments.length;
var i__7480__auto___16604 = (0);
while(true){
if((i__7480__auto___16604 < len__7479__auto___16603)){
args16015.push((arguments[i__7480__auto___16604]));

var G__16605 = (i__7480__auto___16604 + (1));
i__7480__auto___16604 = G__16605;
continue;
} else {
}
break;
}

var G__16019 = args16015.length;
switch (G__16019) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16015.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq16016){
var G__16017 = cljs.core.first(seq16016);
var seq16016__$1 = cljs.core.next(seq16016);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__16017,seq16016__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args16020 = [];
var len__7479__auto___16607 = arguments.length;
var i__7480__auto___16608 = (0);
while(true){
if((i__7480__auto___16608 < len__7479__auto___16607)){
args16020.push((arguments[i__7480__auto___16608]));

var G__16609 = (i__7480__auto___16608 + (1));
i__7480__auto___16608 = G__16609;
continue;
} else {
}
break;
}

var G__16024 = args16020.length;
switch (G__16024) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16020.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq16021){
var G__16022 = cljs.core.first(seq16021);
var seq16021__$1 = cljs.core.next(seq16021);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__16022,seq16021__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args16025 = [];
var len__7479__auto___16611 = arguments.length;
var i__7480__auto___16612 = (0);
while(true){
if((i__7480__auto___16612 < len__7479__auto___16611)){
args16025.push((arguments[i__7480__auto___16612]));

var G__16613 = (i__7480__auto___16612 + (1));
i__7480__auto___16612 = G__16613;
continue;
} else {
}
break;
}

var G__16029 = args16025.length;
switch (G__16029) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16025.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.figure,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq16026){
var G__16027 = cljs.core.first(seq16026);
var seq16026__$1 = cljs.core.next(seq16026);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__16027,seq16026__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args16030 = [];
var len__7479__auto___16615 = arguments.length;
var i__7480__auto___16616 = (0);
while(true){
if((i__7480__auto___16616 < len__7479__auto___16615)){
args16030.push((arguments[i__7480__auto___16616]));

var G__16617 = (i__7480__auto___16616 + (1));
i__7480__auto___16616 = G__16617;
continue;
} else {
}
break;
}

var G__16034 = args16030.length;
switch (G__16034) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16030.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.footer,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq16031){
var G__16032 = cljs.core.first(seq16031);
var seq16031__$1 = cljs.core.next(seq16031);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__16032,seq16031__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args16035 = [];
var len__7479__auto___16619 = arguments.length;
var i__7480__auto___16620 = (0);
while(true){
if((i__7480__auto___16620 < len__7479__auto___16619)){
args16035.push((arguments[i__7480__auto___16620]));

var G__16621 = (i__7480__auto___16620 + (1));
i__7480__auto___16620 = G__16621;
continue;
} else {
}
break;
}

var G__16039 = args16035.length;
switch (G__16039) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16035.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.form,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq16036){
var G__16037 = cljs.core.first(seq16036);
var seq16036__$1 = cljs.core.next(seq16036);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__16037,seq16036__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args16040 = [];
var len__7479__auto___16623 = arguments.length;
var i__7480__auto___16624 = (0);
while(true){
if((i__7480__auto___16624 < len__7479__auto___16623)){
args16040.push((arguments[i__7480__auto___16624]));

var G__16625 = (i__7480__auto___16624 + (1));
i__7480__auto___16624 = G__16625;
continue;
} else {
}
break;
}

var G__16044 = args16040.length;
switch (G__16044) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16040.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.h1,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq16041){
var G__16042 = cljs.core.first(seq16041);
var seq16041__$1 = cljs.core.next(seq16041);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__16042,seq16041__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args16045 = [];
var len__7479__auto___16627 = arguments.length;
var i__7480__auto___16628 = (0);
while(true){
if((i__7480__auto___16628 < len__7479__auto___16627)){
args16045.push((arguments[i__7480__auto___16628]));

var G__16629 = (i__7480__auto___16628 + (1));
i__7480__auto___16628 = G__16629;
continue;
} else {
}
break;
}

var G__16049 = args16045.length;
switch (G__16049) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16045.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.h2,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq16046){
var G__16047 = cljs.core.first(seq16046);
var seq16046__$1 = cljs.core.next(seq16046);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__16047,seq16046__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args16050 = [];
var len__7479__auto___16631 = arguments.length;
var i__7480__auto___16632 = (0);
while(true){
if((i__7480__auto___16632 < len__7479__auto___16631)){
args16050.push((arguments[i__7480__auto___16632]));

var G__16633 = (i__7480__auto___16632 + (1));
i__7480__auto___16632 = G__16633;
continue;
} else {
}
break;
}

var G__16054 = args16050.length;
switch (G__16054) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16050.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.h3,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq16051){
var G__16052 = cljs.core.first(seq16051);
var seq16051__$1 = cljs.core.next(seq16051);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__16052,seq16051__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args16055 = [];
var len__7479__auto___16635 = arguments.length;
var i__7480__auto___16636 = (0);
while(true){
if((i__7480__auto___16636 < len__7479__auto___16635)){
args16055.push((arguments[i__7480__auto___16636]));

var G__16637 = (i__7480__auto___16636 + (1));
i__7480__auto___16636 = G__16637;
continue;
} else {
}
break;
}

var G__16059 = args16055.length;
switch (G__16059) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16055.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.h4,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq16056){
var G__16057 = cljs.core.first(seq16056);
var seq16056__$1 = cljs.core.next(seq16056);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__16057,seq16056__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args16060 = [];
var len__7479__auto___16639 = arguments.length;
var i__7480__auto___16640 = (0);
while(true){
if((i__7480__auto___16640 < len__7479__auto___16639)){
args16060.push((arguments[i__7480__auto___16640]));

var G__16641 = (i__7480__auto___16640 + (1));
i__7480__auto___16640 = G__16641;
continue;
} else {
}
break;
}

var G__16064 = args16060.length;
switch (G__16064) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16060.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.h5,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq16061){
var G__16062 = cljs.core.first(seq16061);
var seq16061__$1 = cljs.core.next(seq16061);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__16062,seq16061__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args16065 = [];
var len__7479__auto___16643 = arguments.length;
var i__7480__auto___16644 = (0);
while(true){
if((i__7480__auto___16644 < len__7479__auto___16643)){
args16065.push((arguments[i__7480__auto___16644]));

var G__16645 = (i__7480__auto___16644 + (1));
i__7480__auto___16644 = G__16645;
continue;
} else {
}
break;
}

var G__16069 = args16065.length;
switch (G__16069) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16065.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.h6,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq16066){
var G__16067 = cljs.core.first(seq16066);
var seq16066__$1 = cljs.core.next(seq16066);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__16067,seq16066__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args16070 = [];
var len__7479__auto___16647 = arguments.length;
var i__7480__auto___16648 = (0);
while(true){
if((i__7480__auto___16648 < len__7479__auto___16647)){
args16070.push((arguments[i__7480__auto___16648]));

var G__16649 = (i__7480__auto___16648 + (1));
i__7480__auto___16648 = G__16649;
continue;
} else {
}
break;
}

var G__16074 = args16070.length;
switch (G__16074) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16070.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.head,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq16071){
var G__16072 = cljs.core.first(seq16071);
var seq16071__$1 = cljs.core.next(seq16071);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__16072,seq16071__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args16075 = [];
var len__7479__auto___16651 = arguments.length;
var i__7480__auto___16652 = (0);
while(true){
if((i__7480__auto___16652 < len__7479__auto___16651)){
args16075.push((arguments[i__7480__auto___16652]));

var G__16653 = (i__7480__auto___16652 + (1));
i__7480__auto___16652 = G__16653;
continue;
} else {
}
break;
}

var G__16079 = args16075.length;
switch (G__16079) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16075.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.header,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq16076){
var G__16077 = cljs.core.first(seq16076);
var seq16076__$1 = cljs.core.next(seq16076);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__16077,seq16076__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args16080 = [];
var len__7479__auto___16655 = arguments.length;
var i__7480__auto___16656 = (0);
while(true){
if((i__7480__auto___16656 < len__7479__auto___16655)){
args16080.push((arguments[i__7480__auto___16656]));

var G__16657 = (i__7480__auto___16656 + (1));
i__7480__auto___16656 = G__16657;
continue;
} else {
}
break;
}

var G__16084 = args16080.length;
switch (G__16084) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16080.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.hr,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq16081){
var G__16082 = cljs.core.first(seq16081);
var seq16081__$1 = cljs.core.next(seq16081);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__16082,seq16081__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args16085 = [];
var len__7479__auto___16659 = arguments.length;
var i__7480__auto___16660 = (0);
while(true){
if((i__7480__auto___16660 < len__7479__auto___16659)){
args16085.push((arguments[i__7480__auto___16660]));

var G__16661 = (i__7480__auto___16660 + (1));
i__7480__auto___16660 = G__16661;
continue;
} else {
}
break;
}

var G__16089 = args16085.length;
switch (G__16089) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16085.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.html,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq16086){
var G__16087 = cljs.core.first(seq16086);
var seq16086__$1 = cljs.core.next(seq16086);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__16087,seq16086__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args16090 = [];
var len__7479__auto___16663 = arguments.length;
var i__7480__auto___16664 = (0);
while(true){
if((i__7480__auto___16664 < len__7479__auto___16663)){
args16090.push((arguments[i__7480__auto___16664]));

var G__16665 = (i__7480__auto___16664 + (1));
i__7480__auto___16664 = G__16665;
continue;
} else {
}
break;
}

var G__16094 = args16090.length;
switch (G__16094) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16090.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.i,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq16091){
var G__16092 = cljs.core.first(seq16091);
var seq16091__$1 = cljs.core.next(seq16091);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__16092,seq16091__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args16095 = [];
var len__7479__auto___16667 = arguments.length;
var i__7480__auto___16668 = (0);
while(true){
if((i__7480__auto___16668 < len__7479__auto___16667)){
args16095.push((arguments[i__7480__auto___16668]));

var G__16669 = (i__7480__auto___16668 + (1));
i__7480__auto___16668 = G__16669;
continue;
} else {
}
break;
}

var G__16099 = args16095.length;
switch (G__16099) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16095.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq16096){
var G__16097 = cljs.core.first(seq16096);
var seq16096__$1 = cljs.core.next(seq16096);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__16097,seq16096__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args16100 = [];
var len__7479__auto___16671 = arguments.length;
var i__7480__auto___16672 = (0);
while(true){
if((i__7480__auto___16672 < len__7479__auto___16671)){
args16100.push((arguments[i__7480__auto___16672]));

var G__16673 = (i__7480__auto___16672 + (1));
i__7480__auto___16672 = G__16673;
continue;
} else {
}
break;
}

var G__16104 = args16100.length;
switch (G__16104) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16100.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.img,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq16101){
var G__16102 = cljs.core.first(seq16101);
var seq16101__$1 = cljs.core.next(seq16101);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__16102,seq16101__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args16105 = [];
var len__7479__auto___16675 = arguments.length;
var i__7480__auto___16676 = (0);
while(true){
if((i__7480__auto___16676 < len__7479__auto___16675)){
args16105.push((arguments[i__7480__auto___16676]));

var G__16677 = (i__7480__auto___16676 + (1));
i__7480__auto___16676 = G__16677;
continue;
} else {
}
break;
}

var G__16109 = args16105.length;
switch (G__16109) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16105.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.ins,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq16106){
var G__16107 = cljs.core.first(seq16106);
var seq16106__$1 = cljs.core.next(seq16106);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__16107,seq16106__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args16110 = [];
var len__7479__auto___16679 = arguments.length;
var i__7480__auto___16680 = (0);
while(true){
if((i__7480__auto___16680 < len__7479__auto___16679)){
args16110.push((arguments[i__7480__auto___16680]));

var G__16681 = (i__7480__auto___16680 + (1));
i__7480__auto___16680 = G__16681;
continue;
} else {
}
break;
}

var G__16114 = args16110.length;
switch (G__16114) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16110.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq16111){
var G__16112 = cljs.core.first(seq16111);
var seq16111__$1 = cljs.core.next(seq16111);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__16112,seq16111__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args16115 = [];
var len__7479__auto___16683 = arguments.length;
var i__7480__auto___16684 = (0);
while(true){
if((i__7480__auto___16684 < len__7479__auto___16683)){
args16115.push((arguments[i__7480__auto___16684]));

var G__16685 = (i__7480__auto___16684 + (1));
i__7480__auto___16684 = G__16685;
continue;
} else {
}
break;
}

var G__16119 = args16115.length;
switch (G__16119) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16115.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq16116){
var G__16117 = cljs.core.first(seq16116);
var seq16116__$1 = cljs.core.next(seq16116);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__16117,seq16116__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args16120 = [];
var len__7479__auto___16687 = arguments.length;
var i__7480__auto___16688 = (0);
while(true){
if((i__7480__auto___16688 < len__7479__auto___16687)){
args16120.push((arguments[i__7480__auto___16688]));

var G__16689 = (i__7480__auto___16688 + (1));
i__7480__auto___16688 = G__16689;
continue;
} else {
}
break;
}

var G__16124 = args16120.length;
switch (G__16124) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16120.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.label,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq16121){
var G__16122 = cljs.core.first(seq16121);
var seq16121__$1 = cljs.core.next(seq16121);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__16122,seq16121__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args16125 = [];
var len__7479__auto___16691 = arguments.length;
var i__7480__auto___16692 = (0);
while(true){
if((i__7480__auto___16692 < len__7479__auto___16691)){
args16125.push((arguments[i__7480__auto___16692]));

var G__16693 = (i__7480__auto___16692 + (1));
i__7480__auto___16692 = G__16693;
continue;
} else {
}
break;
}

var G__16129 = args16125.length;
switch (G__16129) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16125.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.legend,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq16126){
var G__16127 = cljs.core.first(seq16126);
var seq16126__$1 = cljs.core.next(seq16126);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__16127,seq16126__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args16130 = [];
var len__7479__auto___16695 = arguments.length;
var i__7480__auto___16696 = (0);
while(true){
if((i__7480__auto___16696 < len__7479__auto___16695)){
args16130.push((arguments[i__7480__auto___16696]));

var G__16697 = (i__7480__auto___16696 + (1));
i__7480__auto___16696 = G__16697;
continue;
} else {
}
break;
}

var G__16134 = args16130.length;
switch (G__16134) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16130.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.li,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq16131){
var G__16132 = cljs.core.first(seq16131);
var seq16131__$1 = cljs.core.next(seq16131);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__16132,seq16131__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args16135 = [];
var len__7479__auto___16699 = arguments.length;
var i__7480__auto___16700 = (0);
while(true){
if((i__7480__auto___16700 < len__7479__auto___16699)){
args16135.push((arguments[i__7480__auto___16700]));

var G__16701 = (i__7480__auto___16700 + (1));
i__7480__auto___16700 = G__16701;
continue;
} else {
}
break;
}

var G__16139 = args16135.length;
switch (G__16139) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16135.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.link,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq16136){
var G__16137 = cljs.core.first(seq16136);
var seq16136__$1 = cljs.core.next(seq16136);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__16137,seq16136__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args16140 = [];
var len__7479__auto___16703 = arguments.length;
var i__7480__auto___16704 = (0);
while(true){
if((i__7480__auto___16704 < len__7479__auto___16703)){
args16140.push((arguments[i__7480__auto___16704]));

var G__16705 = (i__7480__auto___16704 + (1));
i__7480__auto___16704 = G__16705;
continue;
} else {
}
break;
}

var G__16144 = args16140.length;
switch (G__16144) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16140.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.main,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq16141){
var G__16142 = cljs.core.first(seq16141);
var seq16141__$1 = cljs.core.next(seq16141);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__16142,seq16141__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args16145 = [];
var len__7479__auto___16707 = arguments.length;
var i__7480__auto___16708 = (0);
while(true){
if((i__7480__auto___16708 < len__7479__auto___16707)){
args16145.push((arguments[i__7480__auto___16708]));

var G__16709 = (i__7480__auto___16708 + (1));
i__7480__auto___16708 = G__16709;
continue;
} else {
}
break;
}

var G__16149 = args16145.length;
switch (G__16149) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16145.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.map,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq16146){
var G__16147 = cljs.core.first(seq16146);
var seq16146__$1 = cljs.core.next(seq16146);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__16147,seq16146__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args16150 = [];
var len__7479__auto___16711 = arguments.length;
var i__7480__auto___16712 = (0);
while(true){
if((i__7480__auto___16712 < len__7479__auto___16711)){
args16150.push((arguments[i__7480__auto___16712]));

var G__16713 = (i__7480__auto___16712 + (1));
i__7480__auto___16712 = G__16713;
continue;
} else {
}
break;
}

var G__16154 = args16150.length;
switch (G__16154) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16150.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.mark,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq16151){
var G__16152 = cljs.core.first(seq16151);
var seq16151__$1 = cljs.core.next(seq16151);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__16152,seq16151__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args16155 = [];
var len__7479__auto___16715 = arguments.length;
var i__7480__auto___16716 = (0);
while(true){
if((i__7480__auto___16716 < len__7479__auto___16715)){
args16155.push((arguments[i__7480__auto___16716]));

var G__16717 = (i__7480__auto___16716 + (1));
i__7480__auto___16716 = G__16717;
continue;
} else {
}
break;
}

var G__16159 = args16155.length;
switch (G__16159) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16155.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.marquee,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq16156){
var G__16157 = cljs.core.first(seq16156);
var seq16156__$1 = cljs.core.next(seq16156);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__16157,seq16156__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args16160 = [];
var len__7479__auto___16719 = arguments.length;
var i__7480__auto___16720 = (0);
while(true){
if((i__7480__auto___16720 < len__7479__auto___16719)){
args16160.push((arguments[i__7480__auto___16720]));

var G__16721 = (i__7480__auto___16720 + (1));
i__7480__auto___16720 = G__16721;
continue;
} else {
}
break;
}

var G__16164 = args16160.length;
switch (G__16164) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16160.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.menu,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq16161){
var G__16162 = cljs.core.first(seq16161);
var seq16161__$1 = cljs.core.next(seq16161);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__16162,seq16161__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args16165 = [];
var len__7479__auto___16723 = arguments.length;
var i__7480__auto___16724 = (0);
while(true){
if((i__7480__auto___16724 < len__7479__auto___16723)){
args16165.push((arguments[i__7480__auto___16724]));

var G__16725 = (i__7480__auto___16724 + (1));
i__7480__auto___16724 = G__16725;
continue;
} else {
}
break;
}

var G__16169 = args16165.length;
switch (G__16169) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16165.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq16166){
var G__16167 = cljs.core.first(seq16166);
var seq16166__$1 = cljs.core.next(seq16166);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__16167,seq16166__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args16170 = [];
var len__7479__auto___16727 = arguments.length;
var i__7480__auto___16728 = (0);
while(true){
if((i__7480__auto___16728 < len__7479__auto___16727)){
args16170.push((arguments[i__7480__auto___16728]));

var G__16729 = (i__7480__auto___16728 + (1));
i__7480__auto___16728 = G__16729;
continue;
} else {
}
break;
}

var G__16174 = args16170.length;
switch (G__16174) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16170.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.meta,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq16171){
var G__16172 = cljs.core.first(seq16171);
var seq16171__$1 = cljs.core.next(seq16171);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__16172,seq16171__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args16175 = [];
var len__7479__auto___16731 = arguments.length;
var i__7480__auto___16732 = (0);
while(true){
if((i__7480__auto___16732 < len__7479__auto___16731)){
args16175.push((arguments[i__7480__auto___16732]));

var G__16733 = (i__7480__auto___16732 + (1));
i__7480__auto___16732 = G__16733;
continue;
} else {
}
break;
}

var G__16179 = args16175.length;
switch (G__16179) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16175.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.meter,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq16176){
var G__16177 = cljs.core.first(seq16176);
var seq16176__$1 = cljs.core.next(seq16176);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__16177,seq16176__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args16180 = [];
var len__7479__auto___16735 = arguments.length;
var i__7480__auto___16736 = (0);
while(true){
if((i__7480__auto___16736 < len__7479__auto___16735)){
args16180.push((arguments[i__7480__auto___16736]));

var G__16737 = (i__7480__auto___16736 + (1));
i__7480__auto___16736 = G__16737;
continue;
} else {
}
break;
}

var G__16184 = args16180.length;
switch (G__16184) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16180.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.nav,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq16181){
var G__16182 = cljs.core.first(seq16181);
var seq16181__$1 = cljs.core.next(seq16181);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__16182,seq16181__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args16185 = [];
var len__7479__auto___16739 = arguments.length;
var i__7480__auto___16740 = (0);
while(true){
if((i__7480__auto___16740 < len__7479__auto___16739)){
args16185.push((arguments[i__7480__auto___16740]));

var G__16741 = (i__7480__auto___16740 + (1));
i__7480__auto___16740 = G__16741;
continue;
} else {
}
break;
}

var G__16189 = args16185.length;
switch (G__16189) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16185.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq16186){
var G__16187 = cljs.core.first(seq16186);
var seq16186__$1 = cljs.core.next(seq16186);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__16187,seq16186__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args16190 = [];
var len__7479__auto___16743 = arguments.length;
var i__7480__auto___16744 = (0);
while(true){
if((i__7480__auto___16744 < len__7479__auto___16743)){
args16190.push((arguments[i__7480__auto___16744]));

var G__16745 = (i__7480__auto___16744 + (1));
i__7480__auto___16744 = G__16745;
continue;
} else {
}
break;
}

var G__16194 = args16190.length;
switch (G__16194) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16190.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.object,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq16191){
var G__16192 = cljs.core.first(seq16191);
var seq16191__$1 = cljs.core.next(seq16191);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__16192,seq16191__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args16195 = [];
var len__7479__auto___16747 = arguments.length;
var i__7480__auto___16748 = (0);
while(true){
if((i__7480__auto___16748 < len__7479__auto___16747)){
args16195.push((arguments[i__7480__auto___16748]));

var G__16749 = (i__7480__auto___16748 + (1));
i__7480__auto___16748 = G__16749;
continue;
} else {
}
break;
}

var G__16199 = args16195.length;
switch (G__16199) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16195.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.ol,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq16196){
var G__16197 = cljs.core.first(seq16196);
var seq16196__$1 = cljs.core.next(seq16196);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__16197,seq16196__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args16200 = [];
var len__7479__auto___16751 = arguments.length;
var i__7480__auto___16752 = (0);
while(true){
if((i__7480__auto___16752 < len__7479__auto___16751)){
args16200.push((arguments[i__7480__auto___16752]));

var G__16753 = (i__7480__auto___16752 + (1));
i__7480__auto___16752 = G__16753;
continue;
} else {
}
break;
}

var G__16204 = args16200.length;
switch (G__16204) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16200.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq16201){
var G__16202 = cljs.core.first(seq16201);
var seq16201__$1 = cljs.core.next(seq16201);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__16202,seq16201__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args16205 = [];
var len__7479__auto___16755 = arguments.length;
var i__7480__auto___16756 = (0);
while(true){
if((i__7480__auto___16756 < len__7479__auto___16755)){
args16205.push((arguments[i__7480__auto___16756]));

var G__16757 = (i__7480__auto___16756 + (1));
i__7480__auto___16756 = G__16757;
continue;
} else {
}
break;
}

var G__16209 = args16205.length;
switch (G__16209) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16205.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.output,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq16206){
var G__16207 = cljs.core.first(seq16206);
var seq16206__$1 = cljs.core.next(seq16206);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__16207,seq16206__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args16210 = [];
var len__7479__auto___16759 = arguments.length;
var i__7480__auto___16760 = (0);
while(true){
if((i__7480__auto___16760 < len__7479__auto___16759)){
args16210.push((arguments[i__7480__auto___16760]));

var G__16761 = (i__7480__auto___16760 + (1));
i__7480__auto___16760 = G__16761;
continue;
} else {
}
break;
}

var G__16214 = args16210.length;
switch (G__16214) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16210.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.p,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq16211){
var G__16212 = cljs.core.first(seq16211);
var seq16211__$1 = cljs.core.next(seq16211);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__16212,seq16211__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args16215 = [];
var len__7479__auto___16763 = arguments.length;
var i__7480__auto___16764 = (0);
while(true){
if((i__7480__auto___16764 < len__7479__auto___16763)){
args16215.push((arguments[i__7480__auto___16764]));

var G__16765 = (i__7480__auto___16764 + (1));
i__7480__auto___16764 = G__16765;
continue;
} else {
}
break;
}

var G__16219 = args16215.length;
switch (G__16219) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16215.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.param,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq16216){
var G__16217 = cljs.core.first(seq16216);
var seq16216__$1 = cljs.core.next(seq16216);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__16217,seq16216__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args16220 = [];
var len__7479__auto___16767 = arguments.length;
var i__7480__auto___16768 = (0);
while(true){
if((i__7480__auto___16768 < len__7479__auto___16767)){
args16220.push((arguments[i__7480__auto___16768]));

var G__16769 = (i__7480__auto___16768 + (1));
i__7480__auto___16768 = G__16769;
continue;
} else {
}
break;
}

var G__16224 = args16220.length;
switch (G__16224) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16220.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.pre,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq16221){
var G__16222 = cljs.core.first(seq16221);
var seq16221__$1 = cljs.core.next(seq16221);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__16222,seq16221__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args16225 = [];
var len__7479__auto___16771 = arguments.length;
var i__7480__auto___16772 = (0);
while(true){
if((i__7480__auto___16772 < len__7479__auto___16771)){
args16225.push((arguments[i__7480__auto___16772]));

var G__16773 = (i__7480__auto___16772 + (1));
i__7480__auto___16772 = G__16773;
continue;
} else {
}
break;
}

var G__16229 = args16225.length;
switch (G__16229) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16225.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.progress,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq16226){
var G__16227 = cljs.core.first(seq16226);
var seq16226__$1 = cljs.core.next(seq16226);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__16227,seq16226__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args16230 = [];
var len__7479__auto___16775 = arguments.length;
var i__7480__auto___16776 = (0);
while(true){
if((i__7480__auto___16776 < len__7479__auto___16775)){
args16230.push((arguments[i__7480__auto___16776]));

var G__16777 = (i__7480__auto___16776 + (1));
i__7480__auto___16776 = G__16777;
continue;
} else {
}
break;
}

var G__16234 = args16230.length;
switch (G__16234) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16230.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.q,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq16231){
var G__16232 = cljs.core.first(seq16231);
var seq16231__$1 = cljs.core.next(seq16231);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__16232,seq16231__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args16235 = [];
var len__7479__auto___16779 = arguments.length;
var i__7480__auto___16780 = (0);
while(true){
if((i__7480__auto___16780 < len__7479__auto___16779)){
args16235.push((arguments[i__7480__auto___16780]));

var G__16781 = (i__7480__auto___16780 + (1));
i__7480__auto___16780 = G__16781;
continue;
} else {
}
break;
}

var G__16239 = args16235.length;
switch (G__16239) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16235.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.rp,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq16236){
var G__16237 = cljs.core.first(seq16236);
var seq16236__$1 = cljs.core.next(seq16236);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__16237,seq16236__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args16240 = [];
var len__7479__auto___16783 = arguments.length;
var i__7480__auto___16784 = (0);
while(true){
if((i__7480__auto___16784 < len__7479__auto___16783)){
args16240.push((arguments[i__7480__auto___16784]));

var G__16785 = (i__7480__auto___16784 + (1));
i__7480__auto___16784 = G__16785;
continue;
} else {
}
break;
}

var G__16244 = args16240.length;
switch (G__16244) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16240.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.rt,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq16241){
var G__16242 = cljs.core.first(seq16241);
var seq16241__$1 = cljs.core.next(seq16241);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__16242,seq16241__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args16245 = [];
var len__7479__auto___16787 = arguments.length;
var i__7480__auto___16788 = (0);
while(true){
if((i__7480__auto___16788 < len__7479__auto___16787)){
args16245.push((arguments[i__7480__auto___16788]));

var G__16789 = (i__7480__auto___16788 + (1));
i__7480__auto___16788 = G__16789;
continue;
} else {
}
break;
}

var G__16249 = args16245.length;
switch (G__16249) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16245.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq16246){
var G__16247 = cljs.core.first(seq16246);
var seq16246__$1 = cljs.core.next(seq16246);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__16247,seq16246__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args16250 = [];
var len__7479__auto___16791 = arguments.length;
var i__7480__auto___16792 = (0);
while(true){
if((i__7480__auto___16792 < len__7479__auto___16791)){
args16250.push((arguments[i__7480__auto___16792]));

var G__16793 = (i__7480__auto___16792 + (1));
i__7480__auto___16792 = G__16793;
continue;
} else {
}
break;
}

var G__16254 = args16250.length;
switch (G__16254) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16250.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.s,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq16251){
var G__16252 = cljs.core.first(seq16251);
var seq16251__$1 = cljs.core.next(seq16251);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__16252,seq16251__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args16255 = [];
var len__7479__auto___16795 = arguments.length;
var i__7480__auto___16796 = (0);
while(true){
if((i__7480__auto___16796 < len__7479__auto___16795)){
args16255.push((arguments[i__7480__auto___16796]));

var G__16797 = (i__7480__auto___16796 + (1));
i__7480__auto___16796 = G__16797;
continue;
} else {
}
break;
}

var G__16259 = args16255.length;
switch (G__16259) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16255.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.samp,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq16256){
var G__16257 = cljs.core.first(seq16256);
var seq16256__$1 = cljs.core.next(seq16256);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__16257,seq16256__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args16260 = [];
var len__7479__auto___16799 = arguments.length;
var i__7480__auto___16800 = (0);
while(true){
if((i__7480__auto___16800 < len__7479__auto___16799)){
args16260.push((arguments[i__7480__auto___16800]));

var G__16801 = (i__7480__auto___16800 + (1));
i__7480__auto___16800 = G__16801;
continue;
} else {
}
break;
}

var G__16264 = args16260.length;
switch (G__16264) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16260.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.script,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq16261){
var G__16262 = cljs.core.first(seq16261);
var seq16261__$1 = cljs.core.next(seq16261);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__16262,seq16261__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args16265 = [];
var len__7479__auto___16803 = arguments.length;
var i__7480__auto___16804 = (0);
while(true){
if((i__7480__auto___16804 < len__7479__auto___16803)){
args16265.push((arguments[i__7480__auto___16804]));

var G__16805 = (i__7480__auto___16804 + (1));
i__7480__auto___16804 = G__16805;
continue;
} else {
}
break;
}

var G__16269 = args16265.length;
switch (G__16269) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16265.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.section,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq16266){
var G__16267 = cljs.core.first(seq16266);
var seq16266__$1 = cljs.core.next(seq16266);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__16267,seq16266__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args16270 = [];
var len__7479__auto___16807 = arguments.length;
var i__7480__auto___16808 = (0);
while(true){
if((i__7480__auto___16808 < len__7479__auto___16807)){
args16270.push((arguments[i__7480__auto___16808]));

var G__16809 = (i__7480__auto___16808 + (1));
i__7480__auto___16808 = G__16809;
continue;
} else {
}
break;
}

var G__16274 = args16270.length;
switch (G__16274) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16270.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.select,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq16271){
var G__16272 = cljs.core.first(seq16271);
var seq16271__$1 = cljs.core.next(seq16271);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__16272,seq16271__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args16275 = [];
var len__7479__auto___16811 = arguments.length;
var i__7480__auto___16812 = (0);
while(true){
if((i__7480__auto___16812 < len__7479__auto___16811)){
args16275.push((arguments[i__7480__auto___16812]));

var G__16813 = (i__7480__auto___16812 + (1));
i__7480__auto___16812 = G__16813;
continue;
} else {
}
break;
}

var G__16279 = args16275.length;
switch (G__16279) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16275.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.small,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq16276){
var G__16277 = cljs.core.first(seq16276);
var seq16276__$1 = cljs.core.next(seq16276);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__16277,seq16276__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args16280 = [];
var len__7479__auto___16815 = arguments.length;
var i__7480__auto___16816 = (0);
while(true){
if((i__7480__auto___16816 < len__7479__auto___16815)){
args16280.push((arguments[i__7480__auto___16816]));

var G__16817 = (i__7480__auto___16816 + (1));
i__7480__auto___16816 = G__16817;
continue;
} else {
}
break;
}

var G__16284 = args16280.length;
switch (G__16284) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16280.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.source,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq16281){
var G__16282 = cljs.core.first(seq16281);
var seq16281__$1 = cljs.core.next(seq16281);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__16282,seq16281__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args16285 = [];
var len__7479__auto___16819 = arguments.length;
var i__7480__auto___16820 = (0);
while(true){
if((i__7480__auto___16820 < len__7479__auto___16819)){
args16285.push((arguments[i__7480__auto___16820]));

var G__16821 = (i__7480__auto___16820 + (1));
i__7480__auto___16820 = G__16821;
continue;
} else {
}
break;
}

var G__16289 = args16285.length;
switch (G__16289) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16285.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.span,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq16286){
var G__16287 = cljs.core.first(seq16286);
var seq16286__$1 = cljs.core.next(seq16286);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__16287,seq16286__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args16290 = [];
var len__7479__auto___16823 = arguments.length;
var i__7480__auto___16824 = (0);
while(true){
if((i__7480__auto___16824 < len__7479__auto___16823)){
args16290.push((arguments[i__7480__auto___16824]));

var G__16825 = (i__7480__auto___16824 + (1));
i__7480__auto___16824 = G__16825;
continue;
} else {
}
break;
}

var G__16294 = args16290.length;
switch (G__16294) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16290.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.strong,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq16291){
var G__16292 = cljs.core.first(seq16291);
var seq16291__$1 = cljs.core.next(seq16291);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__16292,seq16291__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args16295 = [];
var len__7479__auto___16827 = arguments.length;
var i__7480__auto___16828 = (0);
while(true){
if((i__7480__auto___16828 < len__7479__auto___16827)){
args16295.push((arguments[i__7480__auto___16828]));

var G__16829 = (i__7480__auto___16828 + (1));
i__7480__auto___16828 = G__16829;
continue;
} else {
}
break;
}

var G__16299 = args16295.length;
switch (G__16299) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16295.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.style,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq16296){
var G__16297 = cljs.core.first(seq16296);
var seq16296__$1 = cljs.core.next(seq16296);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__16297,seq16296__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args16300 = [];
var len__7479__auto___16831 = arguments.length;
var i__7480__auto___16832 = (0);
while(true){
if((i__7480__auto___16832 < len__7479__auto___16831)){
args16300.push((arguments[i__7480__auto___16832]));

var G__16833 = (i__7480__auto___16832 + (1));
i__7480__auto___16832 = G__16833;
continue;
} else {
}
break;
}

var G__16304 = args16300.length;
switch (G__16304) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16300.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.sub,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq16301){
var G__16302 = cljs.core.first(seq16301);
var seq16301__$1 = cljs.core.next(seq16301);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__16302,seq16301__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args16305 = [];
var len__7479__auto___16835 = arguments.length;
var i__7480__auto___16836 = (0);
while(true){
if((i__7480__auto___16836 < len__7479__auto___16835)){
args16305.push((arguments[i__7480__auto___16836]));

var G__16837 = (i__7480__auto___16836 + (1));
i__7480__auto___16836 = G__16837;
continue;
} else {
}
break;
}

var G__16309 = args16305.length;
switch (G__16309) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16305.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.summary,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq16306){
var G__16307 = cljs.core.first(seq16306);
var seq16306__$1 = cljs.core.next(seq16306);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__16307,seq16306__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args16310 = [];
var len__7479__auto___16839 = arguments.length;
var i__7480__auto___16840 = (0);
while(true){
if((i__7480__auto___16840 < len__7479__auto___16839)){
args16310.push((arguments[i__7480__auto___16840]));

var G__16841 = (i__7480__auto___16840 + (1));
i__7480__auto___16840 = G__16841;
continue;
} else {
}
break;
}

var G__16314 = args16310.length;
switch (G__16314) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16310.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.sup,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq16311){
var G__16312 = cljs.core.first(seq16311);
var seq16311__$1 = cljs.core.next(seq16311);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__16312,seq16311__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args16315 = [];
var len__7479__auto___16843 = arguments.length;
var i__7480__auto___16844 = (0);
while(true){
if((i__7480__auto___16844 < len__7479__auto___16843)){
args16315.push((arguments[i__7480__auto___16844]));

var G__16845 = (i__7480__auto___16844 + (1));
i__7480__auto___16844 = G__16845;
continue;
} else {
}
break;
}

var G__16319 = args16315.length;
switch (G__16319) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16315.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.table,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq16316){
var G__16317 = cljs.core.first(seq16316);
var seq16316__$1 = cljs.core.next(seq16316);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__16317,seq16316__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args16320 = [];
var len__7479__auto___16847 = arguments.length;
var i__7480__auto___16848 = (0);
while(true){
if((i__7480__auto___16848 < len__7479__auto___16847)){
args16320.push((arguments[i__7480__auto___16848]));

var G__16849 = (i__7480__auto___16848 + (1));
i__7480__auto___16848 = G__16849;
continue;
} else {
}
break;
}

var G__16324 = args16320.length;
switch (G__16324) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16320.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq16321){
var G__16322 = cljs.core.first(seq16321);
var seq16321__$1 = cljs.core.next(seq16321);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__16322,seq16321__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args16325 = [];
var len__7479__auto___16851 = arguments.length;
var i__7480__auto___16852 = (0);
while(true){
if((i__7480__auto___16852 < len__7479__auto___16851)){
args16325.push((arguments[i__7480__auto___16852]));

var G__16853 = (i__7480__auto___16852 + (1));
i__7480__auto___16852 = G__16853;
continue;
} else {
}
break;
}

var G__16329 = args16325.length;
switch (G__16329) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16325.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.td,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq16326){
var G__16327 = cljs.core.first(seq16326);
var seq16326__$1 = cljs.core.next(seq16326);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__16327,seq16326__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args16330 = [];
var len__7479__auto___16855 = arguments.length;
var i__7480__auto___16856 = (0);
while(true){
if((i__7480__auto___16856 < len__7479__auto___16855)){
args16330.push((arguments[i__7480__auto___16856]));

var G__16857 = (i__7480__auto___16856 + (1));
i__7480__auto___16856 = G__16857;
continue;
} else {
}
break;
}

var G__16334 = args16330.length;
switch (G__16334) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16330.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq16331){
var G__16332 = cljs.core.first(seq16331);
var seq16331__$1 = cljs.core.next(seq16331);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__16332,seq16331__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args16335 = [];
var len__7479__auto___16859 = arguments.length;
var i__7480__auto___16860 = (0);
while(true){
if((i__7480__auto___16860 < len__7479__auto___16859)){
args16335.push((arguments[i__7480__auto___16860]));

var G__16861 = (i__7480__auto___16860 + (1));
i__7480__auto___16860 = G__16861;
continue;
} else {
}
break;
}

var G__16339 = args16335.length;
switch (G__16339) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16335.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.th,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq16336){
var G__16337 = cljs.core.first(seq16336);
var seq16336__$1 = cljs.core.next(seq16336);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__16337,seq16336__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args16340 = [];
var len__7479__auto___16863 = arguments.length;
var i__7480__auto___16864 = (0);
while(true){
if((i__7480__auto___16864 < len__7479__auto___16863)){
args16340.push((arguments[i__7480__auto___16864]));

var G__16865 = (i__7480__auto___16864 + (1));
i__7480__auto___16864 = G__16865;
continue;
} else {
}
break;
}

var G__16344 = args16340.length;
switch (G__16344) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16340.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.thead,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq16341){
var G__16342 = cljs.core.first(seq16341);
var seq16341__$1 = cljs.core.next(seq16341);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__16342,seq16341__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args16345 = [];
var len__7479__auto___16867 = arguments.length;
var i__7480__auto___16868 = (0);
while(true){
if((i__7480__auto___16868 < len__7479__auto___16867)){
args16345.push((arguments[i__7480__auto___16868]));

var G__16869 = (i__7480__auto___16868 + (1));
i__7480__auto___16868 = G__16869;
continue;
} else {
}
break;
}

var G__16349 = args16345.length;
switch (G__16349) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16345.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.time,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq16346){
var G__16347 = cljs.core.first(seq16346);
var seq16346__$1 = cljs.core.next(seq16346);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__16347,seq16346__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args16350 = [];
var len__7479__auto___16871 = arguments.length;
var i__7480__auto___16872 = (0);
while(true){
if((i__7480__auto___16872 < len__7479__auto___16871)){
args16350.push((arguments[i__7480__auto___16872]));

var G__16873 = (i__7480__auto___16872 + (1));
i__7480__auto___16872 = G__16873;
continue;
} else {
}
break;
}

var G__16354 = args16350.length;
switch (G__16354) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16350.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.title,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq16351){
var G__16352 = cljs.core.first(seq16351);
var seq16351__$1 = cljs.core.next(seq16351);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__16352,seq16351__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args16355 = [];
var len__7479__auto___16875 = arguments.length;
var i__7480__auto___16876 = (0);
while(true){
if((i__7480__auto___16876 < len__7479__auto___16875)){
args16355.push((arguments[i__7480__auto___16876]));

var G__16877 = (i__7480__auto___16876 + (1));
i__7480__auto___16876 = G__16877;
continue;
} else {
}
break;
}

var G__16359 = args16355.length;
switch (G__16359) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16355.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.tr,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq16356){
var G__16357 = cljs.core.first(seq16356);
var seq16356__$1 = cljs.core.next(seq16356);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__16357,seq16356__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args16360 = [];
var len__7479__auto___16879 = arguments.length;
var i__7480__auto___16880 = (0);
while(true){
if((i__7480__auto___16880 < len__7479__auto___16879)){
args16360.push((arguments[i__7480__auto___16880]));

var G__16881 = (i__7480__auto___16880 + (1));
i__7480__auto___16880 = G__16881;
continue;
} else {
}
break;
}

var G__16364 = args16360.length;
switch (G__16364) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16360.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.track,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq16361){
var G__16362 = cljs.core.first(seq16361);
var seq16361__$1 = cljs.core.next(seq16361);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__16362,seq16361__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args16365 = [];
var len__7479__auto___16883 = arguments.length;
var i__7480__auto___16884 = (0);
while(true){
if((i__7480__auto___16884 < len__7479__auto___16883)){
args16365.push((arguments[i__7480__auto___16884]));

var G__16885 = (i__7480__auto___16884 + (1));
i__7480__auto___16884 = G__16885;
continue;
} else {
}
break;
}

var G__16369 = args16365.length;
switch (G__16369) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16365.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.u,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq16366){
var G__16367 = cljs.core.first(seq16366);
var seq16366__$1 = cljs.core.next(seq16366);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__16367,seq16366__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args16370 = [];
var len__7479__auto___16887 = arguments.length;
var i__7480__auto___16888 = (0);
while(true){
if((i__7480__auto___16888 < len__7479__auto___16887)){
args16370.push((arguments[i__7480__auto___16888]));

var G__16889 = (i__7480__auto___16888 + (1));
i__7480__auto___16888 = G__16889;
continue;
} else {
}
break;
}

var G__16374 = args16370.length;
switch (G__16374) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16370.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.ul,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq16371){
var G__16372 = cljs.core.first(seq16371);
var seq16371__$1 = cljs.core.next(seq16371);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__16372,seq16371__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args16375 = [];
var len__7479__auto___16891 = arguments.length;
var i__7480__auto___16892 = (0);
while(true){
if((i__7480__auto___16892 < len__7479__auto___16891)){
args16375.push((arguments[i__7480__auto___16892]));

var G__16893 = (i__7480__auto___16892 + (1));
i__7480__auto___16892 = G__16893;
continue;
} else {
}
break;
}

var G__16379 = args16375.length;
switch (G__16379) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16375.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.var$,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq16376){
var G__16377 = cljs.core.first(seq16376);
var seq16376__$1 = cljs.core.next(seq16376);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__16377,seq16376__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args16380 = [];
var len__7479__auto___16895 = arguments.length;
var i__7480__auto___16896 = (0);
while(true){
if((i__7480__auto___16896 < len__7479__auto___16895)){
args16380.push((arguments[i__7480__auto___16896]));

var G__16897 = (i__7480__auto___16896 + (1));
i__7480__auto___16896 = G__16897;
continue;
} else {
}
break;
}

var G__16384 = args16380.length;
switch (G__16384) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16380.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.video,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq16381){
var G__16382 = cljs.core.first(seq16381);
var seq16381__$1 = cljs.core.next(seq16381);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__16382,seq16381__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args16385 = [];
var len__7479__auto___16899 = arguments.length;
var i__7480__auto___16900 = (0);
while(true){
if((i__7480__auto___16900 < len__7479__auto___16899)){
args16385.push((arguments[i__7480__auto___16900]));

var G__16901 = (i__7480__auto___16900 + (1));
i__7480__auto___16900 = G__16901;
continue;
} else {
}
break;
}

var G__16389 = args16385.length;
switch (G__16389) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16385.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq16386){
var G__16387 = cljs.core.first(seq16386);
var seq16386__$1 = cljs.core.next(seq16386);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__16387,seq16386__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args16390 = [];
var len__7479__auto___16903 = arguments.length;
var i__7480__auto___16904 = (0);
while(true){
if((i__7480__auto___16904 < len__7479__auto___16903)){
args16390.push((arguments[i__7480__auto___16904]));

var G__16905 = (i__7480__auto___16904 + (1));
i__7480__auto___16904 = G__16905;
continue;
} else {
}
break;
}

var G__16394 = args16390.length;
switch (G__16394) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16390.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.circle,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq16391){
var G__16392 = cljs.core.first(seq16391);
var seq16391__$1 = cljs.core.next(seq16391);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__16392,seq16391__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args16395 = [];
var len__7479__auto___16907 = arguments.length;
var i__7480__auto___16908 = (0);
while(true){
if((i__7480__auto___16908 < len__7479__auto___16907)){
args16395.push((arguments[i__7480__auto___16908]));

var G__16909 = (i__7480__auto___16908 + (1));
i__7480__auto___16908 = G__16909;
continue;
} else {
}
break;
}

var G__16399 = args16395.length;
switch (G__16399) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16395.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq16396){
var G__16397 = cljs.core.first(seq16396);
var seq16396__$1 = cljs.core.next(seq16396);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__16397,seq16396__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args16400 = [];
var len__7479__auto___16911 = arguments.length;
var i__7480__auto___16912 = (0);
while(true){
if((i__7480__auto___16912 < len__7479__auto___16911)){
args16400.push((arguments[i__7480__auto___16912]));

var G__16913 = (i__7480__auto___16912 + (1));
i__7480__auto___16912 = G__16913;
continue;
} else {
}
break;
}

var G__16404 = args16400.length;
switch (G__16404) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16400.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.g,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq16401){
var G__16402 = cljs.core.first(seq16401);
var seq16401__$1 = cljs.core.next(seq16401);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__16402,seq16401__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args16405 = [];
var len__7479__auto___16915 = arguments.length;
var i__7480__auto___16916 = (0);
while(true){
if((i__7480__auto___16916 < len__7479__auto___16915)){
args16405.push((arguments[i__7480__auto___16916]));

var G__16917 = (i__7480__auto___16916 + (1));
i__7480__auto___16916 = G__16917;
continue;
} else {
}
break;
}

var G__16409 = args16405.length;
switch (G__16409) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16405.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.line,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq16406){
var G__16407 = cljs.core.first(seq16406);
var seq16406__$1 = cljs.core.next(seq16406);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__16407,seq16406__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args16410 = [];
var len__7479__auto___16919 = arguments.length;
var i__7480__auto___16920 = (0);
while(true){
if((i__7480__auto___16920 < len__7479__auto___16919)){
args16410.push((arguments[i__7480__auto___16920]));

var G__16921 = (i__7480__auto___16920 + (1));
i__7480__auto___16920 = G__16921;
continue;
} else {
}
break;
}

var G__16414 = args16410.length;
switch (G__16414) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16410.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.path,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq16411){
var G__16412 = cljs.core.first(seq16411);
var seq16411__$1 = cljs.core.next(seq16411);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__16412,seq16411__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args16415 = [];
var len__7479__auto___16923 = arguments.length;
var i__7480__auto___16924 = (0);
while(true){
if((i__7480__auto___16924 < len__7479__auto___16923)){
args16415.push((arguments[i__7480__auto___16924]));

var G__16925 = (i__7480__auto___16924 + (1));
i__7480__auto___16924 = G__16925;
continue;
} else {
}
break;
}

var G__16419 = args16415.length;
switch (G__16419) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16415.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq16416){
var G__16417 = cljs.core.first(seq16416);
var seq16416__$1 = cljs.core.next(seq16416);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__16417,seq16416__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args16420 = [];
var len__7479__auto___16927 = arguments.length;
var i__7480__auto___16928 = (0);
while(true){
if((i__7480__auto___16928 < len__7479__auto___16927)){
args16420.push((arguments[i__7480__auto___16928]));

var G__16929 = (i__7480__auto___16928 + (1));
i__7480__auto___16928 = G__16929;
continue;
} else {
}
break;
}

var G__16424 = args16420.length;
switch (G__16424) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16420.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.rect,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq16421){
var G__16422 = cljs.core.first(seq16421);
var seq16421__$1 = cljs.core.next(seq16421);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__16422,seq16421__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args16425 = [];
var len__7479__auto___16931 = arguments.length;
var i__7480__auto___16932 = (0);
while(true){
if((i__7480__auto___16932 < len__7479__auto___16931)){
args16425.push((arguments[i__7480__auto___16932]));

var G__16933 = (i__7480__auto___16932 + (1));
i__7480__auto___16932 = G__16933;
continue;
} else {
}
break;
}

var G__16429 = args16425.length;
switch (G__16429) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16425.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.svg,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq16426){
var G__16427 = cljs.core.first(seq16426);
var seq16426__$1 = cljs.core.next(seq16426);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__16427,seq16426__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args16430 = [];
var len__7479__auto___16935 = arguments.length;
var i__7480__auto___16936 = (0);
while(true){
if((i__7480__auto___16936 < len__7479__auto___16935)){
args16430.push((arguments[i__7480__auto___16936]));

var G__16937 = (i__7480__auto___16936 + (1));
i__7480__auto___16936 = G__16937;
continue;
} else {
}
break;
}

var G__16434 = args16430.length;
switch (G__16434) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16430.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.text,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq16431){
var G__16432 = cljs.core.first(seq16431);
var seq16431__$1 = cljs.core.next(seq16431);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__16432,seq16431__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args16435 = [];
var len__7479__auto___16939 = arguments.length;
var i__7480__auto___16940 = (0);
while(true){
if((i__7480__auto___16940 < len__7479__auto___16939)){
args16435.push((arguments[i__7480__auto___16940]));

var G__16941 = (i__7480__auto___16940 + (1));
i__7480__auto___16940 = G__16941;
continue;
} else {
}
break;
}

var G__16439 = args16435.length;
switch (G__16439) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16435.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.defs,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq16436){
var G__16437 = cljs.core.first(seq16436);
var seq16436__$1 = cljs.core.next(seq16436);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__16437,seq16436__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args16440 = [];
var len__7479__auto___16943 = arguments.length;
var i__7480__auto___16944 = (0);
while(true){
if((i__7480__auto___16944 < len__7479__auto___16943)){
args16440.push((arguments[i__7480__auto___16944]));

var G__16945 = (i__7480__auto___16944 + (1));
i__7480__auto___16944 = G__16945;
continue;
} else {
}
break;
}

var G__16444 = args16440.length;
switch (G__16444) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16440.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq16441){
var G__16442 = cljs.core.first(seq16441);
var seq16441__$1 = cljs.core.next(seq16441);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__16442,seq16441__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args16445 = [];
var len__7479__auto___16947 = arguments.length;
var i__7480__auto___16948 = (0);
while(true){
if((i__7480__auto___16948 < len__7479__auto___16947)){
args16445.push((arguments[i__7480__auto___16948]));

var G__16949 = (i__7480__auto___16948 + (1));
i__7480__auto___16948 = G__16949;
continue;
} else {
}
break;
}

var G__16449 = args16445.length;
switch (G__16449) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16445.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq16446){
var G__16447 = cljs.core.first(seq16446);
var seq16446__$1 = cljs.core.next(seq16446);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__16447,seq16446__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args16450 = [];
var len__7479__auto___16951 = arguments.length;
var i__7480__auto___16952 = (0);
while(true){
if((i__7480__auto___16952 < len__7479__auto___16951)){
args16450.push((arguments[i__7480__auto___16952]));

var G__16953 = (i__7480__auto___16952 + (1));
i__7480__auto___16952 = G__16953;
continue;
} else {
}
break;
}

var G__16454 = args16450.length;
switch (G__16454) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16450.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq16451){
var G__16452 = cljs.core.first(seq16451);
var seq16451__$1 = cljs.core.next(seq16451);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__16452,seq16451__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args16455 = [];
var len__7479__auto___16955 = arguments.length;
var i__7480__auto___16956 = (0);
while(true){
if((i__7480__auto___16956 < len__7479__auto___16955)){
args16455.push((arguments[i__7480__auto___16956]));

var G__16957 = (i__7480__auto___16956 + (1));
i__7480__auto___16956 = G__16957;
continue;
} else {
}
break;
}

var G__16459 = args16455.length;
switch (G__16459) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16455.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.stop,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq16456){
var G__16457 = cljs.core.first(seq16456);
var seq16456__$1 = cljs.core.next(seq16456);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__16457,seq16456__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args16460 = [];
var len__7479__auto___16959 = arguments.length;
var i__7480__auto___16960 = (0);
while(true){
if((i__7480__auto___16960 < len__7479__auto___16959)){
args16460.push((arguments[i__7480__auto___16960]));

var G__16961 = (i__7480__auto___16960 + (1));
i__7480__auto___16960 = G__16961;
continue;
} else {
}
break;
}

var G__16464 = args16460.length;
switch (G__16464) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16460.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq16461){
var G__16462 = cljs.core.first(seq16461);
var seq16461__$1 = cljs.core.next(seq16461);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__16462,seq16461__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args16465 = [];
var len__7479__auto___16963 = arguments.length;
var i__7480__auto___16964 = (0);
while(true){
if((i__7480__auto___16964 < len__7479__auto___16963)){
args16465.push((arguments[i__7480__auto___16964]));

var G__16965 = (i__7480__auto___16964 + (1));
i__7480__auto___16964 = G__16965;
continue;
} else {
}
break;
}

var G__16469 = args16465.length;
switch (G__16469) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16465.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(om.dom.input,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq16466){
var G__16467 = cljs.core.first(seq16466);
var seq16466__$1 = cljs.core.next(seq16466);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__16467,seq16466__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args16470 = [];
var len__7479__auto___16967 = arguments.length;
var i__7480__auto___16968 = (0);
while(true){
if((i__7480__auto___16968 < len__7479__auto___16967)){
args16470.push((arguments[i__7480__auto___16968]));

var G__16969 = (i__7480__auto___16968 + (1));
i__7480__auto___16968 = G__16969;
continue;
} else {
}
break;
}

var G__16474 = args16470.length;
switch (G__16474) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16470.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(om.dom.textarea,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq16471){
var G__16472 = cljs.core.first(seq16471);
var seq16471__$1 = cljs.core.next(seq16471);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__16472,seq16471__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args16010 = [];
var len__7479__auto___16971 = arguments.length;
var i__7480__auto___16972 = (0);
while(true){
if((i__7480__auto___16972 < len__7479__auto___16971)){
args16010.push((arguments[i__7480__auto___16972]));

var G__16973 = (i__7480__auto___16972 + (1));
i__7480__auto___16972 = G__16973;
continue;
} else {
}
break;
}

var G__16014 = args16010.length;
switch (G__16014) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16010.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15818__auto__,children__15819__auto__){
return om_tools.dom.element(om.dom.option,opts__15818__auto__,children__15819__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq16011){
var G__16012 = cljs.core.first(seq16011);
var seq16011__$1 = cljs.core.next(seq16011);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__16012,seq16011__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
