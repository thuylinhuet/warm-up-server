let express = require('express');
let router = express();

let productCtrl = require('../controllers/product.controller');

router.get('/products', (req, res) => {
  productCtrl.getProductList(req, res);
});

router.get('/products/:id', (req, res) => {
  productCtrl.getProduct(req, res);
})

router.get('/products/create', (req, res) => {
  res.send({ message: 'create product'});
})

router.post('/products/create', (req, res) => {
  productCtrl.createProduct(req, res);
})

router.post('/products/delete', (req, res) => {
  productCtrl.deleteProduct(req, res);
})

router.post('/products/update', (req, res) => {
  productCtrl.updateProduct(req, res); 
})
module.exports = router;