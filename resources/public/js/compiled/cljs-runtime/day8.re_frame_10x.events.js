goog.provide('day8.re_frame_10x.events');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('mranderson048.reagent.v0v8v0.reagent.core');
goog.require('cljs.tools.reader.edn');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('day8.re_frame_10x.utils.localstorage');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.string');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.core');
goog.require('re_frame.trace');
goog.require('day8.re_frame_10x.view.container');
goog.require('day8.re_frame_10x.styles');
goog.require('clojure.set');
goog.require('day8.re_frame_10x.metamorphic');
day8.re_frame_10x.events.fixed_after = (function day8$re_frame_10x$events$fixed_after(f){
var G__53819 = new cljs.core.Keyword(null,"id","id",-1388402092);
var G__53820 = new cljs.core.Keyword(null,"after","after",594996914);
var G__53821 = new cljs.core.Keyword(null,"after","after",594996914);
var G__53822 = (function day8$re_frame_10x$events$fixed_after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
});
return (mranderson048.re_frame.v0v10v6.re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__53819,G__53820,G__53821,G__53822) : mranderson048.re_frame.v0v10v6.re_frame.core.__GT_interceptor.call(null,G__53819,G__53820,G__53821,G__53822));
});
day8.re_frame_10x.events.log_trace_QMARK_ = (function day8$re_frame_10x$events$log_trace_QMARK_(trace){
var render_operation_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814))));
var component_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),"");
if((!(render_operation_QMARK_))){
return true;
} else {
return (!(clojure.string.includes_QMARK_(component_path,"devtools outer")));
}
});
day8.re_frame_10x.events.disable_tracing_BANG_ = (function day8$re_frame_10x$events$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb(new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881));
});
day8.re_frame_10x.events.enable_tracing_BANG_ = (function day8$re_frame_10x$events$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb(new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881),(function (p1__53827_SHARP_){
var G__53828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),p1__53827_SHARP_], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53828) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__53828));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.events.dissoc_in = (function day8$re_frame_10x$events$dissoc_in(m,p__53830){
var vec__53831 = p__53830;
var seq__53832 = cljs.core.seq(vec__53831);
var first__53833 = cljs.core.first(seq__53832);
var seq__53832__$1 = cljs.core.next(seq__53832);
var k = first__53833;
var ks = seq__53832__$1;
var keys = vec__53831;
if(ks){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = (day8.re_frame_10x.events.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.events.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame_10x.events.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame_10x.events.read_string_maybe = (function day8$re_frame_10x$events$read_string_maybe(s){
try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),day8.re_frame_10x.utils.utils.default_readers], null),s);
}catch (e53835){var e = e53835;
return null;
}});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),(function (db,p__53837){
var vec__53839 = p__53837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53839,(0),null);
var width_PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53839,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("panel-width-ratio",(function (){var x__4273__auto__ = width_PERCENT_;
var y__4274__auto__ = 0.05;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})());

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null),(function (){var x__4273__auto__ = width_PERCENT_;
var y__4274__auto__ = 0.05;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})());
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),(function (db,p__53842){
var vec__53843 = p__53842;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53843,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53843,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"window-width","window-width",2057825599)], null),width);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),(function (db,p__53846){
var vec__53847 = p__53846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53847,(0),null);
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53847,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("selected-tab",selected_tab);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null),selected_tab);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","toggle-settings","settings/toggle-settings",-1691581698),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878)], null),cljs.core.not);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),(function (db,p__53852){
var vec__53854 = p__53852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53854,(0),null);
var show_panel_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53854,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("show-panel",show_panel_QMARK_);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805),(function (db,_){
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_();

location.reload();

return db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573),(function (db,_){
var now_showing_QMARK_ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)));
var external_panel_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null));
var using_trace_QMARK_ = (function (){var or__4185__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return now_showing_QMARK_;
}
})();
if(now_showing_QMARK_){
day8.re_frame_10x.events.enable_tracing_BANG_();
} else {
if(cljs.core.truth_(external_panel_QMARK_)){
} else {
day8.re_frame_10x.events.disable_tracing_BANG_();
}
}

day8.re_frame_10x.utils.localstorage.save_BANG_("using-trace?",using_trace_QMARK_);

day8.re_frame_10x.utils.localstorage.save_BANG_("show-panel",now_showing_QMARK_);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)], null),using_trace_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),now_showing_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),(function (db,p__53865){
var vec__53866 = p__53865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53866,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53866,(1),null);
var num = parseInt(num_str);
var num__$1 = ((((cljs.core.not(isNaN(num))) && (cljs.core.pos_int_QMARK_(num))))?num:(5));
day8.re_frame_10x.utils.localstorage.save_BANG_("retained-epochs",num__$1);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null),num__$1);
}));
day8.re_frame_10x.events.ignored_event_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__53874) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__53874));
})(),day8.re_frame_10x.events.fixed_after((function (p1__53869_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("ignored-events",p1__53869_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ignored_events,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event-str","event-str",381347778),"",new cljs.core.Keyword(null,"event-id","event-id",2130210178),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__53879){
var vec__53886 = p__53879;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53886,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53886,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ignored_events,id);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__53897){
var vec__53903 = p__53897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53903,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53903,(1),null);
var event_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53903,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe(event_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(ignored_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-str","event-str",381347778)], null),event_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-id","event-id",2130210178)], null),(function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
}));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),day8.re_frame_10x.events.ignored_event_mw,(function (_,p__53916){
var vec__53917 = p__53916;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53917,(0),null);
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53917,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.filtered_view_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__53922) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__53922));
})(),day8.re_frame_10x.events.fixed_after((function (p1__53920_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("filtered-view-trace",p1__53920_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filtered_view_trace,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"",new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__53929){
var vec__53930 = p__53929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53930,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53930,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(filtered_view_trace,id);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__53934){
var vec__53935 = p__53934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53935,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53935,(1),null);
var ns_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53935,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe(ns_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(filtered_view_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)], null),ns_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns","ns",441598760)], null),(function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
}));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),day8.re_frame_10x.events.filtered_view_trace_mw,(function (_,p__53941){
var vec__53942 = p__53941;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53942,(0),null);
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53942,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.low_level_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__53950) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__53950));
})(),day8.re_frame_10x.events.fixed_after((function (p1__53945_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("low-level-trace",p1__53945_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),day8.re_frame_10x.events.low_level_trace_mw,(function (_,p__53951){
var vec__53956 = p__53951;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53956,(0),null);
var low_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53956,(1),null);
return low_level;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),day8.re_frame_10x.events.low_level_trace_mw,(function (low_level,p__53959){
var vec__53964 = p__53959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53964,(0),null);
var trace_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53964,(1),null);
var capture_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53964,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(low_level,trace_type,capture_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),(function (db,p__53967){
var vec__53968 = p__53967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53968,(0),null);
var debug_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53968,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null),debug_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53972 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__53972) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__53972));
})(),day8.re_frame_10x.events.fixed_after((function (p1__53971_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-follows-events?",p1__53971_SHARP_);
}))], null),(function (db,p__53973){
var vec__53974 = p__53973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53974,(0),null);
var follows_events_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53974,(1),null);
return follows_events_QMARK_;
}));
day8.re_frame_10x.events.mount = (function day8$re_frame_10x$events$mount(popup_window,popup_document){
var app = popup_document.getElementById("--re-frame-10x--");
var resize_update_scheduled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handle_window_resize = (function (e){
if(cljs.core.truth_(cljs.core.deref(resize_update_scheduled_QMARK_))){
return null;
} else {
var G__53989_54979 = (function (){
var width_54980 = popup_window.innerWidth;
var height_54981 = popup_window.innerHeight;
var G__53994_54982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-resize","settings/external-window-resize",1415354649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width_54980,new cljs.core.Keyword(null,"height","height",1025178622),height_54981], null)], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53994_54982) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__53994_54982));

return cljs.core.reset_BANG_(resize_update_scheduled_QMARK_,false);
});
(reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__53989_54979) : reagent.impl.batching.next_tick.call(null,G__53989_54979));

return cljs.core.reset_BANG_(resize_update_scheduled_QMARK_,true);
}
});
var handle_window_position = (function (){var pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (){
var map__53999 = cljs.core.deref(pos);
var map__53999__$1 = (((((!((map__53999 == null))))?(((((map__53999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53999):map__53999);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var screen_left = popup_window.screenX;
var screen_top = popup_window.screenY;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left,screen_left)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(top,screen_top)))){
var G__54005_54991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-position","settings/external-window-position",-1880269094),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),screen_left,new cljs.core.Keyword(null,"top","top",-1856271961),screen_top], null)], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54005_54991) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__54005_54991));

return cljs.core.reset_BANG_(pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),screen_left,new cljs.core.Keyword(null,"top","top",-1856271961),screen_top], null));
} else {
return null;
}
});
})();
var window_position_interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var unmount = (function (_){
popup_window.removeEventListener("resize",handle_window_resize);

var G__54006_54992 = cljs.core.deref(window_position_interval);
if((G__54006_54992 == null)){
} else {
clearInterval(G__54006_54992);
}

return null;
});
day8.re_frame_10x.styles.inject_trace_styles(popup_document);

var G__54009_54993 = popup_window;
var G__54010_54994 = "onunload";
var G__54011_54995 = (function (){
var G__54012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54012) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__54012));
});
goog.object.set(G__54009_54993,G__54010_54994,G__54011_54995);

return mranderson048.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.reagent.v0v8v0.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer external",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
popup_window.addEventListener("resize",handle_window_resize);

popup_window.addEventListener("beforeunload",unmount);

return cljs.core.reset_BANG_(window_position_interval,setInterval(handle_window_position,(2000)));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.container.devtools_inner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
})], null))], null),app);
});
/**
 * Originally copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame_10x.events.open_debugger_window = (function day8$re_frame_10x$events$open_debugger_window(p__54021){
var map__54022 = p__54021;
var map__54022__$1 = (((((!((map__54022 == null))))?(((((map__54022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54022):map__54022);
var dimensions = map__54022__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var doc_title = document.title;
var new_window_title = (function (){var G__54032 = ["re-frame-10x | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_title)].join('');
return goog.string.escapeString(G__54032);
})();
var new_window_html = ["<head><title>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_window_title),"</title></head><body style=\"margin: 0px;\"><div id=\"--re-frame-10x--\" class=\"external-window\"></div></body>"].join('');
var temp__5733__auto__ = window.open("about:blank","re-frame-10x-popout",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),",left=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),",top=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
if(cljs.core.truth_(temp__5733__auto__)){
var w = temp__5733__auto__;
var d = w.document;
var temp__5735__auto___54999 = d.getElementById("--re-frame-10x--");
if(cljs.core.truth_(temp__5735__auto___54999)){
var el_55000 = temp__5735__auto___54999;
mranderson048.reagent.v0v8v0.reagent.core.unmount_component_at_node(el_55000);
} else {
}

d.open();

d.write(new_window_html);

var G__54033_55001 = w;
var G__54034_55002 = "onload";
var G__54035_55003 = (function (){
return day8.re_frame_10x.events.mount(w,d);
});
goog.object.set(G__54033_55001,G__54034_55002,G__54035_55003);

d.close();

return true;
} else {
return false;
}
});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","launch-external","global/launch-external",821773827),(function (ctx,_){
if(day8.re_frame_10x.events.open_debugger_window(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)))){
day8.re_frame_10x.utils.localstorage.save_BANG_("external-window?",true);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame_10x.events.dissoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),false], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null)], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375),(function (ctx,_){
day8.re_frame_10x.utils.localstorage.save_BANG_("external-window?",false);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),false),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),true], null)], null)], null)], null);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","external-window-dimensions","settings/external-window-dimensions",-501632461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54037) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54037));
})(),(function (){var G__54038 = (function (p1__54036_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("external-window-dimensions",p1__54036_SHARP_);
});
return (mranderson048.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__54038) : mranderson048.re_frame.v0v10v6.re_frame.core.after.call(null,G__54038));
})()], null),(function (dim,p__54043){
var vec__54044 = p__54043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54044,(0),null);
var new_dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54044,(1),null);
return new_dim;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","external-window-resize","settings/external-window-resize",1415354649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54048) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54048));
})(),(function (){var G__54049 = (function (p1__54047_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("external-window-dimensions",p1__54047_SHARP_);
});
return (mranderson048.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__54049) : mranderson048.re_frame.v0v10v6.re_frame.core.after.call(null,G__54049));
})()], null),(function (dim,p__54057){
var vec__54060 = p__54057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54060,(0),null);
var map__54063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54060,(1),null);
var map__54063__$1 = (((((!((map__54063 == null))))?(((((map__54063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54063):map__54063);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dim,new cljs.core.Keyword(null,"width","width",-384071477),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),height], 0));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","external-window-position","settings/external-window-position",-1880269094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54076) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54076));
})(),(function (){var G__54077 = (function (p1__54074_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("external-window-dimensions",p1__54074_SHARP_);
});
return (mranderson048.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__54077) : mranderson048.re_frame.v0v10v6.re_frame.core.after.call(null,G__54077));
})()], null),(function (dim,p__54079){
var vec__54084 = p__54079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54084,(0),null);
var map__54087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54084,(1),null);
var map__54087__$1 = (((((!((map__54087 == null))))?(((((map__54087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54087):map__54087);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54087__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54087__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dim,new cljs.core.Keyword(null,"left","left",-399115937),left,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"top","top",-1856271961),top], 0));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359),(function (ctx,_){
day8.re_frame_10x.events.enable_tracing_BANG_();

return null;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","disable-tracing","global/disable-tracing",-1646696295),(function (ctx,_){
day8.re_frame_10x.events.disable_tracing_BANG_();

return null;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
var G__54098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__54098) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch_sync.call(null,G__54098));
}));

return null;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__54099){
var vec__54101 = p__54099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54101,(0),null);
var unloading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54101,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));
day8.re_frame_10x.events.save_filter_items = (function day8$re_frame_10x$events$save_filter_items(filter_items){
return day8.re_frame_10x.utils.localstorage.save_BANG_("filter-items",filter_items);
});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,p__54114){
var vec__54119 = p__54114;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54119,(0),null);
var filter_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54119,(1),null);
day8.re_frame_10x.events.save_filter_items(filter_items);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null),filter_items);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54127) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54127));
})()], null),(function (filter_items,p__54135){
var vec__54136 = p__54135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54136,(0),null);
var filter_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54136,(1),null);
var filter_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54136,(2),null);
var new_db = (cljs.core.truth_(cljs.core.some((function (p1__54122_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__54122_SHARP_));
}),filter_items))?null:(function (){var filter_items__$1 = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type))?cljs.core.some((function (p1__54125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__54125_SHARP_));
}),filter_items):false))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54126_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__54126_SHARP_));
}),filter_items):filter_items);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filter_items__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case(filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
})());
day8.re_frame_10x.events.save_filter_items(new_db);

return new_db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54152) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54152));
})()], null),(function (filter_items,p__54157){
var vec__54159 = p__54157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54159,(0),null);
var filter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54159,(1),null);
var new_db = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54149_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54149_SHARP_),filter_id);
}),filter_items);
day8.re_frame_10x.events.save_filter_items(new_db);

return new_db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273),(function (db,_){
var new_db = day8.re_frame_10x.events.dissoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
day8.re_frame_10x.events.save_filter_items(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null)));

return new_db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-all-expansions","traces/toggle-all-expansions",1714341025),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54170) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54170));
})()], null),(function (trace_detail_expansions,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_detail_expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-trace","traces/toggle-trace",-995872006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54182) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54182));
})()], null),(function (expansions,p__54187){
var vec__54189 = p__54187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54189,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54189,(1),null);
var showing_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),(function (p1__54181_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not(p1__54181_SHARP_);
}
}));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54198) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54198));
})()], null),(function (categories,p__54199){
var vec__54200 = p__54199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54200,(0),null);
var new_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54200,(1),null);
var new_categories__$1 = ((clojure.set.superset_QMARK_(categories,new_categories))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(categories,new_categories):clojure.set.union.cljs$core$IFn$_invoke$arity$2(categories,new_categories));
day8.re_frame_10x.utils.localstorage.save_BANG_("categories",new_categories__$1);

return new_categories__$1;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54214) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54214));
})()], null),(function (categories,p__54220){
var vec__54221 = p__54220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54221,(0),null);
var new_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54221,(1),null);
return new_categories;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665),new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54230) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54230));
})(),day8.re_frame_10x.events.fixed_after((function (p1__54229_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("show-epoch-traces?",p1__54229_SHARP_);
}))], null),(function (_,p__54235){
var vec__54236 = p__54235;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54236,(0),null);
var show_epoch_traces_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54236,(1),null);
return show_epoch_traces_QMARK_;
}));
day8.re_frame_10x.events.app_db_path_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54245) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54245));
})(),day8.re_frame_10x.events.fixed_after((function (p1__54244_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-paths",p1__54244_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","create-path","app-db/create-path",-1109143265),day8.re_frame_10x.events.app_db_path_mw,(function (paths,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","update-path","app-db/update-path",-2057697283),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__54262){
var vec__54263 = p__54262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54263,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54263,(1),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54263,(2),null);
var path = day8.re_frame_10x.events.read_string_maybe(path_str);
var paths__$1 = cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str);
if((((((!((path == null)))) && (cljs.core.sequential_QMARK_(path)))) || (clojure.string.blank_QMARK_(path_str)))){
return cljs.core.assoc_in(cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
} else {
return cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),false);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","update-path-blur","app-db/update-path-blur",637142516),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__54282){
var vec__54283 = p__54282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54283,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54283,(1),null);
var map__54288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path_id);
var map__54288__$1 = (((((!((map__54288 == null))))?(((((map__54288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54288):map__54288);
var valid_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-path-visibility","app-db/set-path-visibility",1482573598),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__54307){
var vec__54310 = p__54307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54310,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54310,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54310,(2),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-diff-visibility","app-db/set-diff-visibility",709297655),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__54322){
var vec__54324 = p__54322;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(1),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__54342){
var vec__54343 = p__54342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54343,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54343,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(paths,path_id);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),day8.re_frame_10x.events.app_db_path_mw,(function (db,p__54355){
var vec__54360 = p__54355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54360,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54360,(1),null);
return paths;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),(function (db,p__54380){
var vec__54384 = p__54380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54384,(0),null);
var search_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54384,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),search_string);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54391) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54391));
})()], null),(function (db,p__54400){
var vec__54401 = p__54400;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54401,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54401,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-json-ml-expansions",paths);

return paths;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54410) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54410));
})()], null),(function (paths,p__54418){
var vec__54419 = p__54418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54419,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54419,(1),null);
var new_paths = ((cljs.core.contains_QMARK_(paths,path))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(paths,path):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path));
day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-json-ml-expansions",new_paths);

return new_paths;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54427) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54427));
})()], null),(function (paths,_){
return re_frame.interop.reagent_id(re_frame.db.app_db);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),(function (db,p__54448){
var vec__54452 = p__54448;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54452,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54452,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)))){
var epochs_55072 = new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
var match_id_55073 = (function (){var or__4185__auto__ = new_id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs_55072,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var match_55074 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(epochs_55072,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),match_id_55073], null));
var event_55075 = day8.re_frame_10x.metamorphic.matched_event(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_55074));
var temp__5739__auto___55081 = day8.re_frame_10x.metamorphic.app_db_after(event_55075);
if((temp__5739__auto___55081 == null)){
} else {
var new_db_55084 = temp__5739__auto___55081;
cljs.core.reset_BANG_(re_frame.db.app_db,new_db_55084);
}
} else {
}

return db;
}));
day8.re_frame_10x.events.first_match_id = (function day8$re_frame_10x$events$first_match_id(m){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(m)));
});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),(function (p__54504,p__54505){
var map__54506 = p__54504;
var map__54506__$1 = (((((!((map__54506 == null))))?(((((map__54506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54506):map__54506);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54506__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54507 = p__54505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54507,(0),null);
var new_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54507,(1),null);
var temp__5733__auto__ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.log_trace_QMARK_,new_traces));
if(cljs.core.truth_(temp__5733__auto__)){
var filtered_traces = temp__5733__auto__;
var number_of_epochs_to_retain = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null));
var events_to_ignore = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)))));
var previous_traces = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),cljs.core.PersistentVector.EMPTY);
var parse_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535)], null),day8.re_frame_10x.metamorphic.initial_parse_state);
var map__54525 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null));
var map__54525__$1 = (((((!((map__54525 == null))))?(((((map__54525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54525):map__54525);
var drop_re_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033));
var drop_reagent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"reagent","reagent",2131627322));
var all_traces = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,previous_traces,filtered_traces);
var parse_state__$1 = day8.re_frame_10x.metamorphic.parse_traces(parse_state,filtered_traces);
var new_matches = new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(parse_state__$1);
var previous_matches = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches","matches",635497998)], null),cljs.core.PersistentVector.EMPTY);
var parse_state__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_state__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY);
var new_matches__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (match){
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.matched_event(match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
return cljs.core.contains_QMARK_(events_to_ignore,cljs.core.first(event));
}),new_matches);
var subscription_info = day8.re_frame_10x.metamorphic.subscription_info(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092)], null),cljs.core.PersistentArrayMap.EMPTY),filtered_traces,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)));
var sub_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981)], null),day8.re_frame_10x.metamorphic.initial_sub_state);
var subscription_match_state = day8.re_frame_10x.metamorphic.subscription_match_state(sub_state,all_traces,new_matches__$1);
var subscription_matches = cljs.core.rest(subscription_match_state);
var new_sub_state = cljs.core.last(subscription_match_state);
var timing = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (match){
var epoch_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.utils.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match)))),all_traces);
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epoch_traces,(0));
var event_handler_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_handler_QMARK_,epoch_traces));
var dofx_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_dofx_QMARK_,epoch_traces));
var event_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_run_QMARK_,epoch_traces));
var finish_run = (function (){var or__4185__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.finish_run_QMARK_,epoch_traces));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(epoch_traces);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897),day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,finish_run),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_trace),new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_handler_trace),new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(dofx_trace)], null);
}),new_matches__$1);
var new_matches__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (match,sub_match,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match-info","match-info",666319879),match,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),sub_match,new cljs.core.Keyword(null,"timing","timing",-1849225195),t], null);
}),new_matches__$1,subscription_matches,timing);
var quiescent_QMARK_ = (function (){var or__4185__auto__ = cljs.core.seq(new_matches__$2);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.quiescent_QMARK_,filtered_traces);
}
})();
var all_matches = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,previous_matches,new_matches__$2);
var retained_matches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(number_of_epochs_to_retain,all_matches));
var first_id_to_retain = day8.re_frame_10x.events.first_match_id(cljs.core.first(retained_matches));
var retained_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1((function (p1__54493_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54493_SHARP_) < first_id_to_retain);
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
var or__4185__auto__ = (cljs.core.truth_(drop_reagent)?day8.re_frame_10x.metamorphic.low_level_reagent_trace_QMARK_(trace):null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.truth_(drop_re_frame)){
return day8.re_frame_10x.metamorphic.low_level_re_frame_trace_QMARK_(trace);
} else {
return null;
}
}
}))),all_traces);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),retained_traces),new cljs.core.Keyword(null,"epochs","epochs",1796936425),(function (epochs){
var current_index = new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(epochs,new cljs.core.Keyword(null,"matches","matches",635497998),retained_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.first_match_id,cljs.core.identity)),retained_matches),new cljs.core.Keyword(null,"match-ids","match-ids",752973161),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.first_match_id,retained_matches),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535),parse_state__$2,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new_sub_state,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092),subscription_info,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),((cljs.core.seq(new_matches__$2))?null:current_id),new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376),((cljs.core.seq(new_matches__$2))?null:current_index)], 0));
})),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(quiescent_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","quiescent","epochs/quiescent",1889183263)], null):null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","previous-epoch","epochs/previous-epoch",480286026),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54609) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54609));
})()], null),(function (p__54610,_){
var map__54611 = p__54610;
var map__54611__$1 = (((((!((map__54611 == null))))?(((((map__54611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54611):map__54611);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5737__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5737__auto__ == null)){
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db),(cljs.core.count(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db)) - (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
} else {
var current_id = temp__5737__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,x);
}),match_ids);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match_ids,(match_array_index - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","next-epoch","epochs/next-epoch",-1703589978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54623) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54623));
})()], null),(function (p__54625,_){
var map__54626 = p__54625;
var map__54626__$1 = (((((!((map__54626 == null))))?(((((map__54626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54626):map__54626);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5737__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5737__auto__ == null)){
var new_id = day8.re_frame_10x.utils.utils.last_in_vec(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
} else {
var current_id = temp__5737__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,x);
}),match_ids);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match_ids,(match_array_index + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","most-recent-epoch","epochs/most-recent-epoch",1551402402),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54654) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54654));
})()], null),(function (p__54659,_){
var map__54661 = p__54659;
var map__54661__$1 = (((((!((map__54661 == null))))?(((((map__54661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54661):map__54661);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54661__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),null], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),day8.re_frame_10x.utils.utils.last_in_vec(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db))], null)], null);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","replay","epochs/replay",315529905),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54674) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54674));
})()], null),(function (epochs,_){
var current_epoch_id = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var event_trace = day8.re_frame_10x.metamorphic.matched_event(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),current_epoch_id,new cljs.core.Keyword(null,"match-info","match-info",666319879)], null)));
var app_db_before = day8.re_frame_10x.metamorphic.app_db_before(event_trace);
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(event_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
cljs.core.reset_BANG_(re_frame.db.app_db,app_db_before);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(epochs,new cljs.core.Keyword(null,"replay","replay",-681122389),event);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","quiescent","epochs/quiescent",1889183263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54683) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54683));
})()], null),(function (db,_){
var temp__5737__auto__ = new cljs.core.Keyword(null,"replay","replay",-681122389).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5737__auto__ == null)){
return db;
} else {
var event_to_replay = temp__5737__auto__;
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event_to_replay) : re_frame.core.dispatch.call(null,event_to_replay));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"replay","replay",-681122389));
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868),(function (db){
re_frame.trace.reset_tracing_BANG_();

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"epochs","epochs",1796936425),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"traces","traces",-1301138004)], 0));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54694) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54694));
})()], null),(function (_,p__54707){
var vec__54712 = p__54707;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54712,(0),null);
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54712,(1),null);
return ignore_QMARK_;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","open-pod?","subs/open-pod?",-57249156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54715) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54715));
})()], null),(function (expansions,p__54717){
var vec__54719 = p__54717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54719,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54719,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54719,(2),null);
return cljs.core.assoc_in(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","set-diff-visibility","subs/set-diff-visibility",305207138),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54722) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54722));
})()], null),(function (expansions,p__54723){
var vec__54728 = p__54723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54728,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54728,(1),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54728,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","set-pinned","subs/set-pinned",980934095),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"pinned","pinned",-1216085339)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54731) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54731));
})()], null),(function (pinned,p__54732){
var vec__54735 = p__54732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54735,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54735,(1),null);
var pinned_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54735,(2),null);
return cljs.core.assoc_in(pinned,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null),pinned_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","set-filter","subs/set-filter",-2133913941),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"filter-str","filter-str",1974484789)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54738) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54738));
})()], null),(function (_,p__54739){
var vec__54740 = p__54739;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54740,(0),null);
var filter_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54740,(1),null);
return filter_value;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","set-code-visibility","code/set-code-visibility",-1072995010),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code-open?","code-open?",1228336744)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54743) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54743));
})()], null),(function (code_open_QMARK_,p__54745){
var vec__54750 = p__54745;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54750,(0),null);
var open_QMARK__path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54750,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54750,(2),null);
return cljs.core.assoc_in(code_open_QMARK_,open_QMARK__path,open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54756) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54756));
})()], null),(function (form,p__54759){
var vec__54762 = p__54759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54762,(0),null);
var new_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54762,(1),null);
return new_form;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54768) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54768));
})()], null),(function (form,p__54769){
var vec__54770 = p__54769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770,(0),null);
var new_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new_form)){
return null;
} else {
return new_form;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","set-show-all-code?","code/set-show-all-code?",1632099789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54774) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54774));
})()], null),(function (_show_all_code_QMARK_,p__54778){
var vec__54779 = p__54778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54779,(0),null);
var new_show_all_code_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54779,(1),null);
return new_show_all_code_QMARK_;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54784) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54784));
})()], null),(function (current_state,p__54785){
var vec__54787 = p__54785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54787,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54787,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"running","running",1554969103))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_state,new cljs.core.Keyword(null,"start","start",-355208981))))){
return new cljs.core.Keyword(null,"re-running","re-running",-97387070);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_state,new cljs.core.Keyword(null,"start","start",-355208981))){
return new cljs.core.Keyword(null,"running","running",1554969103);
} else {
return new cljs.core.Keyword(null,"end","end",-268185958);
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("component","set-direction","component/set-direction",2005265603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54790) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54790));
})()], null),(function (component,p__54793){
var vec__54794 = p__54793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54794,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54794,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("errors","dismiss-popup-failed","errors/dismiss-popup-failed",-286737091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__54797) : mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,G__54797));
})()], null),(function (errors,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(errors,new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682));
}));

//# sourceMappingURL=day8.re_frame_10x.events.js.map
