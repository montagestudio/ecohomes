/**
 * @module ./call-back.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var CallController = require("../../../core/call-controller").CallController;

//{
//    "now": "ui/call-back/now.reel",
//    later": "ui/call-back/later.reel",
//    "calling": "ui/call-back/calling.reel"
//}

/**
 * @class CallBack
 * @extends Component
 */
exports.CallBack = Component.specialize(/** @lends CallBack# */ {
    constructor: {
        value: function CallBack() {
            this.super();
            this.callController = new CallController();
            this.callController.delegate = this;
            this.templateObjects =  {
                callController: this.callController
            }
        }
    },

    callControllerStateDidChange: {
        value: function(controller, state) {
            this.currentStep = state;
        }
    },

    callController: {
        value: null
    },

    currentStep: {
        value: "callNow"
    }

});
