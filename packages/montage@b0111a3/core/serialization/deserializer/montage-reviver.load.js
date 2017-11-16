montageDefine("b0111a3","core/serialization/deserializer/montage-reviver",{dependencies:["../../core","./properties-deserializer","./self-deserializer","./unit-deserializer","../../module-reference","../alias","../../promise"],factory:function(e,t,i){var r=e("../../core").Montage,n=e("./properties-deserializer").PropertiesDeserializer,a=e("./self-deserializer").SelfDeserializer,o=e("./unit-deserializer").UnitDeserializer,s=e("../../module-reference").ModuleReference,u=e("../alias").Alias,l=e("../../promise").Promise,c=r.specialize({_require:{value:null},_objectRequires:{value:null},init:{value:function(e,t){if("function"!=typeof e)throw new Error("Function 'require' missing.");if("string"!=typeof e.location)throw new Error("Function 'require' location is missing");if("object"!=typeof t&&"undefined"!=typeof t)throw new Error("Parameter 'objectRequires' should be an object.");return this._require=e,this._objectRequires=t,this}},getExports:{value:function(e,t){var i;for(t=e.resolve(t),i=e.getModuleDescriptor(t);void 0!==i.redirect;)i=e.getModuleDescriptor(i.redirect);return void 0!==i.mappingRedirect?this.getExports(i.mappingRequire,i.mappingRedirect):i.exports}},getModule:{value:function(e,t){var i,r,n=this._objectRequires;return i=n&&t in n?n[t]:this._require,r=this.getExports(i,e),r||(r=i.async(e)),r}}}),v=t.MontageReviver=r.specialize({moduleLoader:{value:null},init:{value:function(e,t){return this.moduleLoader=(new c).init(e,t),this._require=e,this}},getTypeOf:{value:function(e){var t=typeof e;if(null===e)return"null";if(Array.isArray(e))return"array";if("object"===t&&1===Object.keys(e).length){if("@"in e)return"reference";if("/"in e)return"regexp";if("#"in e)return"Element";if("%"in e)return"Module"}return t}},_checkLabel:{value:function(e,t){return t&&":"!==e[0]?new Error('Aliases can only be defined in template properties (start with a colon (:)), "'+e+'".'):t||":"!==e[0]?void 0:new Error('Only aliases are allowed as template properties (start with a colon (:), "'+e+'".')}},reviveRootObject:{value:function(e,t,i){var r,n="alias"in e;if(r=this._checkLabel(i,n))return l.reject(r);var a;if(e["debugger"]&&console.log("enable debugger statement here"),"value"in e){if(t.hasUserObject(i))return a=t.getUserObject(i),t.setObjectLabel(a,i),a;var o;if("Element"===this.getTypeOf(e.value)){if(o=this.reviveElement(e.value,t,i),!l.is(o)){var s=this.reviveObjectLiteral(e,t);t.setUnitsToDeserialize(o,s,v._unitNames)}}else o=this.reviveValue(e.value,t,i);return o}return 0===Object.keys(e).length?t.hasUserObject(i)?(a=t.getUserObject(i),t.setObjectLabel(a,i),a):this.reviveExternalObject(e,t,i):this.reviveCustomObject(e,t,i)}},reviveElement:{value:function(e,t,i){var r=e["#"],n=t.getElementById(r);return n?(i&&t.setObjectLabel(n,i),n):l.reject(new Error("Element with id '"+r+"' was not found."))}},reviveModule:{value:function(e,t,i){var r=e["%"],n=t.getRequire();r=n.resolve(r);var a=n.getModuleDescriptor(r);return(new s).initWithIdAndRequire(a.id,a.require)}},reviveCustomObject:{value:function(e,t,i){return"alias"in e?this.reviveAlias(e,t,i):this.reviveMontageObject(e,t,i)}},reviveMontageObject:{value:function(e,t,i){var r,n,a,o=this,s=e.prototype||e.object;return s&&(n=v.parseObjectLocationId(s),r=this.moduleLoader.getModule(n.moduleId,i),a=n.objectName),l.is(r)?r.then(function(r){return"object"in e&&e.object.endsWith(".mjson")?o.instantiateMjsonObject(r,n.moduleId):o.instantiateMontageObject(e,r,a,t,i)},function(t){throw t.stack&&console.error(t.stack),new Error('Error deserializing "'+i+'" when loading module "'+n.moduleId+"' from '"+e.prototype+"' cause: "+t.message)}):"object"in e&&e.object.endsWith(".mjson")?o.instantiateMjsonObject(r,n.moduleId):this.instantiateMontageObject(e,r,a,t,i)}},instantiateMjsonObject:{value:function(t,i){var r=this,n=function(e,t){for(var i=e.resolve(t),r=e.getModuleDescriptor(i);r.redirect||r.mappingRedirect;)r.redirect?i=r.redirect:(e=r.mappingRequire,i=r.mappingRedirect),r=e.getModuleDescriptor(i);return r.require};return e.async("core/serialization/deserializer/montage-deserializer").then(function(e){return(new e.MontageDeserializer).init(JSON.stringify(t),n(r._require,i)).deserializeObject()})}},instantiateMontageObject:{value:function(e,t,i,r,n){var a,o,s=this;return a=this.getMontageObject(e,t,i,r,n),r.setObjectLabel(a,n),null!==a&&void 0!==a&&(a.isDeserializing=!0),o=this.reviveObjectLiteral(e,r),l.is(o)?o.then(function(e){return s.deserializeMontageObject(e,a,r,n)}):this.deserializeMontageObject(o,a,r,n)}},deserializeMontageObject:{value:function(e,t,i,r){var n;return"function"==typeof t.deserializeSelf?this.deserializeCustomMontageObject(t,e,i,r):(i.setUnitsToDeserialize(t,e,v._unitNames),n=this.deserializeMontageObjectProperties(t,e.properties,i),l.is(n)?n.then(function(){return t}):t)}},deserializeMontageObjectProperties:{value:function(e,t,i){var r;if("function"==typeof e.deserializeProperties){var a=(new n).initWithReviverAndObjects(this,i);r=e.deserializeProperties(a)}else for(var o in t)e[o]=t[o];return r}},deserializeCustomMontageObject:{value:function(e,t,i,r){var n,o=(new a).initWithObjectAndObjectDescriptorAndContextAndUnitNames(e,t,i,v._unitNames);return n=e.deserializeSelf(o),l.is(n)?n.then(function(e){return i.setObjectLabel(e,r),e}):"undefined"!=typeof n?(i.setObjectLabel(n,r),n):e}},getMontageObject:{value:function(e,t,i,r,n){var a;if(r.hasUserObject(n))return r.getUserObject(n);if("prototype"in e){if(!(i in t))throw new Error('Error deserializing "'+n+'": object named "'+i+'" was not found in "'+e.prototype+'". Available objects are: '+Object.keys(t)+".");return a=Object.create(t[i].prototype),a.isDeserializing=!0,"function"==typeof a.didCreate?a.didCreate():"function"==typeof a.constructor&&a.constructor(),a}if("object"in e){if(e.object.endsWith(".json"))return t;if(!(i in t))throw new Error('Error deserializing "'+n+'": object named "'+a+"' was not found given '"+e.object+"'");return t[i]}throw new Error("Error deserializing "+JSON.stringify(e)+', might need "prototype" or "object" on label '+JSON.stringify(n))}},reviveAlias:{value:function(e,t,i){var r=new u;return r.value=e.alias,t.setObjectLabel(r,i),r}},didReviveObjects:{value:function(e,t){var i,r=this;return i=this._deserializeUnits(t),l.is(i)?i.then(function(){r._invokeDeserializedFromSerialization(e,t)}):void this._invokeDeserializedFromSerialization(e,t)}},_invokeDeserializedFromSerialization:{value:function(e,t){var i;for(var r in e)i=e[r],null!==i&&void 0!==i&&delete i.isDeserializing,t.hasUserObject(r)||i&&"function"==typeof i.deserializedFromSerialization&&i.deserializedFromSerialization(r)}},_deserializeUnits:{value:function(e){var t,i,r=e.getUnitsToDeserialize(),n=v._unitRevivers;try{for(var a,s=0;a=r[s];s++){t=a.unitNames;for(var u,c=0;u=t[c];c++)u in a.objectDesc&&(i=(new o).initWithContext(e),n[u](i,a.object,a.objectDesc[u]))}}catch(f){return l.reject(f)}}},_createAssignValueFunction:{value:function(e,t){return function(i){e[t]=i}}},getCustomObjectTypeOf:{writable:!0,value:function(){}},reviveValue:{value:function(e,t,i){var r=this.getTypeOf(e);return"string"===r||"number"===r||"boolean"===r||"null"===r||"undefined"===r?this.reviveNativeValue(e,t,i):"regexp"===r?this.reviveRegExp(e,t,i):"reference"===r?this.reviveObjectReference(e,t,i):"array"===r?this.reviveArray(e,t,i):"object"===r?this.reviveObjectLiteral(e,t,i):"Element"===r?this.reviveElement(e,t,i):this._callReviveMethod("revive"+r,e,t,i)}},reviveNativeValue:{value:function(e,t,i){return i&&t.setObjectLabel(e,i),e}},reviveObjectLiteral:{value:function(e,t,i){var r,n=[];i&&t.setObjectLabel(e,i);for(var a in e)r=this.reviveValue(e[a],t),l.is(r)?n.push(r.then(this._createAssignValueFunction(e,a))):e[a]=r;return 0===n.length?e:l.all(n).then(function(){return e})}},reviveRegExp:{value:function(e,t,i){var e=e["/"],r=new RegExp(e.source,e.flags);return i&&t.setObjectLabel(r,i),r}},reviveObjectReference:{value:function(e,t,i){var e=e["@"],r=t.getObject(e);return r}},reviveArray:{value:function(e,t,i){var r,n=[];i&&t.setObjectLabel(e,i);for(var a=0,o=e.length;a<o;a++)r=this.reviveValue(e[a],t),l.is(r)?n.push(r.then(this._createAssignValueFunction(e,a))):e[a]=r;return 0===n.length?e:l.all(n).then(function(){return e})}},reviveExternalObject:{value:function(e,t,i){return l.reject(new Error("External object '"+i+"' not found in user objects."))}},_callReviveMethod:{value:function(e,t,i,r){return this[e](t,i,r)}}},{_unitRevivers:{value:Object.create(null)},_unitNames:{value:[]},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,t){return t.toUpperCase()}},_locationDescCache:{value:Object.create(null)},customObjectRevivers:{value:Object.create(null)},parseObjectLocationId:{value:function(e){var t,i,r,n,a=this._locationDescCache;return e in a?t=a[e]:(i=e.indexOf("["),i>0?(r=e.substr(0,i),n=e.slice(i+1,-1)):(r=e,this._findObjectNameRegExp.test(e),n=RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)),t={moduleId:r,objectName:n},a[e]=t),t}},defineUnitReviver:{value:function(e,t){this._unitRevivers[e]=t,this._unitNames.push(e)}},getTypeOf:{value:function(e){return this.prototype.getTypeOf.call(this,e)}},addCustomObjectReviver:{value:function(e){var t=this.customObjectRevivers;for(var i in e)if("getTypeOf"!==i&&"function"==typeof e[i]&&/^revive/.test(i)){if("undefined"!=typeof t[i])return new Error("Reviver '"+i+"' is already registered.");t[i]=e[i].bind(e)}this.prototype.getCustomObjectTypeOf=this.makeGetCustomObjectTypeOf(e.getTypeOf)}},resetCustomObjectRevivers:{value:function(){this.customObjectRevivers=Object.create(null),this.prototype.getCustomObjectTypeOf=function(){}}},makeGetCustomObjectTypeOf:{value:function(e){var t=this.prototype.getCustomObjectTypeOf;return function(i){return e(i)||t(i)}}}});"undefined"!=typeof t&&(t.MontageReviver=v)}});