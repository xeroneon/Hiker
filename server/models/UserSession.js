const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        deafult: false
    }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);