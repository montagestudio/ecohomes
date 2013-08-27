/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Configuration = require("core/configuration").Configuration;
var Map = require("montage/collections/map");
var Introduction = require("ui/cards/introduction.reel").Introduction;

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
        }
    },

    cards: {
        value: null
    },

    panelIdViewpointMap: {
        value: null
    },

    configuration: {
        value: null
    },

    _resize: {
        value: false
    },

    _roomSize: {
        value: null
    },

    templateDidLoad: {
        value: function() {
            var templateObjects = this.templateObjects,
                view = templateObjects.roomView,
                originalWidth = view.width / view.scaleFactor,
                originalHeight = view.height / view.scaleFactor,
                newWidth = window.innerHeight * originalWidth / originalHeight,
                newHeight = window.innerHeight;

            if (window.innerWidth <= 1024) {
                newWidth -= 100;
            }

            view.width = newWidth;
            view.height = newHeight;

            // NOTE Even panels with no configuration options can have preferred viewpoints
            // this is why the viewpoint is related to panels, not configuration sets
            this.cards = [
                {panelKey: "introduction", label: "Introduction"},
                {panelKey: "staircase", label: "Staircase", viewpoint: templateObjects.staircaseViewpoint},
                {panelKey: "thermostat", label: "Thermostat"},
                {panelKey: "kitchen", label: "Kitchen", viewpoint: templateObjects.kitchenViewpoint},
                {panelKey: "counters", label: "Countertop", viewpoint: templateObjects.counterViewpoint},
                {panelKey: "laundry", label: "Laundry"},
                {panelKey: "window", label: "Windows", viewpoint: templateObjects.windowViewpoint},
                {panelKey: "solarPanels", label: "Solar Panels"},
                {panelKey: "callBack", label: "Contact"}
            ];

            //React to the current panel changing
            this.addPathChangeListener("templateObjects.panelFlow.currentPanel", this, "handlePanelIndexChange");

            //React to options that should alter the scene
            this.addPathChangeListener("configuration.configurationMap.get('staircase').optionMap.get('material')._selectedOption", this, "handleStaircaseMaterialChange");
            this.addPathChangeListener("configuration.configurationMap.get('window').optionMap.get('coating').value", this, "handleWindowCoatingChange");
            this.addPathChangeListener("configuration.configurationMap.get('kitchen').optionMap.get('appliances')._selectedOption", this, "handleKitchenAppliancesChange");
            this.addPathChangeListener("configuration.configurationMap.get('counters').optionMap.get('material')._selectedOption", this, "handleCountertopMaterialChange");

            //Start the room ride animation once the introduction slide has shown
            this.addEventListener("firstDraw", this);
        }
    },

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.element.ownerDocument.defaultView.addEventListener("resize", this, false);
            }
        }
    },

    willDraw: {
        value: function() {
            if (this._resize) {
                this._roomSize = {
                    width: this.viewPortElement.offsetWidth,
                    height: this.viewPortElement.offsetHeight
                };
            }
        }
    },

    draw: {
        value: function() {
            if (this._resize) {
                this._resize = false;
                this.templateObjects.roomView.width = this._roomSize.width;
                this.templateObjects.roomView.height = this._roomSize.height;
            }
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
            var panelEntry = this.cards[panelIndex];

            if (panelEntry) {
                var preferredViewpoint = panelEntry.viewpoint;

                if (preferredViewpoint) {

                    if (this._autoActivateRideTimeout) {
                        clearTimeout(this._autoActivateRideTimeout);
                        this._autoActivateRideTimeout = null;
                    }

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
                case "FSC Pine":
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
            if (!newApplianceValue || "None" === newApplianceValue.name) {
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
            var texture = "paper-counters.jpg";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "Black Quartz":
                        texture = "7_cuisineVRayCompleteMap.jpg";
                        break;
                    case "Paper Composite":
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
                panelIndex = this.cards.map(function (card) {
                    return card.panelKey;
                }).indexOf(panelKey);

                if (panelIndex > -1) {
                    this.templateObjects.panelFlow.scrollToPanel(panelIndex);
                    this.changeViewpoint(panelIndex);
                }
            }
        }
    },

    _autoActivateRideTimeout: {
        value: null
    },

    handleFirstDraw: {
        value: function (evt) {
            if (evt.target instanceof Introduction) {
                this.removeEventListener("firstDraw", this);
                var self = this;

                this._autoActivateRideTimeout = setTimeout(function () {
                    self._autoActivateRideTimeout = null;
                    self.templateObjects.roomView.play();
                }, 2200);
            }
        }
    },

    handleResize: {
        value: function() {
            this._resize = true;
            this.needsDraw = true;
        }
    }
});
