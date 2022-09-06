const express = require('express');

const CalculationController = require('../controllers/CalculationController');

//const validation = require('../middlewares/validationMiddleware');
//const schema = require('../validations/companyValidation')

const routes = express.Router();

//routes.get('/calculation', CalculationController.index);
routes.post('/calculation', CalculationController.create);
//validation(schema),


module.exports = routes;