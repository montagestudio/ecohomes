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
    },

    staircaseSrc: {
        value: "../../assets/static/staircase.png"
    },

    countertopSrc: {
        value: "../../assets/static/countertop-paper.png"
    },

    kitchenSrc: {
        value: "../../assets/static/kitchen.png"
    }
});
