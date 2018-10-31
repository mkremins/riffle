// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('riffle.editor');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('riffle.util');
/**
 * Looks up and returns the thing with ID `id` in `program`, or nil if no such
 *   thing exists.
 */
riffle.editor.lookup = (function riffle$editor$lookup(program,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$things.cljs$core$IFn$_invoke$arity$1(program),id);
});
riffle.editor.set_thing_prop = (function riffle$editor$set_thing_prop(program,id,prop,value){
return cljs.core.assoc_in(program,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,id,prop], null),value);
});
riffle.editor.toplevel_kinds = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,cljs.core.cst$kw$pred,cljs.core.cst$kw$bwd,cljs.core.cst$kw$stage,cljs.core.cst$kw$context], null);
riffle.editor.thing_templates = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$qui_DASH_rule,cljs.core.cst$kw$stage,cljs.core.cst$kw$pred,cljs.core.cst$kw$rule,cljs.core.cst$kw$goal,cljs.core.cst$kw$type,cljs.core.cst$kw$fact,cljs.core.cst$kw$term,cljs.core.cst$kw$result,cljs.core.cst$kw$case,cljs.core.cst$kw$context,cljs.core.cst$kw$bwd,cljs.core.cst$kw$premise],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$choice_DASH_text,"",cljs.core.cst$kw$description,"",cljs.core.cst$kw$premise_DASH_ids,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$result_DASH_ids,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$goto_DASH_id,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$selection,cljs.core.cst$kw$interactive,cljs.core.cst$kw$rule_DASH_ids,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$qui_DASH_rule_DASH_ids,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_str,""], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$choice_DASH_text,"",cljs.core.cst$kw$description,"",cljs.core.cst$kw$premise_DASH_ids,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$result_DASH_ids,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_str,""], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$term_DASH_ids,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_str,""], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_str,""], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_str,""], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$input_DASH_str,"",cljs.core.cst$kw$base_DASH_case_QMARK_,true,cljs.core.cst$kw$goal_DASH_ids,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$stage_DASH_id,null,cljs.core.cst$kw$fact_DASH_ids,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_str,"",cljs.core.cst$kw$case_DASH_ids,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_str,"",cljs.core.cst$kw$consume_QMARK_,false], null)]);
riffle.editor.ids_key_QMARK_ = (function riffle$editor$ids_key_QMARK_(k){
return clojure.string.ends_with_QMARK_(cljs.core.name(k),"-ids");
});
riffle.editor.kind__GT_ids_key = (function riffle$editor$kind__GT_ids_key(kind){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(kind)),cljs.core.str("-ids")].join(''));
});
riffle.editor.ids_key__GT_kind = (function riffle$editor$ids_key__GT_kind(ids_key){
if(cljs.core.truth_(riffle.editor.ids_key_QMARK_(ids_key))){
} else {
throw (new Error("Assert failed: (ids-key? ids-key)"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(ids_key),/-ids$/,""));
});
riffle.editor.next_id = (function riffle$editor$next_id(program){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_id.cljs$core$IFn$_invoke$arity$1(program),cljs.core.update.cljs$core$IFn$_invoke$arity$3(program,cljs.core.cst$kw$next_DASH_id,cljs.core.inc)], null);
});
riffle.editor.create_kids = (function riffle$editor$create_kids(program,p__22011){
var map__22014 = p__22011;
var map__22014__$1 = ((((!((map__22014 == null)))?((((map__22014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22014):map__22014);
var thing = map__22014__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22014__$1,cljs.core.cst$kw$id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__22014,map__22014__$1,thing,id){
return (function (program__$1,kids_key){
var kid_kind = riffle.editor.ids_key__GT_kind(kids_key);
return (riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$3 ? riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$3(program__$1,kid_kind,id) : riffle.editor.create_thing.call(null,program__$1,kid_kind,id));
});})(map__22014,map__22014__$1,thing,id))
,program,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(riffle.editor.ids_key_QMARK_,cljs.core.keys(thing)));
});
riffle.editor.add_to_parent = (function riffle$editor$add_to_parent(program,p__22016){
var map__22020 = p__22016;
var map__22020__$1 = ((((!((map__22020 == null)))?((((map__22020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22020):map__22020);
var thing = map__22020__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22020__$1,cljs.core.cst$kw$is);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22020__$1,cljs.core.cst$kw$id);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22020__$1,cljs.core.cst$kw$parent_DASH_id);
var kids_key = riffle.editor.kind__GT_ids_key(kind);
var kids_path = (function (){var G__22022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kids_key], null);
if(cljs.core.truth_(parent_id)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,parent_id], null),G__22022);
} else {
return G__22022;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(program,kids_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),id);
});
/**
 * Given a `program`, a `kind` of thing to create, and an optional `parent-id`
 *   specifying the parent of the created thing, returns an updated program in
 *   which a new thing of the appropriate kind has been created. The :prev-id key
 *   in the updated program will point to the ID of the newly-created thing.
 */
riffle.editor.create_thing = (function riffle$editor$create_thing(var_args){
var args22023 = [];
var len__7479__auto___22029 = arguments.length;
var i__7480__auto___22030 = (0);
while(true){
if((i__7480__auto___22030 < len__7479__auto___22029)){
args22023.push((arguments[i__7480__auto___22030]));

var G__22031 = (i__7480__auto___22030 + (1));
i__7480__auto___22030 = G__22031;
continue;
} else {
}
break;
}

var G__22025 = args22023.length;
switch (G__22025) {
case 2:
return riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22023.length)].join('')));

}
});

riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$2 = (function (program,kind){
return riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$3(program,kind,null);
});

riffle.editor.create_thing.cljs$core$IFn$_invoke$arity$3 = (function (program,kind,parent_id){
if(cljs.core.contains_QMARK_(riffle.editor.thing_templates,kind)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid kind of thing to create: "),cljs.core.str(kind)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? thing-templates kind)")].join('')));
}

if(cljs.core.contains_QMARK_(cljs.core.set(riffle.editor.toplevel_kinds),kind)){
if(cljs.core.not(parent_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A thing of kind "),cljs.core.str(kind),cljs.core.str(" may not have a parent")].join('')),cljs.core.str("\n"),cljs.core.str("(not parent-id)")].join('')));
}
} else {
if(cljs.core.truth_(parent_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A thing of kind "),cljs.core.str(kind),cljs.core.str(" must have a parent")].join('')),cljs.core.str("\n"),cljs.core.str("parent-id")].join('')));
}
}

var vec__22026 = riffle.editor.next_id(program);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026,(0),null);
var program_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026,(1),null);
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$2(riffle.editor.thing_templates,kind);
var thing = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.cst$kw$id,id,cljs.core.array_seq([cljs.core.cst$kw$is,kind,cljs.core.cst$kw$parent_DASH_id,parent_id], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(riffle.editor.add_to_parent(riffle.editor.create_kids(cljs.core.assoc_in(program_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,id], null),thing),thing),thing),cljs.core.cst$kw$prev_DASH_id,id);
});

riffle.editor.create_thing.cljs$lang$maxFixedArity = 3;

riffle.editor.delete_kids = (function riffle$editor$delete_kids(program,thing){
var kids_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(riffle.editor.ids_key_QMARK_,cljs.core.keys(thing));
var kid_ids = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (kids_keys){
return (function (p1__22033_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thing,p1__22033_SHARP_);
});})(kids_keys))
,cljs.core.array_seq([kids_keys], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(riffle.editor.delete_thing,program,kid_ids);
});
riffle.editor.remove_from_parent = (function riffle$editor$remove_from_parent(program,p__22035){
var map__22039 = p__22035;
var map__22039__$1 = ((((!((map__22039 == null)))?((((map__22039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22039):map__22039);
var thing = map__22039__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,cljs.core.cst$kw$is);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,cljs.core.cst$kw$id);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,cljs.core.cst$kw$parent_DASH_id);
var kids_key = riffle.editor.kind__GT_ids_key(kind);
var kids_path = (function (){var G__22041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kids_key], null);
if(cljs.core.truth_(parent_id)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,parent_id], null),G__22041);
} else {
return G__22041;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(program,kids_path,((function (kids_key,kids_path,map__22039,map__22039__$1,thing,kind,id,parent_id){
return (function (p1__22034_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([id], true),p1__22034_SHARP_));
});})(kids_key,kids_path,map__22039,map__22039__$1,thing,kind,id,parent_id))
);
});
riffle.editor.cleanup_dependents = (function riffle$editor$cleanup_dependents(program,p__22042){
var map__22052 = p__22042;
var map__22052__$1 = ((((!((map__22052 == null)))?((((map__22052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22052):map__22052);
var thing = map__22052__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052__$1,cljs.core.cst$kw$id);
var G__22054 = (((cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(thing) instanceof cljs.core.Keyword))?cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(thing).fqn:null);
switch (G__22054) {
case "context":
var G__22055 = program;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(program),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22055,cljs.core.cst$kw$context,null);
} else {
return G__22055;
}

break;
case "stage":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__22054,map__22052,map__22052__$1,thing,id){
return (function (program__$1,p__22056){
var vec__22057 = p__22056;
var thing_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22057,(0),null);
var thing__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22057,(1),null);
var G__22060 = program__$1;
var G__22060__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$goto_DASH_id.cljs$core$IFn$_invoke$arity$1(thing__$1),id))?riffle.editor.set_thing_prop(G__22060,thing_id,cljs.core.cst$kw$goto_DASH_id,null):G__22060);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stage_DASH_id.cljs$core$IFn$_invoke$arity$1(thing__$1),id)){
return riffle.editor.set_thing_prop(G__22060__$1,thing_id,cljs.core.cst$kw$stage_DASH_id,null);
} else {
return G__22060__$1;
}
});})(G__22054,map__22052,map__22052__$1,thing,id))
,program,cljs.core.cst$kw$things.cljs$core$IFn$_invoke$arity$1(program));

break;
default:
return program;

}
});
/**
 * Returns an updated `program` in which the thing with ID `id`, and all its
 *   descendants, have been deleted. Also performs any necessary cleanup on other
 *   things that depended on the deleted thing.
 */
riffle.editor.delete_thing = (function riffle$editor$delete_thing(program,id){
var thing = riffle.editor.lookup(program,id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(riffle.editor.cleanup_dependents(riffle.editor.remove_from_parent(riffle.editor.delete_kids(program,thing),thing),thing),cljs.core.cst$kw$things,cljs.core.dissoc,id);
});
riffle.editor.current_program = (function riffle$editor$current_program(editor){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(editor),cljs.core.cst$kw$program.cljs$core$IFn$_invoke$arity$1(editor));
});
riffle.editor.init_program = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(riffle.editor.create_thing,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"",cljs.core.cst$kw$interaction_DASH_style,cljs.core.cst$kw$cyoa,cljs.core.cst$kw$context_DASH_id,null,cljs.core.cst$kw$things,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$next_DASH_id,(0)], null),riffle.editor.toplevel_kinds);
riffle.editor.create_program = (function riffle$editor$create_program(editor){
var editor_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(editor,cljs.core.cst$kw$programs,cljs.core.conj,riffle.editor.init_program);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor_SINGLEQUOTE_,cljs.core.cst$kw$program,(cljs.core.count(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(editor_SINGLEQUOTE_)) - (1)));
});
riffle.editor.delete_program = (function riffle$editor$delete_program(editor,idx){
var editor_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(editor,cljs.core.cst$kw$programs,riffle.util.delete_index,idx);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(editor_SINGLEQUOTE_,cljs.core.cst$kw$program,((function (editor_SINGLEQUOTE_){
return (function (p1__22062_SHARP_){
return riffle.util.clamp(p1__22062_SHARP_,(0),(cljs.core.count(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(editor_SINGLEQUOTE_)) - (1)));
});})(editor_SINGLEQUOTE_))
);
});
riffle.editor.load_editor_state_BANG_ = (function riffle$editor$load_editor_state_BANG_(){
try{var temp__4657__auto__ = cljs.reader.read_string(localStorage.getItem("editor"));
if(cljs.core.truth_(temp__4657__auto__)){
var saved = temp__4657__auto__;
if(cljs.core.map_QMARK_(saved)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Saved editor state must be an EDN map"),cljs.core.str("\n"),cljs.core.str("(map? saved)")].join('')));
}

if(cljs.core.vector_QMARK_(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(saved))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Saved programs must be an EDN vector"),cljs.core.str("\n"),cljs.core.str("(vector? (:programs saved))")].join('')));
}

var seq__22069_22073 = cljs.core.seq(cljs.core.cst$kw$programs.cljs$core$IFn$_invoke$arity$1(saved));
var chunk__22070_22074 = null;
var count__22071_22075 = (0);
var i__22072_22076 = (0);
while(true){
if((i__22072_22076 < count__22071_22075)){
var saved_program_22077 = chunk__22070_22074.cljs$core$IIndexed$_nth$arity$2(null,i__22072_22076);
if(cljs.core.map_QMARK_(saved_program_22077)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Saved program must be an EDN map"),cljs.core.str("\n"),cljs.core.str("(map? saved-program)")].join('')));
}

if(typeof cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(saved_program_22077) === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Saved program :title must be an EDN string"),cljs.core.str("\n"),cljs.core.str("(string? (:title saved-program))")].join('')));
}

var G__22078 = seq__22069_22073;
var G__22079 = chunk__22070_22074;
var G__22080 = count__22071_22075;
var G__22081 = (i__22072_22076 + (1));
seq__22069_22073 = G__22078;
chunk__22070_22074 = G__22079;
count__22071_22075 = G__22080;
i__22072_22076 = G__22081;
continue;
} else {
var temp__4657__auto___22082__$1 = cljs.core.seq(seq__22069_22073);
if(temp__4657__auto___22082__$1){
var seq__22069_22083__$1 = temp__4657__auto___22082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22069_22083__$1)){
var c__7215__auto___22084 = cljs.core.chunk_first(seq__22069_22083__$1);
var G__22085 = cljs.core.chunk_rest(seq__22069_22083__$1);
var G__22086 = c__7215__auto___22084;
var G__22087 = cljs.core.count(c__7215__auto___22084);
var G__22088 = (0);
seq__22069_22073 = G__22085;
chunk__22070_22074 = G__22086;
count__22071_22075 = G__22087;
i__22072_22076 = G__22088;
continue;
} else {
var saved_program_22089 = cljs.core.first(seq__22069_22083__$1);
if(cljs.core.map_QMARK_(saved_program_22089)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Saved program must be an EDN map"),cljs.core.str("\n"),cljs.core.str("(map? saved-program)")].join('')));
}

if(typeof cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(saved_program_22089) === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Saved program :title must be an EDN string"),cljs.core.str("\n"),cljs.core.str("(string? (:title saved-program))")].join('')));
}

var G__22090 = cljs.core.next(seq__22069_22083__$1);
var G__22091 = null;
var G__22092 = (0);
var G__22093 = (0);
seq__22069_22073 = G__22090;
chunk__22070_22074 = G__22091;
count__22071_22075 = G__22092;
i__22072_22076 = G__22093;
continue;
}
} else {
}
}
break;
}

return saved;
} else {
return null;
}
}catch (e22068){var err = e22068;
console.log(err);

return null;
}});
riffle.editor.save_editor_state_BANG_ = (function riffle$editor$save_editor_state_BANG_(editor){
var G__22096 = "editor";
var G__22097 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([editor], 0));
return localStorage.setItem(G__22096,G__22097);
});
riffle.editor.init_editor_state_BANG_ = (function riffle$editor$init_editor_state_BANG_(){
var or__6404__auto__ = riffle.editor.load_editor_state_BANG_();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return riffle.editor.create_program(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$programs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$program,null], null));
}
});
riffle.editor.pull_in_kids = (function riffle$editor$pull_in_kids(program,thing){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (thing__$1,kids_key){
var kids_key_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(riffle.editor.ids_key__GT_kind(kids_key))),cljs.core.str("s")].join(''));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(thing__$1,kids_key,cljs.core.array_seq([cljs.core.cst$kw$parent_DASH_id], 0)),kids_key_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (kids_key_SINGLEQUOTE_){
return (function (p1__22099_SHARP_){
return riffle$editor$pull_in_kids(program,p1__22099_SHARP_);
});})(kids_key_SINGLEQUOTE_))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (kids_key_SINGLEQUOTE_){
return (function (p1__22098_SHARP_){
return riffle.editor.lookup(program,p1__22098_SHARP_);
});})(kids_key_SINGLEQUOTE_))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(thing__$1,kids_key))));
}),thing,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(riffle.editor.ids_key_QMARK_,cljs.core.keys(thing)));
});
riffle.editor.parse_logic_sentence = (function riffle$editor$parse_logic_sentence(p__22100){
var map__22103 = p__22100;
var map__22103__$1 = ((((!((map__22103 == null)))?((((map__22103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22103):map__22103);
var input_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.cst$kw$input_DASH_str);
return cljs.reader.read_string([cljs.core.str("["),cljs.core.str(input_str),cljs.core.str("]")].join(''));
});
riffle.editor.prep_type = (function riffle$editor$prep_type(type){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(type,cljs.core.cst$kw$name,cljs.core.symbol),cljs.core.cst$kw$terms,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,riffle.editor.parse_logic_sentence));
});
riffle.editor.prep_bwd = (function riffle$editor$prep_bwd(bwd){
var sig = riffle.editor.parse_logic_sentence(bwd);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bwd,cljs.core.cst$kw$sig,sig,cljs.core.array_seq([cljs.core.cst$kw$name,cljs.core.first(sig)], 0)),cljs.core.cst$kw$cases,((function (sig){
return (function (cases){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (sig){
return (function (case$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(case$,cljs.core.cst$kw$input_DASH_str),cljs.core.cst$kw$pattern,riffle.editor.parse_logic_sentence(case$)),cljs.core.cst$kw$goals,((function (sig){
return (function (p1__22105_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$base_DASH_case_QMARK_.cljs$core$IFn$_invoke$arity$1(case$))){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.parse_logic_sentence,p1__22105_SHARP_);
}
});})(sig))
);
});})(sig))
,cases);
});})(sig))
);
});
riffle.editor.prep_qui_rule = (function riffle$editor$prep_qui_rule(p__22106,program){
var map__22110 = p__22106;
var map__22110__$1 = ((((!((map__22110 == null)))?((((map__22110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22110):map__22110);
var qui_rule = map__22110__$1;
var goto_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22110__$1,cljs.core.cst$kw$goto_DASH_id);
var qui_rule_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(qui_rule,cljs.core.cst$kw$goto_DASH_id);
if((goto_id == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qui_rule_SINGLEQUOTE_,cljs.core.cst$kw$ending_QMARK_,true);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qui_rule_SINGLEQUOTE_,cljs.core.cst$kw$goto,(function (){var G__22112 = riffle.editor.lookup(program,goto_id);
var G__22112__$1 = (((G__22112 == null))?null:cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__22112));
if((G__22112__$1 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__22112__$1);
}
})());
}
});
riffle.editor.prep_rule = (function riffle$editor$prep_rule(rule,program){
var map__22118 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.cst$kw$consume_QMARK_),cljs.core.cst$kw$premises.cljs$core$IFn$_invoke$arity$1(rule));
var map__22118__$1 = ((((!((map__22118 == null)))?((((map__22118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22118):map__22118);
var consumes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,true);
var checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,false);
var G__22120 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rule,cljs.core.cst$kw$consume,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.parse_logic_sentence,consumes),cljs.core.array_seq([cljs.core.cst$kw$check,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.parse_logic_sentence,checks),cljs.core.cst$kw$name,(function (){var G__22121 = cljs.core.cst$kw$choice_DASH_text.cljs$core$IFn$_invoke$arity$1(rule);
if((G__22121 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__22121);
}
})()], 0)),cljs.core.cst$kw$premises),cljs.core.cst$kw$results,((function (map__22118,map__22118__$1,consumes,checks){
return (function (p1__22113_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.parse_logic_sentence,p1__22113_SHARP_);
});})(map__22118,map__22118__$1,consumes,checks))
);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$is.cljs$core$IFn$_invoke$arity$1(rule),cljs.core.cst$kw$qui_DASH_rule)){
return riffle.editor.prep_qui_rule(G__22120,program);
} else {
return G__22120;
}
});
riffle.editor.prep_stage = (function riffle$editor$prep_stage(stage,program){
if((typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(stage) === 'string') && (cljs.core.seq(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(stage)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid stage name: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(stage)], 0)))].join('')),cljs.core.str("\n"),cljs.core.str("(and (string? (:name stage)) (seq (:name stage)))")].join('')));
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(stage,cljs.core.cst$kw$name,cljs.core.symbol),cljs.core.cst$kw$rules,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__22122_SHARP_){
return riffle.editor.prep_rule(p1__22122_SHARP_,program);
}))),cljs.core.cst$kw$quiescence_DASH_rules,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22123_SHARP_){
return riffle.editor.prep_rule(p1__22123_SHARP_,program);
}),cljs.core.cst$kw$qui_DASH_rules.cljs$core$IFn$_invoke$arity$1(stage))),cljs.core.cst$kw$qui_DASH_rules);
});
riffle.editor.prep_for_compilation = (function riffle$editor$prep_for_compilation(program){
var context = riffle.editor.pull_in_kids(program,riffle.editor.lookup(program,cljs.core.cst$kw$context_DASH_id.cljs$core$IFn$_invoke$arity$1(program)));
if(cljs.core.truth_(context)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Must specify a valid starting context"),cljs.core.str("\n"),cljs.core.str("context")].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(riffle.editor.pull_in_kids(program,program),cljs.core.cst$kw$contexts,cljs.core.array_seq([cljs.core.cst$kw$context_DASH_id], 0)),cljs.core.cst$kw$types,((function (context){
return (function (p1__22124_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.prep_type,p1__22124_SHARP_);
});})(context))
),cljs.core.cst$kw$preds,((function (context){
return (function (p1__22125_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.parse_logic_sentence,p1__22125_SHARP_);
});})(context))
),cljs.core.cst$kw$bwds,((function (context){
return (function (p1__22126_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.prep_bwd,p1__22126_SHARP_);
});})(context))
),cljs.core.cst$kw$stages,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,((function (context){
return (function (p1__22127_SHARP_){
return riffle.editor.prep_stage(p1__22127_SHARP_,program);
});})(context))
)),cljs.core.cst$kw$stage,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(riffle.editor.lookup(program,cljs.core.cst$kw$stage_DASH_id.cljs$core$IFn$_invoke$arity$1(context)))),cljs.core.array_seq([cljs.core.cst$kw$facts,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(riffle.editor.parse_logic_sentence,cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(context))], 0));
});
