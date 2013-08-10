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

    enterDocument: {
        value: function(firstDraw) {
            /*this.super();
            this.element.addEventListener("touchstart", this, false);
            this.element.addEventListener("touchend", this, false);
            this.element.addEventListener("mousedown", this, false);
            document.addEventListener("mouseup", this, false);

            this.addOwnPropertyChangeListener("_inputTemperature", function() {
                this.handleInputTemperatureChange()
            }.bind(this));
            this.addOwnPropertyChangeListener("targetTemperature", this);
            this.addOwnPropertyChangeListener("ambientTemperature", this);

            this.defineBinding( "classList.has('Den--awake')", { "<-": "awake" });
            this.defineBinding( "classList.has('Den--active')", { "<-": "active" });

            if(firstDraw) {
                this.buildGraduations();
                this.syncAmbientWithTarget();
            }*/
        }
    },

    desiredTemperature: {
        value: 72
    },

    ambientTemperature: {
        value: 72
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
                    pageX: 174 + boundingRect.top,
                    pageY: 151 + boundingRect.left
                };
            this._rotateComposer.center = center;
        }
    },

   handleRotate: {
        value: function(event) {
            /*var angle = event.rotation;
            if (angle > 180) {
                angle = -88
            } else if (angle > 88) {
                angle = 88
            } else if (angle < -88) {
                angle = -88
            }
            var tempRange = this._maxTemperature - this._minTemperature;
            var middle = (this._maxTemperature + this._minTemperature)/2;
            this._inputTemperature = parseInt(middle + (tempRange * angle)/176, 10);*/
            this.desiredTemperature += event.rotation / 100;
            console.log(event.rotation);
            this.needsDraw = true;
        }
    },

    draw: {
        value: function (timestamp) {
            var length,
                leftLength,
                rightLength,
                ambientTemperature = (this.ambientTemperature - this._temperatureOffset) | 0,
                time;

            if (this._previousTimestamp === null) {
                this._previousTimestamp = timestamp;
            }
            time = timestamp - this._previousTimestamp;
            this._previousTimestamp = timestamp;
            this.whiteBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((this.desiredTemperature - this._temperatureOffset) * 6 - 126) + "deg)";
            if (ambientTemperature === (this.desiredTemperature - this._temperatureOffset)) {
                this.rightRedBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.leftRedBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.rightBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                this.blueFadingBar.style.opacity = 0;
                this.redFadingBar.style.opacity = 0;
            } else {
                if (ambientTemperature < (this.desiredTemperature - this._temperatureOffset)) {
                    this.rightBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                    this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, 180deg)";
                    this.blueFadingBar.style.opacity = 0;
                    length = (this.desiredTemperature - this._temperatureOffset) - ambientTemperature - 1;
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
                    length = ambientTemperature - (this.desiredTemperature - this._temperatureOffset) - 1;
                    if (length <= 30) {
                        leftLength = length;
                        rightLength = 0;
                    } else {
                        leftLength = 30;
                        rightLength = length - 30;
                    }
                    this.leftBlueBarClip.style.webkitTransform = "rotate3d(0, 0, 1, " + (((this.desiredTemperature - this._temperatureOffset) + 1 - (30 - leftLength)) * 6 - 39) + "deg)";
                    this.leftBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((30 - leftLength) * 6) + "deg)";
                    this.rightBlueBarClip.style.webkitTransform = "rotate3d(0, 0, 1, " + (((this.desiredTemperature - this._temperatureOffset) + 1 + rightLength) * 6 - 39) + "deg)";
                    this.rightBlueBar.style.webkitTransform = "rotate3d(0, 0, 1, " + ((30 - rightLength) * 6) + "deg)";
                    this.blueFadingBar.style.opacity = (this.ambientTemperature - this._temperatureOffset) - ambientTemperature;
                    this.blueFadingBar.style.webkitTransform = "rotate3d(0, 0, 1, " + (ambientTemperature * 6 - 126) + "deg)";
                }
            }
            if (this.ambientTemperature < this.desiredTemperature) {
                this.ambientTemperature += time * .002;
                if (this.ambientTemperature > this.desiredTemperature) {
                    this.ambientTemperature = this.desiredTemperature;
                }
                this.needsDraw = true;
            } else {
                if (this.desiredTemperature < this.ambientTemperature) {
                    this.ambientTemperature -= time * .002;
                    if (this.ambientTemperature < this.desiredTemperature) {
                        this.ambientTemperature = this.desiredTemperature;
                    }
                    this.needsDraw = true;
                }
            }
        }
    }


/*    handleInputTemperatureChange: {
        value: function(rotation) {
            this.needsDraw = true;
//            this.targetTemperature = this._inputTemperature;
        }
    },

    handleTargetTemperatureChange: {
        value: function(active) {
            this._inputTemperature = this.targetTemperature;
            this.needsDraw = true;
        }
    },

    handleAmbientTemperatureChange: {
        value: function(active) {
            this.needsDraw = true;
        }
    },

    willDraw: {
        value: function() {
            var topLeft = webkitConvertPointFromNodeToPage(this.element, new WebKitPoint(0,0));
            var _center = {};
            _center.pageX = topLeft.x + this.element.offsetWidth / 2;
            _center.pageY = topLeft.y + this.element.offsetHeight / 2;
            this._rotateComposer.center = _center;
        }
    },


    draw: {
        value: function() {
            this.super();
            var tempRange = this._maxTemperature - this._minTemperature;
            var middle = (this._maxTemperature + this._minTemperature)/2;
            this.indicator.style.webkitTransform = "rotate3d(0,0,1,"+ parseInt((this._inputTemperature - middle) * (176/tempRange) , 10) +"deg)";
            this.ambient.style.webkitTransform = "rotate3d(0,0,1,"+ parseInt((this.ambientTemperature - middle) * (176/tempRange) , 10) +"deg)";
            this.showGraduations();
        }
    },

    handleTouchstart: {
        value: function() {
            this._start();
        }
    },

    handleTouchend: {
        value: function() {
            this._end();
        }
    },

    handleMousedown: {
        value: function() {
            this._start();
        }
    },

    handleMouseup: {
        value: function() {
            this._end();
        }
    },


    _awakeTimeout: {
        value: null
    },

    _start: {
        value: function() {
            if(this._awakeTimeout) {
                clearTimeout(this._awakeTimeout);
            }
            if(this._syncInterval) {
                clearInterval(this._syncInterval);
            }
            this.active = true;
            this.awake = true;
            this._inputTemperature = this.targetTemperature;
        }
    },

    _end: {
        value: function() {
            this._awakeTimeout = setTimeout(function() {
                this.awake = false;
            }.bind(this), 2000);
            this.syncAmbientWithTarget();
            this.active = false;
            this.targetTemperature = this._inputTemperature;
        }
    },

    _syncInterval: {
        value: null
    },

    syncAmbientWithTarget: {
        value: function() {
            this._syncInterval = setInterval(function() {
                var diff = this.ambientTemperature - this.targetTemperature;
                if(diff > 0) {
                    this.ambientTemperature--;
                } else if(diff < 0) {
                    this.ambientTemperature++;
                }
            }.bind(this), 100)
        }
    },


    handleRotateStart: {
        value: function(event) {
            this._initialRotation = event.rotation;
        }
    },

    handleRotate: {
        value: function(event) {
            var angle = event.rotation;
            if (angle > 180) {
                angle = -88
            } else if (angle > 88) {
                angle = 88
            } else if (angle < -88) {
                angle = -88
            }
            var tempRange = this._maxTemperature - this._minTemperature;
            var middle = (this._maxTemperature + this._minTemperature)/2;
            this._inputTemperature = parseInt(middle + (tempRange * angle)/176, 10);
        }
    },

    showGraduations: {
        value: function() {
            var increasing = this.ambientTemperature < this._inputTemperature;
            var i, length = this._graduations.length;

            for (i = this._minTemperature; i < this._maxTemperature ; i++) {
                var increment = this._graduations[i];
                if (increasing) {
                    if ( i > this.ambientTemperature && i < this._inputTemperature) {
                        increment.classList.add("Den-graduation--shown");
                        increment.children[0].style.backgroundColor = "rgba(255,128,50,.5)"
                    } else if ( i < this.ambientTemperature || i >= this._inputTemperature) {
                        increment.classList.remove("Den-graduation--shown");
                        increment.children[0].style.backgroundColor = "white";
                    }
                } else {
                    if ( i < this.ambientTemperature && i > this._inputTemperature) {
                        increment.classList.add("Den-graduation--shown");
                        increment.children[0].style.backgroundColor = "rgba(50,128,255,.5)"
                    } else if ( i > this.ambientTemperature || i <= this._inputTemperature) {
                        increment.classList.remove("Den-graduation--shown");
                        increment.children[0].style.backgroundColor = "white";
                    }
                }
            }
            if(this.ambientTemperature < this._inputTemperature) {
                this.ambient.children[0].style.backgroundColor = "rgba(255,128,128,.8)"
            } else if (this.ambientTemperature > this._inputTemperature){
                this.ambient.children[0].style.backgroundColor = "rgba(128,128,255,.8)"
            }
        }
    },

    buildGraduations: {
        value: function() {
            this._graduations = [];
            var tempRange = this._maxTemperature - this._minTemperature;
            var i;
            for (i = this._minTemperature; i <= this._maxTemperature; i++) {
                var increment = this.indicator.cloneNode(true);
                increment.style.webkitTransform = "rotate3d(0,0,1,"+ 4*(i-72) +"deg)";
                increment.classList.add("Den-graduation");
                this.element.appendChild(increment);
                this._graduations[i] = increment;
            }
        }
    },

    _graduations: {
        value: null
    },

    awake: {
        value: false
    },

    active: {
        value: false
    },

    _maxTemperature: {
        value: 94
    },

    _minTemperature: {
        value: 50
    },

    _inputTemperature: {
        value: 72
    },

    outsideTemperature: {
        value: 72
    },

    targetTemperature: {
        value: 72
    },

    ambientTemperature: {
        value: 72
    }*/

});
