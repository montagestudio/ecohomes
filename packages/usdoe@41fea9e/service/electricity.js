var Montage=require("montage").Montage,data={};exports.Electricity=Montage.specialize({constructor:{value:function(){this["super"]()}}},{getAverageAnnualSpending:{value:function(n){return this.getKwhPrice(n)*this._getAnnualConsumption(n)/(100*this._getAnnualConsumers(n))}},getAverageAnnualConsumption:{value:function(n){return this._getAnnualConsumption(n)/this._getAnnualConsumers(n)}},getKwhPrice:{value:function(n){return 14.78}},_getAnnualConsumers:{value:function(n){return 13002980}},_getAnnualConsumption:{value:function(n){return 88472275920}},_getStateByZipCode:{value:function(n){return"California"}}});