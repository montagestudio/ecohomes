montageDefine("41fea9e","ui/price.reel/price",{dependencies:["montage/ui/component","usdoe/service/electricity"],factory:function(e,i,t){var c=e("montage/ui/component").Component,n=e("usdoe/service/electricity").Electricity;i.Price=c.specialize({constructor:{value:function(){this["super"]()}},_kwhPrice:{value:null},_zipCode:{value:null},zipCode:{set:function(e){e&&e!==this._zipCode&&5==e.length&&(this._zipCode=e,e?this._kwhPrice=n.getKwhPrice(e):this._kwhPrice=null)},get:function(){return this._zipCode}}})}});