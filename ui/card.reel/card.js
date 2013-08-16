/**
 * @module ./card.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Card
 * @extends Component
 */
exports.Card = Component.specialize(/** @lends Card# */ {
    constructor: {
        value: function Card() {
            this.super();
        }
    },

    _needsResize: {
        value: true
    },

    _hasResize: {
        value: false
    },

    _width: {
        value: 0
    },

    _height: {
        value: 0
    },

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.element.ownerDocument.defaultView.addEventListener("resize", this, false);
            }
        }
    },

    draw: {
        value: function() {
            if (this._needsResize && this._hasResize) {
                this._needsResize = false;
                this.element.style.width = this._width + "px";
                this.element.style.height = this._height + "px";
            }
        }
    },

    didDraw: {
        value: function() {
            // HACK: it seems that we're drawing in a document fragment for
            // some reason, so we need to wait until we're not so that we can
            // measure the container.
            if (!this._hasResize) {
                if (this.element.offsetParent) {
                    this._hasResize = true;
                    this._width = this.element.offsetParent.offsetWidth;
                    this._height = this.element.offsetParent.offsetHeight;
                }
                this.needsDraw = true;
            }
        }
    },

    handleResize: {
        value: function() {
            this._needsResize = true;
            this._hasResize = false;
            this.needsDraw = true;
        }
    }
});
