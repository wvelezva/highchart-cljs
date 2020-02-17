goog.provide('mranderson048.reagent.v0v8v0.reagent.impl.component');
goog.require('cljs.core');
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
mranderson048.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map = (function mranderson048$reagent$v0v8v0$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__47140 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__47141 = (i + (1));
m = G__47140;
i = G__47141;
continue;
} else {
return m;
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.extract_props = (function mranderson048$reagent$v0v8v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.extract_children = (function mranderson048$reagent$v0v8v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv = (function mranderson048$reagent$v0v8v0$reagent$impl$component$props_argv(c,p){
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,mranderson048.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__5737__auto__;
return a;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_argv = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_argv(c){
return mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,(c["props"]));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_props = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__5737__auto__;
return mranderson048.reagent.v0v8v0.reagent.impl.component.extract_props(v);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_children = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__47045 = (p["children"]);
return module$node_modules$react$index.Children.toArray(G__47045);
})());
} else {
var v = temp__5737__auto__;
return mranderson048.reagent.v0v8v0.reagent.impl.component.extract_children(v);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__47050 = c;
var G__47050__$1 = (((G__47050 == null))?null:G__47050.prototype);
if((G__47050__$1 == null)){
return null;
} else {
return (G__47050__$1["reagentRender"]);
}
})() == null)))));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__47059 = c;
var G__47059__$1 = (((G__47059 == null))?null:G__47059.prototype);
if((G__47059__$1 == null)){
return null;
} else {
return (G__47059__$1["render"]);
}
})() == null)))));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.cached_react_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.cache_react_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.state_atom = (function mranderson048$reagent$v0v8v0$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.component !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.component.as_element !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.impl.component.as_element = null;
}
mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_render = (function mranderson048$reagent$v0v8v0$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = mranderson048.reagent.v0v8v0.reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__47066 = n;
switch (G__47066) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.call(null,res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__47157__delegate = function (args){
var G__47069 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__47069) : mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.call(null,G__47069));
};
var G__47157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47158__i = 0, G__47158__a = new Array(arguments.length -  0);
while (G__47158__i < G__47158__a.length) {G__47158__a[G__47158__i] = arguments[G__47158__i + 0]; ++G__47158__i;}
  args = new cljs.core.IndexedSeq(G__47158__a,0,null);
} 
return G__47157__delegate.call(this,args);};
G__47157.cljs$lang$maxFixedArity = 0;
G__47157.cljs$lang$applyTo = (function (arglist__47159){
var args = cljs.core.seq(arglist__47159);
return G__47157__delegate(args);
});
G__47157.cljs$core$IFn$_invoke$arity$variadic = G__47157__delegate;
return G__47157;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__47160 = c;
c = G__47160;
continue;
} else {
return res;

}
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.do_render = (function mranderson048$reagent$v0v8v0$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__47071 = mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__47072 = c;
(mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__47072);

try{var ok = [false];
try{var res = mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_render(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1((mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.call(null)))].join(''));
} else {
}
}
}
}finally {(mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__47071);
}});
mranderson048.reagent.v0v8v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
mranderson048.reagent.v0v8v0.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function mranderson048$reagent$v0v8v0$reagent$impl$component$render(){
var c = this;
if(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_non_reactive_STAR_){
return mranderson048.reagent.v0v8v0.reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
mranderson048.reagent.v0v8v0.reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return mranderson048.reagent.v0v8v0.reagent.ratom.run_in_reaction((function (){
return mranderson048.reagent.v0v8v0.reagent.impl.component.do_render(c);
}),c,"cljsRatom",mranderson048.reagent.v0v8v0.reagent.impl.batching.queue_render,mranderson048.reagent.v0v8v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
mranderson048.reagent.v0v8v0.reagent.impl.component.custom_wrapper = (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper(key,f){
var G__47089 = key;
var G__47089__$1 = (((G__47089 instanceof cljs.core.Keyword))?G__47089.fqn:null);
switch (G__47089__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.impl.component.state_atom(c),f.call(c,c));
});

break;
case "componentWillReceiveProps":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4185__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
return ((noargv) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv)));
} else {
if(noargv){
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.get_argv(c),mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "componentDidUpdate":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,oldprops));
});

break;
case "componentWillMount":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = mranderson048.reagent.v0v8v0.reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidMount":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__47093_47172 = (c["cljsRatom"]);
if((G__47093_47172 == null)){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_(G__47093_47172);
}

mranderson048.reagent.v0v8v0.reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_wrapper = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_wrapper(key,f,name){
var wrap = mranderson048.reagent.v0v8v0.reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4174__auto__ = wrap;
if(cljs.core.truth_(and__4174__auto__)){
return f;
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4185__auto__ = wrap;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return f;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel = mranderson048.reagent.v0v8v0.reagent.impl.util.memoize_1(mranderson048.reagent.v0v8v0.reagent.impl.util.dash_to_camel);
mranderson048.reagent.v0v8v0.reagent.impl.component.camelify_map_keys = (function mranderson048$reagent$v0v8v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.add_obligatory = (function mranderson048$reagent$v0v8v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson048.reagent.v0v8v0.reagent.impl.component.obligatory,fun_map], 0));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_funs = (function mranderson048$reagent$v0v8v0$reagent$impl$component$wrap_funs(fmap){
var renders_47177 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_47178 = cljs.core.first(cljs.core.vals(renders_47177));
if((cljs.core.count(renders_47177) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_47177))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_47178)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_47178], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4185__auto__ = render_fun;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name(render_fun__$1);
}
})());
var name__$1 = (function (){var G__47097 = name;
switch (G__47097) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,mranderson048.reagent.v0v8v0.reagent.impl.component.get_wrapper(k,v,name__$1));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v8v0.reagent.impl.component.static_fns)], 0));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.map_to_js = (function mranderson048$reagent$v0v8v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__47098 = o;
(G__47098[cljs.core.name(k)] = v);

return G__47098;
}),({}),m);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.cljsify = (function mranderson048$reagent$v0v8v0$reagent$impl$component$cljsify(body){
return mranderson048.reagent.v0v8v0.reagent.impl.component.map_to_js(mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_funs(mranderson048.reagent.v0v8v0.reagent.impl.component.add_obligatory(mranderson048.reagent.v0v8v0.reagent.impl.component.camelify_map_keys(body))));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.create_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var G__47099 = mranderson048.reagent.v0v8v0.reagent.impl.component.cljsify(body);
return module$node_modules$create_react_class$index(G__47099);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path = (function mranderson048$reagent$v0v8v0$reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__47100 = fiber;
var G__47100__$1 = (((G__47100 == null))?null:(G__47100["type"]));
if((G__47100__$1 == null)){
return null;
} else {
return (G__47100__$1["displayName"]);
}
})();
var parent = (function (){var G__47101 = fiber;
if((G__47101 == null)){
return null;
} else {
return (G__47101["return"]);
}
})();
var path = (function (){var G__47103 = parent;
var G__47103__$1 = (((G__47103 == null))?null:(mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__47103) : mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path.call(null,G__47103)));
if((G__47103__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47103__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.component_path = (function mranderson048$reagent$v0v8v0$reagent$impl$component$component_path(c){
var temp__5733__auto__ = (function (){var or__4185__auto__ = (function (){var G__47106 = c;
if((G__47106 == null)){
return null;
} else {
return (G__47106["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__47107 = c;
if((G__47107 == null)){
return null;
} else {
return G__47107._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var fiber = temp__5733__auto__;
return mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path(fiber);
} else {
var instance = (function (){var or__4185__auto__ = (function (){var G__47111 = c;
if((G__47111 == null)){
return null;
} else {
return (G__47111["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__47113 = c;
if((G__47113 == null)){
return null;
} else {
return G__47113._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__4185__auto__ = (function (){var G__47119 = instance;
if((G__47119 == null)){
return null;
} else {
return (G__47119["_currentElement"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__47120 = instance;
if((G__47120 == null)){
return null;
} else {
return G__47120._currentElement;
}
}
})();
var name = (function (){var G__47121 = elem;
var G__47121__$1 = (((G__47121 == null))?null:(G__47121["type"]));
if((G__47121__$1 == null)){
return null;
} else {
return (G__47121__$1["displayName"]);
}
})();
var owner = (function (){var or__4185__auto__ = (function (){var G__47123 = elem;
if((G__47123 == null)){
return null;
} else {
return (G__47123["_owner"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__47124 = elem;
if((G__47124 == null)){
return null;
} else {
return G__47124._owner;
}
}
})();
var path = (function (){var G__47125 = owner;
var G__47125__$1 = (((G__47125 == null))?null:(mranderson048.reagent.v0v8v0.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__47125) : mranderson048.reagent.v0v8v0.reagent.impl.component.component_path.call(null,G__47125)));
if((G__47125__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47125__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name = (function mranderson048$reagent$v0v8v0$reagent$impl$component$comp_name(){
var c = mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4185__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__47126 = c;
var G__47126__$1 = (((G__47126 == null))?null:G__47126.constructor);
if((G__47126__$1 == null)){
return null;
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name(G__47126__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",n,")"].join('');
} else {
return "";
}

});
mranderson048.reagent.v0v8v0.reagent.impl.component.fn_to_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((mranderson048.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_(f)) && ((!(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name(f);
if(cljs.core.empty_QMARK_(n)){
return f;
} else {
return n;
}
})()),mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(f)){
return mranderson048.reagent.v0v8v0.reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = mranderson048.reagent.v0v8v0.reagent.impl.component.create_class(withrender);
return mranderson048.reagent.v0v8v0.reagent.impl.component.cache_react_class(f,res);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.as_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$as_class(tag){
var temp__5737__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.component.cached_react_class(tag);
if((temp__5737__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__5737__auto__;
return cached_class;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.reactify_component = (function mranderson048$reagent$v0v8v0$reagent$impl$component$reactify_component(comp){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.component.as_class(comp);
}
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.impl.component.js.map
