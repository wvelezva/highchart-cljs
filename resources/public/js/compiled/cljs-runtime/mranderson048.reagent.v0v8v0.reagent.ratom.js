goog.provide('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('clojure.set');
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom.debug !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.debug = false;
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom.generation !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.generation = (0);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom._running !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
mranderson048.reagent.v0v8v0.reagent.ratom.reactive_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$reactive_QMARK_(){
return (!((mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
mranderson048.reagent.v0v8v0.reagent.ratom.running = (function mranderson048$reagent$v0v8v0$reagent$ratom$running(){
return cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.ratom._running);
});
mranderson048.reagent.v0v8v0.reagent.ratom.arr_len = (function mranderson048$reagent$v0v8v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.arr_eq = (function mranderson048$reagent$v0v8v0$reagent$ratom$arr_eq(x,y){
var len = mranderson048.reagent.v0v8v0.reagent.ratom.arr_len(x);
if((len === mranderson048.reagent.v0v8v0.reagent.ratom.arr_len(y))){
var i = (0);
while(true){
var or__4185__auto__ = (i === len);
if(or__4185__auto__){
return or__4185__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__46590 = (i + (1));
i = G__46590;
continue;
} else {
return false;
}
}
break;
}
} else {
return false;
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.in_context = (function mranderson048$reagent$v0v8v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__46314 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__46315 = obj;
(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__46315);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__46314);
}});
mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture = (function mranderson048$reagent$v0v8v0$reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (mranderson048.reagent.v0v8v0.reagent.ratom.generation = (mranderson048.reagent.v0v8v0.reagent.ratom.generation + (1))));


var res = mranderson048.reagent.v0v8v0.reagent.ratom.in_context(r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(mranderson048.reagent.v0v8v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
mranderson048.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5739__auto__ = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto__ == null)){
return null;
} else {
var r = temp__5739__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.check_watches = (function mranderson048$reagent$v0v8v0$reagent$ratom$check_watches(old,new$){
if(mranderson048.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.reagent.v0v8v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
mranderson048.reagent.v0v8v0.reagent.ratom.add_w = (function mranderson048$reagent$v0v8v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = mranderson048.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f)));

return (this$.watchesArr = null);
});
mranderson048.reagent.v0v8v0.reagent.ratom.remove_w = (function mranderson048$reagent$v0v8v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = mranderson048.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key)));

return (this$.watchesArr = null);
});
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w = (function mranderson048$reagent$v0v8v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv((function (p1__46333_SHARP_,p2__46334_SHARP_,p3__46335_SHARP_){
var G__46342 = p1__46333_SHARP_;
G__46342.push(p2__46334_SHARP_);

G__46342.push(p3__46335_SHARP_);

return G__46342;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_46601 = (a[i]);
var f_46602 = (a[(i + (1))]);
(f_46602.cljs$core$IFn$_invoke$arity$4 ? f_46602.cljs$core$IFn$_invoke$arity$4(k_46601,this$,old,new$) : f_46602.call(null,k_46601,this$,old,new$));

var G__46606 = ((2) + i);
i = G__46606;
continue;
} else {
return null;
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom = (function mranderson048$reagent$v0v8v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__46343 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__46344 = null;
(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__46344);

try{return cljs.core._deref(a);
}finally {(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__46343);
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue = null;
}
mranderson048.reagent.v0v8v0.reagent.ratom.rea_enqueue = (function mranderson048$reagent$v0v8v0$reagent$ratom$rea_enqueue(r){
if((mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue == null)){
(mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue = []);

mranderson048.reagent.v0v8v0.reagent.impl.batching.schedule();
} else {
}

return mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue.push(r);
});
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$flush_BANG_(){
while(true){
var q = mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue = null);

var n__4666__auto___46611 = q.length;
var i_46612 = (0);
while(true){
if((i_46612 < n__4666__auto___46611)){
(q[i_46612])._queued_run();

var G__46613 = (i_46612 + (1));
i_46612 = G__46613;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(mranderson048.reagent.v0v8v0.reagent.impl.batching.ratom_flush = mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_);

/**
 * @interface
 */
mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new mranderson048.reagent.v0v8v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson048.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/RAtom");

(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/RAtom");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/RAtom.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RAtom = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.atom = (function mranderson048$reagent$v0v8v0$reagent$ratom$atom(var_args){
var G__46418 = arguments.length;
switch (G__46418) {
case 1:
return mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___46629 = arguments.length;
var i__4790__auto___46630 = (0);
while(true){
if((i__4790__auto___46630 < len__4789__auto___46629)){
args_arr__4810__auto__.push((arguments[i__4790__auto___46630]));

var G__46631 = (i__4790__auto___46630 + (1));
i__4790__auto___46630 = G__46631;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,null,null,null);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__46422){
var map__46423 = p__46422;
var map__46423__$1 = (((((!((map__46423 == null))))?(((((map__46423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46423):map__46423);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46423__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46423__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
}));

/** @this {Function} */
(mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq46415){
var G__46416 = cljs.core.first(seq46415);
var seq46415__$1 = cljs.core.next(seq46415);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46416,seq46415__$1);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

mranderson048.reagent.v0v8v0.reagent.ratom.cache_key = "reagReactionCache";
mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__46431 = f;
var G__46432 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__46433 = (function (x){
if(mranderson048.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __46637 = (o["reagReactionCache"]);
var __46638__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__46637,k);
(o["reagReactionCache"] = __46638__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});
return (mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__46431,G__46432,G__46433) : mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__46431,G__46432,G__46433));
})();
var v = cljs.core._deref(r__$1);
(o["reagReactionCache"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(mranderson048.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v8v0.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/Track");

(mranderson048.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/Track");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/Track.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Track = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Track(f,args,reaction));
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_track = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_track(f,args){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Track(f,args,null));
});
mranderson048.reagent.v0v8v0.reagent.ratom.make_track_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_track_BANG_(f,args){
var t = mranderson048.reagent.v0v8v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__46443 = (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});
var G__46444 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__46445 = true;
return (mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__46443,G__46444,G__46445) : mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__46443,G__46444,G__46445));
})();
cljs.core.deref(r);

return r;
});
mranderson048.reagent.v0v8v0.reagent.ratom.track = (function mranderson048$reagent$v0v8v0$reagent$ratom$track(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46647 = arguments.length;
var i__4790__auto___46648 = (0);
while(true){
if((i__4790__auto___46648 < len__4789__auto___46647)){
args__4795__auto__.push((arguments[i__4790__auto___46648]));

var G__46649 = (i__4790__auto___46648 + (1));
i__4790__auto___46648 = G__46649;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.make_track(f,args);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq46447){
var G__46448 = cljs.core.first(seq46447);
var seq46447__$1 = cljs.core.next(seq46447);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46448,seq46447__$1);
}));

mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$track_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46657 = arguments.length;
var i__4790__auto___46658 = (0);
while(true){
if((i__4790__auto___46658 < len__4789__auto___46657)){
args__4795__auto__.push((arguments[i__4790__auto___46658]));

var G__46660 = (i__4790__auto___46658 + (1));
i__4790__auto___46658 = G__46660;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.make_track_BANG_(f,args);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq46457){
var G__46458 = cljs.core.first(seq46457);
var seq46457__$1 = cljs.core.next(seq46457);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46458,seq46457__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__46467 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__46468 = null;
(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__46468);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__46467);
}}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v8v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__46481 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46481) : f.call(null,G__46481));
})());
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__46486 = a__$1._peek();
var G__46487 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46486,G__46487) : f.call(null,G__46486,G__46487));
})());
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__46490 = a__$1._peek();
var G__46491 = x;
var G__46492 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46490,G__46491,G__46492) : f.call(null,G__46490,G__46491,G__46492));
})());
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
}):(function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
}));
return mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/RCursor");

(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/RCursor");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/RCursor.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RCursor = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

mranderson048.reagent.v0v8v0.reagent.ratom.cursor = (function mranderson048$reagent$v0v8v0$reagent$ratom$cursor(src,path){
if((function (){var or__4185__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
mranderson048.reagent.v0v8v0.reagent.ratom.with_let_destroy = (function mranderson048$reagent$v0v8v0$reagent$ratom$with_let_destroy(v){
var temp__5739__auto__ = v.destroy;
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.with_let_values = (function mranderson048$reagent$v0v8v0$reagent$ratom$with_let_values(key){
var temp__5737__auto__ = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5737__auto__ == null)){
return [];
} else {
var c = temp__5737__auto__;
return mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,mranderson048.reagent.v0v8v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
mranderson048.reagent.v0v8v0.reagent.ratom.IDisposable = function(){};

mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4488__auto__.call(null,this$,f));
} else {
var m__4485__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4485__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
mranderson048.reagent.v0v8v0.reagent.ratom.IRunnable = function(){};

mranderson048.reagent.v0v8v0.reagent.ratom.run = (function mranderson048$reagent$v0v8v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.run[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.run["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.handle_reaction_change = (function mranderson048$reagent$v0v8v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IRunnable}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__46506 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__46507 = null;
(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__46507);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__46506);
}}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return mranderson048.reagent.v0v8v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
(self__.watching = derefed);

var seq__46511_46705 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__46512_46706 = null;
var count__46513_46707 = (0);
var i__46514_46708 = (0);
while(true){
if((i__46514_46708 < count__46513_46707)){
var w_46709 = chunk__46512_46706.cljs$core$IIndexed$_nth$arity$2(null,i__46514_46708);
cljs.core._add_watch(w_46709,this$,mranderson048.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__46716 = seq__46511_46705;
var G__46717 = chunk__46512_46706;
var G__46718 = count__46513_46707;
var G__46719 = (i__46514_46708 + (1));
seq__46511_46705 = G__46716;
chunk__46512_46706 = G__46717;
count__46513_46707 = G__46718;
i__46514_46708 = G__46719;
continue;
} else {
var temp__5735__auto___46720 = cljs.core.seq(seq__46511_46705);
if(temp__5735__auto___46720){
var seq__46511_46721__$1 = temp__5735__auto___46720;
if(cljs.core.chunked_seq_QMARK_(seq__46511_46721__$1)){
var c__4609__auto___46723 = cljs.core.chunk_first(seq__46511_46721__$1);
var G__46725 = cljs.core.chunk_rest(seq__46511_46721__$1);
var G__46726 = c__4609__auto___46723;
var G__46727 = cljs.core.count(c__4609__auto___46723);
var G__46728 = (0);
seq__46511_46705 = G__46725;
chunk__46512_46706 = G__46726;
count__46513_46707 = G__46727;
i__46514_46708 = G__46728;
continue;
} else {
var w_46729 = cljs.core.first(seq__46511_46721__$1);
cljs.core._add_watch(w_46729,this$,mranderson048.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__46731 = cljs.core.next(seq__46511_46721__$1);
var G__46732 = null;
var G__46733 = (0);
var G__46734 = (0);
seq__46511_46705 = G__46731;
chunk__46512_46706 = G__46732;
count__46513_46707 = G__46733;
i__46514_46708 = G__46734;
continue;
}
} else {
}
}
break;
}

var seq__46515 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__46516 = null;
var count__46517 = (0);
var i__46518 = (0);
while(true){
if((i__46518 < count__46517)){
var w = chunk__46516.cljs$core$IIndexed$_nth$arity$2(null,i__46518);
cljs.core._remove_watch(w,this$);


var G__46735 = seq__46515;
var G__46736 = chunk__46516;
var G__46737 = count__46517;
var G__46738 = (i__46518 + (1));
seq__46515 = G__46735;
chunk__46516 = G__46736;
count__46517 = G__46737;
i__46518 = G__46738;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46515);
if(temp__5735__auto__){
var seq__46515__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46515__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46515__$1);
var G__46742 = cljs.core.chunk_rest(seq__46515__$1);
var G__46743 = c__4609__auto__;
var G__46744 = cljs.core.count(c__4609__auto__);
var G__46745 = (0);
seq__46515 = G__46742;
chunk__46516 = G__46743;
count__46517 = G__46744;
i__46518 = G__46745;
continue;
} else {
var w = cljs.core.first(seq__46515__$1);
cljs.core._remove_watch(w,this$);


var G__46747 = cljs.core.next(seq__46515__$1);
var G__46748 = null;
var G__46749 = (0);
var G__46750 = (0);
seq__46515 = G__46747;
chunk__46516 = G__46748;
count__46517 = G__46749;
i__46518 = G__46750;
continue;
}
} else {
return null;
}
}
break;
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e46524){var e = e46524;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__46530){
var self__ = this;
var map__46532 = p__46530;
var map__46532__$1 = (((((!((map__46532 == null))))?(((((map__46532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46532):map__46532);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46532__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46532__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46532__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46532__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__46539_46762 = cljs.core.seq(cljs.core.set(wg));
var chunk__46540_46763 = null;
var count__46541_46764 = (0);
var i__46542_46765 = (0);
while(true){
if((i__46542_46765 < count__46541_46764)){
var w_46767 = chunk__46540_46763.cljs$core$IIndexed$_nth$arity$2(null,i__46542_46765);
cljs.core._remove_watch(w_46767,this$__$1);


var G__46769 = seq__46539_46762;
var G__46770 = chunk__46540_46763;
var G__46771 = count__46541_46764;
var G__46772 = (i__46542_46765 + (1));
seq__46539_46762 = G__46769;
chunk__46540_46763 = G__46770;
count__46541_46764 = G__46771;
i__46542_46765 = G__46772;
continue;
} else {
var temp__5735__auto___46773 = cljs.core.seq(seq__46539_46762);
if(temp__5735__auto___46773){
var seq__46539_46774__$1 = temp__5735__auto___46773;
if(cljs.core.chunked_seq_QMARK_(seq__46539_46774__$1)){
var c__4609__auto___46775 = cljs.core.chunk_first(seq__46539_46774__$1);
var G__46776 = cljs.core.chunk_rest(seq__46539_46774__$1);
var G__46777 = c__4609__auto___46775;
var G__46778 = cljs.core.count(c__4609__auto___46775);
var G__46779 = (0);
seq__46539_46762 = G__46776;
chunk__46540_46763 = G__46777;
count__46541_46764 = G__46778;
i__46542_46765 = G__46779;
continue;
} else {
var w_46781 = cljs.core.first(seq__46539_46774__$1);
cljs.core._remove_watch(w_46781,this$__$1);


var G__46782 = cljs.core.next(seq__46539_46774__$1);
var G__46783 = null;
var G__46784 = (0);
var G__46785 = (0);
seq__46539_46762 = G__46782;
chunk__46540_46763 = G__46783;
count__46541_46764 = G__46784;
i__46542_46765 = G__46785;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5739__auto__ = this$__$1.on_dispose_arr;
if((temp__5739__auto__ == null)){
return null;
} else {
var a = temp__5739__auto__;
var n__4666__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
var fexpr__46550_46789 = (a[i]);
(fexpr__46550_46789.cljs$core$IFn$_invoke$arity$1 ? fexpr__46550_46789.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__46550_46789.call(null,this$__$1));

var G__46794 = (i + (1));
i = G__46794;
continue;
} else {
return null;
}
break;
}
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = this$__$1.on_dispose_arr;
if((temp__5737__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5737__auto__;
return a.push(f__$1);
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__46551 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__46551) : f__$1.call(null,G__46551));
})());
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__46552 = a__$1._peek_at();
var G__46553 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__46552,G__46553) : f__$1.call(null,G__46552,G__46553));
})());
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__46554 = a__$1._peek_at();
var G__46555 = x;
var G__46556 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__46554,G__46555,G__46556) : f__$1.call(null,G__46554,G__46555,G__46556));
})());
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

return this$__$1._run(false);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f__$1);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5739__auto___46808 = self__.caught;
if((temp__5739__auto___46808 == null)){
} else {
var e_46809 = temp__5739__auto___46808;
throw e_46809;
}

var non_reactive_46810 = (mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_46810){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_46810) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_46812 = self__.state;
(self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null)));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_46812,self__.state)))){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldstate_46812,self__.state);
}
} else {
}
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/Reaction");

(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/Reaction");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/Reaction.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_reaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46821 = arguments.length;
var i__4790__auto___46822 = (0);
while(true){
if((i__4790__auto___46822 < len__4789__auto___46821)){
args__4795__auto__.push((arguments[i__4790__auto___46822]));

var G__46825 = (i__4790__auto___46822 + (1));
i__4790__auto___46822 = G__46825;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__46559){
var map__46560 = p__46559;
var map__46560__$1 = (((((!((map__46560 == null))))?(((((map__46560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46560):map__46560);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46560__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46560__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46560__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq46557){
var G__46558 = cljs.core.first(seq46557);
var seq46557__$1 = cljs.core.next(seq46557);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46558,seq46557__$1);
}));

mranderson048.reagent.v0v8v0.reagent.ratom.temp_reaction = mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction(null);
mranderson048.reagent.v0v8v0.reagent.ratom.run_in_reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = mranderson048.reagent.v0v8v0.reagent.ratom.temp_reaction;
var res = mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
(mranderson048.reagent.v0v8v0.reagent.ratom.temp_reaction = mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction(null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
}));

(obj[key] = r);
}

return res;
});
mranderson048.reagent.v0v8v0.reagent.ratom.check_derefs = (function mranderson048$reagent$v0v8v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = mranderson048.reagent.v0v8v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/Wrapper");

(mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/Wrapper.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Wrapper = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_wrapper = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Wrapper(value,mranderson048.reagent.v0v8v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.ratom.js.map
