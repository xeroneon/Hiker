var accountSid = 'ACcbf2f9786edc25517cf1f060ba4f0694'; // Your Account SID from www.twilio.com/console
var authToken = 'd2322f65ae210071333e407d81a75806';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


module.exports = (app) => {

app.post('/send-text-message', function (req, res){
    console.log(req.body)
    client.messages.create({
        body: req.body.body,
        to: req.body.to,  // Text this number
        from: req.body.from // From a valid Twilio number
    })
    .then((message) => {
        console.log(message.sid)
    
        res.send(message.sid)
    }); 
    // res.send(req.body)
})


}

