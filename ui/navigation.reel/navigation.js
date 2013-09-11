/**
 * @module ./navigation.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Navigation
 * @extends Component
 */
exports.Navigation = Component.specialize(/** @lends Navigation# */ {
    constructor: {
        value: function Navigation() {
            this.super();
        }
    },

    panelDescriptors: {
        value: null
    },

    currentPanelIndex: {
        value: null
    },

    configuration: {
        value: null
    },

    _isShown: {
        value: false
    },

    isShown: {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            if (value === this._isShown) {
                return;
            }

            this._isShown = value;

            if (value) {
                this.templateObjects.dismissPressComposer.load();
            } else {
                this.templateObjects.dismissPressComposer.unload();
            }
        }
    },

    handlePressStart: {
        value: function (evt) {
            if (this.isShown) {
                var targetElement = evt.targetElement,
                    element = this.element;

                if (!element.contains(targetElement)) {
                    this.isShown = false;
                }
            }
        }
    },

    handleAction: {
        value: function(event) {
            this.currentPanelIndex = event.detail.get("index");
        }
    },

    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.addComposerForElement(this.templateObjects.dismissPressComposer, this.element.ownerDocument);
            }
        }
    }
});
