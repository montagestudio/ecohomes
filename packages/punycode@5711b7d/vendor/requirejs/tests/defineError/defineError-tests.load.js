montageDefine("5711b7d","vendor/requirejs/tests/defineError/defineError-tests",{dependencies:[],factory:function(r,e,n){r.onError=function(r){var e=r.toString().indexOf("#defineerror")!==-1,n="undefined"==typeof navigator||navigator.userAgent.indexOf("MSIE 6.0")===-1;doh.register("defineError",[function(r){r.is(n,e)}]),doh.run()},r({baseUrl:r.isBrowser?"./":"./defineError",catchError:{define:!0}},["main"],function(r){doh.register("defineError2",[function(e){e.is(void 0,r&&r.errorName)}]),doh.run()})}});