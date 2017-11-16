montageDefine("449c0c3","_dict",{dependencies:["./shim","./generic-collection","./generic-map","dict"],factory:function(t,e,s){"use strict";function o(t,e){return this instanceof o?(e=e||Function.noop,this.getDefault=e,this.store=Object.create(null),this.length=0,void this.addEach(t)):new o(t,e)}var i=(t("./shim"),t("./generic-collection")),r=t("./generic-map");s.exports=o,o.Dict=o,Object.addEach(o.prototype,i.prototype),Object.addEach(o.prototype,r.prototype),o.from=i.from,o.prototype.constructClone=function(t){return new this.constructor(t,this.getDefault)},o.prototype.assertString=function(t){if("string"!=typeof t)throw new TypeError("key must be a string but Got "+t)},Object.defineProperty(o.prototype,"$__proto__",{writable:!0}),Object.defineProperty(o.prototype,"_hasProto",{get:function(){return this.hasOwnProperty("$__proto__")&&"undefined"!=typeof this._protoValue}}),Object.defineProperty(o.prototype,"_protoValue",{get:function(){return this.$__proto__},set:function(t){this.$__proto__=t}}),Object.defineProperty(o.prototype,"size",i._sizePropertyDescriptor),o.prototype.get=function(t,e){return this.assertString(t),"__proto__"===t?this._hasProto?this._protoValue:arguments.length>1?e:this.getDefault(t):t in this.store?this.store[t]:arguments.length>1?e:this.getDefault(t)},o.prototype.set=function(t,e){this.assertString(t);var s="__proto__"===t;return(s?this._hasProto:t in this.store)?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,s?this._protoValue:this.store[t]),s?this._protoValue=e:this.store[t]=e,this.dispatchesMapChanges&&this.dispatchMapChange(t,e),!1):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,void 0),this.length++,s?this._protoValue=e:this.store[t]=e,this.dispatchesMapChanges&&this.dispatchMapChange(t,e),!0)},o.prototype.has=function(t){return this.assertString(t),"__proto__"===t?this._hasProto:t in this.store},o.prototype["delete"]=function(t){return this.assertString(t),"__proto__"===t?!!this._hasProto&&(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,this._protoValue),this._protoValue=void 0,this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0),!0):t in this.store&&(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,this.store[t]),delete this.store[t],this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0),!0)},o.prototype.clear=function(){var t;this._hasProto&&(this.dispatchesMapChanges&&this.dispatchBeforeMapChange("__proto__",this._protoValue),this._protoValue=void 0,this.dispatchesMapChanges&&this.dispatchMapChange("__proto__",void 0));for(t in this.store)this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,this.store[t]),delete this.store[t],this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0);this.length=0},o.prototype.reduce=function(t,e,s){this._hasProto&&(e=t.call(s,e,"$__proto__","__proto__",this));var o=this.store;for(var i in this.store)e=t.call(s,e,o[i],i,this);return e},o.prototype.reduceRight=function(t,e,s){var o=this,i=this.store;return e=Object.keys(this.store).reduceRight(function(e,r){return t.call(s,e,i[r],r,o)},e),this._hasProto?t.call(s,e,this._protoValue,"__proto__",o):e},o.prototype.one=function(){var t;for(t in this.store)return this.store[t];return this._protoValue},o.prototype.toJSON=function(){return this.toObject()}}});