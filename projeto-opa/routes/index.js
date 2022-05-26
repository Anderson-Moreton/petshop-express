var express = require('express');
var router = express.Router();
const generalController = require('../controllers/main');
const menuController = require('../controllers/menu');
const contactController = require('../controllers/contact');
const whoController = require('../controllers/who');
const loginController = require('../controllers/login');
const cartController = require('../controllers/cart');
const productController = require('../controllers/product');
const stockController = require('../controllers/stock');

/*Rota Index*/
router.get('/', generalController.index);
/*Cardapio*/
router.get('/cardapio', menuController.cardapio);
/*Contato*/
router.get('/contato', contactController.contato);
/*Quem Somos*/
router.get('/quemsomos', whoController.quemsomos);
/*Entrar*/
router.get('/entrar', loginController.entrar);
/*Meu Carrinho*/
router.get('/carrinho', cartController.carrinho);
/*Adm Produtos*/
router.get('/admproduct', productController.admproduct);
/*Adm Estoque*/
router.get('/admstock', stockController.admstock);

module.exports = router;