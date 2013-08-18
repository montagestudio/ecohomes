/**
 * @module ./window.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Window
 * @extends Component
 */
exports.Window = Component.specialize(/** @lends Window# */ {
    constructor: {
        value: function Window() {
            this.super();

        }
    },

    _coatingStrength: {
        value: null
    },

    coatingStrength: {
        set: function(value) {
            if (value !== this._coatingStrength) {
                this._coatingStrength = Math.round(value);
            }
        },
        get: function() {
            return this._coatingStrength;
        }
    }
});
