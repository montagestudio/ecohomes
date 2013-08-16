/**
 * @module ./overview.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Overview
 * @extends Component
 */
exports.Overview = Component.specialize(/** @lends Overview# */ {

    configuration: {
        value: null
    },

    constructor: {
        value: function Overview() {
            this.super();
        }
    }
});
