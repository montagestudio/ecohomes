var CheckInput=require("ui/check-input").CheckInput,InputRadio=exports.InputRadio=CheckInput.specialize({constructor:{value:function e(){this["super"](),e.addEventListener("checked",this)}},_fakeCheck:{enumerable:!1,value:function(){var e;this._element.checked||(this._element.checked=!0,e=document.createEvent("HTMLEvents"),e.initEvent("change",!0,!0),this._element.dispatchEvent(e))}},_checkedSyncedWithInputField:{enumerable:!1,value:!1},_checked:{enumerable:!1,value:null},checked:{get:function(){return this._checkedSyncedWithInputField===!0&&(this._checked=this._element.checked),this._checked},set:function(e,t){if(this._checked=e,t?this._valueSyncedWithInputField=!0:(this._valueSyncedWithInputField=!1,this.needsDraw=!0),this._checked===!0&&this.name&&null!==this.name){var n=document.createEvent("CustomEvent");n.initCustomEvent("checked",!0,!0,{name:this.name,component:this}),InputRadio.dispatchEvent(n)}}},handleChecked:{value:function(e){this.name===e.detail.name&&this!==e.detail.component&&(this.checked=!1)}},draw:{value:function(){this._valueSyncedWithInputField||(this._element.checked=this._checked),this["super"]()}}});InputRadio.addAttributes({autofocus:{value:!1,dataType:"boolean"},disabled:{value:!1,dataType:"boolean"},checked:{value:!1,dataType:"boolean"},form:null,name:null,readonly:{value:!1,dataType:"boolean"},title:null,value:{value:"on"}});