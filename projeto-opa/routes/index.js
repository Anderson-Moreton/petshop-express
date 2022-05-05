var express = require('express');
const generalController = require('../controllers/main');
var router = express.Router();

router.get('/', generalController.index);

module.exports = router;
