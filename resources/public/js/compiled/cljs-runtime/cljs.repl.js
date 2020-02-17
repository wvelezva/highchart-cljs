goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56225){
var map__56226 = p__56225;
var map__56226__$1 = (((((!((map__56226 == null))))?(((((map__56226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56226):map__56226);
var m = map__56226__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56226__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56231_56356 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56232_56357 = null;
var count__56233_56358 = (0);
var i__56234_56359 = (0);
while(true){
if((i__56234_56359 < count__56233_56358)){
var f_56360 = chunk__56232_56357.cljs$core$IIndexed$_nth$arity$2(null,i__56234_56359);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56360], 0));


var G__56361 = seq__56231_56356;
var G__56362 = chunk__56232_56357;
var G__56363 = count__56233_56358;
var G__56364 = (i__56234_56359 + (1));
seq__56231_56356 = G__56361;
chunk__56232_56357 = G__56362;
count__56233_56358 = G__56363;
i__56234_56359 = G__56364;
continue;
} else {
var temp__5735__auto___56366 = cljs.core.seq(seq__56231_56356);
if(temp__5735__auto___56366){
var seq__56231_56367__$1 = temp__5735__auto___56366;
if(cljs.core.chunked_seq_QMARK_(seq__56231_56367__$1)){
var c__4609__auto___56368 = cljs.core.chunk_first(seq__56231_56367__$1);
var G__56370 = cljs.core.chunk_rest(seq__56231_56367__$1);
var G__56371 = c__4609__auto___56368;
var G__56372 = cljs.core.count(c__4609__auto___56368);
var G__56373 = (0);
seq__56231_56356 = G__56370;
chunk__56232_56357 = G__56371;
count__56233_56358 = G__56372;
i__56234_56359 = G__56373;
continue;
} else {
var f_56374 = cljs.core.first(seq__56231_56367__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56374], 0));


var G__56375 = cljs.core.next(seq__56231_56367__$1);
var G__56376 = null;
var G__56377 = (0);
var G__56378 = (0);
seq__56231_56356 = G__56375;
chunk__56232_56357 = G__56376;
count__56233_56358 = G__56377;
i__56234_56359 = G__56378;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56379 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56379], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56379)))?cljs.core.second(arglists_56379):arglists_56379)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56236_56380 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56237_56381 = null;
var count__56238_56382 = (0);
var i__56239_56383 = (0);
while(true){
if((i__56239_56383 < count__56238_56382)){
var vec__56252_56384 = chunk__56237_56381.cljs$core$IIndexed$_nth$arity$2(null,i__56239_56383);
var name_56385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56252_56384,(0),null);
var map__56255_56386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56252_56384,(1),null);
var map__56255_56387__$1 = (((((!((map__56255_56386 == null))))?(((((map__56255_56386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56255_56386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56255_56386):map__56255_56386);
var doc_56388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255_56387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255_56387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56389], 0));

if(cljs.core.truth_(doc_56388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56388], 0));
} else {
}


var G__56390 = seq__56236_56380;
var G__56391 = chunk__56237_56381;
var G__56392 = count__56238_56382;
var G__56393 = (i__56239_56383 + (1));
seq__56236_56380 = G__56390;
chunk__56237_56381 = G__56391;
count__56238_56382 = G__56392;
i__56239_56383 = G__56393;
continue;
} else {
var temp__5735__auto___56394 = cljs.core.seq(seq__56236_56380);
if(temp__5735__auto___56394){
var seq__56236_56395__$1 = temp__5735__auto___56394;
if(cljs.core.chunked_seq_QMARK_(seq__56236_56395__$1)){
var c__4609__auto___56396 = cljs.core.chunk_first(seq__56236_56395__$1);
var G__56397 = cljs.core.chunk_rest(seq__56236_56395__$1);
var G__56398 = c__4609__auto___56396;
var G__56399 = cljs.core.count(c__4609__auto___56396);
var G__56400 = (0);
seq__56236_56380 = G__56397;
chunk__56237_56381 = G__56398;
count__56238_56382 = G__56399;
i__56239_56383 = G__56400;
continue;
} else {
var vec__56259_56401 = cljs.core.first(seq__56236_56395__$1);
var name_56402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56259_56401,(0),null);
var map__56262_56403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56259_56401,(1),null);
var map__56262_56404__$1 = (((((!((map__56262_56403 == null))))?(((((map__56262_56403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56262_56403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56262_56403):map__56262_56403);
var doc_56405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56262_56404__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56262_56404__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56402], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56406], 0));

if(cljs.core.truth_(doc_56405)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56405], 0));
} else {
}


var G__56407 = cljs.core.next(seq__56236_56395__$1);
var G__56408 = null;
var G__56409 = (0);
var G__56410 = (0);
seq__56236_56380 = G__56407;
chunk__56237_56381 = G__56408;
count__56238_56382 = G__56409;
i__56239_56383 = G__56410;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56264 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56265 = null;
var count__56266 = (0);
var i__56267 = (0);
while(true){
if((i__56267 < count__56266)){
var role = chunk__56265.cljs$core$IIndexed$_nth$arity$2(null,i__56267);
var temp__5735__auto___56412__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56412__$1)){
var spec_56413 = temp__5735__auto___56412__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56413)], 0));
} else {
}


var G__56415 = seq__56264;
var G__56416 = chunk__56265;
var G__56417 = count__56266;
var G__56418 = (i__56267 + (1));
seq__56264 = G__56415;
chunk__56265 = G__56416;
count__56266 = G__56417;
i__56267 = G__56418;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56264);
if(temp__5735__auto____$1){
var seq__56264__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56264__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56264__$1);
var G__56419 = cljs.core.chunk_rest(seq__56264__$1);
var G__56420 = c__4609__auto__;
var G__56421 = cljs.core.count(c__4609__auto__);
var G__56422 = (0);
seq__56264 = G__56419;
chunk__56265 = G__56420;
count__56266 = G__56421;
i__56267 = G__56422;
continue;
} else {
var role = cljs.core.first(seq__56264__$1);
var temp__5735__auto___56423__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56423__$2)){
var spec_56424 = temp__5735__auto___56423__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56424)], 0));
} else {
}


var G__56425 = cljs.core.next(seq__56264__$1);
var G__56426 = null;
var G__56427 = (0);
var G__56428 = (0);
seq__56264 = G__56425;
chunk__56265 = G__56426;
count__56266 = G__56427;
i__56267 = G__56428;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__56429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56430 = cljs.core.ex_cause(t);
via = G__56429;
t = G__56430;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56274 = datafied_throwable;
var map__56274__$1 = (((((!((map__56274 == null))))?(((((map__56274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56274):map__56274);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56274__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56275 = cljs.core.last(via);
var map__56275__$1 = (((((!((map__56275 == null))))?(((((map__56275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56275):map__56275);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56275__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56275__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56275__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56276 = data;
var map__56276__$1 = (((((!((map__56276 == null))))?(((((map__56276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56276):map__56276);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56277 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56277__$1 = (((((!((map__56277 == null))))?(((((map__56277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56277):map__56277);
var top_data = map__56277__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56285 = phase;
var G__56285__$1 = (((G__56285 instanceof cljs.core.Keyword))?G__56285.fqn:null);
switch (G__56285__$1) {
case "read-source":
var map__56286 = data;
var map__56286__$1 = (((((!((map__56286 == null))))?(((((map__56286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56286):map__56286);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56286__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56286__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56288 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56288__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56288,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56288);
var G__56288__$2 = (cljs.core.truth_((function (){var fexpr__56289 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56289.cljs$core$IFn$_invoke$arity$1 ? fexpr__56289.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56289.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56288__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56288__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56288__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56288__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56290 = top_data;
var G__56290__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56290,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56290);
var G__56290__$2 = (cljs.core.truth_((function (){var fexpr__56291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56291.cljs$core$IFn$_invoke$arity$1 ? fexpr__56291.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56291.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56290__$1);
var G__56290__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56290__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56290__$2);
var G__56290__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56290__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56290__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56290__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56290__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56292 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56292,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56292,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56292,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56292,(3),null);
var G__56295 = top_data;
var G__56295__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56295,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56295);
var G__56295__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56295__$1);
var G__56295__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56295__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56295__$2);
var G__56295__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56295__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56295__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56295__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56295__$4;
}

break;
case "execution":
var vec__56299 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56299,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56299,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56299,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56299,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56273_SHARP_){
var or__4185__auto__ = (p1__56273_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__56303 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56303.cljs$core$IFn$_invoke$arity$1 ? fexpr__56303.cljs$core$IFn$_invoke$arity$1(p1__56273_SHARP_) : fexpr__56303.call(null,p1__56273_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__56304 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56304__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56304,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56304);
var G__56304__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56304__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56304__$1);
var G__56304__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56304__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56304__$2);
var G__56304__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56304__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56304__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56304__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56304__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56285__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56307){
var map__56308 = p__56307;
var map__56308__$1 = (((((!((map__56308 == null))))?(((((map__56308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56308):map__56308);
var triage_data = map__56308__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56312 = phase;
var G__56312__$1 = (((G__56312 instanceof cljs.core.Keyword))?G__56312.fqn:null);
switch (G__56312__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56315 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56317 = loc;
var G__56318 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56319_56456 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56320_56457 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56321_56458 = true;
var _STAR_print_fn_STAR__temp_val__56322_56459 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56321_56458);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56322_56459);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56305_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56305_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56320_56457);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56319_56456);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56315,G__56316,G__56317,G__56318) : format.call(null,G__56315,G__56316,G__56317,G__56318));

break;
case "macroexpansion":
var G__56323 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56324 = cause_type;
var G__56325 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56326 = loc;
var G__56327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56323,G__56324,G__56325,G__56326,G__56327) : format.call(null,G__56323,G__56324,G__56325,G__56326,G__56327));

break;
case "compile-syntax-check":
var G__56328 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56329 = cause_type;
var G__56330 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56331 = loc;
var G__56332 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56328,G__56329,G__56330,G__56331,G__56332) : format.call(null,G__56328,G__56329,G__56330,G__56331,G__56332));

break;
case "compilation":
var G__56333 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56334 = cause_type;
var G__56335 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56336 = loc;
var G__56337 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56333,G__56334,G__56335,G__56336,G__56337) : format.call(null,G__56333,G__56334,G__56335,G__56336,G__56337));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56340 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56341 = symbol;
var G__56342 = loc;
var G__56343 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56344_56462 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56345_56463 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56346_56464 = true;
var _STAR_print_fn_STAR__temp_val__56347_56465 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56346_56464);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56347_56465);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56306_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56306_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56345_56463);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56344_56462);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56340,G__56341,G__56342,G__56343) : format.call(null,G__56340,G__56341,G__56342,G__56343));
} else {
var G__56351 = "Execution error%s at %s(%s).\n%s\n";
var G__56352 = cause_type;
var G__56353 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56354 = loc;
var G__56355 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56351,G__56352,G__56353,G__56354,G__56355) : format.call(null,G__56351,G__56352,G__56353,G__56354,G__56355));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56312__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
