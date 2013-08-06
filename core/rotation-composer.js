/**
 * @module ./rotation-composer.reel
 * @requires montage/composer/composer
 */
var Composer = require("montage/composer/composer").Composer;
var TranslateComposer = require("montage/composer/translate-composer").TranslateComposer;

/**
 * @class RotationComposer
 * @extends Composer
 */
exports.RotationComposer = Composer.specialize(/** @lends RotationComposer# */ {

    /**
        Dispatched when a rotation is started

        @event rotationStart
        @memberof RotationComposer
        @param {RotationEvent} event
    */

    /**
        Dispatched when a rotation changes

        @event rotation
        @memberof RotationComposer
        @param {RotationEvent} event
    */

    constructor: {
        value: function RotationComposer() {
            this.super();
            this._translateComposer = new TranslateComposer();
            this._translateComposer.hasMomentum = false;
       }
    },

    // Load/unload

    load: {
        value: function() {
            this.component.addComposerForElement(this._translateComposer, this.element);
            this._translateComposer._load();
            this._translateComposer.addEventListener("translateStart", this, false);
            this._translateComposer.addEventListener("translate", this, false);
        }
    },

    unload: {
        value: function() {
        }
    },
    
    handleTranslateStart: {
        value: function(event) {
            if (! this._start) {
                this._start = this._translateComposer.pointerStartEventPosition;
            }
            var start = this._start;
            var deltaX = start.pageX - this.center.pageX;
            var deltaY = this.center.pageY - start.pageY;
            this._startAngle = (Math.atan2(deltaY, deltaX) * 180 / 3.14);
            this._dispatchRotateStart();
        }
    },


    handleTranslate: {
        value: function(event) {
            this._move(event);
        }
    },

    _move: {
        value: function(event) {
            var deltaX = (this._start.pageX + event.translateX) - this.center.pageX;
            var deltaY = this.center.pageY - (this._start.pageY + event.translateY);
            var angle = (Math.atan2(deltaY, deltaX) * 180 / 3.14)
            angle = this._startAngle - angle;
            this._dispatchRotate(angle);


            this._debug(angle, event);
        }
    },
    
    _dispatchRotateStart: {
        value: function(angle) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("rotateStart", true, true, null);
            this.dispatchEvent(event);
        }
    },

    _dispatchRotate: {
        value: function(angle) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("rotate", true, true, null);
            event.rotation = angle;
            this.dispatchEvent(event);
        }
    },

    center: {
        value: null
    },

    rotationOrigin: {
        value: 0
    },
    
    _start: {
        value: null
    },

    _translateComposer: {
        value: null
    },

    _debugCanvas: {
        value: null
    },

    _debug: {
        value: function(angle, event) {
            var canvas = this._debugCanvas;
            if (this._debugCanvas === null) {
                canvas = document.createElement("canvas");
                canvas.style.position = "absolute";
                canvas.style.top = "0px";
                canvas.style.left = "0px";
                canvas.style.pointerEvents = "none";

                var resizeCanvas = function () {
                    canvas.width = document.documentElement.offsetWidth;
                    canvas.height = document.documentElement.offsetHeight;
                };
                resizeCanvas();
                window.addEventListener("resize", resizeCanvas);
                document.body.appendChild(canvas);
                this._debugCanvas = canvas;
            }

            var context = canvas.getContext('2d');
            context.clearRect(0,0,canvas.width,canvas.height);
            var x = canvas.width / 2;
            var y = canvas.height / 2;
            var radius = 75;
            var startAngle = 1.1 * Math.PI;
            var endAngle = 1.9 * Math.PI;
            var counterClockwise = angle<0;

            context.beginPath();
            context.arc(this.center.pageX, this.center.pageY, radius, 0, angle * Math.PI/180, counterClockwise);
            context.lineWidth = 2;
      
            // line color
            context.strokeStyle = 'red';
            context.stroke();

            var grid = function (x, y) {
                context.beginPath();
                context.moveTo(x, 0);
                context.lineTo(x, canvas.height);
                context.stroke();
                context.beginPath();
                context.moveTo(0, y);
                context.lineTo(canvas.width, y);
                context.stroke();
            }
            //center
            context.strokeStyle = 'red';
            grid(this.center.pageX, this.center.pageY);
            //translate
            context.strokeStyle = 'blue';
            grid( this._start.pageX + event.translateX,  this._start.pageY + event.translateY);



            context.font="20px Futura";
            context.fillText(angle.toFixed(2) + " degrees", this.center.pageX+75, this.center.pageY+75);


        }
    }


});
