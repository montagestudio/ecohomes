montageDefine("5711b7d","vendor/requirejs/tests/jquery/jqueryDynamic-1.6.html",{"text":"<!DOCTYPE html><html><head><title>jQuery+RequireJS Sample Page</title><script src=../doh/runner.js></script><script src=../doh/_browserRunner.js></script><script data-main=scripts/dynamicApp1.6.js src=../../require.js></script><script>function readyFired(){masterCount+=1,3===masterCount&&master.callback(!0)}var master=new doh.Deferred,masterCount=0;doh.register(\"jqueryDynamic\",[{name:\"jqueryDynamic\",timeout:3e3,runTest:function(){return master}}]),doh.run();</script></head><body><h1>jQuery+RequireJS Test Page</h1><p>Tests loading of jquery plugins with require.</p></body></html>"})