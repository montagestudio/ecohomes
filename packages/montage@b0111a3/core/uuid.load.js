montageDefine("b0111a3","core/uuid",{dependencies:["core/core"],factory:function(e,t,i){function n(){var e,t=u,i=s;return i[0]=t[15&(e=4294967296*Math.random())],i[1]=t[15&(e>>>=4)],i[2]=t[15&(e>>>=4)],i[3]=t[15&(e>>>=4)],i[4]=t[15&(e>>>=4)],i[5]=t[15&(e>>>=4)],i[6]=t[15&(e>>>=4)],i[7]=t[15&(e>>>=4)],i[9]=t[15&(e=4294967296*Math.random())],i[10]=t[15&(e>>>=4)],i[11]=t[15&(e>>>=4)],i[12]=t[15&(e>>>=4)],i[15]=t[15&(e>>>=4)],i[16]=t[15&(e>>>=4)],i[17]=t[15&(e>>>=4)],i[19]=t[3&(e=4294967296*Math.random())|8],i[20]=t[15&(e>>>=4)],i[21]=t[15&(e>>>=4)],i[22]=t[15&(e>>>=4)],i[24]=t[15&(e>>>=4)],i[25]=t[15&(e>>>=4)],i[26]=t[15&(e>>>=4)],i[27]=t[15&(e>>>=4)],i[28]=t[15&(e=4294967296*Math.random())],i[29]=t[15&(e>>>=4)],i[30]=t[15&(e>>>=4)],i[31]=t[15&(e>>>=4)],i[32]=t[15&(e>>>=4)],i[33]=t[15&(e>>>=4)],i[34]=t[15&(e>>>=4)],i[35]=t[15&(e>>>=4)],i.join("")}var r=e("core/core").Montage,u="0123456789ABCDEF".split(""),o="__proto__",a="value",c=Object.prototype.hasOwnProperty,s="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");t.Uuid=Object.create(Object.prototype,{generate:{enumerable:!1,value:n}});t.generate=n;var x=function(){var e=n(),t=r.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:x.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&a in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&o in this||(this._uuid=e))}catch(i){}return this._uuid=e,e},d=function(){return c.call(this,"_uuid")&&this._uuid?this._uuid:x.call(this)};r.defineUuidProperty=function(e){Object.defineProperty(e,"_uuid",{enumerable:!1,value:void 0,writable:!0}),Object.defineProperty(e,"uuid",{configurable:!0,get:d,set:Function.noop,enumerable:!1})}}});