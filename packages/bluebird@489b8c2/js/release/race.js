"use strict";module.exports=function(r,t,n,e){function i(i,a){var c=n(i);if(c instanceof r)return u(c);if(i=o.asArray(i),null===i)return e("expecting an array or an iterable object but got "+o.classString(i));var f=new r(t);void 0!==a&&f._propagateFrom(a,3);for(var l=f._fulfill,v=f._reject,s=0,d=i.length;s<d;++s){var p=i[s];(void 0!==p||s in i)&&r.cast(p)._then(l,v,void 0,f,null)}return f}var o=require("./util"),u=function(r){return r.then(function(t){return i(t,r)})};r.race=function(r){return i(r,void 0)},r.prototype.race=function(){return i(this,void 0)}};