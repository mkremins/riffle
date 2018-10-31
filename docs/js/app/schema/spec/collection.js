// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker(e,params);
return ((function (parser,c){
return (function (res,x){
var G__17474 = res;
var G__17475 = (function (){var G__17476 = ((function (G__17474,parser,c){
return (function (t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_(t))?t:(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(t) : c.call(null,t))));
});})(G__17474,parser,c))
;
var G__17477 = x;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__17476,G__17477) : parser.call(null,G__17476,G__17477));
})();
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__17474,G__17475) : then.call(null,G__17474,G__17475));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some(schema.utils.error_QMARK_,l);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.collection.CollectionSpec = (function (pre,constructor$,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor$ = constructor$;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k17479,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__17481 = (((k17479 instanceof cljs.core.Keyword))?k17479.fqn:null);
switch (G__17481) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor$;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17479,else__7029__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor$__$1 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?self__.constructor$:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (constructor$__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer(e,params,f);
});})(constructor$__$1,this$__$1))
,((function (constructor$__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor$__$1,this$__$1))
,cljs.core.reverse(self__.elements));
return ((function (constructor$__$1,t,this$__$1){
return (function (x){
var or__6404__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var res = (function (){var G__17482 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17482) : cljs.core.atom.call(null,G__17482));
})();
var remaining = (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(res,x) : t.call(null,res,x));
var res__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(res) : cljs.core.deref.call(null,res));
if(cljs.core.truth_((function (){var or__6404__auto____$1 = cljs.core.seq(remaining);
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_(res__$1);
}
})())){
return schema.utils.error((self__.on_error.cljs$core$IFn$_invoke$arity$3 ? self__.on_error.cljs$core$IFn$_invoke$arity$3(x,res__$1,remaining) : self__.on_error.call(null,x,res__$1,remaining)));
} else {
return (constructor$__$1.cljs$core$IFn$_invoke$arity$1 ? constructor$__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : constructor$__$1.call(null,res__$1));
}
}
});
;})(constructor$__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17478){
var self__ = this;
var G__17478__$1 = this;
return (new cljs.core.RecordIter((0),G__17478__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$elements,null,cljs.core.cst$kw$constructor,null,cljs.core.cst$kw$on_DASH_error,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__17478){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__17483 = cljs.core.keyword_identical_QMARK_;
var expr__17484 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__17486 = cljs.core.cst$kw$pre;
var G__17487 = expr__17484;
return (pred__17483.cljs$core$IFn$_invoke$arity$2 ? pred__17483.cljs$core$IFn$_invoke$arity$2(G__17486,G__17487) : pred__17483.call(null,G__17486,G__17487));
})())){
return (new schema.spec.collection.CollectionSpec(G__17478,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17488 = cljs.core.cst$kw$constructor;
var G__17489 = expr__17484;
return (pred__17483.cljs$core$IFn$_invoke$arity$2 ? pred__17483.cljs$core$IFn$_invoke$arity$2(G__17488,G__17489) : pred__17483.call(null,G__17488,G__17489));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__17478,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17490 = cljs.core.cst$kw$elements;
var G__17491 = expr__17484;
return (pred__17483.cljs$core$IFn$_invoke$arity$2 ? pred__17483.cljs$core$IFn$_invoke$arity$2(G__17490,G__17491) : pred__17483.call(null,G__17490,G__17491));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,G__17478,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17492 = cljs.core.cst$kw$on_DASH_error;
var G__17493 = expr__17484;
return (pred__17483.cljs$core$IFn$_invoke$arity$2 ? pred__17483.cljs$core$IFn$_invoke$arity$2(G__17492,G__17493) : pred__17483.call(null,G__17492,G__17493));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,G__17478,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__17478),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__17478){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,G__17478,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$constructor,cljs.core.cst$sym$elements,cljs.core.cst$sym$on_DASH_error], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor$,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor$,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__17480){
return (new schema.spec.collection.CollectionSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__17480),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(G__17480),cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__17480),cljs.core.cst$kw$on_DASH_error.cljs$core$IFn$_invoke$arity$1(G__17480),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17480,cljs.core.cst$kw$pre,cljs.core.array_seq([cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], 0)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor$,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec(pre,constructor$,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$cardinality,cljs.core.cst$kw$zero_DASH_or_DASH_more,cljs.core.cst$kw$parser,(function (item_fn,coll){
var seq__17499_17503 = cljs.core.seq(coll);
var chunk__17500_17504 = null;
var count__17501_17505 = (0);
var i__17502_17506 = (0);
while(true){
if((i__17502_17506 < count__17501_17505)){
var x_17507 = chunk__17500_17504.cljs$core$IIndexed$_nth$arity$2(null,i__17502_17506);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(x_17507) : item_fn.call(null,x_17507));

var G__17508 = seq__17499_17503;
var G__17509 = chunk__17500_17504;
var G__17510 = count__17501_17505;
var G__17511 = (i__17502_17506 + (1));
seq__17499_17503 = G__17508;
chunk__17500_17504 = G__17509;
count__17501_17505 = G__17510;
i__17502_17506 = G__17511;
continue;
} else {
var temp__4657__auto___17512 = cljs.core.seq(seq__17499_17503);
if(temp__4657__auto___17512){
var seq__17499_17513__$1 = temp__4657__auto___17512;
if(cljs.core.chunked_seq_QMARK_(seq__17499_17513__$1)){
var c__7215__auto___17514 = cljs.core.chunk_first(seq__17499_17513__$1);
var G__17515 = cljs.core.chunk_rest(seq__17499_17513__$1);
var G__17516 = c__7215__auto___17514;
var G__17517 = cljs.core.count(c__7215__auto___17514);
var G__17518 = (0);
seq__17499_17503 = G__17515;
chunk__17500_17504 = G__17516;
count__17501_17505 = G__17517;
i__17502_17506 = G__17518;
continue;
} else {
var x_17519 = cljs.core.first(seq__17499_17513__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(x_17519) : item_fn.call(null,x_17519));

var G__17520 = cljs.core.next(seq__17499_17513__$1);
var G__17521 = null;
var G__17522 = (0);
var G__17523 = (0);
seq__17499_17503 = G__17520;
chunk__17500_17504 = G__17521;
count__17501_17505 = G__17522;
i__17502_17506 = G__17523;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$cardinality,(cljs.core.truth_(required_QMARK_)?cljs.core.cst$kw$exactly_DASH_one:cljs.core.cst$kw$at_DASH_most_DASH_one),cljs.core.cst$kw$parser,parser], null);
});
