const routes = require('express').Router();
const calculoController = require('../controllers/calculoController');

routes.post('/calculo', calculoController.post);

module.exports = routes;
