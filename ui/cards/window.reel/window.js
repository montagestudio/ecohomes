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
    }
});
