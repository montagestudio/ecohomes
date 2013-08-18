var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;

exports.KitchenConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function KitchenConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;
            optionMap.set("refrigerator", new ConfigurationOption().init("EcoFridge", 2299));
            optionMap.set("range", new ConfigurationOption().init("EcoRange", 1699));
            optionMap.set("microwave", new ConfigurationOption().init("EcoWave", 699));
            optionMap.set("oven", new ConfigurationOption().init("EcoBake", 1999));
            optionMap.set("dishwasher", new ConfigurationOption().init("EcoWash", 1199));
        }
    },

    preferredViewpointLabel: {
        value: "kitchenViewpoint"
    }

});
