const express = require('express');

const empresaController = require('../controllers/empresaController');

//const validation = require('../middlewares/validationMiddleware');
//const schema = require('../validations/companyValidation')

const routes = express.Router();

routes.get('/empresa', empresaController.index);
routes.post('/empresa',  empresaController.create);

module.exports = routes;
