/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Configuration = require("core/configuration").Configuration;
var Map = require("montage/collections/map");

var StaircaseConfigurationSet = require("ui/cards/staircase.reel/configuration-set").ConfigurationSet;
var ThermostatConfigurationSet = require("ui/cards/thermostat.reel/configuration-set").ConfigurationSet;
var KitchenConfigurationSet = require("ui/cards/kitchen.reel/configuration-set").ConfigurationSet;

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
        }
    }
});
