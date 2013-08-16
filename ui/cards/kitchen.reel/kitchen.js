/**
 * @module ./kitchen.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Kitchen
 * @extends Component
 */
exports.Kitchen = Component.specialize(/** @lends Kitchen# */ {
    constructor: {
        value: function Kitchen() {
            this.super();
        }
    }
});
