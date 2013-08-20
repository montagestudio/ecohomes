/**
 * @module ./configuration-set
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
var Map = require("montage/collections/map");

/**
 * @class ConfigurationSet
 * @extends Montage
 */
exports.ConfigurationSet = Montage.specialize(/** @lends ConfigurationSet# */ {
    constructor: {
        value: function ConfigurationSet() {
            this.super();
            this.optionMap = new Map();
        }
    },

    optionMap: {
        value: null
    },

    name: {
        value: null
    }
});
