const { validationCalculo } = require("../validations/calculoValidation");
const serviceCalculo = require("../services/calculoService");

module.exports = {

  async valorHora(req, res) {
    try {
      await validationCalculo(req.body);
      const calculo = await serviceCalculo.calculoValorTotal(req.body);

      return res.status(200).json(calculo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
