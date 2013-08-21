var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;

exports.StaircaseConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function StaircaseConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;

            this.name = "Staircase";
            optionMap.set("material", new ConfigurationChoice().init(
                new ConfigurationOption().init("Dark Walnut", 3699),
                new ConfigurationOption().init("Dark Ash", 1799),
                new ConfigurationOption().init("Powder Coated Metal", 1985),
                new ConfigurationOption().init("FSC Pine", 0)
            ));
        }
    }

});

