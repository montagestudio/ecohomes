/**
 * @module ./receipt.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Receipt
 * @extends Component
 */
exports.Receipt = Component.specialize(/** @lends Receipt# */ {
    constructor: {
        value: function Receipt() {
            this.super();
        }
    },

    _trackingNumber: {
        get: function() {
            var trackingNumber = "";

            for (var i = 0; i < 10; i++) {
                trackingNumber += Math.floor(Math.random() * 10);
            }

            return trackingNumber;
        }
    }
});
