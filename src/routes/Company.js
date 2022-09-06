const express = require('express');

const CompanyController = require('../controllers/CompanyController');

const validation = require('../middlewares/validationMiddleware');
const schema = require('../validations/companyValidation')

const routes = express.Router();

routes.get('/company', CompanyController.index);
routes.post('/company', validation(schema), CompanyController.create);


module.exports = routes;