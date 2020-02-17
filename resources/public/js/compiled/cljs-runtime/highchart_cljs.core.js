goog.provide('highchart_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
var module$node_modules$highcharts$highstock=shadow.js.require("module$node_modules$highcharts$highstock", {});
var module$node_modules$highcharts$modules$no_data_to_display=shadow.js.require("module$node_modules$highcharts$modules$no_data_to_display", {});
var module$node_modules$highcharts_react_official$dist$highcharts_react_min=shadow.js.require("module$node_modules$highcharts_react_official$dist$highcharts_react_min", {});
highchart_cljs.core.js_chart = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
highchart_cljs.core.stock_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"rangeSelector","rangeSelector",33047694),new cljs.core.Keyword(null,"plotOptions","plotOptions",-1622538002),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"noData","noData",-273417838),new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"name","name",1843675177),"Random data",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonPosition","buttonPosition",-1344917996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(-200)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showInLegend","showInLegend",1019934671),true,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (p1__60255_SHARP_){
return console.log(["p= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60255_SHARP_.point.x)," sn=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60255_SHARP_.point.series.name)].join(''));
})], null)], null)], null),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"noData","noData",-273417838),"There are no data to display or there are any Fund Selected"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"15px",new cljs.core.Keyword(null,"color","color",1011675173),"#303030"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointFormat","pointFormat",-1370193740),"{series.name}: <b>{point.y:.1f}%</b>"], null)]);
highchart_cljs.core.chart = (function highchart_cljs$core$chart(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Comparison"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$highcharts_react_official$dist$highcharts_react_min.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highcharts","highcharts",-1412196413),module$node_modules$highcharts$highstock,new cljs.core.Keyword(null,"constructorType","constructorType",697757640),"stockChart",new cljs.core.Keyword(null,"options","options",99638489),highchart_cljs.core.stock_config], null)], null)], null);
});
highchart_cljs.core.mount_root = (function highchart_cljs$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highchart_cljs.core.chart], null),document.getElementById("fund-app"));
});
highchart_cljs.core.init = (function highchart_cljs$core$init(){
return highchart_cljs.core.mount_root();
});
goog.exportSymbol('highchart_cljs.core.init', highchart_cljs.core.init);

//# sourceMappingURL=highchart_cljs.core.js.map
