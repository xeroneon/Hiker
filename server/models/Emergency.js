const mongoose = require('mongoose');

var emergencySchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number
})


module.exports = mongoose.model('Emergency', emergencySchema)