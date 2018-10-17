var accountSid = 'ACcbf2f9786edc25517cf1f060ba4f0694'; // Your Account SID from www.twilio.com/console
var authToken = 'd2322f65ae210071333e407d81a75806';   // Your Auth Token from www.twilio.com/console

var User = require("../../models/User");
var UserSession = require("../../models/UserSession");
var Emergency = require("../../models/Emergency")

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var schedule = require('node-schedule');
var moment = require('moment');
moment().format();


module.exports = (app) => {

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
                        const date = req.body.endDate
                        //schedule job using the date
                        schedule.scheduleJob(date, function (userId) {

                            User.findOne({ _id: userId })
                                .populate("contacts trails")
                                .exec((err, user) => {
                                    user.contacts.map(contacts => {
                                        const trailIndex = user.trails.length - 1;
                                        if (user.checkedIn) {
                                            client.messages.create({
                                                body: `EMERGENCY: ${user.firstName} checked in on hiker-ua.herokuapp.com to hike ${user.trails[trailIndex].name}, they were scheduled to finish at ${user.trails[trailIndex].completetime} but did not checkout before the specified time, please check in on ${user.firstName} to see if they are okay.`,
                                                to: contacts.phoneNumber,  // Text this number
                                                from: "+18508528647" // From a valid Twilio number
                                            })
                                                .then((message) => {
                                                    console.log(message.sid)

                                                    res.send(message.sid)
                                                });

                                        }
                                    })
                                })
                        }.bind(null, user._id));
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
                        if (err) return res.json({
                            success: false,
                            error: err
                        })
                        //set the user checked in to true and save to database
                        user.checkedIn = false;
                        user.save();

                        res.json({
                            success: true,
                        });
                    })
            })
    })

    app.post("/api/confirm-contact", (req, res) => {
        client.messages.create({
            body: `${req.body.user} added you as an emergency contact on hiker-az.herokuapp.com, reply "accept" to confirm or reply "decline" to remove yourself`,
            to: req.body.phoneNumber,  // Text this number
            from: "+18508528647" // From a valid Twilio number
        })
            .then((message) => {
                console.log(message.sid)

                res.send(message.sid)
            });
    })

    app.post("/api/recieve-sms", (req, res) => {
        console.log(req)

        let smsBody = req.body.Body

        let number = parseInt(req.body.From.slice(2))

        console.log(number)

        if(smsBody.toLowerCase() === "accept") {
            console.log("accepted")
            res.json({
                message: "user accepted"
            })
        } else if (smsBody.toLowerCase() === "decline") {
            console.log("declined")
            Emergency.deleteOne({phoneNumber: number});

            res.json({
                message: "user has been removed"
            })
        }

        // res.end();
    })

    app.post("/api/test-sms", (req, res) => {
        client.messages.create({
            body: `added you as an emergency contact on hiker-az.herokuapp.com, reply "accept" to confirm or reply decline to remove yourself`,
            to: "9254284687",  // Text this number
            from: "+18508528647" // From a valid Twilio number
        })
            .then((message) => {
                console.log(message.sid)

                res.send(message.sid)
            });

            // res.end();
    })
}

