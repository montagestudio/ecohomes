var Component=require("montage/ui/component").Component,Introduction=require("ui/cards/introduction.reel").Introduction;exports.Main=Component.specialize({constructor:{value:function(){this["super"]()}},panelDescriptors:{value:null},currentPanelKey:{value:null},configuration:{value:null},_hasBeenResized:{value:!1},_supportsWebGL:{value:null},supportsWebGL:{get:function(){if(null===this._supportsWebGL){var e={premultipliedAlpha:!1,antialias:!0,preserveDrawingBuffer:!1},t=document.createElement("canvas"),i=t.getContext("experimental-webgl",e)||t.getContext("webgl",e);this._supportsWebGL=!!i}return this._supportsWebGL}},viewKey:{value:null},sceneView:{value:null},templateDidLoad:{value:function(){this.viewKey=this.supportsWebGL?"webgl":"static",this.addEventListener("firstDraw",this)}},enterDocument:{value:function(e){e&&this.element.ownerDocument.defaultView.addEventListener("resize",this,!1)}},willDraw:{value:function(){if(this._hasBeenResized){var e=this.sceneView;this.sceneView&&(e.width=this.viewPortElement.offsetWidth,e.height=this.viewPortElement.offsetHeight,this._hasBeenResized=!1)}}},handleAction:{value:function(e){var t,i,n,s=e.detail?e.detail.get("panelKey"):void 0,a=this.panelDescriptors;if(s){for(t=0;!n&&(i=a[t]);t++)if(s===i.panelKey){n=i;break}t>-1&&(this.templateObjects.panelFlow.scrollToPanel(t),this.currentPanel=n)}}},_autoActivateRideTimeout:{value:null},handleFirstDraw:{value:function(e){if(e.target instanceof Introduction){this.removeEventListener("firstDraw",this);var t=this;this._autoActivateRideTimeout=setTimeout(function(){t._autoActivateRideTimeout=null,t.sceneView&&"function"==typeof t.sceneView.play&&t.sceneView.play()},2200)}this._hasBeenResized=!0,this.needsDraw=!0}},handleResize:{value:function(){this._hasBeenResized=!0,this.needsDraw=!0}}});