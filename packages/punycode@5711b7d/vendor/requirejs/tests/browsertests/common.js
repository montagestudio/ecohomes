!function(){function e(){if(t=!0,o.length){var e=document.getElementsByTagName("body")[0];if(e)for(var n=0;n<o.length;n++){var c=document.createElement("div");c.innerHTML=o[n],e.appendChild(c)}o=[]}}function n(){"complete"===document.readyState?e():c<5&&(c+=1,setTimeout(n,1e3))}var o=[],t=!1;window.log=function(n){"undefined"!=typeof console&&console.log?console.log(n):(o.push(n),t&&e())};var c=0;n()}();