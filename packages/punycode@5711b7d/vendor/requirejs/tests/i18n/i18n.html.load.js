montageDefine("5711b7d","vendor/requirejs/tests/i18n/i18n.html",{"text":"<!DOCTYPE html><html><head><title>require.js: I18N Test</title><script src=../../require.js></script><script src=../doh/runner.js></script><script src=../doh/_browserRunner.js></script><script>var locale=null,query=location.href.split(\"#\")[0].split(\"?\")[1],match=query&&query.match(/locale=([\\w-]+)/);match&&(locale=match[1]);var bundle=\"i18n!nls/colors\";match=query&&query.match(/bundle=([^\\&]+)/),match&&(bundle=match[1]);var red=\"red\",blue=\"blue\",green=\"green\";locale&&locale.indexOf(\"en-us-surfer\")!=-1||bundle.indexOf(\"nls/en-us-surfer/colors\")!=-1?red=\"red, dude\":(locale&&locale.indexOf(\"fr-\")!=-1||bundle.indexOf(\"fr-\")!=-1)&&(red=\"rouge\",blue=\"bleu\"),require({locale:locale,baseUrl:\"./\",paths:{i18n:\"../../i18n\"}},[bundle],function(e){doh.register(\"i18n\",[function(l){l.is(red,e.red),l.is(blue,e.blue),l.is(green,e.green)}]),doh.run()});</script></head><body><h1>i18n bundle test</h1><p>This page tests the i18n bundling in require.js. You can change the locale to use by passing locale= or bundle=</p></body></html>"})