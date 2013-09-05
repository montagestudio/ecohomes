var Montage = require("montage").Montage;
var Promise = require("montage/core/promise").Promise;
var StateChart = require("montage/core/state-chart").StateChart;
var State = require("montage/core/state-chart").State;

var Connection = require("q-connection");
var adaptConnection = require("q-connection/adapt");


Promise.longStackSupport = true;

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
                    callController.cancelCall().then(function () {
                        this.gotoState('callNow');
                    }.bind(this)).done();
                },
                end: function(actionName, stateChart, owner) {
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
            this.defineBinding("currentState", {"<-": "_stateChart.currentState.name"});
        }
    },

    _stateChart: {
        value: null
    },
    
    stateChartWillGoFromStateToState: {
        value: function(stateChart, prevState, nextState) {
            this.callDelegateMethod("stateDidChange", this, nextState.name);
            console.log("nextState", nextState.name);
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
    
    callEnded: {
        value: function() {
            this._stateChart.performAction("end");
        }
    },

    _currentCall: {
        value: null
    },

    makeContactCall: {
        value: function() {
            var controller = this;
            return this.backend.get("calls").invoke("makeCall", this._normalizedPhoneNumber,function (status) {
                    console.log("callStatus", status);
                    this.callStatus = status;
                }.bind(this), function () {
                    console.log("callEnded...");
                    this.callEnded()
                }.bind(this)).then(function (call) {
                console.log("makeCall", call);
                controller._currentCall = call;
            });
//            var calls = this.backend.get("calls");
//            debugger
//            return calls;

            //return this._post("http://localhost:8085/contact", ["to=" + this._normalizedPhoneNumber], 5000);
        }
    },
    
    cancelCall: {
        value: function() {
            if (this._currentCall) {
                console.log("cancelCall", this._currentCall);
                return this._currentCall.invoke("cancel");
            } else {
                console.error("No call to cancel.")
            }
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
                        response.reject("HTTP " + request.status + " for " + url);
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

    _phoneNumberRegex: {
        value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    },

    validatePhoneNumber: {
        value: function() {
            if ((this.phoneNumber != null) && this._phoneNumberRegex.test(this.phoneNumber)) {
                this._normalizedPhoneNumber = this.phoneNumber.replace(this._phoneNumberRegex, "$1$2$3");
                return true;
            }
            return (this.phoneNumber != null) && this._phoneNumberRegex.test(this.phoneNumber);
        }
    },

    errors: {
        value: null
    },

    phoneNumber: {
        value: "4085406044"
    },

    callStatus: {
        value: ""
    },

    _normalizedPhoneNumber: {
        value: null
    },

    identifier: {
        value: "callController"
    },

    _backend: {
        value: null
    },

    backend: {
        get: function () {
            if (this._backend == null) {
                var connection = adaptConnection(new WebSocket("ws://localhost:8086"));
                connection.closed.then(function () {
                    this._backend = null;
                });

                this._backend = Connection(connection);
            }

            return this._backend;
        }
    }

});


//stateChartWillExitState
//stateChartWillEnterState
//stateChartDidExitState
//stateChartDidEnterState
//stateChartShouldGoFromStateToState(this, fromState, state)
//stateChartWillGoFromStateToState(this, fromState, state)
