montageDefine("449c0c3","listen/change-descriptor",{dependencies:["../_map"],factory:function(e,t,n){function r(e){var t=h.get(e);return t||(t="handle",t+=e,t+="Change",h.set(e,t)),this._current=null,this._current=null,this.specificHandlerMethodName=t,this}function i(e){var t=o.get(e);return t||(t="handle",t+=e,t+="WillChange",o.set(e,t)),this.specificHandlerMethodName=t,this}var s=e("../_map"),a=n.exports.ObjectChangeDescriptor=function(e){return this.name=e,this.isActive=!1,this._willChangeListeners=null,this._changeListeners=null,this};Object.defineProperties(a.prototype,{name:{value:null,writable:!0},isActive:{value:!1,writable:!0},_willChangeListeners:{value:null,writable:!0},willChangeListeners:{get:function(){return this._willChangeListeners||(this._willChangeListeners=new this.willChangeListenersRecordConstructor(this.name))}},_changeListeners:{value:null,writable:!0},changeListeners:{get:function(){return this._changeListeners||(this._changeListeners=new this.changeListenersRecordConstructor(this.name))}},changeListenersRecordConstructor:{value:r,writable:!0},willChangeListenersRecordConstructor:{value:r,writable:!0}});var l=n.exports.ListenerGhost=Object.create(null),h=new s;n.exports.ChangeListenersRecord=r,Object.defineProperties(r.prototype,{_current:{value:null,writable:!0},current:{get:function(){return this._current},set:function(e){this._current=e}},ListenerGhost:{value:l,writable:!0},ghostCount:{value:0,writable:!0},maxListenerGhostRatio:{value:.3,writable:!0},listenerGhostFilter:{value:function(e){return e!==this.ListenerGhost}},removeCurrentGostListenersIfNeeded:{value:function(){return this._current&&this.ghostCount/this._current.length>this.maxListenerGhostRatio&&(this.ghostCount=0,this._current=this._current.filter(this.listenerGhostFilter,this)),this._current}},dispatchBeforeChange:{value:!1,writable:!0},genericHandlerMethodName:{value:"handlePropertyChange",writable:!0}}),n.exports.WillChangeListenersRecord=i;var o=new s;i.prototype=new r,i.prototype.constructor=i,i.prototype.genericHandlerMethodName="handlePropertyWillChange"}});