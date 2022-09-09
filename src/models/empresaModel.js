const connection = require('../database/prismaClient')

async function createEmpresa ({ cnpj, nome, data_fundacao, valor_hora }) {
  const empresa = await connection.empresa.create({
    data: {
      cnpj,
      nome,
      data_fundacao,
      valor_hora
    }
  })
  return empresa
}

async function buscarEmpresas () {
  const empresas = await connection.empresa.findMany()

  return empresas
}

async function buscarEmpresaPorCnpj (cnpj) {
  const empresas = await connection.empresa.findUnique({
    where: {
      cnpj
    }
  })

  return empresas
}

module.exports = { createEmpresa, buscarEmpresas, buscarEmpresaPorCnpj }
