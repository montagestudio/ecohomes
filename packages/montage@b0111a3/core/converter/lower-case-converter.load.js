montageDefine("b0111a3","core/converter/lower-case-converter",{dependencies:["./converter"],factory:function(e,r,n){var t=e("./converter").Converter;r.LowerCaseConverter=t.specialize({_convert:{value:function(e){return e&&"string"==typeof e&&e.toLowerCase?e.toLowerCase():e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});