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

    _valueElement: {
        value: null
    },

    _levelElement: {
        value: null
    },

    _height: {
        value: null
    },

    _valueHeight: {
        value: null
    },

    _levelHeight: {
        value: null
    },

    willDraw: {
        value: function() {
            this._height = this.element.offsetHeight;
            this._valueHeight = this._valueElement.offsetHeight;
            this._levelHeight = this._levelElement.offsetHeight;
        }
    },

    draw: {
        value: function() {
            var totalAvailable,
                levelHeight;

            // Wait until the value and the label are drawn,
            // and the Bar styles have been applied so we can measure them.
            if (this._height == 0 || (this._value && this._valueHeight === 0)) {
                this.needsDraw = true;
            } else {
                totalAvailable = this._height - this._valueHeight;
                levelHeight = Math.min(
                    Math.floor((this._value / this._maxValue) * totalAvailable),
                    totalAvailable);
                this._levelElement.style.height = levelHeight + "px";
            }
        }
    }
});
