const connection = require('../database/prismaClient');

async function calculoValorTotal({ cnpj, data_inicio, data_fim }) {
    const dataMes = new Date(data_fim) - new Date(data_inicio)
    const dataDias = dataMes / (1000 * 60 * 60 * 24);

    const result = await connection.$queryRaw`SELECT Concat('R$ ',format((valor_hora)*${dataDias-8}*8,2,'de_DE')) 'Calculo' from Empresa where cnpj = ${cnpj};`
    return result;
};

module.exports = { calculoValorTotal };
