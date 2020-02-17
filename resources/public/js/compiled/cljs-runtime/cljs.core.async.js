goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56224 = arguments.length;
switch (G__56224) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56228 = (function (f,blockable,meta56229){
this.f = f;
this.blockable = blockable;
this.meta56229 = meta56229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56230,meta56229__$1){
var self__ = this;
var _56230__$1 = this;
return (new cljs.core.async.t_cljs$core$async56228(self__.f,self__.blockable,meta56229__$1));
}));

(cljs.core.async.t_cljs$core$async56228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56230){
var self__ = this;
var _56230__$1 = this;
return self__.meta56229;
}));

(cljs.core.async.t_cljs$core$async56228.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56228.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56229","meta56229",612334055,null)], null);
}));

(cljs.core.async.t_cljs$core$async56228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56228");

(cljs.core.async.t_cljs$core$async56228.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56228.
 */
cljs.core.async.__GT_t_cljs$core$async56228 = (function cljs$core$async$__GT_t_cljs$core$async56228(f__$1,blockable__$1,meta56229){
return (new cljs.core.async.t_cljs$core$async56228(f__$1,blockable__$1,meta56229));
});

}

return (new cljs.core.async.t_cljs$core$async56228(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56246 = arguments.length;
switch (G__56246) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56258 = arguments.length;
switch (G__56258) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56269 = arguments.length;
switch (G__56269) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_57861 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57861) : fn1.call(null,val_57861));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57861) : fn1.call(null,val_57861));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56271 = arguments.length;
switch (G__56271) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___57872 = n;
var x_57873 = (0);
while(true){
if((x_57873 < n__4666__auto___57872)){
(a[x_57873] = x_57873);

var G__57878 = (x_57873 + (1));
x_57873 = G__57878;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56280 = (function (flag,meta56281){
this.flag = flag;
this.meta56281 = meta56281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56282,meta56281__$1){
var self__ = this;
var _56282__$1 = this;
return (new cljs.core.async.t_cljs$core$async56280(self__.flag,meta56281__$1));
}));

(cljs.core.async.t_cljs$core$async56280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56282){
var self__ = this;
var _56282__$1 = this;
return self__.meta56281;
}));

(cljs.core.async.t_cljs$core$async56280.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56281","meta56281",1247015563,null)], null);
}));

(cljs.core.async.t_cljs$core$async56280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56280");

(cljs.core.async.t_cljs$core$async56280.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56280.
 */
cljs.core.async.__GT_t_cljs$core$async56280 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56280(flag__$1,meta56281){
return (new cljs.core.async.t_cljs$core$async56280(flag__$1,meta56281));
});

}

return (new cljs.core.async.t_cljs$core$async56280(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56296 = (function (flag,cb,meta56297){
this.flag = flag;
this.cb = cb;
this.meta56297 = meta56297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56298,meta56297__$1){
var self__ = this;
var _56298__$1 = this;
return (new cljs.core.async.t_cljs$core$async56296(self__.flag,self__.cb,meta56297__$1));
}));

(cljs.core.async.t_cljs$core$async56296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56298){
var self__ = this;
var _56298__$1 = this;
return self__.meta56297;
}));

(cljs.core.async.t_cljs$core$async56296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56297","meta56297",-1711151182,null)], null);
}));

(cljs.core.async.t_cljs$core$async56296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56296");

(cljs.core.async.t_cljs$core$async56296.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56296.
 */
cljs.core.async.__GT_t_cljs$core$async56296 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56296(flag__$1,cb__$1,meta56297){
return (new cljs.core.async.t_cljs$core$async56296(flag__$1,cb__$1,meta56297));
});

}

return (new cljs.core.async.t_cljs$core$async56296(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56310_SHARP_){
var G__56313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56310_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56313) : fret.call(null,G__56313));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56311_SHARP_){
var G__56314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56311_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56314) : fret.call(null,G__56314));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57899 = (i + (1));
i = G__57899;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57904 = arguments.length;
var i__4790__auto___57905 = (0);
while(true){
if((i__4790__auto___57905 < len__4789__auto___57904)){
args__4795__auto__.push((arguments[i__4790__auto___57905]));

var G__57906 = (i__4790__auto___57905 + (1));
i__4790__auto___57905 = G__57906;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56348){
var map__56349 = p__56348;
var map__56349__$1 = (((((!((map__56349 == null))))?(((((map__56349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56349):map__56349);
var opts = map__56349__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56338){
var G__56339 = cljs.core.first(seq56338);
var seq56338__$1 = cljs.core.next(seq56338);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56339,seq56338__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56369 = arguments.length;
switch (G__56369) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56164__auto___57916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56460){
var state_val_56461 = (state_56460[(1)]);
if((state_val_56461 === (7))){
var inst_56451 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
var statearr_56466_57917 = state_56460__$1;
(statearr_56466_57917[(2)] = inst_56451);

(statearr_56466_57917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (1))){
var state_56460__$1 = state_56460;
var statearr_56467_57918 = state_56460__$1;
(statearr_56467_57918[(2)] = null);

(statearr_56467_57918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (4))){
var inst_56434 = (state_56460[(7)]);
var inst_56434__$1 = (state_56460[(2)]);
var inst_56435 = (inst_56434__$1 == null);
var state_56460__$1 = (function (){var statearr_56468 = state_56460;
(statearr_56468[(7)] = inst_56434__$1);

return statearr_56468;
})();
if(cljs.core.truth_(inst_56435)){
var statearr_56469_57919 = state_56460__$1;
(statearr_56469_57919[(1)] = (5));

} else {
var statearr_56470_57920 = state_56460__$1;
(statearr_56470_57920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (13))){
var state_56460__$1 = state_56460;
var statearr_56471_57923 = state_56460__$1;
(statearr_56471_57923[(2)] = null);

(statearr_56471_57923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (6))){
var inst_56434 = (state_56460[(7)]);
var state_56460__$1 = state_56460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56460__$1,(11),to,inst_56434);
} else {
if((state_val_56461 === (3))){
var inst_56453 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56460__$1,inst_56453);
} else {
if((state_val_56461 === (12))){
var state_56460__$1 = state_56460;
var statearr_56472_57925 = state_56460__$1;
(statearr_56472_57925[(2)] = null);

(statearr_56472_57925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (2))){
var state_56460__$1 = state_56460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56460__$1,(4),from);
} else {
if((state_val_56461 === (11))){
var inst_56444 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
if(cljs.core.truth_(inst_56444)){
var statearr_56473_57929 = state_56460__$1;
(statearr_56473_57929[(1)] = (12));

} else {
var statearr_56474_57931 = state_56460__$1;
(statearr_56474_57931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (9))){
var state_56460__$1 = state_56460;
var statearr_56475_57932 = state_56460__$1;
(statearr_56475_57932[(2)] = null);

(statearr_56475_57932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (5))){
var state_56460__$1 = state_56460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56476_57934 = state_56460__$1;
(statearr_56476_57934[(1)] = (8));

} else {
var statearr_56477_57935 = state_56460__$1;
(statearr_56477_57935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (14))){
var inst_56449 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
var statearr_56478_57936 = state_56460__$1;
(statearr_56478_57936[(2)] = inst_56449);

(statearr_56478_57936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (10))){
var inst_56441 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
var statearr_56479_57937 = state_56460__$1;
(statearr_56479_57937[(2)] = inst_56441);

(statearr_56479_57937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (8))){
var inst_56438 = cljs.core.async.close_BANG_(to);
var state_56460__$1 = state_56460;
var statearr_56480_57938 = state_56460__$1;
(statearr_56480_57938[(2)] = inst_56438);

(statearr_56480_57938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_56481 = [null,null,null,null,null,null,null,null];
(statearr_56481[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_56481[(1)] = (1));

return statearr_56481;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_56460){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56460);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56482){if((e56482 instanceof Object)){
var ex__55998__auto__ = e56482;
var statearr_56483_57941 = state_56460;
(statearr_56483_57941[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57943 = state_56460;
state_56460 = G__57943;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_56460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_56460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56484 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56484[(6)] = c__56164__auto___57916);

return statearr_56484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56485){
var vec__56486 = p__56485;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56486,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56486,(1),null);
var job = vec__56486;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56164__auto___57954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56493){
var state_val_56494 = (state_56493[(1)]);
if((state_val_56494 === (1))){
var state_56493__$1 = state_56493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56493__$1,(2),res,v);
} else {
if((state_val_56494 === (2))){
var inst_56490 = (state_56493[(2)]);
var inst_56491 = cljs.core.async.close_BANG_(res);
var state_56493__$1 = (function (){var statearr_56495 = state_56493;
(statearr_56495[(7)] = inst_56490);

return statearr_56495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56493__$1,inst_56491);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0 = (function (){
var statearr_56496 = [null,null,null,null,null,null,null,null];
(statearr_56496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__);

(statearr_56496[(1)] = (1));

return statearr_56496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1 = (function (state_56493){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56493);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56497){if((e56497 instanceof Object)){
var ex__55998__auto__ = e56497;
var statearr_56498_57960 = state_56493;
(statearr_56498_57960[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57961 = state_56493;
state_56493 = G__57961;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = function(state_56493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1.call(this,state_56493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56499 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56499[(6)] = c__56164__auto___57954);

return statearr_56499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56500){
var vec__56501 = p__56500;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56501,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56501,(1),null);
var job = vec__56501;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___57966 = n;
var __57967 = (0);
while(true){
if((__57967 < n__4666__auto___57966)){
var G__56504_57968 = type;
var G__56504_57969__$1 = (((G__56504_57968 instanceof cljs.core.Keyword))?G__56504_57968.fqn:null);
switch (G__56504_57969__$1) {
case "compute":
var c__56164__auto___57971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57967,c__56164__auto___57971,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async){
return (function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = ((function (__57967,c__56164__auto___57971,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async){
return (function (state_56517){
var state_val_56518 = (state_56517[(1)]);
if((state_val_56518 === (1))){
var state_56517__$1 = state_56517;
var statearr_56519_57972 = state_56517__$1;
(statearr_56519_57972[(2)] = null);

(statearr_56519_57972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56518 === (2))){
var state_56517__$1 = state_56517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56517__$1,(4),jobs);
} else {
if((state_val_56518 === (3))){
var inst_56515 = (state_56517[(2)]);
var state_56517__$1 = state_56517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56517__$1,inst_56515);
} else {
if((state_val_56518 === (4))){
var inst_56507 = (state_56517[(2)]);
var inst_56508 = process(inst_56507);
var state_56517__$1 = state_56517;
if(cljs.core.truth_(inst_56508)){
var statearr_56520_57973 = state_56517__$1;
(statearr_56520_57973[(1)] = (5));

} else {
var statearr_56521_57974 = state_56517__$1;
(statearr_56521_57974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56518 === (5))){
var state_56517__$1 = state_56517;
var statearr_56522_57975 = state_56517__$1;
(statearr_56522_57975[(2)] = null);

(statearr_56522_57975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56518 === (6))){
var state_56517__$1 = state_56517;
var statearr_56523_57976 = state_56517__$1;
(statearr_56523_57976[(2)] = null);

(statearr_56523_57976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56518 === (7))){
var inst_56513 = (state_56517[(2)]);
var state_56517__$1 = state_56517;
var statearr_56524_57977 = state_56517__$1;
(statearr_56524_57977[(2)] = inst_56513);

(statearr_56524_57977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57967,c__56164__auto___57971,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async))
;
return ((function (__57967,switch__55994__auto__,c__56164__auto___57971,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0 = (function (){
var statearr_56525 = [null,null,null,null,null,null,null];
(statearr_56525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__);

(statearr_56525[(1)] = (1));

return statearr_56525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1 = (function (state_56517){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56517);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56526){if((e56526 instanceof Object)){
var ex__55998__auto__ = e56526;
var statearr_56527_57982 = state_56517;
(statearr_56527_57982[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57984 = state_56517;
state_56517 = G__57984;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = function(state_56517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1.call(this,state_56517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__;
})()
;})(__57967,switch__55994__auto__,c__56164__auto___57971,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async))
})();
var state__56166__auto__ = (function (){var statearr_56528 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56528[(6)] = c__56164__auto___57971);

return statearr_56528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
});})(__57967,c__56164__auto___57971,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async))
);


break;
case "async":
var c__56164__auto___57988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57967,c__56164__auto___57988,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async){
return (function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = ((function (__57967,c__56164__auto___57988,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async){
return (function (state_56541){
var state_val_56542 = (state_56541[(1)]);
if((state_val_56542 === (1))){
var state_56541__$1 = state_56541;
var statearr_56543_57990 = state_56541__$1;
(statearr_56543_57990[(2)] = null);

(statearr_56543_57990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56542 === (2))){
var state_56541__$1 = state_56541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56541__$1,(4),jobs);
} else {
if((state_val_56542 === (3))){
var inst_56539 = (state_56541[(2)]);
var state_56541__$1 = state_56541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56541__$1,inst_56539);
} else {
if((state_val_56542 === (4))){
var inst_56531 = (state_56541[(2)]);
var inst_56532 = async(inst_56531);
var state_56541__$1 = state_56541;
if(cljs.core.truth_(inst_56532)){
var statearr_56544_57991 = state_56541__$1;
(statearr_56544_57991[(1)] = (5));

} else {
var statearr_56545_57992 = state_56541__$1;
(statearr_56545_57992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56542 === (5))){
var state_56541__$1 = state_56541;
var statearr_56546_57993 = state_56541__$1;
(statearr_56546_57993[(2)] = null);

(statearr_56546_57993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56542 === (6))){
var state_56541__$1 = state_56541;
var statearr_56547_57994 = state_56541__$1;
(statearr_56547_57994[(2)] = null);

(statearr_56547_57994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56542 === (7))){
var inst_56537 = (state_56541[(2)]);
var state_56541__$1 = state_56541;
var statearr_56548_57995 = state_56541__$1;
(statearr_56548_57995[(2)] = inst_56537);

(statearr_56548_57995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57967,c__56164__auto___57988,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async))
;
return ((function (__57967,switch__55994__auto__,c__56164__auto___57988,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0 = (function (){
var statearr_56549 = [null,null,null,null,null,null,null];
(statearr_56549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__);

(statearr_56549[(1)] = (1));

return statearr_56549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1 = (function (state_56541){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56541);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56550){if((e56550 instanceof Object)){
var ex__55998__auto__ = e56550;
var statearr_56551_57999 = state_56541;
(statearr_56551_57999[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58000 = state_56541;
state_56541 = G__58000;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = function(state_56541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1.call(this,state_56541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__;
})()
;})(__57967,switch__55994__auto__,c__56164__auto___57988,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async))
})();
var state__56166__auto__ = (function (){var statearr_56552 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56552[(6)] = c__56164__auto___57988);

return statearr_56552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
});})(__57967,c__56164__auto___57988,G__56504_57968,G__56504_57969__$1,n__4666__auto___57966,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56504_57969__$1)].join('')));

}

var G__58002 = (__57967 + (1));
__57967 = G__58002;
continue;
} else {
}
break;
}

var c__56164__auto___58003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56574){
var state_val_56575 = (state_56574[(1)]);
if((state_val_56575 === (7))){
var inst_56570 = (state_56574[(2)]);
var state_56574__$1 = state_56574;
var statearr_56576_58006 = state_56574__$1;
(statearr_56576_58006[(2)] = inst_56570);

(statearr_56576_58006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (1))){
var state_56574__$1 = state_56574;
var statearr_56577_58008 = state_56574__$1;
(statearr_56577_58008[(2)] = null);

(statearr_56577_58008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (4))){
var inst_56555 = (state_56574[(7)]);
var inst_56555__$1 = (state_56574[(2)]);
var inst_56556 = (inst_56555__$1 == null);
var state_56574__$1 = (function (){var statearr_56578 = state_56574;
(statearr_56578[(7)] = inst_56555__$1);

return statearr_56578;
})();
if(cljs.core.truth_(inst_56556)){
var statearr_56579_58010 = state_56574__$1;
(statearr_56579_58010[(1)] = (5));

} else {
var statearr_56580_58011 = state_56574__$1;
(statearr_56580_58011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (6))){
var inst_56555 = (state_56574[(7)]);
var inst_56560 = (state_56574[(8)]);
var inst_56560__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56562 = [inst_56555,inst_56560__$1];
var inst_56563 = (new cljs.core.PersistentVector(null,2,(5),inst_56561,inst_56562,null));
var state_56574__$1 = (function (){var statearr_56581 = state_56574;
(statearr_56581[(8)] = inst_56560__$1);

return statearr_56581;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56574__$1,(8),jobs,inst_56563);
} else {
if((state_val_56575 === (3))){
var inst_56572 = (state_56574[(2)]);
var state_56574__$1 = state_56574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56574__$1,inst_56572);
} else {
if((state_val_56575 === (2))){
var state_56574__$1 = state_56574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56574__$1,(4),from);
} else {
if((state_val_56575 === (9))){
var inst_56567 = (state_56574[(2)]);
var state_56574__$1 = (function (){var statearr_56582 = state_56574;
(statearr_56582[(9)] = inst_56567);

return statearr_56582;
})();
var statearr_56583_58014 = state_56574__$1;
(statearr_56583_58014[(2)] = null);

(statearr_56583_58014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (5))){
var inst_56558 = cljs.core.async.close_BANG_(jobs);
var state_56574__$1 = state_56574;
var statearr_56584_58015 = state_56574__$1;
(statearr_56584_58015[(2)] = inst_56558);

(statearr_56584_58015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (8))){
var inst_56560 = (state_56574[(8)]);
var inst_56565 = (state_56574[(2)]);
var state_56574__$1 = (function (){var statearr_56585 = state_56574;
(statearr_56585[(10)] = inst_56565);

return statearr_56585;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56574__$1,(9),results,inst_56560);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0 = (function (){
var statearr_56586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__);

(statearr_56586[(1)] = (1));

return statearr_56586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1 = (function (state_56574){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56574);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56587){if((e56587 instanceof Object)){
var ex__55998__auto__ = e56587;
var statearr_56588_58018 = state_56574;
(statearr_56588_58018[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58019 = state_56574;
state_56574 = G__58019;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = function(state_56574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1.call(this,state_56574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56589 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56589[(6)] = c__56164__auto___58003);

return statearr_56589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


var c__56164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56627){
var state_val_56628 = (state_56627[(1)]);
if((state_val_56628 === (7))){
var inst_56623 = (state_56627[(2)]);
var state_56627__$1 = state_56627;
var statearr_56629_58020 = state_56627__$1;
(statearr_56629_58020[(2)] = inst_56623);

(statearr_56629_58020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (20))){
var state_56627__$1 = state_56627;
var statearr_56630_58022 = state_56627__$1;
(statearr_56630_58022[(2)] = null);

(statearr_56630_58022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (1))){
var state_56627__$1 = state_56627;
var statearr_56631_58024 = state_56627__$1;
(statearr_56631_58024[(2)] = null);

(statearr_56631_58024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (4))){
var inst_56592 = (state_56627[(7)]);
var inst_56592__$1 = (state_56627[(2)]);
var inst_56593 = (inst_56592__$1 == null);
var state_56627__$1 = (function (){var statearr_56632 = state_56627;
(statearr_56632[(7)] = inst_56592__$1);

return statearr_56632;
})();
if(cljs.core.truth_(inst_56593)){
var statearr_56633_58025 = state_56627__$1;
(statearr_56633_58025[(1)] = (5));

} else {
var statearr_56634_58026 = state_56627__$1;
(statearr_56634_58026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (15))){
var inst_56605 = (state_56627[(8)]);
var state_56627__$1 = state_56627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56627__$1,(18),to,inst_56605);
} else {
if((state_val_56628 === (21))){
var inst_56618 = (state_56627[(2)]);
var state_56627__$1 = state_56627;
var statearr_56635_58027 = state_56627__$1;
(statearr_56635_58027[(2)] = inst_56618);

(statearr_56635_58027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (13))){
var inst_56620 = (state_56627[(2)]);
var state_56627__$1 = (function (){var statearr_56636 = state_56627;
(statearr_56636[(9)] = inst_56620);

return statearr_56636;
})();
var statearr_56637_58028 = state_56627__$1;
(statearr_56637_58028[(2)] = null);

(statearr_56637_58028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (6))){
var inst_56592 = (state_56627[(7)]);
var state_56627__$1 = state_56627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56627__$1,(11),inst_56592);
} else {
if((state_val_56628 === (17))){
var inst_56613 = (state_56627[(2)]);
var state_56627__$1 = state_56627;
if(cljs.core.truth_(inst_56613)){
var statearr_56638_58031 = state_56627__$1;
(statearr_56638_58031[(1)] = (19));

} else {
var statearr_56639_58032 = state_56627__$1;
(statearr_56639_58032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (3))){
var inst_56625 = (state_56627[(2)]);
var state_56627__$1 = state_56627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56627__$1,inst_56625);
} else {
if((state_val_56628 === (12))){
var inst_56602 = (state_56627[(10)]);
var state_56627__$1 = state_56627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56627__$1,(14),inst_56602);
} else {
if((state_val_56628 === (2))){
var state_56627__$1 = state_56627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56627__$1,(4),results);
} else {
if((state_val_56628 === (19))){
var state_56627__$1 = state_56627;
var statearr_56640_58033 = state_56627__$1;
(statearr_56640_58033[(2)] = null);

(statearr_56640_58033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (11))){
var inst_56602 = (state_56627[(2)]);
var state_56627__$1 = (function (){var statearr_56641 = state_56627;
(statearr_56641[(10)] = inst_56602);

return statearr_56641;
})();
var statearr_56642_58034 = state_56627__$1;
(statearr_56642_58034[(2)] = null);

(statearr_56642_58034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (9))){
var state_56627__$1 = state_56627;
var statearr_56643_58035 = state_56627__$1;
(statearr_56643_58035[(2)] = null);

(statearr_56643_58035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (5))){
var state_56627__$1 = state_56627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56644_58036 = state_56627__$1;
(statearr_56644_58036[(1)] = (8));

} else {
var statearr_56645_58037 = state_56627__$1;
(statearr_56645_58037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (14))){
var inst_56605 = (state_56627[(8)]);
var inst_56605__$1 = (state_56627[(2)]);
var inst_56606 = (inst_56605__$1 == null);
var inst_56607 = cljs.core.not(inst_56606);
var state_56627__$1 = (function (){var statearr_56646 = state_56627;
(statearr_56646[(8)] = inst_56605__$1);

return statearr_56646;
})();
if(inst_56607){
var statearr_56647_58038 = state_56627__$1;
(statearr_56647_58038[(1)] = (15));

} else {
var statearr_56648_58039 = state_56627__$1;
(statearr_56648_58039[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (16))){
var state_56627__$1 = state_56627;
var statearr_56649_58041 = state_56627__$1;
(statearr_56649_58041[(2)] = false);

(statearr_56649_58041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (10))){
var inst_56599 = (state_56627[(2)]);
var state_56627__$1 = state_56627;
var statearr_56650_58043 = state_56627__$1;
(statearr_56650_58043[(2)] = inst_56599);

(statearr_56650_58043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (18))){
var inst_56610 = (state_56627[(2)]);
var state_56627__$1 = state_56627;
var statearr_56651_58044 = state_56627__$1;
(statearr_56651_58044[(2)] = inst_56610);

(statearr_56651_58044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56628 === (8))){
var inst_56596 = cljs.core.async.close_BANG_(to);
var state_56627__$1 = state_56627;
var statearr_56652_58045 = state_56627__$1;
(statearr_56652_58045[(2)] = inst_56596);

(statearr_56652_58045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0 = (function (){
var statearr_56653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__);

(statearr_56653[(1)] = (1));

return statearr_56653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1 = (function (state_56627){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56627);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56654){if((e56654 instanceof Object)){
var ex__55998__auto__ = e56654;
var statearr_56655_58050 = state_56627;
(statearr_56655_58050[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58053 = state_56627;
state_56627 = G__58053;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__ = function(state_56627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1.call(this,state_56627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56656 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56656[(6)] = c__56164__auto__);

return statearr_56656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));

return c__56164__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__56658 = arguments.length;
switch (G__56658) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__56660 = arguments.length;
switch (G__56660) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__56662 = arguments.length;
switch (G__56662) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56164__auto___58064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56688){
var state_val_56689 = (state_56688[(1)]);
if((state_val_56689 === (7))){
var inst_56684 = (state_56688[(2)]);
var state_56688__$1 = state_56688;
var statearr_56690_58065 = state_56688__$1;
(statearr_56690_58065[(2)] = inst_56684);

(statearr_56690_58065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (1))){
var state_56688__$1 = state_56688;
var statearr_56691_58066 = state_56688__$1;
(statearr_56691_58066[(2)] = null);

(statearr_56691_58066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (4))){
var inst_56665 = (state_56688[(7)]);
var inst_56665__$1 = (state_56688[(2)]);
var inst_56666 = (inst_56665__$1 == null);
var state_56688__$1 = (function (){var statearr_56692 = state_56688;
(statearr_56692[(7)] = inst_56665__$1);

return statearr_56692;
})();
if(cljs.core.truth_(inst_56666)){
var statearr_56693_58067 = state_56688__$1;
(statearr_56693_58067[(1)] = (5));

} else {
var statearr_56694_58068 = state_56688__$1;
(statearr_56694_58068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (13))){
var state_56688__$1 = state_56688;
var statearr_56695_58069 = state_56688__$1;
(statearr_56695_58069[(2)] = null);

(statearr_56695_58069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (6))){
var inst_56665 = (state_56688[(7)]);
var inst_56671 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56665) : p.call(null,inst_56665));
var state_56688__$1 = state_56688;
if(cljs.core.truth_(inst_56671)){
var statearr_56696_58074 = state_56688__$1;
(statearr_56696_58074[(1)] = (9));

} else {
var statearr_56697_58075 = state_56688__$1;
(statearr_56697_58075[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (3))){
var inst_56686 = (state_56688[(2)]);
var state_56688__$1 = state_56688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56688__$1,inst_56686);
} else {
if((state_val_56689 === (12))){
var state_56688__$1 = state_56688;
var statearr_56698_58079 = state_56688__$1;
(statearr_56698_58079[(2)] = null);

(statearr_56698_58079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (2))){
var state_56688__$1 = state_56688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56688__$1,(4),ch);
} else {
if((state_val_56689 === (11))){
var inst_56665 = (state_56688[(7)]);
var inst_56675 = (state_56688[(2)]);
var state_56688__$1 = state_56688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56688__$1,(8),inst_56675,inst_56665);
} else {
if((state_val_56689 === (9))){
var state_56688__$1 = state_56688;
var statearr_56699_58080 = state_56688__$1;
(statearr_56699_58080[(2)] = tc);

(statearr_56699_58080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (5))){
var inst_56668 = cljs.core.async.close_BANG_(tc);
var inst_56669 = cljs.core.async.close_BANG_(fc);
var state_56688__$1 = (function (){var statearr_56700 = state_56688;
(statearr_56700[(8)] = inst_56668);

return statearr_56700;
})();
var statearr_56701_58084 = state_56688__$1;
(statearr_56701_58084[(2)] = inst_56669);

(statearr_56701_58084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (14))){
var inst_56682 = (state_56688[(2)]);
var state_56688__$1 = state_56688;
var statearr_56702_58085 = state_56688__$1;
(statearr_56702_58085[(2)] = inst_56682);

(statearr_56702_58085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (10))){
var state_56688__$1 = state_56688;
var statearr_56703_58086 = state_56688__$1;
(statearr_56703_58086[(2)] = fc);

(statearr_56703_58086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56689 === (8))){
var inst_56677 = (state_56688[(2)]);
var state_56688__$1 = state_56688;
if(cljs.core.truth_(inst_56677)){
var statearr_56704_58087 = state_56688__$1;
(statearr_56704_58087[(1)] = (12));

} else {
var statearr_56705_58091 = state_56688__$1;
(statearr_56705_58091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_56706 = [null,null,null,null,null,null,null,null,null];
(statearr_56706[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_56706[(1)] = (1));

return statearr_56706;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_56688){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56688);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56707){if((e56707 instanceof Object)){
var ex__55998__auto__ = e56707;
var statearr_56708_58092 = state_56688;
(statearr_56708_58092[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58093 = state_56688;
state_56688 = G__58093;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_56688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_56688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56709 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56709[(6)] = c__56164__auto___58064);

return statearr_56709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56730){
var state_val_56731 = (state_56730[(1)]);
if((state_val_56731 === (7))){
var inst_56726 = (state_56730[(2)]);
var state_56730__$1 = state_56730;
var statearr_56732_58098 = state_56730__$1;
(statearr_56732_58098[(2)] = inst_56726);

(statearr_56732_58098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56731 === (1))){
var inst_56710 = init;
var state_56730__$1 = (function (){var statearr_56733 = state_56730;
(statearr_56733[(7)] = inst_56710);

return statearr_56733;
})();
var statearr_56734_58100 = state_56730__$1;
(statearr_56734_58100[(2)] = null);

(statearr_56734_58100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56731 === (4))){
var inst_56713 = (state_56730[(8)]);
var inst_56713__$1 = (state_56730[(2)]);
var inst_56714 = (inst_56713__$1 == null);
var state_56730__$1 = (function (){var statearr_56735 = state_56730;
(statearr_56735[(8)] = inst_56713__$1);

return statearr_56735;
})();
if(cljs.core.truth_(inst_56714)){
var statearr_56736_58101 = state_56730__$1;
(statearr_56736_58101[(1)] = (5));

} else {
var statearr_56737_58102 = state_56730__$1;
(statearr_56737_58102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56731 === (6))){
var inst_56717 = (state_56730[(9)]);
var inst_56713 = (state_56730[(8)]);
var inst_56710 = (state_56730[(7)]);
var inst_56717__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56710,inst_56713) : f.call(null,inst_56710,inst_56713));
var inst_56718 = cljs.core.reduced_QMARK_(inst_56717__$1);
var state_56730__$1 = (function (){var statearr_56738 = state_56730;
(statearr_56738[(9)] = inst_56717__$1);

return statearr_56738;
})();
if(inst_56718){
var statearr_56739_58103 = state_56730__$1;
(statearr_56739_58103[(1)] = (8));

} else {
var statearr_56740_58107 = state_56730__$1;
(statearr_56740_58107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56731 === (3))){
var inst_56728 = (state_56730[(2)]);
var state_56730__$1 = state_56730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56730__$1,inst_56728);
} else {
if((state_val_56731 === (2))){
var state_56730__$1 = state_56730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56730__$1,(4),ch);
} else {
if((state_val_56731 === (9))){
var inst_56717 = (state_56730[(9)]);
var inst_56710 = inst_56717;
var state_56730__$1 = (function (){var statearr_56741 = state_56730;
(statearr_56741[(7)] = inst_56710);

return statearr_56741;
})();
var statearr_56742_58108 = state_56730__$1;
(statearr_56742_58108[(2)] = null);

(statearr_56742_58108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56731 === (5))){
var inst_56710 = (state_56730[(7)]);
var state_56730__$1 = state_56730;
var statearr_56743_58112 = state_56730__$1;
(statearr_56743_58112[(2)] = inst_56710);

(statearr_56743_58112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56731 === (10))){
var inst_56724 = (state_56730[(2)]);
var state_56730__$1 = state_56730;
var statearr_56744_58113 = state_56730__$1;
(statearr_56744_58113[(2)] = inst_56724);

(statearr_56744_58113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56731 === (8))){
var inst_56717 = (state_56730[(9)]);
var inst_56720 = cljs.core.deref(inst_56717);
var state_56730__$1 = state_56730;
var statearr_56745_58118 = state_56730__$1;
(statearr_56745_58118[(2)] = inst_56720);

(statearr_56745_58118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__55995__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55995__auto____0 = (function (){
var statearr_56746 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56746[(0)] = cljs$core$async$reduce_$_state_machine__55995__auto__);

(statearr_56746[(1)] = (1));

return statearr_56746;
});
var cljs$core$async$reduce_$_state_machine__55995__auto____1 = (function (state_56730){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56730);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56747){if((e56747 instanceof Object)){
var ex__55998__auto__ = e56747;
var statearr_56748_58122 = state_56730;
(statearr_56748_58122[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58126 = state_56730;
state_56730 = G__58126;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55995__auto__ = function(state_56730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55995__auto____1.call(this,state_56730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55995__auto____0;
cljs$core$async$reduce_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55995__auto____1;
return cljs$core$async$reduce_$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56749 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56749[(6)] = c__56164__auto__);

return statearr_56749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));

return c__56164__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56755){
var state_val_56756 = (state_56755[(1)]);
if((state_val_56756 === (1))){
var inst_56750 = cljs.core.async.reduce(f__$1,init,ch);
var state_56755__$1 = state_56755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56755__$1,(2),inst_56750);
} else {
if((state_val_56756 === (2))){
var inst_56752 = (state_56755[(2)]);
var inst_56753 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56752) : f__$1.call(null,inst_56752));
var state_56755__$1 = state_56755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56755__$1,inst_56753);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__55995__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55995__auto____0 = (function (){
var statearr_56757 = [null,null,null,null,null,null,null];
(statearr_56757[(0)] = cljs$core$async$transduce_$_state_machine__55995__auto__);

(statearr_56757[(1)] = (1));

return statearr_56757;
});
var cljs$core$async$transduce_$_state_machine__55995__auto____1 = (function (state_56755){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56755);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56758){if((e56758 instanceof Object)){
var ex__55998__auto__ = e56758;
var statearr_56759_58137 = state_56755;
(statearr_56759_58137[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58144 = state_56755;
state_56755 = G__58144;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55995__auto__ = function(state_56755){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55995__auto____1.call(this,state_56755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55995__auto____0;
cljs$core$async$transduce_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55995__auto____1;
return cljs$core$async$transduce_$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56760 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56760[(6)] = c__56164__auto__);

return statearr_56760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));

return c__56164__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__56762 = arguments.length;
switch (G__56762) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56787){
var state_val_56788 = (state_56787[(1)]);
if((state_val_56788 === (7))){
var inst_56769 = (state_56787[(2)]);
var state_56787__$1 = state_56787;
var statearr_56789_58152 = state_56787__$1;
(statearr_56789_58152[(2)] = inst_56769);

(statearr_56789_58152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (1))){
var inst_56763 = cljs.core.seq(coll);
var inst_56764 = inst_56763;
var state_56787__$1 = (function (){var statearr_56790 = state_56787;
(statearr_56790[(7)] = inst_56764);

return statearr_56790;
})();
var statearr_56791_58156 = state_56787__$1;
(statearr_56791_58156[(2)] = null);

(statearr_56791_58156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (4))){
var inst_56764 = (state_56787[(7)]);
var inst_56767 = cljs.core.first(inst_56764);
var state_56787__$1 = state_56787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56787__$1,(7),ch,inst_56767);
} else {
if((state_val_56788 === (13))){
var inst_56781 = (state_56787[(2)]);
var state_56787__$1 = state_56787;
var statearr_56792_58160 = state_56787__$1;
(statearr_56792_58160[(2)] = inst_56781);

(statearr_56792_58160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (6))){
var inst_56772 = (state_56787[(2)]);
var state_56787__$1 = state_56787;
if(cljs.core.truth_(inst_56772)){
var statearr_56793_58161 = state_56787__$1;
(statearr_56793_58161[(1)] = (8));

} else {
var statearr_56794_58162 = state_56787__$1;
(statearr_56794_58162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (3))){
var inst_56785 = (state_56787[(2)]);
var state_56787__$1 = state_56787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56787__$1,inst_56785);
} else {
if((state_val_56788 === (12))){
var state_56787__$1 = state_56787;
var statearr_56795_58167 = state_56787__$1;
(statearr_56795_58167[(2)] = null);

(statearr_56795_58167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (2))){
var inst_56764 = (state_56787[(7)]);
var state_56787__$1 = state_56787;
if(cljs.core.truth_(inst_56764)){
var statearr_56796_58170 = state_56787__$1;
(statearr_56796_58170[(1)] = (4));

} else {
var statearr_56797_58171 = state_56787__$1;
(statearr_56797_58171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (11))){
var inst_56778 = cljs.core.async.close_BANG_(ch);
var state_56787__$1 = state_56787;
var statearr_56798_58172 = state_56787__$1;
(statearr_56798_58172[(2)] = inst_56778);

(statearr_56798_58172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (9))){
var state_56787__$1 = state_56787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56799_58173 = state_56787__$1;
(statearr_56799_58173[(1)] = (11));

} else {
var statearr_56800_58174 = state_56787__$1;
(statearr_56800_58174[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (5))){
var inst_56764 = (state_56787[(7)]);
var state_56787__$1 = state_56787;
var statearr_56801_58175 = state_56787__$1;
(statearr_56801_58175[(2)] = inst_56764);

(statearr_56801_58175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (10))){
var inst_56783 = (state_56787[(2)]);
var state_56787__$1 = state_56787;
var statearr_56802_58177 = state_56787__$1;
(statearr_56802_58177[(2)] = inst_56783);

(statearr_56802_58177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56788 === (8))){
var inst_56764 = (state_56787[(7)]);
var inst_56774 = cljs.core.next(inst_56764);
var inst_56764__$1 = inst_56774;
var state_56787__$1 = (function (){var statearr_56803 = state_56787;
(statearr_56803[(7)] = inst_56764__$1);

return statearr_56803;
})();
var statearr_56804_58178 = state_56787__$1;
(statearr_56804_58178[(2)] = null);

(statearr_56804_58178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_56805 = [null,null,null,null,null,null,null,null];
(statearr_56805[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_56805[(1)] = (1));

return statearr_56805;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_56787){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56787);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e56806){if((e56806 instanceof Object)){
var ex__55998__auto__ = e56806;
var statearr_56807_58179 = state_56787;
(statearr_56807_58179[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58180 = state_56787;
state_56787 = G__58180;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_56787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_56787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_56808 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_56808[(6)] = c__56164__auto__);

return statearr_56808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));

return c__56164__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56809 = (function (ch,cs,meta56810){
this.ch = ch;
this.cs = cs;
this.meta56810 = meta56810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56811,meta56810__$1){
var self__ = this;
var _56811__$1 = this;
return (new cljs.core.async.t_cljs$core$async56809(self__.ch,self__.cs,meta56810__$1));
}));

(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56811){
var self__ = this;
var _56811__$1 = this;
return self__.meta56810;
}));

(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async56809.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async56809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56810","meta56810",1236519656,null)], null);
}));

(cljs.core.async.t_cljs$core$async56809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56809");

(cljs.core.async.t_cljs$core$async56809.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56809.
 */
cljs.core.async.__GT_t_cljs$core$async56809 = (function cljs$core$async$mult_$___GT_t_cljs$core$async56809(ch__$1,cs__$1,meta56810){
return (new cljs.core.async.t_cljs$core$async56809(ch__$1,cs__$1,meta56810));
});

}

return (new cljs.core.async.t_cljs$core$async56809(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56164__auto___58190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_56946){
var state_val_56947 = (state_56946[(1)]);
if((state_val_56947 === (7))){
var inst_56942 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_56948_58193 = state_56946__$1;
(statearr_56948_58193[(2)] = inst_56942);

(statearr_56948_58193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (20))){
var inst_56845 = (state_56946[(7)]);
var inst_56857 = cljs.core.first(inst_56845);
var inst_56858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56857,(0),null);
var inst_56859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56857,(1),null);
var state_56946__$1 = (function (){var statearr_56949 = state_56946;
(statearr_56949[(8)] = inst_56858);

return statearr_56949;
})();
if(cljs.core.truth_(inst_56859)){
var statearr_56950_58194 = state_56946__$1;
(statearr_56950_58194[(1)] = (22));

} else {
var statearr_56951_58195 = state_56946__$1;
(statearr_56951_58195[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (27))){
var inst_56814 = (state_56946[(9)]);
var inst_56887 = (state_56946[(10)]);
var inst_56894 = (state_56946[(11)]);
var inst_56889 = (state_56946[(12)]);
var inst_56894__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56887,inst_56889);
var inst_56895 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56894__$1,inst_56814,done);
var state_56946__$1 = (function (){var statearr_56952 = state_56946;
(statearr_56952[(11)] = inst_56894__$1);

return statearr_56952;
})();
if(cljs.core.truth_(inst_56895)){
var statearr_56953_58196 = state_56946__$1;
(statearr_56953_58196[(1)] = (30));

} else {
var statearr_56954_58197 = state_56946__$1;
(statearr_56954_58197[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (1))){
var state_56946__$1 = state_56946;
var statearr_56955_58198 = state_56946__$1;
(statearr_56955_58198[(2)] = null);

(statearr_56955_58198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (24))){
var inst_56845 = (state_56946[(7)]);
var inst_56864 = (state_56946[(2)]);
var inst_56865 = cljs.core.next(inst_56845);
var inst_56823 = inst_56865;
var inst_56824 = null;
var inst_56825 = (0);
var inst_56826 = (0);
var state_56946__$1 = (function (){var statearr_56956 = state_56946;
(statearr_56956[(13)] = inst_56824);

(statearr_56956[(14)] = inst_56825);

(statearr_56956[(15)] = inst_56864);

(statearr_56956[(16)] = inst_56826);

(statearr_56956[(17)] = inst_56823);

return statearr_56956;
})();
var statearr_56957_58200 = state_56946__$1;
(statearr_56957_58200[(2)] = null);

(statearr_56957_58200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (39))){
var state_56946__$1 = state_56946;
var statearr_56961_58204 = state_56946__$1;
(statearr_56961_58204[(2)] = null);

(statearr_56961_58204[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (4))){
var inst_56814 = (state_56946[(9)]);
var inst_56814__$1 = (state_56946[(2)]);
var inst_56815 = (inst_56814__$1 == null);
var state_56946__$1 = (function (){var statearr_56962 = state_56946;
(statearr_56962[(9)] = inst_56814__$1);

return statearr_56962;
})();
if(cljs.core.truth_(inst_56815)){
var statearr_56963_58205 = state_56946__$1;
(statearr_56963_58205[(1)] = (5));

} else {
var statearr_56964_58208 = state_56946__$1;
(statearr_56964_58208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (15))){
var inst_56824 = (state_56946[(13)]);
var inst_56825 = (state_56946[(14)]);
var inst_56826 = (state_56946[(16)]);
var inst_56823 = (state_56946[(17)]);
var inst_56841 = (state_56946[(2)]);
var inst_56842 = (inst_56826 + (1));
var tmp56958 = inst_56824;
var tmp56959 = inst_56825;
var tmp56960 = inst_56823;
var inst_56823__$1 = tmp56960;
var inst_56824__$1 = tmp56958;
var inst_56825__$1 = tmp56959;
var inst_56826__$1 = inst_56842;
var state_56946__$1 = (function (){var statearr_56965 = state_56946;
(statearr_56965[(13)] = inst_56824__$1);

(statearr_56965[(14)] = inst_56825__$1);

(statearr_56965[(16)] = inst_56826__$1);

(statearr_56965[(17)] = inst_56823__$1);

(statearr_56965[(18)] = inst_56841);

return statearr_56965;
})();
var statearr_56966_58211 = state_56946__$1;
(statearr_56966_58211[(2)] = null);

(statearr_56966_58211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (21))){
var inst_56868 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_56970_58216 = state_56946__$1;
(statearr_56970_58216[(2)] = inst_56868);

(statearr_56970_58216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (31))){
var inst_56894 = (state_56946[(11)]);
var inst_56898 = done(null);
var inst_56899 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56894);
var state_56946__$1 = (function (){var statearr_56971 = state_56946;
(statearr_56971[(19)] = inst_56898);

return statearr_56971;
})();
var statearr_56972_58226 = state_56946__$1;
(statearr_56972_58226[(2)] = inst_56899);

(statearr_56972_58226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (32))){
var inst_56887 = (state_56946[(10)]);
var inst_56886 = (state_56946[(20)]);
var inst_56888 = (state_56946[(21)]);
var inst_56889 = (state_56946[(12)]);
var inst_56901 = (state_56946[(2)]);
var inst_56902 = (inst_56889 + (1));
var tmp56967 = inst_56887;
var tmp56968 = inst_56886;
var tmp56969 = inst_56888;
var inst_56886__$1 = tmp56968;
var inst_56887__$1 = tmp56967;
var inst_56888__$1 = tmp56969;
var inst_56889__$1 = inst_56902;
var state_56946__$1 = (function (){var statearr_56973 = state_56946;
(statearr_56973[(22)] = inst_56901);

(statearr_56973[(10)] = inst_56887__$1);

(statearr_56973[(20)] = inst_56886__$1);

(statearr_56973[(21)] = inst_56888__$1);

(statearr_56973[(12)] = inst_56889__$1);

return statearr_56973;
})();
var statearr_56974_58227 = state_56946__$1;
(statearr_56974_58227[(2)] = null);

(statearr_56974_58227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (40))){
var inst_56914 = (state_56946[(23)]);
var inst_56918 = done(null);
var inst_56919 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56914);
var state_56946__$1 = (function (){var statearr_56975 = state_56946;
(statearr_56975[(24)] = inst_56918);

return statearr_56975;
})();
var statearr_56976_58228 = state_56946__$1;
(statearr_56976_58228[(2)] = inst_56919);

(statearr_56976_58228[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (33))){
var inst_56905 = (state_56946[(25)]);
var inst_56907 = cljs.core.chunked_seq_QMARK_(inst_56905);
var state_56946__$1 = state_56946;
if(inst_56907){
var statearr_56977_58229 = state_56946__$1;
(statearr_56977_58229[(1)] = (36));

} else {
var statearr_56978_58230 = state_56946__$1;
(statearr_56978_58230[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (13))){
var inst_56835 = (state_56946[(26)]);
var inst_56838 = cljs.core.async.close_BANG_(inst_56835);
var state_56946__$1 = state_56946;
var statearr_56979_58231 = state_56946__$1;
(statearr_56979_58231[(2)] = inst_56838);

(statearr_56979_58231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (22))){
var inst_56858 = (state_56946[(8)]);
var inst_56861 = cljs.core.async.close_BANG_(inst_56858);
var state_56946__$1 = state_56946;
var statearr_56980_58232 = state_56946__$1;
(statearr_56980_58232[(2)] = inst_56861);

(statearr_56980_58232[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (36))){
var inst_56905 = (state_56946[(25)]);
var inst_56909 = cljs.core.chunk_first(inst_56905);
var inst_56910 = cljs.core.chunk_rest(inst_56905);
var inst_56911 = cljs.core.count(inst_56909);
var inst_56886 = inst_56910;
var inst_56887 = inst_56909;
var inst_56888 = inst_56911;
var inst_56889 = (0);
var state_56946__$1 = (function (){var statearr_56981 = state_56946;
(statearr_56981[(10)] = inst_56887);

(statearr_56981[(20)] = inst_56886);

(statearr_56981[(21)] = inst_56888);

(statearr_56981[(12)] = inst_56889);

return statearr_56981;
})();
var statearr_56982_58239 = state_56946__$1;
(statearr_56982_58239[(2)] = null);

(statearr_56982_58239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (41))){
var inst_56905 = (state_56946[(25)]);
var inst_56921 = (state_56946[(2)]);
var inst_56922 = cljs.core.next(inst_56905);
var inst_56886 = inst_56922;
var inst_56887 = null;
var inst_56888 = (0);
var inst_56889 = (0);
var state_56946__$1 = (function (){var statearr_56983 = state_56946;
(statearr_56983[(10)] = inst_56887);

(statearr_56983[(20)] = inst_56886);

(statearr_56983[(27)] = inst_56921);

(statearr_56983[(21)] = inst_56888);

(statearr_56983[(12)] = inst_56889);

return statearr_56983;
})();
var statearr_56984_58240 = state_56946__$1;
(statearr_56984_58240[(2)] = null);

(statearr_56984_58240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (43))){
var state_56946__$1 = state_56946;
var statearr_56985_58241 = state_56946__$1;
(statearr_56985_58241[(2)] = null);

(statearr_56985_58241[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (29))){
var inst_56930 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_56986_58242 = state_56946__$1;
(statearr_56986_58242[(2)] = inst_56930);

(statearr_56986_58242[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (44))){
var inst_56939 = (state_56946[(2)]);
var state_56946__$1 = (function (){var statearr_56987 = state_56946;
(statearr_56987[(28)] = inst_56939);

return statearr_56987;
})();
var statearr_56988_58243 = state_56946__$1;
(statearr_56988_58243[(2)] = null);

(statearr_56988_58243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (6))){
var inst_56878 = (state_56946[(29)]);
var inst_56877 = cljs.core.deref(cs);
var inst_56878__$1 = cljs.core.keys(inst_56877);
var inst_56879 = cljs.core.count(inst_56878__$1);
var inst_56880 = cljs.core.reset_BANG_(dctr,inst_56879);
var inst_56885 = cljs.core.seq(inst_56878__$1);
var inst_56886 = inst_56885;
var inst_56887 = null;
var inst_56888 = (0);
var inst_56889 = (0);
var state_56946__$1 = (function (){var statearr_56989 = state_56946;
(statearr_56989[(29)] = inst_56878__$1);

(statearr_56989[(30)] = inst_56880);

(statearr_56989[(10)] = inst_56887);

(statearr_56989[(20)] = inst_56886);

(statearr_56989[(21)] = inst_56888);

(statearr_56989[(12)] = inst_56889);

return statearr_56989;
})();
var statearr_56990_58250 = state_56946__$1;
(statearr_56990_58250[(2)] = null);

(statearr_56990_58250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (28))){
var inst_56905 = (state_56946[(25)]);
var inst_56886 = (state_56946[(20)]);
var inst_56905__$1 = cljs.core.seq(inst_56886);
var state_56946__$1 = (function (){var statearr_56991 = state_56946;
(statearr_56991[(25)] = inst_56905__$1);

return statearr_56991;
})();
if(inst_56905__$1){
var statearr_56992_58251 = state_56946__$1;
(statearr_56992_58251[(1)] = (33));

} else {
var statearr_56993_58252 = state_56946__$1;
(statearr_56993_58252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (25))){
var inst_56888 = (state_56946[(21)]);
var inst_56889 = (state_56946[(12)]);
var inst_56891 = (inst_56889 < inst_56888);
var inst_56892 = inst_56891;
var state_56946__$1 = state_56946;
if(cljs.core.truth_(inst_56892)){
var statearr_56994_58253 = state_56946__$1;
(statearr_56994_58253[(1)] = (27));

} else {
var statearr_56995_58254 = state_56946__$1;
(statearr_56995_58254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (34))){
var state_56946__$1 = state_56946;
var statearr_56996_58255 = state_56946__$1;
(statearr_56996_58255[(2)] = null);

(statearr_56996_58255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (17))){
var state_56946__$1 = state_56946;
var statearr_56997_58256 = state_56946__$1;
(statearr_56997_58256[(2)] = null);

(statearr_56997_58256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (3))){
var inst_56944 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56946__$1,inst_56944);
} else {
if((state_val_56947 === (12))){
var inst_56873 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_56998_58257 = state_56946__$1;
(statearr_56998_58257[(2)] = inst_56873);

(statearr_56998_58257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (2))){
var state_56946__$1 = state_56946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56946__$1,(4),ch);
} else {
if((state_val_56947 === (23))){
var state_56946__$1 = state_56946;
var statearr_56999_58258 = state_56946__$1;
(statearr_56999_58258[(2)] = null);

(statearr_56999_58258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (35))){
var inst_56928 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_57000_58259 = state_56946__$1;
(statearr_57000_58259[(2)] = inst_56928);

(statearr_57000_58259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (19))){
var inst_56845 = (state_56946[(7)]);
var inst_56849 = cljs.core.chunk_first(inst_56845);
var inst_56850 = cljs.core.chunk_rest(inst_56845);
var inst_56851 = cljs.core.count(inst_56849);
var inst_56823 = inst_56850;
var inst_56824 = inst_56849;
var inst_56825 = inst_56851;
var inst_56826 = (0);
var state_56946__$1 = (function (){var statearr_57001 = state_56946;
(statearr_57001[(13)] = inst_56824);

(statearr_57001[(14)] = inst_56825);

(statearr_57001[(16)] = inst_56826);

(statearr_57001[(17)] = inst_56823);

return statearr_57001;
})();
var statearr_57002_58266 = state_56946__$1;
(statearr_57002_58266[(2)] = null);

(statearr_57002_58266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (11))){
var inst_56823 = (state_56946[(17)]);
var inst_56845 = (state_56946[(7)]);
var inst_56845__$1 = cljs.core.seq(inst_56823);
var state_56946__$1 = (function (){var statearr_57003 = state_56946;
(statearr_57003[(7)] = inst_56845__$1);

return statearr_57003;
})();
if(inst_56845__$1){
var statearr_57004_58267 = state_56946__$1;
(statearr_57004_58267[(1)] = (16));

} else {
var statearr_57005_58268 = state_56946__$1;
(statearr_57005_58268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (9))){
var inst_56875 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_57006_58269 = state_56946__$1;
(statearr_57006_58269[(2)] = inst_56875);

(statearr_57006_58269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (5))){
var inst_56821 = cljs.core.deref(cs);
var inst_56822 = cljs.core.seq(inst_56821);
var inst_56823 = inst_56822;
var inst_56824 = null;
var inst_56825 = (0);
var inst_56826 = (0);
var state_56946__$1 = (function (){var statearr_57007 = state_56946;
(statearr_57007[(13)] = inst_56824);

(statearr_57007[(14)] = inst_56825);

(statearr_57007[(16)] = inst_56826);

(statearr_57007[(17)] = inst_56823);

return statearr_57007;
})();
var statearr_57008_58270 = state_56946__$1;
(statearr_57008_58270[(2)] = null);

(statearr_57008_58270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (14))){
var state_56946__$1 = state_56946;
var statearr_57009_58271 = state_56946__$1;
(statearr_57009_58271[(2)] = null);

(statearr_57009_58271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (45))){
var inst_56936 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_57010_58272 = state_56946__$1;
(statearr_57010_58272[(2)] = inst_56936);

(statearr_57010_58272[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (26))){
var inst_56878 = (state_56946[(29)]);
var inst_56932 = (state_56946[(2)]);
var inst_56933 = cljs.core.seq(inst_56878);
var state_56946__$1 = (function (){var statearr_57011 = state_56946;
(statearr_57011[(31)] = inst_56932);

return statearr_57011;
})();
if(inst_56933){
var statearr_57012_58273 = state_56946__$1;
(statearr_57012_58273[(1)] = (42));

} else {
var statearr_57013_58274 = state_56946__$1;
(statearr_57013_58274[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (16))){
var inst_56845 = (state_56946[(7)]);
var inst_56847 = cljs.core.chunked_seq_QMARK_(inst_56845);
var state_56946__$1 = state_56946;
if(inst_56847){
var statearr_57014_58275 = state_56946__$1;
(statearr_57014_58275[(1)] = (19));

} else {
var statearr_57015_58276 = state_56946__$1;
(statearr_57015_58276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (38))){
var inst_56925 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_57016_58277 = state_56946__$1;
(statearr_57016_58277[(2)] = inst_56925);

(statearr_57016_58277[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (30))){
var state_56946__$1 = state_56946;
var statearr_57017_58278 = state_56946__$1;
(statearr_57017_58278[(2)] = null);

(statearr_57017_58278[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (10))){
var inst_56824 = (state_56946[(13)]);
var inst_56826 = (state_56946[(16)]);
var inst_56834 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56824,inst_56826);
var inst_56835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56834,(0),null);
var inst_56836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56834,(1),null);
var state_56946__$1 = (function (){var statearr_57018 = state_56946;
(statearr_57018[(26)] = inst_56835);

return statearr_57018;
})();
if(cljs.core.truth_(inst_56836)){
var statearr_57019_58279 = state_56946__$1;
(statearr_57019_58279[(1)] = (13));

} else {
var statearr_57020_58280 = state_56946__$1;
(statearr_57020_58280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (18))){
var inst_56871 = (state_56946[(2)]);
var state_56946__$1 = state_56946;
var statearr_57021_58281 = state_56946__$1;
(statearr_57021_58281[(2)] = inst_56871);

(statearr_57021_58281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (42))){
var state_56946__$1 = state_56946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56946__$1,(45),dchan);
} else {
if((state_val_56947 === (37))){
var inst_56914 = (state_56946[(23)]);
var inst_56905 = (state_56946[(25)]);
var inst_56814 = (state_56946[(9)]);
var inst_56914__$1 = cljs.core.first(inst_56905);
var inst_56915 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56914__$1,inst_56814,done);
var state_56946__$1 = (function (){var statearr_57022 = state_56946;
(statearr_57022[(23)] = inst_56914__$1);

return statearr_57022;
})();
if(cljs.core.truth_(inst_56915)){
var statearr_57023_58282 = state_56946__$1;
(statearr_57023_58282[(1)] = (39));

} else {
var statearr_57024_58283 = state_56946__$1;
(statearr_57024_58283[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56947 === (8))){
var inst_56825 = (state_56946[(14)]);
var inst_56826 = (state_56946[(16)]);
var inst_56828 = (inst_56826 < inst_56825);
var inst_56829 = inst_56828;
var state_56946__$1 = state_56946;
if(cljs.core.truth_(inst_56829)){
var statearr_57025_58285 = state_56946__$1;
(statearr_57025_58285[(1)] = (10));

} else {
var statearr_57026_58286 = state_56946__$1;
(statearr_57026_58286[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__55995__auto__ = null;
var cljs$core$async$mult_$_state_machine__55995__auto____0 = (function (){
var statearr_57027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57027[(0)] = cljs$core$async$mult_$_state_machine__55995__auto__);

(statearr_57027[(1)] = (1));

return statearr_57027;
});
var cljs$core$async$mult_$_state_machine__55995__auto____1 = (function (state_56946){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_56946);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57028){if((e57028 instanceof Object)){
var ex__55998__auto__ = e57028;
var statearr_57029_58292 = state_56946;
(statearr_57029_58292[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58293 = state_56946;
state_56946 = G__58293;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55995__auto__ = function(state_56946){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55995__auto____1.call(this,state_56946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55995__auto____0;
cljs$core$async$mult_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55995__auto____1;
return cljs$core$async$mult_$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57030 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57030[(6)] = c__56164__auto___58190);

return statearr_57030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57032 = arguments.length;
switch (G__57032) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58301 = arguments.length;
var i__4790__auto___58302 = (0);
while(true){
if((i__4790__auto___58302 < len__4789__auto___58301)){
args__4795__auto__.push((arguments[i__4790__auto___58302]));

var G__58303 = (i__4790__auto___58302 + (1));
i__4790__auto___58302 = G__58303;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57037){
var map__57038 = p__57037;
var map__57038__$1 = (((((!((map__57038 == null))))?(((((map__57038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57038):map__57038);
var opts = map__57038__$1;
var statearr_57040_58304 = state;
(statearr_57040_58304[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57041_58305 = state;
(statearr_57041_58305[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57042_58306 = state;
(statearr_57042_58306[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57033){
var G__57034 = cljs.core.first(seq57033);
var seq57033__$1 = cljs.core.next(seq57033);
var G__57035 = cljs.core.first(seq57033__$1);
var seq57033__$2 = cljs.core.next(seq57033__$1);
var G__57036 = cljs.core.first(seq57033__$2);
var seq57033__$3 = cljs.core.next(seq57033__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57034,G__57035,G__57036,seq57033__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57043 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57044){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57044 = meta57044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57045,meta57044__$1){
var self__ = this;
var _57045__$1 = this;
return (new cljs.core.async.t_cljs$core$async57043(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57044__$1));
}));

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57045){
var self__ = this;
var _57045__$1 = this;
return self__.meta57044;
}));

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57043.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57044","meta57044",1006795992,null)], null);
}));

(cljs.core.async.t_cljs$core$async57043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57043");

(cljs.core.async.t_cljs$core$async57043.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57043.
 */
cljs.core.async.__GT_t_cljs$core$async57043 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57043(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57044){
return (new cljs.core.async.t_cljs$core$async57043(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57044));
});

}

return (new cljs.core.async.t_cljs$core$async57043(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56164__auto___58314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57147){
var state_val_57148 = (state_57147[(1)]);
if((state_val_57148 === (7))){
var inst_57062 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
var statearr_57149_58315 = state_57147__$1;
(statearr_57149_58315[(2)] = inst_57062);

(statearr_57149_58315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (20))){
var inst_57074 = (state_57147[(7)]);
var state_57147__$1 = state_57147;
var statearr_57150_58316 = state_57147__$1;
(statearr_57150_58316[(2)] = inst_57074);

(statearr_57150_58316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (27))){
var state_57147__$1 = state_57147;
var statearr_57151_58317 = state_57147__$1;
(statearr_57151_58317[(2)] = null);

(statearr_57151_58317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (1))){
var inst_57049 = (state_57147[(8)]);
var inst_57049__$1 = calc_state();
var inst_57051 = (inst_57049__$1 == null);
var inst_57052 = cljs.core.not(inst_57051);
var state_57147__$1 = (function (){var statearr_57152 = state_57147;
(statearr_57152[(8)] = inst_57049__$1);

return statearr_57152;
})();
if(inst_57052){
var statearr_57153_58318 = state_57147__$1;
(statearr_57153_58318[(1)] = (2));

} else {
var statearr_57154_58319 = state_57147__$1;
(statearr_57154_58319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (24))){
var inst_57098 = (state_57147[(9)]);
var inst_57107 = (state_57147[(10)]);
var inst_57121 = (state_57147[(11)]);
var inst_57121__$1 = (inst_57098.cljs$core$IFn$_invoke$arity$1 ? inst_57098.cljs$core$IFn$_invoke$arity$1(inst_57107) : inst_57098.call(null,inst_57107));
var state_57147__$1 = (function (){var statearr_57155 = state_57147;
(statearr_57155[(11)] = inst_57121__$1);

return statearr_57155;
})();
if(cljs.core.truth_(inst_57121__$1)){
var statearr_57156_58320 = state_57147__$1;
(statearr_57156_58320[(1)] = (29));

} else {
var statearr_57157_58321 = state_57147__$1;
(statearr_57157_58321[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (4))){
var inst_57065 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
if(cljs.core.truth_(inst_57065)){
var statearr_57158_58322 = state_57147__$1;
(statearr_57158_58322[(1)] = (8));

} else {
var statearr_57159_58323 = state_57147__$1;
(statearr_57159_58323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (15))){
var inst_57092 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
if(cljs.core.truth_(inst_57092)){
var statearr_57160_58328 = state_57147__$1;
(statearr_57160_58328[(1)] = (19));

} else {
var statearr_57161_58332 = state_57147__$1;
(statearr_57161_58332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (21))){
var inst_57097 = (state_57147[(12)]);
var inst_57097__$1 = (state_57147[(2)]);
var inst_57098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57097__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57097__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57097__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57147__$1 = (function (){var statearr_57162 = state_57147;
(statearr_57162[(12)] = inst_57097__$1);

(statearr_57162[(9)] = inst_57098);

(statearr_57162[(13)] = inst_57099);

return statearr_57162;
})();
return cljs.core.async.ioc_alts_BANG_(state_57147__$1,(22),inst_57100);
} else {
if((state_val_57148 === (31))){
var inst_57129 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
if(cljs.core.truth_(inst_57129)){
var statearr_57163_58333 = state_57147__$1;
(statearr_57163_58333[(1)] = (32));

} else {
var statearr_57164_58337 = state_57147__$1;
(statearr_57164_58337[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (32))){
var inst_57106 = (state_57147[(14)]);
var state_57147__$1 = state_57147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57147__$1,(35),out,inst_57106);
} else {
if((state_val_57148 === (33))){
var inst_57097 = (state_57147[(12)]);
var inst_57074 = inst_57097;
var state_57147__$1 = (function (){var statearr_57165 = state_57147;
(statearr_57165[(7)] = inst_57074);

return statearr_57165;
})();
var statearr_57166_58341 = state_57147__$1;
(statearr_57166_58341[(2)] = null);

(statearr_57166_58341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (13))){
var inst_57074 = (state_57147[(7)]);
var inst_57081 = inst_57074.cljs$lang$protocol_mask$partition0$;
var inst_57082 = (inst_57081 & (64));
var inst_57083 = inst_57074.cljs$core$ISeq$;
var inst_57084 = (cljs.core.PROTOCOL_SENTINEL === inst_57083);
var inst_57085 = ((inst_57082) || (inst_57084));
var state_57147__$1 = state_57147;
if(cljs.core.truth_(inst_57085)){
var statearr_57167_58342 = state_57147__$1;
(statearr_57167_58342[(1)] = (16));

} else {
var statearr_57168_58346 = state_57147__$1;
(statearr_57168_58346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (22))){
var inst_57106 = (state_57147[(14)]);
var inst_57107 = (state_57147[(10)]);
var inst_57105 = (state_57147[(2)]);
var inst_57106__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57105,(0),null);
var inst_57107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57105,(1),null);
var inst_57108 = (inst_57106__$1 == null);
var inst_57109 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57107__$1,change);
var inst_57110 = ((inst_57108) || (inst_57109));
var state_57147__$1 = (function (){var statearr_57169 = state_57147;
(statearr_57169[(14)] = inst_57106__$1);

(statearr_57169[(10)] = inst_57107__$1);

return statearr_57169;
})();
if(cljs.core.truth_(inst_57110)){
var statearr_57170_58351 = state_57147__$1;
(statearr_57170_58351[(1)] = (23));

} else {
var statearr_57171_58352 = state_57147__$1;
(statearr_57171_58352[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (36))){
var inst_57097 = (state_57147[(12)]);
var inst_57074 = inst_57097;
var state_57147__$1 = (function (){var statearr_57172 = state_57147;
(statearr_57172[(7)] = inst_57074);

return statearr_57172;
})();
var statearr_57173_58353 = state_57147__$1;
(statearr_57173_58353[(2)] = null);

(statearr_57173_58353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (29))){
var inst_57121 = (state_57147[(11)]);
var state_57147__$1 = state_57147;
var statearr_57174_58354 = state_57147__$1;
(statearr_57174_58354[(2)] = inst_57121);

(statearr_57174_58354[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (6))){
var state_57147__$1 = state_57147;
var statearr_57175_58355 = state_57147__$1;
(statearr_57175_58355[(2)] = false);

(statearr_57175_58355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (28))){
var inst_57117 = (state_57147[(2)]);
var inst_57118 = calc_state();
var inst_57074 = inst_57118;
var state_57147__$1 = (function (){var statearr_57176 = state_57147;
(statearr_57176[(7)] = inst_57074);

(statearr_57176[(15)] = inst_57117);

return statearr_57176;
})();
var statearr_57177_58356 = state_57147__$1;
(statearr_57177_58356[(2)] = null);

(statearr_57177_58356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (25))){
var inst_57143 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
var statearr_57178_58357 = state_57147__$1;
(statearr_57178_58357[(2)] = inst_57143);

(statearr_57178_58357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (34))){
var inst_57141 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
var statearr_57179_58360 = state_57147__$1;
(statearr_57179_58360[(2)] = inst_57141);

(statearr_57179_58360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (17))){
var state_57147__$1 = state_57147;
var statearr_57180_58361 = state_57147__$1;
(statearr_57180_58361[(2)] = false);

(statearr_57180_58361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (3))){
var state_57147__$1 = state_57147;
var statearr_57181_58362 = state_57147__$1;
(statearr_57181_58362[(2)] = false);

(statearr_57181_58362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (12))){
var inst_57145 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57147__$1,inst_57145);
} else {
if((state_val_57148 === (2))){
var inst_57049 = (state_57147[(8)]);
var inst_57054 = inst_57049.cljs$lang$protocol_mask$partition0$;
var inst_57055 = (inst_57054 & (64));
var inst_57056 = inst_57049.cljs$core$ISeq$;
var inst_57057 = (cljs.core.PROTOCOL_SENTINEL === inst_57056);
var inst_57058 = ((inst_57055) || (inst_57057));
var state_57147__$1 = state_57147;
if(cljs.core.truth_(inst_57058)){
var statearr_57182_58365 = state_57147__$1;
(statearr_57182_58365[(1)] = (5));

} else {
var statearr_57183_58366 = state_57147__$1;
(statearr_57183_58366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (23))){
var inst_57106 = (state_57147[(14)]);
var inst_57112 = (inst_57106 == null);
var state_57147__$1 = state_57147;
if(cljs.core.truth_(inst_57112)){
var statearr_57184_58369 = state_57147__$1;
(statearr_57184_58369[(1)] = (26));

} else {
var statearr_57185_58370 = state_57147__$1;
(statearr_57185_58370[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (35))){
var inst_57132 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
if(cljs.core.truth_(inst_57132)){
var statearr_57186_58373 = state_57147__$1;
(statearr_57186_58373[(1)] = (36));

} else {
var statearr_57187_58375 = state_57147__$1;
(statearr_57187_58375[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (19))){
var inst_57074 = (state_57147[(7)]);
var inst_57094 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57074);
var state_57147__$1 = state_57147;
var statearr_57188_58376 = state_57147__$1;
(statearr_57188_58376[(2)] = inst_57094);

(statearr_57188_58376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (11))){
var inst_57074 = (state_57147[(7)]);
var inst_57078 = (inst_57074 == null);
var inst_57079 = cljs.core.not(inst_57078);
var state_57147__$1 = state_57147;
if(inst_57079){
var statearr_57189_58378 = state_57147__$1;
(statearr_57189_58378[(1)] = (13));

} else {
var statearr_57190_58379 = state_57147__$1;
(statearr_57190_58379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (9))){
var inst_57049 = (state_57147[(8)]);
var state_57147__$1 = state_57147;
var statearr_57191_58380 = state_57147__$1;
(statearr_57191_58380[(2)] = inst_57049);

(statearr_57191_58380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (5))){
var state_57147__$1 = state_57147;
var statearr_57192_58383 = state_57147__$1;
(statearr_57192_58383[(2)] = true);

(statearr_57192_58383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (14))){
var state_57147__$1 = state_57147;
var statearr_57193_58384 = state_57147__$1;
(statearr_57193_58384[(2)] = false);

(statearr_57193_58384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (26))){
var inst_57107 = (state_57147[(10)]);
var inst_57114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57107);
var state_57147__$1 = state_57147;
var statearr_57194_58385 = state_57147__$1;
(statearr_57194_58385[(2)] = inst_57114);

(statearr_57194_58385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (16))){
var state_57147__$1 = state_57147;
var statearr_57195_58386 = state_57147__$1;
(statearr_57195_58386[(2)] = true);

(statearr_57195_58386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (38))){
var inst_57137 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
var statearr_57196_58387 = state_57147__$1;
(statearr_57196_58387[(2)] = inst_57137);

(statearr_57196_58387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (30))){
var inst_57098 = (state_57147[(9)]);
var inst_57107 = (state_57147[(10)]);
var inst_57099 = (state_57147[(13)]);
var inst_57124 = cljs.core.empty_QMARK_(inst_57098);
var inst_57125 = (inst_57099.cljs$core$IFn$_invoke$arity$1 ? inst_57099.cljs$core$IFn$_invoke$arity$1(inst_57107) : inst_57099.call(null,inst_57107));
var inst_57126 = cljs.core.not(inst_57125);
var inst_57127 = ((inst_57124) && (inst_57126));
var state_57147__$1 = state_57147;
var statearr_57197_58388 = state_57147__$1;
(statearr_57197_58388[(2)] = inst_57127);

(statearr_57197_58388[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (10))){
var inst_57049 = (state_57147[(8)]);
var inst_57070 = (state_57147[(2)]);
var inst_57071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57070,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57070,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57070,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57074 = inst_57049;
var state_57147__$1 = (function (){var statearr_57198 = state_57147;
(statearr_57198[(7)] = inst_57074);

(statearr_57198[(16)] = inst_57071);

(statearr_57198[(17)] = inst_57073);

(statearr_57198[(18)] = inst_57072);

return statearr_57198;
})();
var statearr_57199_58393 = state_57147__$1;
(statearr_57199_58393[(2)] = null);

(statearr_57199_58393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (18))){
var inst_57089 = (state_57147[(2)]);
var state_57147__$1 = state_57147;
var statearr_57200_58394 = state_57147__$1;
(statearr_57200_58394[(2)] = inst_57089);

(statearr_57200_58394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (37))){
var state_57147__$1 = state_57147;
var statearr_57201_58395 = state_57147__$1;
(statearr_57201_58395[(2)] = null);

(statearr_57201_58395[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57148 === (8))){
var inst_57049 = (state_57147[(8)]);
var inst_57067 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57049);
var state_57147__$1 = state_57147;
var statearr_57202_58396 = state_57147__$1;
(statearr_57202_58396[(2)] = inst_57067);

(statearr_57202_58396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__55995__auto__ = null;
var cljs$core$async$mix_$_state_machine__55995__auto____0 = (function (){
var statearr_57203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57203[(0)] = cljs$core$async$mix_$_state_machine__55995__auto__);

(statearr_57203[(1)] = (1));

return statearr_57203;
});
var cljs$core$async$mix_$_state_machine__55995__auto____1 = (function (state_57147){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57147);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57204){if((e57204 instanceof Object)){
var ex__55998__auto__ = e57204;
var statearr_57205_58397 = state_57147;
(statearr_57205_58397[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58402 = state_57147;
state_57147 = G__58402;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55995__auto__ = function(state_57147){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55995__auto____1.call(this,state_57147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55995__auto____0;
cljs$core$async$mix_$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55995__auto____1;
return cljs$core$async$mix_$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57206 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57206[(6)] = c__56164__auto___58314);

return statearr_57206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57208 = arguments.length;
switch (G__57208) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__57211 = arguments.length;
switch (G__57211) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__57209_SHARP_){
if(cljs.core.truth_((p1__57209_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57209_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__57209_SHARP_.call(null,topic)))){
return p1__57209_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57209_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57212 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57213){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57213 = meta57213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57214,meta57213__$1){
var self__ = this;
var _57214__$1 = this;
return (new cljs.core.async.t_cljs$core$async57212(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57213__$1));
}));

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57214){
var self__ = this;
var _57214__$1 = this;
return self__.meta57213;
}));

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async57212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async57212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57213","meta57213",2078311900,null)], null);
}));

(cljs.core.async.t_cljs$core$async57212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57212");

(cljs.core.async.t_cljs$core$async57212.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57212.
 */
cljs.core.async.__GT_t_cljs$core$async57212 = (function cljs$core$async$__GT_t_cljs$core$async57212(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57213){
return (new cljs.core.async.t_cljs$core$async57212(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57213));
});

}

return (new cljs.core.async.t_cljs$core$async57212(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56164__auto___58419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57286){
var state_val_57287 = (state_57286[(1)]);
if((state_val_57287 === (7))){
var inst_57282 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
var statearr_57288_58420 = state_57286__$1;
(statearr_57288_58420[(2)] = inst_57282);

(statearr_57288_58420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (20))){
var state_57286__$1 = state_57286;
var statearr_57289_58421 = state_57286__$1;
(statearr_57289_58421[(2)] = null);

(statearr_57289_58421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (1))){
var state_57286__$1 = state_57286;
var statearr_57290_58422 = state_57286__$1;
(statearr_57290_58422[(2)] = null);

(statearr_57290_58422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (24))){
var inst_57265 = (state_57286[(7)]);
var inst_57274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57265);
var state_57286__$1 = state_57286;
var statearr_57291_58424 = state_57286__$1;
(statearr_57291_58424[(2)] = inst_57274);

(statearr_57291_58424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (4))){
var inst_57217 = (state_57286[(8)]);
var inst_57217__$1 = (state_57286[(2)]);
var inst_57218 = (inst_57217__$1 == null);
var state_57286__$1 = (function (){var statearr_57292 = state_57286;
(statearr_57292[(8)] = inst_57217__$1);

return statearr_57292;
})();
if(cljs.core.truth_(inst_57218)){
var statearr_57293_58425 = state_57286__$1;
(statearr_57293_58425[(1)] = (5));

} else {
var statearr_57294_58426 = state_57286__$1;
(statearr_57294_58426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (15))){
var inst_57259 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
var statearr_57295_58428 = state_57286__$1;
(statearr_57295_58428[(2)] = inst_57259);

(statearr_57295_58428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (21))){
var inst_57279 = (state_57286[(2)]);
var state_57286__$1 = (function (){var statearr_57296 = state_57286;
(statearr_57296[(9)] = inst_57279);

return statearr_57296;
})();
var statearr_57297_58429 = state_57286__$1;
(statearr_57297_58429[(2)] = null);

(statearr_57297_58429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (13))){
var inst_57241 = (state_57286[(10)]);
var inst_57243 = cljs.core.chunked_seq_QMARK_(inst_57241);
var state_57286__$1 = state_57286;
if(inst_57243){
var statearr_57298_58431 = state_57286__$1;
(statearr_57298_58431[(1)] = (16));

} else {
var statearr_57299_58432 = state_57286__$1;
(statearr_57299_58432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (22))){
var inst_57271 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
if(cljs.core.truth_(inst_57271)){
var statearr_57300_58433 = state_57286__$1;
(statearr_57300_58433[(1)] = (23));

} else {
var statearr_57301_58434 = state_57286__$1;
(statearr_57301_58434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (6))){
var inst_57217 = (state_57286[(8)]);
var inst_57265 = (state_57286[(7)]);
var inst_57267 = (state_57286[(11)]);
var inst_57265__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_57217) : topic_fn.call(null,inst_57217));
var inst_57266 = cljs.core.deref(mults);
var inst_57267__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57266,inst_57265__$1);
var state_57286__$1 = (function (){var statearr_57302 = state_57286;
(statearr_57302[(7)] = inst_57265__$1);

(statearr_57302[(11)] = inst_57267__$1);

return statearr_57302;
})();
if(cljs.core.truth_(inst_57267__$1)){
var statearr_57303_58441 = state_57286__$1;
(statearr_57303_58441[(1)] = (19));

} else {
var statearr_57304_58442 = state_57286__$1;
(statearr_57304_58442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (25))){
var inst_57276 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
var statearr_57305_58443 = state_57286__$1;
(statearr_57305_58443[(2)] = inst_57276);

(statearr_57305_58443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (17))){
var inst_57241 = (state_57286[(10)]);
var inst_57250 = cljs.core.first(inst_57241);
var inst_57251 = cljs.core.async.muxch_STAR_(inst_57250);
var inst_57252 = cljs.core.async.close_BANG_(inst_57251);
var inst_57253 = cljs.core.next(inst_57241);
var inst_57227 = inst_57253;
var inst_57228 = null;
var inst_57229 = (0);
var inst_57230 = (0);
var state_57286__$1 = (function (){var statearr_57306 = state_57286;
(statearr_57306[(12)] = inst_57230);

(statearr_57306[(13)] = inst_57227);

(statearr_57306[(14)] = inst_57252);

(statearr_57306[(15)] = inst_57229);

(statearr_57306[(16)] = inst_57228);

return statearr_57306;
})();
var statearr_57307_58444 = state_57286__$1;
(statearr_57307_58444[(2)] = null);

(statearr_57307_58444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (3))){
var inst_57284 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57286__$1,inst_57284);
} else {
if((state_val_57287 === (12))){
var inst_57261 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
var statearr_57308_58446 = state_57286__$1;
(statearr_57308_58446[(2)] = inst_57261);

(statearr_57308_58446[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (2))){
var state_57286__$1 = state_57286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57286__$1,(4),ch);
} else {
if((state_val_57287 === (23))){
var state_57286__$1 = state_57286;
var statearr_57309_58447 = state_57286__$1;
(statearr_57309_58447[(2)] = null);

(statearr_57309_58447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (19))){
var inst_57217 = (state_57286[(8)]);
var inst_57267 = (state_57286[(11)]);
var inst_57269 = cljs.core.async.muxch_STAR_(inst_57267);
var state_57286__$1 = state_57286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57286__$1,(22),inst_57269,inst_57217);
} else {
if((state_val_57287 === (11))){
var inst_57227 = (state_57286[(13)]);
var inst_57241 = (state_57286[(10)]);
var inst_57241__$1 = cljs.core.seq(inst_57227);
var state_57286__$1 = (function (){var statearr_57310 = state_57286;
(statearr_57310[(10)] = inst_57241__$1);

return statearr_57310;
})();
if(inst_57241__$1){
var statearr_57311_58452 = state_57286__$1;
(statearr_57311_58452[(1)] = (13));

} else {
var statearr_57312_58453 = state_57286__$1;
(statearr_57312_58453[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (9))){
var inst_57263 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
var statearr_57313_58454 = state_57286__$1;
(statearr_57313_58454[(2)] = inst_57263);

(statearr_57313_58454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (5))){
var inst_57224 = cljs.core.deref(mults);
var inst_57225 = cljs.core.vals(inst_57224);
var inst_57226 = cljs.core.seq(inst_57225);
var inst_57227 = inst_57226;
var inst_57228 = null;
var inst_57229 = (0);
var inst_57230 = (0);
var state_57286__$1 = (function (){var statearr_57314 = state_57286;
(statearr_57314[(12)] = inst_57230);

(statearr_57314[(13)] = inst_57227);

(statearr_57314[(15)] = inst_57229);

(statearr_57314[(16)] = inst_57228);

return statearr_57314;
})();
var statearr_57315_58455 = state_57286__$1;
(statearr_57315_58455[(2)] = null);

(statearr_57315_58455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (14))){
var state_57286__$1 = state_57286;
var statearr_57319_58456 = state_57286__$1;
(statearr_57319_58456[(2)] = null);

(statearr_57319_58456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (16))){
var inst_57241 = (state_57286[(10)]);
var inst_57245 = cljs.core.chunk_first(inst_57241);
var inst_57246 = cljs.core.chunk_rest(inst_57241);
var inst_57247 = cljs.core.count(inst_57245);
var inst_57227 = inst_57246;
var inst_57228 = inst_57245;
var inst_57229 = inst_57247;
var inst_57230 = (0);
var state_57286__$1 = (function (){var statearr_57320 = state_57286;
(statearr_57320[(12)] = inst_57230);

(statearr_57320[(13)] = inst_57227);

(statearr_57320[(15)] = inst_57229);

(statearr_57320[(16)] = inst_57228);

return statearr_57320;
})();
var statearr_57321_58457 = state_57286__$1;
(statearr_57321_58457[(2)] = null);

(statearr_57321_58457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (10))){
var inst_57230 = (state_57286[(12)]);
var inst_57227 = (state_57286[(13)]);
var inst_57229 = (state_57286[(15)]);
var inst_57228 = (state_57286[(16)]);
var inst_57235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57228,inst_57230);
var inst_57236 = cljs.core.async.muxch_STAR_(inst_57235);
var inst_57237 = cljs.core.async.close_BANG_(inst_57236);
var inst_57238 = (inst_57230 + (1));
var tmp57316 = inst_57227;
var tmp57317 = inst_57229;
var tmp57318 = inst_57228;
var inst_57227__$1 = tmp57316;
var inst_57228__$1 = tmp57318;
var inst_57229__$1 = tmp57317;
var inst_57230__$1 = inst_57238;
var state_57286__$1 = (function (){var statearr_57322 = state_57286;
(statearr_57322[(17)] = inst_57237);

(statearr_57322[(12)] = inst_57230__$1);

(statearr_57322[(13)] = inst_57227__$1);

(statearr_57322[(15)] = inst_57229__$1);

(statearr_57322[(16)] = inst_57228__$1);

return statearr_57322;
})();
var statearr_57323_58459 = state_57286__$1;
(statearr_57323_58459[(2)] = null);

(statearr_57323_58459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (18))){
var inst_57256 = (state_57286[(2)]);
var state_57286__$1 = state_57286;
var statearr_57324_58460 = state_57286__$1;
(statearr_57324_58460[(2)] = inst_57256);

(statearr_57324_58460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57287 === (8))){
var inst_57230 = (state_57286[(12)]);
var inst_57229 = (state_57286[(15)]);
var inst_57232 = (inst_57230 < inst_57229);
var inst_57233 = inst_57232;
var state_57286__$1 = state_57286;
if(cljs.core.truth_(inst_57233)){
var statearr_57325_58461 = state_57286__$1;
(statearr_57325_58461[(1)] = (10));

} else {
var statearr_57326_58462 = state_57286__$1;
(statearr_57326_58462[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57327[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57327[(1)] = (1));

return statearr_57327;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57286){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57286);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57328){if((e57328 instanceof Object)){
var ex__55998__auto__ = e57328;
var statearr_57329_58470 = state_57286;
(statearr_57329_58470[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58471 = state_57286;
state_57286 = G__58471;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57330 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57330[(6)] = c__56164__auto___58419);

return statearr_57330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__57332 = arguments.length;
switch (G__57332) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__57334 = arguments.length;
switch (G__57334) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__57336 = arguments.length;
switch (G__57336) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__56164__auto___58477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57375){
var state_val_57376 = (state_57375[(1)]);
if((state_val_57376 === (7))){
var state_57375__$1 = state_57375;
var statearr_57377_58478 = state_57375__$1;
(statearr_57377_58478[(2)] = null);

(statearr_57377_58478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (1))){
var state_57375__$1 = state_57375;
var statearr_57378_58479 = state_57375__$1;
(statearr_57378_58479[(2)] = null);

(statearr_57378_58479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (4))){
var inst_57339 = (state_57375[(7)]);
var inst_57341 = (inst_57339 < cnt);
var state_57375__$1 = state_57375;
if(cljs.core.truth_(inst_57341)){
var statearr_57379_58480 = state_57375__$1;
(statearr_57379_58480[(1)] = (6));

} else {
var statearr_57380_58481 = state_57375__$1;
(statearr_57380_58481[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (15))){
var inst_57371 = (state_57375[(2)]);
var state_57375__$1 = state_57375;
var statearr_57381_58482 = state_57375__$1;
(statearr_57381_58482[(2)] = inst_57371);

(statearr_57381_58482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (13))){
var inst_57364 = cljs.core.async.close_BANG_(out);
var state_57375__$1 = state_57375;
var statearr_57382_58483 = state_57375__$1;
(statearr_57382_58483[(2)] = inst_57364);

(statearr_57382_58483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (6))){
var state_57375__$1 = state_57375;
var statearr_57383_58484 = state_57375__$1;
(statearr_57383_58484[(2)] = null);

(statearr_57383_58484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (3))){
var inst_57373 = (state_57375[(2)]);
var state_57375__$1 = state_57375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57375__$1,inst_57373);
} else {
if((state_val_57376 === (12))){
var inst_57361 = (state_57375[(8)]);
var inst_57361__$1 = (state_57375[(2)]);
var inst_57362 = cljs.core.some(cljs.core.nil_QMARK_,inst_57361__$1);
var state_57375__$1 = (function (){var statearr_57384 = state_57375;
(statearr_57384[(8)] = inst_57361__$1);

return statearr_57384;
})();
if(cljs.core.truth_(inst_57362)){
var statearr_57385_58485 = state_57375__$1;
(statearr_57385_58485[(1)] = (13));

} else {
var statearr_57386_58486 = state_57375__$1;
(statearr_57386_58486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (2))){
var inst_57338 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57339 = (0);
var state_57375__$1 = (function (){var statearr_57387 = state_57375;
(statearr_57387[(7)] = inst_57339);

(statearr_57387[(9)] = inst_57338);

return statearr_57387;
})();
var statearr_57388_58487 = state_57375__$1;
(statearr_57388_58487[(2)] = null);

(statearr_57388_58487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (11))){
var inst_57339 = (state_57375[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57375,(10),Object,null,(9));
var inst_57348 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57339) : chs__$1.call(null,inst_57339));
var inst_57349 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57339) : done.call(null,inst_57339));
var inst_57350 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57348,inst_57349);
var state_57375__$1 = state_57375;
var statearr_57389_58492 = state_57375__$1;
(statearr_57389_58492[(2)] = inst_57350);


cljs.core.async.impl.ioc_helpers.process_exception(state_57375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (9))){
var inst_57339 = (state_57375[(7)]);
var inst_57352 = (state_57375[(2)]);
var inst_57353 = (inst_57339 + (1));
var inst_57339__$1 = inst_57353;
var state_57375__$1 = (function (){var statearr_57390 = state_57375;
(statearr_57390[(7)] = inst_57339__$1);

(statearr_57390[(10)] = inst_57352);

return statearr_57390;
})();
var statearr_57391_58497 = state_57375__$1;
(statearr_57391_58497[(2)] = null);

(statearr_57391_58497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (5))){
var inst_57359 = (state_57375[(2)]);
var state_57375__$1 = (function (){var statearr_57392 = state_57375;
(statearr_57392[(11)] = inst_57359);

return statearr_57392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57375__$1,(12),dchan);
} else {
if((state_val_57376 === (14))){
var inst_57361 = (state_57375[(8)]);
var inst_57366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57361);
var state_57375__$1 = state_57375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57375__$1,(16),out,inst_57366);
} else {
if((state_val_57376 === (16))){
var inst_57368 = (state_57375[(2)]);
var state_57375__$1 = (function (){var statearr_57393 = state_57375;
(statearr_57393[(12)] = inst_57368);

return statearr_57393;
})();
var statearr_57394_58500 = state_57375__$1;
(statearr_57394_58500[(2)] = null);

(statearr_57394_58500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (10))){
var inst_57343 = (state_57375[(2)]);
var inst_57344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57375__$1 = (function (){var statearr_57395 = state_57375;
(statearr_57395[(13)] = inst_57343);

return statearr_57395;
})();
var statearr_57396_58501 = state_57375__$1;
(statearr_57396_58501[(2)] = inst_57344);


cljs.core.async.impl.ioc_helpers.process_exception(state_57375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57376 === (8))){
var inst_57357 = (state_57375[(2)]);
var state_57375__$1 = state_57375;
var statearr_57397_58502 = state_57375__$1;
(statearr_57397_58502[(2)] = inst_57357);

(statearr_57397_58502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57398[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57398[(1)] = (1));

return statearr_57398;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57375){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57375);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57399){if((e57399 instanceof Object)){
var ex__55998__auto__ = e57399;
var statearr_57400_58503 = state_57375;
(statearr_57400_58503[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58504 = state_57375;
state_57375 = G__58504;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57401 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57401[(6)] = c__56164__auto___58477);

return statearr_57401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__57404 = arguments.length;
switch (G__57404) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56164__auto___58508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57436){
var state_val_57437 = (state_57436[(1)]);
if((state_val_57437 === (7))){
var inst_57416 = (state_57436[(7)]);
var inst_57415 = (state_57436[(8)]);
var inst_57415__$1 = (state_57436[(2)]);
var inst_57416__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57415__$1,(0),null);
var inst_57417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57415__$1,(1),null);
var inst_57418 = (inst_57416__$1 == null);
var state_57436__$1 = (function (){var statearr_57438 = state_57436;
(statearr_57438[(7)] = inst_57416__$1);

(statearr_57438[(8)] = inst_57415__$1);

(statearr_57438[(9)] = inst_57417);

return statearr_57438;
})();
if(cljs.core.truth_(inst_57418)){
var statearr_57439_58511 = state_57436__$1;
(statearr_57439_58511[(1)] = (8));

} else {
var statearr_57440_58512 = state_57436__$1;
(statearr_57440_58512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (1))){
var inst_57405 = cljs.core.vec(chs);
var inst_57406 = inst_57405;
var state_57436__$1 = (function (){var statearr_57441 = state_57436;
(statearr_57441[(10)] = inst_57406);

return statearr_57441;
})();
var statearr_57442_58513 = state_57436__$1;
(statearr_57442_58513[(2)] = null);

(statearr_57442_58513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (4))){
var inst_57406 = (state_57436[(10)]);
var state_57436__$1 = state_57436;
return cljs.core.async.ioc_alts_BANG_(state_57436__$1,(7),inst_57406);
} else {
if((state_val_57437 === (6))){
var inst_57432 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57443_58514 = state_57436__$1;
(statearr_57443_58514[(2)] = inst_57432);

(statearr_57443_58514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (3))){
var inst_57434 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57436__$1,inst_57434);
} else {
if((state_val_57437 === (2))){
var inst_57406 = (state_57436[(10)]);
var inst_57408 = cljs.core.count(inst_57406);
var inst_57409 = (inst_57408 > (0));
var state_57436__$1 = state_57436;
if(cljs.core.truth_(inst_57409)){
var statearr_57445_58515 = state_57436__$1;
(statearr_57445_58515[(1)] = (4));

} else {
var statearr_57446_58516 = state_57436__$1;
(statearr_57446_58516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (11))){
var inst_57406 = (state_57436[(10)]);
var inst_57425 = (state_57436[(2)]);
var tmp57444 = inst_57406;
var inst_57406__$1 = tmp57444;
var state_57436__$1 = (function (){var statearr_57447 = state_57436;
(statearr_57447[(10)] = inst_57406__$1);

(statearr_57447[(11)] = inst_57425);

return statearr_57447;
})();
var statearr_57448_58518 = state_57436__$1;
(statearr_57448_58518[(2)] = null);

(statearr_57448_58518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (9))){
var inst_57416 = (state_57436[(7)]);
var state_57436__$1 = state_57436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57436__$1,(11),out,inst_57416);
} else {
if((state_val_57437 === (5))){
var inst_57430 = cljs.core.async.close_BANG_(out);
var state_57436__$1 = state_57436;
var statearr_57449_58519 = state_57436__$1;
(statearr_57449_58519[(2)] = inst_57430);

(statearr_57449_58519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (10))){
var inst_57428 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57450_58520 = state_57436__$1;
(statearr_57450_58520[(2)] = inst_57428);

(statearr_57450_58520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (8))){
var inst_57416 = (state_57436[(7)]);
var inst_57406 = (state_57436[(10)]);
var inst_57415 = (state_57436[(8)]);
var inst_57417 = (state_57436[(9)]);
var inst_57420 = (function (){var cs = inst_57406;
var vec__57411 = inst_57415;
var v = inst_57416;
var c = inst_57417;
return (function (p1__57402_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57402_SHARP_);
});
})();
var inst_57421 = cljs.core.filterv(inst_57420,inst_57406);
var inst_57406__$1 = inst_57421;
var state_57436__$1 = (function (){var statearr_57451 = state_57436;
(statearr_57451[(10)] = inst_57406__$1);

return statearr_57451;
})();
var statearr_57452_58522 = state_57436__$1;
(statearr_57452_58522[(2)] = null);

(statearr_57452_58522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57453[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57453[(1)] = (1));

return statearr_57453;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57436){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57436);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57454){if((e57454 instanceof Object)){
var ex__55998__auto__ = e57454;
var statearr_57455_58524 = state_57436;
(statearr_57455_58524[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58525 = state_57436;
state_57436 = G__58525;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57456 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57456[(6)] = c__56164__auto___58508);

return statearr_57456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__57458 = arguments.length;
switch (G__57458) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56164__auto___58537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57482){
var state_val_57483 = (state_57482[(1)]);
if((state_val_57483 === (7))){
var inst_57464 = (state_57482[(7)]);
var inst_57464__$1 = (state_57482[(2)]);
var inst_57465 = (inst_57464__$1 == null);
var inst_57466 = cljs.core.not(inst_57465);
var state_57482__$1 = (function (){var statearr_57484 = state_57482;
(statearr_57484[(7)] = inst_57464__$1);

return statearr_57484;
})();
if(inst_57466){
var statearr_57485_58541 = state_57482__$1;
(statearr_57485_58541[(1)] = (8));

} else {
var statearr_57486_58542 = state_57482__$1;
(statearr_57486_58542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (1))){
var inst_57459 = (0);
var state_57482__$1 = (function (){var statearr_57487 = state_57482;
(statearr_57487[(8)] = inst_57459);

return statearr_57487;
})();
var statearr_57488_58543 = state_57482__$1;
(statearr_57488_58543[(2)] = null);

(statearr_57488_58543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (4))){
var state_57482__$1 = state_57482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57482__$1,(7),ch);
} else {
if((state_val_57483 === (6))){
var inst_57477 = (state_57482[(2)]);
var state_57482__$1 = state_57482;
var statearr_57489_58547 = state_57482__$1;
(statearr_57489_58547[(2)] = inst_57477);

(statearr_57489_58547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (3))){
var inst_57479 = (state_57482[(2)]);
var inst_57480 = cljs.core.async.close_BANG_(out);
var state_57482__$1 = (function (){var statearr_57490 = state_57482;
(statearr_57490[(9)] = inst_57479);

return statearr_57490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57482__$1,inst_57480);
} else {
if((state_val_57483 === (2))){
var inst_57459 = (state_57482[(8)]);
var inst_57461 = (inst_57459 < n);
var state_57482__$1 = state_57482;
if(cljs.core.truth_(inst_57461)){
var statearr_57491_58551 = state_57482__$1;
(statearr_57491_58551[(1)] = (4));

} else {
var statearr_57492_58552 = state_57482__$1;
(statearr_57492_58552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (11))){
var inst_57459 = (state_57482[(8)]);
var inst_57469 = (state_57482[(2)]);
var inst_57470 = (inst_57459 + (1));
var inst_57459__$1 = inst_57470;
var state_57482__$1 = (function (){var statearr_57493 = state_57482;
(statearr_57493[(10)] = inst_57469);

(statearr_57493[(8)] = inst_57459__$1);

return statearr_57493;
})();
var statearr_57494_58553 = state_57482__$1;
(statearr_57494_58553[(2)] = null);

(statearr_57494_58553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (9))){
var state_57482__$1 = state_57482;
var statearr_57495_58554 = state_57482__$1;
(statearr_57495_58554[(2)] = null);

(statearr_57495_58554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (5))){
var state_57482__$1 = state_57482;
var statearr_57496_58556 = state_57482__$1;
(statearr_57496_58556[(2)] = null);

(statearr_57496_58556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (10))){
var inst_57474 = (state_57482[(2)]);
var state_57482__$1 = state_57482;
var statearr_57497_58557 = state_57482__$1;
(statearr_57497_58557[(2)] = inst_57474);

(statearr_57497_58557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57483 === (8))){
var inst_57464 = (state_57482[(7)]);
var state_57482__$1 = state_57482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57482__$1,(11),out,inst_57464);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57498[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57498[(1)] = (1));

return statearr_57498;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57482){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57482);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57499){if((e57499 instanceof Object)){
var ex__55998__auto__ = e57499;
var statearr_57500_58567 = state_57482;
(statearr_57500_58567[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58568 = state_57482;
state_57482 = G__58568;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57501 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57501[(6)] = c__56164__auto___58537);

return statearr_57501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57503 = (function (f,ch,meta57504){
this.f = f;
this.ch = ch;
this.meta57504 = meta57504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57505,meta57504__$1){
var self__ = this;
var _57505__$1 = this;
return (new cljs.core.async.t_cljs$core$async57503(self__.f,self__.ch,meta57504__$1));
}));

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57505){
var self__ = this;
var _57505__$1 = this;
return self__.meta57504;
}));

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57506 = (function (f,ch,meta57504,_,fn1,meta57507){
this.f = f;
this.ch = ch;
this.meta57504 = meta57504;
this._ = _;
this.fn1 = fn1;
this.meta57507 = meta57507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57508,meta57507__$1){
var self__ = this;
var _57508__$1 = this;
return (new cljs.core.async.t_cljs$core$async57506(self__.f,self__.ch,self__.meta57504,self__._,self__.fn1,meta57507__$1));
}));

(cljs.core.async.t_cljs$core$async57506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57508){
var self__ = this;
var _57508__$1 = this;
return self__.meta57507;
}));

(cljs.core.async.t_cljs$core$async57506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57502_SHARP_){
var G__57509 = (((p1__57502_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57502_SHARP_) : self__.f.call(null,p1__57502_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57509) : f1.call(null,G__57509));
});
}));

(cljs.core.async.t_cljs$core$async57506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57504","meta57504",646420175,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57503","cljs.core.async/t_cljs$core$async57503",1014489602,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57507","meta57507",1388260149,null)], null);
}));

(cljs.core.async.t_cljs$core$async57506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57506");

(cljs.core.async.t_cljs$core$async57506.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57506.
 */
cljs.core.async.__GT_t_cljs$core$async57506 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57506(f__$1,ch__$1,meta57504__$1,___$2,fn1__$1,meta57507){
return (new cljs.core.async.t_cljs$core$async57506(f__$1,ch__$1,meta57504__$1,___$2,fn1__$1,meta57507));
});

}

return (new cljs.core.async.t_cljs$core$async57506(self__.f,self__.ch,self__.meta57504,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57510 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57510) : self__.f.call(null,G__57510));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57504","meta57504",646420175,null)], null);
}));

(cljs.core.async.t_cljs$core$async57503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57503");

(cljs.core.async.t_cljs$core$async57503.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57503.
 */
cljs.core.async.__GT_t_cljs$core$async57503 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57503(f__$1,ch__$1,meta57504){
return (new cljs.core.async.t_cljs$core$async57503(f__$1,ch__$1,meta57504));
});

}

return (new cljs.core.async.t_cljs$core$async57503(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57511 = (function (f,ch,meta57512){
this.f = f;
this.ch = ch;
this.meta57512 = meta57512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57513,meta57512__$1){
var self__ = this;
var _57513__$1 = this;
return (new cljs.core.async.t_cljs$core$async57511(self__.f,self__.ch,meta57512__$1));
}));

(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57513){
var self__ = this;
var _57513__$1 = this;
return self__.meta57512;
}));

(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57512","meta57512",-880423719,null)], null);
}));

(cljs.core.async.t_cljs$core$async57511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57511");

(cljs.core.async.t_cljs$core$async57511.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57511.
 */
cljs.core.async.__GT_t_cljs$core$async57511 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57511(f__$1,ch__$1,meta57512){
return (new cljs.core.async.t_cljs$core$async57511(f__$1,ch__$1,meta57512));
});

}

return (new cljs.core.async.t_cljs$core$async57511(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57514 = (function (p,ch,meta57515){
this.p = p;
this.ch = ch;
this.meta57515 = meta57515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57516,meta57515__$1){
var self__ = this;
var _57516__$1 = this;
return (new cljs.core.async.t_cljs$core$async57514(self__.p,self__.ch,meta57515__$1));
}));

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57516){
var self__ = this;
var _57516__$1 = this;
return self__.meta57515;
}));

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57515","meta57515",2104888132,null)], null);
}));

(cljs.core.async.t_cljs$core$async57514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57514");

(cljs.core.async.t_cljs$core$async57514.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57514.
 */
cljs.core.async.__GT_t_cljs$core$async57514 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57514(p__$1,ch__$1,meta57515){
return (new cljs.core.async.t_cljs$core$async57514(p__$1,ch__$1,meta57515));
});

}

return (new cljs.core.async.t_cljs$core$async57514(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__57518 = arguments.length;
switch (G__57518) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56164__auto___58594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57539){
var state_val_57540 = (state_57539[(1)]);
if((state_val_57540 === (7))){
var inst_57535 = (state_57539[(2)]);
var state_57539__$1 = state_57539;
var statearr_57541_58595 = state_57539__$1;
(statearr_57541_58595[(2)] = inst_57535);

(statearr_57541_58595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (1))){
var state_57539__$1 = state_57539;
var statearr_57542_58596 = state_57539__$1;
(statearr_57542_58596[(2)] = null);

(statearr_57542_58596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (4))){
var inst_57521 = (state_57539[(7)]);
var inst_57521__$1 = (state_57539[(2)]);
var inst_57522 = (inst_57521__$1 == null);
var state_57539__$1 = (function (){var statearr_57543 = state_57539;
(statearr_57543[(7)] = inst_57521__$1);

return statearr_57543;
})();
if(cljs.core.truth_(inst_57522)){
var statearr_57544_58597 = state_57539__$1;
(statearr_57544_58597[(1)] = (5));

} else {
var statearr_57545_58598 = state_57539__$1;
(statearr_57545_58598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (6))){
var inst_57521 = (state_57539[(7)]);
var inst_57526 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57521) : p.call(null,inst_57521));
var state_57539__$1 = state_57539;
if(cljs.core.truth_(inst_57526)){
var statearr_57546_58599 = state_57539__$1;
(statearr_57546_58599[(1)] = (8));

} else {
var statearr_57547_58600 = state_57539__$1;
(statearr_57547_58600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (3))){
var inst_57537 = (state_57539[(2)]);
var state_57539__$1 = state_57539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57539__$1,inst_57537);
} else {
if((state_val_57540 === (2))){
var state_57539__$1 = state_57539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57539__$1,(4),ch);
} else {
if((state_val_57540 === (11))){
var inst_57529 = (state_57539[(2)]);
var state_57539__$1 = state_57539;
var statearr_57548_58604 = state_57539__$1;
(statearr_57548_58604[(2)] = inst_57529);

(statearr_57548_58604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (9))){
var state_57539__$1 = state_57539;
var statearr_57549_58605 = state_57539__$1;
(statearr_57549_58605[(2)] = null);

(statearr_57549_58605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (5))){
var inst_57524 = cljs.core.async.close_BANG_(out);
var state_57539__$1 = state_57539;
var statearr_57550_58606 = state_57539__$1;
(statearr_57550_58606[(2)] = inst_57524);

(statearr_57550_58606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (10))){
var inst_57532 = (state_57539[(2)]);
var state_57539__$1 = (function (){var statearr_57551 = state_57539;
(statearr_57551[(8)] = inst_57532);

return statearr_57551;
})();
var statearr_57552_58607 = state_57539__$1;
(statearr_57552_58607[(2)] = null);

(statearr_57552_58607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57540 === (8))){
var inst_57521 = (state_57539[(7)]);
var state_57539__$1 = state_57539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57539__$1,(11),out,inst_57521);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57553 = [null,null,null,null,null,null,null,null,null];
(statearr_57553[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57553[(1)] = (1));

return statearr_57553;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57539){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57539);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57554){if((e57554 instanceof Object)){
var ex__55998__auto__ = e57554;
var statearr_57555_58611 = state_57539;
(statearr_57555_58611[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58612 = state_57539;
state_57539 = G__58612;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57556 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57556[(6)] = c__56164__auto___58594);

return statearr_57556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57558 = arguments.length;
switch (G__57558) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57620){
var state_val_57621 = (state_57620[(1)]);
if((state_val_57621 === (7))){
var inst_57616 = (state_57620[(2)]);
var state_57620__$1 = state_57620;
var statearr_57622_58616 = state_57620__$1;
(statearr_57622_58616[(2)] = inst_57616);

(statearr_57622_58616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (20))){
var inst_57586 = (state_57620[(7)]);
var inst_57597 = (state_57620[(2)]);
var inst_57598 = cljs.core.next(inst_57586);
var inst_57572 = inst_57598;
var inst_57573 = null;
var inst_57574 = (0);
var inst_57575 = (0);
var state_57620__$1 = (function (){var statearr_57623 = state_57620;
(statearr_57623[(8)] = inst_57597);

(statearr_57623[(9)] = inst_57574);

(statearr_57623[(10)] = inst_57572);

(statearr_57623[(11)] = inst_57573);

(statearr_57623[(12)] = inst_57575);

return statearr_57623;
})();
var statearr_57624_58619 = state_57620__$1;
(statearr_57624_58619[(2)] = null);

(statearr_57624_58619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (1))){
var state_57620__$1 = state_57620;
var statearr_57625_58620 = state_57620__$1;
(statearr_57625_58620[(2)] = null);

(statearr_57625_58620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (4))){
var inst_57561 = (state_57620[(13)]);
var inst_57561__$1 = (state_57620[(2)]);
var inst_57562 = (inst_57561__$1 == null);
var state_57620__$1 = (function (){var statearr_57626 = state_57620;
(statearr_57626[(13)] = inst_57561__$1);

return statearr_57626;
})();
if(cljs.core.truth_(inst_57562)){
var statearr_57627_58621 = state_57620__$1;
(statearr_57627_58621[(1)] = (5));

} else {
var statearr_57628_58622 = state_57620__$1;
(statearr_57628_58622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (15))){
var state_57620__$1 = state_57620;
var statearr_57632_58623 = state_57620__$1;
(statearr_57632_58623[(2)] = null);

(statearr_57632_58623[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (21))){
var state_57620__$1 = state_57620;
var statearr_57633_58624 = state_57620__$1;
(statearr_57633_58624[(2)] = null);

(statearr_57633_58624[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (13))){
var inst_57574 = (state_57620[(9)]);
var inst_57572 = (state_57620[(10)]);
var inst_57573 = (state_57620[(11)]);
var inst_57575 = (state_57620[(12)]);
var inst_57582 = (state_57620[(2)]);
var inst_57583 = (inst_57575 + (1));
var tmp57629 = inst_57574;
var tmp57630 = inst_57572;
var tmp57631 = inst_57573;
var inst_57572__$1 = tmp57630;
var inst_57573__$1 = tmp57631;
var inst_57574__$1 = tmp57629;
var inst_57575__$1 = inst_57583;
var state_57620__$1 = (function (){var statearr_57634 = state_57620;
(statearr_57634[(9)] = inst_57574__$1);

(statearr_57634[(10)] = inst_57572__$1);

(statearr_57634[(11)] = inst_57573__$1);

(statearr_57634[(12)] = inst_57575__$1);

(statearr_57634[(14)] = inst_57582);

return statearr_57634;
})();
var statearr_57635_58628 = state_57620__$1;
(statearr_57635_58628[(2)] = null);

(statearr_57635_58628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (22))){
var state_57620__$1 = state_57620;
var statearr_57636_58629 = state_57620__$1;
(statearr_57636_58629[(2)] = null);

(statearr_57636_58629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (6))){
var inst_57561 = (state_57620[(13)]);
var inst_57570 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57561) : f.call(null,inst_57561));
var inst_57571 = cljs.core.seq(inst_57570);
var inst_57572 = inst_57571;
var inst_57573 = null;
var inst_57574 = (0);
var inst_57575 = (0);
var state_57620__$1 = (function (){var statearr_57637 = state_57620;
(statearr_57637[(9)] = inst_57574);

(statearr_57637[(10)] = inst_57572);

(statearr_57637[(11)] = inst_57573);

(statearr_57637[(12)] = inst_57575);

return statearr_57637;
})();
var statearr_57638_58636 = state_57620__$1;
(statearr_57638_58636[(2)] = null);

(statearr_57638_58636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (17))){
var inst_57586 = (state_57620[(7)]);
var inst_57590 = cljs.core.chunk_first(inst_57586);
var inst_57591 = cljs.core.chunk_rest(inst_57586);
var inst_57592 = cljs.core.count(inst_57590);
var inst_57572 = inst_57591;
var inst_57573 = inst_57590;
var inst_57574 = inst_57592;
var inst_57575 = (0);
var state_57620__$1 = (function (){var statearr_57639 = state_57620;
(statearr_57639[(9)] = inst_57574);

(statearr_57639[(10)] = inst_57572);

(statearr_57639[(11)] = inst_57573);

(statearr_57639[(12)] = inst_57575);

return statearr_57639;
})();
var statearr_57640_58637 = state_57620__$1;
(statearr_57640_58637[(2)] = null);

(statearr_57640_58637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (3))){
var inst_57618 = (state_57620[(2)]);
var state_57620__$1 = state_57620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57620__$1,inst_57618);
} else {
if((state_val_57621 === (12))){
var inst_57606 = (state_57620[(2)]);
var state_57620__$1 = state_57620;
var statearr_57641_58639 = state_57620__$1;
(statearr_57641_58639[(2)] = inst_57606);

(statearr_57641_58639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (2))){
var state_57620__$1 = state_57620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57620__$1,(4),in$);
} else {
if((state_val_57621 === (23))){
var inst_57614 = (state_57620[(2)]);
var state_57620__$1 = state_57620;
var statearr_57642_58641 = state_57620__$1;
(statearr_57642_58641[(2)] = inst_57614);

(statearr_57642_58641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (19))){
var inst_57601 = (state_57620[(2)]);
var state_57620__$1 = state_57620;
var statearr_57643_58643 = state_57620__$1;
(statearr_57643_58643[(2)] = inst_57601);

(statearr_57643_58643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (11))){
var inst_57572 = (state_57620[(10)]);
var inst_57586 = (state_57620[(7)]);
var inst_57586__$1 = cljs.core.seq(inst_57572);
var state_57620__$1 = (function (){var statearr_57644 = state_57620;
(statearr_57644[(7)] = inst_57586__$1);

return statearr_57644;
})();
if(inst_57586__$1){
var statearr_57645_58645 = state_57620__$1;
(statearr_57645_58645[(1)] = (14));

} else {
var statearr_57646_58646 = state_57620__$1;
(statearr_57646_58646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (9))){
var inst_57608 = (state_57620[(2)]);
var inst_57609 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57620__$1 = (function (){var statearr_57647 = state_57620;
(statearr_57647[(15)] = inst_57608);

return statearr_57647;
})();
if(cljs.core.truth_(inst_57609)){
var statearr_57648_58648 = state_57620__$1;
(statearr_57648_58648[(1)] = (21));

} else {
var statearr_57649_58649 = state_57620__$1;
(statearr_57649_58649[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (5))){
var inst_57564 = cljs.core.async.close_BANG_(out);
var state_57620__$1 = state_57620;
var statearr_57650_58650 = state_57620__$1;
(statearr_57650_58650[(2)] = inst_57564);

(statearr_57650_58650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (14))){
var inst_57586 = (state_57620[(7)]);
var inst_57588 = cljs.core.chunked_seq_QMARK_(inst_57586);
var state_57620__$1 = state_57620;
if(inst_57588){
var statearr_57651_58651 = state_57620__$1;
(statearr_57651_58651[(1)] = (17));

} else {
var statearr_57652_58652 = state_57620__$1;
(statearr_57652_58652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (16))){
var inst_57604 = (state_57620[(2)]);
var state_57620__$1 = state_57620;
var statearr_57653_58653 = state_57620__$1;
(statearr_57653_58653[(2)] = inst_57604);

(statearr_57653_58653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57621 === (10))){
var inst_57573 = (state_57620[(11)]);
var inst_57575 = (state_57620[(12)]);
var inst_57580 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57573,inst_57575);
var state_57620__$1 = state_57620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57620__$1,(13),out,inst_57580);
} else {
if((state_val_57621 === (18))){
var inst_57586 = (state_57620[(7)]);
var inst_57595 = cljs.core.first(inst_57586);
var state_57620__$1 = state_57620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57620__$1,(20),out,inst_57595);
} else {
if((state_val_57621 === (8))){
var inst_57574 = (state_57620[(9)]);
var inst_57575 = (state_57620[(12)]);
var inst_57577 = (inst_57575 < inst_57574);
var inst_57578 = inst_57577;
var state_57620__$1 = state_57620;
if(cljs.core.truth_(inst_57578)){
var statearr_57654_58654 = state_57620__$1;
(statearr_57654_58654[(1)] = (10));

} else {
var statearr_57655_58655 = state_57620__$1;
(statearr_57655_58655[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__55995__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55995__auto____0 = (function (){
var statearr_57656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57656[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55995__auto__);

(statearr_57656[(1)] = (1));

return statearr_57656;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55995__auto____1 = (function (state_57620){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57620);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57657){if((e57657 instanceof Object)){
var ex__55998__auto__ = e57657;
var statearr_57658_58656 = state_57620;
(statearr_57658_58656[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58657 = state_57620;
state_57620 = G__58657;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55995__auto__ = function(state_57620){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55995__auto____1.call(this,state_57620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55995__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55995__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57659 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57659[(6)] = c__56164__auto__);

return statearr_57659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));

return c__56164__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57661 = arguments.length;
switch (G__57661) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57663 = arguments.length;
switch (G__57663) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57665 = arguments.length;
switch (G__57665) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56164__auto___58663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57689){
var state_val_57690 = (state_57689[(1)]);
if((state_val_57690 === (7))){
var inst_57684 = (state_57689[(2)]);
var state_57689__$1 = state_57689;
var statearr_57691_58665 = state_57689__$1;
(statearr_57691_58665[(2)] = inst_57684);

(statearr_57691_58665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57690 === (1))){
var inst_57666 = null;
var state_57689__$1 = (function (){var statearr_57692 = state_57689;
(statearr_57692[(7)] = inst_57666);

return statearr_57692;
})();
var statearr_57693_58666 = state_57689__$1;
(statearr_57693_58666[(2)] = null);

(statearr_57693_58666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57690 === (4))){
var inst_57669 = (state_57689[(8)]);
var inst_57669__$1 = (state_57689[(2)]);
var inst_57670 = (inst_57669__$1 == null);
var inst_57671 = cljs.core.not(inst_57670);
var state_57689__$1 = (function (){var statearr_57694 = state_57689;
(statearr_57694[(8)] = inst_57669__$1);

return statearr_57694;
})();
if(inst_57671){
var statearr_57695_58668 = state_57689__$1;
(statearr_57695_58668[(1)] = (5));

} else {
var statearr_57696_58669 = state_57689__$1;
(statearr_57696_58669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57690 === (6))){
var state_57689__$1 = state_57689;
var statearr_57697_58670 = state_57689__$1;
(statearr_57697_58670[(2)] = null);

(statearr_57697_58670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57690 === (3))){
var inst_57686 = (state_57689[(2)]);
var inst_57687 = cljs.core.async.close_BANG_(out);
var state_57689__$1 = (function (){var statearr_57698 = state_57689;
(statearr_57698[(9)] = inst_57686);

return statearr_57698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57689__$1,inst_57687);
} else {
if((state_val_57690 === (2))){
var state_57689__$1 = state_57689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57689__$1,(4),ch);
} else {
if((state_val_57690 === (11))){
var inst_57669 = (state_57689[(8)]);
var inst_57678 = (state_57689[(2)]);
var inst_57666 = inst_57669;
var state_57689__$1 = (function (){var statearr_57699 = state_57689;
(statearr_57699[(7)] = inst_57666);

(statearr_57699[(10)] = inst_57678);

return statearr_57699;
})();
var statearr_57700_58672 = state_57689__$1;
(statearr_57700_58672[(2)] = null);

(statearr_57700_58672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57690 === (9))){
var inst_57669 = (state_57689[(8)]);
var state_57689__$1 = state_57689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57689__$1,(11),out,inst_57669);
} else {
if((state_val_57690 === (5))){
var inst_57666 = (state_57689[(7)]);
var inst_57669 = (state_57689[(8)]);
var inst_57673 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57669,inst_57666);
var state_57689__$1 = state_57689;
if(inst_57673){
var statearr_57702_58674 = state_57689__$1;
(statearr_57702_58674[(1)] = (8));

} else {
var statearr_57703_58675 = state_57689__$1;
(statearr_57703_58675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57690 === (10))){
var inst_57681 = (state_57689[(2)]);
var state_57689__$1 = state_57689;
var statearr_57704_58676 = state_57689__$1;
(statearr_57704_58676[(2)] = inst_57681);

(statearr_57704_58676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57690 === (8))){
var inst_57666 = (state_57689[(7)]);
var tmp57701 = inst_57666;
var inst_57666__$1 = tmp57701;
var state_57689__$1 = (function (){var statearr_57705 = state_57689;
(statearr_57705[(7)] = inst_57666__$1);

return statearr_57705;
})();
var statearr_57706_58677 = state_57689__$1;
(statearr_57706_58677[(2)] = null);

(statearr_57706_58677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57707[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57707[(1)] = (1));

return statearr_57707;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57689){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57689);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57708){if((e57708 instanceof Object)){
var ex__55998__auto__ = e57708;
var statearr_57709_58678 = state_57689;
(statearr_57709_58678[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58679 = state_57689;
state_57689 = G__58679;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57710 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57710[(6)] = c__56164__auto___58663);

return statearr_57710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57712 = arguments.length;
switch (G__57712) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56164__auto___58693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57750){
var state_val_57751 = (state_57750[(1)]);
if((state_val_57751 === (7))){
var inst_57746 = (state_57750[(2)]);
var state_57750__$1 = state_57750;
var statearr_57752_58695 = state_57750__$1;
(statearr_57752_58695[(2)] = inst_57746);

(statearr_57752_58695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (1))){
var inst_57713 = (new Array(n));
var inst_57714 = inst_57713;
var inst_57715 = (0);
var state_57750__$1 = (function (){var statearr_57753 = state_57750;
(statearr_57753[(7)] = inst_57714);

(statearr_57753[(8)] = inst_57715);

return statearr_57753;
})();
var statearr_57754_58703 = state_57750__$1;
(statearr_57754_58703[(2)] = null);

(statearr_57754_58703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (4))){
var inst_57718 = (state_57750[(9)]);
var inst_57718__$1 = (state_57750[(2)]);
var inst_57719 = (inst_57718__$1 == null);
var inst_57720 = cljs.core.not(inst_57719);
var state_57750__$1 = (function (){var statearr_57755 = state_57750;
(statearr_57755[(9)] = inst_57718__$1);

return statearr_57755;
})();
if(inst_57720){
var statearr_57756_58707 = state_57750__$1;
(statearr_57756_58707[(1)] = (5));

} else {
var statearr_57757_58708 = state_57750__$1;
(statearr_57757_58708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (15))){
var inst_57740 = (state_57750[(2)]);
var state_57750__$1 = state_57750;
var statearr_57758_58709 = state_57750__$1;
(statearr_57758_58709[(2)] = inst_57740);

(statearr_57758_58709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (13))){
var state_57750__$1 = state_57750;
var statearr_57759_58710 = state_57750__$1;
(statearr_57759_58710[(2)] = null);

(statearr_57759_58710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (6))){
var inst_57715 = (state_57750[(8)]);
var inst_57736 = (inst_57715 > (0));
var state_57750__$1 = state_57750;
if(cljs.core.truth_(inst_57736)){
var statearr_57760_58711 = state_57750__$1;
(statearr_57760_58711[(1)] = (12));

} else {
var statearr_57761_58712 = state_57750__$1;
(statearr_57761_58712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (3))){
var inst_57748 = (state_57750[(2)]);
var state_57750__$1 = state_57750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57750__$1,inst_57748);
} else {
if((state_val_57751 === (12))){
var inst_57714 = (state_57750[(7)]);
var inst_57738 = cljs.core.vec(inst_57714);
var state_57750__$1 = state_57750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57750__$1,(15),out,inst_57738);
} else {
if((state_val_57751 === (2))){
var state_57750__$1 = state_57750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57750__$1,(4),ch);
} else {
if((state_val_57751 === (11))){
var inst_57730 = (state_57750[(2)]);
var inst_57731 = (new Array(n));
var inst_57714 = inst_57731;
var inst_57715 = (0);
var state_57750__$1 = (function (){var statearr_57762 = state_57750;
(statearr_57762[(7)] = inst_57714);

(statearr_57762[(8)] = inst_57715);

(statearr_57762[(10)] = inst_57730);

return statearr_57762;
})();
var statearr_57763_58717 = state_57750__$1;
(statearr_57763_58717[(2)] = null);

(statearr_57763_58717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (9))){
var inst_57714 = (state_57750[(7)]);
var inst_57728 = cljs.core.vec(inst_57714);
var state_57750__$1 = state_57750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57750__$1,(11),out,inst_57728);
} else {
if((state_val_57751 === (5))){
var inst_57714 = (state_57750[(7)]);
var inst_57718 = (state_57750[(9)]);
var inst_57723 = (state_57750[(11)]);
var inst_57715 = (state_57750[(8)]);
var inst_57722 = (inst_57714[inst_57715] = inst_57718);
var inst_57723__$1 = (inst_57715 + (1));
var inst_57724 = (inst_57723__$1 < n);
var state_57750__$1 = (function (){var statearr_57764 = state_57750;
(statearr_57764[(11)] = inst_57723__$1);

(statearr_57764[(12)] = inst_57722);

return statearr_57764;
})();
if(cljs.core.truth_(inst_57724)){
var statearr_57765_58726 = state_57750__$1;
(statearr_57765_58726[(1)] = (8));

} else {
var statearr_57766_58727 = state_57750__$1;
(statearr_57766_58727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (14))){
var inst_57743 = (state_57750[(2)]);
var inst_57744 = cljs.core.async.close_BANG_(out);
var state_57750__$1 = (function (){var statearr_57768 = state_57750;
(statearr_57768[(13)] = inst_57743);

return statearr_57768;
})();
var statearr_57769_58732 = state_57750__$1;
(statearr_57769_58732[(2)] = inst_57744);

(statearr_57769_58732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (10))){
var inst_57734 = (state_57750[(2)]);
var state_57750__$1 = state_57750;
var statearr_57770_58738 = state_57750__$1;
(statearr_57770_58738[(2)] = inst_57734);

(statearr_57770_58738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57751 === (8))){
var inst_57714 = (state_57750[(7)]);
var inst_57723 = (state_57750[(11)]);
var tmp57767 = inst_57714;
var inst_57714__$1 = tmp57767;
var inst_57715 = inst_57723;
var state_57750__$1 = (function (){var statearr_57771 = state_57750;
(statearr_57771[(7)] = inst_57714__$1);

(statearr_57771[(8)] = inst_57715);

return statearr_57771;
})();
var statearr_57772_58743 = state_57750__$1;
(statearr_57772_58743[(2)] = null);

(statearr_57772_58743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57773[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57773[(1)] = (1));

return statearr_57773;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57750){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57750);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57774){if((e57774 instanceof Object)){
var ex__55998__auto__ = e57774;
var statearr_57775_58756 = state_57750;
(statearr_57775_58756[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58757 = state_57750;
state_57750 = G__58757;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57776 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57776[(6)] = c__56164__auto___58693);

return statearr_57776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57778 = arguments.length;
switch (G__57778) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56164__auto___58760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_57820){
var state_val_57821 = (state_57820[(1)]);
if((state_val_57821 === (7))){
var inst_57816 = (state_57820[(2)]);
var state_57820__$1 = state_57820;
var statearr_57822_58762 = state_57820__$1;
(statearr_57822_58762[(2)] = inst_57816);

(statearr_57822_58762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (1))){
var inst_57779 = [];
var inst_57780 = inst_57779;
var inst_57781 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57820__$1 = (function (){var statearr_57823 = state_57820;
(statearr_57823[(7)] = inst_57780);

(statearr_57823[(8)] = inst_57781);

return statearr_57823;
})();
var statearr_57824_58763 = state_57820__$1;
(statearr_57824_58763[(2)] = null);

(statearr_57824_58763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (4))){
var inst_57784 = (state_57820[(9)]);
var inst_57784__$1 = (state_57820[(2)]);
var inst_57785 = (inst_57784__$1 == null);
var inst_57786 = cljs.core.not(inst_57785);
var state_57820__$1 = (function (){var statearr_57825 = state_57820;
(statearr_57825[(9)] = inst_57784__$1);

return statearr_57825;
})();
if(inst_57786){
var statearr_57826_58764 = state_57820__$1;
(statearr_57826_58764[(1)] = (5));

} else {
var statearr_57827_58766 = state_57820__$1;
(statearr_57827_58766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (15))){
var inst_57810 = (state_57820[(2)]);
var state_57820__$1 = state_57820;
var statearr_57828_58768 = state_57820__$1;
(statearr_57828_58768[(2)] = inst_57810);

(statearr_57828_58768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (13))){
var state_57820__$1 = state_57820;
var statearr_57829_58769 = state_57820__$1;
(statearr_57829_58769[(2)] = null);

(statearr_57829_58769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (6))){
var inst_57780 = (state_57820[(7)]);
var inst_57805 = inst_57780.length;
var inst_57806 = (inst_57805 > (0));
var state_57820__$1 = state_57820;
if(cljs.core.truth_(inst_57806)){
var statearr_57830_58770 = state_57820__$1;
(statearr_57830_58770[(1)] = (12));

} else {
var statearr_57831_58771 = state_57820__$1;
(statearr_57831_58771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (3))){
var inst_57818 = (state_57820[(2)]);
var state_57820__$1 = state_57820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57820__$1,inst_57818);
} else {
if((state_val_57821 === (12))){
var inst_57780 = (state_57820[(7)]);
var inst_57808 = cljs.core.vec(inst_57780);
var state_57820__$1 = state_57820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57820__$1,(15),out,inst_57808);
} else {
if((state_val_57821 === (2))){
var state_57820__$1 = state_57820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57820__$1,(4),ch);
} else {
if((state_val_57821 === (11))){
var inst_57784 = (state_57820[(9)]);
var inst_57788 = (state_57820[(10)]);
var inst_57798 = (state_57820[(2)]);
var inst_57799 = [];
var inst_57800 = inst_57799.push(inst_57784);
var inst_57780 = inst_57799;
var inst_57781 = inst_57788;
var state_57820__$1 = (function (){var statearr_57832 = state_57820;
(statearr_57832[(11)] = inst_57800);

(statearr_57832[(7)] = inst_57780);

(statearr_57832[(12)] = inst_57798);

(statearr_57832[(8)] = inst_57781);

return statearr_57832;
})();
var statearr_57833_58773 = state_57820__$1;
(statearr_57833_58773[(2)] = null);

(statearr_57833_58773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (9))){
var inst_57780 = (state_57820[(7)]);
var inst_57796 = cljs.core.vec(inst_57780);
var state_57820__$1 = state_57820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57820__$1,(11),out,inst_57796);
} else {
if((state_val_57821 === (5))){
var inst_57784 = (state_57820[(9)]);
var inst_57788 = (state_57820[(10)]);
var inst_57781 = (state_57820[(8)]);
var inst_57788__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57784) : f.call(null,inst_57784));
var inst_57789 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57788__$1,inst_57781);
var inst_57790 = cljs.core.keyword_identical_QMARK_(inst_57781,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_57791 = ((inst_57789) || (inst_57790));
var state_57820__$1 = (function (){var statearr_57834 = state_57820;
(statearr_57834[(10)] = inst_57788__$1);

return statearr_57834;
})();
if(cljs.core.truth_(inst_57791)){
var statearr_57835_58778 = state_57820__$1;
(statearr_57835_58778[(1)] = (8));

} else {
var statearr_57836_58779 = state_57820__$1;
(statearr_57836_58779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (14))){
var inst_57813 = (state_57820[(2)]);
var inst_57814 = cljs.core.async.close_BANG_(out);
var state_57820__$1 = (function (){var statearr_57838 = state_57820;
(statearr_57838[(13)] = inst_57813);

return statearr_57838;
})();
var statearr_57839_58780 = state_57820__$1;
(statearr_57839_58780[(2)] = inst_57814);

(statearr_57839_58780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (10))){
var inst_57803 = (state_57820[(2)]);
var state_57820__$1 = state_57820;
var statearr_57840_58782 = state_57820__$1;
(statearr_57840_58782[(2)] = inst_57803);

(statearr_57840_58782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57821 === (8))){
var inst_57784 = (state_57820[(9)]);
var inst_57788 = (state_57820[(10)]);
var inst_57780 = (state_57820[(7)]);
var inst_57793 = inst_57780.push(inst_57784);
var tmp57837 = inst_57780;
var inst_57780__$1 = tmp57837;
var inst_57781 = inst_57788;
var state_57820__$1 = (function (){var statearr_57841 = state_57820;
(statearr_57841[(7)] = inst_57780__$1);

(statearr_57841[(8)] = inst_57781);

(statearr_57841[(14)] = inst_57793);

return statearr_57841;
})();
var statearr_57842_58785 = state_57820__$1;
(statearr_57842_58785[(2)] = null);

(statearr_57842_58785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55995__auto__ = null;
var cljs$core$async$state_machine__55995__auto____0 = (function (){
var statearr_57843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57843[(0)] = cljs$core$async$state_machine__55995__auto__);

(statearr_57843[(1)] = (1));

return statearr_57843;
});
var cljs$core$async$state_machine__55995__auto____1 = (function (state_57820){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_57820);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e57844){if((e57844 instanceof Object)){
var ex__55998__auto__ = e57844;
var statearr_57845_58792 = state_57820;
(statearr_57845_58792[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58797 = state_57820;
state_57820 = G__58797;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
cljs$core$async$state_machine__55995__auto__ = function(state_57820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55995__auto____1.call(this,state_57820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55995__auto____0;
cljs$core$async$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55995__auto____1;
return cljs$core$async$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_57846 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_57846[(6)] = c__56164__auto___58760);

return statearr_57846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
