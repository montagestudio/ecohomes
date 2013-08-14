/**
 * @module ./cost-graph.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class CostGraph
 * @extends Component
 */
exports.CostGraph = Component.specialize(/** @lends CostGraph# */ {
    constructor: {
        value: function CostGraph() {
            this.super();
        }
    },

    max: {
        value: null
    },

    average: {
        value: null
    },

    consumption: {
        value: null
    }
});
