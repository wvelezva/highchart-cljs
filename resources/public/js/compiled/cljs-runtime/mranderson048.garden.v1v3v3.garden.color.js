goog.provide('mranderson048.garden.v1v3v3.garden.color');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson048.garden.v1v3v3.garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
mranderson048.garden.v1v3v3.garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k44514,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__44537 = k44514;
var G__44537__$1 = (((G__44537 instanceof cljs.core.Keyword))?G__44537.fqn:null);
switch (G__44537__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44514,else__4442__auto__);

}
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__44549){
var vec__44550 = p__44549;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44550,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44550,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#mranderson048.garden.v1v3v3.garden.color.CSSColor{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44513){
var self__ = this;
var G__44513__$1 = this;
return (new cljs.core.RecordIter((0),G__44513__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__44581 = (function (coll__4436__auto__){
return (-94015427 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__44581(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44515,other44516){
var self__ = this;
var this44515__$1 = this;
return (((!((other44516 == null)))) && ((this44515__$1.constructor === other44516.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.red,other44516.red)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.green,other44516.green)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.blue,other44516.blue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.hue,other44516.hue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.saturation,other44516.saturation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.lightness,other44516.lightness)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.alpha,other44516.alpha)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44515__$1.__extmap,other44516.__extmap)));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__44513){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__44607 = cljs.core.keyword_identical_QMARK_;
var expr__44608 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__44611 = new cljs.core.Keyword(null,"red","red",-969428204);
var G__44612 = expr__44608;
return (pred__44607.cljs$core$IFn$_invoke$arity$2 ? pred__44607.cljs$core$IFn$_invoke$arity$2(G__44611,G__44612) : pred__44607.call(null,G__44611,G__44612));
})())){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(G__44513,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44614 = new cljs.core.Keyword(null,"green","green",-945526839);
var G__44615 = expr__44608;
return (pred__44607.cljs$core$IFn$_invoke$arity$2 ? pred__44607.cljs$core$IFn$_invoke$arity$2(G__44614,G__44615) : pred__44607.call(null,G__44614,G__44615));
})())){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,G__44513,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44617 = new cljs.core.Keyword(null,"blue","blue",-622100620);
var G__44618 = expr__44608;
return (pred__44607.cljs$core$IFn$_invoke$arity$2 ? pred__44607.cljs$core$IFn$_invoke$arity$2(G__44617,G__44618) : pred__44607.call(null,G__44617,G__44618));
})())){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,G__44513,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44620 = new cljs.core.Keyword(null,"hue","hue",-508078848);
var G__44621 = expr__44608;
return (pred__44607.cljs$core$IFn$_invoke$arity$2 ? pred__44607.cljs$core$IFn$_invoke$arity$2(G__44620,G__44621) : pred__44607.call(null,G__44620,G__44621));
})())){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,G__44513,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44622 = new cljs.core.Keyword(null,"saturation","saturation",-14247929);
var G__44623 = expr__44608;
return (pred__44607.cljs$core$IFn$_invoke$arity$2 ? pred__44607.cljs$core$IFn$_invoke$arity$2(G__44622,G__44623) : pred__44607.call(null,G__44622,G__44623));
})())){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__44513,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44625 = new cljs.core.Keyword(null,"lightness","lightness",-2040901930);
var G__44626 = expr__44608;
return (pred__44607.cljs$core$IFn$_invoke$arity$2 ? pred__44607.cljs$core$IFn$_invoke$arity$2(G__44625,G__44626) : pred__44607.call(null,G__44625,G__44626));
})())){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__44513,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44627 = new cljs.core.Keyword(null,"alpha","alpha",-1574982441);
var G__44628 = expr__44608;
return (pred__44607.cljs$core$IFn$_invoke$arity$2 ? pred__44607.cljs$core$IFn$_invoke$arity$2(G__44627,G__44628) : pred__44607.call(null,G__44627,G__44628));
})())){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__44513,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__44513),null));
}
}
}
}
}
}
}
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"red","red",-969428204),self__.red,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"green","green",-945526839),self__.green,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha,null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__44513){
var self__ = this;
var this__4438__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__44513,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.call = (function (unused__10523__auto__){
var self__ = this;
var self__ = this;
var G__44641 = (arguments.length - (1));
switch (G__44641) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.apply = (function (self__,args44523){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44523)));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),new cljs.core.Symbol(null,"green","green",695004688,null),new cljs.core.Symbol(null,"blue","blue",1018430907,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"saturation","saturation",1626283598,null),new cljs.core.Symbol(null,"lightness","lightness",-400370403,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null)], null);
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.cljs$lang$type = true);

(mranderson048.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"mranderson048.garden.v1v3v3.garden.color/CSSColor",null,(1),null));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"mranderson048.garden.v1v3v3.garden.color/CSSColor");
}));

/**
 * Positional factory function for mranderson048.garden.v1v3v3.garden.color/CSSColor.
 */
mranderson048.garden.v1v3v3.garden.color.__GT_CSSColor = (function mranderson048$garden$v1v3v3$garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

/**
 * Factory function for mranderson048.garden.v1v3v3.garden.color/CSSColor, taking a map of keywords to field values.
 */
mranderson048.garden.v1v3v3.garden.color.map__GT_CSSColor = (function mranderson048$garden$v1v3v3$garden$color$map__GT_CSSColor(G__44518){
var extmap__4478__auto__ = (function (){var G__44674 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44518,new cljs.core.Keyword(null,"red","red",-969428204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], 0));
if(cljs.core.record_QMARK_(G__44518)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44674);
} else {
return G__44674;
}
})();
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(G__44518),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(G__44518),new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(G__44518),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__44518),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(G__44518),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(G__44518),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__44518),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

mranderson048.garden.v1v3v3.garden.color.as_color = mranderson048.garden.v1v3v3.garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
mranderson048.garden.v1v3v3.garden.color.rgb = (function mranderson048$garden$v1v3v3$garden$color$rgb(var_args){
var G__44696 = arguments.length;
switch (G__44696) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__44702){
var vec__44703 = p__44702;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44703,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44703,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44703,(2),null);
var vs = vec__44703;
if(cljs.core.every_QMARK_((function (p1__44688_SHARP_){
return mranderson048.garden.v1v3v3.garden.util.between_QMARK_(p1__44688_SHARP_,(0),(255));
}),vs)){
var G__44706 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),r,new cljs.core.Keyword(null,"green","green",-945526839),g,new cljs.core.Keyword(null,"blue","blue",-622100620),b], null);
return (mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__44706) : mranderson048.garden.v1v3v3.garden.color.as_color.call(null,G__44706));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}));

(mranderson048.garden.v1v3v3.garden.color.rgb.cljs$lang$maxFixedArity = 3);

/**
 * Create an RGBA color.
 */
mranderson048.garden.v1v3v3.garden.color.rgba = (function mranderson048$garden$v1v3v3$garden$color$rgba(var_args){
var G__44716 = arguments.length;
switch (G__44716) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__44723){
var vec__44727 = p__44723;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(3),null);
if(mranderson048.garden.v1v3v3.garden.util.between_QMARK_(a,(0),(1))){
var G__44736 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a);
return (mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__44736) : mranderson048.garden.v1v3v3.garden.color.as_color.call(null,G__44736));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
}));

(mranderson048.garden.v1v3v3.garden.color.rgba.cljs$lang$maxFixedArity = 4);

/**
 * Create an HSL color.
 */
mranderson048.garden.v1v3v3.garden.color.hsl = (function mranderson048$garden$v1v3v3$garden$color$hsl(var_args){
var G__44753 = arguments.length;
switch (G__44753) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__44758){
var vec__44759 = p__44758;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44759,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44759,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44759,(2),null);
var vec__44764 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44744_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__44744_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),p1__44744_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44764,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44764,(1),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44764,(2),null);
if(((mranderson048.garden.v1v3v3.garden.util.between_QMARK_(s__$1,(0),(100))) && (mranderson048.garden.v1v3v3.garden.util.between_QMARK_(l__$1,(0),(100))))){
var G__44775 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.mod(h__$1,(360)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),s__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),l__$1], null);
return (mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__44775) : mranderson048.garden.v1v3v3.garden.color.as_color.call(null,G__44775));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
}));

(mranderson048.garden.v1v3v3.garden.color.hsl.cljs$lang$maxFixedArity = 3);

/**
 * Create an HSLA color.
 */
mranderson048.garden.v1v3v3.garden.color.hsla = (function mranderson048$garden$v1v3v3$garden$color$hsla(var_args){
var G__44794 = arguments.length;
switch (G__44794) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__44806){
var vec__44810 = p__44806;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44810,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44810,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44810,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44810,(3),null);
if(mranderson048.garden.v1v3v3.garden.util.between_QMARK_(a,(0),(1))){
var G__44814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a);
return (mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__44814) : mranderson048.garden.v1v3v3.garden.color.as_color.call(null,G__44814));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
}));

(mranderson048.garden.v1v3v3.garden.color.hsla.cljs$lang$maxFixedArity = 4);

/**
 * Return true if color is an RGB color.
 */
mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$rgb_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null], null), null))));
});
/**
 * Return true if color is an HSL color.
 */
mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$hsl_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null], null), null))));
});
/**
 * Return true if x is a color.
 */
mranderson048.garden.v1v3v3.garden.color.color_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$color_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_(x)) || (mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_(x)));
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
mranderson048.garden.v1v3v3.garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
mranderson048.garden.v1v3v3.garden.color.hex_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$hex_QMARK_(x){
return cljs.core.boolean$(((typeof x === 'string')?cljs.core.re_matches(mranderson048.garden.v1v3v3.garden.color.hex_re,x):false));
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
mranderson048.garden.v1v3v3.garden.color.hex__GT_rgb = (function mranderson048$garden$v1v3v3$garden$color$hex__GT_rgb(s){
var temp__5735__auto__ = cljs.core.re_matches(mranderson048.garden.v1v3v3.garden.color.hex_re,s);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__44878 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44878,(0),null);
var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44878,(1),null);
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(hex)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__44870_SHARP_){
return (new cljs.core.List(null,p1__44870_SHARP_,(new cljs.core.List(null,p1__44870_SHARP_,null,(1),null)),(2),null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hex], 0))):hex);
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44875_SHARP_){
return mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(p1__44875_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0));
}),cljs.core.re_seq(/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
mranderson048.garden.v1v3v3.garden.color.rgb__GT_hex = (function mranderson048$garden$v1v3v3$garden$color$rgb__GT_hex(p__44895){
var map__44896 = p__44895;
var map__44896__$1 = (((((!((map__44896 == null))))?(((((map__44896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44896):map__44896);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44896__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44896__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44896__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex_part = (function mranderson048$garden$v1v3v3$garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace(mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%2s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0))], 0))," ","0");
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
mranderson048.garden.v1v3v3.garden.color.trim_one = (function mranderson048$garden$v1v3v3$garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
mranderson048.garden.v1v3v3.garden.color.rgb__GT_hsl = (function mranderson048$garden$v1v3v3$garden$color$rgb__GT_hsl(p__44936){
var map__44937 = p__44936;
var map__44937__$1 = (((((!((map__44937 == null))))?(((((map__44937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44937):map__44937);
var color = map__44937__$1;
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_(color)){
return color;
} else {
var vec__44943 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44932_SHARP_){
return (p1__44932_SHARP_ / (255));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(2),null);
var mx = (function (){var x__4273__auto__ = (function (){var x__4273__auto__ = r;
var y__4274__auto__ = g;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4274__auto__ = b;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var mn = (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = r;
var y__4277__auto__ = g;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = b;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__44964 = cljs.core._EQ_;
var expr__44965 = mx;
if(cljs.core.truth_((pred__44964.cljs$core$IFn$_invoke$arity$2 ? pred__44964.cljs$core$IFn$_invoke$arity$2(mn,expr__44965) : pred__44964.call(null,mn,expr__44965)))){
return (0);
} else {
if(cljs.core.truth_((pred__44964.cljs$core$IFn$_invoke$arity$2 ? pred__44964.cljs$core$IFn$_invoke$arity$2(r,expr__44965) : pred__44964.call(null,r,expr__44965)))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_((pred__44964.cljs$core$IFn$_invoke$arity$2 ? pred__44964.cljs$core$IFn$_invoke$arity$2(g,expr__44965) : pred__44964.call(null,g,expr__44965)))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_((pred__44964.cljs$core$IFn$_invoke$arity$2 ? pred__44964.cljs$core$IFn$_invoke$arity$2(b,expr__44965) : pred__44964.call(null,b,expr__44965)))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44965)].join('')));
}
}
}
}
})();
var l = mranderson048.garden.v1v3v3.garden.color.trim_one(((mx + mn) / (2)));
var s = mranderson048.garden.v1v3v3.garden.color.trim_one(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3(cljs.core.mod(h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
mranderson048.garden.v1v3v3.garden.color.hsl__GT_rgb = (function mranderson048$garden$v1v3v3$garden$color$hsl__GT_rgb(p__44978){
var map__44979 = p__44978;
var map__44979__$1 = (((((!((map__44979 == null))))?(((((map__44979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44979):map__44979);
var color = map__44979__$1;
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_(color)){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__44982 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44977_SHARP_){
var G__44985 = (p1__44977_SHARP_ * (255));
return Math.round(G__44985);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44987 = m1;
var G__44988 = m2;
var G__44989 = (h + (1.0 / (3)));
return (mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__44987,G__44988,G__44989) : mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,G__44987,G__44988,G__44989));
})(),(mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(m1,m2,h) : mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,h)),(function (){var G__44990 = m1;
var G__44991 = m2;
var G__44992 = (h - (1.0 / (3)));
return (mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__44990,G__44991,G__44992) : mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,G__44990,G__44991,G__44992));
})()], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44982,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44982,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44982,(2),null);
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb = (function mranderson048$garden$v1v3v3$garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
mranderson048.garden.v1v3v3.garden.color.hsl__GT_hex = (function mranderson048$garden$v1v3v3$garden$color$hsl__GT_hex(color){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hex(mranderson048.garden.v1v3v3.garden.color.hsl__GT_rgb(color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
mranderson048.garden.v1v3v3.garden.color.hex__GT_hsl = (function mranderson048$garden$v1v3v3$garden$color$hex__GT_hsl(color){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hsl(mranderson048.garden.v1v3v3.garden.color.hex__GT_rgb(color));
});
mranderson048.garden.v1v3v3.garden.color.percent_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(mranderson048.garden.v1v3v3.garden.util.clip,(0),(100));
mranderson048.garden.v1v3v3.garden.color.rgb_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(mranderson048.garden.v1v3v3.garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
mranderson048.garden.v1v3v3.garden.color.as_hex = (function mranderson048$garden$v1v3v3$garden$color$as_hex(x){
if(mranderson048.garden.v1v3v3.garden.color.hex_QMARK_(x)){
return x;
} else {
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_(x)){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hex(x);
} else {
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_(x)){
return mranderson048.garden.v1v3v3.garden.color.hsl__GT_hex(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
mranderson048.garden.v1v3v3.garden.color.as_rgb = (function mranderson048$garden$v1v3v3$garden$color$as_rgb(x){
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_(x)){
return x;
} else {
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_(x)){
return mranderson048.garden.v1v3v3.garden.color.hsl__GT_rgb(x);
} else {
if(mranderson048.garden.v1v3v3.garden.color.hex_QMARK_(x)){
return mranderson048.garden.v1v3v3.garden.color.hex__GT_rgb(x);
} else {
if(typeof x === 'number'){
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
mranderson048.garden.v1v3v3.garden.color.as_hsl = (function mranderson048$garden$v1v3v3$garden$color$as_hsl(x){
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_(x)){
return x;
} else {
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_(x)){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hsl(x);
} else {
if(mranderson048.garden.v1v3v3.garden.color.hex_QMARK_(x)){
return mranderson048.garden.v1v3v3.garden.color.hex__GT_hsl(x);
} else {
if(typeof x === 'number'){
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(mranderson048.garden.v1v3v3.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : mranderson048.garden.v1v3v3.garden.color.percent_clip.call(null,x)),(mranderson048.garden.v1v3v3.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : mranderson048.garden.v1v3v3.garden.color.percent_clip.call(null,x))], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
mranderson048.garden.v1v3v3.garden.color.restrict_rgb = (function mranderson048$garden$v1v3v3$garden$color$restrict_rgb(m){
return cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
});
mranderson048.garden.v1v3v3.garden.color.make_color_operation = (function mranderson048$garden$v1v3v3$garden$color$make_color_operation(op){
return (function() {
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op = null;
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.rgb_clip,op);
var a__$1 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb(mranderson048.garden.v1v3v3.garden.color.as_rgb(a));
var b__$1 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb(mranderson048.garden.v1v3v3.garden.color.as_rgb(b));
var G__45027 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
return (mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__45027) : mranderson048.garden.v1v3v3.garden.color.as_color.call(null,G__45027));
});
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__45303__delegate = function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op,mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2(a,b),more);
};
var G__45303 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__45307__i = 0, G__45307__a = new Array(arguments.length -  2);
while (G__45307__i < G__45307__a.length) {G__45307__a[G__45307__i] = arguments[G__45307__i + 2]; ++G__45307__i;}
  more = new cljs.core.IndexedSeq(G__45307__a,0,null);
} 
return G__45303__delegate.call(this,a,b,more);};
G__45303.cljs$lang$maxFixedArity = 2;
G__45303.cljs$lang$applyTo = (function (arglist__45308){
var a = cljs.core.first(arglist__45308);
arglist__45308 = cljs.core.next(arglist__45308);
var b = cljs.core.first(arglist__45308);
var more = cljs.core.rest(arglist__45308);
return G__45303__delegate(a,b,more);
});
G__45303.cljs$core$IFn$_invoke$arity$variadic = G__45303__delegate;
return G__45303;
})()
;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__45320 = null;
if (arguments.length > 2) {
var G__45321__i = 0, G__45321__a = new Array(arguments.length -  2);
while (G__45321__i < G__45321__a.length) {G__45321__a[G__45321__i] = arguments[G__45321__i + 2]; ++G__45321__i;}
G__45320 = new cljs.core.IndexedSeq(G__45321__a,0,null);
}
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__45320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_PLUS_ = mranderson048.garden.v1v3v3.garden.color.make_color_operation(cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_ = mranderson048.garden.v1v3v3.garden.color.make_color_operation(cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_STAR_ = mranderson048.garden.v1v3v3.garden.color.make_color_operation(cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_div = mranderson048.garden.v1v3v3.garden.color.make_color_operation(cljs.core._SLASH_);
mranderson048.garden.v1v3v3.garden.color.update_color = (function mranderson048$garden$v1v3v3$garden$color$update_color(color,field,f,v){
var v__$1 = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return v;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(mranderson048.garden.v1v3v3.garden.color.as_hsl(color),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.rotate_hue = (function mranderson048$garden$v1v3v3$garden$color$rotate_hue(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color(color,new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__45050_SHARP_){
return cljs.core.mod(p1__45050_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.saturate = (function mranderson048$garden$v1v3v3$garden$color$saturate(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.desaturate = (function mranderson048$garden$v1v3v3$garden$color$desaturate(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.lighten = (function mranderson048$garden$v1v3v3$garden$color$lighten(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.darken = (function mranderson048$garden$v1v3v3$garden$color$darken(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Return the inversion of a color.
 */
mranderson048.garden.v1v3v3.garden.color.invert = (function mranderson048$garden$v1v3v3$garden$color$invert(color){
var G__45058 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null),mranderson048.garden.v1v3v3.garden.color.as_rgb(color)], 0));
return (mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__45058) : mranderson048.garden.v1v3v3.garden.color.as_color.call(null,G__45058));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
mranderson048.garden.v1v3v3.garden.color.mix = (function mranderson048$garden$v1v3v3$garden$color$mix(var_args){
var G__45065 = arguments.length;
switch (G__45065) {
case 2:
return mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___45356 = arguments.length;
var i__4790__auto___45357 = (0);
while(true){
if((i__4790__auto___45357 < len__4789__auto___45356)){
args_arr__4810__auto__.push((arguments[i__4790__auto___45357]));

var G__45358 = (i__4790__auto___45357 + (1));
i__4790__auto___45357 = G__45358;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb(mranderson048.garden.v1v3v3.garden.color.as_rgb(color_1));
var c2 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb(mranderson048.garden.v1v3v3.garden.color.as_rgb(color_2));
var G__45067 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(mranderson048.garden.v1v3v3.garden.util.average,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1,c2], 0));
return (mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__45067) : mranderson048.garden.v1v3v3.garden.color.as_color.call(null,G__45067));
}));

(mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mranderson048.garden.v1v3v3.garden.color.mix,mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2(color_1,color_2),more);
}));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.color.mix.cljs$lang$applyTo = (function (seq45062){
var G__45063 = cljs.core.first(seq45062);
var seq45062__$1 = cljs.core.next(seq45062);
var G__45064 = cljs.core.first(seq45062__$1);
var seq45062__$2 = cljs.core.next(seq45062__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45063,G__45064,seq45062__$2);
}));

(mranderson048.garden.v1v3v3.garden.color.mix.cljs$lang$maxFixedArity = (2));

/**
 * Return the complement of a color.
 */
mranderson048.garden.v1v3v3.garden.color.complement = (function mranderson048$garden$v1v3v3$garden$color$complement(color){
return mranderson048.garden.v1v3v3.garden.color.rotate_hue(color,(180));
});
mranderson048.garden.v1v3v3.garden.color.hue_rotations = (function mranderson048$garden$v1v3v3$garden$color$hue_rotations(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45373 = arguments.length;
var i__4790__auto___45374 = (0);
while(true){
if((i__4790__auto___45374 < len__4789__auto___45373)){
args__4795__auto__.push((arguments[i__4790__auto___45374]));

var G__45375 = (i__4790__auto___45374 + (1));
i__4790__auto___45374 = G__45375;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.rotate_hue,color),amounts);
}));

(mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$applyTo = (function (seq45077){
var G__45078 = cljs.core.first(seq45077);
var seq45077__$1 = cljs.core.next(seq45077);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45078,seq45077__$1);
}));

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
mranderson048.garden.v1v3v3.garden.color.analogous = (function mranderson048$garden$v1v3v3$garden$color$analogous(var_args){
var G__45087 = arguments.length;
switch (G__45087) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2(color,true);
}));

(mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((30)) : sign.call(null,(30))),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((60)) : sign.call(null,(60)))], 0));
}));

(mranderson048.garden.v1v3v3.garden.color.analogous.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
mranderson048.garden.v1v3v3.garden.color.triad = (function mranderson048$garden$v1v3v3$garden$color$triad(color){
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(120),(240)], 0));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
mranderson048.garden.v1v3v3.garden.color.split_complement = (function mranderson048$garden$v1v3v3$garden$color$split_complement(var_args){
var G__45093 = arguments.length;
switch (G__45093) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2(color,(130));
}));

(mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = mranderson048.garden.v1v3v3.garden.util.clip((1),(179),distance_from_complement);
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),d,(- d)], 0));
}));

(mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
mranderson048.garden.v1v3v3.garden.color.tetrad = (function mranderson048$garden$v1v3v3$garden$color$tetrad(var_args){
var G__45097 = arguments.length;
switch (G__45097) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2(color,(90));
}));

(mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = mranderson048.garden.v1v3v3.garden.util.clip((1),(90),(function (){var G__45099 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(angle,angle);
return Math.abs(G__45099);
})());
var color_2 = mranderson048.garden.v1v3v3.garden.color.rotate_hue(color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.color.rotate_hue(color,(0)),mranderson048.garden.v1v3v3.garden.color.complement(color),color_2,mranderson048.garden.v1v3v3.garden.color.complement(color_2)], null);
}));

(mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
mranderson048.garden.v1v3v3.garden.color.shades = (function mranderson048$garden$v1v3v3$garden$color$shades(var_args){
var G__45105 = arguments.length;
switch (G__45105) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2(color,(10));
}));

(mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = mranderson048.garden.v1v3v3.garden.color.as_hsl(color);
var iter__4582__auto__ = (function mranderson048$garden$v1v3v3$garden$color$iter__45110(s__45111){
return (new cljs.core.LazySeq(null,(function (){
var s__45111__$1 = s__45111;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45111__$1);
if(temp__5735__auto__){
var s__45111__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45111__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45111__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45113 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45112 = (0);
while(true){
if((i__45112 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45112);
cljs.core.chunk_append(b__45113,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)));

var G__45397 = (i__45112 + (1));
i__45112 = G__45397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45113),mranderson048$garden$v1v3v3$garden$color$iter__45110(cljs.core.chunk_rest(s__45111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45113),null);
}
} else {
var i = cljs.core.first(s__45111__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)),mranderson048$garden$v1v3v3$garden$color$iter__45110(cljs.core.rest(s__45111__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(function (){var G__45123 = (100.0 / step);
return Math.floor(G__45123);
})()));
}));

(mranderson048.garden.v1v3v3.garden.color.shades.cljs$lang$maxFixedArity = 2);

mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aquamarine","aquamarine",263648544),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"darksalmon","darksalmon",-896495551),new cljs.core.Keyword(null,"antiquewhite","antiquewhite",-1702201183),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"slategrey","slategrey",-1531406687),new cljs.core.Keyword(null,"slategray","slategray",-178672671),new cljs.core.Keyword(null,"sienna","sienna",-1559699358),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"navajowhite","navajowhite",1463125346),new cljs.core.Keyword(null,"lavenderblush","lavenderblush",667482818),new cljs.core.Keyword(null,"firebrick","firebrick",-214380606),new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"palevioletred","palevioletred",-1198100061),new cljs.core.Keyword(null,"lawngreen","lawngreen",672111043),new cljs.core.Keyword(null,"seashell","seashell",1208259012),new cljs.core.Keyword(null,"lightpink","lightpink",808485476),new cljs.core.Keyword(null,"darkolivegreen","darkolivegreen",-2098617596),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"lightsteelblue","lightsteelblue",-209586236),new cljs.core.Keyword(null,"whitesmoke","whitesmoke",1847137252),new cljs.core.Keyword(null,"darkgoldenrod","darkgoldenrod",-1115778811),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"bisque","bisque",-862836634),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"lightgreen","lightgreen",-1542529498),new cljs.core.Keyword(null,"darkseagreen","darkseagreen",410063911),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839),new cljs.core.Keyword(null,"mistyrose","mistyrose",-619815737),new cljs.core.Keyword(null,"chocolate","chocolate",772404615),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cadetblue","cadetblue",1126335112),new cljs.core.Keyword(null,"navy","navy",1626342120),new cljs.core.Keyword(null,"ghostwhite","ghostwhite",-1030428888),new cljs.core.Keyword(null,"dimgrey","dimgrey",265814984),new cljs.core.Keyword(null,"seagreen","seagreen",1345424905),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"olivedrab","olivedrab",477000042),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"peachpuff","peachpuff",-1932127734),new cljs.core.Keyword(null,"limegreen","limegreen",-121735638),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"sandybrown","sandybrown",-417646484),new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052),new cljs.core.Keyword(null,"mediumspringgreen","mediumspringgreen",-257604339),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),new cljs.core.Keyword(null,"rosybrown","rosybrown",1634897517),new cljs.core.Keyword(null,"cornflowerblue","cornflowerblue",-1713148307),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"lightgoldenrodyellow","lightgoldenrodyellow",1849392877),new cljs.core.Keyword(null,"salmon","salmon",-1093653298),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442),new cljs.core.Keyword(null,"peru","peru",1147074382),new cljs.core.Keyword(null,"cornsilk","cornsilk",-1628976146),new cljs.core.Keyword(null,"lightslategray","lightslategray",-1109503825),new cljs.core.Keyword(null,"blueviolet","blueviolet",887936463),new cljs.core.Keyword(null,"forestgreen","forestgreen",1609185807),new cljs.core.Keyword(null,"lightseagreen","lightseagreen",-1503692817),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"gainsboro","gainsboro",-218568880),new cljs.core.Keyword(null,"darkorchid","darkorchid",-1255783536),new cljs.core.Keyword(null,"burlywood","burlywood",1747294160),new cljs.core.Keyword(null,"lightskyblue","lightskyblue",397352944),new cljs.core.Keyword(null,"chartreuse","chartreuse",-1626529775),new cljs.core.Keyword(null,"snow","snow",1266930033),new cljs.core.Keyword(null,"moccasin","moccasin",885646097),new cljs.core.Keyword(null,"honeydew","honeydew",297211825),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"darkred","darkred",1564487633),new cljs.core.Keyword(null,"mediumorchid","mediumorchid",114416082),new cljs.core.Keyword(null,"lightsalmon","lightsalmon",278000114),new cljs.core.Keyword(null,"saddlebrown","saddlebrown",-1556765006),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"springgreen","springgreen",-1241565454),new cljs.core.Keyword(null,"lightslategrey","lightslategrey",1806136178),new cljs.core.Keyword(null,"darkblue","darkblue",511597490),new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blanchedalmond","blanchedalmond",-1397674477),new cljs.core.Keyword(null,"papayawhip","papayawhip",-330388621),new cljs.core.Keyword(null,"slateblue","slateblue",79472627),new cljs.core.Keyword(null,"lightblue","lightblue",-1333083084),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"palegreen","palegreen",1360601109),new cljs.core.Keyword(null,"greenyellow","greenyellow",1380924629),new cljs.core.Keyword(null,"khaki","khaki",-1417823979),new cljs.core.Keyword(null,"maroon","maroon",-952210123),new cljs.core.Keyword(null,"darkgrey","darkgrey",-860992715),new cljs.core.Keyword(null,"midnightblue","midnightblue",688164725),new cljs.core.Keyword(null,"floralwhite","floralwhite",1656937461),new cljs.core.Keyword(null,"deeppink","deeppink",1577828374),new cljs.core.Keyword(null,"paleturquoise","paleturquoise",1255621750),new cljs.core.Keyword(null,"darkkhaki","darkkhaki",1599585526),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"indianred","indianred",-1829312906),new cljs.core.Keyword(null,"darkviolet","darkviolet",552615766),new cljs.core.Keyword(null,"mediumpurple","mediumpurple",-1891751018),new cljs.core.Keyword(null,"fuchsia","fuchsia",990719926),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"mediumvioletred","mediumvioletred",-1767902505),new cljs.core.Keyword(null,"lemonchiffon","lemonchiffon",1115945815),new cljs.core.Keyword(null,"mediumblue","mediumblue",-1579936616),new cljs.core.Keyword(null,"darkmagenta","darkmagenta",-1534491240),new cljs.core.Keyword(null,"goldenrod","goldenrod",2000666104),new cljs.core.Keyword(null,"darkorange","darkorange",1453996632),new cljs.core.Keyword(null,"orchid","orchid",-1953715528),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"dodgerblue","dodgerblue",-1678389350),new cljs.core.Keyword(null,"darkturquoise","darkturquoise",-80977765),new cljs.core.Keyword(null,"mintcream","mintcream",1437895067),new cljs.core.Keyword(null,"hotpink","hotpink",1103829723),new cljs.core.Keyword(null,"thistle","thistle",1477120028),new cljs.core.Keyword(null,"royalblue","royalblue",978912636),new cljs.core.Keyword(null,"darkgreen","darkgreen",2002841276),new cljs.core.Keyword(null,"darkslateblue","darkslateblue",807219996),new cljs.core.Keyword(null,"silver","silver",1044501468),new cljs.core.Keyword(null,"darkgray","darkgray",-1229776547),new cljs.core.Keyword(null,"oldlace","oldlace",-966038915),new cljs.core.Keyword(null,"mediumaquamarine","mediumaquamarine",1476241181),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"olive","olive",-2080542466),new cljs.core.Keyword(null,"lightcoral","lightcoral",-988903010),new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530),new cljs.core.Keyword(null,"linen","linen",-1305214018),new cljs.core.Keyword(null,"darkslategrey","darkslategrey",-114797409),new cljs.core.Keyword(null,"lavender","lavender",-1469567809),new cljs.core.Keyword(null,"dimgray","dimgray",-412750241),new cljs.core.Keyword(null,"palegoldenrod","palegoldenrod",-2067529985),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.Keyword(null,"black","black",1294279647)],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
mranderson048.garden.v1v3v3.garden.color.ex_info_color_name = (function mranderson048$garden$v1v3v3$garden$color$ex_info_color_name(n){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown color ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))," see (:expected (ex-data e)) for a list of color names"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),n,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.set(cljs.core.keys(mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
mranderson048.garden.v1v3v3.garden.color.color_name__GT_color = cljs.core.memoize((function (k){
return (mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1(k) : mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex.call(null,k));
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
mranderson048.garden.v1v3v3.garden.color.from_name = (function mranderson048$garden$v1v3v3$garden$color$from_name(n){
var temp__5733__auto__ = (function (){var G__45139 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n);
return (mranderson048.garden.v1v3v3.garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1(G__45139) : mranderson048.garden.v1v3v3.garden.color.color_name__GT_color.call(null,G__45139));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var h = temp__5733__auto__;
return h;
} else {
throw mranderson048.garden.v1v3v3.garden.color.ex_info_color_name(n);
}
});
mranderson048.garden.v1v3v3.garden.color.scale_color_value = (function mranderson048$garden$v1v3v3$garden$color$scale_color_value(value,amount){
return (value + (((amount > (0)))?(((100) - value) * (amount / (100))):((value * amount) / (100))));
});
/**
 * Scale the lightness of a color by amount
 */
mranderson048.garden.v1v3v3.garden.color.scale_lightness = (function mranderson048$garden$v1v3v3$garden$color$scale_lightness(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),mranderson048.garden.v1v3v3.garden.color.scale_color_value,amount);
});
/**
 * Scale the saturation of a color by amount
 */
mranderson048.garden.v1v3v3.garden.color.scale_saturation = (function mranderson048$garden$v1v3v3$garden$color$scale_saturation(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),mranderson048.garden.v1v3v3.garden.color.scale_color_value,amount);
});
mranderson048.garden.v1v3v3.garden.color.decrown_hex = (function mranderson048$garden$v1v3v3$garden$color$decrown_hex(hex){
return clojure.string.replace(hex,/^#/,"");
});
mranderson048.garden.v1v3v3.garden.color.crown_hex = (function mranderson048$garden$v1v3v3$garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find(/^#/,hex))){
return hex;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
mranderson048.garden.v1v3v3.garden.color.expand_hex = (function mranderson048$garden$v1v3v3$garden$color$expand_hex(hex){
var _ = mranderson048.garden.v1v3v3.garden.color.decrown_hex(hex);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),((_).length))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_,_], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),((_).length))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
mranderson048.garden.v1v3v3.garden.color.hex__GT_long = (function mranderson048$garden$v1v3v3$garden$color$hex__GT_long(hex){
return parseInt(mranderson048.garden.v1v3v3.garden.color.expand_hex(clojure.string.replace(hex,/^#/,"")),(16));
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
mranderson048.garden.v1v3v3.garden.color.long__GT_hex = (function mranderson048$garden$v1v3v3$garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
mranderson048.garden.v1v3v3.garden.color.weighted_mix = (function mranderson048$garden$v1v3v3$garden$color$weighted_mix(color_1,color_2,weight){
var vec__45162 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45161_SHARP_){
return (p1__45161_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45162,(0),null);
var weight_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45162,(1),null);
var vec__45165 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.color.hex__GT_long,mranderson048.garden.v1v3v3.garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45165,(0),null);
var long_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45165,(1),null);
return mranderson048.garden.v1v3v3.garden.color.crown_hex(mranderson048.garden.v1v3v3.garden.color.expand_hex(mranderson048.garden.v1v3v3.garden.color.long__GT_hex(((long_1 * weight_1) + (long_2 * weight_2)))));
});

//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.color.js.map
