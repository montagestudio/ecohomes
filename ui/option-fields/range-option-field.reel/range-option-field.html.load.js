montageDefine("22a41ee","ui/option-fields/range-option-field.reel/range-option-field.html",{"text":"<!DOCTYPE html><html><head><title></title><style>.RangeOptionField .Card-option-labelArea{padding-left:0}.RangeOptionField-slider{margin-top:12px;margin-bottom:5px;width:100%}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"rangeOptionField\"}}},\"rangeSlider\":{\"prototype\":\"digit/ui/slider.reel\",\"properties\":{\"element\":{\"#\":\"rangeSlider\"},\"step\":10},\"bindings\":{\"min\":{\"<-\":\"@owner.configurationOption.minValue\"},\"max\":{\"<-\":\"@owner.configurationOption.maxValue\"},\"value\":{\"<->\":\"@owner.configurationOption.value\"}}},\"name\":{\"prototype\":\"montage/ui/text.reel\",\"properties\":{\"element\":{\"#\":\"name\"},\"value\":\"Text\"},\"bindings\":{\"value\":{\"<-\":\"@owner.configurationOption.name\"}}},\"price\":{\"prototype\":\"montage/ui/text.reel\",\"properties\":{\"element\":{\"#\":\"price\"},\"converter\":{\"@\":\"currencyConverter\"}},\"bindings\":{\"value\":{\"<-\":\"@owner.configurationOption.price\"}}},\"currencyConverter\":{\"prototype\":\"montage/core/converter/currency-converter\",\"properties\":{\"shorten\":false,\"decimals\":0,\"showCurrencyBeforeNumber\":true}}}</script></head><body><div data-montage-id=rangeOptionField class=RangeOptionField><label class=Card-option--rangeField><div class=Card-option-labelArea><strong class=Card-option-label data-montage-id=name></strong> <span class=Card-option-price data-montage-id=price></span></div><div data-montage-id=rangeSlider class=\"Custom RangeOptionField-slider\"></div></label></div></body></html>"})