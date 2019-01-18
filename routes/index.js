let express = require('express');
let router = express();

let productCtrl = require('../controllers/product.controller');

router.get('/products', (req, res) => {
  productCtrl.getProductList(req, res);
});

router.get('products/:id', (req, res) => {
  productCtrl.getProduct(req, res);
})
module.exports = router;