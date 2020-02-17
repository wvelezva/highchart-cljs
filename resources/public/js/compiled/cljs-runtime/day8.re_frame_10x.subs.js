goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__53385_54139 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__53386_54140 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53385_54139,G__53386_54140) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53385_54139,G__53386_54140));
var G__53396_54141 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__53397_54142 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53398_54143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53399_54144 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53396_54141,G__53397_54142,G__53398_54143,G__53399_54144) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53396_54141,G__53397_54142,G__53398_54143,G__53399_54144));
var G__53400_54145 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__53401_54146 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53402_54147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__53403_54148 = (function (panel_width_PERCENT_,p__53405){
var vec__53410 = p__53405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53410,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53410,(1),null);
return (((function (){var G__53413 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__53413);
})() * n) / 100.0);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53400_54145,G__53401_54146,G__53402_54147,G__53403_54148) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53400_54145,G__53401_54146,G__53402_54147,G__53403_54148));
var G__53419_54162 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__53420_54163 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53421_54164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53422_54165 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53419_54162,G__53420_54163,G__53421_54164,G__53422_54165) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53419_54162,G__53420_54163,G__53421_54164,G__53422_54165));
var G__53430_54166 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__53431_54167 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53432_54168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__53433_54169 = (function (width,p__53437){
var vec__53438 = p__53437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53438,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53438,(1),null);
return ((function (){var G__53441 = (width / n);
return Math.ceil(G__53441);
})() * n);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53430_54166,G__53431_54167,G__53432_54168,G__53433_54169) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53430_54166,G__53431_54167,G__53432_54168,G__53433_54169));
var G__53442_54171 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__53443_54172 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53444_54173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53445_54174 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53442_54171,G__53443_54172,G__53444_54173,G__53445_54174) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53442_54171,G__53443_54172,G__53444_54173,G__53445_54174));
var G__53447_54177 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__53448_54178 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53449_54179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53450_54180 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53447_54177,G__53448_54178,G__53449_54179,G__53450_54180) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53447_54177,G__53448_54178,G__53449_54179,G__53450_54180));
var G__53451_54183 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__53452_54184 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53453_54185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53454_54186 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53451_54183,G__53452_54184,G__53453_54185,G__53454_54186) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53451_54183,G__53452_54184,G__53453_54185,G__53454_54186));
var G__53456_54194 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__53457_54195 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53458_54196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53459_54197 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53456_54194,G__53457_54195,G__53458_54196,G__53459_54197) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53456_54194,G__53457_54195,G__53458_54196,G__53459_54197));
var G__53460_54204 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__53461_54205 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53462_54206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53463_54207 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53460_54204,G__53461_54205,G__53462_54206,G__53463_54207) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53460_54204,G__53461_54205,G__53462_54206,G__53463_54207));
var G__53465_54215 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__53466_54216 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53467_54217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53468_54218 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53465_54215,G__53466_54216,G__53467_54217,G__53468_54218) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53465_54215,G__53466_54216,G__53467_54217,G__53468_54218));
var G__53469_54224 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__53470_54225 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53471_54226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53472_54227 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53469_54224,G__53470_54225,G__53471_54226,G__53472_54227) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53469_54224,G__53470_54225,G__53471_54226,G__53472_54227));
var G__53474_54231 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__53475_54232 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53476_54233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53477_54234 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53474_54231,G__53475_54232,G__53476_54233,G__53477_54234) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53474_54231,G__53475_54232,G__53476_54233,G__53477_54234));
var G__53478_54241 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__53479_54242 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53478_54241,G__53479_54242) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53478_54241,G__53479_54242));
var G__53480_54246 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__53481_54247 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53482_54248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53483_54249 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53480_54246,G__53481_54247,G__53482_54248,G__53483_54249) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53480_54246,G__53481_54247,G__53482_54248,G__53483_54249));
var G__53484_54253 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__53485_54254 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53486_54255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53487_54256 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53484_54253,G__53485_54254,G__53486_54255,G__53487_54256) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53484_54253,G__53485_54254,G__53486_54255,G__53487_54256));
var G__53492_54258 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__53493_54259 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53494_54260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53495_54261 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53491_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__53491_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__53491_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53492_54258,G__53493_54259,G__53494_54260,G__53495_54261) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53492_54258,G__53493_54259,G__53494_54260,G__53495_54261));
var G__53497_54266 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__53498_54267 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53499_54268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53500_54269 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53497_54266,G__53498_54267,G__53499_54268,G__53500_54269) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53497_54266,G__53498_54267,G__53499_54268,G__53500_54269));
var G__53506_54273 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__53507_54274 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53508_54275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53509_54276 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53506_54273,G__53507_54274,G__53508_54275,G__53509_54276) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53506_54273,G__53507_54274,G__53508_54275,G__53509_54276));
var G__53511_54278 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__53512_54279 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53513_54280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__53514_54281 = (function (expansions,p__53516){
var vec__53517 = p__53516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53517,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53517,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53511_54278,G__53512_54279,G__53513_54280,G__53514_54281) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53511_54278,G__53512_54279,G__53513_54280,G__53514_54281));
var G__53520_54291 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__53521_54292 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53522_54293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53523_54294 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53520_54291,G__53521_54292,G__53522_54293,G__53523_54294) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53520_54291,G__53521_54292,G__53522_54293,G__53523_54294));
var G__53524_54297 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__53525_54298 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53524_54297,G__53525_54298) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53524_54297,G__53525_54298));
var G__53528_54302 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__53529_54303 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53528_54302,G__53529_54303) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53528_54302,G__53529_54303));
var G__53532_54305 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__53533_54306 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53532_54305,G__53533_54306) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53532_54305,G__53533_54306));
var G__53535_54313 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__53536_54314 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53535_54313,G__53536_54314) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53535_54313,G__53536_54314));
var G__53538_54316 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__53539_54317 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53538_54316,G__53539_54317) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53538_54316,G__53539_54317));
var G__53541_54318 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__53542_54319 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53543_54320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__53544_54321 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53541_54318,G__53542_54319,G__53543_54320,G__53544_54321) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53541_54318,G__53542_54319,G__53543_54320,G__53544_54321));
var G__53551_54328 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__53552_54329 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53553_54330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53554_54331 = (function (traces,_){
return cljs.core.count(traces);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53551_54328,G__53552_54329,G__53553_54330,G__53554_54331) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53551_54328,G__53552_54329,G__53553_54330,G__53554_54331));
var G__53555_54333 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__53556_54334 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53557_54335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53558_54336 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53559_54337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__53560_54338 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53561_54339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__53562_54340 = (function (p__53566,_){
var vec__53567 = p__53566;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53567,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53567,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53567,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__53555_54333,G__53556_54334,G__53557_54335,G__53558_54336,G__53559_54337,G__53560_54338,G__53561_54339,G__53562_54340) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53555_54333,G__53556_54334,G__53557_54335,G__53558_54336,G__53559_54337,G__53560_54338,G__53561_54339,G__53562_54340));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__53575,_){
var vec__53577 = p__53575;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53577,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53577,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__53584_54393 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__53585_54394 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53586_54395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53587_54396 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53588_54397 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53589_54398 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53584_54393,G__53585_54394,G__53586_54395,G__53587_54396,G__53588_54397,G__53589_54398) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53584_54393,G__53585_54394,G__53586_54395,G__53587_54396,G__53588_54397,G__53589_54398));
var G__53590_54404 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__53591_54405 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53592_54406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53593_54407 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53594_54408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53595_54409 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53590_54404,G__53591_54405,G__53592_54406,G__53593_54407,G__53594_54408,G__53595_54409) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53590_54404,G__53591_54405,G__53592_54406,G__53593_54407,G__53594_54408,G__53595_54409));
var G__53596_54414 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__53597_54415 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53598_54416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__53599_54417 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53596_54414,G__53597_54415,G__53598_54416,G__53599_54417) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53596_54414,G__53597_54415,G__53598_54416,G__53599_54417));
var G__53602_54422 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__53603_54423 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53602_54422,G__53603_54423) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53602_54422,G__53603_54423));
var G__53605_54424 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__53606_54425 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53605_54424,G__53606_54425) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53605_54424,G__53606_54425));
var G__53607_54429 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__53608_54430 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53609_54431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__53610_54432 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53607_54429,G__53608_54430,G__53609_54431,G__53610_54432) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53607_54429,G__53608_54430,G__53609_54431,G__53610_54432));
var G__53613_54435 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__53614_54436 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53613_54435,G__53614_54436) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53613_54435,G__53614_54436));
var G__53616_54441 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__53617_54442 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53618_54443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53619_54444 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53620_54445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53621_54446 = (function (p__53622,_){
var vec__53623 = p__53622;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53623,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53623,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53616_54441,G__53617_54442,G__53618_54443,G__53619_54444,G__53620_54445,G__53621_54446) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53616_54441,G__53617_54442,G__53618_54443,G__53619_54444,G__53620_54445,G__53621_54446));
var G__53627_54470 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__53628_54471 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53629_54472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53630_54473 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53627_54470,G__53628_54471,G__53629_54472,G__53630_54473) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53627_54470,G__53628_54471,G__53629_54472,G__53630_54473));
var G__53631_54480 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__53632_54481 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53633_54482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53634_54483 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53631_54480,G__53632_54481,G__53633_54482,G__53634_54483) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53631_54480,G__53632_54481,G__53633_54482,G__53634_54483));
var G__53636_54484 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__53637_54485 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53638_54486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53639_54487 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53636_54484,G__53637_54485,G__53638_54486,G__53639_54487) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53636_54484,G__53637_54485,G__53638_54486,G__53639_54487));
var G__53640_54489 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__53641_54490 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53642_54491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53643_54492 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53640_54489,G__53641_54490,G__53642_54491,G__53643_54492) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53640_54489,G__53641_54490,G__53642_54491,G__53643_54492));
var G__53644_54497 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__53645_54498 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53646_54499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53647_54500 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53644_54497,G__53645_54498,G__53646_54499,G__53647_54500) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53644_54497,G__53645_54498,G__53646_54499,G__53647_54500));
var G__53649_54510 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__53650_54511 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53651_54512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53652_54513 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53649_54510,G__53650_54511,G__53651_54512,G__53652_54513) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53649_54510,G__53650_54511,G__53651_54512,G__53652_54513));
var G__53653_54515 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__53654_54516 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53655_54517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53656_54518 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53653_54515,G__53654_54516,G__53655_54517,G__53656_54518) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53653_54515,G__53654_54516,G__53655_54517,G__53656_54518));
var G__53657_54520 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__53658_54521 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53659_54522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53660_54523 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53657_54520,G__53658_54521,G__53659_54522,G__53660_54523) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53657_54520,G__53658_54521,G__53659_54522,G__53660_54523));
var G__53661_54526 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__53662_54528 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53663_54530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53664_54532 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53661_54526,G__53662_54528,G__53663_54530,G__53664_54532) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53661_54526,G__53662_54528,G__53663_54530,G__53664_54532));
var G__53665_54553 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__53666_54554 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53667_54555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53668_54556 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53669_54557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53670_54558 = (function (p__53672){
var vec__53673 = p__53672;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53673,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53673,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53665_54553,G__53666_54554,G__53667_54555,G__53668_54556,G__53669_54557,G__53670_54558) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53665_54553,G__53666_54554,G__53667_54555,G__53668_54556,G__53669_54557,G__53670_54558));
var G__53682_54562 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__53683_54563 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53684_54564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53685_54565 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53686_54566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53687_54567 = (function (p__53688){
var vec__53690 = p__53688;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53690,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53690,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53682_54562,G__53683_54563,G__53684_54564,G__53685_54565,G__53686_54566,G__53687_54567) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53682_54562,G__53683_54563,G__53684_54564,G__53685_54565,G__53686_54566,G__53687_54567));
var G__53693_54574 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__53694_54575 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53695_54576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53696_54577 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53693_54574,G__53694_54575,G__53695_54576,G__53696_54577) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53693_54574,G__53694_54575,G__53695_54576,G__53696_54577));
var G__53698_54579 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__53699_54580 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53700_54581 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53701_54582 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53697_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__53697_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__53697_SHARP_)));
}),traces);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53698_54579,G__53699_54580,G__53700_54581,G__53701_54582) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53698_54579,G__53699_54580,G__53700_54581,G__53701_54582));
var G__53702_54591 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__53703_54592 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53704_54593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53705_54594 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53702_54591,G__53703_54592,G__53704_54593,G__53705_54594) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53702_54591,G__53703_54592,G__53704_54593,G__53705_54594));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__53714 = arguments.length;
switch (G__53714) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___54606 = arguments.length;
var i__4790__auto___54607 = (0);
while(true){
if((i__4790__auto___54607 < len__4789__auto___54606)){
args_arr__4810__auto__.push((arguments[i__4790__auto___54607]));

var G__54608 = (i__4790__auto___54607 + (1));
i__4790__auto___54607 = G__54608;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq53710){
var G__53711 = cljs.core.first(seq53710);
var seq53710__$1 = cljs.core.next(seq53710);
var G__53712 = cljs.core.first(seq53710__$1);
var seq53710__$2 = cljs.core.next(seq53710__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53711,G__53712,seq53710__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__53722_54615 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__53723_54616 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53724_54617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53725_54618 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53726_54619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53727_54620 = (function (p__53728,p__53729){
var vec__53731 = p__53728;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53731,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53731,(1),null);
var vec__53734 = p__53729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53734,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53734,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__53738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53738,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53738,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53722_54615,G__53723_54616,G__53724_54617,G__53725_54618,G__53726_54619,G__53727_54620) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53722_54615,G__53723_54616,G__53724_54617,G__53725_54618,G__53726_54619,G__53727_54620));
var G__53746_54641 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__53747_54642 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53748_54643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53749_54645 = (function (match){
var map__53751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__53751__$1 = (((((!((map__53751 == null))))?(((((map__53751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53751):map__53751);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53751__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53751__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53751__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53751__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53746_54641,G__53747_54642,G__53748_54643,G__53749_54645) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53746_54641,G__53747_54642,G__53748_54643,G__53749_54645));
var G__53756_54670 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__53757_54671 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53758_54672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53759_54673 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53756_54670,G__53757_54671,G__53758_54672,G__53759_54673) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53756_54670,G__53757_54671,G__53758_54672,G__53759_54673));
var G__53762_54675 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__53763_54676 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53764_54677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53765_54678 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53762_54675,G__53763_54676,G__53764_54677,G__53765_54678) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53762_54675,G__53763_54676,G__53764_54677,G__53765_54678));
var G__53767_54681 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__53768_54682 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53767_54681,G__53768_54682) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53767_54681,G__53768_54682));
var G__53770_54684 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__53771_54685 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53772_54686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53773_54687 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53770_54684,G__53771_54685,G__53772_54686,G__53773_54687) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53770_54684,G__53771_54685,G__53772_54686,G__53773_54687));
var G__53775_54688 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__53776_54689 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53777_54690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53778_54691 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53775_54688,G__53776_54689,G__53777_54690,G__53778_54691) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53775_54688,G__53776_54689,G__53777_54690,G__53778_54691));
var G__53781_54695 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__53782_54696 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53783_54697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53784_54698 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53781_54695,G__53782_54696,G__53783_54697,G__53784_54698) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53781_54695,G__53782_54696,G__53783_54697,G__53784_54698));
var G__53786_54708 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__53787_54709 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53788_54710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53789_54711 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53786_54708,G__53787_54709,G__53788_54710,G__53789_54711) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53786_54708,G__53787_54709,G__53788_54710,G__53789_54711));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__53790_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__53790_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53796){
return cljs.core.coll_QMARK_(G__53796);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53797){
return cljs.core.map_QMARK_(G__53797);
}),(function (G__53797){
return cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__53797){
return cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__53797){
return cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__53797){
return cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__53797){
return cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__53797){
return cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__53797){
return ((cljs.core.map_QMARK_(G__53797)) && (cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__53797,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53829){
return cljs.core.coll_QMARK_(G__53829);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__53834 = sub_type;
var G__53834__$1 = (((G__53834 instanceof cljs.core.Keyword))?G__53834.fqn:null);
switch (G__53834__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__54775 = (exp - (1));
var G__54776 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__54777 = cljs.core.rest(order__$1);
exp = G__54775;
total = G__54776;
order__$1 = G__54777;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__53850 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__53850__$1 = (((G__53850 instanceof cljs.core.Keyword))?G__53850.fqn:null);
switch (G__53850__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__53857,p__53858){
var vec__53859 = p__53857;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53859,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53859,(1),null);
var vec__53862 = p__53858;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53862,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__53870_54810 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__53871_54811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53872_54812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53873_54813 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53870_54810,G__53871_54811,G__53872_54812,G__53873_54813) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53870_54810,G__53871_54811,G__53872_54812,G__53873_54813));
var G__53875_54814 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__53876_54815 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53877_54816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53878_54817 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53875_54814,G__53876_54815,G__53877_54816,G__53878_54817) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53875_54814,G__53876_54815,G__53877_54816,G__53878_54817));
var G__53880_54820 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__53881_54821 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53882_54822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53883_54823 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53884_54824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__53885_54825 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53880_54820,G__53881_54821,G__53882_54822,G__53883_54823,G__53884_54824,G__53885_54825) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53880_54820,G__53881_54821,G__53882_54822,G__53883_54823,G__53884_54824,G__53885_54825));
var G__53889_54834 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__53890_54835 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53891_54836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53892_54837 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53893_54838 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__53894_54839 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53889_54834,G__53890_54835,G__53891_54836,G__53892_54837,G__53893_54838,G__53894_54839) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53889_54834,G__53890_54835,G__53891_54836,G__53892_54837,G__53893_54838,G__53894_54839));
var G__53898_54842 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__53899_54843 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53900_54844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53901_54845 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53898_54842,G__53899_54843,G__53900_54844,G__53901_54845) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53898_54842,G__53899_54843,G__53900_54844,G__53901_54845));
var G__53906_54850 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__53907_54851 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53908_54852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53909_54853 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53910_54854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__53911_54855 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53912_54856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__53913_54857 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53914_54858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__53915_54859 = (function (p__53921){
var vec__53923 = p__53921;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53923,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53923,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53923,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53923,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__53933 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__53933__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__53933):G__53933);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53938){
var map__53939 = p__53938;
var map__53939__$1 = (((((!((map__53939 == null))))?(((((map__53939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53939):map__53939);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53939__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53939__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__53933__$1);
} else {
return G__53933__$1;
}
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__53906_54850,G__53907_54851,G__53908_54852,G__53909_54853,G__53910_54854,G__53911_54855,G__53912_54856,G__53913_54857,G__53914_54858,G__53915_54859) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53906_54850,G__53907_54851,G__53908_54852,G__53909_54853,G__53910_54854,G__53911_54855,G__53912_54856,G__53913_54857,G__53914_54858,G__53915_54859));
var G__53946_54874 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__53947_54875 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53948_54876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__53949_54877 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53946_54874,G__53947_54875,G__53948_54876,G__53949_54877) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53946_54874,G__53947_54875,G__53948_54876,G__53949_54877));
var G__53952_54879 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__53953_54880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53954_54881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53955_54882 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53952_54879,G__53953_54880,G__53954_54881,G__53955_54882) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53952_54879,G__53953_54880,G__53954_54881,G__53955_54882));
var G__53960_54886 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__53961_54887 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53962_54888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53963_54889 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53960_54886,G__53961_54887,G__53962_54888,G__53963_54889) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53960_54886,G__53961_54887,G__53962_54888,G__53963_54889));
var G__53977_54890 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__53978_54891 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53979_54892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53980_54893 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53977_54890,G__53978_54891,G__53979_54892,G__53980_54893) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53977_54890,G__53978_54891,G__53979_54892,G__53980_54893));
var G__53981_54895 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__53982_54896 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53983_54897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53984_54898 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53981_54895,G__53982_54896,G__53983_54897,G__53984_54898) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53981_54895,G__53982_54896,G__53983_54897,G__53984_54898));
var G__53985_54900 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__53986_54901 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53987_54902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53988_54903 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53985_54900,G__53986_54901,G__53987_54902,G__53988_54903) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53985_54900,G__53986_54901,G__53987_54902,G__53988_54903));
var G__53990_54904 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__53991_54905 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53992_54906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53993_54907 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53990_54904,G__53991_54905,G__53992_54906,G__53993_54907) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53990_54904,G__53991_54905,G__53992_54906,G__53993_54907));
var G__53995_54908 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__53996_54909 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53997_54910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53998_54911 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53995_54908,G__53996_54909,G__53997_54910,G__53998_54911) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__53995_54908,G__53996_54909,G__53997_54910,G__53998_54911));
var G__54001_54912 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__54002_54913 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54003_54914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__54004_54915 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54001_54912,G__54002_54913,G__54003_54914,G__54004_54915) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54001_54912,G__54002_54913,G__54003_54914,G__54004_54915));
var G__54007_54916 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__54008_54917 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54007_54916,G__54008_54917) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54007_54916,G__54008_54917));
var G__54013_54920 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__54014_54921 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54015_54922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__54016_54923 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54013_54920,G__54014_54921,G__54015_54922,G__54016_54923) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54013_54920,G__54014_54921,G__54015_54922,G__54016_54923));
var G__54017_54928 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__54018_54929 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54019_54930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__54020_54931 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54017_54928,G__54018_54929,G__54019_54930,G__54020_54931) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54017_54928,G__54018_54929,G__54019_54930,G__54020_54931));
var G__54024_54932 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__54025_54933 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54026_54934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__54027_54935 = (function (form,_){
return zprint.core.zprint_str(form);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54024_54932,G__54025_54933,G__54026_54934,G__54027_54935) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54024_54932,G__54025_54933,G__54026_54934,G__54027_54935));
var G__54039_54941 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__54040_54942 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54041_54943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__54042_54944 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54039_54941,G__54040_54942,G__54041_54943,G__54042_54944) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54039_54941,G__54040_54942,G__54041_54943,G__54042_54944));
var G__54053_54948 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__54054_54949 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54055_54950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__54056_54951 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54053_54948,G__54054_54949,G__54055_54950,G__54056_54951) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54053_54948,G__54054_54949,G__54055_54950,G__54056_54951));
var G__54064_54952 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__54065_54953 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54066_54954 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__54067_54955 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54064_54952,G__54065_54953,G__54066_54954,G__54067_54955) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54064_54952,G__54065_54953,G__54066_54954,G__54067_54955));
var G__54070_54957 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__54071_54958 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54072_54959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__54073_54960 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54070_54957,G__54071_54958,G__54072_54959,G__54073_54960) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54070_54957,G__54071_54958,G__54072_54959,G__54073_54960));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__54090_54961 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__54091_54962 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54090_54961,G__54091_54962) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54090_54961,G__54091_54962));
var G__54092_54964 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__54093_54965 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54094_54966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__54095_54967 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54096_54968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__54097_54969 = (function (p__54100,_){
var vec__54104 = p__54100;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54104,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54104,(1),null);
var G__54108 = (window_width / char_width);
return Math.ceil(G__54108);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__54092_54964,G__54093_54965,G__54094_54966,G__54095_54967,G__54096_54968,G__54097_54969) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54092_54964,G__54093_54965,G__54094_54966,G__54095_54967,G__54096_54968,G__54097_54969));
var G__54111_54972 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__54112_54973 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54111_54972,G__54112_54973) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54111_54972,G__54112_54973));
var G__54115_54975 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__54116_54976 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54117_54977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__54118_54978 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54115_54975,G__54116_54976,G__54117_54977,G__54118_54978) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54115_54975,G__54116_54976,G__54117_54977,G__54118_54978));
var G__54123_54983 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__54124_54984 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54123_54983,G__54124_54984) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54123_54983,G__54124_54984));
var G__54130_54985 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__54131_54986 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54132_54987 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__54133_54988 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54130_54985,G__54131_54986,G__54132_54987,G__54133_54988) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__54130_54985,G__54131_54986,G__54132_54987,G__54133_54988));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
