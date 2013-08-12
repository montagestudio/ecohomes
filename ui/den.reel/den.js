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

    desiredTemperature: {
        value: 72.5
    },

    ambientTemperature: {
        value: 72.5
    },

    _temperatureOffset: {
        value: 51
    },

    _previousTimestamp: {
        value: null
    },

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

    draw: {
        value: function (timestamp) {
            var length,
                leftLength,
                rightLength,
                ambientTemperature = (this.ambientTemperature - this._temperatureOffset) | 0,
                desiredTemperature = (this.desiredTemperature - this._temperatureOffset) | 0,
                time;

            this.rightDigit.style.webkitTransform = "translate3d(" + (-50 * ((this.desiredTemperature | 0) % 10)) + "px, 0, 0)";
            this.leftDigit.style.webkitTransform = "translate3d(" + (-50 * (this.desiredTemperature / 10 | 0)) + "px, 0, 0)";
            if (this._previousTimestamp === null) {
                this._previousTimestamp = timestamp;
            }
            time = timestamp - this._previousTimestamp;
            this._previousTimestamp = timestamp;
            this.whiteBar.style.webkitTransform = "rotate3d(0, 0, 1, " + (desiredTemperature * 6 - 126) + "deg)";
            if (ambientTemperature === desiredTemperature) {
                this.rightRedBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.leftRedBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.rightBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.blueFadingBar.style.opacity = 0;
                this.redFadingBar.style.opacity = 0;
            } else {
                if (ambientTemperature < desiredTemperature) {
                    this.rightBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                    this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                    this.blueFadingBar.style.opacity = 0;
                    length = desiredTemperature - ambientTemperature - 1;
                    if (length <= 30) {
                        leftLength = length;
                        rightLength = 0;
                    } else {
                        leftLength = 30;
                        rightLength = length - 30;
                    }
                    this.leftRedBarClip.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + ambientTemperature - (30 - leftLength)) * 6 - 39) + "deg)";
                    this.leftRedBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((30 - leftLength) * 6) + "deg)";
                    this.rightRedBarClip.style.webkitTransform = "rotate3d(0, 0, 1, " + ((1 + ambientTemperature + rightLength) * 6 - 39) + "deg)";
                    this.rightRedBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((30 - rightLength) * 6) + "deg)";
                    this.redFadingBar.style.opacity = 1 - ((this.ambientTemperature - this._temperatureOffset) - ambientTemperature);
                    this.redFadingBar.style.webkitTransform = "rotate3d(0, 0, 1, " + (ambientTemperature * 6 - 126) + "deg)";
                } else {
                    this.rightRedBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                    this.leftRedBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                    this.redFadingBar.style.opacity = 0;
                    length = ambientTemperature - desiredTemperature - 1;
                    if (length <= 30) {
                        leftLength = length;
                        rightLength = 0;
                    } else {
                        leftLength = 30;
                        rightLength = length - 30;
                    }
                    this.leftBlueBarClip.style.webkitTransform = "rotate3d(0, 0, 1, " + ((desiredTemperature + 1 - (30 - leftLength)) * 6 - 39) + "deg)";
                    this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((30 - leftLength) * 6) + "deg)";
                    this.rightBlueBarClip.style.webkitTransform = "rotate3d(0, 0, 1, " + ((desiredTemperature + 1 + rightLength) * 6 - 39) + "deg)";
                    this.rightBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((30 - rightLength) * 6) + "deg)";
                    this.blueFadingBar.style.opacity = (this.ambientTemperature - this._temperatureOffset) - ambientTemperature;
                    this.blueFadingBar.style.webkitTransform = "rotate3d(0, 0, 1, " + (ambientTemperature * 6 - 126) + "deg)";
                }
            }
            if (!this._isRotating) {
                if (this.ambientTemperature < this.desiredTemperature) {
                    this.ambientTemperature += time * .005;
                    if (this.ambientTemperature > this.desiredTemperature) {
                        this.ambientTemperature = this.desiredTemperature;
                    }
                    this.needsDraw = true;
                } else {
                    if (this.desiredTemperature < this.ambientTemperature) {
                        this.ambientTemperature -= time * .005;
                        if (this.ambientTemperature < this.desiredTemperature) {
                            this.ambientTemperature = this.desiredTemperature;
                        }
                        this.needsDraw = true;
                    }
                }
            }
        }
    }

});
