var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;

exports.ThermostatConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function ThermostatConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;

            this.name = "Thermostat";
            optionMap.set("thermostat", new ConfigurationOption().init("Smart Thermostat", 299, 800));
        }
    }

});


