var ConfigurationOption=require("./configuration-option").ConfigurationOption;exports.ConfigurationRange=ConfigurationOption.specialize({constructor:{value:function(){this["super"]()}},init:{value:function(n,i,t,o,u,e){return this.name=n,this.minValue=i,this.maxValue=t,this._priceFunction=u,this._consumptionSavingsFunction=e,this.addPathChangeListener("value",this,"handleValueChange"),this.value=o,this.defineBindings({chosen:{"<-":"value > 0"}}),this}},_priceFunction:{value:null},_consumptionSavingsFunction:{value:null},handleValueChange:{value:function(n){this.price=this._priceFunction(n),this.consumptionSavings=this._consumptionSavingsFunction(n)}}});