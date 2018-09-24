const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  role: {
    type: Number,
    default: 1
  },
  contacts: [{ type: Schema.Types.ObjectId, ref: 'Emergency' }],
  isDeleted: {
    type: String,
    default: ''
  },
  trails: []
});


UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema); 
