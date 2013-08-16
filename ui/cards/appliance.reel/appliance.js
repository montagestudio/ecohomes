/**
 * @module ./appliance.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Appliance
 * @extends Component
 */
exports.Appliance = Component.specialize(/** @lends Appliance# */ {
    constructor: {
        value: function Appliance() {
            this.super();
        }
    }
});
