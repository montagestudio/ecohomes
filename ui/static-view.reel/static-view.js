/**
 * @module ./static-view.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class StaticView
 * @extends Component
 */
exports.StaticView = Component.specialize(/** @lends StaticView# */ {
    constructor: {
        value: function StaticView() {
            this.super();
        }
    }
});
