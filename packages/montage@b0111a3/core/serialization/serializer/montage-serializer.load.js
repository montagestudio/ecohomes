montageDefine("b0111a3","core/serialization/serializer/montage-serializer",{dependencies:["../../core","./montage-malker","./montage-builder","./montage-labeler","./montage-visitor","../../logger"],factory:function(e,i,t){var a=e("../../core").Montage,r=e("./montage-malker").MontageWalker,n=e("./montage-builder").MontageBuilder,l=e("./montage-labeler").MontageLabeler,s=e("./montage-visitor").MontageVisitor,o=(e("../../logger").logger("montage-serializer"),a.specialize({_require:{value:null},_visitor:{value:null},_labeler:{value:null},_builder:{value:null},_serializationIndentation:{value:2},_malker:{value:null},initWithRequire:{value:function(e){return this._require=e,this._builder=new n,this._labeler=new l,this._visitor=(new s).initWithBuilderAndLabelerAndRequireAndUnits(this._builder,this._labeler,this._require,this.constructor._units),this._malker=new r(this._visitor),this}},getExternalObjects:{value:function(){return this._visitor.getExternalObjects()}},getExternalElements:{value:function(){return this._visitor.getExternalElements()}},setSerializationIndentation:{value:function(e){this._serializationIndentation=e}},serialize:{value:function(e){var i;this._labeler.initWithObjects(e);for(var t in e)this._malker.visit(e[t]);return i=this._formatSerialization(this._builder.getSerialization(this._serializationIndentation))}},serializeObject:{value:function(e){return this.serialize({root:e})}},_formatSerializationBindingsRegExp:{value:/\{\s*("(?:<->?)")\s*:\s*("[^"]+"\s*(?:,\s*"converter"\s*:\s*\{\s*"@"\s*:\s*"[^"]+"\s*\}\s*|,\s*"deferred"\s*:\s*(true|false)\s*)*)\}/gi},_formatSerializationBindingsReplacer:{value:function(e,i,t){return"{"+i+": "+t.replace(/\n\s*/g,"").replace(/,\s*/g,", ")+"}"}},_formatSerializationBindings:{value:function(e){return e.replace(this._formatSerializationBindingsRegExp,this._formatSerializationBindingsReplacer)}},_formatSerializationReferencesRegExp:{value:/\{\s*("[#@]")\s*:\s*("[^"]+")\s*\}/gi},_formatSerializationReferences:{value:function(e){return e.replace(this._formatSerializationReferencesRegExp,"{$1: $2}")}},_formatSerialization:{value:function(e){return this._formatSerializationBindings(this._formatSerializationReferences(e))}}},{_units:{value:Object.create(null)},defineSerializationUnit:{value:function(e,i){this._units[e]=i}},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,i){return i.toUpperCase()}},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},getDefaultObjectNameForModuleId:{value:function(e){return this._findObjectNameRegExp.test(e),RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)}}}));i.MontageSerializer=o,i.serialize=function(e,i){return(new o).initWithRequire(i).serializeObject(e)}}});