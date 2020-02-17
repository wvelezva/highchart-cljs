goog.provide('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, mranderson048.re-frame.v0v10v6.re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
mranderson048.re_frame.v0v10v6.re_frame.loggers.loggers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
mranderson048.re_frame.v0v10v6.re_frame.loggers.console = (function mranderson048$re_frame$v0v10v6$re_frame$loggers$console(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47277 = arguments.length;
var i__4790__auto___47278 = (0);
while(true){
if((i__4790__auto___47278 < len__4789__auto___47277)){
args__4795__auto__.push((arguments[i__4790__auto___47278]));

var G__47280 = (i__4790__auto___47278 + (1));
i__4790__auto___47278 = G__47280;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.loggers.loggers),level)){
} else {
throw (new Error(["Assert failed: ",["re-frame: log called with unknown level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''),"\n","(contains? (clojure.core/deref loggers) level)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__47262 = cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.loggers.loggers);
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__47262) : level.call(null,G__47262));
})(),args);
}));

(mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$lang$applyTo = (function (seq47257){
var G__47258 = cljs.core.first(seq47257);
var seq47257__$1 = cljs.core.next(seq47257);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47258,seq47257__$1);
}));

/**
 * Change the set (or a subset) of logging functions used by mranderson048.re-frame.v0v10v6.re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
mranderson048.re_frame.v0v10v6.re_frame.loggers.set_loggers_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.loggers.loggers)))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by mranderson048.re-frame.v0v10v6.re-frame.
 */
mranderson048.re_frame.v0v10v6.re_frame.loggers.get_loggers = (function mranderson048$re_frame$v0v10v6$re_frame$loggers$get_loggers(){
return cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.loggers.loggers);
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.loggers.js.map
