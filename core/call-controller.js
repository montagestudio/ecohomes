var Montage = require("montage").Montage;
var Promise = require("montage/core/promise").Promise;
var StateChart = require("montage/core/state-chart").StateChart;
var State = require("montage/core/state-chart").State;

exports.CallController = Montage.specialize({

    constructor: {
        value: function CallController() {
            var callController = this;

            var rootState, callNow, callLater, calling, callingNow, callingLater;

            callNow = new State().init({
                call: function(actionName, stateChart, owner) {
                    this.gotoState('callingNow');
                },
                later: function(actionName, stateChart, owner) {
                    this.gotoState('callLater');
                }
            });

            callingNow = new State().init({
                enterState: function() {
                    callController.makeContactCall().done();
                },
                cancel: function(actionName, stateChart, owner) {
                    this.gotoState('callNow');
                }
            });


            callLater = new State().init({
                call: function(actionName, stateChart, owner) {
                    this.gotoState('callingLater');
                },
                now: function(actionName, stateChart, owner) {
                    this.gotoState('callNow');
                }
            });

            callingLater = new State().init({
                cancel: function(actionName, stateChart, owner) {
                    this.gotoState('callNow');
                }
            });

            rootState = new State().init({
                initialSubstate: 'callNow',
                callNow: callNow,
                callingNow: callingNow,
                callLater: callLater,
                callingLater: callingLater
            });

            this._stateChart = new StateChart().initWithState(rootState);
            this._stateChart.delegate = this;

            this.errors = [];
            // doesn't work since the statechart doesn't
            this.defineBinding("currentState", {"<-": "_stateChart.currentState.name"})
        }
    },

    _stateChart: {
        value: null
    },
    
    stateChartWillGoFromStateToState: {
        value: function(stateChart, prevState, nextState) {
            this.callDelegateMethod("stateDidChange", this, nextState.name);
            console.log("nextState", nextState.name)
        }
    },

    stateChartShouldGoFromStateToState: {
        value: function(stateChart, prevState, nextState) {
            this.clearErrors();
            if(nextState.name === "callingNow") {
                if(! this.validatePhoneNumber()) {
                    this.errors.push({
                        message: "Phone number not valid"
                    });
                    return false;
                }

            }
            return true;
        }
    },

    call: {
        value: function() {
            this._stateChart.performAction("call");
        }
    },

    later: {
        value: function() {
            this._stateChart.performAction("later");
        }
    },

    cancel: {
        value: function() {
            this._stateChart.performAction("cancel");
        }
    },

    makeContactCall: {
        value: function() {
            return this._post("http://audition.montagejs.org/api/contact", ["to=" + this.phoneNumber], 5000);
        }
    },

    _post: {
        value: function(url, data, timeout) {
            var pendingTimeout;
            var response = Promise.defer();
            var request = new XMLHttpRequest();
            request.open("POST", url, true);
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        if(pendingTimeout) {
                            clearTimeout(pendingTimeout);
                        }
                        response.resolve(request.responseText);
                    } else {
                        response.reject("HTTP " + request.status + " for " + path);
                    }
                }
            };
            timeout && (pendingTimeout = setTimeout(response.reject, timeout));

            request.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
            request.send(data.join("&"));
            return response.promise;
        }
    },


    clearErrors: {
        value: function() {
            this.errors.clear();
        }
    },

    validatePhoneNumber: {
        value: function() {
            return (this.phoneNumber != null) && this.phoneNumber.length === 10
        }
    },

    errors: {
        value: null
    },

    phoneNumber: {
        value: null
    },

    identifier: {
        value: "callController"
    }

});


//stateChartWillExitState
//stateChartWillEnterState
//stateChartDidExitState
//stateChartDidEnterState
//stateChartShouldGoFromStateToState(this, fromState, state)
//stateChartWillGoFromStateToState(this, fromState, state)
