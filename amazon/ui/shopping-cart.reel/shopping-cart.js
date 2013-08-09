/**
 * @module ./shopping-cart.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    Products = require("amazon/service/products").Products;

/**
 * @class ShoppingCart
 * @extends Component
 */
exports.ShoppingCart = Component.specialize(/** @lends ShoppingCart# */ {
    constructor: {
        value: function ShoppingCart() {
            this.super();
        }
    },

    _product: {
        value: null
    },

    _asin: {value: null},
    asin: {
        set: function(value) {
            this._asin = value;
            this._product = Products.getProduct(value);
        },
        get: function() {
            return this._asin;
        }
    },

    _showReceipt: {
        value: false
    },

    _buyWidth: {
        value: null
    },

    willDraw: {
        value: function() {
            if (this._showReceipt) {
                this._buyWidth = this.templateObjects.buy.element.offsetWidth;
            }
        }
    },

    draw: {
        value: function() {
            if (this._showReceipt) {
                this._showReceipt = false;
                this.templateObjects.buy.element.style.left = -this._buyWidth + "px";
                this.templateObjects.receipt.element.style.visibility = "visible";
                this.templateObjects.receipt.element.style.left = "0px";
            }
        }
    },

    showReceipt: {
        value: function() {
            this._showReceipt = true;
            this.needsDraw = true;
        }
    },

    handleBuy: {
        value: function() {
            this.showReceipt();
        }
    }
});
