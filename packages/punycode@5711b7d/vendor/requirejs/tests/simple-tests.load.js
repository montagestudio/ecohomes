montageDefine("5711b7d","vendor/requirejs/tests/simple-tests",{dependencies:[],factory:function(e,i,n){e({baseUrl:"./"},["require","map","simple","dimple","func"],function(e,i,n,s,o){doh.register("simple",[function(e){e.is("map",i.name),e.is("blue",n.color),e.is("dimple-blue",s.color),e.is("You called a function",o())}]),"undefined"==typeof moreSimpleTests&&doh.run()})}});