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
            configurationMap.set("counters", new CountertopsConfigurationSet());

            this.configuration = new Configuration().init(628000, configurationMap);

            // NOTE Even panels with no configuration options can have preferred viewpoints
            // this is why the viewpoint is related to panels, not configuration sets
            this.panelIdViewpointMap = new Map();
        }
    },

    cards: {
        value: ["introduction", "staircase", "kitchen", "counters", "laundry", "window", "thermostat", "solarPanels"]
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

        }
    },

    handlePanelIndexChange: {
        value: function (index) {
            var roomView = this.templateObjects.roomView;
            var rideViewpoint = this.templateObjects.rideViewpoint;
            var panelId = this.cards[index];

            //TODO don't even bother playing iof the viewpoint has not changed
            if (panelId) {
                var preferredViewpoint = this.panelIdViewpointMap.get(panelId);

                if (preferredViewpoint) {
                    roomView.pause();
                    roomView.viewPoint = preferredViewpoint;
                } else {
                    roomView.viewPoint = rideViewpoint;
                    roomView.play();
                }

            } else {
                roomView.viewPoint = rideViewpoint;
                roomView.play();
            }
        }
    }
});
