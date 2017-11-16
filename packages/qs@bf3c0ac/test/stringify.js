"use strict";var test=require("tape"),qs=require("../"),utils=require("../lib/utils"),iconv=require("iconv-lite");test("stringify()",function(e){e.test("stringifies a querystring object",function(e){e.equal(qs.stringify({a:"b"}),"a=b"),e.equal(qs.stringify({a:1}),"a=1"),e.equal(qs.stringify({a:1,b:2}),"a=1&b=2"),e.equal(qs.stringify({a:"A_Z"}),"a=A_Z"),e.equal(qs.stringify({a:"€"}),"a=%E2%82%AC"),e.equal(qs.stringify({a:""}),"a=%EE%80%80"),e.equal(qs.stringify({a:"א"}),"a=%D7%90"),e.equal(qs.stringify({a:"𐐷"}),"a=%F0%90%90%B7"),e.end()}),e.test("adds query prefix",function(e){e.equal(qs.stringify({a:"b"},{addQueryPrefix:!0}),"?a=b"),e.end()}),e.test("with query prefix, outputs blank string given an empty object",function(e){e.equal(qs.stringify({},{addQueryPrefix:!0}),""),e.end()}),e.test("stringifies a nested object",function(e){e.equal(qs.stringify({a:{b:"c"}}),"a%5Bb%5D=c"),e.equal(qs.stringify({a:{b:{c:{d:"e"}}}}),"a%5Bb%5D%5Bc%5D%5Bd%5D=e"),e.end()}),e.test("stringifies a nested object with dots notation",function(e){e.equal(qs.stringify({a:{b:"c"}},{allowDots:!0}),"a.b=c"),e.equal(qs.stringify({a:{b:{c:{d:"e"}}}},{allowDots:!0}),"a.b.c.d=e"),e.end()}),e.test("stringifies an array value",function(e){e.equal(qs.stringify({a:["b","c","d"]},{arrayFormat:"indices"}),"a%5B0%5D=b&a%5B1%5D=c&a%5B2%5D=d","indices => indices"),e.equal(qs.stringify({a:["b","c","d"]},{arrayFormat:"brackets"}),"a%5B%5D=b&a%5B%5D=c&a%5B%5D=d","brackets => brackets"),e.equal(qs.stringify({a:["b","c","d"]}),"a%5B0%5D=b&a%5B1%5D=c&a%5B2%5D=d","default => indices"),e.end()}),e.test("omits nulls when asked",function(e){e.equal(qs.stringify({a:"b",c:null},{skipNulls:!0}),"a=b"),e.end()}),e.test("omits nested nulls when asked",function(e){e.equal(qs.stringify({a:{b:"c",d:null}},{skipNulls:!0}),"a%5Bb%5D=c"),e.end()}),e.test("omits array indices when asked",function(e){e.equal(qs.stringify({a:["b","c","d"]},{indices:!1}),"a=b&a=c&a=d"),e.end()}),e.test("stringifies a nested array value",function(e){e.equal(qs.stringify({a:{b:["c","d"]}},{arrayFormat:"indices"}),"a%5Bb%5D%5B0%5D=c&a%5Bb%5D%5B1%5D=d"),e.equal(qs.stringify({a:{b:["c","d"]}},{arrayFormat:"brackets"}),"a%5Bb%5D%5B%5D=c&a%5Bb%5D%5B%5D=d"),e.equal(qs.stringify({a:{b:["c","d"]}}),"a%5Bb%5D%5B0%5D=c&a%5Bb%5D%5B1%5D=d"),e.end()}),e.test("stringifies a nested array value with dots notation",function(e){e.equal(qs.stringify({a:{b:["c","d"]}},{allowDots:!0,encode:!1,arrayFormat:"indices"}),"a.b[0]=c&a.b[1]=d","indices: stringifies with dots + indices"),e.equal(qs.stringify({a:{b:["c","d"]}},{allowDots:!0,encode:!1,arrayFormat:"brackets"}),"a.b[]=c&a.b[]=d","brackets: stringifies with dots + brackets"),e.equal(qs.stringify({a:{b:["c","d"]}},{allowDots:!0,encode:!1}),"a.b[0]=c&a.b[1]=d","default: stringifies with dots + indices"),e.end()}),e.test("stringifies an object inside an array",function(e){e.equal(qs.stringify({a:[{b:"c"}]},{arrayFormat:"indices"}),"a%5B0%5D%5Bb%5D=c","indices => brackets"),e.equal(qs.stringify({a:[{b:"c"}]},{arrayFormat:"brackets"}),"a%5B%5D%5Bb%5D=c","brackets => brackets"),e.equal(qs.stringify({a:[{b:"c"}]}),"a%5B0%5D%5Bb%5D=c","default => indices"),e.equal(qs.stringify({a:[{b:{c:[1]}}]},{arrayFormat:"indices"}),"a%5B0%5D%5Bb%5D%5Bc%5D%5B0%5D=1","indices => indices"),e.equal(qs.stringify({a:[{b:{c:[1]}}]},{arrayFormat:"brackets"}),"a%5B%5D%5Bb%5D%5Bc%5D%5B%5D=1","brackets => brackets"),e.equal(qs.stringify({a:[{b:{c:[1]}}]}),"a%5B0%5D%5Bb%5D%5Bc%5D%5B0%5D=1","default => indices"),e.end()}),e.test("stringifies an array with mixed objects and primitives",function(e){e.equal(qs.stringify({a:[{b:1},2,3]},{encode:!1,arrayFormat:"indices"}),"a[0][b]=1&a[1]=2&a[2]=3","indices => indices"),e.equal(qs.stringify({a:[{b:1},2,3]},{encode:!1,arrayFormat:"brackets"}),"a[][b]=1&a[]=2&a[]=3","brackets => brackets"),e.equal(qs.stringify({a:[{b:1},2,3]},{encode:!1}),"a[0][b]=1&a[1]=2&a[2]=3","default => indices"),e.end()}),e.test("stringifies an object inside an array with dots notation",function(e){e.equal(qs.stringify({a:[{b:"c"}]},{allowDots:!0,encode:!1,arrayFormat:"indices"}),"a[0].b=c","indices => indices"),e.equal(qs.stringify({a:[{b:"c"}]},{allowDots:!0,encode:!1,arrayFormat:"brackets"}),"a[].b=c","brackets => brackets"),e.equal(qs.stringify({a:[{b:"c"}]},{allowDots:!0,encode:!1}),"a[0].b=c","default => indices"),e.equal(qs.stringify({a:[{b:{c:[1]}}]},{allowDots:!0,encode:!1,arrayFormat:"indices"}),"a[0].b.c[0]=1","indices => indices"),e.equal(qs.stringify({a:[{b:{c:[1]}}]},{allowDots:!0,encode:!1,arrayFormat:"brackets"}),"a[].b.c[]=1","brackets => brackets"),e.equal(qs.stringify({a:[{b:{c:[1]}}]},{allowDots:!0,encode:!1}),"a[0].b.c[0]=1","default => indices"),e.end()}),e.test("does not omit object keys when indices = false",function(e){e.equal(qs.stringify({a:[{b:"c"}]},{indices:!1}),"a%5Bb%5D=c"),e.end()}),e.test("uses indices notation for arrays when indices=true",function(e){e.equal(qs.stringify({a:["b","c"]},{indices:!0}),"a%5B0%5D=b&a%5B1%5D=c"),e.end()}),e.test("uses indices notation for arrays when no arrayFormat is specified",function(e){e.equal(qs.stringify({a:["b","c"]}),"a%5B0%5D=b&a%5B1%5D=c"),e.end()}),e.test("uses indices notation for arrays when no arrayFormat=indices",function(e){e.equal(qs.stringify({a:["b","c"]},{arrayFormat:"indices"}),"a%5B0%5D=b&a%5B1%5D=c"),e.end()}),e.test("uses repeat notation for arrays when no arrayFormat=repeat",function(e){e.equal(qs.stringify({a:["b","c"]},{arrayFormat:"repeat"}),"a=b&a=c"),e.end()}),e.test("uses brackets notation for arrays when no arrayFormat=brackets",function(e){e.equal(qs.stringify({a:["b","c"]},{arrayFormat:"brackets"}),"a%5B%5D=b&a%5B%5D=c"),e.end()}),e.test("stringifies a complicated object",function(e){e.equal(qs.stringify({a:{b:"c",d:"e"}}),"a%5Bb%5D=c&a%5Bd%5D=e"),e.end()}),e.test("stringifies an empty value",function(e){e.equal(qs.stringify({a:""}),"a="),e.equal(qs.stringify({a:null},{strictNullHandling:!0}),"a"),e.equal(qs.stringify({a:"",b:""}),"a=&b="),e.equal(qs.stringify({a:null,b:""},{strictNullHandling:!0}),"a&b="),e.equal(qs.stringify({a:{b:""}}),"a%5Bb%5D="),e.equal(qs.stringify({a:{b:null}},{strictNullHandling:!0}),"a%5Bb%5D"),e.equal(qs.stringify({a:{b:null}},{strictNullHandling:!1}),"a%5Bb%5D="),e.end()}),e.test("stringifies a null object",{skip:!Object.create},function(e){var a=Object.create(null);a.a="b",e.equal(qs.stringify(a),"a=b"),e.end()}),e.test("returns an empty string for invalid input",function(e){e.equal(qs.stringify(void 0),""),e.equal(qs.stringify(!1),""),e.equal(qs.stringify(null),""),e.equal(qs.stringify(""),""),e.end()}),e.test("stringifies an object with a null object as a child",{skip:!Object.create},function(e){var a={a:Object.create(null)};a.a.b="c",e.equal(qs.stringify(a),"a%5Bb%5D=c"),e.end()}),e.test("drops keys with a value of undefined",function(e){e.equal(qs.stringify({a:void 0}),""),e.equal(qs.stringify({a:{b:void 0,c:null}},{strictNullHandling:!0}),"a%5Bc%5D"),e.equal(qs.stringify({a:{b:void 0,c:null}},{strictNullHandling:!1}),"a%5Bc%5D="),e.equal(qs.stringify({a:{b:void 0,c:""}}),"a%5Bc%5D="),e.end()}),e.test("url encodes values",function(e){e.equal(qs.stringify({a:"b c"}),"a=b%20c"),e.end()}),e.test("stringifies a date",function(e){var a=new Date,t="a="+encodeURIComponent(a.toISOString());e.equal(qs.stringify({a:a}),t),e.end()}),e.test("stringifies the weird object from qs",function(e){e.equal(qs.stringify({"my weird field":"~q1!2\"'w$5&7/z8)?"}),"my%20weird%20field=~q1%212%22%27w%245%267%2Fz8%29%3F"),e.end()}),e.test("skips properties that are part of the object prototype",function(e){Object.prototype.crash="test",e.equal(qs.stringify({a:"b"}),"a=b"),e.equal(qs.stringify({a:{b:"c"}}),"a%5Bb%5D=c"),delete Object.prototype.crash,e.end()}),e.test("stringifies boolean values",function(e){e.equal(qs.stringify({a:!0}),"a=true"),e.equal(qs.stringify({a:{b:!0}}),"a%5Bb%5D=true"),e.equal(qs.stringify({b:!1}),"b=false"),e.equal(qs.stringify({b:{c:!1}}),"b%5Bc%5D=false"),e.end()}),e.test("stringifies buffer values",function(e){e.equal(qs.stringify({a:new Buffer("test")}),"a=test"),e.equal(qs.stringify({a:{b:new Buffer("test")}}),"a%5Bb%5D=test"),e.end()}),e.test("stringifies an object using an alternative delimiter",function(e){e.equal(qs.stringify({a:"b",c:"d"},{delimiter:";"}),"a=b;c=d"),e.end()}),e.test("doesn't blow up when Buffer global is missing",function(e){var a=global.Buffer;delete global.Buffer;var t=qs.stringify({a:"b",c:"d"});global.Buffer=a,e.equal(t,"a=b&c=d"),e.end()}),e.test("selects properties when filter=array",function(e){e.equal(qs.stringify({a:"b"},{filter:["a"]}),"a=b"),e.equal(qs.stringify({a:1},{filter:[]}),""),e.equal(qs.stringify({a:{b:[1,2,3,4],c:"d"},c:"f"},{filter:["a","b",0,2],arrayFormat:"indices"}),"a%5Bb%5D%5B0%5D=1&a%5Bb%5D%5B2%5D=3","indices => indices"),e.equal(qs.stringify({a:{b:[1,2,3,4],c:"d"},c:"f"},{filter:["a","b",0,2],arrayFormat:"brackets"}),"a%5Bb%5D%5B%5D=1&a%5Bb%5D%5B%5D=3","brackets => brackets"),e.equal(qs.stringify({a:{b:[1,2,3,4],c:"d"},c:"f"},{filter:["a","b",0,2]}),"a%5Bb%5D%5B0%5D=1&a%5Bb%5D%5B2%5D=3","default => indices"),e.end()}),e.test("supports custom representations when filter=function",function(e){var a=0,t={a:"b",c:"d",e:{f:new Date(1257894e6)}},i=function(i,n){if(a+=1,1===a)e.equal(i,"","prefix is empty"),e.equal(n,t);else{if("c"===i)return;if(n instanceof Date)return e.equal(i,"e[f]"),n.getTime()}return n};e.equal(qs.stringify(t,{filter:i}),"a=b&e%5Bf%5D=1257894000000"),e.equal(a,5),e.end()}),e.test("can disable uri encoding",function(e){e.equal(qs.stringify({a:"b"},{encode:!1}),"a=b"),e.equal(qs.stringify({a:{b:"c"}},{encode:!1}),"a[b]=c"),e.equal(qs.stringify({a:"b",c:null},{strictNullHandling:!0,encode:!1}),"a=b&c"),e.end()}),e.test("can sort the keys",function(e){var a=function(e,a){return e.localeCompare(a)};e.equal(qs.stringify({a:"c",z:"y",b:"f"},{sort:a}),"a=c&b=f&z=y"),e.equal(qs.stringify({a:"c",z:{j:"a",i:"b"},b:"f"},{sort:a}),"a=c&b=f&z%5Bi%5D=b&z%5Bj%5D=a"),e.end()}),e.test("can sort the keys at depth 3 or more too",function(e){var a=function(e,a){return e.localeCompare(a)};e.equal(qs.stringify({a:"a",z:{zj:{zjb:"zjb",zja:"zja"},zi:{zib:"zib",zia:"zia"}},b:"b"},{sort:a,encode:!1}),"a=a&b=b&z[zi][zia]=zia&z[zi][zib]=zib&z[zj][zja]=zja&z[zj][zjb]=zjb"),e.equal(qs.stringify({a:"a",z:{zj:{zjb:"zjb",zja:"zja"},zi:{zib:"zib",zia:"zia"}},b:"b"},{sort:null,encode:!1}),"a=a&z[zj][zjb]=zjb&z[zj][zja]=zja&z[zi][zib]=zib&z[zi][zia]=zia&b=b"),e.end()}),e.test("can stringify with custom encoding",function(e){e.equal(qs.stringify({"県":"大阪府","":""},{encoder:function(e){if(0===e.length)return"";for(var a=iconv.encode(e,"shiftjis"),t=[],i=0;i<a.length;++i)t.push(a.readUInt8(i).toString(16));return"%"+t.join("%")}}),"%8c%a7=%91%e5%8d%e3%95%7b&="),e.end()}),e.test("receives the default encoder as a second argument",function(e){e.plan(2),qs.stringify({a:1},{encoder:function(a,t){e.equal(t,utils.encode)}}),e.end()}),e.test("throws error with wrong encoder",function(e){e["throws"](function(){qs.stringify({},{encoder:"string"})},new TypeError("Encoder has to be a function.")),e.end()}),e.test("can use custom encoder for a buffer object",{skip:"undefined"==typeof Buffer},function(e){e.equal(qs.stringify({a:new Buffer([1])},{encoder:function(e){return"string"==typeof e?e:String.fromCharCode(e.readUInt8(0)+97)}}),"a=b"),e.end()}),e.test("serializeDate option",function(e){var a=new Date;e.equal(qs.stringify({a:a}),"a="+a.toISOString().replace(/:/g,"%3A"),"default is toISOString");var t=new Date;t.toISOString=function(){throw new SyntaxError},e["throws"](function(){t.toISOString()},SyntaxError),e.equal(qs.stringify({a:t}),"a="+Date.prototype.toISOString.call(t).replace(/:/g,"%3A"),"toISOString works even when method is not locally present");var i=new Date(6);e.equal(qs.stringify({a:i},{serializeDate:function(e){return 7*e.getTime()}}),"a=42","custom serializeDate function called"),e.end()}),e.test("RFC 1738 spaces serialization",function(e){e.equal(qs.stringify({a:"b c"},{format:qs.formats.RFC1738}),"a=b+c"),e.equal(qs.stringify({"a b":"c d"},{format:qs.formats.RFC1738}),"a+b=c+d"),e.end()}),e.test("RFC 3986 spaces serialization",function(e){e.equal(qs.stringify({a:"b c"},{format:qs.formats.RFC3986}),"a=b%20c"),e.equal(qs.stringify({"a b":"c d"},{format:qs.formats.RFC3986}),"a%20b=c%20d"),e.end()}),e.test("Backward compatibility to RFC 3986",function(e){e.equal(qs.stringify({a:"b c"}),"a=b%20c"),e.end()}),e.test("Edge cases and unknown formats",function(e){["UFO1234",!1,1234,null,{},[]].forEach(function(a){e["throws"](function(){qs.stringify({a:"b c"},{format:a})},new TypeError("Unknown format option provided."))}),e.end()}),e.test("encodeValuesOnly",function(e){e.equal(qs.stringify({a:"b",c:["d","e=f"],f:[["g"],["h"]]},{encodeValuesOnly:!0}),"a=b&c[0]=d&c[1]=e%3Df&f[0][0]=g&f[1][0]=h"),e.equal(qs.stringify({a:"b",c:["d","e"],f:[["g"],["h"]]}),"a=b&c%5B0%5D=d&c%5B1%5D=e&f%5B0%5D%5B0%5D=g&f%5B1%5D%5B0%5D=h"),e.end()}),e.test("encodeValuesOnly - strictNullHandling",function(e){e.equal(qs.stringify({a:{b:null}},{encodeValuesOnly:!0,strictNullHandling:!0}),"a[b]"),e.end()}),e.test("does not mutate the options argument",function(e){var a={};qs.stringify({},a),e.deepEqual(a,{}),e.end()}),e.end()});