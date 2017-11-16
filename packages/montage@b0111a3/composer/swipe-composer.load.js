montageDefine("b0111a3","composer/swipe-composer",{dependencies:["../core/core","./composer"],factory:function(t,e,i){var s=(t("../core/core").Montage,t("./composer").Composer);e.SwipeComposer=s.specialize({load:{value:function(){document.addEventListener("touchstart",this,!0)}},unload:{value:function(){document.removeEventListener("touchstart",this,!0)}},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_deltaX:{enumerable:!1,value:0},_deltaY:{enumerable:!1,value:0},_threshold:{enumerable:!1,value:50},_thresholdSwipeAngle:{enumerable:!1,value:20},_startTimestamp:{enumerable:!1,value:0},captureTouchstart:{value:function(t){this._reset();var e=t.touches,i=e[0];this._startX=i.clientX,this._startY=i.clientY,this._startTimestamp=t.timeStamp,document.addEventListener("touchmove",this,!0),document.addEventListener("touchend",this,!0),document.addEventListener("touchcancel",this,!0)}},_reset:{enumerable:!1,value:function(){this._startX=0,this._startY=0,this._deltaX=0,this._deltaY=0,this._startSwipeAngle=null}},_startSwipeAngle:{enumerable:!1,value:null},captureTouchcancel:{value:function(t){document.removeEventListener("touchmove",this,!0),document.removeEventListener("touchend",this,!0),document.removeEventListener("touchcancel",this,!0)}},captureTouchmove:{value:function(t){t.preventDefault();var e,i,s=t.changedTouches[0];this._deltaX=s.clientX-this._startX,this._deltaY=s.clientY-this._startY;var a=this._deltaX,n=this._deltaY,l=this._threshold,r=this._findSwipeAngle(a,n);null!=this._startSwipeAngle&&Math.abs(this._startSwipeAngle-r)>this._thresholdSwipeAngle&&(this._startSwipeAngle=null),null==this._startSwipeAngle&&(this._startSwipeAngle=r,this._startX=s.clientX,this._startY=s.clientY,this._deltaX=0,this._deltaY=0),a>l&&n>l?i="DIAGONAL":a>l&&n<l?i=this._deltaX>0?"RIGHT":"LEFT":a<l&&n>l&&(i=this._deltaY>0?"DOWN":"UP"),0==a&&0==n||(e=document.createEvent("CustomEvent"),e.initCustomEvent("swipemove",!0,!1,null),e.direction=i,e.angle=this._startSwipeAngle,e.velocity=this._findVelocity(t.timeStamp-this._startTimestamp),e.startX=this._startX,e.startY=this._startY,e.dX=this._deltaX,e.dY=this._deltaY,this.dispatchEvent(e))}},_findSwipeAngle:{enumerable:!1,value:function(t,e){var i=-1*(180*Math.atan2(e,t)/3.14);return i.toFixed(2)}},captureTouchend:{value:function(t){if(null!=t){var e,i,s=Math.abs(this._deltaX),a=Math.abs(this._deltaY),n=this._threshold;if(s<n&&a<n)return void this.captureTouchcancel();document.removeEventListener("touchmove",this,!0),s>n&&a>n?e="DIAGONAL":s>n&&a<n?e=this._deltaX>0?"RIGHT":"LEFT":s<n&&a>n&&(e=this._deltaY>0?"DOWN":"UP"),i=document.createEvent("CustomEvent"),i.initCustomEvent("swipe",!0,!1,null),i.direction=e,i.angle=this._startSwipeAngle,i.velocity=this._findVelocity(t.timeStamp-this._startTimestamp),i.startX=this._startX,i.startY=this._startY,i.dX=this._deltaX,i.dY=this._deltaY,this.dispatchEvent(i)}}},_findVelocity:{enumerable:!1,value:function(t){return Math.sqrt(this._deltaX*this._deltaX+this._deltaY*this._deltaY)/t}}})}});