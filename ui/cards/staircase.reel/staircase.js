/**
 * @module ./staircase.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Staircase
 * @extends Component
 */
exports.Staircase = Component.specialize(/** @lends Staircase# */ {
    constructor: {
        value: function Staircase() {
            this.super();
        }
    },

    configurationSet: {
        value: null
    }
});
