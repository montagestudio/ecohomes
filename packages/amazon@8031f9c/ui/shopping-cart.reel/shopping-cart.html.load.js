montageDefine("8031f9c","ui/shopping-cart.reel/shopping-cart.html",{"text":"<!DOCTYPE html><html><head><title></title><style>.amazon-ShoppingCart{position:relative;box-sizing:border-box;width:300px;height:300px;border:1px solid #6daee1;background-color:#c0dbf2;background-color:#ebf3fe;border-radius:5px;padding:5px;text-align:center;overflow:hidden}.amazon-ShoppingCart-logo{margin:15px}.amazon-ShoppingCart-content{display:block;position:absolute;height:230px;width:293px;-webkit-transition:left 400ms ease-in;-moz-transition:left 400ms ease-in;-ms-transition:left 400ms ease-in;transition:left 400ms ease-in}.amazon-ShoppingCart-receipt{visibility:hidden;left:293px}</style><script type=text/montage-serialization>{\"owner\":{\"prototype\":\"amazon/ui/shopping-cart.reel\",\"properties\":{\"element\":{\"#\":\"shoppingCart\"},\"asin\":\"B009GDHYPQ\"}},\"buy\":{\"prototype\":\"./buy.reel\",\"properties\":{\"element\":{\"#\":\"buy\"}},\"bindings\":{\"product\":{\"<-\":\"@owner._product\"}},\"listeners\":[{\"type\":\"buy\",\"useCapture\":false,\"listener\":{\"@\":\"owner\"}}]},\"logo\":{\"prototype\":\"digit/ui/image.reel\",\"properties\":{\"element\":{\"#\":\"logo\"},\"src\":\"../../assets/amazon.png\"}},\"receipt\":{\"prototype\":\"./receipt.reel\",\"properties\":{\"element\":{\"#\":\"receipt\"}},\"bindings\":{\"product\":{\"<-\":\"@owner._product\"}}}}</script></head><body><div data-montage-id=shoppingCart class=amazon-ShoppingCart><img data-montage-id=logo class=amazon-ShoppingCart-logo><div data-montage-id=buy class=amazon-ShoppingCart-content></div><span data-montage-id=receipt class=\"amazon-ShoppingCart-content amazon-ShoppingCart-receipt\"></span></div></body></html>"})