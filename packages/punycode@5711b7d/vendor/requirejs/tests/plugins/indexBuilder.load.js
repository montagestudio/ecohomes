montageDefine("5711b7d","vendor/requirejs/tests/plugins/indexBuilder",{dependencies:[],factory:function(n,e,c){!function(){function n(n){var e=n.split("?"),i=parseInt(e[0],10),c=e[1].split(":"),o=c[i];return{index:i,choices:c,choice:o}}define({normalize:function(e,c){var o=n(e),t=o.choices;for(i=0;i<t.length;i++)t[i]=c(t[i]);return o.index+"?"+t.join(":")},load:function(e,i,c,o){i([n(e).choice],function(n){c(n)})},write:function(e,i,c){var o=n(i);c("define('"+e+"!"+i+"', ['"+o.choice+"'], function (value) { return value;});\n")}})}()}});