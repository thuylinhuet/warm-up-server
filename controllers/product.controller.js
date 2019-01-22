let Product = require('../database/product.model');
let ObjectId = require('mongodb').ObjectId;

module.exports.getProductList = function (req, res) {
  Product
    .find(function (err, products) {
      if (err) {
        res.send({ code: 401, content: 'Something went wrong' + err })
      } else if (products) {
        res.send({ code: 200, content: 'Successfully', products: products })
      } else {
        res.send({ code: 404, content: 'Not found' })
      }
    })
}

module.exports.getProduct = function (req, res) {
  Product
    .findById(req.params.id, function (err, product) {
      if (err) {
        res.send({ code: 401, content: 'Something went wrong' + err })
      } else if (product) {
        res.send({ code: 200, content: 'Successfully', product: product })
      } else {
        res.send({ code: 404, content: 'Not found' })
      }
    })
}

module.exports.createProduct = function (req, res) {
  console.log(req.body);
  Product
    .create({
      "name": req.body.name,
      "description": req.body.description,
      "price": req.body.price,
      "imgUrl": req.body.imgUrl
    }, function (err, product) {
      if (err) {
        res.send({ code: 401, content: 'Something went wrong' + err })
      } else {
        res.send({ code: 200, content: 'Successfully', product: product })
      }
    })
}

module.exports.deleteProduct = function (req, res) {
  console.log(req.body._id);
  // let id = req.body.data.id;
  // console.log(id);
  // let o_id = new ObjectId(id);
  Product
    .findByIdAndRemove(req.body._id, function(err, product) {
    // .findOneAndDelete({"_id": o_id}, function(err, product) {
    // .deleteOne({ "_id": o_id }, function (err, product) {
      if (err) {
        res.send({ code: 401, content: 'Something went wrong' + err })
      } else {
        console.log('deleted');
        console.log(product);
        res.send({ code: 200, content: 'Deleted' })
      }
    })
}