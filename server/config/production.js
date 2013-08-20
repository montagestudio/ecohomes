var credentials = require("./credentials.js");

module.exports = {
    accountSid: credentials.twilio.accountSid,
    authToken: credentials.twilio.authToken,
    fromNumber: "+14084268362",
    appEntryUrl: "http://audition.montagejs.org/api/initiateCall"
};
