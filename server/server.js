#!/usr/bin/env node

var QS = require("qs");
var Q = require("q");
var Connection = require("q-connection");
var Joey = require("joey");
var SocketServer = require("websocket.io");
var twilio = require('twilio');

var argv = require('optimist')
    .usage("node server.js [--env=development|production]")
    .check(function(argv) {
        return (!argv.env || ["development", "production"].indexOf(argv.env) > -1);
    })
    .argv;

var environment = argv.env || process.env.CALL_BACK_ENV || "development";
var port = argv.p || 80;

var CONFIG = require("./config/" + environment + ".js");
var accountSid = CONFIG.accountSid;
var authToken = CONFIG.authToken;
var fromNumber = CONFIG.fromNumber;
var appEntryUrl = CONFIG.appUrl + "/initiateCall";
var callEndedUrl = CONFIG.appUrl + "/callEnded";

var callIntervals = {};



var CallsClient = require("./calls").client(accountSid, authToken, fromNumber, appEntryUrl, callEndedUrl);

var wsServer;
var wsCapabilities = {
    calls: Q.master(CallsClient),

    kill: function () {
        process.exit();
    }
};

Joey
.log()
.error()
.favicon()
.route(function ($) {

    $("initiateCall")
        .method("POST")
        .contentType("text/xml")
        .contentApp(function (request) {
            console.log("CALL STARTED");

            var response = new twilio.TwimlResponse();

            response.say("Thank you for contacting Eco Homes. All our dream home specialists are busy helping other customers right now.")
                .say("Please hold for the next available specialist.")
                .play('http://www.scientificinvesting.eu/a/Strauss%20-%20Champain%20polka.mp3');

            console.log(response.toString());

            return response.toString();
        });

    $("callEnded")
        .method("POST")
        .contentType("text/xml")
        .contentApp(function (request) {
            return request.body.read().then(function (body) {
                var params = QS.parse(body.toString("utf-8"));

                console.log("CALL ENDED", params.CallSid);

                CallsClient.callEnded(params.CallSid);



                console.log("status", params.CallStatus);
                console.log("CallDuration", params.CallDuration);
                return "status";
            });
       });

    $("alive")
        .method("GET")
        .contentType("text/plain")
        .trap(function (response) {
            response.headers["Access-Control-Allow-Origin"] = "*";
            response.headers["Access-Control-Allow-Headers"] = "X-Requested-With";
        })
        .contentApp(function (request) {
            return "ALIVE";
       });

})
.listen(port)
.then(function (server) {
    var address,
        socketServer;

    wsServer = server;

    socketServer = SocketServer.attach(server.node);
    socketServer.on("connection", function (connection) {
        Connection(connection, wsCapabilities);
    });
    console.log("Listening on", port, "in", environment);
})
.done();
