goog.provide('day8.re_frame_10x.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('mranderson048.reagent.v0v8v0.reagent.core');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('cljsjs.react_highlight');
goog.require('cljsjs.highlight.langs.clojure');
day8.re_frame_10x.view.components.search_input = (function day8$re_frame_10x$view$components$search_input(p__48707){
var map__48708 = p__48707;
var map__48708__$1 = (((((!((map__48708 == null))))?(((((map__48708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48708):map__48708);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var save = (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)));
if((((v).length) > (0))){
return (on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));
} else {
return null;
}
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val))).length)))?(25):((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val))).length)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48697_SHARP_){
cljs.core.reset_BANG_(val,p1__48697_SHARP_.target.value);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(p1__48697_SHARP_) : on_change.call(null,p1__48697_SHARP_));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__48702_SHARP_){
var G__48718 = p1__48702_SHARP_.which;
switch (G__48718) {
case (13):
save();

return cljs.core.reset_BANG_(val,"");

break;
default:
return null;

}
})], null)], null);
});
});
day8.re_frame_10x.view.components.scroll_BANG_ = (function day8$re_frame_10x$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js(start),cljs.core.clj__GT_js(end),time)).play();
});
day8.re_frame_10x.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame_10x$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame_10x.view.components.autoscroll_list = (function day8$re_frame_10x$view$components$autoscroll_list(p__48742,child){
var map__48743 = p__48742;
var map__48743__$1 = (((((!((map__48743 == null))))?(((((map__48743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48743):map__48743);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var should_scroll = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return mranderson048.reagent.v0v8v0.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return day8.re_frame_10x.view.components.scroll_BANG_(cljs.core.deref(node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollHeight], null),(0));
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (_){
return cljs.core.reset_BANG_(should_scroll,day8.re_frame_10x.view.components.scrolled_to_end_QMARK_(cljs.core.deref(node),(100)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (_){
if(cljs.core.truth_((function (){var and__4174__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.deref(should_scroll);
} else {
return and__4174__auto__;
}
})())){
return day8.re_frame_10x.view.components.scroll_BANG_(cljs.core.deref(node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollHeight], null),(500));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__48760,child__$1){
var map__48761 = p__48760;
var map__48761__$1 = (((((!((map__48761 == null))))?(((((map__48761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48761):map__48761);
var class$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48761__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (dom_node){
return cljs.core.reset_BANG_(node,dom_node);
})], null),child__$1], null);
})], null));
});
day8.re_frame_10x.view.components.string__GT_css = (function day8$re_frame_10x$view$components$string__GT_css(css_string){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__48765){
var vec__48766 = p__48765;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48766,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48766,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48764_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__48764_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(css_string,/;/)));
});
day8.re_frame_10x.view.components.default_cljs_devtools_prefs = cljs.core.deref(devtools.prefs.default_config);
day8.re_frame_10x.view.components.reset_wrapping = (function day8$re_frame_10x$view$components$reset_wrapping(css_string){
return clojure.string.replace(css_string,/white-space:nowrap;/,"");
});
day8.re_frame_10x.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame_10x.view.components.effective_cljs_devtools_prefs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.default_cljs_devtools_prefs,day8.re_frame_10x.view.components.customized_cljs_devtools_prefs], 0));
day8.re_frame_10x.view.components.make_devtools_api_call = (function day8$re_frame_10x$view$components$make_devtools_api_call(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48900 = arguments.length;
var i__4790__auto___48901 = (0);
while(true){
if((i__4790__auto___48901 < len__4789__auto___48900)){
args__4795__auto__.push((arguments[i__4790__auto___48901]));

var G__48902 = (i__4790__auto___48901 + (1));
i__4790__auto___48901 = G__48902;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__48671__auto__ = devtools.prefs.get_prefs();
var prefs__48672__auto__ = day8.re_frame_10x.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_(prefs__48672__auto__);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_fn,args);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__48672__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__48672__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__48671__auto__);
}}));

(day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq48777){
var G__48778 = cljs.core.first(seq48777);
var seq48777__$1 = cljs.core.next(seq48777);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48778,seq48777__$1);
}));

day8.re_frame_10x.view.components.cljs_devtools_header = (function day8$re_frame_10x$view$components$cljs_devtools_header(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48918 = arguments.length;
var i__4790__auto___48919 = (0);
while(true){
if((i__4790__auto___48919 < len__4789__auto___48918)){
args__4795__auto__.push((arguments[i__4790__auto___48919]));

var G__48920 = (i__4790__auto___48919 + (1));
i__4790__auto___48919 = G__48920;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
}));

(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq48787){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48787));
}));

day8.re_frame_10x.view.components.cljs_devtools_body = (function day8$re_frame_10x$view$components$cljs_devtools_body(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48926 = arguments.length;
var i__4790__auto___48927 = (0);
while(true){
if((i__4790__auto___48927 < len__4789__auto___48926)){
args__4795__auto__.push((arguments[i__4790__auto___48927]));

var G__48932 = (i__4790__auto___48927 + (1));
i__4790__auto___48927 = G__48932;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
}));

(day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq48796){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48796));
}));

day8.re_frame_10x.view.components.cljs_devtools_has_body = (function day8$re_frame_10x$view$components$cljs_devtools_has_body(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48938 = arguments.length;
var i__4790__auto___48939 = (0);
while(true){
if((i__4790__auto___48939 < len__4789__auto___48938)){
args__4795__auto__.push((arguments[i__4790__auto___48939]));

var G__48940 = (i__4790__auto___48939 + (1));
i__4790__auto___48939 = G__48940;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
}));

(day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq48801){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48801));
}));

day8.re_frame_10x.view.components.get_object = (function day8$re_frame_10x$view$components$get_object(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).object;
});
day8.re_frame_10x.view.components.get_config = (function day8$re_frame_10x$view$components$get_config(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).config;
});
day8.re_frame_10x.view.components.data_structure = (function day8$re_frame_10x$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = (function (){var G__48808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48808) : mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__48808));
})();
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?" expanded":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__48809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48809) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__48809));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.get_object(jsonml__$1),day8.re_frame_10x.view.components.get_config(jsonml__$1)], 0));
} else {
return and__4174__auto__;
}
})())?(function (){var G__48814 = day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.get_object(jsonml__$1),day8.re_frame_10x.view.components.get_config(jsonml__$1)], 0));
var G__48815 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__48814,G__48815) : day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,G__48814,G__48815));
})():(function (){var G__48817 = day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.get_object(jsonml__$1),day8.re_frame_10x.view.components.get_config(jsonml__$1)], 0));
var G__48818 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"header","header",119441134));
return (day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__48817,G__48818) : day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,G__48817,G__48818));
})())], null);
});
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.view.components.jsonml__GT_hiccup = (function day8$re_frame_10x$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__48821 = jsonml;
var seq__48822 = cljs.core.seq(vec__48821);
var first__48823 = cljs.core.first(seq__48822);
var seq__48822__$1 = cljs.core.next(seq__48822);
var tag_name = first__48823;
var first__48823__$1 = cljs.core.first(seq__48822__$1);
var seq__48822__$2 = cljs.core.next(seq__48822__$1);
var attributes = first__48823__$1;
var children = seq__48822__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.view.components.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__48824 = child;
var G__48825 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__48824,G__48825) : day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,G__48824,G__48825));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame_10x.view.components.subtree = (function day8$re_frame_10x$view$components$subtree(data,title,path){
var expanded_QMARK_ = (function (){var G__48832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48832) : mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__48832));
})();
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__48833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48833) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__48833));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__4185__auto__ = title;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null)], null)], null)], null);
});
});
day8.re_frame_10x.view.components.subscription_render = (function day8$re_frame_10x$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__4185__auto__ = title;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null);
});
});
day8.re_frame_10x.view.components.simple_render = (function day8$re_frame_10x$view$components$simple_render(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48992 = arguments.length;
var i__4790__auto___48994 = (0);
while(true){
if((i__4790__auto___48994 < len__4789__auto___48992)){
args__4795__auto__.push((arguments[i__4790__auto___48994]));

var G__48996 = (i__4790__auto___48994 + (1));
i__4790__auto___48994 = G__48996;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__48844){
var vec__48845 = p__48844;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48845,(0),null);
var expanded_QMARK_ = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return ((typeof data__$1 === 'string') || ((data__$1 instanceof RegExp)) || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null);
});
}));

(day8.re_frame_10x.view.components.simple_render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.view.components.simple_render.cljs$lang$applyTo = (function (seq48841){
var G__48842 = cljs.core.first(seq48841);
var seq48841__$1 = cljs.core.next(seq48841);
var G__48843 = cljs.core.first(seq48841__$1);
var seq48841__$2 = cljs.core.next(seq48841__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48842,G__48843,seq48841__$2);
}));

day8.re_frame_10x.view.components.tag = (function day8$re_frame_10x$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});
day8.re_frame_10x.view.components.highlight = mranderson048.reagent.v0v8v0.reagent.core.adapt_react_class(Highlight);

//# sourceMappingURL=day8.re_frame_10x.view.components.js.map
