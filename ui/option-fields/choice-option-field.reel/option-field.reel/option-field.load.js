montageDefine("22a41ee","ui/option-fields/choice-option-field.reel/option-field.reel/option-field",{dependencies:["montage/ui/component","montage/composer/press-composer"],factory:function(e,o,s){var t=e("montage/ui/component").Component,n=e("montage/composer/press-composer").PressComposer;o.OptionField=t.specialize({constructor:{value:function(){this["super"](),this._pressComposer=new n,this.addComposerForElement(this._pressComposer,this.labelAreaElement),this._pressComposer.addEventListener("press",this,!1)}},_pressComposer:{value:null},handlePress:{value:function(){var e=this.templateObjects.chosenRadioButton;e.checked||(e.checked=!0)}}})}});