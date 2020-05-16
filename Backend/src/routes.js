const express = require('express');
const routes = express.Router();

const cadastroVendedorController = require('./controllers/cadastroVendedorController');
const cadastroClienteController = require('./controllers/cadastroClienteController');

const loginVendedorController = require('./controllers/loginVendedorController');
const loginClienteController = require('./controllers/loginClienteController');

const produtoController = require('./controllers/produtoController');

const vendedorController = require('./controllers/vendedorController')

routes.post('/cadastroVendedorController', cadastroVendedorController.create);
routes.post('/cadastroClienteController', cadastroClienteController.create);

routes.post('/loginVendedorController', loginVendedorController.create);
routes.post('/loginClienteController', loginClienteController.create);

routes.get('/produtoslistar', produtoController.index);
routes.post('/produtoController', produtoController.create);
routes.delete('/produtos/:id', produtoController.delete);

//routes.get('/vendedorinfo', vendedorController.index);
routes.post('/vendedorinfoalter', vendedorController.alter);










module.exports = routes;