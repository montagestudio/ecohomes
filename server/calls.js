
var Q = require("q");



var Call = function(client, sid) {
    this.statusUpdate = function(status) {
        this.status = status;
    };
    this.cancel = function() {
        return client.cancelCall(sid)
    };
    this.ended = function() {
        this.status = "competed";
    };
};



exports.client = function (accountSid, authToken, fromNumber, appEntryUrl, callEndedUrl) {
    var client = {};

    var twilioClient = require('twilio')(accountSid, authToken);
    var calls =  {};
    var callIntervals = {};

    client.makeCall = function (toNumber) {
        return makeCall(twilioClient, toNumber, fromNumber, appEntryUrl).then(function (twilioCall) {
            var call = new Call(client, twilioCall.sid);

            console.log("This call\'s unique ID is: " + twilioCall.sid);
            console.log("This call was created at: " + twilioCall.dateCreated);

            callIntervals[twilioCall.sid] = setInterval(function () {
                twilioClient.getCall(twilioCall.sid, function(error, twilioCall) {
                    console.log(twilioCall.status);
                    if (twilioCall.status === "completed") {
                        client.callEnded(twilioCall.sid);
                    } else {
                        call.statusUpdate(twilioCall.status);
                    }
                })
            }, 500);

//            var socket = new WebSocket("ws://example.com");
//            var remote = Connection(socket, local);
//
//            var remote = Connection(port, local);


            calls[twilioCall.sid] = call;
            return Q.master(call);
        });
    };

    client.callEnded = function (callSid) {
        var call = calls[callSid];
        if (call != null) {
            call.ended();
        }
        clearInterval(callIntervals[callSid])
    };

    client.cancelCall = function (callSid) {
        var deferred = Q.defer();
        console.log("cancelCall", callSid);
        twilioClient.accounts.calls(callSid).post({
                 status: "completed"
            },
            function(err,data) {
                if(err) {
                    console.log("cancelCall error", err);
                    deferred.reject(data);
                }
                deferred.resolve(data);
            }
        )
        return deferred.promise;

    }

    function makeCall(twilioClient, to, from, url) {
        var deferred = Q.defer();
        console.log("call", to, from, url);
        twilioClient.makeCall({
                to: to,
                from: from,
                url: url,
                statusCallback: callEndedUrl
            },
            function(err,data) {
                if(err) {
                    console.log("makeCall error", err);
                    deferred.reject(data);
                }
                deferred.resolve(data);
            }
        )
        return deferred.promise;
    }

    return client;
}

