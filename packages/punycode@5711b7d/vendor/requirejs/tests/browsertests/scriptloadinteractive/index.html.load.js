montageDefine("5711b7d","vendor/requirejs/tests/browsertests/scriptloadinteractive/index.html",{"text":"<!DOCTYPE html><html><head><title>Script Load Interactive Test</title><script src=../common.js></script><script>function report(){var e,t;for(e=0;e<loadedScripts.length;e++)t=loadedScripts[e],log(\"module \"+t.name+\" === \"+t.obj.name);callCount+=1,1===callCount&&(log(\"-------Trying cache hits now--------\"),loadedScripts=[],setTimeout(loadUrls,500))}function finishScript(e,t){e&&(loadedScripts.push({name:e.getAttribute(\"data-name\").replace(/\\.js$/,\"\"),obj:t()}),9===loadedScripts.length&&report())}function onTestScriptLoad(e){var t=e.target||e.srcElement;(\"load\"===e.type||readyRegExp.test(t.readyState))&&(useInteractive||finishScript(t,waitingFunc),t.removeEventListener?t.removeEventListener(\"load\",onTestScriptLoad,!1):t.detachEvent(\"onreadystatechange\",onTestScriptLoad))}function attachScript(e,t,a){noCache&&(e+=\"?stamp=\"+(new Date).getTime());var n=document.createElement(\"script\");n.src=e,n.type=\"text/javascript\",n.charset=\"utf-8\",n.setAttribute(\"data-name\",t),n.addEventListener?n.addEventListener(\"load\",onTestScriptLoad,!1):(useInteractive=!0,n.attachEvent(\"onreadystatechange\",onTestScriptLoad)),currentlyAddingScript=n,document.getElementsByTagName(\"head\")[0].appendChild(n),currentlyAddingScript=null}function def(e){var t,a,n=currentlyAddingScript;if(useInteractive){t=document.getElementsByTagName(\"script\");var r=[];for(a=t.length-1;a>-1;a--)if(r.push(a+t[a].readyState+t[a].src),\"interactive\"===t[a].readyState){n=t[a];break}n||(log(\"ERROR: No matching script interactive for \"+e),log(\"script readyStates are: \"+r)),finishScript(n,e)}else waitingFunc=e}var noCache=location.href.indexOf(\"nocache\")!==-1;log(\"noCache: \"+noCache);var readyRegExp=/complete|loaded/,useInteractive=!1,loadedScripts=[],callCount=0,currentlyAddingScript,waitingFunc,loadUrls,urls=[\"one.js\",\"two.js\",\"three.js\",\"four.js\",\"five.js\",\"six.js\",\"seven.js\",\"eight.js\",\"nine.js\"];(loadUrls=function(){for(var e,t=0;e=urls[t];t++)attachScript(e,e)})();</script></head><body><h1>Script Load Interactive Test</h1><p>This test checks to see if a function call can be associated with a specific script tag.</p><p>For non-IE 6-8 browsers, the script onload event may not fire right after the the script is evaluated. Kris Zyp found for IE though that in a function call that is called while the script is executed, it could query the script nodes and the one that is in \"interactive\" mode indicates the current script.</p><p>So this test tries to see to use interactive state if possible, and if that does not work, falls back to using script onload to associate the scripts.</p><p>Check the console for output. Expected result, all scripts are matched up with their calls.</p></body></html>"})