montageDefine("b0111a3","core/meta/module-object-descriptor",{dependencies:["../core","../promise","./object-descriptor","../serialization/deserializer/montage-deserializer","../module-reference","../deprecate"],factory:function(e,t,r){function o(e,t){for(var r=e.resolve(t),o=e.getModuleDescriptor(r);o.redirect||o.mappingRedirect;)o.redirect?r=o.redirect:(e=o.mappingRequire,r=o.mappingRedirect),o=e.getModuleDescriptor(r);return o.require}var i=e("../core").Montage,n=e("../promise").Promise,c=e("./object-descriptor").ObjectDescriptor,a=e("../serialization/deserializer/montage-deserializer").MontageDeserializer,u=e("../module-reference").ModuleReference,l=e("../deprecate"),d=Object.create(null),s=t.ModuleObjectDescriptor=c.specialize({initWithModuleAndExportName:{value:function(e,t){var r=c.prototype.initWithName.call(this,t);return r.module=e,r.exportName=t,r}},serializeSelf:{value:function(e){if(!this.module)throw new Error("Cannot serialize object descriptor without a module reference");if(!this.exportName)throw new Error("Cannot serialize object descriptor without an exportName");this["super"](e),this._setPropertyWithDefaults(e,"module",this.module),this._setPropertyWithDefaults(e,"exportName",this.exportName)}},deserializeSelf:{value:function(e){if(this["super"](e),this.module=e.getProperty("module"),this.exportName=e.getProperty("exportName"),!this.module)throw new Error("Cannot deserialize object descriptor without a module reference");if(!this.exportName)throw new Error("Cannot deserialize object descriptor without an exportName")}},module:{value:null},exportName:{value:null},objectDescriptorInstanceModule:{serializable:!1,value:null}},{getObjectDescriptorWithModuleId:{value:function(e,t){if(e.search(/\.meta$/)===-1&&e.search(/\.mjson$/)===-1)throw new Error(e+" object descriptor module id does not end in '.meta' or '.mjson'");if(!t)throw new Error("Require needed to get object descriptor "+e);var r,i=t.location+"#"+e;return i in d?d[i]:d[i]=t.async(e).then(function(i){return r=o(t,e),(new a).init(JSON.stringify(i),r).deserializeObject()}).then(function(o){if(!s.prototype.isPrototypeOf(o))throw new Error("Object in "+e+" is not a module-object-descriptor");return o.objectDescriptorInstanceModule=(new u).initWithIdAndRequire(e,t),o._parentReference?o._parentReference.promise(r).then(function(e){return o._parent=e,o}):o})}},createDefaultObjectDescriptorForObject:{value:function(e){var t=i.getInfoForObject(e).isInstance?Object.getPrototypeOf(e):e,r=i.getInfoForObject(t);return r.objectName&&r.moduleId?this["super"](e).then(function(e){return e.module=(new u).initWithIdAndRequire(r.moduleId,r.require),e.exportName=r.objectName,e}):n.reject("Cannot create module-object-descriptor for an object that has no been loaded from a module")}},getBlueprintWithModuleId:{value:l.deprecateMethod(void 0,function(e,t){return s.getObjectDescriptorWithModuleId(e,t)},"ModuleBlueprint.getBlueprintWithModuleId","ModuleObjectDescriptor.getObjectDescriptorWithModuleId")},createDefaultBlueprintForObject:{value:l.deprecateMethod(void 0,function(e){return s.createDefaultObjectDescriptorForObject(e)},"ModuleBlueprint.createDefaultBlueprintForObject","ModuleObjectDescriptor.createDefaultObjectDescriptorForObject")}})}});