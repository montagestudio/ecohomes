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

            //TODO this map should drive which panels are available in the UI, right now they're related somewhat by coincidence
            var configurationMap = new Map();
            configurationMap.set("staircase", new StaircaseConfigurationSet());
            configurationMap.set("thermostat", new ThermostatConfigurationSet());
            configurationMap.set("kitchen", new KitchenConfigurationSet());
            configurationMap.set("laundry", new LaundryConfigurationSet());
            configurationMap.set("counters", new CountertopsConfigurationSet());

            this.configuration = new Configuration().init(628000, configurationMap);
        }
    },

    cards: {
        value: ["introduction", "staircase", "thermostat", "kitchen", "counters", "laundry", "window", "solarPanels"]
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

            this.addPathChangeListener("templateObjects.panelFlow.currentPanel", this, "handlePanelIndexChange");
        }
    },

    handlePanelIndexChange: {
        value: function (index) {
            var roomView = this.templateObjects.roomView;
            var rideViewpoint = this.templateObjects.rideViewpoint;
            var configurationKey = this.cards[index];

            //TODO cleanup
            //TODO don't even bother playing iof the viewpoint has not changed
            if (configurationKey) {
                var configurationSet = this.configuration.configurationMap.get(configurationKey);
                var preferredViewpointLabel = configurationSet ? configurationSet.preferredViewpointLabel : null;

                if (preferredViewpointLabel) {
                    var preferredViewpoint = this.templateObjects[preferredViewpointLabel];

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
