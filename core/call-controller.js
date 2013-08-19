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
                callingNow: callingNow,

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
                callingLater: callingLater,

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
                callLater: callLater
            });
            this._stateChart = new StateChart().initWithState(rootState);
            this._stateChart.delegate = this;
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
