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

            var topLeft = webkitConvertPointFromNodeToPage(this.element, new WebKitPoint(0,0));
            this._center = {};
            this._center.pageX = topLeft.x + this.element.offsetWidth / 2;
            this._center.pageY = topLeft.y + this.element.offsetHeight / 2;
            console.log("_center", this._center);
        }
    },

    unload: {
        value: function() {
        }
    },
    
    handleTranslateStart: {
        value: function(event) {
            console.log("_center", this._center);
            if (! this._start) {
                this._start = this._translateComposer.pointerStartEventPosition;
            }
            var start = this._start;
            console.log("start", start)
            var deltaX = start.pageX - this._center.pageX;
            var deltaY = this._center.pageY - start.pageY;
            console.log("deltaX", deltaX)
            console.log("deltaY", deltaY)
            this._startAngle = (Math.atan2(deltaY, deltaX) * 180 / 3.14);
            console.log("_startAngle", this._startAngle)
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
            var deltaX = (this._start.pageX + event.translateX) - this._center.pageX;
            var deltaY = this._center.pageY - (this._start.pageY + event.translateY);
            console.log("translate", event.translateX, event.translateY)
            console.log("deltaX", deltaX)
            console.log("deltaY", deltaY)
            var angle = (Math.atan2(deltaY, deltaX) * 180 / 3.14)
            console.log("currentAngle", angle)
            angle = this._startAngle - angle;
            console.log("rotation", angle)
            this._dispatchRotate(angle);
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

    _start: {
        value: null
    },

    _center: {
        value: null
    },

    _translateComposer: {
        value: null
    }

});
