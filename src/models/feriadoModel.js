const connection = require('../database/prismaClient')

async function buscarFeriados () {
  const feriados = await connection.feriado.findMany()
  return feriados
}

module.exports = { buscarFeriados }
