/**
 * @module ./configuration-choice
 */
var ConfigurationOption = require("./configuration-option").ConfigurationOption,
    RangeController = require("montage/core/range-controller").RangeController;
/**
 * @class ConfigurationOption
 * @extends Montage
 */
exports.ConfigurationChoice= ConfigurationOption.specialize(/** @lends ConfigurationChoice# */ {

    constructor: {
        value: function ConfigurationChoice() {
            this.super();
            this.options = new RangeController();
            this.defineBindings({
                "_selectedOption": {"<-": "options.selection[0]"},
                "name": {"<-": "_selectedOption.name"},
                // the ?? 0 is needed to avoid the .price being something other
                // than number, the binding the sums all the prices gets stuck
                // into NaN when that happens.
                "price": {"<-": "_selectedOption.price ?? 0"},
                "value": {"<-": "_selectedOption.value"},
                "consumptionSavings": {"<-": "_selectedOption.consumptionSavings ?? 0"},
                // filter{this} removes undefined values from the selection
                "chosen": {"<-": "options.selection.filter{this}.length == 1"}
            });
        }
    },

    _selectedOption: {
        value: null
    },

    options: {
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
    },

    init: {
        value: function (/*option1, option2, ..., optionN*/) {
            this.options.content = Array.prototype.slice.call(arguments, 0);

            return this;
        }
    },

    addOption: {
        value: function(option) {
            this.options.content.push(option);
        }
    }

});
