/**
 * @module ./boolean-option-field.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class BooleanOptionField
 * @extends Component
 */
exports.BooleanOptionField = Component.specialize(/** @lends BooleanOptionField# */ {
    constructor: {
        value: function BooleanOptionField() {
            this.super();
        }
    }
});
