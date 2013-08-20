CallBack
========
This server serves as an end point for this demo, accepting the submitted configuration
and initiating a followup sales phone call


Installation
============
`npm install`

Running
=======

Development
`node server.js`

Production
`node server.js --env production`
Production mode will require a config/credentials.js file with the following structure:

```
module.exports = {
    twilio: {
        accountSid: "ACCOUNT_SID",
        authToken: "AUTH_TOKEN"
    }
};
```

Starting a Sales Contact
========================
POST to the server at "/contact" with the body of
`to=PHONE_NUMBER`

Twilio then reacts by finding TwiML at "/initiateCall"
