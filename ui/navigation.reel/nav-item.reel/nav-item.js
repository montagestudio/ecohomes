/**
 * @module ./nav-item.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class NavItem
 * @extends Component
 */
exports.NavItem = Component.specialize(/** @lends NavItem# */ {
    constructor: {
        value: function NavItem() {
            this.super();
        }
    },

    _panelKey: {
        value: null
    },

    panelKey: {
        get: function () {
            return this._panelKey;
        },
        set: function (value) {
            if (value === this._panelKey) {
                return;
            }

            this._panelKey = value;
            this.needsDraw = true;
        }
    },

    _currentNavigationClassName: {
        value: null
    },

    draw: {
        value: function () {

            var newClassName;

            if (this._currentNavigationClassName) {
                this.element.classList.remove(this._currentNavigationClassName);
                this._currentNavigationClassName = null;
            }

            if (this.panelKey) {
                newClassName = "NavItem--" + this.panelKey;
                this.element.classList.add(newClassName);
                this._currentNavigationClassName = newClassName;
            }


        }
    }

});
