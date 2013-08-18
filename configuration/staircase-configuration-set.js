var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;

exports.StaircaseConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function StaircaseConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;
            optionMap.set("teak", new ConfigurationOption().init("FSC Teak", 0));
            optionMap.set("walnut", new ConfigurationOption().init("Dark Walnut", 12000));
            optionMap.set("ash", new ConfigurationOption().init("Dark Ash", 10000));
            optionMap.set("bold", new ConfigurationOption().init("Powder Coated Metal", 8000));
        }
    }

});

