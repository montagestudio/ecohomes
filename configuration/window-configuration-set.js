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
                new ConfigurationOption().init("Single-pane EcoGlass", 3999, 100),
                new ConfigurationOption().init("Dual-pane EcoGlass", 5999, 150),
                new ConfigurationOption().init("Triple-pane EcoGlass", 8999, 200)
            ));
            optionMap.set("coating", new ConfigurationRange().init("UV Coating Strength", 0, 100, 0, function(value) {
                return Math.round(value * 21.5);
            }, function(value) {
                return Math.round(value * 3);
            }));
        }
    }
});
