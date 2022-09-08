const connection = require("../database/prismaClient");
const { validationCalculo } = require("../validations/calculoValidation");
const serviceCalculo = require("../services/calculoService");

module.exports = {

  async post(req, res) {
    try {
      await validationCalculo(req.body);
      const calculo = await serviceCalculo.calculo(req.body);

      return res.status(200).json(calculo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
