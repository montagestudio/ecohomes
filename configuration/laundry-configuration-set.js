var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;

exports.LaundryConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function LaundryConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;
            optionMap.set("washer", new ConfigurationOption().init("EcoWash", 1099, 130));
            optionMap.set("dryer", new ConfigurationOption().init("EcoDry", 1199, 160));
        }
    }

});


