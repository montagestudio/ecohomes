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

    templateDidLoad: {
        value: function () {
            // React to changes in the configuration
            this.addPathChangeListener("configuration.configurationMap.get('staircase').optionMap.get('material')._selectedOption", this, "handleStaircaseMaterialChange");
            this.addPathChangeListener("configuration.configurationMap.get('kitchen').optionMap.get('appliances')._selectedOption", this, "handleKitchenAppliancesChange");
            this.addPathChangeListener("configuration.configurationMap.get('counters').optionMap.get('material')._selectedOption", this, "handleCountertopMaterialChange");
        }
    },

    handleStaircaseMaterialChange: {
        value: function (newMaterial) {
            var staircasePreview = this.templateObjects.staircase;
            var className = "ConfigPreview--staircase-pine";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "FSC Pine":
                        break;
                    case "Dark Ash":
                        className = "ConfigPreview--staircase-ash";
                        break;
                    case "Dark Walnut":
                        className = "ConfigPreview--staircase-walnut";
                        break;
                    case "Powder Coated Metal":
                        className = "ConfigPreview--staircase-bold";
                        break;
                    default:
                        className = "";
                }
            }

            staircasePreview.className = className;
        }
    },

    handleKitchenAppliancesChange: {
        value: function (newApplianceValue) {
            var kitchenPreview = this.templateObjects.kitchen;
            var className = "ConfigPreview--kitchen";

            if (newApplianceValue && "None" !== newApplianceValue.name) {
                className = "ConfigPreview--kitchen-appliances";
            }

            kitchenPreview.className = className;

        }
    },

    handleCountertopMaterialChange: {
        value: function (newMaterial) {
            var countertopPreview = this.templateObjects.countertop;
            var className = "ConfigPreview--countertop-paper";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "Black Quartz":
                        className = "ConfigPreview--countertop-quartz";
                        break;
                    case "Paper Composite":
                        break;
                    case "Bamboo":
                        className = "ConfigPreview--countertop-bamboo";
                        break;
                    case "Cement and Fly Ash":
                        className = "ConfigPreview--countertop-cement";
                        break;
                    default:
                        className = "";
                }
            }

            countertopPreview.className = className;
        }
    }
});
