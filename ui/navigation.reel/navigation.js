/**
 * @module ./navigation.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var RangeController = require("montage/core/range-controller").RangeController;

/**
 * @class Navigation
 * @extends Component
 */
exports.Navigation = Component.specialize(/** @lends Navigation# */ {
    constructor: {
        value: function Navigation() {
            this.super();
            this.templateObjects = {};
            this.templateObjects.rangeController = new RangeController();
            this.templateObjects.rangeController.content = [
                {
                    id: "page1",
                    title: "Welcome"
                },
                {
                    id: "page2",
                    title: "Savings"
                },
                {
                    id: "page3",
                    title: "Installation"
                },
                {
                    id: "page4",
                    title: "Buy"
                }
            ];
        }
    },

    templateDidLoad: {
        value: function() {
            // more straight forward to do this so that it is only handled when the slot exists.
            this.templateObjects.rangeController.addRangeAtPathChangeListener("selection", this, "handleSelectionChange");
            this.templateObjects.rangeController.selection.push(this.templateObjects.rangeController.content[0])

        }
    },


    handleSelectionChange: {
        value: function(plus, minus, index) {
            if(plus[0]) {
                this.templateObjects.substitution.switchValue = plus[0].id;


            }
        }
    },

    handleBack: {
        value: function() {
            this.templateObjects.page.classList.toggle("Navigation-page--slide");
        }
    }

});
