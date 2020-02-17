goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52258){
var map__52259 = p__52258;
var map__52259__$1 = (((((!((map__52259 == null))))?(((((map__52259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52259):map__52259);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52270_52323 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52271_52324 = null;
var count__52272_52325 = (0);
var i__52273_52326 = (0);
while(true){
if((i__52273_52326 < count__52272_52325)){
var vec__52286_52327 = chunk__52271_52324.cljs$core$IIndexed$_nth$arity$2(null,i__52273_52326);
var k_52328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286_52327,(0),null);
var cb_52329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286_52327,(1),null);
try{var G__52290_52333 = cljs.core.deref(re_frame.trace.traces);
(cb_52329.cljs$core$IFn$_invoke$arity$1 ? cb_52329.cljs$core$IFn$_invoke$arity$1(G__52290_52333) : cb_52329.call(null,G__52290_52333));
}catch (e52289){var e_52334 = e52289;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52328,"while storing",cljs.core.deref(re_frame.trace.traces),e_52334], 0));
}

var G__52335 = seq__52270_52323;
var G__52336 = chunk__52271_52324;
var G__52337 = count__52272_52325;
var G__52338 = (i__52273_52326 + (1));
seq__52270_52323 = G__52335;
chunk__52271_52324 = G__52336;
count__52272_52325 = G__52337;
i__52273_52326 = G__52338;
continue;
} else {
var temp__5735__auto___52345 = cljs.core.seq(seq__52270_52323);
if(temp__5735__auto___52345){
var seq__52270_52346__$1 = temp__5735__auto___52345;
if(cljs.core.chunked_seq_QMARK_(seq__52270_52346__$1)){
var c__4609__auto___52347 = cljs.core.chunk_first(seq__52270_52346__$1);
var G__52348 = cljs.core.chunk_rest(seq__52270_52346__$1);
var G__52350 = c__4609__auto___52347;
var G__52351 = cljs.core.count(c__4609__auto___52347);
var G__52352 = (0);
seq__52270_52323 = G__52348;
chunk__52271_52324 = G__52350;
count__52272_52325 = G__52351;
i__52273_52326 = G__52352;
continue;
} else {
var vec__52291_52355 = cljs.core.first(seq__52270_52346__$1);
var k_52356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52291_52355,(0),null);
var cb_52357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52291_52355,(1),null);
try{var G__52295_52358 = cljs.core.deref(re_frame.trace.traces);
(cb_52357.cljs$core$IFn$_invoke$arity$1 ? cb_52357.cljs$core$IFn$_invoke$arity$1(G__52295_52358) : cb_52357.call(null,G__52295_52358));
}catch (e52294){var e_52359 = e52294;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52356,"while storing",cljs.core.deref(re_frame.trace.traces),e_52359], 0));
}

var G__52361 = cljs.core.next(seq__52270_52346__$1);
var G__52362 = null;
var G__52363 = (0);
var G__52364 = (0);
seq__52270_52323 = G__52361;
chunk__52271_52324 = G__52362;
count__52272_52325 = G__52363;
i__52273_52326 = G__52364;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
