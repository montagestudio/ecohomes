montageDefine("c174565","http-apps/content",{dependencies:["q","./negotiate","qs","url2"],factory:function(n,t,e){var r=n("q"),u=n("./negotiate"),o=n("qs"),c=n("url2");t.Content=function(n,e,r){return function(){return t.content(n,e,r)}},t.content=t.ok=function(n,t,e){return e=e||200,n=n||"","string"==typeof n&&(n=[n]),t=t||"text/plain",{status:e,headers:{"content-type":t},body:n}},t.ContentRequest=function(n){return function(t,e){return r.when(t.body.read(),function(r){return n(r,t,e)})}},t.Inspect=function(n){return u.Method({GET:function(t,e){return r.when(n(t,e),function(n){return{status:200,headers:{"content-type":"text/plain"},body:[inspect(n)]}})}})},t.ParseQuery=function(n){return function(t,e){return t.query=o.parse(c.parse(t.url).query||""),n(t,e)}}}});