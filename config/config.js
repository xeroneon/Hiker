// Copy this file as config.js in the same folder, with the proper database connection URI.

module.exports = {
  db: process.env.MONGODB_URI,
  db_dev: 'mongodb://localhost:27017/reacttest',
};
