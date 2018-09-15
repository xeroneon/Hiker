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
                    token: doc._id
                })
            });
        })

    });

    app.get("/api/account/verify", (req, res, next) => {

        const { query } = req;
        const {token} = query;

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
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
};