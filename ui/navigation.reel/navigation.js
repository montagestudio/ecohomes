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

    panelDescriptors: {
        value: null
    },

    currentPanelIndex: {
        value: null
    },

    configuration: {
        value: null
    },

    handleAction: {
        value: function(event) {
            this.currentPanelIndex = event.detail.get("index");
        }
    }
});
