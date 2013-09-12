/**
 * @module ./navigation.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    PressComposer = require("montage/composer/press-composer").PressComposer;

/**
 * @class Navigation
 * @extends Component
 */
exports.Navigation = Component.specialize(/** @lends Navigation# */ {

    _dismissPressComposer: {
        value: null
    },

    constructor: {
        value: function Navigation() {
            this.super();
            this._dismissPressComposer = new PressComposer();
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
                this._dismissPressComposer.load();
            } else {
                this._dismissPressComposer.unload();
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

                // Regardless of whether we dismiss the navigation or not,
                // surrender the pointer so the interaction can continue as
                // if this composer was never here.
                // We could also do this only if the press was inside the nav
                // if we want to have to press to dismiss without allowing the
                // interaction to continue.
                // We need to do this at least then to allow the pressComposers
                // inside the nav to continue to work as they try to claim the
                // pointer to continue on their way to dispatch a press event
                this._dismissPressComposer.cancelPress();
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
                this.addComposerForElement(this._dismissPressComposer, this.element.ownerDocument);
                this._dismissPressComposer.addEventListener("pressStart", this, false);

                if (!this.isShown) {
                    this._dismissPressComposer.unload();
                }
            }
        }
    }
});
