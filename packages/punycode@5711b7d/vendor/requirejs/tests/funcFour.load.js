montageDefine("5711b7d","vendor/requirejs/tests/funcFour",{dependencies:["funcThree"],factory:function(e,n,r){define("funcFour",["require","funcThree"],function(e){var n=function(e){return"FOUR called with "+e};return n.suffix=function(){return e("funcThree").suffix()},n})}});