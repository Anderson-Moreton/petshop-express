const express = require('express');
const router = express();
const cardapioController=require('../controllers/cardapioControllers')

router.get('/',cardapioController.cardapio);
router.get('/burguer',cardapioController.cardapioBurguer);
router.get('/dog',cardapioController.cardapioDog);
router.get('/porcoes',cardapioController.cardapioPorcoes);
router.get('/bebidas',cardapioController.cardapioBebidas);

module.exports =router;