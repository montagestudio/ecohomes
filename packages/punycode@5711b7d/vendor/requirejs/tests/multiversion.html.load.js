montageDefine("5711b7d","vendor/requirejs/tests/multiversion.html",{"text":"<!DOCTYPE html><html><head><title>require.js: Multiversion Test</title><script src=../require.js></script><script src=doh/runner.js></script><script src=doh/_browserRunner.js></script><script>function done(){doneCount+=1,2==doneCount&&master.callback(!0)}var doneCount=0,master=new doh.Deferred;doh.register(\"multiversion\",[{name:\"multiversion\",timeout:5e3,runTest:function(){return require({context:\"version1\",baseUrl:\"version1/\"},[\"require\",\"alpha\",\"beta\",\"version1/gamma.js\"],function(e,o,n){doh.is(\"green\",gamma.color),doh.is(1,o.version),doh.is(1,n.version),setTimeout(function(){e([\"omega\"],function(e){doh.is(1,e.version),doh.is(\"1\",o.version),done()})},100)}),require.config({context:\"version2\",baseUrl:\"version2/\"})([\"require\",\"alpha\",\"beta\",\"version2/epsilon.js\"],function(e,o,n){doh.is(\"red\",epsilon.color),doh.is(2,o.version),doh.is(2,n.version),setTimeout(function(){e([\"omega\"],function(e){doh.is(2,e.version),doh.is(\"2\",o.version),done()})},100)}),master}}]),doh.run();</script></head><body><h1>require.js: Multiversion Test</h1><p>Check console for messages.</p><p>This test loads two different versions of a module by using the \"context\" settings for require.</p><p>It also tests loading a plain js file.</p></body></html>"})