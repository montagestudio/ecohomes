montageDefine("5711b7d","vendor/requirejs/tests/browsertests/functionToString.html",{"text":"<!DOCTYPE html><html><head><title>Function toString() Test</title><style type=text/css>textarea{width:100%;height:20em}label{display:block}</style><script>function def(n){document.getElementById(\"output\").value=n.toString()}function convert(){def(function(n,t,e){n(\"foo/bar\"),n(\"baz\"),e.id;t.name=\"bamf\"})}</script></head><body><h1>Function toString() Test</h1><p>This test shows how a function is converted to a string value via the Function.prototype.toString() method. See the source of this file to see the source for of the function that is converted to a string.</p><form action=# onsubmit=\"convert();return false;\"><input type=submit name=toString value=toString><label for=output>Output:</label><textarea id=output></textarea></form></body></html>"})