goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__52922 = arguments.length;
switch (G__52922) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__52925 = cljs.core.seq(Object.keys(localStorage));
var chunk__52926 = null;
var count__52927 = (0);
var i__52928 = (0);
while(true){
if((i__52928 < count__52927)){
var k = chunk__52926.cljs$core$IIndexed$_nth$arity$2(null,i__52928);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52935 = seq__52925;
var G__52936 = chunk__52926;
var G__52937 = count__52927;
var G__52938 = (i__52928 + (1));
seq__52925 = G__52935;
chunk__52926 = G__52936;
count__52927 = G__52937;
i__52928 = G__52938;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52925);
if(temp__5735__auto__){
var seq__52925__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52925__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52925__$1);
var G__52939 = cljs.core.chunk_rest(seq__52925__$1);
var G__52940 = c__4609__auto__;
var G__52941 = cljs.core.count(c__4609__auto__);
var G__52942 = (0);
seq__52925 = G__52939;
chunk__52926 = G__52940;
count__52927 = G__52941;
i__52928 = G__52942;
continue;
} else {
var k = cljs.core.first(seq__52925__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52943 = cljs.core.next(seq__52925__$1);
var G__52944 = null;
var G__52945 = (0);
var G__52946 = (0);
seq__52925 = G__52943;
chunk__52926 = G__52944;
count__52927 = G__52945;
i__52928 = G__52946;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
