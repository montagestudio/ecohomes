montageDefine("b0111a3","core/meta/validation-semantics",{dependencies:["../core","../deprecate","../logger"],factory:function(e,t,r){var i=e("../core").Montage,o=i,n=e("../deprecate"),c=(e("../logger").logger("objectDescriptor"),t.PropertyValidationSemantics=o.specialize({initWithObjectDescriptor:{value:function(e){return this._objectDescriptor=e,this}},_objectDescriptor:{value:void 0},objectDescriptor:{get:function(){return this._objectDescriptor}},compile:{value:function(e,t){o.compile.call(this,e,t)}},operators:{value:{isBound:function(e){return!e}}},evaluators:{value:{isBound:function(e,t){var r=this;return function(i,o){return i=r.count(e(i,o)),t(i,o)}}}},initWithBlueprint:{value:n.deprecateMethod(void 0,function(e){return this.initWithObjectDescriptor(e)},"initWithBlueprint","initWithObjectDescriptor")},blueprint:{get:n.deprecateMethod(void 0,function(){return this._blueprint},"blueprint","objectDescriptor")}}));for(var a in o.operators)c.operators[a]=o.operators[a];for(var u in o.evaluators)c.evaluators[u]=o.evaluators[u]}});