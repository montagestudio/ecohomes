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

    draw: {
        value: function() {
            var levelWidth;

            levelWidth = Math.min(
                Math.floor(this._value * 100 / this._maxValue), 100);
            this._levelElement.style.webkitTransform = "translate3d("+ (levelWidth - 100) + "%, 0, 0)";
        }
    }
});
