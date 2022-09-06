const express = require('express');

const CalculationController = require('../controllers/CalculationController');

const validation = require('../middlewares/validationMiddleware');
const schema = require('../validations/calculationValidation')

const routes = express.Router();

//routes.get('/calculation', CalculationController.index);
routes.post('/calculation', validation(schema), CalculationController.create);



module.exports = routes;