var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;

exports.StaircaseConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function StaircaseConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;

            this.name = "Staircase";

            var defaultMaterial = new ConfigurationOption().init("FSC Pine", 0);
            var materialChoice = new ConfigurationChoice().init(
                new ConfigurationOption().init("Dark Walnut", 3699),
                new ConfigurationOption().init("Dark Ash", 1799),
                new ConfigurationOption().init("Deep Cherry", 1985),
                defaultMaterial);

            materialChoice.options.select(defaultMaterial);

            optionMap.set("material", materialChoice);
        }
    }

});

