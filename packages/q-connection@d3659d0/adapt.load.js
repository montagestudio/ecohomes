montageDefine("d3659d0","adapt",{dependencies:["q","q/queue"],factory:function(e,n,t){function s(e,n){var t;if(e.postMessage)t=function(t){e.postMessage(t,n)};else{if(!e.send){if(e.get&&e.put)return e;throw new Error("An adaptable message port required")}var s=o.defer();t=s.promise,e.on?s.resolve(e.send):e.addEventListener&&(e.addEventListener("open",function(){s.resolve(e.send)}),e.addEventListener("close",function(){a.close(),s.reject("Connection closed.")}))}var a=r();e.on?e.on("message",function(e){a.put(e)},!1):e.addEventListener?e.addEventListener("message",function(e){a.put(e.data)},!1):e.onmessage=function(e){a.put(e.data)},e.start&&e.start();var d=function(){return e.close&&e.close(),a.close()};return{get:a.get,put:function(n){return o.invoke(t,"call",e,n)},close:d,closed:a.closed}}var o=e("q"),r=e("q/queue");t.exports=s}});