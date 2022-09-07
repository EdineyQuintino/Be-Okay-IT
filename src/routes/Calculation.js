const express = require('express');

const calculationController = require('../controllers/calculationController');

const validation = require('../middlewares/validationMiddleware');
const schema = require('../validations/calculationValidation')

const routes = express.Router();

routes.get('/calculation', calculationController.index);
routes.post('/calculation', validation(schema), calculationController.create);

module.exports = routes;
