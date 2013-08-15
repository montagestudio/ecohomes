/**
 * @module ./introduction.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Introduction
 * @extends Component
 */
exports.Introduction = Component.specialize(/** @lends Introduction# */ {
    constructor: {
        value: function Introduction() {
            this.super();
        }
    }
});
