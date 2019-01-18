let mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true
  },
  imgUrl: {
    type: String,
    require: true
  }
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;