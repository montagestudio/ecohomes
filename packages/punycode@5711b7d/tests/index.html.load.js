montageDefine("5711b7d","tests/index.html",{"text":"<!DOCTYPE html><html><head><meta charset=utf-8><title>Punycode.js test suite</title></head><body><h1 id=qunit-header>Punycode.js test suite</h1><h2 id=qunit-banner></h2><div id=qunit-testrunner-toolbar></div><h2 id=qunit-userAgent></h2><ol id=qunit-tests></ol><script src=../vendor/qunit/qunit/qunit.js></script><script src=../punycode.js></script><script src=../vendor/requirejs/require.js></script><script>var punycode2;/[?&]norequire=true(?:&|$)/.test(location.search)?(require=define=null,document.write('<script src=\"tests.js\"></script>')):require({baseUrl:\"../vendor/requirejs/\",urlArgs:\"t=\"+ +new Date,paths:{punycode:\"../../punycode\"}},[\"punycode\"],function(e){punycode2=e,require([\"tests.js\"])});</body></html>"})