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

    _panelKeyViewpointMap: {
        value: null
    },

    constructor: {
        value: function GlView() {
            this.super();
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
            this._panelKeyViewpointMap = new Map({
                staircase: templateObjects.staircaseViewpoint,
                kitchen: templateObjects.kitchenViewpoint,
                counters: templateObjects.counterViewpoint,
                window: templateObjects.windowViewpoint,
                laundry: templateObjects.laundryViewpoint
            });

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
            var texture = "bar_dessus_paper.jpg";

            //TODO improve this; just done enough to get it working
            //TODO not rely on the fragile name
            if (newMaterial) {
                switch (newMaterial.name) {
                    case "Black Quartz":
                        texture = "bar_dessus_black.jpg";
                        break;
                    case "Paper Composite":
                        break;
                    case "Bamboo":
                        texture = "bar_dessus_bamboo.jpg";
                        break;
                    case "Cement and Fly Ash":
                        texture = "bar_dessus_cement.jpg";
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

    handleCurrentPanelChange: {
        value: function (panelEntry) {
            var roomView = this.templateObjects.roomView;
            var rideViewpoint = this.templateObjects.rideViewpoint;

            if (panelEntry) {
                var preferredViewpoint = this._panelKeyViewpointMap.get(panelEntry.panelKey);

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
