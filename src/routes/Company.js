const express = require('express');

const CompanyController = require('../controllers/CompanyController');

const routes = express.Router();

routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.create);


module.exports = routes;