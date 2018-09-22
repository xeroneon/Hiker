// Copy this file as config.js in the same folder, with the proper database connection URI.

module.exports = {
<<<<<<< HEAD
    db: 'mongodb://username:password@url:port/db',
    db_dev: 'mongodb://localhost:27017/reacttest',
  };
=======
  db: process.env.MONGODB_URI,
  db_dev: 'mongodb://localhost:27017/reacttest',
};
>>>>>>> a1122fca59b40c4d676af4f22ba4b7b7b83ff020
