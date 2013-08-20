/**
 * @module ./bar.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Bar
 * @extends Component
 */
exports.Bar = Component.specialize(/** @lends Bar# */ {
    constructor: {
        value: function Bar() {
            this.super();
        }
    },

    _value: {
        value: 0
    },

    value: {
        set: function(value) {
            if (value !== this._value) {
                this._value = value;
                this.needsDraw = true;
            }
        },
        get: function() {
            return this._value;
        }
    },

    _maxValue: {
        value: null
    },

    maxValue: {
        set: function(value) {
            if (value !== this._maxValue) {
                this._maxValue = value;
                this.needsDraw = true;
            }
        },
        get: function() {
            return this._maxValue;
        }
    },

    label: {
        value: null
    },

    _levelElement: {
        value: null
    },

    _width: {
        value: null
    },

    willDraw: {
        value: function() {
            this._width = this.element.offsetWidth;
        }
    },

    draw: {
        value: function() {
            var totalAvailable,
                levelWidth;

            // Wait until the Bar styles have been applied so we can measure
            // them.
            if (this._width == 0) {
                this.needsDraw = true;
            } else {
                totalAvailable = this._width;
                levelWidth = Math.min(
                    Math.floor((this._value / this._maxValue) * totalAvailable),
                    totalAvailable);
                this._levelElement.style.width = levelWidth + "px";
            }
        }
    }
});
