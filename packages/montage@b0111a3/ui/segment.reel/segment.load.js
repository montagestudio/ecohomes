montageDefine("b0111a3","ui/segment.reel/segment",{dependencies:["ui/component"],factory:function(e,t,n){"use strict";var l=e("ui/component").Component;t.Segment=l.specialize({_label:{value:null},label:{get:function(){return this._label},set:function(e){e!==this._label&&(this._label=e,this.needsDraw=!0)}},_length:{value:null},length:{get:function(){return this._length},set:function(e){e!==this._length&&(this._length=e,this.needsDraw=!0)}},draw:{value:function(){this.length&&(this.element.style.webkitBoxFlex=this.length,this.element.style.webkitFlex=this.length,this.element.style.msFlex=this.length,this.element.style.flex=this.length)}}})}});