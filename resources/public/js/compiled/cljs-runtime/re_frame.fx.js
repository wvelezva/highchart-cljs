goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52718 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52719 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52719);

try{try{var seq__52720 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52721 = null;
var count__52722 = (0);
var i__52723 = (0);
while(true){
if((i__52723 < count__52722)){
var vec__52730 = chunk__52721.cljs$core$IIndexed$_nth$arity$2(null,i__52723);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730,(1),null);
var temp__5733__auto___52805 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52805)){
var effect_fn_52806 = temp__5733__auto___52805;
(effect_fn_52806.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52806.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52806.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52808 = seq__52720;
var G__52809 = chunk__52721;
var G__52810 = count__52722;
var G__52811 = (i__52723 + (1));
seq__52720 = G__52808;
chunk__52721 = G__52809;
count__52722 = G__52810;
i__52723 = G__52811;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52720);
if(temp__5735__auto__){
var seq__52720__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52720__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52720__$1);
var G__52814 = cljs.core.chunk_rest(seq__52720__$1);
var G__52815 = c__4609__auto__;
var G__52816 = cljs.core.count(c__4609__auto__);
var G__52817 = (0);
seq__52720 = G__52814;
chunk__52721 = G__52815;
count__52722 = G__52816;
i__52723 = G__52817;
continue;
} else {
var vec__52733 = cljs.core.first(seq__52720__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52733,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52733,(1),null);
var temp__5733__auto___52818 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52818)){
var effect_fn_52819 = temp__5733__auto___52818;
(effect_fn_52819.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52819.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52819.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52820 = cljs.core.next(seq__52720__$1);
var G__52821 = null;
var G__52822 = (0);
var G__52823 = (0);
seq__52720 = G__52820;
chunk__52721 = G__52821;
count__52722 = G__52822;
i__52723 = G__52823;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52204__auto___52824 = re_frame.interop.now();
var duration__52205__auto___52825 = (end__52204__auto___52824 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52205__auto___52825,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52204__auto___52824);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52718);
}} else {
var seq__52739 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52740 = null;
var count__52741 = (0);
var i__52742 = (0);
while(true){
if((i__52742 < count__52741)){
var vec__52750 = chunk__52740.cljs$core$IIndexed$_nth$arity$2(null,i__52742);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52750,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52750,(1),null);
var temp__5733__auto___52829 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52829)){
var effect_fn_52830 = temp__5733__auto___52829;
(effect_fn_52830.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52830.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52830.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52834 = seq__52739;
var G__52835 = chunk__52740;
var G__52836 = count__52741;
var G__52837 = (i__52742 + (1));
seq__52739 = G__52834;
chunk__52740 = G__52835;
count__52741 = G__52836;
i__52742 = G__52837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52739);
if(temp__5735__auto__){
var seq__52739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52739__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52739__$1);
var G__52842 = cljs.core.chunk_rest(seq__52739__$1);
var G__52843 = c__4609__auto__;
var G__52844 = cljs.core.count(c__4609__auto__);
var G__52845 = (0);
seq__52739 = G__52842;
chunk__52740 = G__52843;
count__52741 = G__52844;
i__52742 = G__52845;
continue;
} else {
var vec__52754 = cljs.core.first(seq__52739__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52754,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52754,(1),null);
var temp__5733__auto___52846 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52846)){
var effect_fn_52847 = temp__5733__auto___52846;
(effect_fn_52847.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52847.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52847.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52848 = cljs.core.next(seq__52739__$1);
var G__52849 = null;
var G__52850 = (0);
var G__52851 = (0);
seq__52739 = G__52848;
chunk__52740 = G__52849;
count__52741 = G__52850;
i__52742 = G__52851;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52757 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52758 = null;
var count__52759 = (0);
var i__52760 = (0);
while(true){
if((i__52760 < count__52759)){
var map__52773 = chunk__52758.cljs$core$IIndexed$_nth$arity$2(null,i__52760);
var map__52773__$1 = (((((!((map__52773 == null))))?(((((map__52773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52773):map__52773);
var effect = map__52773__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52773__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52773__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52757,chunk__52758,count__52759,i__52760,map__52773,map__52773__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52757,chunk__52758,count__52759,i__52760,map__52773,map__52773__$1,effect,ms,dispatch))
,ms);
}


var G__52858 = seq__52757;
var G__52859 = chunk__52758;
var G__52860 = count__52759;
var G__52861 = (i__52760 + (1));
seq__52757 = G__52858;
chunk__52758 = G__52859;
count__52759 = G__52860;
i__52760 = G__52861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52757);
if(temp__5735__auto__){
var seq__52757__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52757__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52757__$1);
var G__52863 = cljs.core.chunk_rest(seq__52757__$1);
var G__52864 = c__4609__auto__;
var G__52865 = cljs.core.count(c__4609__auto__);
var G__52866 = (0);
seq__52757 = G__52863;
chunk__52758 = G__52864;
count__52759 = G__52865;
i__52760 = G__52866;
continue;
} else {
var map__52778 = cljs.core.first(seq__52757__$1);
var map__52778__$1 = (((((!((map__52778 == null))))?(((((map__52778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52778):map__52778);
var effect = map__52778__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52757,chunk__52758,count__52759,i__52760,map__52778,map__52778__$1,effect,ms,dispatch,seq__52757__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52757,chunk__52758,count__52759,i__52760,map__52778,map__52778__$1,effect,ms,dispatch,seq__52757__$1,temp__5735__auto__))
,ms);
}


var G__52875 = cljs.core.next(seq__52757__$1);
var G__52876 = null;
var G__52877 = (0);
var G__52878 = (0);
seq__52757 = G__52875;
chunk__52758 = G__52876;
count__52759 = G__52877;
i__52760 = G__52878;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52783 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52784 = null;
var count__52785 = (0);
var i__52786 = (0);
while(true){
if((i__52786 < count__52785)){
var event = chunk__52784.cljs$core$IIndexed$_nth$arity$2(null,i__52786);
re_frame.router.dispatch(event);


var G__52883 = seq__52783;
var G__52884 = chunk__52784;
var G__52885 = count__52785;
var G__52886 = (i__52786 + (1));
seq__52783 = G__52883;
chunk__52784 = G__52884;
count__52785 = G__52885;
i__52786 = G__52886;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52783);
if(temp__5735__auto__){
var seq__52783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52783__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52783__$1);
var G__52896 = cljs.core.chunk_rest(seq__52783__$1);
var G__52897 = c__4609__auto__;
var G__52898 = cljs.core.count(c__4609__auto__);
var G__52899 = (0);
seq__52783 = G__52896;
chunk__52784 = G__52897;
count__52785 = G__52898;
i__52786 = G__52899;
continue;
} else {
var event = cljs.core.first(seq__52783__$1);
re_frame.router.dispatch(event);


var G__52900 = cljs.core.next(seq__52783__$1);
var G__52901 = null;
var G__52902 = (0);
var G__52903 = (0);
seq__52783 = G__52900;
chunk__52784 = G__52901;
count__52785 = G__52902;
i__52786 = G__52903;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52799 = cljs.core.seq(value);
var chunk__52800 = null;
var count__52801 = (0);
var i__52802 = (0);
while(true){
if((i__52802 < count__52801)){
var event = chunk__52800.cljs$core$IIndexed$_nth$arity$2(null,i__52802);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52904 = seq__52799;
var G__52905 = chunk__52800;
var G__52906 = count__52801;
var G__52907 = (i__52802 + (1));
seq__52799 = G__52904;
chunk__52800 = G__52905;
count__52801 = G__52906;
i__52802 = G__52907;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52799);
if(temp__5735__auto__){
var seq__52799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52799__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52799__$1);
var G__52908 = cljs.core.chunk_rest(seq__52799__$1);
var G__52909 = c__4609__auto__;
var G__52910 = cljs.core.count(c__4609__auto__);
var G__52911 = (0);
seq__52799 = G__52908;
chunk__52800 = G__52909;
count__52801 = G__52910;
i__52802 = G__52911;
continue;
} else {
var event = cljs.core.first(seq__52799__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52912 = cljs.core.next(seq__52799__$1);
var G__52913 = null;
var G__52914 = (0);
var G__52915 = (0);
seq__52799 = G__52912;
chunk__52800 = G__52913;
count__52801 = G__52914;
i__52802 = G__52915;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
