goog.provide('mranderson048.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson048.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson048.garden.v1v3v3.garden.core.css = (function mranderson048$garden$v1v3v3$garden$core$css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47243 = arguments.length;
var i__4790__auto___47245 = (0);
while(true){
if((i__4790__auto___47245 < len__4789__auto___47243)){
args__4795__auto__.push((arguments[i__4790__auto___47245]));

var G__47246 = (i__4790__auto___47245 + (1));
i__4790__auto___47245 = G__47246;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.compile_css,rules);
}));

(mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq47240){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47240));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson048.garden.v1v3v3.garden.core.style = (function mranderson048$garden$v1v3v3$garden$core$style(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47247 = arguments.length;
var i__4790__auto___47248 = (0);
while(true){
if((i__4790__auto___47248 < len__4789__auto___47247)){
args__4795__auto__.push((arguments[i__4790__auto___47248]));

var G__47249 = (i__4790__auto___47248 + (1));
i__4790__auto___47248 = G__47249;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson048.garden.v1v3v3.garden.compiler.compile_style(maps);
}));

(mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq47242){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47242));
}));


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.core.js.map
