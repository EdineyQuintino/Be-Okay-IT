const express = require('express');

const calculoController = require('../controllers/calculoController');

//const validation = require('../middlewares/validationMiddleware');
//const schema = require('../validations/calculationValidation')

const routes = express.Router();

//routes.get('/calculculo', calculoController.index);
routes.post('/calculation', calculoController.create);

module.exports = routes;
