// const mongoose = require('mongoose');
// // const Schema = mongoose.Schema;

// const personSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     name: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//     emergency: [{ type: Schema.Types.ObjectId, ref: 'Emergency' }],
//     trails: [{ type: Schema.Types.ObjectId, ref: 'Trail' }]
// });

// // var storySchema = Schema({
// //     author: { type: Schema.Types.ObjectId, ref: 'Person' },
// //     title: String,
// //     fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// // });

// var User = mongoose.model('User', personSchema);
// var Person = mongoose.model('Person', personSchema);