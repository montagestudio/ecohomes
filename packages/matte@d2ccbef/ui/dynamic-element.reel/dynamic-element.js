var Component=require("montage/ui/component").Component;exports.DynamicElement=Component.specialize({hasTemplate:{value:!1},_innerHTML:{value:null},_usingInnerHTML:{value:null},innerHTML:{get:function(){return this._innerHTML},set:function(e){this._usingInnerHTML=!0,this._innerHTML!==e&&(this._innerHTML=e,this.needsDraw=!0)}},defaultHTML:{value:""},_allowedTagNames:{value:null},allowedTagNames:{get:function(){return this._allowedTagNames},set:function(e){this._allowedTagNames!==e&&(this._allowedTagNames=e,this.needsDraw=!0)}},_range:{value:null},enterDocument:{value:function(e){if(e){var n=document.createRange();this.element.className;n.selectNodeContents(this.element),this._range=n}}},_contentNode:{value:null},draw:{value:function(){var e,n,t=this.innerHTML||0===this.innerHTML?this.innerHTML:this.defaultHTML,l=this.allowedTagNames,s=this._range;s.selectNodeContents(this.element),this._usingInnerHTML&&(null!==l?(this._contentNode=null,s.deleteContents(),e=s.createContextualFragment(t),n=0!==l.length?e.querySelectorAll("*:not("+l.join("):not(")+")"):e.childNodes,0===n.length?(s.insertNode(e),0===s.endOffset&&s.selectNodeContents(this.element)):console.warn("Some Elements Not Allowed ",n)):(e=this._contentNode,null===e?(s.deleteContents(),this._contentNode=e=document.createTextNode(t),s.insertNode(e),0===s.endOffset&&s.selectNodeContents(this.element)):e.data=t))}}});