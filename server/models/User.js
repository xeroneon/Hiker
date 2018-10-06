const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
var CronJob = require('cron').CronJob;

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
  checkedIn: {
    type: Boolean,
    default: false
  },
  admin: {
    type: Boolean,
    default: false
  },
  contacts: [{ type: Schema.Types.ObjectId, ref: 'Emergency' }],
  isDeleted: {
    type: String,
    default: ''
  },
  trails: [{ type: Schema.Types.ObjectId, ref: 'Trail' }]
});


UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.checkIn = function (time, name) {
  const job = new CronJob('* * * * * *', function() {
    console.log('You will see this message every second');
  }, null, true, 'America/Los_Angeles');
}

module.exports = mongoose.model('User', UserSchema); 
