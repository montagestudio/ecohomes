montageDefine("b0111a3","core/messageformat",{dependencies:[],factory:function(l,r,n){!function(l){function e(l,r){var n;if(l&&r&&(e.locale[l]=r),n=l=l||"en",r=r||e.locale[n=e.Utils.getFallbackLocale(l)],!r)throw new Error("Plural Function not found for locale: "+l);this.pluralFunc=r,this.locale=l,this.fallbackLocale=n}e.locale={en:function(l){return 1===l?"one":"other"}},e.SafeString=function(l){this.string=l},e.SafeString.prototype.toString=function(){return this.string.toString()},e.Utils={numSub:function(l,r,n){return l.replace(/^#|[^\\]#/g,function(l){var e=l&&2===l.length?l.charAt(0):"";return e+'" + (function(){ var x = '+r+';\nif( isNaN(x) ){\nthrow new Error("MessageFormat: `"+lastkey_'+n+'+"` isnt a number.");\n}\nreturn x;\n})() + "'})},escapeExpression:function(l){var r={"\n":"\\n",'"':'\\"'},n=/[\n"]/g,u=/[\n"]/,t=function(l){return r[l]||"&amp;"};return l instanceof e.SafeString?l.toString():null===l||l===!1?"":u.test(l)?l.replace(n,t):l},getFallbackLocale:function(l){for(var r=l.indexOf("-")>=0?"-":"_";!e.locale.hasOwnProperty(l);)if(l=l.substring(0,l.lastIndexOf(r)),0===l.length)return null;return l}};var u=function(){var l={parse:function(l,r){function n(l,r,n){for(var e=l,u=n-l.length,t=0;t<u;t++)e=r+e;return e}function e(l){var r=l.charCodeAt(0);if(r<=255)var e="x",u=2;else var e="u",u=4;return"\\"+e+n(r.toString(16).toUpperCase(),"0",u)}function u(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,e)+'"'}function t(l){N<I||(N>I&&(I=N,M=[]),M.push(l))}function a(){var l="start@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=N,e=s(),u=null!==e?function(l){return{type:"program",program:l}}(e):null;if(null!==u)var t=u;else{var t=null;N=n}return j[l]={nextPos:N,result:t},t}function s(){var l="messageFormatPattern@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=N,e=N,u=P();if(null!==u){for(var t=[],a=v();null!==a;){t.push(a);var a=v()}if(null!==t)var s=[u,t];else{var s=null;N=e}}else{var s=null;N=e}var f=null!==s?function(l,r){var n=[];l&&l.val&&n.push(l);for(var e in r)r.hasOwnProperty(e)&&n.push(r[e]);return{type:"messageFormatPattern",statements:n}}(s[0],s[1]):null;if(null!==f)var o=f;else{var o=null;N=n}return j[l]={nextPos:N,result:o},o}function v(){var r="messageFormatPatternRight@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N,u=N;if("{"===l.substr(N,1)){var a="{";N+=1}else{var a=null;O&&t('"{"')}if(null!==a){var s=S();if(null!==s){var v=f();if(null!==v){var o=S();if(null!==o){if("}"===l.substr(N,1)){var i="}";N+=1}else{var i=null;O&&t('"}"')}if(null!==i){var c=P();if(null!==c)var p=[a,s,v,o,i,c];else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}var m=null!==p?function(l,r){var n=[];return l&&n.push(l),r&&r.val&&n.push(r),{type:"messageFormatPatternRight",statements:n}}(p[2],p[5]):null;if(null!==m)var h=m;else{var h=null;N=e}return j[r]={nextPos:N,result:h},h}function f(){var r="messageFormatElement@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N,u=N,a=F();if(null!==a){var s=N;if(","===l.substr(N,1)){var v=",";N+=1}else{var v=null;O&&t('","')}if(null!==v){var f=o();if(null!==f)var i=[v,f];else{var i=null;N=s}}else{var i=null;N=s}var c=null!==i?i:"";if(null!==c)var p=[a,c];else{var p=null;N=u}}else{var p=null;N=u}var m=null!==p?function(l,r){var n={type:"messageFormatElement",argumentIndex:l};return r&&r.length?n.elementFormat=r[1]:n.output=!0,n}(p[0],p[1]):null;if(null!==m)var h=m;else{var h=null;N=e}return j[r]={nextPos:N,result:h},h}function o(){var r="elementFormat@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N,u=N,a=S();if(null!==a){if("plural"===l.substr(N,6)){var s="plural";N+=6}else{var s=null;O&&t('"plural"')}if(null!==s){var v=S();if(null!==v){if(","===l.substr(N,1)){var f=",";N+=1}else{var f=null;O&&t('","')}if(null!==f){var o=S();if(null!==o){var p=i();if(null!==p){var m=S();if(null!==m)var h=[a,s,v,f,o,p,m];else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}var g=null!==h?function(l,r){return{type:"elementFormat",key:l,val:r.val}}(h[1],h[5]):null;if(null!==g)var x=g;else{var x=null;N=e}if(null!==x)var P=x;else{var F=N,_=N,y=S();if(null!==y){if("select"===l.substr(N,6)){var d="select";N+=6}else{var d=null;O&&t('"select"')}if(null!==d){var b=S();if(null!==b){if(","===l.substr(N,1)){var w=",";N+=1}else{var w=null;O&&t('","')}if(null!==w){var k=S();if(null!==k){var E=c();if(null!==E){var A=S();if(null!==A)var I=[y,d,b,w,k,E,A];else{var I=null;N=_}}else{var I=null;N=_}}else{var I=null;N=_}}else{var I=null;N=_}}else{var I=null;N=_}}else{var I=null;N=_}}else{var I=null;N=_}var M=null!==I?function(l,r){return{type:"elementFormat",key:l,val:r.val}}(I[1],I[5]):null;if(null!==M)var U=M;else{var U=null;N=F}if(null!==U)var P=U;else var P=null}return j[r]={nextPos:N,result:P},P}function i(){var l="pluralStyle@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=N,e=p(),u=null!==e?function(l){return{type:"pluralStyle",val:l}}(e):null;if(null!==u)var t=u;else{var t=null;N=n}return j[l]={nextPos:N,result:t},t}function c(){var l="selectStyle@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=N,e=h(),u=null!==e?function(l){return{type:"selectStyle",val:l}}(e):null;if(null!==u)var t=u;else{var t=null;N=n}return j[l]={nextPos:N,result:t},t}function p(){var l="pluralFormatPattern@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=N,e=N,u=m(),t=null!==u?u:"";if(null!==t){for(var a=[],s=g();null!==s;){a.push(s);var s=g()}if(null!==a)var v=[t,a];else{var v=null;N=e}}else{var v=null;N=e}var f=null!==v?function(l,r){var n={type:"pluralFormatPattern",pluralForms:r};return l?n.offset=l:n.offset=0,n}(v[0],v[1]):null;if(null!==f)var o=f;else{var o=null;N=n}return j[l]={nextPos:N,result:o},o}function m(){var r="offsetPattern@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N,u=N,a=S();if(null!==a){if("offset"===l.substr(N,6)){var s="offset";N+=6}else{var s=null;O&&t('"offset"')}if(null!==s){var v=S();if(null!==v){if(":"===l.substr(N,1)){var f=":";N+=1}else{var f=null;O&&t('":"')}if(null!==f){var o=S();if(null!==o){var i=d();if(null!==i){var c=S();if(null!==c)var p=[a,s,v,f,o,i,c];else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}}else{var p=null;N=u}var m=null!==p?function(l){return l}(p[5]):null;if(null!==m)var h=m;else{var h=null;N=e}return j[r]={nextPos:N,result:h},h}function h(){var l="selectFormatPattern@"+N,r=j[l];if(r)return N=r.nextPos,r.result;for(var n=N,e=[],u=g();null!==u;){e.push(u);var u=g()}var t=null!==e?function(l){return{type:"selectFormatPattern",pluralForms:l}}(e):null;if(null!==t)var a=t;else{var a=null;N=n}return j[l]={nextPos:N,result:a},a}function g(){var r="pluralForms@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N,u=N,a=S();if(null!==a){var v=x();if(null!==v){var f=S();if(null!==f){if("{"===l.substr(N,1)){var o="{";N+=1}else{var o=null;O&&t('"{"')}if(null!==o){var i=S();if(null!==i){var c=s();if(null!==c){var p=S();if(null!==p){if("}"===l.substr(N,1)){var m="}";N+=1}else{var m=null;O&&t('"}"')}if(null!==m)var h=[a,v,f,o,i,c,p,m];else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}}else{var h=null;N=u}var g=null!==h?function(l,r){return{type:"pluralForms",key:l,val:r}}(h[1],h[5]):null;if(null!==g)var P=g;else{var P=null;N=e}return j[r]={nextPos:N,result:P},P}function x(){var r="stringKey@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N,u=F(),a=null!==u?function(l){return l}(u):null;if(null!==a)var s=a;else{var s=null;N=e}if(null!==s)var v=s;else{var f=N,o=N;if("="===l.substr(N,1)){var i="=";N+=1}else{var i=null;O&&t('"="')}if(null!==i){var c=d();if(null!==c)var p=[i,c];else{var p=null;N=o}}else{var p=null;N=o}var m=null!==p?function(l){return l}(p[1]):null;if(null!==m)var h=m;else{var h=null;N=f}if(null!==h)var v=h;else var v=null}return j[r]={nextPos:N,result:v},v}function P(){var l="string@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=N,e=N,u=S();if(null!==u){var t=[],a=N,s=S();if(null!==s){var v=_();if(null!==v){var f=S();if(null!==f)var o=[s,v,f];else{var o=null;N=a}}else{var o=null;N=a}}else{var o=null;N=a}for(;null!==o;){t.push(o);var a=N,s=S();if(null!==s){var v=_();if(null!==v){var f=S();if(null!==f)var o=[s,v,f];else{var o=null;N=a}}else{var o=null;N=a}}else{var o=null;N=a}}if(null!==t)var i=[u,t];else{var i=null;N=e}}else{var i=null;N=e}var c=null!==i?function(l,r){for(var n=[],e=0;e<r.length;++e)for(var u=0;u<r[e].length;++u)n.push(r[e][u]);return{type:"string",val:l+n.join("")}}(i[0],i[1]):null;if(null!==c)var p=c;else{var p=null;N=n}return j[l]={nextPos:N,result:p},p}function F(){var r="id@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N,u=N,a=S();if(null!==a){if(null!==l.substr(N).match(/^[a-zA-Z$_]/)){var s=l.charAt(N);N++}else{var s=null;O&&t("[a-zA-Z$_]")}if(null!==s){var v=[];if(null!==l.substr(N).match(/^[^ 	\n\r,.+={}]/)){var f=l.charAt(N);N++}else{var f=null;O&&t("[^ \t\\n\\r,.+={}]")}for(;null!==f;)if(v.push(f),null!==l.substr(N).match(/^[^ 	\n\r,.+={}]/)){var f=l.charAt(N);N++}else{var f=null;O&&t("[^ \t\\n\\r,.+={}]")}if(null!==v){var o=S();if(null!==o)var i=[a,s,v,o];else{var i=null;N=u}}else{var i=null;N=u}}else{var i=null;N=u}}else{var i=null;N=u}var c=null!==i?function(l,r){return l+(r?r.join(""):"")}(i[1],i[2]):null;if(null!==c)var p=c;else{var p=null;N=e}return j[r]={nextPos:N,result:p},p}function _(){var l="chars@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=N,e=y();if(null!==e)for(var u=[];null!==e;){u.push(e);var e=y()}else var u=null;var t=null!==u?function(l){return l.join("")}(u):null;if(null!==t)var a=t;else{var a=null;N=n}return j[l]={nextPos:N,result:a},a}function y(){var r="char@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N;if(null!==l.substr(N).match(/^[^{}\\\0- 	\n\r]/)){var u=l.charAt(N);N++}else{var u=null;O&&t("[^{}\\\\\\0- \t\\n\\r]")}var a=null!==u?function(l){return l}(u):null;if(null!==a)var s=a;else{var s=null;N=e}if(null!==s)var v=s;else{var f=N;if("\\#"===l.substr(N,2)){var o="\\#";N+=2}else{var o=null;O&&t('"\\\\#"')}var i=null!==o?function(){return"\\#"}():null;if(null!==i)var c=i;else{var c=null;N=f}if(null!==c)var v=c;else{var p=N;if("\\{"===l.substr(N,2)){var m="\\{";N+=2}else{var m=null;O&&t('"\\\\{"')}var h=null!==m?function(){return"{"}():null;if(null!==h)var g=h;else{var g=null;N=p}if(null!==g)var v=g;else{var x=N;if("\\}"===l.substr(N,2)){var P="\\}";N+=2}else{var P=null;O&&t('"\\\\}"')}var F=null!==P?function(){return"}"}():null;if(null!==F)var _=F;else{var _=null;N=x}if(null!==_)var v=_;else{var y=N,d=N;if("\\u"===l.substr(N,2)){var S="\\u";N+=2}else{var S=null;O&&t('"\\\\u"')}if(null!==S){var w=b();if(null!==w){var k=b();if(null!==k){var E=b();if(null!==E){var A=b();if(null!==A)var I=[S,w,k,E,A];else{var I=null;N=d}}else{var I=null;N=d}}else{var I=null;N=d}}else{var I=null;N=d}}else{var I=null;N=d}var M=null!==I?function(l,r,n,e){return String.fromCharCode(parseInt("0x"+l+r+n+e))}(I[1],I[2],I[3],I[4]):null;if(null!==M)var U=M;else{var U=null;N=y}if(null!==U)var v=U;else var v=null}}}}return j[r]={nextPos:N,result:v},v}function d(){var r="digits@"+N,n=j[r];if(n)return N=n.nextPos,n.result;var e=N;if(null!==l.substr(N).match(/^[0-9]/)){var u=l.charAt(N);N++}else{var u=null;O&&t("[0-9]")}if(null!==u)for(var a=[];null!==u;)if(a.push(u),null!==l.substr(N).match(/^[0-9]/)){var u=l.charAt(N);N++}else{var u=null;O&&t("[0-9]")}else var a=null;var s=null!==a?function(l){return parseInt(l.join(""),10)}(a):null;if(null!==s)var v=s;else{var v=null;N=e}return j[r]={nextPos:N,result:v},v}function b(){var r="hexDigit@"+N,n=j[r];if(n)return N=n.nextPos,n.result;if(null!==l.substr(N).match(/^[0-9a-fA-F]/)){var e=l.charAt(N);N++}else{var e=null;O&&t("[0-9a-fA-F]")}return j[r]={nextPos:N,result:e},e}function S(){var l="_@"+N,r=j[l];if(r)return N=r.nextPos,r.result;var n=O;O=!1;for(var e=N,u=[],a=w();null!==a;){u.push(a);var a=w()}var s=null!==u?function(l){return l.join("")}(u):null;if(null!==s)var v=s;else{var v=null;N=e}return O=n,O&&null===v&&t("whitespace"),j[l]={nextPos:N,result:v},v}function w(){var r="whitespace@"+N,n=j[r];if(n)return N=n.nextPos,n.result;if(null!==l.substr(N).match(/^[ 	\n\r]/)){var e=l.charAt(N);N++}else{var e=null;O&&t("[ \t\\n\\r]")}return j[r]={nextPos:N,result:e},e}function k(){function r(l){l.sort();for(var r=null,n=[],e=0;e<l.length;e++)l[e]!==r&&(n.push(l[e]),r=l[e]);switch(n.length){case 0:return"end of input";case 1:return n[0];default:return n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}}var n=r(M),e=Math.max(N,I),t=e<l.length?u(l.charAt(e)):"end of input";return"Expected "+n+" but "+t+" found."}function E(){for(var r=1,n=1,e=!1,u=0;u<I;u++){var t=l.charAt(u);"\n"===t?(e||r++,n=1,e=!1):"\r"===t|"\u2028"===t||"\u2029"===t?(r++,n=1,e=!0):(n++,e=!1)}return{line:r,column:n}}var A={_:S,"char":y,chars:_,digits:d,elementFormat:o,hexDigit:b,id:F,messageFormatElement:f,messageFormatPattern:s,messageFormatPatternRight:v,offsetPattern:m,pluralFormatPattern:p,pluralForms:g,pluralStyle:i,selectFormatPattern:h,selectStyle:c,start:a,string:P,stringKey:x,whitespace:w};if(void 0!==r){if(void 0===A[r])throw new Error("Invalid rule name: "+u(r)+".")}else r="start";var N=0,O=!0,I=0,M=[],j={},U=A[r]();if(null===U||N!==l.length){var C=E();throw new this.SyntaxError(k(),C.line,C.column)}return U},toSource:function(){return this._source}};return l.SyntaxError=function(l,r,n){this.name="SyntaxError",this.message=l,this.line=r,this.column=n},l.SyntaxError.prototype=Error.prototype,l}();e.prototype.parse=function(){return u.parse.apply(u,arguments)},e.prototype.precompile=function(l){function r(l,a){a=a||{};var s,v,f,o="";switch(l.type){case"program":return r(l.program);case"messageFormatPattern":for(s=0;s<l.statements.length;++s)o+=r(l.statements[s],a);return t.begin+o+t.end;case"messageFormatPatternRight":for(s=0;s<l.statements.length;++s)o+=r(l.statements[s],a);return o;case"messageFormatElement":return a.pf_count=a.pf_count||0,o+='if(!d){\nthrow new Error("MessageFormat: No data passed to function.");\n}\n',l.output?o+='r += d["'+l.argumentIndex+'"];\n':(f="lastkey_"+(a.pf_count+1),o+="var "+f+' = "'+l.argumentIndex+'";\n',o+="var k_"+(a.pf_count+1)+"=d["+f+"];\n",o+=r(l.elementFormat,a)),o;case"elementFormat":return"select"===l.key?(o+=r(l.val,a),o+="r += (pf_"+a.pf_count+"[ k_"+(a.pf_count+1)+" ] || pf_"+a.pf_count+'[ "other" ])( d );\n'):"plural"===l.key&&(o+=r(l.val,a),o+="if ( pf_"+a.pf_count+"[ k_"+(a.pf_count+1)+' + "" ] ) {\n',o+="r += pf_"+a.pf_count+"[ k_"+(a.pf_count+1)+' + "" ]( d ); \n',o+="}\nelse {\n",o+="r += (pf_"+a.pf_count+'[ MessageFormat.locale["'+n.fallbackLocale+'"]( k_'+(a.pf_count+1)+" - off_"+a.pf_count+" ) ] || pf_"+a.pf_count+'[ "other" ] )( d );\n',o+="}\n"),o;case"pluralFormatPattern":for(a.pf_count=a.pf_count||0,o+="var off_"+a.pf_count+" = "+l.offset+";\n",o+="var pf_"+a.pf_count+" = { \n",u=!0,s=0;s<l.pluralForms.length;++s)"other"===l.pluralForms[s].key&&(u=!1),v?o+=",\n":v=1,o+='"'+l.pluralForms[s].key+'" : '+r(l.pluralForms[s].val,function(){var l=JSON.parse(JSON.stringify(a));return l.pf_count++,l}());if(o+="\n};\n",u)throw new Error("No 'other' form found in pluralFormatPattern "+a.pf_count);return o;case"selectFormatPattern":for(a.pf_count=a.pf_count||0,o+="var off_"+a.pf_count+" = 0;\n",o+="var pf_"+a.pf_count+" = { \n",u=!0,s=0;s<l.pluralForms.length;++s)"other"===l.pluralForms[s].key&&(u=!1),v?o+=",\n":v=1,o+='"'+l.pluralForms[s].key+'" : '+r(l.pluralForms[s].val,function(){var l=JSON.parse(JSON.stringify(a));return l.pf_count++,l}());if(o+="\n};\n",u)throw new Error("No 'other' form found in selectFormatPattern "+a.pf_count);return o;case"string":return'r += "'+e.Utils.numSub(e.Utils.escapeExpression(l.val),"k_"+a.pf_count+" - off_"+(a.pf_count-1),a.pf_count)+'";\n';default:throw new Error("Bad AST type: "+l.type)}}var n=this,u=!1,t={begin:'function(d){\nvar r = "";\n',end:"return r;\n}"};return r(l)},e.prototype.compile=function(l){return new Function("MessageFormat","return "+this.precompile(this.parse(l)))(e)},"undefined"!=typeof r?("undefined"!=typeof n&&n.exports&&(r=n.exports=e),r.MessageFormat=e):"function"==typeof define&&define.amd?define(function(){return e}):l.MessageFormat=e}(this)}});