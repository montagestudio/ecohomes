montageDefine("3ef65ed","ui/big-list.reel/big-list",{dependencies:["montage","montage/ui/component","montage/frb/observers","montage/core/deprecate"],factory:function(t,e,i){var n=(t("montage").Montage,t("montage/ui/component").Component),r=t("montage/frb/observers").observeProperty,o=t("montage/core/deprecate").deprecationWarning;e.BigList=n.specialize({enterDocument:{value:function(t){var e=this;t&&(this.flow._flowTranslateComposer.addEventListener("translateStart",this,!1),this.flow._flowTranslateComposer.addEventListener("translateEnd",this,!1),window.addEventListener("resize",function(){e.needsDraw=!0},!1))}},willDraw:{value:function(){this.flow._repetition._drawnIterations[0]&&(this._width=this._measureWidth(),this._height=this._measureHeight(),this._rowHeight=this._measureRowHeight(),this.flow.linearScrollingVector=this._calculateLinearScrollingVector(this._height,this._rowHeight),this.flow.paths=this._calculateFlowPath(this._height,this._rowHeight),this.flow.cameraTargetPoint=this._calculateCameraTargetPoint(this._width,this._height,this._rowHeight),this.flow.cameraPosition=this._calculateCameraPosition(this._width,this._height,this._rowHeight),this.flow.cameraFov=90,this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!0,this._scrollBars.verticalLength=this._calculateScrollBarsVerticalLength(this._height,this._rowHeight,this.flow._numberOfIterations))}},draw:{value:function(){}},_measureHeight:{value:function(){return this.element.clientHeight}},_measureWidth:{value:function(){return this.element.clientWidth}},_measureRowHeight:{value:function(){return this.flow._repetition._drawnIterations[0].firstElement.scrollHeight}},_calculateLinearScrollingVector:{value:function(t,e){return[0,-500*e/t,0]}},_calculateScrollBarsVerticalLength:{value:function(t,e,i){var n=t/e/i;return n>1?1:n}},_calculateFlowPath:{value:function(t,e){return[{knots:[{knotPosition:[0,0,0],nextHandlerPosition:[0,1e3*e,0],nextDensity:3e3,previousDensity:3e3},{knotPosition:[0,3e3*e,0],previousHandlerPosition:[0,2e3*e,0],nextDensity:3e3,previousDensity:3e3}],units:{},headOffset:1,tailOffset:t/e}]}},_calculateCameraPosition:{value:function(t,e,i){return[t/2,e/2+i,e/2]}},_calculateCameraTargetPoint:{value:function(t,e,i){return[t/2,e/2+i,0]}},handleTranslateStart:{value:function(){this._scrollBars.verticalLength<1&&(this._scrollBars.opacity=.5)}},handleTranslateEnd:{value:function(){this._scrollBars.opacity=0}},__scroll:{value:0},_scroll:{get:function(){return this.__scroll},set:function(t){this.__scroll=t,this._scrollBars.verticalScroll=this._calculateScrollBarsVerticalScroll(t,this._height,this._rowHeight,this.flow._numberOfIterations,this._scrollBars.verticalLength)}},_calculateScrollBarsVerticalScroll:{value:function(t,e,i,n,r){return 1===r?0:t*(1-r)/(n-e/i)}},_content:{value:null},content:{set:function(t){this._content=t,this.defineBinding("flow.content",{"<-":"content"})},get:function(){return this._content}},_contentController:{value:null},contentController:{set:function(t){this._contentController=t,this.defineBinding("flow.contentController",{"<-":"contentController"})},get:function(){return this._contentController}},isSelectionEnabled:{value:null},observeProperty:{value:function(t,e,i,n,l){return"objectAtCurrentIteration"!==t&&"currentIteration"!==t?r(this,t,e,i,n,l):(o(t,":iteration.object"),this.flow?this.flow.observeProperty(t,e,i,n,l):void 0)}},templateDidLoad:{value:function(){var t=this,e=this.flow.didDraw;this.flow.didDraw=function(){t.flow._repetition._drawnIterations[0]&&(t.needsDraw=!0,t.flow.didDraw=e)},this._scrollBars.opacity=0}}})}});