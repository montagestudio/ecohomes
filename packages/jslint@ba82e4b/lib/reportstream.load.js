montageDefine("ba82e4b","lib/reportstream",{dependencies:["util","./stream","./reporter"],factory:function(t,e,r){!function(){"use strict";function e(t,e,r){this.reporter.report(t.file,t.linted),this.allOK=this.allOK&&t.linted.ok,r()}var i,o=t("util"),n=t("./stream").Transform,a=t("./reporter");i=function(t){var e=this;return this instanceof i?(t=t||{},t.objectMode=!0,n.call(this,t),this.reporter=a.makeReporter({log:function(t){e.emit("data",t)},err:function(t){e.emit("data",t)}},t.color,t.terse),void(this.allOK=!0)):new i(t)},o.inherits(i,n),i.prototype._transform=e,r.exports=i}()}});