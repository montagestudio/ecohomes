var Montage=require("montage").Montage,glTFNode=require("runtime/glTF-node").glTFNode;exports.glTFScene=Object.create(Montage.prototype,{_rootNode:{value:null,writable:!0},rootNode:{get:function(){return this._rootNode},set:function(t){this._rootNode=t}},_id:{value:null,writable:!0},id:{get:function(){return this._id},set:function(t){this._id=t}},baseURL:{value:null,writable:!0},_animationManager:{value:null,writable:!0},animationManager:{get:function(){return this._animationManager},set:function(t){this._animationManager=t}},init:{value:function(){return this.rootNode=Object.create(glTFNode),this.rootNode.init(),this}},duration:{get:function(){if(this.animationManager){var t=this.animationManager.animations;if(t&&t.length)return t[0].duration}}},_name:{value:null,writable:!0},name:{enumerable:!0,get:function(){return this._name},set:function(t){this._name=t}}});