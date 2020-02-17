goog.provide('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('clojure.string');
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.batching !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.batching.mount_count !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.impl.batching.mount_count = (0);
}
mranderson048.reagent.v0v8v0.reagent.impl.batching.next_mount_count = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$next_mount_count(){
return (mranderson048.reagent.v0v8v0.reagent.impl.batching.mount_count = (mranderson048.reagent.v0v8v0.reagent.impl.batching.mount_count + (1)));
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.fake_raf = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.next_tick = (((!(mranderson048.reagent.v0v8v0.reagent.impl.util.is_client)))?mranderson048.reagent.v0v8v0.reagent.impl.batching.fake_raf:(function (){var w = window;
var or__4185__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var or__4185__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto____$3)){
return or__4185__auto____$3;
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.batching.fake_raf;
}
}
}
}
})());
mranderson048.reagent.v0v8v0.reagent.impl.batching.compare_mount_order = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$compare_mount_order(c1,c2){
return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.run_queue = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$run_queue(a){
a.sort(mranderson048.reagent.v0v8v0.reagent.impl.batching.compare_mount_order);

var n__4666__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
var c_46188 = (a[i]);
if((c_46188["cljsIsDirty"]) === true){
(c_46188["forceUpdate"])();
} else {
}

var G__46190 = (i + (1));
i = G__46190;
continue;
} else {
return null;
}
break;
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.batching !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.impl.batching.ratom_flush = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$ratom_flush(){
return null;
});
}

/**
* @constructor
*/
mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.run_funs = (function (k){
var self__ = this;
var this$ = this;
var temp__5739__auto__ = (this$[k]);
if((temp__5739__auto__ == null)){
return null;
} else {
var fs = temp__5739__auto__;
(this$[k] = null);

var n__4666__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
var fexpr__46166_46194 = (fs[i]);
(fexpr__46166_46194.cljs$core$IFn$_invoke$arity$0 ? fexpr__46166_46194.cljs$core$IFn$_invoke$arity$0() : fexpr__46166_46194.call(null));

var G__46195 = (i + (1));
i = G__46195;
continue;
} else {
return null;
}
break;
}
}
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
return this$.run_funs("afterRender");
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
return this$.enqueue("componentQueue",c);
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
(self__.scheduled_QMARK_ = true);

var G__46174 = (function (){
return this$.run_queues();
});
return (mranderson048.reagent.v0v8v0.reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__46174) : mranderson048.reagent.v0v8v0.reagent.impl.batching.next_tick.call(null,G__46174));
}
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.run_funs("beforeFlush");

mranderson048.reagent.v0v8v0.reagent.impl.batching.ratom_flush();

var temp__5739__auto___46200 = (this$["componentQueue"]);
if((temp__5739__auto___46200 == null)){
} else {
var cs_46202 = temp__5739__auto___46200;
(this$["componentQueue"] = null);

mranderson048.reagent.v0v8v0.reagent.impl.batching.run_queue(cs_46202);
}

return this$.flush_after_render();
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
(self__.scheduled_QMARK_ = false);

return this$.flush_queues();
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.enqueue = (function (k,f){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["Enqueued function"," must not be nil"].join(''),"\n","f"].join('')));
}

if(((this$[k]) == null)){
(this$[k] = []);
} else {
}

(this$[k]).push(f);

return this$.schedule();
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("beforeFlush",f);
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("afterRender",f);
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.impl.batching/RenderQueue");

(mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"mranderson048.reagent.v0v8v0.reagent.impl.batching/RenderQueue");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.impl.batching/RenderQueue.
 */
mranderson048.reagent.v0v8v0.reagent.impl.batching.__GT_RenderQueue = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new mranderson048.reagent.v0v8v0.reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.batching !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue = mranderson048.reagent.v0v8v0.reagent.impl.batching.__GT_RenderQueue(false);
}
mranderson048.reagent.v0v8v0.reagent.impl.batching.flush = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$flush(){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue.flush_queues();
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$flush_after_render(){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue.flush_after_render();
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.queue_render = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$queue_render(c){
if(cljs.core.truth_((c["cljsIsDirty"]))){
return null;
} else {
(c["cljsIsDirty"] = true);

return mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue.queue_render(c);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.mark_rendered = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$mark_rendered(c){
return (c["cljsIsDirty"] = false);
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.do_before_flush = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$do_before_flush(f){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue.add_before_flush(f);
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.do_after_render = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$do_after_render(f){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue.add_after_render(f);
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.schedule = (function mranderson048$reagent$v0v8v0$reagent$impl$batching$schedule(){
if(mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.impl.batching.js.map
