goog.provide('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__46083__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__46083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46084__i = 0, G__46084__a = new Array(arguments.length -  0);
while (G__46084__i < G__46084__a.length) {G__46084__a[G__46084__i] = arguments[G__46084__i + 0]; ++G__46084__i;}
  args = new cljs.core.IndexedSeq(G__46084__a,0,null);
} 
return G__46083__delegate.call(this,args);};
G__46083.cljs$lang$maxFixedArity = 0;
G__46083.cljs$lang$applyTo = (function (arglist__46085){
var args = cljs.core.seq(arglist__46085);
return G__46083__delegate(args);
});
G__46083.cljs$core$IFn$_invoke$arity$variadic = G__46083__delegate;
return G__46083;
})()
);

(o.error = (function() { 
var G__46086__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__46086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46087__i = 0, G__46087__a = new Array(arguments.length -  0);
while (G__46087__i < G__46087__a.length) {G__46087__a[G__46087__i] = arguments[G__46087__i + 0]; ++G__46087__i;}
  args = new cljs.core.IndexedSeq(G__46087__a,0,null);
} 
return G__46086__delegate.call(this,args);};
G__46086.cljs$lang$maxFixedArity = 0;
G__46086.cljs$lang$applyTo = (function (arglist__46088){
var args = cljs.core.seq(arglist__46088);
return G__46086__delegate(args);
});
G__46086.cljs$core$IFn$_invoke$arity$variadic = G__46086__delegate;
return G__46086;
})()
);

return o;
})();
}
mranderson048.reagent.v0v8v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v8v0$reagent$debug$track_warnings(f){
(mranderson048.reagent.v0v8v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

(mranderson048.reagent.v0v8v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.debug.js.map
