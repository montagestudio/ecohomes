/**
 * @module ./den.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Den
 * @extends Component
 */
exports.Den = Component.specialize(/** @lends Den# */ {

    _icon: {
        value: null
    },

    _needsUpdateIcon: {
        value: false
    },

    icon: {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            switch (value) {
                case "am":
                    this._icon = "ui/den.reel/day.png";
                    break;
                case "pm":
                    this._icon = "ui/den.reel/night.png";
                    break;
                default:
                    this._icon = null;
                    break;
            };
            this._needsUpdateIcon = true;
            this.needsDraw = true;
        }
    },

    _desiredTemperature: {
        value: 72.5
    },

    desiredTemperature: {
        get: function () {
            return this._desiredTemperature;
        },
        set: function (value) {
            this._desiredTemperature = value;
            this.needsDraw = true;
        }
    },

    _ambientTemperature: {
        value: 72.5
    },

    ambientTemperature: {
        get: function () {
            return this._ambientTemperature;
        },
        set: function (value) {
            this._ambientTemperature = value;
            this.needsDraw = true;
        }
    },

    temperatureDelta: {
        value: 0
    },

    _temperatureOffset: {
        value: 51
    },

    _previousTimestamp: {
        value: null
    },


    // The following enterDocument and handleTouchstart are a workaround for measurement
    // that should be removed after Afonso fixes loading css styles on time

    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.element.addEventListener("touchstart", this, false);
            }
        }
    },

    handleTouchstart: {
        value: function () {
            var boundingRect = this.element.getBoundingClientRect(),
                center = {
                    pageX: 174 + boundingRect.left,
                    pageY: 151 + boundingRect.top
                };
            this._rotateComposer.center = center;
            this.element.removeEventListener("touchstart", this, false);
        }
    },

    // End of workaround

    willDraw: {
        value: function() {
            var boundingRect = this.element.getBoundingClientRect(),
                center = {
                    pageX: 174 + boundingRect.left,
                    pageY: 151 + boundingRect.top
                };
            this._rotateComposer.center = center;
        }
    },

    _isRotating: {
        value: false
    },

    handleRotate: {
        value: function(event) {
            this.desiredTemperature += event.deltaRotation / 6;
            if (this.desiredTemperature < 51) {
                this.desiredTemperature = 51;
            }
            if (this.desiredTemperature > 93) {
                this.desiredTemperature = 93;
            }
            this._isRotating = true;
            this.needsDraw = true;
        }
    },

    handleRotateEnd: {
        value: function(event) {
            this.desiredTemperature = Math.floor(this.desiredTemperature) + .5;
            this._isRotating = false;
            this.needsDraw = true;
        }
    },

    // heatingRate and coolingRate are in farenheight degrees per second
    heatingRate: {
        value: 1
    },

    coolingRate: {
        value: 1
    },

    handlePress: {
        value: function () {
            console.log("press!");
        }
    },

    draw: {
        value: function (timestamp) {
            var length,
                leftLength,
                rightLength,
                ambientTemperature = (this.ambientTemperature - this._temperatureOffset) | 0,
                desiredTemperature = (this.desiredTemperature - this._temperatureOffset) | 0,
                time;

            this.temperatureDelta = (this.desiredTemperature - this.ambientTemperature) / (93 - 51);
            this.rightDigit.style.webkitTransform = "translate3d(" + (-50 * ((this.desiredTemperature | 0) % 10)) + "px, 0, 0)";
            this.leftDigit.style.webkitTransform = "translate3d(" + (-50 * (this.desiredTemperature / 10 | 0)) + "px, 0, 0)";
            if (this._previousTimestamp === null) {
                this._previousTimestamp = timestamp;
            }
            time = timestamp - this._previousTimestamp;
            this._previousTimestamp = timestamp;
            this.whiteBar.style.webkitTransform = "rotate3d(0, 0, 1, " + (desiredTemperature * 6 - 126) + "deg)";
            this.leftRedBar.style.opacity = 0;
            this.rightRedBar.style.opacity = 0;
            this.leftBlueBar.style.opacity = 0;
            this.rightBlueBar.style.opacity = 0;
            this.redFadingBar.style.opacity = 0;
            this.blueFadingBar.style.opacity = 0;
            this.blackBar.style.opacity = 0;
            if (ambientTemperature < desiredTemperature) {
                length = desiredTemperature - ambientTemperature - 1;
                if (length <= 30) {
                    this.leftRedBar.style.opacity = 1;
                    this.blackBar.style.opacity = 1;
                    this.leftRedBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + ambientTemperature) * 6 - 39) + "deg)";
                    this.blackBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + ambientTemperature + length) * 6 - 39) + "deg)";
                } else {
                    this.leftRedBar.style.opacity = 1;
                    this.rightRedBar.style.opacity = 1;
                    this.leftRedBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + ambientTemperature) * 6 - 39) + "deg)";
                    this.rightRedBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + ambientTemperature - (30 - length)) * 6 - 39) + "deg)";
                }
                this.redFadingBar.style.opacity = 1 - ((this.ambientTemperature - this._temperatureOffset) - ambientTemperature);
                this.redFadingBar.style.webkitTransform = "rotate3d(0, 0, 1, " + (ambientTemperature * 6 - 126) + "deg)";
            } else {
                if (ambientTemperature > desiredTemperature) {
                    length = ambientTemperature - desiredTemperature - 1;
                    if (length <= 30) {
                        this.leftBlueBar.style.opacity = 1;
                        this.blackBar.style.opacity = 1;
                        this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + desiredTemperature) * 6 - 39) + "deg)";
                        this.blackBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + desiredTemperature + length) * 6 - 39) + "deg)";
                    } else {
                        this.leftBlueBar.style.opacity = 1;
                        this.rightBlueBar.style.opacity = 1;
                        this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + desiredTemperature) * 6 - 39) + "deg)";
                        this.rightBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + desiredTemperature - (30 - length)) * 6 - 39) + "deg)";
                    }
                    this.blueFadingBar.style.opacity = (this.ambientTemperature - this._temperatureOffset) - ambientTemperature;
                    this.blueFadingBar.style.webkitTransform = "rotate3d(0, 0, 1, " + (ambientTemperature * 6 - 126) + "deg)";
                }
            }
            if (!this._isRotating) {
                if (this.ambientTemperature < this.desiredTemperature) {
                    this.ambientTemperature += time * .001 * this.heatingRate;
                    if (this.ambientTemperature > this.desiredTemperature) {
                        this.ambientTemperature = this.desiredTemperature;
                    }
                    this.needsDraw = true;
                } else {
                    if (this.desiredTemperature < this.ambientTemperature) {
                        this.ambientTemperature -= time * .001 * this.coolingRate;
                        if (this.ambientTemperature < this.desiredTemperature) {
                            this.ambientTemperature = this.desiredTemperature;
                        }
                        this.needsDraw = true;
                    }
                }
            }
            if (this._needsUpdateIcon) {
                this.iconElement.style.backgroundImage = "url(" + this._icon + ")";
                this._needsUpdateIcon = false;
            }
        }
    }

});
