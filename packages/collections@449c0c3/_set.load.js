montageDefine("449c0c3","_set",{dependencies:["./shim","./generic-collection","./generic-set","set","./_list","./_fast-set","./iterator","set"],factory:function(t,e,r){"use strict";var o,n,i=(t("./shim"),t("./generic-collection")),s=t("./generic-set");void 0!==global.Set&&"function"==typeof global.Set.prototype.values&&(o=r.exports=global.Set,o.Set=o,o.prototype.reduce=function(t,e){var r=arguments[2];return this.forEach(function(o){e=t.call(r,e,o,this)}),e},o.prototype.reduceRight=function(t,e){for(var r,o=arguments[2],n=this.values(),i=this.size,s=new Array(this.size),u=0;r=n.next().value;)s[--i]=r;for(;u++<i;)e=t.call(o,e,r,this);return e},o.prototype.equals=function(t,e){var r=this;return t&&"function"==typeof t.reduce&&this.size===(t.size||t.length)&&t.reduce(function(t,o){return t&&r.has(o,e)},!0)},o.prototype.constructClone=function(t){return new this.constructor(t,this.contentEquals,this.contentHash,this.getDefault)},o.prototype.toJSON=function(){return this.entriesArray()},o.prototype.one=function(){if(this.size>0)return this.values().next().value},o.prototype.pop=function(){if(this.size){for(var t,e,r=this.values();t=r.next().value;)e=t;return this["delete"](e,this.size-1),e}},o.prototype.shift=function(){if(this.size){var t=this.values().next().value;return this["delete"](t,0),t}},Object.defineProperty(o.prototype,"length",{get:function(){return this.size},enumerable:!0,configurable:!0}),o.from=function(t){var e=new this;return e.addEach(t),e},Object.addEach(o.prototype,i.prototype,!1),Object.addEach(o.prototype,s.prototype,!1));var u=t("./_list"),a=t("./_fast-set"),h=t("./iterator");n=function p(t,e,r,o){return p._init(p,this,t,e,r,o)},n._init=function(t,e,r,o,n,i){return e instanceof t?(o=o||Object.equals,n=n||Object.hash,i=i||Function.noop,e.contentEquals=o,e.contentHash=n,e.getDefault=i,e.order=new e.Order((void 0),o),e.store=new e.Store((void 0),function(t,e){return o(t.value,e.value)},function(t){return n(t.value)}),e.length=0,void e.addEach(r)):new t(r,o,n,i)},n.Set=n,n.CollectionsSet=n,Object.addEach(n.prototype,i.prototype),Object.addEach(n.prototype,s.prototype),n.from=i.from,Object.defineProperty(n.prototype,"size",i._sizePropertyDescriptor),n.prototype.Order=u,n.prototype.Store=a,n.prototype.constructClone=function(t){return new this.constructor(t,this.contentEquals,this.contentHash,this.getDefault)},n.prototype.has=function(t){var e=new this.order.Node(t);return this.store.has(e)},n.prototype.get=function(t,e){if(e)throw new Error("Set#get does not support second argument: equals");var r=new this.order.Node(t);return r=this.store.get(r),r?r.value:this.getDefault(t)},n.prototype.add=function(t){var e=new this.order.Node(t);if(!this.store.has(e)){this.length;return this.order.add(t),e=this.order.head.prev,this.store.add(e),this.length++,!0}return!1},n.prototype["delete"]=function(t,e){if(e)throw new Error("Set#delete does not support second argument: equals");var r=new this.order.Node(t);return!!this.store.has(r)&&(r=this.store.get(r),this.store["delete"](r),this.order.splice(r,1),this.length--,!0)},n.prototype.pop=function(){if(this.length){var t=this.order.head.prev.value;return this["delete"](t),t}},n.prototype.shift=function(){if(this.length){var t=this.order.head.next.value;return this["delete"](t),t}},n.prototype.one=function(){if(this.length>0)return this.store.one().value},n.prototype.clear=function(){this.store.clear(),this.order.clear(),this.length=0},Object.defineProperty(n.prototype,"_clear",{value:n.prototype.clear}),n.prototype.reduce=function(t,e){var r=arguments[2],o=this.order,n=0;return o.reduce(function(e,o){return t.call(r,e,o,n++,this)},e,this)},n.prototype.reduceRight=function(t,e){var r=arguments[2],o=this.order,n=this.length-1;return o.reduceRight(function(e,o){return t.call(r,e,o,n--,this)},e,this)},n.prototype.iterate=function(){return this.order.iterate()},n.prototype.values=function(){return new h(this.valuesArray())},n.prototype.log=function(){var t=this.store;return t.log.apply(t,arguments)},o?(o.prototype.valuesArray=s.prototype.valuesArray,o.prototype.entriesArray=s.prototype.entriesArray,r.exports=o,o.CollectionsSet=n):r.exports=n}});