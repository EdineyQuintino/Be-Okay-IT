const connection = require("../database/prismaClient");
const { validationEmpresa } = require("../validations/empresaValidation");
const serviceEmpresa = require("../services/empresaService");

module.exports = {
  async index(req, res) {
    try {
      const empresa = await connection.empresa.findMany();

      return res.status(200).json(empresa);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      await validationEmpresa(req.body);
      const empresa = await serviceEmpresa.insertEmpresa(req.body);

      return res.status(200).json(empresa);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
