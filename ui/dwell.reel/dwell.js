/**
 * @module ./dwell.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Dwell
 * @extends Component
 */
exports.Dwell = Component.specialize(/** @lends Dwell# */ {
    constructor: {
        value: function Dwell() {
            this.super();
        }
    },

    enterDocument: {
        value: function() {
            this.super();
            this.element.addEventListener("touchstart", this, false);
        }
    },

    draw: {
        value: function() {
            this.super();
            this.indicator.style.webkitTransform = "rotate3d(0,0,1,"+ this._rotation +"deg)";
        }
    },

    handleTouchstart: {
        value: function() {

        }
    },

    handleRotateStart: {
        value: function() {
            this._initialRotation = this.rotation;
        }
    },

    handleRotate: {
        value: function(event) {
            this.rotation = event.rotation;
        }
    },

    _initialRotation: {
        value: 0
    },

    _rotation: {
        value: 0
    },

    rotation: {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = value;
            this.needsDraw = true;
        }
    }


});
