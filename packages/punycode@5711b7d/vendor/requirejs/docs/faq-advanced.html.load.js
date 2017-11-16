montageDefine("5711b7d","vendor/requirejs/docs/faq-advanced.html",{"text":"<html><head></head><body><div id=directory class=section><h1>FAQ: RequireJS Advanced Usage</h1><ul class=\"index mono\"><li class=hbox><a href=#rename>How can I rename require?</a><span class=\"spacer boxFlex\"></span><span class=sect>§ 1</span></li><li class=hbox><a href=#css>What about loading CSS?</a><span class=\"spacer boxFlex\"></span><span class=sect>§ 2</span></li></ul></div><div class=section><h2><a name=rename>How can I rename require/define/requirejs?</a><span class=sectionMark>§ 1</span></h2><p>RequireJS and its optimization tool need to be version 0.26.0 or higher for this to work.</p><p>Why would you want to do this? You may have very strict global namespace requirements or you may be using code that already defines require/define and you want to avoid interference.</p><p>Some notes on this capability:</p><ul><li>Make sure to use a source version of require.js, not a minified version.</li><li>Make sure that version of require.js is included in the optimization because the require.js file contents are altered for the namespacing to work.</li><li>Code your modules using require/define as normal, then do a build to namespace the values. Do not code your modules using the namespaced require/define. It will make your code less portable and usable by others.</li><li>This transformation/optimization only works once. Do not use the output of this optimization as input to another optimization/build stage.</li></ul><p>The following example optimization config is based on the directory structure used in the example on the <a href=optimization.html>optimization page</a>. This config combines require.js with main.js into a new <strong>foo.js</strong>. file. define() is renamed to <strong>foo.define()</strong> and require() is renamed to <strong>foo.require()</strong>:</p><pre><code>\n{\n    appDir: \"../\",\n    baseUrl: \"scripts\",\n    dir: \"../../appdirectory-build\",\n\n    //Put in a mapping so that 'requireLib' in the\n    //modules section below will refer to the require.js\n    //contents.\n    paths: {\n        requireLib: 'require'\n    },\n\n    //Indicates the namespace to use for require/requirejs/define.\n    namespace: \"foo\",\n\n    modules: [\n        {\n            name: \"foo\",\n            include: [\"requireLib\", \"main\"],\n            //True tells the optimizer it is OK to create\n            //a new file foo.js. Normally the optimizer\n            //wants foo.js to exist in the source directory.\n            create: true\n        }\n    ]\n}\n</code></pre><p>Once this optimization is done, the HTML that used to refer to require.js would need to be modified to refer to foo.js.</p><p>Thanks to <a href=http://ryanflorence.com>Ryan Florence</a> for help on the namespace design.</p><hr><p>Another approach to renaming, if you prefer to have more direct control of the content, and want to commit source code with the modifications. This approach <strong>should not be used</strong> with the \"namespace\" optimization demonstrated above.</p><div class=subSection><h4>1) Modify the source of require.js</h4><p>There needs to be a wrapper around the require.js code so you can set the require function to the name of your choosing:</p><pre><code>var myGlobalRequire = (function () {\n    //Define a require object here that has any\n    //default configuration you want for RequireJS. If\n    //you do not have any config options you want to set,\n    //just use an simple object literal, {}. You may need\n    //to at least set baseUrl.\n    var require = {\n        baseUrl: '..'\n    };\n\n    //INSERT require.js CONTENTS HERE\n\n    return require;\n}());\n</code></pre></div><div class=subSection><h4>2) Modify loaded files</h4><p>For any files you load with this new function, if those files reference require in any way, you will want to wrap them in an anonymous function to set the value of require to be your new function name that you set up in step 1:</p><pre><code>(function (require) {\n\n    //Regular require references now work correctly in here.\n\n}(myGlobalRequire));\n</code></pre><p>Following the steps above should allow you to use the optimization tool to combine scripts together effectively. If you want your renamed require definition in the optimized script, reference your modified require.js directly in the <strong>include</strong> optimization option, or as the <strong>name</strong> option if you want to optimize that file directly.</p><p>Thanks to <a href=http://alexsexton.com/ >Alex Sexton</a> and <a href=http://tobielangel.com/ >Tobie Langel</a> for suggesting parts of this solution.</p></div></div><div class=section><h2><a name=css>What about loading CSS?</a><span class=sectionMark>§ 2</span></h2><p>Ideally RequireJS could load CSS files as dependencies. However, there are issues knowing when a CSS file has been loaded, particularly in Gecko/Firefox when the file is loaded from another domain. Some history can be found in <a href=http://bugs.dojotoolkit.org/ticket/5402>this Dojo ticket</a>.</p><p>Knowing when the file is loaded is important because you may only want to grab the dimensions of a DOM element once the style sheet has loaded.</p><p>Some people have implemented an approach where they look for a well known style to be applied to a specific HTML element to know if a style sheet is loaded. Due to the specificity of that solution, it is not something that would fit will with RequireJS. Knowing when the link element has loaded the referenced file would be the most robust solution.</p><p>Since knowing when the file has loaded is not reliable, it does not make sense to explicitly support CSS files in RequireJS loading, since it will lead to bug reports due to browser behavior. If you do not care when the file is loaded, you can easily write your own function to load CSS on demand by doing the following:</p><pre><code>function loadCss(url) {\n    var link = document.createElement(\"link\");\n    link.type = \"text/css\";\n    link.rel = \"stylesheet\";\n    link.href = url;\n    document.getElementsByTagName(\"head\")[0].appendChild(link);\n}\n</code></pre></div></body></html>"})