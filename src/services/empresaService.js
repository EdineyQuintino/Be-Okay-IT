const connection = require('../database/prismaClient');

async function insertEmpresa(body) {
    const { cnpj, nome, data_fundacao, valor_hora } = body;
    const date = new Date(data_fundacao)

    const empresa = await connection.empresa.create({
        data: {
            cnpj,
            nome,
            data_fundacao: date,
            valor_hora
        }
    });

    return empresa;
}

module.exports = { insertEmpresa };
