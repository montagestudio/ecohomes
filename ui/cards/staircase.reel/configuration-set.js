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
            optionMap.set("teak", new ConfigurationOption().init("FSC Teak", 0));
            optionMap.set("walnut", new ConfigurationOption().init("Dark Walnut", 12000));
            optionMap.set("ash", new ConfigurationOption().init("Dark Ash", 10000));
            optionMap.set("bold", new ConfigurationOption().init("Powder Coated Metal", 8000));
        }
    },

    optionMap: {
        value: null
    }

});
