montageDefine("22a41ee","ui/main.reel/main.html",{"text":"<!DOCTYPE html><html><head><meta http-equiv=content-type content=\"text/html; charset=utf-8\"><title>Main</title><style>.Custom.digit-RadioButton,.Custom.digit-Checkbox{border-color:hsla(0,0%,0%,.12);background-color:hsl(0,0%,94%);box-shadow:inset 0 1px 3px hsla(0,0%,0%,.1)}.Custom.digit-RadioButton.montage--active,.Custom.digit-Checkbox.montage--active,.Custom.digit-RadioButton.montage-RadioButton--checked,.Custom.digit-Checkbox.montage-Checkbox--checked{background-color:hsl(74,65%,65%)}.Custom--hasSwatches .Custom.digit-RadioButton{font-size:20px;border:3px solid #fff;box-shadow:inset 0 1px 4px 1px hsla(0,0%,0%,.15);background-repeat:repeat;background-position:center;background-size:auto 100%}.Custom--hasSwatches .Custom.digit-RadioButton.montage-RadioButton--checked{box-shadow:inset 0 1px 4px 1px hsla(0,0%,0%,.15),0 0 0 2px hsl(74,65%,65%)}.Custom.digit-RadioButton:after,.Custom.digit-Checkbox:after,.Custom--swatch.digit-RadioButton:after{top:-6px;left:-6px;right:-6px;bottom:-6px}.Custom.digit-Slider{border-color:hsl(74,55%,60%);background-color:#fff;background-image:-webkit-linear-gradient(left,hsla(74,65%,35%,.3)2px,hsla(74,65%,65%,0)2px),-webkit-linear-gradient(left,hsla(74,65%,65%,0),hsla(74,65%,65%,1));background-image:linear-gradient(to right,hsla(74,65%,35%,.3)2px,hsla(74,65%,65%,0)2px),linear-gradient(to right,hsla(74,65%,65%,0),hsla(74,65%,65%,1));background-size:-webkit-calc(10% - 2px)100%,auto auto;background-size:calc(10% - 2px)100%,auto auto;background-position:12px top,left top;box-shadow:inset 0 1px 2px hsla(0,0%,0%,.1);width:100%}.Custom .digit-Slider-thumb{-moz-box-sizing:border-box;border-color:hsl(71,30%,74%);background:hsl(0,0%,90%) -webkit-linear-gradient(top,hsla(0,0%,100%,1),hsla(0,0%,100%,0));background:hsl(0,0%,90%) linear-gradient(to bottom,hsla(0,0%,100%,1),hsla(0,0%,100%,0));box-shadow:inset 0 1px 0 hsla(0,0%,100%,.5),0 2px 3px hsla(0,0%,0%,.15)}.Custom.montage-Slider--active .digit-Slider-thumb{border-color:hsl(71,30%,64%);background:hsl(74,40%,92%);box-shadow:none}.Custom.digit-TextField{height:2.2em;padding:0;border-radius:6px;font-size:18px;text-align:center;border-color:hsl(0,0%,82%);background-color:hsl(0,0%,95%);box-shadow:inset 0 1px 4px hsla(0,0%,0%,.08)}.Custom.digit-TextField:focus{border-color:hsl(74,65%,65%);background-color:hsl(74,65%,96%);box-shadow:inset 0 1px 1px hsla(0,0%,0%,.08)}.Custom.digit-Button{height:2.2em;border-radius:6px;color:hsl(0,0%,50%);font-size:18px;font-weight:700;text-shadow:0 1px 1px hsla(0,0%,100%,.4);border-color:hsl(0,0%,82%);background:hsl(0,0%,96%) -webkit-linear-gradient(top,hsla(0,0%,100%,.06),hsla(0,0%,0%,.06));background:hsl(0,0%,96%) linear-gradient(to bottom,hsla(0,0%,100%,.06),hsla(0,0%,0%,.06));box-shadow:inset 0 1px 1px 1px hsla(0,0%,100%,.2),0 2px 4px hsla(0,0%,0%,.1)}.Custom.digit-Button.montage--active{background-color:hsl(0,0%,98%);box-shadow:inset 0 1px 2px 1px hsla(0,0%,100%,.2);-webkit-transform:translateY(1px);transform:translateY(1px)}.Custom--action.digit-Button{color:hsl(74,40%,30%);border-color:hsl(74,55%,55%);background-color:hsl(74,65%,65%)}.Custom--action.digit-Button.montage--active{background-color:hsl(74,65%,70%)}.Custom--cancel.digit-Button{color:hsl(10,100%,93%);text-shadow:0 1px 2px hsla(0,0%,0%,.2);border-color:hsl(0,76%,60%);background-color:hsl(10,90%,66%)}.Custom--cancel.digit-Button.montage--active{background-color:hsl(10,100%,69%)}</style><style>.Main{width:100%;height:100%;overflow:hidden}.Main,.Main-viewport{display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.Main-viewport{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:2;background-color:hsl(0,0%,95%)}.Main-room{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.Main-colladaView canvas{display:block}.Main-overview{position:absolute;bottom:0;left:0;right:0}.Main-loader{text-align:center;padding-bottom:45px}.Main-loader-dot{position:relative;display:inline-block;width:12px;height:12px;border-radius:6px;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid hsla(0,0%,0%,.12);background-color:hsl(0,0%,94%);box-shadow:inset 0 1px 3px hsla(0,0%,0%,.1);-webkit-animation:Main-loader .9s 0s steps(1)10;animation:Main-loader .9s 0s steps(1)10}.Main-loader-dot:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.Main-loader-dot:nth-child(3){-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes Main-loader{66.667%{background-color:hsl(74,65%,65%)}}@keyframes Main-loader{66.667%{background-color:hsl(74,65%,65%)}}.Main-configuration{position:relative;height:100%;width:400px;min-height:100px}.Main-panel{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.Main-cards{list-style:none}.Main .PanelFlow.scrolling{background-color:hsl(0,0%,27%);background-image:-webkit-linear-gradient(top,hsla(0,0%,20%,.4)0%,hsla(0,0%,20%,.1)7%,hsla(0,0%,20%,0)14%);background-image:linear-gradient(top,hsla(0,0%,20%,.4)0%,hsla(0,0%,20%,.1)7%,hsla(0,0%,20%,0)14%)}.Main-ribbon{position:absolute;z-index:2;top:0;left:30px;width:56px;height:78px;overflow:hidden;font-size:0;color:hsla(0,0%,0%,0);background:url(assets/images/montage-made.svg) no-repeat center top;background-size:100% auto}@media (orientation:portrait){.Main{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.Main-viewport{height:auto}.Main-configuration{width:100%;height:400px;min-width:0;min-height:0}.Main-ribbon{left:20px}}@media (orientation:portrait) and (max-width:560px){.Main-configuration{height:300px}.Main-ribbon{width:40px}}@media (orientation:landscape) and (max-height:299px){.Card-content:nth-child(2){display:none}}@media (orientation:landscape) and (max-width:420px){.Main-configuration{display:none}}</style><script type=text/montage-serialization>{\"owner\":{\"prototype\":\"ui/main.reel\",\"properties\":{\"element\":{\"#\":\"main\"},\"panelDescriptors\":[{\"panelKey\":\"introduction\",\"label\":\"Welcome\"},{\"panelKey\":\"thermostat\",\"label\":\"Thermostat\"},{\"panelKey\":\"solarPanels\",\"label\":\"Solar Panels\"},{\"panelKey\":\"counters\",\"label\":\"Countertop\"},{\"panelKey\":\"kitchen\",\"label\":\"Kitchen\"},{\"panelKey\":\"laundry\",\"label\":\"Laundry\"},{\"panelKey\":\"window\",\"label\":\"Windows\"},{\"panelKey\":\"staircase\",\"label\":\"Staircase\"},{\"panelKey\":\"callBack\",\"label\":\"Contact Us\"}],\"viewPortElement\":{\"#\":\"viewPort\"}},\"bindings\":{\"currentPanel\":{\"<-\":\"panelDescriptors[@panelFlow.currentPanelIndex]\"},\"sceneView\":{\"<-\":\"@viewSubstitution.childComponents.0\"}}},\"application\":{\"prototype\":\"montage/core/application\"},\"callBack\":{\"prototype\":\"ui/cards/call-back.reel\",\"properties\":{\"element\":{\"#\":\"callBack\"}},\"bindings\":{\"configuration\":{\"<-\":\"@application.configuration\"},\"orderedPanelKeys\":{\"<-\":\"@owner.panelDescriptors.map{panelKey}\"}}},\"configurationPanels\":{\"prototype\":\"montage/ui/substitution.reel\",\"properties\":{\"element\":{\"#\":\"configurationPanels\"}},\"bindings\":{\"switchValue\":{\"<-\":\"@panelFlow:iteration.object.panelKey\"}}},\"countersPanel\":{\"prototype\":\"ui/cards/countertops.reel\",\"properties\":{\"element\":{\"#\":\"countersPanel\"}},\"bindings\":{\"configurationSet\":{\"<-\":\"@application.configuration.configurationMap.get('counters')\"}}},\"flowTranslateStartListener\":{\"prototype\":\"montage/core/event/action-event-listener\",\"properties\":{\"action\":\"pause\",\"handler\":{\"@\":\"glView\"}}},\"glView\":{\"prototype\":\"ui/gl-view.reel\",\"properties\":{\"element\":{\"#\":\"glView\"}},\"bindings\":{\"configuration\":{\"<-\":\"@application.configuration\"},\"currentPanel\":{\"<-\":\"@owner.currentPanel\"},\"temperatureDelta\":{\"<-\":\"@owner.temperatureDelta\"}}},\"introductionPanel\":{\"prototype\":\"ui/cards/introduction.reel\",\"properties\":{\"element\":{\"#\":\"introductionPanel\"}}},\"kitchenPanel\":{\"prototype\":\"ui/cards/kitchen.reel\",\"properties\":{\"element\":{\"#\":\"kitchenPanel\"}},\"bindings\":{\"configurationSet\":{\"<-\":\"@application.configuration.configurationMap.get('kitchen')\"}}},\"laundryPanel\":{\"prototype\":\"ui/cards/laundry.reel\",\"properties\":{\"element\":{\"#\":\"laundryPanel\"}},\"bindings\":{\"configurationSet\":{\"<-\":\"@application.configuration.configurationMap.get('laundry')\"}}},\"navigation\":{\"prototype\":\"ui/navigation.reel\",\"properties\":{\"element\":{\"#\":\"navigation\"}},\"bindings\":{\"configuration\":{\"<-\":\"@application.configuration\"},\"currentPanelIndex\":{\"<-\":\"@panelFlow.currentPanelIndex\"},\"panelDescriptors\":{\"<-\":\"@owner.panelDescriptors\"}},\"listeners\":[{\"type\":\"action\",\"listener\":{\"@\":\"owner\"}}]},\"overview\":{\"prototype\":\"ui/overview.reel\",\"properties\":{\"element\":{\"#\":\"overview\"}},\"bindings\":{\"configuration\":{\"<-\":\"@application.configuration\"}}},\"panelFlow\":{\"prototype\":\"ui/panel-flow.reel\",\"properties\":{\"element\":{\"#\":\"panelFlow\"}},\"bindings\":{\"content\":{\"<-\":\"@owner.panelDescriptors\"}},\"listeners\":[{\"type\":\"flowTranslateStart\",\"listener\":{\"@\":\"flowTranslateStartListener\"}}]},\"solarPanels\":{\"prototype\":\"ui/cards/solar-panels.reel\",\"properties\":{\"element\":{\"#\":\"solarPanels\"}},\"bindings\":{\"configurationSet\":{\"<-\":\"@application.configuration.configurationMap.get('solarPanels')\"}}},\"staircasePanel\":{\"prototype\":\"ui/cards/staircase.reel\",\"properties\":{\"element\":{\"#\":\"staircasePanel\"}},\"bindings\":{\"configurationSet\":{\"<-\":\"@application.configuration.configurationMap.get('staircase')\"}}},\"staticView\":{\"prototype\":\"ui/static-view.reel\",\"properties\":{\"element\":{\"#\":\"staticView\"}},\"bindings\":{\"configuration\":{\"<-\":\"@application.configuration\"},\"currentPanel\":{\"<-\":\"@owner.currentPanel\"}}},\"substitutionDelay\":{\"prototype\":\"core/substitution-delay\",\"properties\":{\"delay\":500,\"enabled\":true,\"excluded\":[\"introduction\"]},\"bindings\":{\"switchValues\":{\"<-\":\"@owner.panelDescriptors.map{panelKey}\"}}},\"thermostatPanel\":{\"prototype\":\"ui/cards/thermostat.reel\",\"properties\":{\"element\":{\"#\":\"thermostatPanel\"}},\"bindings\":{\"configurationSet\":{\"<-\":\"@application.configuration.configurationMap.get('thermostat')\"}}},\"viewSubstitution\":{\"prototype\":\"montage/ui/substitution.reel\",\"properties\":{\"element\":{\"#\":\"viewSubstitution\"}},\"bindings\":{\"switchValue\":{\"<-\":\"@owner.viewKey\"}}},\"windowPanel\":{\"prototype\":\"ui/cards/window.reel\",\"properties\":{\"element\":{\"#\":\"windowPanel\"}},\"bindings\":{\"configurationSet\":{\"<-\":\"@application.configuration.configurationMap.get('window')\"}}}}</script></head><body><div data-montage-id=main class=Main><section class=Main-viewport data-montage-skin=light data-montage-id=viewPort><div class=Main-loader><span class=Main-loader-dot></span> <span class=Main-loader-dot></span> <span class=Main-loader-dot></span></div><div class=Main-room><div data-montage-id=viewSubstitution><div data-arg=static data-montage-id=staticView></div><div data-arg=webgl data-montage-id=glView></div></div><div data-montage-id=overview class=Main-overview></div></div></section><section class=Main-configuration><ul data-montage-id=panelFlow class=Main-panel><li data-montage-id=configurationPanels class=Main-cards><div data-arg=introduction data-montage-id=introductionPanel></div><div data-arg=staircase data-montage-id=staircasePanel></div><div data-arg=thermostat data-montage-id=thermostatPanel></div><div data-arg=kitchen data-montage-id=kitchenPanel></div><div data-arg=laundry data-montage-id=laundryPanel></div><div data-arg=solarPanels data-montage-id=solarPanels></div><div data-arg=window data-montage-id=windowPanel></div><div data-arg=counters data-montage-id=countersPanel></div><div data-arg=callBack data-montage-id=callBack></div></li></ul></section><section class=Main-navigation data-montage-id=navigation></section><a class=Main-ribbon href=http://montagestudio.com>Made with Montage Studio</a></div></body></html>"})