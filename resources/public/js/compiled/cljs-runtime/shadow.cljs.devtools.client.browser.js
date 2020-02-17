goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60092 = arguments.length;
var i__4790__auto___60093 = (0);
while(true){
if((i__4790__auto___60093 < len__4789__auto___60092)){
args__4795__auto__.push((arguments[i__4790__auto___60093]));

var G__60094 = (i__4790__auto___60093 + (1));
i__4790__auto___60093 = G__60094;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59913){
var G__59914 = cljs.core.first(seq59913);
var seq59913__$1 = cljs.core.next(seq59913);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59914,seq59913__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59929){
var map__59933 = p__59929;
var map__59933__$1 = (((((!((map__59933 == null))))?(((((map__59933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59933):map__59933);
var src = map__59933__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59933__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59933__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__59938 = cljs.core.seq(sources);
var chunk__59939 = null;
var count__59940 = (0);
var i__59941 = (0);
while(true){
if((i__59941 < count__59940)){
var map__59950 = chunk__59939.cljs$core$IIndexed$_nth$arity$2(null,i__59941);
var map__59950__$1 = (((((!((map__59950 == null))))?(((((map__59950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59950):map__59950);
var src = map__59950__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59952){var e_60095 = e59952;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60095);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60095.message)].join('')));
}

var G__60096 = seq__59938;
var G__60097 = chunk__59939;
var G__60098 = count__59940;
var G__60099 = (i__59941 + (1));
seq__59938 = G__60096;
chunk__59939 = G__60097;
count__59940 = G__60098;
i__59941 = G__60099;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59938);
if(temp__5735__auto__){
var seq__59938__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59938__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59938__$1);
var G__60100 = cljs.core.chunk_rest(seq__59938__$1);
var G__60101 = c__4609__auto__;
var G__60102 = cljs.core.count(c__4609__auto__);
var G__60103 = (0);
seq__59938 = G__60100;
chunk__59939 = G__60101;
count__59940 = G__60102;
i__59941 = G__60103;
continue;
} else {
var map__59953 = cljs.core.first(seq__59938__$1);
var map__59953__$1 = (((((!((map__59953 == null))))?(((((map__59953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59953):map__59953);
var src = map__59953__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59953__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59953__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59953__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59953__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59955){var e_60104 = e59955;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60104);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60104.message)].join('')));
}

var G__60105 = cljs.core.next(seq__59938__$1);
var G__60106 = null;
var G__60107 = (0);
var G__60108 = (0);
seq__59938 = G__60105;
chunk__59939 = G__60106;
count__59940 = G__60107;
i__59941 = G__60108;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__59958 = cljs.core.seq(js_requires);
var chunk__59959 = null;
var count__59960 = (0);
var i__59961 = (0);
while(true){
if((i__59961 < count__59960)){
var js_ns = chunk__59959.cljs$core$IIndexed$_nth$arity$2(null,i__59961);
var require_str_60109 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60109);


var G__60110 = seq__59958;
var G__60111 = chunk__59959;
var G__60112 = count__59960;
var G__60113 = (i__59961 + (1));
seq__59958 = G__60110;
chunk__59959 = G__60111;
count__59960 = G__60112;
i__59961 = G__60113;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59958);
if(temp__5735__auto__){
var seq__59958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59958__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59958__$1);
var G__60114 = cljs.core.chunk_rest(seq__59958__$1);
var G__60115 = c__4609__auto__;
var G__60116 = cljs.core.count(c__4609__auto__);
var G__60117 = (0);
seq__59958 = G__60114;
chunk__59959 = G__60115;
count__59960 = G__60116;
i__59961 = G__60117;
continue;
} else {
var js_ns = cljs.core.first(seq__59958__$1);
var require_str_60118 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60118);


var G__60119 = cljs.core.next(seq__59958__$1);
var G__60120 = null;
var G__60121 = (0);
var G__60122 = (0);
seq__59958 = G__60119;
chunk__59959 = G__60120;
count__59960 = G__60121;
i__59961 = G__60122;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__59964 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59964) : callback.call(null,G__59964));
} else {
var G__59965 = shadow.cljs.devtools.client.env.files_url();
var G__59966 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59967 = "POST";
var G__59968 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59969 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59965,G__59966,G__59967,G__59968,G__59969);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59971){
var map__59972 = p__59971;
var map__59972__$1 = (((((!((map__59972 == null))))?(((((map__59972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59972):map__59972);
var msg = map__59972__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59974 = info;
var map__59974__$1 = (((((!((map__59974 == null))))?(((((map__59974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59974):map__59974);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59974__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59974__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59976(s__59977){
return (new cljs.core.LazySeq(null,(function (){
var s__59977__$1 = s__59977;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59977__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59982 = cljs.core.first(xs__6292__auto__);
var map__59982__$1 = (((((!((map__59982 == null))))?(((((map__59982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59982):map__59982);
var src = map__59982__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59982__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59977__$1,map__59982,map__59982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59974,map__59974__$1,sources,compiled,map__59972,map__59972__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59976_$_iter__59978(s__59979){
return (new cljs.core.LazySeq(null,((function (s__59977__$1,map__59982,map__59982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59974,map__59974__$1,sources,compiled,map__59972,map__59972__$1,msg,info,reload_info){
return (function (){
var s__59979__$1 = s__59979;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59979__$1);
if(temp__5735__auto____$1){
var s__59979__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59979__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59979__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59981 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59980 = (0);
while(true){
if((i__59980 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59980);
cljs.core.chunk_append(b__59981,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60123 = (i__59980 + (1));
i__59980 = G__60123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59981),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59976_$_iter__59978(cljs.core.chunk_rest(s__59979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59981),null);
}
} else {
var warning = cljs.core.first(s__59979__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59976_$_iter__59978(cljs.core.rest(s__59979__$2)));
}
} else {
return null;
}
break;
}
});})(s__59977__$1,map__59982,map__59982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59974,map__59974__$1,sources,compiled,map__59972,map__59972__$1,msg,info,reload_info))
,null,null));
});})(s__59977__$1,map__59982,map__59982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59974,map__59974__$1,sources,compiled,map__59972,map__59972__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59976(cljs.core.rest(s__59977__$1)));
} else {
var G__60124 = cljs.core.rest(s__59977__$1);
s__59977__$1 = G__60124;
continue;
}
} else {
var G__60125 = cljs.core.rest(s__59977__$1);
s__59977__$1 = G__60125;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__59984_60126 = cljs.core.seq(warnings);
var chunk__59985_60127 = null;
var count__59986_60128 = (0);
var i__59987_60129 = (0);
while(true){
if((i__59987_60129 < count__59986_60128)){
var map__59992_60130 = chunk__59985_60127.cljs$core$IIndexed$_nth$arity$2(null,i__59987_60129);
var map__59992_60131__$1 = (((((!((map__59992_60130 == null))))?(((((map__59992_60130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59992_60130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59992_60130):map__59992_60130);
var w_60132 = map__59992_60131__$1;
var msg_60133__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59992_60131__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59992_60131__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59992_60131__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59992_60131__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60136)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60134),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60135),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60133__$1)].join(''));


var G__60137 = seq__59984_60126;
var G__60138 = chunk__59985_60127;
var G__60139 = count__59986_60128;
var G__60140 = (i__59987_60129 + (1));
seq__59984_60126 = G__60137;
chunk__59985_60127 = G__60138;
count__59986_60128 = G__60139;
i__59987_60129 = G__60140;
continue;
} else {
var temp__5735__auto___60141 = cljs.core.seq(seq__59984_60126);
if(temp__5735__auto___60141){
var seq__59984_60142__$1 = temp__5735__auto___60141;
if(cljs.core.chunked_seq_QMARK_(seq__59984_60142__$1)){
var c__4609__auto___60143 = cljs.core.chunk_first(seq__59984_60142__$1);
var G__60144 = cljs.core.chunk_rest(seq__59984_60142__$1);
var G__60145 = c__4609__auto___60143;
var G__60146 = cljs.core.count(c__4609__auto___60143);
var G__60147 = (0);
seq__59984_60126 = G__60144;
chunk__59985_60127 = G__60145;
count__59986_60128 = G__60146;
i__59987_60129 = G__60147;
continue;
} else {
var map__59994_60148 = cljs.core.first(seq__59984_60142__$1);
var map__59994_60149__$1 = (((((!((map__59994_60148 == null))))?(((((map__59994_60148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59994_60148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59994_60148):map__59994_60148);
var w_60150 = map__59994_60149__$1;
var msg_60151__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994_60149__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994_60149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994_60149__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994_60149__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60154)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60152),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60153),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60151__$1)].join(''));


var G__60155 = cljs.core.next(seq__59984_60142__$1);
var G__60156 = null;
var G__60157 = (0);
var G__60158 = (0);
seq__59984_60126 = G__60155;
chunk__59985_60127 = G__60156;
count__59986_60128 = G__60157;
i__59987_60129 = G__60158;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59997){
var map__59998 = p__59997;
var map__59998__$1 = (((((!((map__59998 == null))))?(((((map__59998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59998):map__59998);
var src = map__59998__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60001){
var map__60002 = p__60001;
var map__60002__$1 = (((((!((map__60002 == null))))?(((((map__60002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60002):map__60002);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60002__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60004){
var map__60005 = p__60004;
var map__60005__$1 = (((((!((map__60005 == null))))?(((((map__60005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60005):map__60005);
var rc = map__60005__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60005__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59970_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59970_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__60007){
var map__60008 = p__60007;
var map__60008__$1 = (((((!((map__60008 == null))))?(((((map__60008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60008):map__60008);
var msg = map__60008__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60008__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60010 = cljs.core.seq(updates);
var chunk__60012 = null;
var count__60013 = (0);
var i__60014 = (0);
while(true){
if((i__60014 < count__60013)){
var path = chunk__60012.cljs$core$IIndexed$_nth$arity$2(null,i__60014);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60040_60159 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60043_60160 = null;
var count__60044_60161 = (0);
var i__60045_60162 = (0);
while(true){
if((i__60045_60162 < count__60044_60161)){
var node_60163 = chunk__60043_60160.cljs$core$IIndexed$_nth$arity$2(null,i__60045_60162);
var path_match_60164 = shadow.cljs.devtools.client.browser.match_paths(node_60163.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60164)){
var new_link_60165 = (function (){var G__60050 = node_60163.cloneNode(true);
G__60050.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60164),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60050;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60164], 0));

goog.dom.insertSiblingAfter(new_link_60165,node_60163);

goog.dom.removeNode(node_60163);


var G__60166 = seq__60040_60159;
var G__60167 = chunk__60043_60160;
var G__60168 = count__60044_60161;
var G__60169 = (i__60045_60162 + (1));
seq__60040_60159 = G__60166;
chunk__60043_60160 = G__60167;
count__60044_60161 = G__60168;
i__60045_60162 = G__60169;
continue;
} else {
var G__60170 = seq__60040_60159;
var G__60171 = chunk__60043_60160;
var G__60172 = count__60044_60161;
var G__60173 = (i__60045_60162 + (1));
seq__60040_60159 = G__60170;
chunk__60043_60160 = G__60171;
count__60044_60161 = G__60172;
i__60045_60162 = G__60173;
continue;
}
} else {
var temp__5735__auto___60174 = cljs.core.seq(seq__60040_60159);
if(temp__5735__auto___60174){
var seq__60040_60175__$1 = temp__5735__auto___60174;
if(cljs.core.chunked_seq_QMARK_(seq__60040_60175__$1)){
var c__4609__auto___60176 = cljs.core.chunk_first(seq__60040_60175__$1);
var G__60177 = cljs.core.chunk_rest(seq__60040_60175__$1);
var G__60178 = c__4609__auto___60176;
var G__60179 = cljs.core.count(c__4609__auto___60176);
var G__60180 = (0);
seq__60040_60159 = G__60177;
chunk__60043_60160 = G__60178;
count__60044_60161 = G__60179;
i__60045_60162 = G__60180;
continue;
} else {
var node_60181 = cljs.core.first(seq__60040_60175__$1);
var path_match_60182 = shadow.cljs.devtools.client.browser.match_paths(node_60181.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60182)){
var new_link_60183 = (function (){var G__60051 = node_60181.cloneNode(true);
G__60051.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60182),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60051;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60182], 0));

goog.dom.insertSiblingAfter(new_link_60183,node_60181);

goog.dom.removeNode(node_60181);


var G__60184 = cljs.core.next(seq__60040_60175__$1);
var G__60185 = null;
var G__60186 = (0);
var G__60187 = (0);
seq__60040_60159 = G__60184;
chunk__60043_60160 = G__60185;
count__60044_60161 = G__60186;
i__60045_60162 = G__60187;
continue;
} else {
var G__60188 = cljs.core.next(seq__60040_60175__$1);
var G__60189 = null;
var G__60190 = (0);
var G__60191 = (0);
seq__60040_60159 = G__60188;
chunk__60043_60160 = G__60189;
count__60044_60161 = G__60190;
i__60045_60162 = G__60191;
continue;
}
}
} else {
}
}
break;
}


var G__60192 = seq__60010;
var G__60193 = chunk__60012;
var G__60194 = count__60013;
var G__60195 = (i__60014 + (1));
seq__60010 = G__60192;
chunk__60012 = G__60193;
count__60013 = G__60194;
i__60014 = G__60195;
continue;
} else {
var G__60196 = seq__60010;
var G__60197 = chunk__60012;
var G__60198 = count__60013;
var G__60199 = (i__60014 + (1));
seq__60010 = G__60196;
chunk__60012 = G__60197;
count__60013 = G__60198;
i__60014 = G__60199;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60010);
if(temp__5735__auto__){
var seq__60010__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60010__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60010__$1);
var G__60200 = cljs.core.chunk_rest(seq__60010__$1);
var G__60201 = c__4609__auto__;
var G__60202 = cljs.core.count(c__4609__auto__);
var G__60203 = (0);
seq__60010 = G__60200;
chunk__60012 = G__60201;
count__60013 = G__60202;
i__60014 = G__60203;
continue;
} else {
var path = cljs.core.first(seq__60010__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60052_60204 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60055_60205 = null;
var count__60056_60206 = (0);
var i__60057_60207 = (0);
while(true){
if((i__60057_60207 < count__60056_60206)){
var node_60208 = chunk__60055_60205.cljs$core$IIndexed$_nth$arity$2(null,i__60057_60207);
var path_match_60209 = shadow.cljs.devtools.client.browser.match_paths(node_60208.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60209)){
var new_link_60210 = (function (){var G__60062 = node_60208.cloneNode(true);
G__60062.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60209),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60062;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60209], 0));

goog.dom.insertSiblingAfter(new_link_60210,node_60208);

goog.dom.removeNode(node_60208);


var G__60211 = seq__60052_60204;
var G__60212 = chunk__60055_60205;
var G__60213 = count__60056_60206;
var G__60214 = (i__60057_60207 + (1));
seq__60052_60204 = G__60211;
chunk__60055_60205 = G__60212;
count__60056_60206 = G__60213;
i__60057_60207 = G__60214;
continue;
} else {
var G__60215 = seq__60052_60204;
var G__60216 = chunk__60055_60205;
var G__60217 = count__60056_60206;
var G__60218 = (i__60057_60207 + (1));
seq__60052_60204 = G__60215;
chunk__60055_60205 = G__60216;
count__60056_60206 = G__60217;
i__60057_60207 = G__60218;
continue;
}
} else {
var temp__5735__auto___60219__$1 = cljs.core.seq(seq__60052_60204);
if(temp__5735__auto___60219__$1){
var seq__60052_60220__$1 = temp__5735__auto___60219__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60052_60220__$1)){
var c__4609__auto___60221 = cljs.core.chunk_first(seq__60052_60220__$1);
var G__60222 = cljs.core.chunk_rest(seq__60052_60220__$1);
var G__60223 = c__4609__auto___60221;
var G__60224 = cljs.core.count(c__4609__auto___60221);
var G__60225 = (0);
seq__60052_60204 = G__60222;
chunk__60055_60205 = G__60223;
count__60056_60206 = G__60224;
i__60057_60207 = G__60225;
continue;
} else {
var node_60226 = cljs.core.first(seq__60052_60220__$1);
var path_match_60227 = shadow.cljs.devtools.client.browser.match_paths(node_60226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60227)){
var new_link_60228 = (function (){var G__60063 = node_60226.cloneNode(true);
G__60063.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60063;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60227], 0));

goog.dom.insertSiblingAfter(new_link_60228,node_60226);

goog.dom.removeNode(node_60226);


var G__60229 = cljs.core.next(seq__60052_60220__$1);
var G__60230 = null;
var G__60231 = (0);
var G__60232 = (0);
seq__60052_60204 = G__60229;
chunk__60055_60205 = G__60230;
count__60056_60206 = G__60231;
i__60057_60207 = G__60232;
continue;
} else {
var G__60233 = cljs.core.next(seq__60052_60220__$1);
var G__60234 = null;
var G__60235 = (0);
var G__60236 = (0);
seq__60052_60204 = G__60233;
chunk__60055_60205 = G__60234;
count__60056_60206 = G__60235;
i__60057_60207 = G__60236;
continue;
}
}
} else {
}
}
break;
}


var G__60237 = cljs.core.next(seq__60010__$1);
var G__60238 = null;
var G__60239 = (0);
var G__60240 = (0);
seq__60010 = G__60237;
chunk__60012 = G__60238;
count__60013 = G__60239;
i__60014 = G__60240;
continue;
} else {
var G__60241 = cljs.core.next(seq__60010__$1);
var G__60242 = null;
var G__60243 = (0);
var G__60244 = (0);
seq__60010 = G__60241;
chunk__60012 = G__60242;
count__60013 = G__60243;
i__60014 = G__60244;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__60064){
var map__60065 = p__60064;
var map__60065__$1 = (((((!((map__60065 == null))))?(((((map__60065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60065):map__60065);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60065__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60065__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__60067,done){
var map__60068 = p__60067;
var map__60068__$1 = (((((!((map__60068 == null))))?(((((map__60068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60068):map__60068);
var msg = map__60068__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60068__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60068__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60068__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60068__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60070){
var map__60071 = p__60070;
var map__60071__$1 = (((((!((map__60071 == null))))?(((((map__60071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60071):map__60071);
var src = map__60071__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60071__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e60073){var e = e60073;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__60074,done){
var map__60075 = p__60074;
var map__60075__$1 = (((((!((map__60075 == null))))?(((((map__60075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60075):map__60075);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__60077){
var map__60078 = p__60077;
var map__60078__$1 = (((((!((map__60078 == null))))?(((((map__60078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60078):map__60078);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__60080,done){
var map__60081 = p__60080;
var map__60081__$1 = (((((!((map__60081 == null))))?(((((map__60081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60081):map__60081);
var msg = map__60081__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60081__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__60083_60245 = type;
var G__60083_60246__$1 = (((G__60083_60245 instanceof cljs.core.Keyword))?G__60083_60245.fqn:null);
switch (G__60083_60246__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__60084 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__60085 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__60086 = "POST";
var G__60087 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__60088 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__60084,G__60085,G__60086,G__60087,G__60088);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__60090 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__60089 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__60089.cljs$core$IFn$_invoke$arity$1 ? fexpr__60089.cljs$core$IFn$_invoke$arity$1(G__60090) : fexpr__60089.call(null,G__60090));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e60091){var e = e60091;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60248 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60248)){
var s_60249 = temp__5735__auto___60248;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60249.onclose = (function (e){
return null;
}));

s_60249.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
