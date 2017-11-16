var Montage=require("./core").Montage,State=exports.State=Montage.specialize({_stateChart:{enumerable:!1,value:null},init:{value:function(t){this.substates={},this.enterState=null,this.exitState=null;for(var e,a,i=Object.keys(t),r=0;e=i[r];r++)a=t[e],"object"==typeof a&&State.prototype.isPrototypeOf(a)&&(a.name=e,a.parentState=this,this.substates[e]=a),"string"==typeof a&&"initialSubstate"!==e?this[e]=this._encloseGotoState(a):this[e]=a;return this}},name:{enumerable:!1,value:null},_initialSubstate:{enumerable:!1,value:null},initialSubstate:{get:function(){return"string"==typeof this._initialSubstate&&(this._initialSubstate=this[this._initialSubstate]),this._initialSubstate},set:function(t){this._initialSubstate=t}},substates:{enumerable:!1,value:null},parentState:{enumerable:!1,value:null},_path:{enumerable:!1,value:null},path:{enumerable:!1,get:function(){return this._path||(this.parentState&&this.parentState.path?this._path=this.parentState.path+"."+this.name:this._path=this.name),this._path}},enterState:{enumerable:!1,value:null},exitState:{enumerable:!1,value:null},isInState:{enumerable:!1,value:function(t){return"string"!=typeof t&&(t=t.name),!!this.path.match(new RegExp(".?"+t+".?"))}},_encloseGotoState:{value:function(t){return function(e,a){return this._stateChart._gotoState(t,a)}}},gotoState:{value:function(t,e){return this._stateChart._gotoState(t,e)}},_performAction:{enumerable:null,value:function(t,e,a){if(this[t])this[t](e,a);else{if(!this.parentState)throw"Action '"+t+"' not available";this.parentState._performAction(t,e,a)}}},toString:{enumerable:!1,value:function(){return"[State "+this.path+" ]"}}}),StateChart=exports.StateChart=Montage.specialize({delegate:{enumerable:!1,value:null},ownerStateProperty:{enumerable:!1,value:null},rootState:{enumerable:!1,value:null},_currentState:{enumerable:!1,value:null},currentState:{get:function(){return this.ownerStateProperty?null:this._currentState}},initWithState:{value:function(t){return this._states={},this.rootState=t,this.rootState._stateChart=this,this._prepareState(this.rootState),this.enterDefaultState(),this}},_defaultState:{enumerable:!1,value:null},defaultState:{enumerable:!1,get:function(){if(!this._defaultState){var t,e;for(t=e=this.rootState;e=e.initialSubstate;)t=e;this._defaultState=t}return this._defaultState}},enterDefaultState:{enumerable:!1,value:function(){if(this.ownerStateProperty&&!this.owner)throw"This stateChart has been configured to require an owner to execute this function";var t=this.ownerStateProperty?this.owner:this,e=this.ownerStateProperty?t["_"+this.ownerStateProperty]:t.currentState;if(e)throw"Cannot enter default state from '"+e.name+"'";var a,i;for(a=i=this.rootState;i=i.initialSubstate;)a.enterState&&a.enterState(this,t),a=i,i.initialSubstate&&a.exitState&&a.exitState(this,t);return this.ownerStateProperty?t["_"+this.ownerStateProperty]=this.defaultState:this._currentState=this.defaultState,this.defaultState}},_prepareState:{enumerable:!1,value:function(t){t._stateChart=this,t.name&&(this._states[t.name]=t);var e;for(e in t.substates)this._prepareState(t.substates[e])}},_states:{enumerable:!1,value:null},stateWithName:{enumerable:!1,value:function(t){return this._states[t]}},performAction:{value:function(t,e){if(this.ownerStateProperty&&!e)throw"This stateChart has been configured to require an owner to execute this function";e=this.ownerStateProperty?e:this;var a=this.ownerStateProperty?e[this.ownerStateProperty]:e.currentState;if(!a)throw"Cannot perform action '"+t+"' without a currentState";a._performAction(t,this,e),this.owner=null}},_gotoState:{value:function(t,e){if(this.ownerStateProperty&&!e)throw"This stateChart has been configured to require an owner to execute this function";e=this.ownerStateProperty?e:this;var a,i,r,n,s,o,h,l,u,S,f,p=this.ownerStateProperty?e[this.ownerStateProperty]:e.currentState,c=p.name,m=t,g=!1,_=!1,b=!1,d=!1;if("string"==typeof m?t=this._states[t]:m=t.name,m!==c&&(this.delegate&&(g="function"==typeof this.delegate.stateChartWillExitState,_="function"==typeof this.delegate.stateChartWillEnterState,b="function"==typeof this.delegate.stateChartDidExitState,d="function"==typeof this.delegate.stateChartDidEnterState),!this.delegate||"function"!=typeof this.delegate.stateChartShouldGoFromStateToState||this.delegate.stateChartShouldGoFromStateToState(this,p,t))){if(this.delegate&&"function"==typeof this.delegate.stateChartWillGoFromStateToState&&this.delegate.stateChartWillGoFromStateToState(this,p,t),a=p.path,i=t.path,new RegExp(a).test(i))for(n=i.replace(new RegExp(a+".?"),"").split("."),s=n.length,r=0;r<s;r++)S=this._states[n[r]],_&&this.delegate.stateChartWillEnterState(this,S),"function"==typeof S.enterState&&S.enterState(this,e),d&&this.delegate.stateChartDidEnterState(this,S);else{for(a=a.split("."),i=i.split("."),o=-1,l=i.length,u=Math.min(a.length,l);o<u&&(h=o+1,a[h]===i[h]);)o++;for(r=a.length-1;r>o;r--)S=this._states[a[r]],g&&this.delegate.stateChartWillExitState(this,S),"function"==typeof S.exitState&&S.exitState(this,e),b&&this.delegate.stateChartDidExitState(this,S);for(o=o<0?0:o,r=o;r<l;r++)S=this._states[i[r]],_&&this.delegate.stateChartWillEnterState(this,S),this.ownerStateProperty?e["_"+this.ownerStateProperty]=S:this._currentState=S,"function"==typeof S.enterState&&S.enterState(this,e),d&&this.delegate.stateChartDidEnterState(this,S)}f=p,this.delegate&&"function"==typeof this.delegate.stateChartDidGoFromStateToState&&this.delegate.stateChartDidGoFromStateToState(this,f,t),"function"==typeof e.transitionedFromStateToState&&e.transitionedFromStateToState(this,f,t)}}}});