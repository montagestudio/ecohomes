define(function(){function e(e){for(var n,t=0;n=e[t];t++)n(c)}function n(){var n=i,t=a;u&&(n.length&&(i=[],e(n)),s.resourcesDone&&t.length&&(a=[],e(t)))}function t(){u||(u=!0,r&&clearInterval(r),n())}function o(e){return u?e(c):i.push(e),o}var r,d="undefined"!=typeof window&&window.document,u=!d,c=d?document:null,i=[],a=[],s=requirejs||require||{},l=s.resourcesReady;return"resourcesReady"in s&&(s.resourcesReady=function(e){l&&l(e),e&&n()}),d&&(document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):window.attachEvent&&(window.attachEvent("onload",t),self===self.top&&(r=setInterval(function(){try{document.body&&(document.documentElement.doScroll("left"),t())}catch(e){}},30))),"complete"===document.readyState&&t()),o.withResources=function(e){return u&&s.resourcesDone?e(c):a.push(e),o},o.version="1.0.0",o.load=function(e,n,t,r){r.isBuild?t(null):o(t)},o});