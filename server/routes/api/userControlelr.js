var User = require("../../models/User");
var UserSession = require("../../models/UserSession");


module.exports = (app) => {

    app.post("/api/account/signup", (req, res, next) => {
        console.log(req.body);

        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;

        console.log(firstName);

        let email = body.email;

        if (!firstName) {
            return res.send({
                success: false,
                message: 'Error: Missing first name'
            });
        }
        if (!lastName) {
            return res.send({
                success: false,
                message: 'Error: Missing last name'
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Missing email'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Missing password'
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: "server error"
                })
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: "email in use"
                })
            }



            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.admin = false
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: "server error"
                    })
                } else {
                    return res.send({
                        success: true,
                        message: "signed up"
                    })
                }
            })
        });


    });


    app.post("/api/account/signin", (req, res, next) => {
        console.log(req.body);

        const { body } = req;
        const {
            password
        } = body;

        // console.log(firstName);

        let email = body.email;

        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Missing email'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Missing password'
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Server Error'
                })
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Invalid'
                })
            }

            const user = users[0];

            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Invalid'
                })
            }

            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.isDeleted = false;
            userSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Server Error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id,
                    doc: doc, 
                })
            });
        })

    });

    app.get("/api/account/verify", (req, res, next) => {

        const { query } = req;
        const { token } = query;

        console.log(token);

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            console.log(sessions);
            if (err) {
                return res.send({
                    success: false,
                    message: "Server Error"
                });
            }

            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: "Error Invalid"
                });
            } else {
                return res.send({
                    success: true,
                    message: "Good"
                })
            }
        })
    });

    app.get("/api/account/logout", (req, res, next) => {
        const { query } = req;
        const { token } = query;

        console.log(token);

        UserSession.findOneAndUpdate({
            _id: token
        }, {
            $set: { isDeleted: true }
        }, null, (err, sessions) => {
            console.log(sessions);
            if (err) {
                return res.send({
                    success: false,
                    message: "Server Error"
                });
            }
            return res.send({
                success: true,
                message: "Good"
            });
        });
    });

    app.post("/api/account/update", (req, res, next) => {

        const { firstName, lastName, email, password } = req.body


        UserSession.findOne({_id: req.body.token})
            .exec((err, session) => {
                if (err) return console.log(err);

                User.findOne({ _id: session.userId })
                    .exec((err, user) => {
                        if (firstName) {
                            user.firstName = firstName
                        }
                        if(lastName) {
                            user.lastName = lastName
                        }
                        if(email) {
                            user.email = email
                        }
                        if(password) {
                            user.password = user.generateHash(password)
                        }

                        user.save((err, user) => {
                            if(err) {
                                res.json({
                                    success: false,
                                    message: "Internal Server Error"
                                })
                            } else {
                                res.json({
                                    success: true,
                                    message: "User saved"
                                })
                            }
                        });
                    })
            })
    });

    app.post("/api/checkstatus", (req, res) => {
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

                        if (user.checkedIn) {
                            return res.json({
                                checkedIn: true
                            })
                        }

                        if(!user.checkedIn) {
                            return res.json({
                                checkedIn: false
                            })
                        }
                    })
            })
    })
};