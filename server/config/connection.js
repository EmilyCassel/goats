const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/goats_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
});

module.exports = mongoose.connection;


// const { MongoClient } = require("mongodb");
// const url = 'mongodb://127.0.0.1:27017/goats_db';
