montageDefine("5711b7d","vendor/requirejs/tests/plugins/index",{dependencies:[],factory:function(n,e,o){!function(){function n(i){var n=i.split("?"),e=parseInt(n[0],10),o=n[1].split(":"),c=o[e];return{index:e,choices:o,choice:c}}define({pluginBuilder:"./indexBuilder",normalize:function(e,o){var c=n(e),t=c.choices;for(i=0;i<t.length;i++)t[i]=o(t[i]);return c.index+"?"+t.join(":")},load:function(i,e,o,c){e([n(i).choice],function(i){o(i)})}})}()}});