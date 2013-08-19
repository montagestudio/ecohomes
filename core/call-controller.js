var Montage = require("montage").Montage;
var StateChart = require("montage/core/state-chart").StateChart;
var State = require("montage/core/state-chart").State;

exports.CallController = Montage.specialize({

    constructor: {
        value: function CallController() {
            var rootState, callNow, callLater, calling, callingNow, callingLater;

            callingNow = new State().init({

                cancel: function(actionName, stateChart, owner) {
                    this.gotoState('callNow');
                }
            });

            callNow = new State().init({


                call: function(actionName, stateChart, owner) {
                    this.gotoState('callingNow');
                },

                later: function(actionName, stateChart, owner) {
                    this.gotoState('callLater');
                }
            });

            callingLater = new State().init({

                cancel: function(actionName, stateChart, owner) {
                    this.gotoState('callNow');
                }
            });


            callLater = new State().init({


                call: function(actionName, stateChart, owner) {
                    this.gotoState('calling');
                },

                now: function(actionName, stateChart, owner) {
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

    clearErrors: {
        value: function() {
            this.errors.clear();
        }
    },

    validatePhoneNumber: {
        value: function() {
            return (this.phoneNumber != null) && this.phoneNumber.length > 0
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

//


});


//stateChartWillExitState
//stateChartWillEnterState
//stateChartDidExitState
//stateChartDidEnterState
//stateChartShouldGoFromStateToState(this, fromState, state)
//stateChartWillGoFromStateToState(this, fromState, state)
