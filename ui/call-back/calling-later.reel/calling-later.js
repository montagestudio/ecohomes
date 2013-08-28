/**
 * @module ./calling-later.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class CallingLater
 * @extends Component
 */
exports.CallingLater = Component.specialize(/** @lends CallingLater# */ {
    constructor: {
        value: function CallingLater() {
            this.super();
        }
    },

    controller: {
        value: null
    },

    handleCancelAction: {
        value: function() {
            this.controller.cancel();
        }
    }
});
