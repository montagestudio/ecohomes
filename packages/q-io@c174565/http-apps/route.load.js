montageDefine("c174565","http-apps/route",{dependencies:["q","./status"],factory:function(n,t,r){var e=n("q"),u=n("./status");t.Cap=function(n,t){return t=t||u.notFound,function(r,e){return""===r.pathInfo||"/"===r.pathInfo?n(r,e):t(r,e)}},t.Tap=function(n,t){return function(r,u){var o=this,i=arguments;return e.when(t.apply(this,arguments),function(t){return t?t:n.apply(o,i)})}},t.Trap=function(n,t){return function(r,u){return e.when(n.apply(this,arguments),function(n){if(n)return n.headers=n.headers||{},t(n,r)||n})}},t.Branch=function(n,t){return n||(n={}),t||(t=u.notFound),function(r,e){if(!/^\//.test(r.pathInfo))return t(r,e);var u=r.pathInfo.slice(1),o=u.split("/"),i=decodeURIComponent(o.shift());return Object.has(n,i)?(r.scriptName=r.scriptName+i+"/",r.pathInfo=u.slice(i.length),Object.get(n,i)(r,e)):t(r,e)}},t.FirstFound=function(n){return function(t,r){function u(){var r=n[o++](t,r);return o<i?e.when(r,function(n){return 404===n.status?u():n}):r}var o=0,i=n.length;return u()}}}});