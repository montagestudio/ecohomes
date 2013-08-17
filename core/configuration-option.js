/**
 * @module ./configuration-option
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class ConfigurationOption
 * @extends Montage
 */
exports.ConfigurationOption = Montage.specialize(/** @lends ConfigurationOption# */ {

    constructor: {
        value: function ConfigurationOption() {
            this.super();
        }
    },

    init: {
        value: function (name, price, value) {
            this.name = name;
            this.price = price;
            this.value = value;

            return this;
        }
    },

    name: {
        value: null
    },

    price: {
        value: 0
    },

    value: {
        value: null
    },

    /**
     * Whether to consider this option chosen
     */
    chosen: {
        value: false
    }

});
