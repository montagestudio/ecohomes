var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;

exports.CountertopsConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function CountertopsConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;

            this.name = "Kitchen Counters";

            var defaultCounterTop = new ConfigurationOption().init("Paper Composite", 0);
            var materialChoice = new ConfigurationChoice().init(
                new ConfigurationOption().init("Black Quartz", 5400),
                new ConfigurationOption().init("Cement and Fly Ash", 4599),
                new ConfigurationOption().init("Bamboo", 3199),
                defaultCounterTop);

            materialChoice.options.select(defaultCounterTop);

            optionMap.set("material", materialChoice);
        }
    }

});
