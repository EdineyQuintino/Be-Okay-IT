const connection = require('../database/prismaClient');

async function calculo(body) {
    const { cnpj, data_inicio, data_fim } = body;
    const diffInMs = new Date(data_fim) - new Date(data_inicio)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    const calculo = {
        data: {
            cnpj,
            data_inicio,
            data_fim,
        }
    };

    const result = await connection.$queryRaw`SELECT valor_hora*${diffInDays - 8}*8 as 'Calculo' from Empresa where cnpj = ${cnpj};`

    return result;
};

module.exports = { calculo };
