var Emergency = require("../../models/Emergency");

module.exports = (app) => {
    //this adds new contact
    app.post('/add-emergency', function (req, res){
        var contact = req.body
        console.log(contact)
        var newContact = new Emergency(contact)
        newContact.save()
        res.send(contact)
    })

    //retrive contacts from the database
    app.get('/all-emergency-contacts', function (req, res){
        Emergency.find().then(function (data){
            res.send(data)
        }) 
    })
}
