/**
 * @module ./gl-view.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Map = require("montage/collections/map");

/**
 * @class GlView
 * @extends Component
 */
exports.GlView = Component.specialize(/** @lends GlView# */ {

    temperatureDelta: {
        value: 0
    },

    isHeating: {
        value: false
    },

    heatingColor: {
        value: null
    },

    isCooling: {
        value: false
    },

    coolingColor: {
        value: null
    },

    _neutralFloorColor: {
        value: null
    },

    floorColor: {
        value: null
    },

    _panelKeyViewpointMap: {
        value: null
    },

    _rideViewpoints: {
        value: null
    },

    constructor: {
        value: function GlView() {
            this.super();

            this._neutralFloorColor = [0,0,0,0];

            this.defineBinding("isHeating", {"<-": "temperatureDelta > 0"});
            this.defineBinding("isCooling", {"<-": "temperatureDelta < 0"});

            this.addPathChangeListener("temperatureDelta", this, "handleTemperatureDeltaChange");
        }
    },

    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.canDrawGate.setField("resourcesLoaded", false);
            }
        }
    },

    handleResourcesDidLoad: {
        value: function (evt) {
            this.canDrawGate.setField("resourcesLoaded", true);
            this.needsDraw = true;
        }
    },

    handleTemperatureDeltaChange: {
        value: function () {
            if (this.temperatureDelta > 0) {
                this.heatingColor = [1,0,0, 0.7 * this.temperatureDelta];
                this.coolingColor = this._neutralFloorColor;
                this.floorColor = this.heatingColor;
            } else {
                this.coolingColor = [0,0,1, -0.7 * this.temperatureDelta];
                this.heatingColor = this._neutralFloorColor;
                this.floorColor = this.coolingColor;
            }
        }
    },

    currentPanel: {
        value: null
    },

    configuration: {
        value: null
    },

    templateDidLoad: {
        value: function () {
            var templateObjects = this.templateObjects;

            // Setup which viewpoint to use for each panel
            this._panelKeyViewpointMap = Map.from({
                staircase: templateObjects.staircaseViewpoint,
                kitchen: templateObjects.kitchenViewpoint,
                counters: templateObjects.counterViewpoint,
                window: templateObjects.windowViewpoint,
                laundry: templateObjects.laundryViewpoint
            });

            //Note which viewpoints are part of the automated ride
            var rideViews = this._rideViewpoints = new Map();
            rideViews.set(this.templateObjects.rideViewpoint.id,  this.templateObjects.rideViewpoint);
            rideViews.set(this.templateObjects.rideViewpoint2.id, this.templateObjects.rideViewpoint2);
            rideViews.set(this.templateObjects.rideViewpoint3.id, this.templateObjects.rideViewpoint3);

            // React to changes in the configuration
            this.addPathChangeListener("configuration.configurationMap.get('staircase').optionMap.get('material')._selectedOption", this, "handleStaircaseMaterialChange");
            this.addPathChangeListener("configuration.configurationMap.get('window').optionMap.get('coating').value", this, "handleWindowCoatingChange");
            this.addPathChangeListener("configuration.configurationMap.get('kitchen').optionMap.get('appliances')._selectedOption", this, "handleKitchenAppliancesChange");
            this.addPathChangeListener("configuration.configurationMap.get('counters').optionMap.get('material')._selectedOption", this, "handleCountertopMaterialChange");
            this.addPathChangeListener("configuration.configurationMap.get('laundry').optionMap.get('washer').chosen", this, "handleWasherChange");
            this.addPathChangeListener("configuration.configurationMap.get('laundry').optionMap.get('dryer').chosen", this, "handleDryerChange");

            //React to the currentPanel changing
            this.addPathChangeListener("currentPanel", this, "handleCurrentPanelChange");
        }
    },

    handleWasherChange: {
        value: function (washerChosen) {
            var washerNode = this.templateObjects.washerNode;
            washerNode.hidden = !washerChosen;
        }
    },

    handleDryerChange: {
        value: function (dryerChosen) {
            var dryerNode = this.templateObjects.dryerNode;
            dryerNode.hidden = !dryerChosen;
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
                    case "Deep Cherry":
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
            var guterslohNode = this.templateObjects.guterslohAppliancesNode,
                norseNode = this.templateObjects.norseAppliancesNode,
                vortexNode = this.templateObjects.vortexAppliancesNode,
                showGutersloh = false,
                showNorse = false,
                showVortex = false;

            if (newApplianceValue) {
                switch(newApplianceValue.name) {
                case "Gütersloh":
                    showGutersloh = true;
                    break;
                case "Norse":
                    showNorse = true;
                    break;
                case "Vortex":
                    showVortex = true;
                    break;
                }
            }

            guterslohNode.hidden = !showGutersloh;
            norseNode.hidden = !showNorse;
            vortexNode.hidden = !showVortex;

        }
    },

    handleCountertopMaterialChange: {
        value: function (newMaterial) {
            var countertopMaterial = this.templateObjects.countertopMaterial;
            var cuisineMaterial = this.templateObjects.cuisineMaterial;

            var countertopTexture = "bar_dessus_paper.jpg";
            var cuisineTexture = "16_cuisineVRayCompleteMap.jpg";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "Black Quartz":
                        countertopTexture = "bar_dessus_black.jpg";
                        cuisineTexture = "cuisine_black.jpg";
                        break;
                    case "Paper Composite":
                        cuisineTexture = "cuisine_paper.jpg";
                        break;
                    case "Bamboo":
                        countertopTexture = "bar_dessus_bamboo.jpg";
                        break;
                    case "Cement and Fly Ash":
                        countertopTexture = "bar_dessus_cement.jpg";
                        cuisineTexture = "cuisine_cement.jpg";
                        break;
                    default:
                        countertopTexture = "";
                        cuisineTexture = "";
                }
            }

            countertopMaterial.image = countertopTexture;
            cuisineMaterial.image = cuisineTexture;
        }
    },

    handleWindowCoatingChange: {
        value: function (newCoatingValue) {
            newCoatingValue = 1 - (newCoatingValue/2400); //TODO not hardcode this, fit to some reasonable curve
            var backgroundMaterial = this.templateObjects.backgroundMaterial;
            backgroundMaterial.filterColor = [newCoatingValue, 1, newCoatingValue, 1];
        }
    },

    handleCurrentPanelChange: {
        value: function (panelEntry) {
            var roomView = this.templateObjects.roomView,
                rideViewpoint = this.templateObjects.rideViewpoint,
                rideViewpoints = this._rideViewpoints,
                isOnRideCamera = rideViewpoints.has(roomView.viewPoint.id),
                shouldResumeRide = false;

            if (panelEntry) {
                var preferredViewpoint = this._panelKeyViewpointMap.get(panelEntry.panelKey);

                if (preferredViewpoint) {
                    if (this._autoActivateRideTimeout) {
                        clearTimeout(this._autoActivateRideTimeout);
                        this._autoActivateRideTimeout = null;
                    }

                    roomView.pause();
                    roomView.viewPoint = preferredViewpoint;
                } else {
                    shouldResumeRide = true;
                }

            } else {
                shouldResumeRide = true;
            }

            if (shouldResumeRide) {
                if (!isOnRideCamera) {
                    roomView.viewPoint = rideViewpoint;
                }

                //Ensure we play as we're on the ride, and the ride may have been paused
                //as a direct result of changing panels
                roomView.play();
            }

        }
    },

    play: {
        value: function () {
            if (this.templateObjects && this.templateObjects.roomView) {
                this.templateObjects.roomView.play();
            }
        }
    },

    pause: {
        value: function () {
            if (this.templateObjects && this.templateObjects.roomView) {
                this.templateObjects.roomView.pause();
            }
        }
    }


});
