montageDefine("c50fb48","runtime/scene",{dependencies:["montage","runtime/component-3d","runtime/runtime-tf-loader","url","runtime/scene-resource-loader","q"],factory:function(e,t,r){var n=(e("montage").Montage,e("runtime/component-3d").Component3D),i=e("runtime/runtime-tf-loader").RuntimeTFLoader,s=e("url"),a=e("runtime/scene-resource-loader").SceneResourceLoader,o=e("q");t.Scene=n.specialize({constructor:{value:function(){this["super"]()}},_resourcesLoaded:{value:!1,writable:!0},sceneResourcesDidPrepare:{value:function(){this._resourcesLoaded||(this._prepareToRenderDefer&&this._prepareToRenderDefer.resolve(),this._resourcesLoaded=!0,this.dispatchEventNamed("resourcesDidLoad",!0,!1,this),this.status="loaded",console.log("resourcesDidLoad"))}},isLoaded:{value:function(){return"loaded"==this.status}},status:{value:0,writable:!0},path:{set:function(t){if(t){if(t.indexOf(".json")===-1)return;var r=s.parse(t);if(!r.scheme){var n=Object.keys(e.packages);t=s.resolve(n[0],t)}}if(t!==this._path){var a={};if(a.loadCompleted=function(e){this.totalBufferSize=o.totalBufferSize,this.glTFElement=e,this.status="loaded",console.log("scene loaded:"+this._path)}.bind(this),t){var o=Object.create(i);this.status="loading",o.initWithPath(t),o.delegate=a,o.load(null,null)}else this.scene=null;this._path=t}},get:function(){return this._path}},_prepareToRenderDefer:{value:null,writable:!0},prepareToRender:{value:function(e){if(null==this._prepareToRenderDefer){this._prepareToRenderDefer=o.defer();var t=Object.create(a).init(this.glTFElement,e,this);t.loadScene()}return this._prepareToRenderDefer.promise}},init:{value:function(){return this.initWithScene(this)}}})}});