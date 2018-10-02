const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TrailSchema = new mongoose.Schema({
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  name: {
    type: String,
    default: '',
  },
  begintime: {
    type: String,
    default: '',
  },
  completetime: {
    type: String,
    default: '',
  }
})

module.exports = mongoose.model('Trail', TrailSchema);