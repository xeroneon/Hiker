const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emergencySchema = mongoose.Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    firstName: String,
    lastName: String,
    phoneNumber: Number
})


module.exports = mongoose.model('Emergency', emergencySchema)