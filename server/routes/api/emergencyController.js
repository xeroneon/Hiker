var Emergency = require("../../models/Emergency");
var User = require("../../models/User");
var UserSession = require("../../models/UserSession");
const mongoose = require('mongoose');



module.exports = (app) => {
    //this adds new contact
    app.post('/add-emergency', function (req, res){
        // var contact = req.body
        // console.log(contact)
        // var newContact = new Emergency(contact)
        // newContact.save()
        // res.send(contact)

        UserSession.findOne({_id: req.body.token})
        .exec((err, session) => {
            if (err) return console.log(err);

            User.findOne({_id: session.userId})
                .exec((err, user) => {
                    console.log(user);
                    if (err) {
                        res.json({
                            success: false,
                            message: "Server Error, Try Again"
                        })
                    }

                    const newContact = new Emergency({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        phoneNumber: req.body.phoneNumber,
                        user: user._id,
                        _id: new mongoose.Types.ObjectId()
                    })

                    user.contacts.push(newContact._id)

                    user.save(err => {
                        if (err) return console.log(err);
                    })

                    newContact.save(err => {
                        if (err) return console.log(err)
                        return res.send({
                            success: true
                        });
                    })

                })
        })
    })

    //retrive contacts from the database
    app.get('/all-emergency-contacts', function (req, res){
        Emergency.find().then(function (data){
            res.send(data)
        }) 
    })

    app.post("/api/test", (req, res) => {

        // console.log(req.body.token);
        // res.end();
        UserSession.findOne({_id: req.body.token})
            .exec((err, session) => {
                if (err) return console.log(err);

                User.findOne({_id: session.userId})
                    .exec((err, user) => {
                        console.log(user);

                        var newContact = new Emergency({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            phoneNumber: req.body.phoneNumber,
                            user: user._id
                        })

                        newContact.save(err => {
                            if (err) return console.log(err)
                            return res.send({
                                success: true,
                                message: "Good"
                            });
                        })

                    })
            })
    })
}
