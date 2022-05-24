var express = require('express');
var router = express.Router();
const generalController = require('../controllers/main');
const menuController = require('../controllers/main');
const contactController = require('../controllers/main');
const whoController = require('../controllers/main');
const loginController = require('../controllers/main');
const cartController = require('../controllers/main');
const productController = require('../controllers/main');
const stockController = require('../controllers/main');

/*Rota Index*/
router.get('/', generalController.index);
/*Cardapio*/
router.get('/cardapio', menuController.cardapio);
/*Contato*/
router.get('/contato', contactController.contato);
/*Quem Somos*/
router.get('/quemsomos', whoController.quemsomos);
/*Entrar*/
router.get('/entrar', loginController.entre);
/*Meu Carrinho*/
router.get('/carrinho', cartController.carrinho);
/*Adm Produtos*/
router.get('/admProduct', productController.admProduct);
/*Adm Estoque*/
router.get('/admStock', stockController.admStock);

module.exports = router;