const mongoose = require('mongoose');

const TrailSchema = new mongoose.Schema({
    currentTrail: {
      type: String,
      default:'',
    },
    checkIn:{
      type: boolean,
      status: false,
    },
    trailHistory:{
      history: []
    }
  })

  export default mongoose.model('Trail', TrailSchema);