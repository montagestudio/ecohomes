montageDefine("39b8654","inflight",{dependencies:["wrappy","once"],factory:function(n,e,t){function r(n,e){return u[n]?(u[n].push(e),null):(u[n]=[e],l(n))}function l(n){return i(function e(){var t=u[n],r=t.length,l=c(arguments);try{for(var o=0;o<r;o++)t[o].apply(null,l)}finally{t.length>r?(t.splice(0,r),process.nextTick(function(){e.apply(null,l)})):delete u[n]}})}function c(n){for(var e=n.length,t=[],r=0;r<e;r++)t[r]=n[r];return t}var o=n("wrappy"),u=Object.create(null),i=n("once");t.exports=o(r)}});