var ConfigurationSet=require("core/configuration-set").ConfigurationSet,ConfigurationOption=require("core/configuration-option").ConfigurationOption,ConfigurationChoice=require("core/configuration-choice").ConfigurationChoice;exports.CountertopsConfigurationSet=ConfigurationSet.specialize({constructor:{value:function(){this["super"]();var i=this.optionMap;this.name="Kitchen Counters";var o=(new ConfigurationOption).init("Paper Composite",0),n=(new ConfigurationChoice).init((new ConfigurationOption).init("Black Quartz",5400),(new ConfigurationOption).init("Cement and Fly Ash",4599),(new ConfigurationOption).init("Bamboo",3199),o);n.options.select(o),i.set("material",n)}}});