montageDefine("5711b7d","vendor/requirejs/tests/universal/universal-tests-built-expected",{dependencies:["tail","eye","newt"],factory:function(e,n,t){!function(e,n){"undefined"!=typeof t?t.exports=n():"function"==typeof define&&"object"==typeof define.amd?define("tail",[],function(){return n()}):this[e]=n()}("tail",function(){return{name:"tail"}}),!function(e,n){"undefined"!=typeof t?t.exports=n():"function"==typeof define&&"object"==typeof define.amd?define(e,n):this[e]=n()}("eye",function(){return{name:"eye"}}),define("eye",function(){}),function(e){e("newt",["require","tail","eye"],function(e){var n=e("tail"),t=e("eye");return{name:"newt",eyeName:t.name,tailName:n.name}})}("function"==typeof define&&define.amd?define:function(n,i){"undefined"!=typeof t&&t.exports?t.exports=i(e):window.myGlobal=i(function(e){return window[e]})}),function(e){e("spell",["require","newt"],function(e){var n=e("newt");return{name:"spell",newtName:n.name,tailName:n.tailName,eyeName:n.eyeName}})}("function"==typeof define&&define.amd?define:function(n,i){"undefined"!=typeof t&&t.exports?t.exports=i(e):window.myGlobal=i(function(e){return window[e]})}),e({baseUrl:e.isBrowser?"./":"./universal/"},["spell"],function(e){doh.register("universal",[function(n){n.is("spell",e.name),n.is("newt",e.newtName),n.is("tail",e.tailName),n.is("eye",e.eyeName)}]),doh.run()}),define("universal-tests",function(){})}});