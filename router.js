const express = require('express');
const PaginasController = require('./controllers/PaginasController');

const router = express.Router();

router.get('/',  PaginasController.showIndex);

router.get('/carrinho', PaginasController.showCarrinho);

router.get('/perfil', PaginasController.showPerfil);

router.get('/cadastro', PaginasController.showCadastro);

module.exports = router;
