const routes = require('express').Router();
const empresaController = require('../controllers/empresaController');

routes.get('/empresa', empresaController.index);
routes.post('/empresa', empresaController.create);

module.exports = routes;
