require({baseUrl:require.isBrowser?"./":"./circular"},["require","plugin!a"],function(r,i){doh.register("circularPlugin",[function(r){r.is("a",i.name),r.is("b",i.b.name),r.is("c",i.b.c.name)}]),doh.run()});