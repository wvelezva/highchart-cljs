goog.provide('mranderson048.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson048.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
mranderson048.garden.v1v3v3.garden.util.format = (function mranderson048$garden$v1v3v3$garden$util$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43610 = arguments.length;
var i__4790__auto___43611 = (0);
while(true){
if((i__4790__auto___43611 < len__4789__auto___43610)){
args__4795__auto__.push((arguments[i__4790__auto___43611]));

var G__43612 = (i__4790__auto___43611 + (1));
i__4790__auto___43611 = G__43612;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq43476){
var G__43477 = cljs.core.first(seq43476);
var seq43476__$1 = cljs.core.next(seq43476);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43477,seq43476__$1);
}));


/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
mranderson048.garden.v1v3v3.garden.util.to_str = (function mranderson048$garden$v1v3v3$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (mranderson048.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (mranderson048.garden.v1v3v3.garden.util.to_str["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

(cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

goog.object.set(mranderson048.garden.v1v3v3.garden.util.ToString,"_",true);

var G__43497_43618 = mranderson048.garden.v1v3v3.garden.util.to_str;
var G__43498_43619 = "_";
var G__43499_43620 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__43497_43618,G__43498_43619,G__43499_43620);

goog.object.set(mranderson048.garden.v1v3v3.garden.util.ToString,"null",true);

var G__43508_43623 = mranderson048.garden.v1v3v3.garden.util.to_str;
var G__43509_43624 = "null";
var G__43510_43625 = (function (this$){
return "";
});
goog.object.set(G__43508_43623,G__43509_43624,G__43510_43625);
/**
 * Convert a variable number of values into strings.
 */
mranderson048.garden.v1v3v3.garden.util.as_str = (function mranderson048$garden$v1v3v3$garden$util$as_str(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43628 = arguments.length;
var i__4790__auto___43629 = (0);
while(true){
if((i__4790__auto___43629 < len__4789__auto___43628)){
args__4795__auto__.push((arguments[i__4790__auto___43629]));

var G__43630 = (i__4790__auto___43629 + (1));
i__4790__auto___43629 = G__43630;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.util.to_str,args));
}));

(mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq43511){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43511));
}));

/**
 * Convert a string to an integer with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.string__GT_int = (function mranderson048$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43631 = arguments.length;
var i__4790__auto___43632 = (0);
while(true){
if((i__4790__auto___43632 < len__4789__auto___43631)){
args__4795__auto__.push((arguments[i__4790__auto___43632]));

var G__43634 = (i__4790__auto___43632 + (1));
i__4790__auto___43632 = G__43634;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__43531){
var vec__43534 = p__43531;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43534,(0),null);
var radix__$1 = (function (){var or__4185__auto__ = radix;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq43523){
var G__43524 = cljs.core.first(seq43523);
var seq43523__$1 = cljs.core.next(seq43523);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43524,seq43523__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.int__GT_string = (function mranderson048$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43638 = arguments.length;
var i__4790__auto___43639 = (0);
while(true){
if((i__4790__auto___43639 < len__4789__auto___43638)){
args__4795__auto__.push((arguments[i__4790__auto___43639]));

var G__43642 = (i__4790__auto___43639 + (1));
i__4790__auto___43639 = G__43642;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__43559){
var vec__43560 = p__43559;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43560,(0),null);
var radix__$1 = (function (){var or__4185__auto__ = radix;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq43551){
var G__43552 = cljs.core.first(seq43551);
var seq43551__$1 = cljs.core.next(seq43551);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43552,seq43551__$1);
}));

/**
 * Return a space separated list of values.
 */
mranderson048.garden.v1v3v3.garden.util.space_join = (function mranderson048$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson048.garden.v1v3v3.garden.util.comma_join = (function mranderson048$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4582__auto__ = (function mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__43568(s__43569){
return (new cljs.core.LazySeq(null,(function (){
var s__43569__$1 = s__43569;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43569__$1);
if(temp__5735__auto__){
var s__43569__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43569__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43569__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43571 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43570 = (0);
while(true){
if((i__43570 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43570);
cljs.core.chunk_append(b__43571,((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.util.space_join(x):mranderson048.garden.v1v3v3.garden.util.to_str(x)));

var G__43652 = (i__43570 + (1));
i__43570 = G__43652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43571),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__43568(cljs.core.chunk_rest(s__43569__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43571),null);
}
} else {
var x = cljs.core.first(s__43569__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.util.space_join(x):mranderson048.garden.v1v3v3.garden.util.to_str(x)),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__43568(cljs.core.rest(s__43569__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson048.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson048$garden$v1v3v3$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
mranderson048.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson048.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_media_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_import_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.prefix = (function mranderson048$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson048$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return mranderson048.garden.v1v3v3.garden.util.prefix(p__$1,s);
} else {
return mranderson048.garden.v1v3v3.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson048.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
mranderson048.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4276__auto__ = a;
var y__4277__auto__ = b;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var top = (function (){var x__4273__auto__ = a;
var y__4274__auto__ = b;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson048.garden.v1v3v3.garden.util.clip = (function mranderson048$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__43587 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43587,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43587,(1),null);
var x__4273__auto__ = a__$1;
var y__4274__auto__ = (function (){var x__4276__auto__ = b__$1;
var y__4277__auto__ = n;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson048.garden.v1v3v3.garden.util.average = (function mranderson048$garden$v1v3v3$garden$util$average(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43673 = arguments.length;
var i__4790__auto___43674 = (0);
while(true){
if((i__4790__auto___43674 < len__4789__auto___43673)){
args__4795__auto__.push((arguments[i__4790__auto___43674]));

var G__43675 = (i__4790__auto___43674 + (1));
i__4790__auto___43674 = G__43675;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq43590){
var G__43591 = cljs.core.first(seq43590);
var seq43590__$1 = cljs.core.next(seq43590);
var G__43592 = cljs.core.first(seq43590__$1);
var seq43590__$2 = cljs.core.next(seq43590__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43591,G__43592,seq43590__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
mranderson048.garden.v1v3v3.garden.util.cartesian_product = (function mranderson048$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43681 = arguments.length;
var i__4790__auto___43682 = (0);
while(true){
if((i__4790__auto___43682 < len__4789__auto___43681)){
args__4795__auto__.push((arguments[i__4790__auto___43682]));

var G__43683 = (i__4790__auto___43682 + (1));
i__4790__auto___43682 = G__43683;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function mranderson048$garden$v1v3v3$garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__43693 = (i - (1));
var G__43694 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__43693;
v_seqs__$2 = G__43694;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return mranderson048$garden$v1v3v3$garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq43594){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43594));
}));


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.util.js.map
