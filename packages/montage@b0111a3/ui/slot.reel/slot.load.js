montageDefine("b0111a3","ui/slot.reel/slot",{dependencies:["../component"],factory:function(e,t,n){var o=e("../component").Component;t.Slot=o.specialize({hasTemplate:{enumerable:!1,value:!1},delegate:{value:null},_content:{value:null},enterDocument:{value:function(e){e&&this.element.classList.add("montage-Slot")}},content:{get:function(){return this._content},set:function(e){var t,n;e&&"undefined"!=typeof e.needsDraw?(n=this._content,e.element?t=e.element:(t=document.createElement("div"),this.delegate&&"function"==typeof this.delegate.slotElementForComponent&&(t=this.delegate.slotElementForComponent(this,e,t)),e.element=t),this.domContent=t,e.needsDraw=!0):this.domContent=e,this._content=e,this.needsDraw=!0}},contentDidChange:{value:function(){this.delegate&&"function"==typeof this.delegate.slotDidSwitchContent&&this.delegate.slotDidSwitchContent(this)}}})}});