var express = require('express');
var router = express.Router();
const generalController = require('../controllers/main');
const menuController = require('../controllers/menu');
const contactController = require('../controllers/contact');
const aboutUsController = require('../controllers/aboutUs');
const { userController, loggedUser } = require('../controllers/user');
const cartController = require('../controllers/cart');
const productController = require('../controllers/product');
const stockController = require('../controllers/stock');

/*Home*/
router.get('/', generalController.index);

/*Menu*/
router.get('/cardapio', menuController.cardapio);

/*Contact*/
router.get('/contato', contactController.contato);

/*About Us*/
router.get('/quemsomos', aboutUsController.quemsomos);

/*Authentication*/
router.get('/entrar', userController.loginPage);
router.get('/registrar', userController.registerPage);
router.post('/user/login', userController.login);
router.post('/user/register', userController.register);
router.get('/user/logout', userController.logout);

/*Cart*/
router.get('/carrinho', loggedUser, cartController.carrinho);

/*Adm Products*/
router.get('/admproduct', productController.admproduct);

/*Adm Stock*/
router.get('/admstock', stockController.admstock);

module.exports = router;