var Trails = require("../../models/Trail");
var User = require("../../models/User");
var UserSession = require("../../models/UserSession");

module.exports = (app) => {
    //this adds new contact
    app.post('/add-trail', function (req, res){
        
        UserSession.findOne({_id: req.body.token})
        .exec((err, session) => {
            console.log('1')
            if(err) return console.log(err);
            console.log('2')
            User.findOne({_id: session.userId})
            .exec((err, user) => {
                console.log('3')
                if(err) return console.log(err);
                console.log(req.body)
                var trail = req.body                
                console.log(trail)
                var newTrail = new Trails({
                    name: trail.name,
                    completetime: trail.completetime,
                    user: user._id
                })
                console.log("new trail", newTrail);
                newTrail.save()
                res.send(newTrail)
                })
            })
    })

    //retrive contacts from the database
    app.get('/all-trails', function (req, res){
        Trails.find().then(function (data){
            res.send(data)
        }) 
    })
}
