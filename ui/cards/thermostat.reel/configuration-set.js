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
            optionMap.set("thermostat", new ConfigurationOption().init("Smart Thermostat", 299));
        }
    },

    optionMap: {
        value: null
    }

});
