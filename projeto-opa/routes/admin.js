const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');
const admController = require('../controllers/admin');


router.get('/products', productsController.getAllProducts);
router.get('/products/id/:id', productsController.getProductById);
router.get('/products/name/:name', productsController.getProductByName);
router.get('/products/price/:minPrice/:maxPrice', productsController.getProductsByPriceRange);
router.get('/products/category/:category', productsController.getProductsByCategory);

router.get('/products/addProduct', productsController.addProductView);
router.post('/products/addProduct/add', productsController.addProduct);

router.get('/products/deleteProduct', productsController.deleteProductView);
router.post('/products/deleteProduct/delete', productsController.deleteProduct);

router.get('/products/editProduct', productsController.editProductView); /*Anderson 30/08*/
router.post('/products/editProduct/edit', productsController.editProduct); /*Anderson 30/08*/

router.get('/login', admController.loginPage); /*Anderson 30/08*/
router.post('/login/enter', admController.login);

module.exports = router;