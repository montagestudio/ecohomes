var ConfigurationSet = require("core/configuration-set").ConfigurationSet;
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;
var ConfigurationChoice = require("core/configuration-choice").ConfigurationChoice;
var ConfigurationRange = require("core/configuration-range").ConfigurationRange;

exports.WindowConfigurationSet = ConfigurationSet.specialize({

    constructor: {
        value: function WindowConfigurationSet() {
            this.super();

            var optionMap = this.optionMap;
            optionMap.set("glass", new ConfigurationChoice().init(
                new ConfigurationOption().init("Dual-pane EcoGlass", 5999),
                new ConfigurationOption().init("Triple-pane EcoGlass", 9999)
            ));
            optionMap.set("coating", new ConfigurationRange().init("UV Coating Strength", 0, 100, 50, function(value) {
                return Math.round(value * 21.5);
            }));
        }
    }
});
