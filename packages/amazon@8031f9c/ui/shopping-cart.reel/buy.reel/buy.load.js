montageDefine("8031f9c","ui/shopping-cart.reel/buy.reel/buy",{dependencies:["montage/ui/component"],factory:function(t,n,e){var o=t("montage/ui/component").Component,i=2500;n.Buy=o.specialize({constructor:{value:function(){this["super"]()}},_deliveryEstimation:{value:"Tomorrow"},_orderWithin:{get:function(){var t=Math.ceil(3*Math.random()),n=Math.floor(60*Math.random());return t+"hr "+n+"min"}},product:{value:null},isLoading:{value:!1},handleBuyButtonAction:{value:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.dispatchBuyEvent()},i)}},dispatchBuyEvent:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("buy",!0,!0,null),this.dispatchEvent(t)}}})}});