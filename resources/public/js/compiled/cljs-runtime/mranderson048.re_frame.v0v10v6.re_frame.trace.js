goog.provide('mranderson048.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
mranderson048.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
mranderson048.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_ = goog.define("mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
mranderson048.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.next_id = (function mranderson048$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace = (function mranderson048$re_frame$v0v10v6$re_frame$trace$start_trace(p__48074){
var map__48076 = p__48074;
var map__48076__$1 = (((((!((map__48076 == null))))?(((((map__48076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48076):map__48076);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48076__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48076__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48076__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48076__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),mranderson048.re_frame.v0v10v6.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], null);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce = (function mranderson048$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce = mranderson048.re_frame.v0v10v6.re_frame.trace.debounce((function mranderson048$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__48079_48108 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__48080_48109 = null;
var count__48081_48110 = (0);
var i__48082_48111 = (0);
while(true){
if((i__48082_48111 < count__48081_48110)){
var vec__48094_48112 = chunk__48080_48109.cljs$core$IIndexed$_nth$arity$2(null,i__48082_48111);
var k_48113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48094_48112,(0),null);
var cb_48114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48094_48112,(1),null);
try{var G__48098_48115 = cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces);
(cb_48114.cljs$core$IFn$_invoke$arity$1 ? cb_48114.cljs$core$IFn$_invoke$arity$1(G__48098_48115) : cb_48114.call(null,G__48098_48115));
}catch (e48097){var e_48116 = e48097;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_48113,"while storing",cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_48116], 0));
}

var G__48117 = seq__48079_48108;
var G__48118 = chunk__48080_48109;
var G__48119 = count__48081_48110;
var G__48120 = (i__48082_48111 + (1));
seq__48079_48108 = G__48117;
chunk__48080_48109 = G__48118;
count__48081_48110 = G__48119;
i__48082_48111 = G__48120;
continue;
} else {
var temp__5735__auto___48121 = cljs.core.seq(seq__48079_48108);
if(temp__5735__auto___48121){
var seq__48079_48126__$1 = temp__5735__auto___48121;
if(cljs.core.chunked_seq_QMARK_(seq__48079_48126__$1)){
var c__4609__auto___48127 = cljs.core.chunk_first(seq__48079_48126__$1);
var G__48128 = cljs.core.chunk_rest(seq__48079_48126__$1);
var G__48129 = c__4609__auto___48127;
var G__48130 = cljs.core.count(c__4609__auto___48127);
var G__48131 = (0);
seq__48079_48108 = G__48128;
chunk__48080_48109 = G__48129;
count__48081_48110 = G__48130;
i__48082_48111 = G__48131;
continue;
} else {
var vec__48099_48135 = cljs.core.first(seq__48079_48126__$1);
var k_48136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48099_48135,(0),null);
var cb_48137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48099_48135,(1),null);
try{var G__48104_48138 = cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces);
(cb_48137.cljs$core$IFn$_invoke$arity$1 ? cb_48137.cljs$core$IFn$_invoke$arity$1(G__48104_48138) : cb_48137.call(null,G__48104_48138));
}catch (e48103){var e_48139 = e48103;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_48136,"while storing",cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_48139], 0));
}

var G__48141 = cljs.core.next(seq__48079_48126__$1);
var G__48142 = null;
var G__48143 = (0);
var G__48144 = (0);
seq__48079_48108 = G__48141;
chunk__48080_48109 = G__48142;
count__48081_48110 = G__48143;
i__48082_48111 = G__48144;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time);
mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
(mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.trace.js.map
