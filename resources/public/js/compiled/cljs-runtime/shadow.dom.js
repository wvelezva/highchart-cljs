goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57986 = coll;
var G__57987 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57986,G__57987) : shadow.dom.lazy_native_coll_seq.call(null,G__57986,G__57987));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58013 = arguments.length;
switch (G__58013) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58017 = arguments.length;
switch (G__58017) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58023 = arguments.length;
switch (G__58023) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58030 = arguments.length;
switch (G__58030) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58042 = arguments.length;
switch (G__58042) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__58046 = document;
var G__58047 = shadow.dom.dom_node(el);
return goog.dom.contains(G__58046,G__58047);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__58048 = shadow.dom.dom_node(parent);
var G__58049 = shadow.dom.dom_node(el);
return goog.dom.contains(G__58048,G__58049);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__58051 = shadow.dom.dom_node(el);
var G__58052 = cls;
return goog.dom.classlist.add(G__58051,G__58052);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__58054 = shadow.dom.dom_node(el);
var G__58055 = cls;
return goog.dom.classlist.remove(G__58054,G__58055);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58058 = arguments.length;
switch (G__58058) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__58060 = shadow.dom.dom_node(el);
var G__58061 = cls;
return goog.dom.classlist.toggle(G__58060,G__58061);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58063){if((e58063 instanceof Object)){
var e = e58063;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58063;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58070 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58071 = null;
var count__58072 = (0);
var i__58073 = (0);
while(true){
if((i__58073 < count__58072)){
var el = chunk__58071.cljs$core$IIndexed$_nth$arity$2(null,i__58073);
var handler_58680__$1 = ((function (seq__58070,chunk__58071,count__58072,i__58073,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58070,chunk__58071,count__58072,i__58073,el))
;
var G__58088_58681 = el;
var G__58089_58682 = cljs.core.name(ev);
var G__58090_58683 = handler_58680__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58088_58681,G__58089_58682,G__58090_58683) : shadow.dom.dom_listen.call(null,G__58088_58681,G__58089_58682,G__58090_58683));


var G__58685 = seq__58070;
var G__58686 = chunk__58071;
var G__58687 = count__58072;
var G__58688 = (i__58073 + (1));
seq__58070 = G__58685;
chunk__58071 = G__58686;
count__58072 = G__58687;
i__58073 = G__58688;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58070);
if(temp__5735__auto__){
var seq__58070__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58070__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58070__$1);
var G__58689 = cljs.core.chunk_rest(seq__58070__$1);
var G__58690 = c__4609__auto__;
var G__58691 = cljs.core.count(c__4609__auto__);
var G__58692 = (0);
seq__58070 = G__58689;
chunk__58071 = G__58690;
count__58072 = G__58691;
i__58073 = G__58692;
continue;
} else {
var el = cljs.core.first(seq__58070__$1);
var handler_58694__$1 = ((function (seq__58070,chunk__58071,count__58072,i__58073,el,seq__58070__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58070,chunk__58071,count__58072,i__58073,el,seq__58070__$1,temp__5735__auto__))
;
var G__58094_58696 = el;
var G__58095_58697 = cljs.core.name(ev);
var G__58096_58698 = handler_58694__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58094_58696,G__58095_58697,G__58096_58698) : shadow.dom.dom_listen.call(null,G__58094_58696,G__58095_58697,G__58096_58698));


var G__58699 = cljs.core.next(seq__58070__$1);
var G__58700 = null;
var G__58701 = (0);
var G__58702 = (0);
seq__58070 = G__58699;
chunk__58071 = G__58700;
count__58072 = G__58701;
i__58073 = G__58702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58099 = arguments.length;
switch (G__58099) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__58104 = shadow.dom.dom_node(el);
var G__58105 = cljs.core.name(ev);
var G__58106 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58104,G__58105,G__58106) : shadow.dom.dom_listen.call(null,G__58104,G__58105,G__58106));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__58109 = shadow.dom.dom_node(el);
var G__58110 = cljs.core.name(ev);
var G__58111 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__58109,G__58110,G__58111) : shadow.dom.dom_listen_remove.call(null,G__58109,G__58110,G__58111));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58114 = cljs.core.seq(events);
var chunk__58115 = null;
var count__58116 = (0);
var i__58117 = (0);
while(true){
if((i__58117 < count__58116)){
var vec__58127 = chunk__58115.cljs$core$IIndexed$_nth$arity$2(null,i__58117);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58713 = seq__58114;
var G__58714 = chunk__58115;
var G__58715 = count__58116;
var G__58716 = (i__58117 + (1));
seq__58114 = G__58713;
chunk__58115 = G__58714;
count__58116 = G__58715;
i__58117 = G__58716;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58114);
if(temp__5735__auto__){
var seq__58114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58114__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58114__$1);
var G__58718 = cljs.core.chunk_rest(seq__58114__$1);
var G__58719 = c__4609__auto__;
var G__58720 = cljs.core.count(c__4609__auto__);
var G__58721 = (0);
seq__58114 = G__58718;
chunk__58115 = G__58719;
count__58116 = G__58720;
i__58117 = G__58721;
continue;
} else {
var vec__58130 = cljs.core.first(seq__58114__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58130,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58722 = cljs.core.next(seq__58114__$1);
var G__58723 = null;
var G__58724 = (0);
var G__58725 = (0);
seq__58114 = G__58722;
chunk__58115 = G__58723;
count__58116 = G__58724;
i__58117 = G__58725;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__58133 = cljs.core.seq(styles);
var chunk__58134 = null;
var count__58135 = (0);
var i__58136 = (0);
while(true){
if((i__58136 < count__58135)){
var vec__58153 = chunk__58134.cljs$core$IIndexed$_nth$arity$2(null,i__58136);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153,(1),null);
var G__58157_58729 = dom;
var G__58158_58730 = cljs.core.name(k);
var G__58159_58731 = (((v == null))?"":v);
goog.style.setStyle(G__58157_58729,G__58158_58730,G__58159_58731);


var G__58734 = seq__58133;
var G__58735 = chunk__58134;
var G__58736 = count__58135;
var G__58737 = (i__58136 + (1));
seq__58133 = G__58734;
chunk__58134 = G__58735;
count__58135 = G__58736;
i__58136 = G__58737;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58133);
if(temp__5735__auto__){
var seq__58133__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58133__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58133__$1);
var G__58739 = cljs.core.chunk_rest(seq__58133__$1);
var G__58740 = c__4609__auto__;
var G__58741 = cljs.core.count(c__4609__auto__);
var G__58742 = (0);
seq__58133 = G__58739;
chunk__58134 = G__58740;
count__58135 = G__58741;
i__58136 = G__58742;
continue;
} else {
var vec__58163 = cljs.core.first(seq__58133__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(1),null);
var G__58166_58744 = dom;
var G__58168_58745 = cljs.core.name(k);
var G__58169_58746 = (((v == null))?"":v);
goog.style.setStyle(G__58166_58744,G__58168_58745,G__58169_58746);


var G__58748 = cljs.core.next(seq__58133__$1);
var G__58749 = null;
var G__58750 = (0);
var G__58751 = (0);
seq__58133 = G__58748;
chunk__58134 = G__58749;
count__58135 = G__58750;
i__58136 = G__58751;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__58176_58753 = key;
var G__58176_58754__$1 = (((G__58176_58753 instanceof cljs.core.Keyword))?G__58176_58753.fqn:null);
switch (G__58176_58754__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58759 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58759,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58759,"aria-");
}
})())){
el.setAttribute(ks_58759,value);
} else {
(el[ks_58759] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__58181 = shadow.dom.dom_node(el);
var G__58182 = cls;
return goog.dom.classlist.contains(G__58181,G__58182);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58183){
var map__58184 = p__58183;
var map__58184__$1 = (((((!((map__58184 == null))))?(((((map__58184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58184):map__58184);
var props = map__58184__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58186 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58186,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58186,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58186,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58189 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58189,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58189;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58192 = arguments.length;
switch (G__58192) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58199){
var vec__58201 = p__58199;
var seq__58202 = cljs.core.seq(vec__58201);
var first__58203 = cljs.core.first(seq__58202);
var seq__58202__$1 = cljs.core.next(seq__58202);
var nn = first__58203;
var first__58203__$1 = cljs.core.first(seq__58202__$1);
var seq__58202__$2 = cljs.core.next(seq__58202__$1);
var np = first__58203__$1;
var nc = seq__58202__$2;
var node = vec__58201;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58206 = nn;
var G__58207 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58206,G__58207) : create_fn.call(null,G__58206,G__58207));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58209 = nn;
var G__58210 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58209,G__58210) : create_fn.call(null,G__58209,G__58210));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58212 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58212,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58212,(1),null);
var seq__58215_58786 = cljs.core.seq(node_children);
var chunk__58217_58787 = null;
var count__58218_58788 = (0);
var i__58219_58789 = (0);
while(true){
if((i__58219_58789 < count__58218_58788)){
var child_struct_58790 = chunk__58217_58787.cljs$core$IIndexed$_nth$arity$2(null,i__58219_58789);
var children_58791 = shadow.dom.dom_node(child_struct_58790);
if(cljs.core.seq_QMARK_(children_58791)){
var seq__58244_58793 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58791));
var chunk__58246_58794 = null;
var count__58247_58795 = (0);
var i__58248_58796 = (0);
while(true){
if((i__58248_58796 < count__58247_58795)){
var child_58798 = chunk__58246_58794.cljs$core$IIndexed$_nth$arity$2(null,i__58248_58796);
if(cljs.core.truth_(child_58798)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58798);


var G__58799 = seq__58244_58793;
var G__58800 = chunk__58246_58794;
var G__58801 = count__58247_58795;
var G__58802 = (i__58248_58796 + (1));
seq__58244_58793 = G__58799;
chunk__58246_58794 = G__58800;
count__58247_58795 = G__58801;
i__58248_58796 = G__58802;
continue;
} else {
var G__58803 = seq__58244_58793;
var G__58804 = chunk__58246_58794;
var G__58805 = count__58247_58795;
var G__58806 = (i__58248_58796 + (1));
seq__58244_58793 = G__58803;
chunk__58246_58794 = G__58804;
count__58247_58795 = G__58805;
i__58248_58796 = G__58806;
continue;
}
} else {
var temp__5735__auto___58807 = cljs.core.seq(seq__58244_58793);
if(temp__5735__auto___58807){
var seq__58244_58808__$1 = temp__5735__auto___58807;
if(cljs.core.chunked_seq_QMARK_(seq__58244_58808__$1)){
var c__4609__auto___58809 = cljs.core.chunk_first(seq__58244_58808__$1);
var G__58810 = cljs.core.chunk_rest(seq__58244_58808__$1);
var G__58811 = c__4609__auto___58809;
var G__58812 = cljs.core.count(c__4609__auto___58809);
var G__58813 = (0);
seq__58244_58793 = G__58810;
chunk__58246_58794 = G__58811;
count__58247_58795 = G__58812;
i__58248_58796 = G__58813;
continue;
} else {
var child_58814 = cljs.core.first(seq__58244_58808__$1);
if(cljs.core.truth_(child_58814)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58814);


var G__58815 = cljs.core.next(seq__58244_58808__$1);
var G__58816 = null;
var G__58817 = (0);
var G__58818 = (0);
seq__58244_58793 = G__58815;
chunk__58246_58794 = G__58816;
count__58247_58795 = G__58817;
i__58248_58796 = G__58818;
continue;
} else {
var G__58819 = cljs.core.next(seq__58244_58808__$1);
var G__58820 = null;
var G__58821 = (0);
var G__58822 = (0);
seq__58244_58793 = G__58819;
chunk__58246_58794 = G__58820;
count__58247_58795 = G__58821;
i__58248_58796 = G__58822;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58791);
}


var G__58823 = seq__58215_58786;
var G__58824 = chunk__58217_58787;
var G__58825 = count__58218_58788;
var G__58826 = (i__58219_58789 + (1));
seq__58215_58786 = G__58823;
chunk__58217_58787 = G__58824;
count__58218_58788 = G__58825;
i__58219_58789 = G__58826;
continue;
} else {
var temp__5735__auto___58830 = cljs.core.seq(seq__58215_58786);
if(temp__5735__auto___58830){
var seq__58215_58831__$1 = temp__5735__auto___58830;
if(cljs.core.chunked_seq_QMARK_(seq__58215_58831__$1)){
var c__4609__auto___58832 = cljs.core.chunk_first(seq__58215_58831__$1);
var G__58833 = cljs.core.chunk_rest(seq__58215_58831__$1);
var G__58834 = c__4609__auto___58832;
var G__58835 = cljs.core.count(c__4609__auto___58832);
var G__58836 = (0);
seq__58215_58786 = G__58833;
chunk__58217_58787 = G__58834;
count__58218_58788 = G__58835;
i__58219_58789 = G__58836;
continue;
} else {
var child_struct_58837 = cljs.core.first(seq__58215_58831__$1);
var children_58838 = shadow.dom.dom_node(child_struct_58837);
if(cljs.core.seq_QMARK_(children_58838)){
var seq__58260_58839 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58838));
var chunk__58262_58840 = null;
var count__58263_58841 = (0);
var i__58264_58842 = (0);
while(true){
if((i__58264_58842 < count__58263_58841)){
var child_58843 = chunk__58262_58840.cljs$core$IIndexed$_nth$arity$2(null,i__58264_58842);
if(cljs.core.truth_(child_58843)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58843);


var G__58844 = seq__58260_58839;
var G__58845 = chunk__58262_58840;
var G__58846 = count__58263_58841;
var G__58847 = (i__58264_58842 + (1));
seq__58260_58839 = G__58844;
chunk__58262_58840 = G__58845;
count__58263_58841 = G__58846;
i__58264_58842 = G__58847;
continue;
} else {
var G__58848 = seq__58260_58839;
var G__58849 = chunk__58262_58840;
var G__58850 = count__58263_58841;
var G__58851 = (i__58264_58842 + (1));
seq__58260_58839 = G__58848;
chunk__58262_58840 = G__58849;
count__58263_58841 = G__58850;
i__58264_58842 = G__58851;
continue;
}
} else {
var temp__5735__auto___58856__$1 = cljs.core.seq(seq__58260_58839);
if(temp__5735__auto___58856__$1){
var seq__58260_58857__$1 = temp__5735__auto___58856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58260_58857__$1)){
var c__4609__auto___58858 = cljs.core.chunk_first(seq__58260_58857__$1);
var G__58859 = cljs.core.chunk_rest(seq__58260_58857__$1);
var G__58860 = c__4609__auto___58858;
var G__58861 = cljs.core.count(c__4609__auto___58858);
var G__58862 = (0);
seq__58260_58839 = G__58859;
chunk__58262_58840 = G__58860;
count__58263_58841 = G__58861;
i__58264_58842 = G__58862;
continue;
} else {
var child_58863 = cljs.core.first(seq__58260_58857__$1);
if(cljs.core.truth_(child_58863)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58863);


var G__58864 = cljs.core.next(seq__58260_58857__$1);
var G__58865 = null;
var G__58866 = (0);
var G__58867 = (0);
seq__58260_58839 = G__58864;
chunk__58262_58840 = G__58865;
count__58263_58841 = G__58866;
i__58264_58842 = G__58867;
continue;
} else {
var G__58868 = cljs.core.next(seq__58260_58857__$1);
var G__58869 = null;
var G__58870 = (0);
var G__58871 = (0);
seq__58260_58839 = G__58868;
chunk__58262_58840 = G__58869;
count__58263_58841 = G__58870;
i__58264_58842 = G__58871;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58838);
}


var G__58872 = cljs.core.next(seq__58215_58831__$1);
var G__58873 = null;
var G__58874 = (0);
var G__58875 = (0);
seq__58215_58786 = G__58872;
chunk__58217_58787 = G__58873;
count__58218_58788 = G__58874;
i__58219_58789 = G__58875;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__58284 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__58284);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58288 = cljs.core.seq(node);
var chunk__58289 = null;
var count__58290 = (0);
var i__58291 = (0);
while(true){
if((i__58291 < count__58290)){
var n = chunk__58289.cljs$core$IIndexed$_nth$arity$2(null,i__58291);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58876 = seq__58288;
var G__58877 = chunk__58289;
var G__58878 = count__58290;
var G__58879 = (i__58291 + (1));
seq__58288 = G__58876;
chunk__58289 = G__58877;
count__58290 = G__58878;
i__58291 = G__58879;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58288);
if(temp__5735__auto__){
var seq__58288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58288__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58288__$1);
var G__58884 = cljs.core.chunk_rest(seq__58288__$1);
var G__58885 = c__4609__auto__;
var G__58886 = cljs.core.count(c__4609__auto__);
var G__58887 = (0);
seq__58288 = G__58884;
chunk__58289 = G__58885;
count__58290 = G__58886;
i__58291 = G__58887;
continue;
} else {
var n = cljs.core.first(seq__58288__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58888 = cljs.core.next(seq__58288__$1);
var G__58889 = null;
var G__58890 = (0);
var G__58891 = (0);
seq__58288 = G__58888;
chunk__58289 = G__58889;
count__58290 = G__58890;
i__58291 = G__58891;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__58295 = shadow.dom.dom_node(new$);
var G__58296 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__58295,G__58296);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58298 = arguments.length;
switch (G__58298) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58300 = arguments.length;
switch (G__58300) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58308 = arguments.length;
switch (G__58308) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58901 = arguments.length;
var i__4790__auto___58902 = (0);
while(true){
if((i__4790__auto___58902 < len__4789__auto___58901)){
args__4795__auto__.push((arguments[i__4790__auto___58902]));

var G__58903 = (i__4790__auto___58902 + (1));
i__4790__auto___58902 = G__58903;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58310_58904 = cljs.core.seq(nodes);
var chunk__58311_58905 = null;
var count__58312_58906 = (0);
var i__58313_58907 = (0);
while(true){
if((i__58313_58907 < count__58312_58906)){
var node_58908 = chunk__58311_58905.cljs$core$IIndexed$_nth$arity$2(null,i__58313_58907);
fragment.appendChild(shadow.dom._to_dom(node_58908));


var G__58909 = seq__58310_58904;
var G__58910 = chunk__58311_58905;
var G__58911 = count__58312_58906;
var G__58912 = (i__58313_58907 + (1));
seq__58310_58904 = G__58909;
chunk__58311_58905 = G__58910;
count__58312_58906 = G__58911;
i__58313_58907 = G__58912;
continue;
} else {
var temp__5735__auto___58913 = cljs.core.seq(seq__58310_58904);
if(temp__5735__auto___58913){
var seq__58310_58914__$1 = temp__5735__auto___58913;
if(cljs.core.chunked_seq_QMARK_(seq__58310_58914__$1)){
var c__4609__auto___58915 = cljs.core.chunk_first(seq__58310_58914__$1);
var G__58916 = cljs.core.chunk_rest(seq__58310_58914__$1);
var G__58917 = c__4609__auto___58915;
var G__58918 = cljs.core.count(c__4609__auto___58915);
var G__58919 = (0);
seq__58310_58904 = G__58916;
chunk__58311_58905 = G__58917;
count__58312_58906 = G__58918;
i__58313_58907 = G__58919;
continue;
} else {
var node_58920 = cljs.core.first(seq__58310_58914__$1);
fragment.appendChild(shadow.dom._to_dom(node_58920));


var G__58921 = cljs.core.next(seq__58310_58914__$1);
var G__58922 = null;
var G__58923 = (0);
var G__58924 = (0);
seq__58310_58904 = G__58921;
chunk__58311_58905 = G__58922;
count__58312_58906 = G__58923;
i__58313_58907 = G__58924;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58309){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58309));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58324_58928 = cljs.core.seq(scripts);
var chunk__58325_58929 = null;
var count__58326_58930 = (0);
var i__58327_58931 = (0);
while(true){
if((i__58327_58931 < count__58326_58930)){
var vec__58338_58932 = chunk__58325_58929.cljs$core$IIndexed$_nth$arity$2(null,i__58327_58931);
var script_tag_58933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58338_58932,(0),null);
var script_body_58934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58338_58932,(1),null);
eval(script_body_58934);


var G__58935 = seq__58324_58928;
var G__58936 = chunk__58325_58929;
var G__58937 = count__58326_58930;
var G__58938 = (i__58327_58931 + (1));
seq__58324_58928 = G__58935;
chunk__58325_58929 = G__58936;
count__58326_58930 = G__58937;
i__58327_58931 = G__58938;
continue;
} else {
var temp__5735__auto___58939 = cljs.core.seq(seq__58324_58928);
if(temp__5735__auto___58939){
var seq__58324_58940__$1 = temp__5735__auto___58939;
if(cljs.core.chunked_seq_QMARK_(seq__58324_58940__$1)){
var c__4609__auto___58941 = cljs.core.chunk_first(seq__58324_58940__$1);
var G__58942 = cljs.core.chunk_rest(seq__58324_58940__$1);
var G__58943 = c__4609__auto___58941;
var G__58944 = cljs.core.count(c__4609__auto___58941);
var G__58945 = (0);
seq__58324_58928 = G__58942;
chunk__58325_58929 = G__58943;
count__58326_58930 = G__58944;
i__58327_58931 = G__58945;
continue;
} else {
var vec__58343_58946 = cljs.core.first(seq__58324_58940__$1);
var script_tag_58947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58343_58946,(0),null);
var script_body_58948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58343_58946,(1),null);
eval(script_body_58948);


var G__58949 = cljs.core.next(seq__58324_58940__$1);
var G__58950 = null;
var G__58951 = (0);
var G__58952 = (0);
seq__58324_58928 = G__58949;
chunk__58325_58929 = G__58950;
count__58326_58930 = G__58951;
i__58327_58931 = G__58952;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58347){
var vec__58348 = p__58347;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58348,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58348,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__58358 = shadow.dom.dom_node(el);
var G__58359 = cls;
return goog.dom.getAncestorByClass(G__58358,G__58359);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58364 = arguments.length;
switch (G__58364) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__58367 = shadow.dom.dom_node(el);
var G__58368 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58367,G__58368);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58371 = shadow.dom.dom_node(el);
var G__58372 = cljs.core.name(tag);
var G__58374 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58371,G__58372,G__58374);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58377 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58377);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58381 = shadow.dom.dom_node(dom);
var G__58382 = value;
return goog.dom.forms.setValue(G__58381,G__58382);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58389 = cljs.core.seq(style_keys);
var chunk__58390 = null;
var count__58391 = (0);
var i__58392 = (0);
while(true){
if((i__58392 < count__58391)){
var it = chunk__58390.cljs$core$IIndexed$_nth$arity$2(null,i__58392);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58958 = seq__58389;
var G__58959 = chunk__58390;
var G__58960 = count__58391;
var G__58961 = (i__58392 + (1));
seq__58389 = G__58958;
chunk__58390 = G__58959;
count__58391 = G__58960;
i__58392 = G__58961;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58389);
if(temp__5735__auto__){
var seq__58389__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58389__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58389__$1);
var G__58962 = cljs.core.chunk_rest(seq__58389__$1);
var G__58963 = c__4609__auto__;
var G__58964 = cljs.core.count(c__4609__auto__);
var G__58965 = (0);
seq__58389 = G__58962;
chunk__58390 = G__58963;
count__58391 = G__58964;
i__58392 = G__58965;
continue;
} else {
var it = cljs.core.first(seq__58389__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58966 = cljs.core.next(seq__58389__$1);
var G__58967 = null;
var G__58968 = (0);
var G__58969 = (0);
seq__58389 = G__58966;
chunk__58390 = G__58967;
count__58391 = G__58968;
i__58392 = G__58969;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58399,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58404 = k58399;
var G__58404__$1 = (((G__58404 instanceof cljs.core.Keyword))?G__58404.fqn:null);
switch (G__58404__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58399,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58405){
var vec__58406 = p__58405;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58406,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58406,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58398){
var self__ = this;
var G__58398__$1 = this;
return (new cljs.core.RecordIter((0),G__58398__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58410 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58410(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58400,other58401){
var self__ = this;
var this58400__$1 = this;
return (((!((other58401 == null)))) && ((this58400__$1.constructor === other58401.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58400__$1.x,other58401.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58400__$1.y,other58401.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58400__$1.__extmap,other58401.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58398){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58412 = cljs.core.keyword_identical_QMARK_;
var expr__58413 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58415 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58416 = expr__58413;
return (pred__58412.cljs$core$IFn$_invoke$arity$2 ? pred__58412.cljs$core$IFn$_invoke$arity$2(G__58415,G__58416) : pred__58412.call(null,G__58415,G__58416));
})())){
return (new shadow.dom.Coordinate(G__58398,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58417 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58418 = expr__58413;
return (pred__58412.cljs$core$IFn$_invoke$arity$2 ? pred__58412.cljs$core$IFn$_invoke$arity$2(G__58417,G__58418) : pred__58412.call(null,G__58417,G__58418));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58398,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58398),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58398){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58398,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58403){
var extmap__4478__auto__ = (function (){var G__58423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58403,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58403)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58423);
} else {
return G__58423;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58403),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58403),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58427 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58427);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58430 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58430);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58435 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58435);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58437,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58445 = k58437;
var G__58445__$1 = (((G__58445 instanceof cljs.core.Keyword))?G__58445.fqn:null);
switch (G__58445__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58437,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58448){
var vec__58449 = p__58448;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58449,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58449,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58436){
var self__ = this;
var G__58436__$1 = this;
return (new cljs.core.RecordIter((0),G__58436__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58458 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58458(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58438,other58439){
var self__ = this;
var this58438__$1 = this;
return (((!((other58439 == null)))) && ((this58438__$1.constructor === other58439.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58438__$1.w,other58439.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58438__$1.h,other58439.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58438__$1.__extmap,other58439.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58436){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58463 = cljs.core.keyword_identical_QMARK_;
var expr__58464 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58466 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58467 = expr__58464;
return (pred__58463.cljs$core$IFn$_invoke$arity$2 ? pred__58463.cljs$core$IFn$_invoke$arity$2(G__58466,G__58467) : pred__58463.call(null,G__58466,G__58467));
})())){
return (new shadow.dom.Size(G__58436,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58468 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58469 = expr__58464;
return (pred__58463.cljs$core$IFn$_invoke$arity$2 ? pred__58463.cljs$core$IFn$_invoke$arity$2(G__58468,G__58469) : pred__58463.call(null,G__58468,G__58469));
})())){
return (new shadow.dom.Size(self__.w,G__58436,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58436),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58436){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58436,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58440){
var extmap__4478__auto__ = (function (){var G__58474 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58440,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58440)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58474);
} else {
return G__58474;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58440),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58440),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58476 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58476);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__58997 = (i + (1));
var G__58998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58997;
ret = G__58998;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58493){
var vec__58494 = p__58493;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58494,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58499 = arguments.length;
switch (G__58499) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58506_59006 = new_node;
var G__58507_59007 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58506_59006,G__58507_59007);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58509_59008 = new_node;
var G__58510_59009 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58509_59008,G__58510_59009);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__59011 = ps;
var G__59012 = (i + (1));
el__$1 = G__59011;
i = G__59012;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58517 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58517);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__58521 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58521);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58523 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58523);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58526 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58526,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58526,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58526,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58529_59017 = cljs.core.seq(props);
var chunk__58530_59018 = null;
var count__58531_59019 = (0);
var i__58532_59020 = (0);
while(true){
if((i__58532_59020 < count__58531_59019)){
var vec__58544_59021 = chunk__58530_59018.cljs$core$IIndexed$_nth$arity$2(null,i__58532_59020);
var k_59022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58544_59021,(0),null);
var v_59023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58544_59021,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_59022);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59022),v_59023);


var G__59024 = seq__58529_59017;
var G__59025 = chunk__58530_59018;
var G__59026 = count__58531_59019;
var G__59027 = (i__58532_59020 + (1));
seq__58529_59017 = G__59024;
chunk__58530_59018 = G__59025;
count__58531_59019 = G__59026;
i__58532_59020 = G__59027;
continue;
} else {
var temp__5735__auto___59028 = cljs.core.seq(seq__58529_59017);
if(temp__5735__auto___59028){
var seq__58529_59029__$1 = temp__5735__auto___59028;
if(cljs.core.chunked_seq_QMARK_(seq__58529_59029__$1)){
var c__4609__auto___59031 = cljs.core.chunk_first(seq__58529_59029__$1);
var G__59032 = cljs.core.chunk_rest(seq__58529_59029__$1);
var G__59033 = c__4609__auto___59031;
var G__59034 = cljs.core.count(c__4609__auto___59031);
var G__59035 = (0);
seq__58529_59017 = G__59032;
chunk__58530_59018 = G__59033;
count__58531_59019 = G__59034;
i__58532_59020 = G__59035;
continue;
} else {
var vec__58548_59036 = cljs.core.first(seq__58529_59029__$1);
var k_59037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58548_59036,(0),null);
var v_59038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58548_59036,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_59037);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59037),v_59038);


var G__59039 = cljs.core.next(seq__58529_59029__$1);
var G__59040 = null;
var G__59041 = (0);
var G__59042 = (0);
seq__58529_59017 = G__59039;
chunk__58530_59018 = G__59040;
count__58531_59019 = G__59041;
i__58532_59020 = G__59042;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58558 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58558,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58558,(1),null);
var seq__58561_59043 = cljs.core.seq(node_children);
var chunk__58563_59044 = null;
var count__58564_59045 = (0);
var i__58565_59046 = (0);
while(true){
if((i__58565_59046 < count__58564_59045)){
var child_struct_59050 = chunk__58563_59044.cljs$core$IIndexed$_nth$arity$2(null,i__58565_59046);
if((!((child_struct_59050 == null)))){
if(typeof child_struct_59050 === 'string'){
var text_59053 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59053),child_struct_59050].join(''));
} else {
var children_59056 = shadow.dom.svg_node(child_struct_59050);
if(cljs.core.seq_QMARK_(children_59056)){
var seq__58581_59057 = cljs.core.seq(children_59056);
var chunk__58583_59058 = null;
var count__58584_59059 = (0);
var i__58585_59060 = (0);
while(true){
if((i__58585_59060 < count__58584_59059)){
var child_59061 = chunk__58583_59058.cljs$core$IIndexed$_nth$arity$2(null,i__58585_59060);
if(cljs.core.truth_(child_59061)){
node.appendChild(child_59061);


var G__59062 = seq__58581_59057;
var G__59063 = chunk__58583_59058;
var G__59064 = count__58584_59059;
var G__59065 = (i__58585_59060 + (1));
seq__58581_59057 = G__59062;
chunk__58583_59058 = G__59063;
count__58584_59059 = G__59064;
i__58585_59060 = G__59065;
continue;
} else {
var G__59066 = seq__58581_59057;
var G__59067 = chunk__58583_59058;
var G__59068 = count__58584_59059;
var G__59069 = (i__58585_59060 + (1));
seq__58581_59057 = G__59066;
chunk__58583_59058 = G__59067;
count__58584_59059 = G__59068;
i__58585_59060 = G__59069;
continue;
}
} else {
var temp__5735__auto___59070 = cljs.core.seq(seq__58581_59057);
if(temp__5735__auto___59070){
var seq__58581_59071__$1 = temp__5735__auto___59070;
if(cljs.core.chunked_seq_QMARK_(seq__58581_59071__$1)){
var c__4609__auto___59072 = cljs.core.chunk_first(seq__58581_59071__$1);
var G__59073 = cljs.core.chunk_rest(seq__58581_59071__$1);
var G__59074 = c__4609__auto___59072;
var G__59075 = cljs.core.count(c__4609__auto___59072);
var G__59076 = (0);
seq__58581_59057 = G__59073;
chunk__58583_59058 = G__59074;
count__58584_59059 = G__59075;
i__58585_59060 = G__59076;
continue;
} else {
var child_59077 = cljs.core.first(seq__58581_59071__$1);
if(cljs.core.truth_(child_59077)){
node.appendChild(child_59077);


var G__59078 = cljs.core.next(seq__58581_59071__$1);
var G__59079 = null;
var G__59080 = (0);
var G__59081 = (0);
seq__58581_59057 = G__59078;
chunk__58583_59058 = G__59079;
count__58584_59059 = G__59080;
i__58585_59060 = G__59081;
continue;
} else {
var G__59082 = cljs.core.next(seq__58581_59071__$1);
var G__59083 = null;
var G__59084 = (0);
var G__59085 = (0);
seq__58581_59057 = G__59082;
chunk__58583_59058 = G__59083;
count__58584_59059 = G__59084;
i__58585_59060 = G__59085;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59056);
}
}


var G__59086 = seq__58561_59043;
var G__59087 = chunk__58563_59044;
var G__59088 = count__58564_59045;
var G__59089 = (i__58565_59046 + (1));
seq__58561_59043 = G__59086;
chunk__58563_59044 = G__59087;
count__58564_59045 = G__59088;
i__58565_59046 = G__59089;
continue;
} else {
var G__59090 = seq__58561_59043;
var G__59091 = chunk__58563_59044;
var G__59092 = count__58564_59045;
var G__59093 = (i__58565_59046 + (1));
seq__58561_59043 = G__59090;
chunk__58563_59044 = G__59091;
count__58564_59045 = G__59092;
i__58565_59046 = G__59093;
continue;
}
} else {
var temp__5735__auto___59094 = cljs.core.seq(seq__58561_59043);
if(temp__5735__auto___59094){
var seq__58561_59095__$1 = temp__5735__auto___59094;
if(cljs.core.chunked_seq_QMARK_(seq__58561_59095__$1)){
var c__4609__auto___59096 = cljs.core.chunk_first(seq__58561_59095__$1);
var G__59097 = cljs.core.chunk_rest(seq__58561_59095__$1);
var G__59098 = c__4609__auto___59096;
var G__59099 = cljs.core.count(c__4609__auto___59096);
var G__59100 = (0);
seq__58561_59043 = G__59097;
chunk__58563_59044 = G__59098;
count__58564_59045 = G__59099;
i__58565_59046 = G__59100;
continue;
} else {
var child_struct_59101 = cljs.core.first(seq__58561_59095__$1);
if((!((child_struct_59101 == null)))){
if(typeof child_struct_59101 === 'string'){
var text_59102 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59102),child_struct_59101].join(''));
} else {
var children_59103 = shadow.dom.svg_node(child_struct_59101);
if(cljs.core.seq_QMARK_(children_59103)){
var seq__58588_59104 = cljs.core.seq(children_59103);
var chunk__58590_59105 = null;
var count__58591_59106 = (0);
var i__58592_59107 = (0);
while(true){
if((i__58592_59107 < count__58591_59106)){
var child_59109 = chunk__58590_59105.cljs$core$IIndexed$_nth$arity$2(null,i__58592_59107);
if(cljs.core.truth_(child_59109)){
node.appendChild(child_59109);


var G__59110 = seq__58588_59104;
var G__59111 = chunk__58590_59105;
var G__59112 = count__58591_59106;
var G__59113 = (i__58592_59107 + (1));
seq__58588_59104 = G__59110;
chunk__58590_59105 = G__59111;
count__58591_59106 = G__59112;
i__58592_59107 = G__59113;
continue;
} else {
var G__59114 = seq__58588_59104;
var G__59115 = chunk__58590_59105;
var G__59116 = count__58591_59106;
var G__59117 = (i__58592_59107 + (1));
seq__58588_59104 = G__59114;
chunk__58590_59105 = G__59115;
count__58591_59106 = G__59116;
i__58592_59107 = G__59117;
continue;
}
} else {
var temp__5735__auto___59118__$1 = cljs.core.seq(seq__58588_59104);
if(temp__5735__auto___59118__$1){
var seq__58588_59119__$1 = temp__5735__auto___59118__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58588_59119__$1)){
var c__4609__auto___59120 = cljs.core.chunk_first(seq__58588_59119__$1);
var G__59121 = cljs.core.chunk_rest(seq__58588_59119__$1);
var G__59122 = c__4609__auto___59120;
var G__59123 = cljs.core.count(c__4609__auto___59120);
var G__59124 = (0);
seq__58588_59104 = G__59121;
chunk__58590_59105 = G__59122;
count__58591_59106 = G__59123;
i__58592_59107 = G__59124;
continue;
} else {
var child_59126 = cljs.core.first(seq__58588_59119__$1);
if(cljs.core.truth_(child_59126)){
node.appendChild(child_59126);


var G__59127 = cljs.core.next(seq__58588_59119__$1);
var G__59128 = null;
var G__59129 = (0);
var G__59130 = (0);
seq__58588_59104 = G__59127;
chunk__58590_59105 = G__59128;
count__58591_59106 = G__59129;
i__58592_59107 = G__59130;
continue;
} else {
var G__59131 = cljs.core.next(seq__58588_59119__$1);
var G__59132 = null;
var G__59133 = (0);
var G__59134 = (0);
seq__58588_59104 = G__59131;
chunk__58590_59105 = G__59132;
count__58591_59106 = G__59133;
i__58592_59107 = G__59134;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59103);
}
}


var G__59135 = cljs.core.next(seq__58561_59095__$1);
var G__59136 = null;
var G__59137 = (0);
var G__59138 = (0);
seq__58561_59043 = G__59135;
chunk__58563_59044 = G__59136;
count__58564_59045 = G__59137;
i__58565_59046 = G__59138;
continue;
} else {
var G__59139 = cljs.core.next(seq__58561_59095__$1);
var G__59140 = null;
var G__59141 = (0);
var G__59142 = (0);
seq__58561_59043 = G__59139;
chunk__58563_59044 = G__59140;
count__58564_59045 = G__59141;
i__58565_59046 = G__59142;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__58601_59143 = shadow.dom._to_svg;
var G__58602_59144 = "string";
var G__58603_59145 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58601_59143,G__58602_59144,G__58603_59145);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__58608_59146 = shadow.dom._to_svg;
var G__58609_59147 = "null";
var G__58610_59148 = (function (_){
return null;
});
goog.object.set(G__58608_59146,G__58609_59147,G__58610_59148);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59149 = arguments.length;
var i__4790__auto___59150 = (0);
while(true){
if((i__4790__auto___59150 < len__4789__auto___59149)){
args__4795__auto__.push((arguments[i__4790__auto___59150]));

var G__59151 = (i__4790__auto___59150 + (1));
i__4790__auto___59150 = G__59151;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58613){
var G__58614 = cljs.core.first(seq58613);
var seq58613__$1 = cljs.core.next(seq58613);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58614,seq58613__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58618 = arguments.length;
switch (G__58618) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__58625_59153 = shadow.dom.dom_node(el);
var G__58626_59154 = cljs.core.name(event);
var G__58627_59155 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58625_59153,G__58626_59154,G__58627_59155) : shadow.dom.dom_listen.call(null,G__58625_59153,G__58626_59154,G__58627_59155));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__56164__auto___59156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56165__auto__ = (function (){var switch__55994__auto__ = (function (state_58634){
var state_val_58635 = (state_58634[(1)]);
if((state_val_58635 === (1))){
var state_58634__$1 = state_58634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58634__$1,(2),once_or_cleanup);
} else {
if((state_val_58635 === (2))){
var inst_58631 = (state_58634[(2)]);
var inst_58632 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58634__$1 = (function (){var statearr_58638 = state_58634;
(statearr_58638[(7)] = inst_58631);

return statearr_58638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58634__$1,inst_58632);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55995__auto__ = null;
var shadow$dom$state_machine__55995__auto____0 = (function (){
var statearr_58640 = [null,null,null,null,null,null,null,null];
(statearr_58640[(0)] = shadow$dom$state_machine__55995__auto__);

(statearr_58640[(1)] = (1));

return statearr_58640;
});
var shadow$dom$state_machine__55995__auto____1 = (function (state_58634){
while(true){
var ret_value__55996__auto__ = (function (){try{while(true){
var result__55997__auto__ = switch__55994__auto__(state_58634);
if(cljs.core.keyword_identical_QMARK_(result__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55997__auto__;
}
break;
}
}catch (e58642){if((e58642 instanceof Object)){
var ex__55998__auto__ = e58642;
var statearr_58644_59163 = state_58634;
(statearr_58644_59163[(5)] = ex__55998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59164 = state_58634;
state_58634 = G__59164;
continue;
} else {
return ret_value__55996__auto__;
}
break;
}
});
shadow$dom$state_machine__55995__auto__ = function(state_58634){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55995__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55995__auto____1.call(this,state_58634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55995__auto____0;
shadow$dom$state_machine__55995__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55995__auto____1;
return shadow$dom$state_machine__55995__auto__;
})()
})();
var state__56166__auto__ = (function (){var statearr_58647 = (f__56165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56165__auto__.cljs$core$IFn$_invoke$arity$0() : f__56165__auto__.call(null));
(statearr_58647[(6)] = c__56164__auto___59156);

return statearr_58647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56166__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
