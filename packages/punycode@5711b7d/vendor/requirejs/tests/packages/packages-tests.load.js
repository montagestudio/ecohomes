montageDefine("5711b7d","vendor/requirejs/tests/packages/packages-tests",{dependencies:[],factory:function(a,o,e){a({baseUrl:a.isBrowser?"./":"./packages/",paths:{"alpha/replace":"replace"},packagePaths:{pkgs:["alpha",{name:"beta",location:"beta/0.2/scripts",main:"beta"},"dojox/chair",{name:"dojox/table",main:"table"}]},packages:[{name:"bar",location:"bar/0.4",main:"scripts/main"},{name:"foo",location:"foo/lib"},{name:"funky",main:"index.js"},{name:"baz",location:"baz/lib",main:"index"},{name:"dojox/window",location:"dojox/window",main:"window"}]},["require","alpha","alpha/replace","beta","beta/util","bar","baz","foo","foo/second","dojox/chair","dojox/table","dojox/door","dojox/window/pane","dojox/window","dojox/table/legs","funky"],function(a,o,e,i,n,s,d,m,t,l,r,c,p,b,h,j){var x=a.toUrl("foo/../data.html");doh.register("packages",[function(f){f.is("alpha",o.name),f.is("fake/alpha/replace",e.name),f.is("beta",i),f.is("beta/util",n.name),f.is("bar",s.name),f.is("0.4",s.version),f.is("baz",d.name),f.is("0.4",d.barDepVersion),f.is("foo",d.fooName),f.is("baz/helper",d.helperName),f.is("foo",m.name),f.is("alpha",m.alphaName),f.is("foo/second",t.name),f.is(a.isBrowser?"./foo/lib/../data.html":"./packages/foo/lib/../data.html",x),f.is("dojox/chair",l.name),f.is("dojox/chair/legs",l.legsName),f.is("dojox/table",r.name),f.is("dojox/chair",r.chairName),f.is("dojox/table/legs",h.name),f.is("dojox/door",c.name),f.is("dojox/window/pane",p.name),f.is("dojox/window",b.name),f.is("dojox/window/pane",b.paneName),f.is("funky",j.name),f.is("monkey",j.monkeyName)}]),doh.run()})}});