/**
 * @module ./element.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Element
 * @extends Component
 */
exports.Element = Component.specialize(/** @lends Element# */ {
    constructor: {
        value: function Element() {
            this.super();
        }
    },

    hasTemplate: {
        value: false
    }
});
