montageDefine("ba82e4b","lib/linter",{dependencies:[],factory:function(r,e,t){function n(r,e){"use strict";var t=r||{};return e?(Object.keys(e).forEach(function(r){t.hasOwnProperty(r)||(t[r]=e[r])}),t):t}function o(r){"use strict";return 65279===r.charCodeAt(0)&&(r=r.slice(1)),r=r.replace(/^#!.*/,"")}e.merge=n,e.preprocessScript=o,e.doLint=function(r,e,t){"use strict";var n,i;return e=o(e),n=r(e,t),i=r.data(),void 0===i.ok&&(i.ok=n),i.options=t,i.errors=i.errors||i.warnings,i}}});