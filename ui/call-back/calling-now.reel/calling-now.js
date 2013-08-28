/**
 * @module ./calling.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class CallingNow
 * @extends Component
 */
exports.CallingNow = Component.specialize(/** @lends CallingNow# */ {
    constructor: {
        value: function CallingNow() {
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
