var express = require('express');
var router = express.Router();
const usuariosController = require('../Controller/usuariosController')

/* GET users listing. */
router.get('/', usuariosController.index);
router.post('/', usuariosController.create);

module.exports = router;
