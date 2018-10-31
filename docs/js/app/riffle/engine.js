// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('riffle.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('riffle.compiler');
/**
 * Given a `state`, returns the currently active stage.
 */
riffle.engine.current_stage = (function riffle$engine$current_stage(state){
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stages.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(stage)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Stage "),cljs.core.str(cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.str(" not found!")].join('')),cljs.core.str("\n"),cljs.core.str("stage")].join('')));
}

return stage;
});
/**
 * Converts a `template` string to a player-presentable string by replacing var
 *   names with their associated values in `bindings`.
 */
riffle.engine.expand_template = (function riffle$engine$expand_template(template,bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__22160){
var vec__22161 = p__22160;
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22161,(0),null);
var bound_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22161,(1),null);
return clojure.string.replace(s,[cljs.core.str(var_name)].join(''),[cljs.core.str(bound_value)].join(''));
}),template,bindings);
});
/**
 * Returns the player-presentable choice text for a state `transition`.
 */
riffle.engine.choice_text = (function riffle$engine$choice_text(transition){
var temp__4655__auto__ = cljs.core.cst$kw$choice_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(transition));
if(cljs.core.truth_(temp__4655__auto__)){
var choice_text__$1 = temp__4655__auto__;
return riffle.engine.expand_template(choice_text__$1,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(transition));
} else {
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(transition),"(quiescence)")),cljs.core.str(" "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(transition)))))].join('');
}
});
/**
 * Returns the player-presentable description of what happened in the game
 *   world as the result of a state `transition`.
 */
riffle.engine.description = (function riffle$engine$description(transition){
var temp__4657__auto__ = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(transition));
if(cljs.core.truth_(temp__4657__auto__)){
var template = temp__4657__auto__;
return clojure.string.trim(riffle.engine.expand_template(template,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(transition)));
} else {
return null;
}
});
/**
 * Attempts to unify `pattern` with `value` in the context of `lvar-bindings`.
 *   Returns updated lvar-bindings if unification was successful, else nil.
 */
riffle.engine.unify = (function riffle$engine$unify(pattern,value,lvar_bindings){
var G__22170 = (((riffle.compiler.classify_pattern(pattern) instanceof cljs.core.Keyword))?riffle.compiler.classify_pattern(pattern).fqn:null);
switch (G__22170) {
case "compound":
if((cljs.core.sequential_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pattern),cljs.core.count(value)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__22170){
return (function (lvar_bindings__$1,p__22171){
var vec__22172 = p__22171;
var pattern_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22172,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22172,(1),null);
var G__22175 = lvar_bindings__$1;
if((G__22175 == null)){
return null;
} else {
return riffle$engine$unify(pattern_SINGLEQUOTE_,value_SINGLEQUOTE_,G__22175);
}
});})(G__22170))
,lvar_bindings,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,value));
} else {
return null;
}

break;
case "literal":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pattern,value)){
return lvar_bindings;
} else {
return null;
}

break;
case "lvar":
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lvar_bindings,pattern);
if(cljs.core.truth_(temp__4655__auto__)){
var bound = temp__4655__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,value)){
return lvar_bindings;
} else {
return null;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lvar_bindings,pattern,value);
}

break;
case "wildcard":
return lvar_bindings;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(riffle.compiler.classify_pattern(pattern))].join('')));

}
});
/**
 * Given a `partial-match`, a `premise` representing a predicate test, and a
 *   map of `facts`, returns a seq of updated partial matches.
 */
riffle.engine.match_pred = (function riffle$engine$match_pred(partial_match,premise,facts){
var lvar_bindings = cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(partial_match);
var already_used_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(partial_match))),cljs.core.cst$kw$id);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lvar_bindings,already_used_QMARK_){
return (function (p__22182){
var vec__22183 = p__22182;
var fact = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183,(0),null);
var lvar_bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(partial_match,cljs.core.cst$kw$bindings,lvar_bindings__$1),cljs.core.cst$kw$facts,cljs.core.conj,fact);
});})(lvar_bindings,already_used_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,((function (lvar_bindings,already_used_QMARK_){
return (function (p1__22177_SHARP_){
return riffle.engine.unify(premise,cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(p1__22177_SHARP_),lvar_bindings);
});})(lvar_bindings,already_used_QMARK_))
),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(already_used_QMARK_,cljs.core.vals(facts)))));
});
/**
 * Given a `goal` to prove and a map of backward-chaining predicates `bwds`,
 *   returns either an lvar-bindings map (if the proof was successful) or nil (if
 *   a proof could not be found).
 */
riffle.engine.prove = (function riffle$engine$prove(goal,bwds){
var cases = cljs.core.cst$kw$cases.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bwds,cljs.core.first(goal)));
while(true){
var temp__4657__auto__ = cljs.core.first(cases);
if(cljs.core.truth_(temp__4657__auto__)){
var case$ = temp__4657__auto__;
var temp__4655__auto__ = riffle.engine.unify(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(case$),goal,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(temp__4655__auto__)){
var lvar_bindings = temp__4655__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$base_DASH_case_QMARK_.cljs$core$IFn$_invoke$arity$1(case$))){
return lvar_bindings;
} else {
var subgoals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cases,lvar_bindings,temp__4655__auto__,case$,temp__4657__auto__){
return (function (p1__22186_SHARP_){
return clojure.walk.prewalk_replace(lvar_bindings,p1__22186_SHARP_);
});})(cases,lvar_bindings,temp__4655__auto__,case$,temp__4657__auto__))
,cljs.core.cst$kw$goals.cljs$core$IFn$_invoke$arity$1(case$));
if(cljs.core.every_QMARK_(((function (cases,subgoals,lvar_bindings,temp__4655__auto__,case$,temp__4657__auto__){
return (function (p1__22187_SHARP_){
return riffle$engine$prove(p1__22187_SHARP_,bwds);
});})(cases,subgoals,lvar_bindings,temp__4655__auto__,case$,temp__4657__auto__))
,subgoals)){
return lvar_bindings;
} else {
return null;
}
}
} else {
var G__22188 = cljs.core.rest(cases);
cases = G__22188;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Given a `partial-match`, a `premise` representing a backward-chaining
 *   predicate test, and a map of backward-chaining predicates `bwds`, returns
 *   either an updated partial match (if the test was successful) or nil.
 */
riffle.engine.test_bwd = (function riffle$engine$test_bwd(partial_match,premise,bwds){
var goal = clojure.walk.prewalk_replace(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(partial_match),premise);
var temp__4657__auto__ = riffle.engine.prove(goal,bwds);
if(cljs.core.truth_(temp__4657__auto__)){
var new_bindings = temp__4657__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(partial_match,cljs.core.cst$kw$bindings,cljs.core.merge,new_bindings);
} else {
return null;
}
});
/**
 * Given a `rule` and a `state`, returns a seq of possible applications
 *   of the rule to the state.
 */
riffle.engine.possible_applications = (function riffle$engine$possible_applications(rule,state){
var partial_matches = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (partial_matches,premise){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__22189_SHARP_){
return riffle.engine.match_pred(p1__22189_SHARP_,premise,cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(state));
}),cljs.core.array_seq([partial_matches], 0));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rule,rule,cljs.core.cst$kw$bindings,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentVector.EMPTY], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$consume.cljs$core$IFn$_invoke$arity$1(rule),cljs.core.cst$kw$check_DASH_pred.cljs$core$IFn$_invoke$arity$1(rule)));
var partial_matches__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (partial_matches){
return (function (partial_matches__$1,premise){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (partial_matches){
return (function (p1__22190_SHARP_){
return riffle.engine.test_bwd(p1__22190_SHARP_,premise,cljs.core.cst$kw$bwds.cljs$core$IFn$_invoke$arity$1(state));
});})(partial_matches))
,partial_matches__$1));
});})(partial_matches))
,partial_matches,cljs.core.cst$kw$check_DASH_bwd.cljs$core$IFn$_invoke$arity$1(rule));
return partial_matches__$1;
});
/**
 * Given a `state`, returns a vector of possible state transitions.
 */
riffle.engine.possible_transitions = (function riffle$engine$possible_transitions(state){
var stage = riffle.engine.current_stage(state);
var rule_applications = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (stage){
return (function (p1__22191_SHARP_){
return riffle.engine.possible_applications(p1__22191_SHARP_,state);
});})(stage))
,cljs.core.array_seq([cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(stage)], 0)));
if(cljs.core.seq(rule_applications)){
return rule_applications;
} else {
var quiescence_rule_applications = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (stage,rule_applications){
return (function (p1__22192_SHARP_){
return riffle.engine.possible_applications(p1__22192_SHARP_,state);
});})(stage,rule_applications))
,cljs.core.array_seq([cljs.core.cst$kw$quiescence_DASH_rules.cljs$core$IFn$_invoke$arity$1(stage)], 0)));
if(cljs.core.seq(quiescence_rule_applications)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No applicable rules or quiescence rules for state!"),cljs.core.str("\n"),cljs.core.str("(seq quiescence-rule-applications)")].join('')));
}

return quiescence_rule_applications;
}
});
/**
 * Applies `transition` to `state` and returns the resulting updated state.
 */
riffle.engine.apply_transition = (function riffle$engine$apply_transition(state,transition){
var rule = cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(transition);
var state_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$choices);
var consumed_facts = cljs.core.first(cljs.core.split_at(cljs.core.count(cljs.core.cst$kw$consume.cljs$core$IFn$_invoke$arity$1(rule)),cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(transition)));
var state_SINGLEQUOTE___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (rule,state_SINGLEQUOTE_,consumed_facts){
return (function (p1__22193_SHARP_,p2__22194_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__22193_SHARP_,cljs.core.cst$kw$facts,cljs.core.dissoc,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p2__22194_SHARP_));
});})(rule,state_SINGLEQUOTE_,consumed_facts))
,state_SINGLEQUOTE_,consumed_facts);
var next_fact_id = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(state))) + (1));
var new_facts = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (rule,state_SINGLEQUOTE_,consumed_facts,state_SINGLEQUOTE___$1,next_fact_id){
return (function (offset,fact){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(next_fact_id + offset),cljs.core.cst$kw$expr,fact], null);
});})(rule,state_SINGLEQUOTE_,consumed_facts,state_SINGLEQUOTE___$1,next_fact_id))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),clojure.walk.prewalk_replace(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(transition),cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(rule)));
var state_SINGLEQUOTE___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (rule,state_SINGLEQUOTE_,consumed_facts,state_SINGLEQUOTE___$1,next_fact_id,new_facts){
return (function (p1__22195_SHARP_,p2__22196_SHARP_){
return cljs.core.assoc_in(p1__22195_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p2__22196_SHARP_)], null),p2__22196_SHARP_);
});})(rule,state_SINGLEQUOTE_,consumed_facts,state_SINGLEQUOTE___$1,next_fact_id,new_facts))
,state_SINGLEQUOTE___$1,new_facts);
var stage_SINGLEQUOTE_ = cljs.core.cst$kw$goto.cljs$core$IFn$_invoke$arity$1(rule);
var state_SINGLEQUOTE___$3 = (function (){var G__22200 = state_SINGLEQUOTE___$2;
if(cljs.core.truth_(stage_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22200,cljs.core.cst$kw$stage,stage_SINGLEQUOTE_);
} else {
return G__22200;
}
})();
var state_SINGLEQUOTE___$4 = (function (){var G__22201 = state_SINGLEQUOTE___$3;
if(cljs.core.truth_(cljs.core.cst$kw$ending_QMARK_.cljs$core$IFn$_invoke$arity$1(rule))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22201,cljs.core.cst$kw$reached_DASH_end_QMARK_,true);
} else {
return G__22201;
}
})();
var desc = riffle.engine.description(transition);
var state_SINGLEQUOTE___$5 = (function (){var G__22202 = state_SINGLEQUOTE___$4;
if(cljs.core.truth_(desc)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__22202,cljs.core.cst$kw$content,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),desc);
} else {
return G__22202;
}
})();
return state_SINGLEQUOTE___$5;
});
/**
 * Performs automatically selected transitions on `state` until an interactive
 *   choice point (or the end of the story) is reached.
 */
riffle.engine.run_to_choice_point = (function riffle$engine$run_to_choice_point(state){
while(true){
if(cljs.core.truth_(cljs.core.cst$kw$reached_DASH_end_QMARK_.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$content,cljs.core.conj,"\u220E");
} else {
var transitions = riffle.engine.possible_transitions(state);
var quiescent_QMARK_ = cljs.core.cst$kw$quiescence_DASH_rule_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(cljs.core.first(transitions)));
var selection_mode = (cljs.core.truth_(quiescent_QMARK_)?cljs.core.cst$kw$random:cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(riffle.engine.current_stage(state)));
var G__22204 = (((selection_mode instanceof cljs.core.Keyword))?selection_mode.fqn:null);
switch (G__22204) {
case "interactive":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$choices,transitions);

break;
case "ordered":
var G__22206 = riffle.engine.apply_transition(state,cljs.core.first(transitions));
state = G__22206;
continue;

break;
case "random":
var G__22207 = riffle.engine.apply_transition(state,cljs.core.rand_nth(transitions));
state = G__22207;
continue;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(selection_mode)].join('')));

}
}
break;
}
});
