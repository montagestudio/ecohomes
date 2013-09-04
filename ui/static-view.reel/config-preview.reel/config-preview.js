/**
 * @module ./config-preview.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ConfigPreview
 * @extends Component
 */
exports.ConfigPreview = Component.specialize(/** @lends ConfigPreview# */ {
    constructor: {
        value: function ConfigPreview() {
            this.super();
        }
    },

    _className: {
        value: null
    },

    className: {
        get: function () {
            return this._className;
        },
        set: function (value) {
            if (value === this._className) {
                return;
            }

            this._className = value;
            this.needsDraw = true;
        }
    },

    _currentConfigurationClassName: {
        value: null
    },

    draw: {
        value: function () {
            var newClassName;

            if (this._currentConfigurationClassName) {
                this.element.classList.remove(this._currentConfigurationClassName);
                this._currentConfigurationClassName = null;
            }

            if (this.className) {
                newClassName = this.className;
                this.element.classList.add(newClassName);
                this._currentConfigurationClassName = newClassName;
            }

        }
    }

});
