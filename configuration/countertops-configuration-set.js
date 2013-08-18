var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;

exports.CountertopsConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function CountertopsConfigurationSet() {
            this.super();
        }
    }

});
