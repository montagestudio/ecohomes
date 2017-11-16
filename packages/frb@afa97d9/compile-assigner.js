function compile(e){return compile.semantics.compile(e)}var compileEvaluator=require("./compile-evaluator"),solve=require("./algebra"),Scope=require("./scope"),valueSyntax={type:"value"},trueScope={type:"literal",value:!0},falseScope={type:"literal",value:!1};module.exports=compile,compile.semantics={compile:function(e){var r=this.compilers;if("equals"===e.type){var t=this.compile(e.args[0]),a=this.compileEvaluator(e.args[1]);return r.equals(t,a)}if("if"===e.type){var n=this.compileEvaluator(e.args[0]),l=this.compile(e.args[1]),i=this.compile(e.args[2]);return r["if"](n,l,i)}if("and"===e.type||"or"===e.type){var o=solve(e.args[0],valueSyntax),u=solve(e.args[1],valueSyntax),c=this.compileEvaluator(e.args[0]),a=this.compileEvaluator(e.args[1]),s=this.compileEvaluator(o[1]),p=this.compileEvaluator(u[1]),t=this.compile(o[0]),v=this.compile(u[0]);return r[e.type](t,v,c,a,s,p)}if("everyBlock"===e.type){var f=this.compileEvaluator(e.args[0]),m=solve(e.args[1],{type:"literal",value:!0}),h=this.compile(m[0]),y=this.compileEvaluator(m[1]);return r.everyBlock(f,h,y)}if("parent"===e.type){var g=this.compile(e.args[0]);return function(e,r){return g(e,r.parent)}}if(r.hasOwnProperty(e.type)){var E=e.args.map(this.compileEvaluator,this.compileEvaluator.semantics);return 1===E.length?r[e.type].call(null,E[0]):2===E.length?r[e.type].call(null,E[0],E[1]):r[e.type].apply(null,E)}throw new Error("Can't compile assigner for "+JSON.stringify(e.type))},compileEvaluator:compileEvaluator,compilers:{property:function(e,r){return function(t,a){var n=e(a);if(n){var l=r(a);null!=l&&(Array.isArray(n)?n.set(l,t):n[l]=t)}}},get:function(e,r){return function(t,a){var n=e(a);if(n){var l=r(a);null!=l&&n.set(l,t)}}},has:function(e,r){return function(t,a){var n=e(a);if(n){var l=r(a);null!=t&&(t?(n.has||n.contains).call(n,l)||n.add(l):(n.has||n.contains).call(n,l)&&(n.remove||n["delete"]).call(n,l))}}},equals:function(e,r){return function(t,a){if(t)return e(r(a),a)}},"if":function(e,r,t){return function(a,n){var l=e(n);if(null!=l)return l?r(a,n):t(a,n)}},and:function(e,r,t,a,n,l){return function(i,o){null!=i&&(i?(e(n(trueScope),o),r(l(trueScope),o)):e(t(o)&&!a(o),o))}},or:function(e,r,t,a,n,l){return function(i,o){null!=i&&(i?e(t(o)||!a(o),o):(e(n(falseScope),o),r(l(falseScope),o)))}},rangeContent:function(e){return function(r,t){var a=e(t);a&&(r?a.swap(0,a.length,r):a.clear())}},mapContent:function(e){return function(r,t){var a=e(t);a&&(a.clear(),t.value&&a.addEach(r))}},reversed:function(e){return function(r,t){var a=e(t);a&&a.swap(0,a.length,r.reversed())}},everyBlock:function(e,r,t){return function(a,n){if(a){var l=e(n),i=t(n);l.forEach(function(e){r(i,n.nest(e))})}}}}};