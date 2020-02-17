goog.provide('mranderson048.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.fx.kind) : mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48360 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48361 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48361);

try{try{var seq__48362 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48363 = null;
var count__48364 = (0);
var i__48365 = (0);
while(true){
if((i__48365 < count__48364)){
var vec__48377 = chunk__48363.cljs$core$IIndexed$_nth$arity$2(null,i__48365);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48377,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48377,(1),null);
var temp__5733__auto___48440 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48440)){
var effect_fn_48441 = temp__5733__auto___48440;
(effect_fn_48441.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48441.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48441.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48442 = seq__48362;
var G__48443 = chunk__48363;
var G__48444 = count__48364;
var G__48445 = (i__48365 + (1));
seq__48362 = G__48442;
chunk__48363 = G__48443;
count__48364 = G__48444;
i__48365 = G__48445;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48362);
if(temp__5735__auto__){
var seq__48362__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48362__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48362__$1);
var G__48446 = cljs.core.chunk_rest(seq__48362__$1);
var G__48447 = c__4609__auto__;
var G__48448 = cljs.core.count(c__4609__auto__);
var G__48449 = (0);
seq__48362 = G__48446;
chunk__48363 = G__48447;
count__48364 = G__48448;
i__48365 = G__48449;
continue;
} else {
var vec__48381 = cljs.core.first(seq__48362__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48381,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48381,(1),null);
var temp__5733__auto___48450 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48450)){
var effect_fn_48451 = temp__5733__auto___48450;
(effect_fn_48451.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48451.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48451.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48453 = cljs.core.next(seq__48362__$1);
var G__48454 = null;
var G__48455 = (0);
var G__48456 = (0);
seq__48362 = G__48453;
chunk__48363 = G__48454;
count__48364 = G__48455;
i__48365 = G__48456;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48052__auto___48457 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__48053__auto___48458 = (end__48052__auto___48457 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48053__auto___48458,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__48052__auto___48457);
} else {
}
}}finally {(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48360);
}} else {
var seq__48385 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48386 = null;
var count__48387 = (0);
var i__48388 = (0);
while(true){
if((i__48388 < count__48387)){
var vec__48397 = chunk__48386.cljs$core$IIndexed$_nth$arity$2(null,i__48388);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48397,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48397,(1),null);
var temp__5733__auto___48459 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48459)){
var effect_fn_48460 = temp__5733__auto___48459;
(effect_fn_48460.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48460.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48460.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48465 = seq__48385;
var G__48466 = chunk__48386;
var G__48467 = count__48387;
var G__48468 = (i__48388 + (1));
seq__48385 = G__48465;
chunk__48386 = G__48466;
count__48387 = G__48467;
i__48388 = G__48468;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48385);
if(temp__5735__auto__){
var seq__48385__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48385__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48385__$1);
var G__48473 = cljs.core.chunk_rest(seq__48385__$1);
var G__48474 = c__4609__auto__;
var G__48475 = cljs.core.count(c__4609__auto__);
var G__48476 = (0);
seq__48385 = G__48473;
chunk__48386 = G__48474;
count__48387 = G__48475;
i__48388 = G__48476;
continue;
} else {
var vec__48401 = cljs.core.first(seq__48385__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(1),null);
var temp__5733__auto___48481 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48481)){
var effect_fn_48483 = temp__5733__auto___48481;
(effect_fn_48483.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48483.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48483.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48484 = cljs.core.next(seq__48385__$1);
var G__48485 = null;
var G__48486 = (0);
var G__48487 = (0);
seq__48385 = G__48484;
chunk__48386 = G__48485;
count__48387 = G__48486;
i__48388 = G__48487;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48408 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48409 = null;
var count__48410 = (0);
var i__48411 = (0);
while(true){
if((i__48411 < count__48410)){
var map__48419 = chunk__48409.cljs$core$IIndexed$_nth$arity$2(null,i__48411);
var map__48419__$1 = (((((!((map__48419 == null))))?(((((map__48419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48419):map__48419);
var effect = map__48419__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48419__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48419__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__48408,chunk__48409,count__48410,i__48411,map__48419,map__48419__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__48408,chunk__48409,count__48410,i__48411,map__48419,map__48419__$1,effect,ms,dispatch))
,ms);
}


var G__48488 = seq__48408;
var G__48489 = chunk__48409;
var G__48490 = count__48410;
var G__48491 = (i__48411 + (1));
seq__48408 = G__48488;
chunk__48409 = G__48489;
count__48410 = G__48490;
i__48411 = G__48491;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48408);
if(temp__5735__auto__){
var seq__48408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48408__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48408__$1);
var G__48493 = cljs.core.chunk_rest(seq__48408__$1);
var G__48494 = c__4609__auto__;
var G__48495 = cljs.core.count(c__4609__auto__);
var G__48496 = (0);
seq__48408 = G__48493;
chunk__48409 = G__48494;
count__48410 = G__48495;
i__48411 = G__48496;
continue;
} else {
var map__48421 = cljs.core.first(seq__48408__$1);
var map__48421__$1 = (((((!((map__48421 == null))))?(((((map__48421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48421):map__48421);
var effect = map__48421__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48421__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48421__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__48408,chunk__48409,count__48410,i__48411,map__48421,map__48421__$1,effect,ms,dispatch,seq__48408__$1,temp__5735__auto__){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__48408,chunk__48409,count__48410,i__48411,map__48421,map__48421__$1,effect,ms,dispatch,seq__48408__$1,temp__5735__auto__))
,ms);
}


var G__48499 = cljs.core.next(seq__48408__$1);
var G__48500 = null;
var G__48501 = (0);
var G__48502 = (0);
seq__48408 = G__48499;
chunk__48409 = G__48500;
count__48410 = G__48501;
i__48411 = G__48502;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__48424 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48425 = null;
var count__48426 = (0);
var i__48427 = (0);
while(true){
if((i__48427 < count__48426)){
var event = chunk__48425.cljs$core$IIndexed$_nth$arity$2(null,i__48427);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__48506 = seq__48424;
var G__48507 = chunk__48425;
var G__48508 = count__48426;
var G__48509 = (i__48427 + (1));
seq__48424 = G__48506;
chunk__48425 = G__48507;
count__48426 = G__48508;
i__48427 = G__48509;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48424);
if(temp__5735__auto__){
var seq__48424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48424__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48424__$1);
var G__48510 = cljs.core.chunk_rest(seq__48424__$1);
var G__48511 = c__4609__auto__;
var G__48512 = cljs.core.count(c__4609__auto__);
var G__48513 = (0);
seq__48424 = G__48510;
chunk__48425 = G__48511;
count__48426 = G__48512;
i__48427 = G__48513;
continue;
} else {
var event = cljs.core.first(seq__48424__$1);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__48514 = cljs.core.next(seq__48424__$1);
var G__48515 = null;
var G__48516 = (0);
var G__48517 = (0);
seq__48424 = G__48514;
chunk__48425 = G__48515;
count__48426 = G__48516;
i__48427 = G__48517;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__48432 = cljs.core.seq(value);
var chunk__48433 = null;
var count__48434 = (0);
var i__48435 = (0);
while(true){
if((i__48435 < count__48434)){
var event = chunk__48433.cljs$core$IIndexed$_nth$arity$2(null,i__48435);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48518 = seq__48432;
var G__48519 = chunk__48433;
var G__48520 = count__48434;
var G__48521 = (i__48435 + (1));
seq__48432 = G__48518;
chunk__48433 = G__48519;
count__48434 = G__48520;
i__48435 = G__48521;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48432);
if(temp__5735__auto__){
var seq__48432__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48432__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48432__$1);
var G__48523 = cljs.core.chunk_rest(seq__48432__$1);
var G__48524 = c__4609__auto__;
var G__48525 = cljs.core.count(c__4609__auto__);
var G__48526 = (0);
seq__48432 = G__48523;
chunk__48433 = G__48524;
count__48434 = G__48525;
i__48435 = G__48526;
continue;
} else {
var event = cljs.core.first(seq__48432__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48529 = cljs.core.next(seq__48432__$1);
var G__48530 = null;
var G__48531 = (0);
var G__48532 = (0);
seq__48432 = G__48529;
chunk__48433 = G__48530;
count__48434 = G__48531;
i__48435 = G__48532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.fx.js.map
