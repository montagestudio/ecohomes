montageDefine("c50fb48","runtime/camera",{dependencies:["runtime/base"],factory:function(e,t,n){var i=e("runtime/base").Base;t.Camera=Object.create(i,{_projection:{value:null,writable:!0},projection:{get:function(){return this._projection},set:function(e){this._projection=e}},init:{value:function(){return this.__Base_init(),this}}})}});