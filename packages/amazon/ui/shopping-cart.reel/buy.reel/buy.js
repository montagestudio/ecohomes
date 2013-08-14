/**
 * @module ./buy.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

var LOADING_TIMEOUT = 2500;

/**
 * @class Buy
 * @extends Component
 */
exports.Buy = Component.specialize(/** @lends Buy# */ {
    constructor: {
        value: function Buy() {
            this.super();
        }
    },

    _deliveryEstimation: {
        value: "Tomorrow"
    },

    _orderWithin: {
        get: function() {
            var hour = Math.ceil(Math.random() * 3),
                minutes = Math.floor(Math.random() * 60);

            return hour + "hr " + minutes + "min";
        }
    },

    product: {
        value: null
    },

    isLoading: {
        value: false
    },

    handleBuyButtonAction: {
        value: function() {
            var self = this;

            this.isLoading = true;
            setTimeout(function() {
                self.dispatchBuyEvent();
            }, LOADING_TIMEOUT);
        }
    },

    dispatchBuyEvent: {
        value: function() {
            var buyEvent = document.createEvent("CustomEvent");

            buyEvent.initCustomEvent("buy", true, true, null);
            this.dispatchEvent(buyEvent);
        }
    }
});
