/**
 * @module ./configuration-set
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
var Map = require("montage/collections/map");
var ConfigurationOption = require("core/configuration-option").ConfigurationOption;

/**
 * @class ConfigurationSet
 * @extends Montage
 */
exports.ConfigurationSet = Montage.specialize(/** @lends ConfigurationSet# */ {

    constructor: {
        value: function ConfigurationSet() {
            this.super();

            var optionMap = this.optionMap = new Map();
            optionMap.set("refrigerator", new ConfigurationOption().init("EcoFridge", 2299));
            optionMap.set("range", new ConfigurationOption().init("EcoRange", 1699));
            optionMap.set("microwave", new ConfigurationOption().init("EcoWave", 699));
            optionMap.set("oven", new ConfigurationOption().init("EcoBake", 1999));
            optionMap.set("dishwasher", new ConfigurationOption().init("EcoWash", 1199));
        }
    },

    optionMap: {
        value: null
    }

});
