function defineBindings(n,e,i){if(e)for(var t in e)defineBinding(n,t,e[t],i);return n}function defineBinding(n,e,i,t){t=t||defineBinding.empty;var r,d,g=defineBinding.getBindings(n);if(g.has(e))throw new Error("Can't bind to already bound target, "+JSON.stringify(e));return ONE_WAY in i||TWO_WAY in i||COMPUTE in i?(g.set(e,i),i.target=n,(r=i.parameters||t.parameters)&&(i.parameters=r),(d=i.document||t.document)&&(i.document=d),i.components=i.components||t.components,i.cancel=COMPUTE in i?defineBinding.compute(n,e,i):defineBinding.bind(n,e,i),exports.count++):(GET in i||SET in i||WRITABLE in i||(i.writable=!0),CONFIGURABLE in i||(i.configurable=!0),ENUMERABLE in i||(i.enumerable=!0),Object.defineProperty(n,e,i)),n}function getBindings(n){var e;return bindingsForObject.get(n)||bindingsForObject.set(n,e=new Map)&&e}function getBinding(n,e){var i=getBindings(n);return i.get(e)}function cancelBindings(n){for(var e=getBindings(n),i=e.keys();name=i.next().value;)cancelBinding(n,name,e)}function cancelBinding(n,e,i){if(!i&&(i=getBindings(n),!i.has(e)))throw new Error("Can't cancel non-existent binding to "+JSON.stringify(e));var t=i.get(e);t&&t.cancel&&(t.cancel(),i["delete"](e),exports.count--,i.size<1&&bindingsForObject["delete"](n))}var Map=require("collections/map"),bind=require("./bind"),compute=require("./compute"),observe=require("./observe"),stringify=require("./stringify"),bindingsForObject=new Map,owns=Object.prototype.hasOwnProperty,ONE_WAY="<-",TWO_WAY="<->",COMPUTE="compute",GET="get",SET="set",WRITABLE="writable",CONFIGURABLE="configurable",ENUMERABLE="enumerable";exports.count=0,exports.bindings=bindingsForObject,exports.defineBindings=defineBindings,exports.defineBinding=defineBinding,defineBinding.empty=Object.empty,defineBinding.getBindings=getBindings,defineBinding.compute=compute,defineBinding.bind=bind,exports.getBindings=getBindings,exports.getBinding=getBinding,exports.cancelBindings=cancelBindings,exports.cancelBinding=cancelBinding;