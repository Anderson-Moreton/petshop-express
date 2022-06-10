const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

router.get('/products', productsController.getAllProducts);
router.get('/products/id/:id', productsController.getProductById);
router.get('/products/name/:name', productsController.getProductByName);
router.get('/products/price/:minPrice/:maxPrice', productsController.getProductsByPriceRange);
router.get('/products/category/:category', productsController.getProductsByCategory);

module.exports = router;