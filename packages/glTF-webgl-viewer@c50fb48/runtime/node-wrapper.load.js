montageDefine("c50fb48","runtime/node-wrapper",{dependencies:["runtime/dependencies/gl-matrix","runtime/utilities","runtime/transform-helper"],factory:function(e,r,t){e("runtime/dependencies/gl-matrix");var n=(e("runtime/utilities").Utilities,e("runtime/transform-helper").TransformHelper);r.NodeWrapper=Object.create(Object.prototype,{_transformHelper:{value:null,writable:!0},node:{get:function(){return this._transformHelper.node}},init:{value:function(e){return this._transformHelper=Object.create(n).init(),this._transformHelper.node=e,this}},viewPointWillChange:{value:function(e,r,t){}},viewPointDidChange:{value:function(){this._transformHelper.viewPoint=this._scenePassRenderer.viewPoint}},viewPointMatrixDidUpdate:{value:function(){this._transformHelper.transformDidUpdate()}},scenePassRenderer:{get:function(){return this._scenePassRenderer},set:function(e){this._scenePassRenderer!=e&&(this._scenePassRenderer&&this._scenePassRenderer.removeObserver(this),this._scenePassRenderer=e,this._transformHelper.viewMatrix=e._viewPointMatrix,this._scenePassRenderer&&this._scenePassRenderer.addObserver(this))}},worldMatrix:{get:function(){return this.node.worldMatrix}},worldViewMatrix:{get:function(){return this._transformHelper.worldViewMatrix}},worldViewInverseTransposeMatrix:{get:function(){return this._transformHelper.worldViewInverseTransposeMatrix}}})}});