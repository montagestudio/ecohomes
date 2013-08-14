/**
 * @module ./cost.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    Eletricity = require("usdoe/service/electricity").Electricity;

/**
 * @class Cost
 * @extends Component
 */
exports.Cost = Component.specialize(/** @lends Cost# */ {
    constructor: {
        value: function Cost() {
            this.super();
            this.addPathChangeListener("consumption", this, "handleConsumptionCostChange");
            this.addPathChangeListener("zipCode", this, "handleConsumptionCostChange");
        }
    },

    _consumption: {
        value: null
    },

    consumption: {
        set: function(value) {
            if (value !== this._consumption) {
                this._consumption = value;
            }
        },
        get: function() {
            return this._consumption;
        }
    },

    averageCost: {
        value: null
    },

    consumptionCost: {
        value: null
    },

    _zipCode: {
        value: null
    },

    zipCode: {
        set: function(value) {
            if (value !== this._zipCode) {
                this._zipCode = value;
                this.averageCost = Math.round(Eletricity.getAverageAnnualSpending(value));
            }
        },
        get: function() {
            return this._zipCode;
        }
    },

    handleConsumptionCostChange: {
        value: function() {
            var kwhPrice;

            if (this._zipCode && this._consumption != null) {
                kwhPrice = Eletricity.getKwhPrice(this._zipCode);
                this.consumptionCost = Math.round(kwhPrice * this._consumption / 100);
            }
        }
    }
});
