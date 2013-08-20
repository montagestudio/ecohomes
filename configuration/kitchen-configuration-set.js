var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;

exports.KitchenConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function KitchenConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;
            optionMap.set("appliances", new ConfigurationChoice().init(
                new ConfigurationOption().init("Gütersloh", 12999, 160),
                new ConfigurationOption().init("Norse", 10299, 130),
                new ConfigurationOption().init("Electro", 7999, 100),
                new ConfigurationOption().init("MH", 4999, 70),
                new ConfigurationOption().init("Vortex", 3199, 50),
                new ConfigurationOption().init("No appliances installed", 0)
            ));

        }
    }

});
