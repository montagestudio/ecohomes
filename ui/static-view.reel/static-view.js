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

    staircaseSrc: {
        value: "../../assets/static/staircase-pine.png"
    },

    countertopSrc: {
        value: "../../assets/static/countertop-paper.png"
    },

    kitchenSrc: {
        value: "../../assets/static/kitchen.png"
    },

    handleStaircaseMaterialChange: {
        value: function (newMaterial) {
            var image = "staircase-pine.png";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "FSC Pine":
                        break;
                    case "Dark Ash":
                        image = "staircase-ash.png";
                        break;
                    case "Dark Walnut":
                        image = "staircase-walnut.png";
                        break;
                    case "Powder Coated Metal":
                        image = "staircase-bold.png";
                        break;
                    default:
                        image = "";
                }
            }

            this.staircaseSrc = image ? require.location + "assets/static/" + image : image;
        }
    },

    handleKitchenAppliancesChange: {
        value: function (newApplianceValue) {

            var image = "kitchen.png"

            if (newApplianceValue && "None" !== newApplianceValue.name) {
                image = "kitchen-appliances.png";
            }

            this.kitchenSrc = image ? require.location + "assets/static/" + image : image;

        }
    },

    handleCountertopMaterialChange: {
        value: function (newMaterial) {
            var image = "countertop-paper.png";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "Black Quartz":
                        image = "countertop-quartz.png";
                        break;
                    case "Paper Composite":
                        break;
                    case "Bamboo":
                        image = "countertop-bamboo.png";
                        break;
                    case "Cement and Fly Ash":
                        image = "countertop-cement.png";
                        break;
                    default:
                        image = "";
                }
            }

            this.countertopSrc = image ? require.location + "assets/static/" + image : image;
        }
    }
});
