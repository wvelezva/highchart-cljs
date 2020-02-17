goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,cljs.core.next(sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__50158 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50158) : zthing_QMARK_.call(null,G__50158));
})())){
return i;
} else {
var G__50425 = cljs.core.next(sloc);
var G__50426 = (i + (1));
sloc = G__50425;
i = G__50426;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__50197 = arguments.length;
switch (G__50197) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__50255 = cljs.core.first(pair_seq__$1);
var seq__50256 = cljs.core.seq(vec__50255);
var first__50257 = cljs.core.first(seq__50256);
var seq__50256__$1 = cljs.core.next(seq__50256);
var k = first__50257;
var rest_of_pair = seq__50256__$1;
var pair = vec__50255;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,current_ns)){
var G__50452 = ns;
var G__50453 = cljs.core.next(pair_seq__$1);
var G__50454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__50452;
pair_seq__$1 = G__50453;
out = G__50454;
continue;
} else {
return null;
}
} else {
var G__50455 = current_ns;
var G__50456 = cljs.core.next(pair_seq__$1);
var G__50457 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__50455;
pair_seq__$1 = G__50456;
out = G__50457;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__50459 = ns;
var G__50460 = cljs.core.next(pair_seq__$1);
var G__50461 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__50459;
pair_seq__$1 = G__50460;
out = G__50461;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__50266 = zprint.zfns.zstring;
var znumstr_orig_val__50267 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__50268 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__50269 = zprint.zfns.zsexpr;
var zseqnws_orig_val__50270 = zprint.zfns.zseqnws;
var zmap_right_orig_val__50272 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__50273 = zprint.zfns.zfocus_style;
var zfirst_orig_val__50275 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__50278 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__50280 = zprint.zfns.zsecond;
var zthird_orig_val__50281 = zprint.zfns.zthird;
var zfourth_orig_val__50282 = zprint.zfns.zfourth;
var znthnext_orig_val__50283 = zprint.zfns.znthnext;
var zcount_orig_val__50284 = zprint.zfns.zcount;
var zmap_orig_val__50285 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__50286 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__50287 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__50288 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__50289 = zprint.zfns.zfocus;
var zfind_path_orig_val__50290 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__50291 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__50293 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__50294 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__50295 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__50296 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__50297 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__50298 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__50299 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__50300 = zprint.zfns.ztag;
var zlast_orig_val__50301 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__50302 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__50303 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__50304 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__50305 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__50306 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__50307 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__50308 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__50309 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__50310 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__50311 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__50312 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__50313 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__50314 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__50315 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__50316 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__50317 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__50318 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__50319 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__50320 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__50321 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__50322 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__50323 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__50324 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__50325 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__50326 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__50327 = zprint.zfns.zfind;
var ztake_append_orig_val__50328 = zprint.zfns.ztake_append;
var zstring_temp_val__50329 = zprint.sutil.sstring;
var znumstr_temp_val__50330 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__50331 = cljs.core.constantly(false);
var zsexpr_temp_val__50332 = cljs.core.identity;
var zseqnws_temp_val__50333 = zprint.sutil.sseqnws;
var zmap_right_temp_val__50334 = zprint.sutil.smap_right;
var zfocus_style_temp_val__50335 = zprint.sutil.sfocus_style;
var zfirst_temp_val__50336 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__50337 = zprint.sutil.sfirst;
var zsecond_temp_val__50338 = zprint.sutil.ssecond;
var zthird_temp_val__50339 = zprint.sutil.sthird;
var zfourth_temp_val__50340 = zprint.sutil.sfourth;
var znthnext_temp_val__50341 = zprint.sutil.snthnext;
var zcount_temp_val__50342 = zprint.sutil.scount;
var zmap_temp_val__50343 = zprint.sutil.smap;
var zmap_w_nl_temp_val__50344 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__50345 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__50346 = cljs.core.fn_QMARK_;
var zfocus_temp_val__50347 = zprint.sutil.sfocus;
var zfind_path_temp_val__50348 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__50349 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__50350 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__50351 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__50352 = cljs.core.map_QMARK_;
var zset_QMARK__temp_val__50353 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__50354 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__50355 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__50356 = cljs.core.constantly(false);
var ztag_temp_val__50357 = cljs.core.constantly(null);
var zlast_temp_val__50358 = zprint.sutil.slast;
var zarray_QMARK__temp_val__50359 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__50360 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__50361 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__50362 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__50363 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__50364 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__50365 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__50366 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__50367 = cljs.core.constantly(false);
var zmap_all_temp_val__50368 = cljs.core.map;
var zfuture_QMARK__temp_val__50369 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__50370 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__50371 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__50372 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__50373 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__50374 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__50375 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__50376 = null;
var zdotdotdot_temp_val__50377 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__50378 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__50379 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__50380 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__50381 = cljs.core.constantly(false);
var zlift_ns_temp_val__50382 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__50383 = cljs.core.constantly(false);
var zfind_temp_val__50384 = zprint.sutil.sfind;
var ztake_append_temp_val__50385 = zprint.sutil.stake_append;
(zprint.zfns.zstring = zstring_temp_val__50329);

(zprint.zfns.znumstr = znumstr_temp_val__50330);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__50331);

(zprint.zfns.zsexpr = zsexpr_temp_val__50332);

(zprint.zfns.zseqnws = zseqnws_temp_val__50333);

(zprint.zfns.zmap_right = zmap_right_temp_val__50334);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__50335);

(zprint.zfns.zfirst = zfirst_temp_val__50336);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__50337);

(zprint.zfns.zsecond = zsecond_temp_val__50338);

(zprint.zfns.zthird = zthird_temp_val__50339);

(zprint.zfns.zfourth = zfourth_temp_val__50340);

(zprint.zfns.znthnext = znthnext_temp_val__50341);

(zprint.zfns.zcount = zcount_temp_val__50342);

(zprint.zfns.zmap = zmap_temp_val__50343);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__50344);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__50345);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__50346);

(zprint.zfns.zfocus = zfocus_temp_val__50347);

(zprint.zfns.zfind_path = zfind_path_temp_val__50348);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__50349);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__50350);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__50351);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__50352);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__50353);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__50354);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__50355);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__50356);

(zprint.zfns.ztag = ztag_temp_val__50357);

(zprint.zfns.zlast = zlast_temp_val__50358);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__50359);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__50360);

(zprint.zfns.zderef = zderef_temp_val__50361);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__50362);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__50363);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__50364);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__50365);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__50366);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__50367);

(zprint.zfns.zmap_all = zmap_all_temp_val__50368);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__50369);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__50370);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__50371);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__50372);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__50373);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__50374);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__50375);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__50376);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__50377);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__50378);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__50379);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__50380);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__50381);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__50382);

(zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__50383);

(zprint.zfns.zfind = zfind_temp_val__50384);

(zprint.zfns.ztake_append = ztake_append_temp_val__50385);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__50328);

(zprint.zfns.zfind = zfind_orig_val__50327);

(zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__50326);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__50325);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__50324);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__50323);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__50322);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__50321);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__50320);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__50319);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__50318);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__50317);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__50316);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__50315);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__50314);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__50313);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__50312);

(zprint.zfns.zmap_all = zmap_all_orig_val__50311);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__50310);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__50309);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__50308);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__50307);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__50306);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__50305);

(zprint.zfns.zderef = zderef_orig_val__50304);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__50303);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__50302);

(zprint.zfns.zlast = zlast_orig_val__50301);

(zprint.zfns.ztag = ztag_orig_val__50300);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__50299);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__50298);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__50297);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__50296);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__50295);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__50294);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__50293);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__50291);

(zprint.zfns.zfind_path = zfind_path_orig_val__50290);

(zprint.zfns.zfocus = zfocus_orig_val__50289);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__50288);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__50287);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__50286);

(zprint.zfns.zmap = zmap_orig_val__50285);

(zprint.zfns.zcount = zcount_orig_val__50284);

(zprint.zfns.znthnext = znthnext_orig_val__50283);

(zprint.zfns.zfourth = zfourth_orig_val__50282);

(zprint.zfns.zthird = zthird_orig_val__50281);

(zprint.zfns.zsecond = zsecond_orig_val__50280);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__50278);

(zprint.zfns.zfirst = zfirst_orig_val__50275);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__50273);

(zprint.zfns.zmap_right = zmap_right_orig_val__50272);

(zprint.zfns.zseqnws = zseqnws_orig_val__50270);

(zprint.zfns.zsexpr = zsexpr_orig_val__50269);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__50268);

(zprint.zfns.znumstr = znumstr_orig_val__50267);

(zprint.zfns.zstring = zstring_orig_val__50266);
}});

//# sourceMappingURL=zprint.sutil.js.map
