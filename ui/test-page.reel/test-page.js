/**
 * @module ./test-page.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class TestPage
 * @extends Component
 */
exports.TestPage = Component.specialize(/** @lends TestPage# */ {
    constructor: {
        value: function TestPage() {
            this.super();
        }
    }
});
