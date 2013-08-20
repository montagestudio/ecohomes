/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Configuration = require("core/configuration").Configuration;
var Map = require("montage/collections/map");

var StaircaseConfigurationSet = require("configuration/staircase-configuration-set").StaircaseConfigurationSet;
var ThermostatConfigurationSet = require("configuration/thermostat-configuration-set").ThermostatConfigurationSet;
var KitchenConfigurationSet = require("configuration/kitchen-configuration-set").KitchenConfigurationSet;
var LaundryConfigurationSet = require("configuration/laundry-configuration-set").LaundryConfigurationSet;
var CountertopsConfigurationSet = require("configuration/countertops-configuration-set").CountertopsConfigurationSet;
var SolarPanelsConfigurationSet = require("configuration/solar-panels-configuration-set").SolarPanelsConfigurationSet;
var WindowConfigurationSet = require("configuration/window-configuration-set").WindowConfigurationSet;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    constructor: {
        value: function Main() {
            this.super();

            var configurationMap = new Map();
            configurationMap.set("staircase", new StaircaseConfigurationSet());
            configurationMap.set("thermostat", new ThermostatConfigurationSet());
            configurationMap.set("kitchen", new KitchenConfigurationSet());
            configurationMap.set("laundry", new LaundryConfigurationSet());
            configurationMap.set("window", new WindowConfigurationSet());
            configurationMap.set("counters", new CountertopsConfigurationSet());
            configurationMap.set("solarPanels", new SolarPanelsConfigurationSet());

            this.configuration = new Configuration().init(628000, 6000, configurationMap);

            // NOTE Even panels with no configuration options can have preferred viewpoints
            // this is why the viewpoint is related to panels, not configuration sets
            this.panelIdViewpointMap = new Map();
        }
    },

    cards: {
        value: ["introduction", "staircase", "thermostat", "kitchen", "counters", "laundry", "window", "solarPanels", "callBack"]
    },

    panelIdViewpointMap: {
        value: null
    },

    configuration: {
        value: null
    },

    templateDidLoad: {
        value: function() {
            var view = this.templateObjects.roomView,
                originalWidth = view.width / view.scaleFactor,
                originalHeight = view.height / view.scaleFactor,
                newWidth = window.innerHeight * originalWidth / originalHeight,
                newHeight = window.innerHeight;

            if (window.innerWidth <= 1024) {
                newWidth -= 100;
            }

            view.width = newWidth;
            view.height = newHeight;

            //React to the current panel changing
            this.addPathChangeListener("templateObjects.panelFlow.currentPanel", this, "handlePanelIndexChange");

            //Specify preferred cameras for specific panels
            var viewpointMap = this.panelIdViewpointMap;
            viewpointMap.set("staircase", this.templateObjects.staircaseViewpoint);
            viewpointMap.set("kitchen", this.templateObjects.kitchenViewpoint);
            viewpointMap.set("counters", this.templateObjects.counterViewpoint);
            viewpointMap.set("window", this.templateObjects.windowViewpoint);

            //React to options that should alter the scene
            this.addPathChangeListener("configuration.configurationMap.get('staircase').optionMap.get('material')._selectedOption", this, "handleStaircaseMaterialChange");
            this.addPathChangeListener("configuration.configurationMap.get('window').optionMap.get('coating').value", this, "handleWindowCoatingChange");
            this.addPathChangeListener("configuration.configurationMap.get('kitchen').optionMap.get('appliances')._selectedOption", this, "handleKitchenAppliancesChange");
            this.addPathChangeListener("configuration.configurationMap.get('counters').optionMap.get('material')._selectedOption", this, "handleCountertopMaterialChange");

        }
    },

    handlePanelIndexChange: {
        value: function (panelIndex) {
            this.changeViewpoint(panelIndex);
        }
    },

    changeViewpoint: {
        value: function (panelIndex) {
            var roomView = this.templateObjects.roomView;
            var rideViewpoint = this.templateObjects.rideViewpoint;
            var panelId = this.cards[panelIndex];

            if (panelId) {
                var preferredViewpoint = this.panelIdViewpointMap.get(panelId);

                if (preferredViewpoint) {
                    roomView.pause();
                    roomView.viewPoint = preferredViewpoint;
                } else if (rideViewpoint !== roomView.viewPoint) {
                    roomView.viewPoint = rideViewpoint;
                    roomView.play();
                }

            } else if (rideViewpoint !== roomView.viewPoint) {
                roomView.viewPoint = rideViewpoint;
                roomView.play();
            }
        }
    },

    handleStaircaseMaterialChange: {
        value: function (newMaterial) {
            var staircaseMaterial = this.templateObjects.staircaseMaterial;
            var texture = "wood-stairs.jpg";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                case "FSC Teak":
                    texture = "wood-stairs.jpg";
                    break;
                case "Dark Ash":
                    texture = "dark-stairs.jpg";
                    break;
                case "Dark Walnut":
                    texture = "walnut-stairs.jpg";
                    break;
                case "Powder Coated Metal":
                    texture = "bold-stairs.jpg";
                    break;
                default:
                    texture = "";
                }
            }

            staircaseMaterial.image = texture;
        }
    },

    handleKitchenAppliancesChange: {
        value: function (newApplianceValue) {
            var appliancesMaterial = this.templateObjects.appliancesMaterial,
                appliancesNode = this.templateObjects.appliancesNode,
                opacity = 1;
                hidden = false;

            //TODO not rely on the fragile name
            if (!newApplianceValue || "No appliances installed" === newApplianceValue.name) {
                opacity = 0;
                hidden = true;
            }

            appliancesMaterial.opacity = opacity;
            appliancesNode.hidden = hidden;
        }
    },

    handleCountertopMaterialChange: {
        value: function (newMaterial) {
            var countertopMaterial = this.templateObjects.countertopMaterial;
            var texture = "7_cuisineVRayCompleteMap.jpg";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "Black Quartz":
                        break;
                    case "Paper Composite":
                        texture = "paper-counters.jpg";
                        break;
                    case "Bamboo":
                        texture = "bamboo-counters.jpg";
                        break;
                    case "Cement and Fly Ash":
                        texture = "cement-counters.jpg";
                        break;
                    default:
                        texture = "";
                }
            }

            countertopMaterial.image = texture;
        }
    },

    handleWindowCoatingChange: {
        value: function (newCoatingValue) {
            newCoatingValue = 1 - (newCoatingValue/2400); //TODO not hardcode this, fit to some reasonable curve
            var backgroundMaterial = this.templateObjects.backgroundMaterial;
            backgroundMaterial.filterColor = [newCoatingValue, 1, newCoatingValue, 1];
        }
    },

    handleAction: {
        value: function (evt) {
            var panelKey = evt.detail ? evt.detail.get('panelKey') : void 0,
                panelIndex;

            if (panelKey) {
                panelIndex = this.cards.indexOf(panelKey);

                if (panelIndex > -1) {
                    this.templateObjects.panelFlow.scrollToPanel(panelIndex);
                    this.changeViewpoint(panelIndex);
                }
            }
        }
    }
});
