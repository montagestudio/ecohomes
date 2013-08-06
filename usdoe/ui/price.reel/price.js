/**
 * @module ./price.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    Eletricity = require("usdoe/service/electricity").Electricity;

/**
 * @class Price
 * @extends Component
 */
exports.Price = Component.specialize(/** @lends Price# */ {
    constructor: {
        value: function Price() {
            this.super();
        }
    },

    _kwhPrice: {
        value: null
    },

    _zipCode: {
        value: null
    },

    zipCode: {
        set: function(value) {
            if (value && value !== this._zipCode && value.length == 5) {
                this._zipCode = value;
                if (value) {
                    this._kwhPrice = Eletricity.getKwhPrice(value);
                } else {
                    this._kwhPrice = null;
                }
            }
        },
        get: function() {
            return this._zipCode;
        }
    }
});
