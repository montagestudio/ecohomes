/**
 * @module ./navigation.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Navigation
 * @extends Component
 */
exports.Navigation = Component.specialize(/** @lends Navigation# */ {
    constructor: {
        value: function Navigation() {
            this.super();
        }
    },

    currentPanel: {
        value: null
    },

    handleAction: {
        value: function(event) {
            this.currentPanel = event.detail.get("index");
        }
    }
});
