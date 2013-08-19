var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;

exports.CountertopsConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function CountertopsConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;
            optionMap.set("material", new ConfigurationChoice().init(
                new ConfigurationOption().init("Bamboo", 3299),
                new ConfigurationOption().init("Paper Composite", 1999),
                new ConfigurationOption().init("Cement and Fly Ash", 1599),
                new ConfigurationOption().init("Black Quartz", 0)
            ));

        }
    }

});
