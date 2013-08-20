var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;

exports.StaircaseConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function StaircaseConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;
            optionMap.set("material", new ConfigurationChoice().init(
                new ConfigurationOption().init("FSC Teak", 14000),
                new ConfigurationOption().init("Dark Walnut", 12000),
                new ConfigurationOption().init("Dark Ash", 10000),
                new ConfigurationOption().init("Powder Coated Metal", 8000)
            ));
        }
    }

});

