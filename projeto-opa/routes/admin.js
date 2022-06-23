const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

router.get('/products', productsController.getAllProducts);
router.get('/products/id/:id', productsController.getProductById);
router.get('/products/name/:name', productsController.getProductByName);
router.get('/products/price/:minPrice/:maxPrice', productsController.getProductsByPriceRange);
router.get('/products/category/:category', productsController.getProductsByCategory);
router.get('/products/addProduct', productsController.addProductView);
router.post('/products/addProduct/add', productsController.addProduct);
router.post('/products/deleteProduct/:id', productsController.deleteProduct);

module.exports = router;