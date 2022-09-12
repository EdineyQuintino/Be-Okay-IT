const { validationEmpresa } = require('../validations/empresaValidation')
const serviceEmpresa = require('../services/empresaService')

async function index(req, res) {
  try {
    const empresas = await serviceEmpresa.buscarEmpresas()

    return res.status(200).json(empresas)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

async function create(req, res) {
  try {
    await validationEmpresa(req.body)
    const empresa = await serviceEmpresa.insertEmpresa(req.body)

    return res.status(200).json(empresa)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}
module.exports = { index, create }
