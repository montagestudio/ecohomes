montageDefine("3ef65ed","ui/list.reel/list",{dependencies:["montage/ui/component","montage/frb/observers","montage/core/deprecate"],factory:function(e,t,n){var o=e("montage/ui/component").Component,l=e("montage/frb/observers").observeProperty,r=e("montage/core/deprecate").deprecationWarning;t.List=o.specialize({constructor:{value:function(){this["super"](),this.defineBinding("_repetition.content",{"<-":"content"}),this.defineBinding("content.defined() ? null : _repetition.contentController",{"<-":"contentController"})}},templateDidLoad:{value:function(){this._repetition=this.templateObjects.repetition}},enterDocument:{value:function(e){e&&this.element.addEventListener("touchstart",this,!1)}},_repetition:{value:null},_scroller:{value:null},delegate:{value:null},content:{value:null},contentController:{value:null},axis:{value:null},isSelectionEnabled:{value:null},listEndEventThreshold:{value:1},observeProperty:{value:function(e,t,n,o,i){return"objectAtCurrentIteration"!==e&&"currentIteration"!==e?l(this,e,t,n,o,i):(r(e,":iteration.object"),this._repetition?this._repetition.observeProperty(e,t,n,o,i):void 0)}},_fireEndEvent:{value:function(){this.dispatchEventNamed("listEnd")}},handlePropertyChange:{value:function(e,t,n){"scrollY"!==t&&"_maxTranslateY"!==t||this._scroller&&n===this._scroller&&this._scroller.scrollY>=this._scroller._maxTranslateY*this.listEndEventThreshold&&this._scroller._maxTranslateY>0&&this._fireEndEvent()}},handleTouchstart:{value:function(){var e=this.element,t=e.scrollTop;t<=0&&(e.scrollTop=1),t+e.offsetHeight>=e.scrollHeight&&(e.scrollTop=e.scrollHeight-e.offsetHeight-1)}}})}});