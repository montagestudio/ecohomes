require(["require","uno"],function(e,r){doh.register("depoverlap",[function(e){for(var o,t,i,n=document.getElementsByTagName("script"),s={},o=n.length-1;o>-1;o--)t=n[o].getAttribute("data-requiremodule"),t&&(t in s||(s[t]=0),s[t]+=1);for(prop in s)e.is(1,s[prop]);e.is("uno",r.name),i=r.doSomething(),e.is("dos",i.dosName),e.is("tres",i.tresName)}]),doh.run()});