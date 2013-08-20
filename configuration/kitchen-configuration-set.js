var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;

exports.KitchenConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function KitchenConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;

            this.name = "Kitchen";
            optionMap.set("appliances", new ConfigurationChoice().init(
                new ConfigurationOption().init("Gütersloh", 10999, 160),
                new ConfigurationOption().init("Norse", 8999, 130),
                new ConfigurationOption().init("Vortex", 6999, 100),
                new ConfigurationOption().init("None", 0)
            ));

        }
    }

});
