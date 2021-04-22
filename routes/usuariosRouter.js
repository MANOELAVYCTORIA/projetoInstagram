var express = require('express');
var router = express.Router();
const usuariosController = require('../Controller/usuariosController')
const ValidarCadrasto = require('../middlewares/ValidarCadastro')

/* GET users listing. */
router.get('/', usuariosController.index);
router.get('/login', usuariosController.login);
router.get('/registro', usuariosController.registro);
router.post('/', ValidarCadrasto, usuariosController.create);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);
module.exports = router;
