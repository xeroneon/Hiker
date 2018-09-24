var Trails = require("../../models/Trail");

module.exports = (app) => {
    //this adds new contact
    app.post('/add-trail', function (req, res){
        var trail = req.body
        console.log(trail)
        var newTrail = new Trails(trail)
        newTrail.save()
        res.send(newTrail)
    })

    //retrive contacts from the database
    app.get('/all-trails', function (req, res){
        Trails.find().then(function (data){
            res.send(data)
        }) 
    })
}
