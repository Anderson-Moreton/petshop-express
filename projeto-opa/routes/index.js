const express = require('express');
const router = express.Router();
const generalController = require('../controllers/main');
const contactController = require('../controllers/contact');
const aboutUsController = require('../controllers/aboutUs');
const { userController, loggedUser } = require('../controllers/user');
const cartController = require('../controllers/cart');

/*Home*/
router.get('/', generalController.home);

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

module.exports = router;