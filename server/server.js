#!/usr/bin/env node

var QS = require("qs");
var Q = require("q");
Q.longStackSupport = true

var argv = require('optimist')
    .usage("node server.js [--env=development|production]")
    .check(function(argv) {
        return (!argv.env || ["development", "production"].indexOf(argv.env) > -1)
    })
    .argv;

var environment = argv.env || "development";

var CONFIG = require("./config/" + environment + ".js");
var accountSid = CONFIG.accountSid;
var authToken = CONFIG.authToken;
var fromNumber = CONFIG.fromNumber;
var appEntryUrl = CONFIG.appEntryUrl;

require("joey")
.log()
.error()
.favicon()
.route(function ($) {

    $("contact")
        .method("POST")
        .trap(function (response) {
            response.headers["Access-Control-Allow-Origin"] = "*";
            response.headers["Access-Control-Allow-Headers"] = "X-Requested-With";
        })
        .contentApp(function (request) {
            return request.body.read().then(function (body) {
                var params = QS.parse(body.toString("utf-8"));

                //TODO format to number
                var toNumber = "+1" + params.to;
                //TODO store/passalong configuration information

                var client = require('twilio')(accountSid, authToken);

                return makeCall(client, toNumber, fromNumber, appEntryUrl).thenResolve("SUCCESS");
            });
        });

    $("initiateCall")
        .method("POST")
        .trap(function (response) {
            response.headers["content-type"] = "text/xml";
        })
        .contentApp(function (request) {
            var response = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<Response>\n" +
                    "<Say voice=\"woman\">Please leave a message after the tone.</Say>\n" +
                    "<Record maxLength=\"20\" />\n" +
                "</Response>\n";

            console.log(response);

            return response;
        });

})
.listen(8085)
.then(function () {
    console.log("Listening on 8085 in", environment);
})
.done();

function sendSMS(client, to, from, body) {

    console.log("sms", to, from, body);

    return Q.nfcall(client.sendSms, {
        to: to,
        from: from,
        body: body
    });
}

function makeCall(client, to, from, url) {

    console.log("call", to, from, url);

    return Q(client).ninvoke("makeCall", {
        to: to,
        from: from,
        url: url
    });

}
