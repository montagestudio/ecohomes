var Component=require("montage/ui/component").Component,observeProperty=require("montage/frb/observers").observeProperty,deprecationWarning=require("montage/core/deprecate").deprecationWarning;exports.List=Component.specialize({constructor:{value:function(){this["super"](),this.defineBinding("_repetition.content",{"<-":"content"}),this.defineBinding("content.defined() ? null : _repetition.contentController",{"<-":"contentController"})}},templateDidLoad:{value:function(){this._scroller.addOwnPropertyChangeListener("scrollY",this),this._scroller.addOwnPropertyChangeListener("_maxTranslateY",this)}},_repetition:{value:null},_scroller:{value:null},delegate:{value:null},content:{value:null},contentController:{value:null},axis:{value:null},isSelectionEnabled:{value:null},listEndEventThreshold:{value:1},observeProperty:{value:function(e,t,n,r,o){return"objectAtCurrentIteration"!==e&&"currentIteration"!==e?observeProperty(this,e,t,n,r,o):(deprecationWarning(e,":iteration.object"),this._repetition?this._repetition.makePropertyObservable(e,t,n,r,o):void 0)}},_fireEndEvent:{value:function(){this.dispatchEventNamed("listEnd")}},handlePropertyChange:{value:function(e,t,n){"scrollY"!==t&&"_maxTranslateY"!==t||this._scroller&&n===this._scroller&&this._scroller.scrollY>=this._scroller._maxTranslateY*this.listEndEventThreshold&&this._scroller._maxTranslateY>0&&this._fireEndEvent()}}});