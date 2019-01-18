let Product = require('../database/product.model');

module.exports.getProductList = function(req, res) {
  Product
    .find(function(err, products) {
      if (err) {
        res.send({code: 401, content: 'Something went wrong' + err })
      } else if (products) {
        res.send({ code: 200, content: 'Successfully', products: products })
      } else {
        res.send({ code: 404, content: 'Not found' })
      }
    })
}

module.exports.getProduct = function(req, res) {
}