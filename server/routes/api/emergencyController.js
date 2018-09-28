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
    app.get('/api/account/contacts', function (req, res){
        UserSession.findOne({_id: req.query.token})
            .exec((err, session) => {
                if(err) {
                    return res.json({
                        success: false
                    })
                }
                User.findOne({_id: session.userId})
                    .populate("contacts")
                    .exec((err, user) => {
                        if(err) {
                            return res.json({
                                success: false
                            })
                        }
                        res.json({
                            success: true,
                            contacts: user.contacts
                        })
                    })
            })
    });

    app.post("/api/account/delete-contact", function (req, res) {
        Emergency.findOne({_id: req.body.contactId})
        .remove()
        .exec((err, contact) => {
            res.json({
                success: true
            })
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
