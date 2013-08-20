/**
 * @module ./configuration-range
 */
var ConfigurationOption = require("./configuration-option").ConfigurationOption;
/**
 * @class ConfigurationRange
 * @extends Montage
 */
exports.ConfigurationRange = ConfigurationOption.specialize(/** @lends ConfigurationRange# */ {

    constructor: {
        value: function ConfigurationChoice() {
            this.super();
        }
    },

    init: {
        value: function(name, minValue, maxValue, value, priceFunction, consumptionSavingsFunction) {
            this.name = name;
            this.minValue = minValue;
            this.maxValue = maxValue;
            this._priceFunction = priceFunction;
            this._consumptionSavingsFunction = consumptionSavingsFunction;

            this.addPathChangeListener("value", this, "handleValueChange");
            this.value = value;

            return this;
        }
    },

    chosen: {
        value: true
    },

    _priceFunction: {
        value: null
    },

    _consumptionSavingsFunction: {
        value: null
    },

    handleValueChange: {
        value: function(value) {
            this.price = this._priceFunction(value);
            this.consumptionSavings = this._consumptionSavingsFunction(value);
        }
    }
});