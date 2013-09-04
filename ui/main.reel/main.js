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

            this.cards = [
                {panelKey: "introduction", label: "Introduction"},
                {panelKey: "staircase", label: "Staircase"},
                {panelKey: "thermostat", label: "Thermostat"},
                {panelKey: "kitchen", label: "Kitchen"},
                {panelKey: "counters", label: "Countertop"},
                {panelKey: "laundry", label: "Laundry"},
                {panelKey: "window", label: "Windows"},
                {panelKey: "solarPanels", label: "Solar Panels"},
                {panelKey: "callBack", label: "Contact"}
            ];
        }
    },

    cards: {
        value: null
    },

    currentPanel: {
        value: null
    },

    configuration: {
        value: null
    },

    _resize: {
        value: false
    },

    _supportsWebGL: {
        value: null
    },

    supportsWebGL: {
        get: function () {

            if (null === this._supportsWebGL) {
                var webGLOptions = {premultipliedAlpha: false, antialias: true, preserveDrawingBuffer: false};
                var canvas = document.createElement("canvas");
                var webGLContext =  canvas.getContext("experimental-webgl", webGLOptions) ||
                    canvas.getContext("webgl", webGLOptions);
                this._supportsWebGL = !!webGLContext;
            }

            return this._supportsWebGL;
        }
    },

    viewKey: {
        value: null
    },

    sceneView: {
        value: null
    },

    templateDidLoad: {
        value: function() {
            this.defineBinding("sceneView", {"<-": "viewKey == 'webgl' ? templateObjects.glView : templateObjects.staticView"});

            //Set initial view to be webgl if possible
            this.viewKey = this.supportsWebGL ? "webgl" : "static";

            this.defineBinding("currentPanel", {"<-": "cards[templateObjects.panelFlow.currentPanel]"});

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
                var roomView = this.sceneView;
                roomView.width = this.viewPortElement.offsetWidth;
                roomView.height = this.viewPortElement.offsetHeight;
                this._resize = false;
            }
        }
    },

    handleAction: {
        value: function (evt) {
            var panelKey = evt.detail ? evt.detail.get('panelKey') : void 0,
                panelIndex;

            if (panelKey) {
                //TODO improve this (I have it, I'm just trying not to mix improvements and refactoring)
                panelIndex = this.cards.map(function (card) {
                    return card.panelKey;
                }).indexOf(panelKey);

                if (panelIndex > -1) {
                    this.templateObjects.panelFlow.scrollToPanel(panelIndex);
                    //Update this as quickly as possible, don't wait for scrolling
                    this.currentPanel = this.cards[panelIndex];
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
                    if (self.sceneView && typeof self.sceneView.play === "function") {
                        self.sceneView.play();
                    }
                }, 2200);
            }
            
            // Temp fix for initial canvas size
            this._resize = true;
            this.needsDraw = true;
        }
    },

    handleResize: {
        value: function() {
            this._resize = true;
            this.needsDraw = true;
        }
    }
});
