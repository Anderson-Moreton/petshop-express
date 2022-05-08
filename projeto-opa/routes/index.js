var express = require('express');
const generalController = require('../controllers/main');
var router = express.Router();

/*Rota Index*/
router.get('/', generalController.index);
/*Cardapio*/
router.get('/cardapio', generalController.cardapio);
/*Contato*/
router.get('/contato', generalController.contato);
/*Quem Somos*/
router.get('/quemsomos', generalController.quemsomos);
/*Entrar*/
router.get('/entrar', generalController.entre);
/*Meu Carrinho*/
router.get('/carrinho', generalController.carrinho);

module.exports = router;