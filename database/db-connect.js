let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-cart');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('connect', function() {
  console.log('Database is connected');
});