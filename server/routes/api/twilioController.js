var accountSid = 'ACcbf2f9786edc25517cf1f060ba4f0694'; // Your Account SID from www.twilio.com/console
var authToken = 'd2322f65ae210071333e407d81a75806';   // Your Auth Token from www.twilio.com/console

var User = require("../../models/User");
var UserSession = require("../../models/UserSession");

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var schedule = require('node-schedule');
var moment = require('moment');
moment().format();


module.exports = (app) => {

    app.post('/send-text-message', function (req, res) {
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

    app.post("/api/checkin", (req, res) => {


        //find usersession
        UserSession.findOne({ _id: req.body.token })
            .exec((err, session) => {
                if (err) return console.log(err);
                //find user from sessions user id
                User.findOne({ _id: session.userId })
                    .exec((err, user) => {
                        //set the user checked in to true and save to database
                        user.checkedIn = true;
                        user.save();
                        //create date using momentJS and format for use
                        var date = moment().add(req.body.hours, 'h').format();
                        //schedule job using the date
                        schedule.scheduleJob(date, function (userId) {
                            //find user using session id
                            User.findOne({ _id: userId })
                                .exec((err, user) => {
                                    //if they are checked in it will fire
                                    if (user.checkedIn === true) {
                                        console.log("worked");
                                    } else {
                                        console.log("user checked out");

                                    }
                                })
                        }.bind(null, session.userId));
                        res.end();
                    })
            })
    })

    app.post("/api/checkout", (req, res) => {


        //find usersession
        UserSession.findOne({ _id: req.body.token })
            .exec((err, session) => {
                if (err) return console.log(err);
                //find user from sessions user id
                User.findOne({ _id: session.userId })
                    .exec((err, user) => {
                        //set the user checked in to true and save to database
                        user.checkedIn = false;
                        user.save();

                        res.end();
                    })
            })
    })


}

