var Component=require("montage/ui/component").Component,Eletricity=require("usdoe/service/electricity").Electricity;exports.Price=Component.specialize({constructor:{value:function(){this["super"]()}},_kwhPrice:{value:null},_zipCode:{value:null},zipCode:{set:function(e){e&&e!==this._zipCode&&5==e.length&&(this._zipCode=e,e?this._kwhPrice=Eletricity.getKwhPrice(e):this._kwhPrice=null)},get:function(){return this._zipCode}}});