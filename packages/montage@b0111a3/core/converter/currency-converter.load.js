montageDefine("b0111a3","core/converter/currency-converter",{dependencies:["./number-converter"],factory:function(e,r,n){var c=e("./number-converter").NumberConverter;r.CurrencyConverter=c.specialize({currency:{value:"$"},decimals:{value:2},useParensForNegative:{value:!1},showCurrencyBeforeNumber:{value:!1},forceDecimals:{value:!0},convert:{value:function(e){var r=this["super"](e);return e<0&&this.useParensForNegative&&(r="("+r.substring(1,r.length)+")"),r=this.showCurrencyBeforeNumber?this.currency+" "+r:r+" "+this.currency}}})}});