require("runtime/dependencies/gl-matrix");var Base=require("runtime/base").Base,Animation=require("runtime/animation").Animation;exports.AnimationManager=Object.create(Base,{_animations:{value:null,writable:!0},animations:{get:function(){return this._animations},set:function(i){this._animations!=i&&(this._animations=i)}},targets:{get:function(){var i=[];return null!=this._animations&&this._animations.forEach(function(n){n.channels.forEach(function(n){i.push(n.target.id)},this)},this),i}},hasAnimation:{value:function(i,n){return null!=this._animations&&(null==n&&(n=this.targets),n.indexOf(i)!==-1)}},nodeHasAnimatedAncestor:{value:function(i){do{if(this.hasAnimation(i.id))return!0;i=i.parent}while(null!=i);return!1}},updateTargetsAtTime:{value:function(i,n){this.animations&&this.animations.forEach(function(t){t.updateTargetsAtTime(i,n)},this)}},init:{value:function(){return this.__Base_init(),this.animations=[],this}}});