const mongoose = require('mongoose');

const TrailSchema = new mongoose.Schema({
   name: {
      type: String,
      default:'',
    }
  })

  module.exports = mongoose.model('Trail', TrailSchema);