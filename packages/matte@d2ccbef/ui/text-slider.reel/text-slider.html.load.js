montageDefine("d2ccbef","ui/text-slider.reel/text-slider.html",{"text":"<!DOCTYPE html><html><head><title>TextSlider</title><style>.matte-TextSlider-input{display:none}.matte-TextSlider--editing .matte-TextSlider-input{display:inherit}.matte-TextSlider-value{border-bottom:1px dotted #000}.matte-TextSlider--editing .matte-TextSlider-value,.matte-TextSlider--editing .matte-TextSlider-label{display:none}</style><script type=text/montage-serialization>{\"value\":{\"prototype\":\"montage/ui/text.reel\",\"properties\":{\"element\":{\"#\":\"value\"}},\"bindings\":{\"value\":{\"<-\":\"@owner.convertedValue\"}}},\"units\":{\"prototype\":\"montage/ui/text.reel\",\"properties\":{\"element\":{\"#\":\"units\"}},\"bindings\":{\"value\":{\"<-\":\"@owner.unit\"}}},\"translateComposer\":{\"prototype\":\"montage/composer/translate-composer\",\"properties\":{\"component\":{\"@\":\"owner\"},\"hasMomentum\":false,\"invertYAxis\":true,\"allowFloats\":true,\"startTranslateSpeed\":1},\"bindings\":{\"minTranslateX\":{\"<-\":\"@owner.minValue\"},\"minTranslateY\":{\"<-\":\"@owner.minValue\"},\"maxTranslateX\":{\"<-\":\"@owner.maxValue\"},\"maxTranslateY\":{\"<-\":\"@owner.maxValue\"}},\"listeners\":[{\"type\":\"translateStart\",\"listener\":{\"@\":\"owner\"}},{\"type\":\"translate\",\"listener\":{\"@\":\"owner\"}},{\"type\":\"translateEnd\",\"listener\":{\"@\":\"owner\"}}]},\"pressComposer\":{\"prototype\":\"montage/composer/press-composer\",\"properties\":{\"component\":{\"@\":\"owner\"},\"delegate\":{\"@\":\"owner\"}},\"listeners\":[{\"type\":\"press\",\"listener\":{\"@\":\"owner\"}}]},\"numberConverter\":{\"prototype\":\"montage/core/converter/number-converter\"},\"owner\":{\"prototype\":\"montage/ui/text.reel\",\"properties\":{\"element\":{\"#\":\"text-slider\"},\"_inputElement\":{\"#\":\"input\"},\"_pressComposer\":{\"@\":\"pressComposer\"},\"_translateComposer\":{\"@\":\"translateComposer\"}}}}</script></head><body><span data-montage-id=text-slider class=matte-TextSlider tabindex=0><input data-montage-id=input class=matte-TextSlider-input> <span data-montage-id=value class=matte-TextSlider-value></span> <span data-montage-id=units class=matte-TextSlider-label></span></span></body></html>"})