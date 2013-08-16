/**
 * @module ./thermostat.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Thermostat
 * @extends Component
 */
exports.Thermostat = Component.specialize(/** @lends Thermostat# */ {
    constructor: {
        value: function Thermostat() {
            this.super();
        }
    }
});
