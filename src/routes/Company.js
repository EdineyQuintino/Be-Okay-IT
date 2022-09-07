const express = require('express');

const companyController = require('../controllers/companyController');

const validation = require('../middlewares/validationMiddleware');
const schema = require('../validations/companyValidation')

const routes = express.Router();

routes.get('/company', companyController.index);
routes.post('/company', validation(schema), companyController.create);

module.exports = routes;
