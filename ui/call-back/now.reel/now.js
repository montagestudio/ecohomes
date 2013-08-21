/**
 * @module ./now.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Now
 * @extends Component
 */
exports.Now = Component.specialize(/** @lends Now# */ {
    constructor: {
        value: function Now() {
            this.super();
        }
    },

    enterDocument: {
        value: function() {

        }
    },

    exitDocument: {
        value: function() {


        }
    },

    controller: {
        value: null
    },

    handleAction: {
        value: function() {
            this.controller.call()
        }
    },

    handleCallLaterAction: {
        value: function() {
            this.controller.later()
        }
    }

});
