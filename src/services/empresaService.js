const empresaModel = require('../models/empresaModel');

async function insertEmpresa(body) {
    const { cnpj, nome, data_fundacao, valor_hora } = body;
    const date = new Date(data_fundacao)

    const empresa = await empresaModel.createEmpresa({
        cnpj,
        nome,
        data_fundacao: date,
        valor_hora
    });
    return empresa;
};
async function buscarEmpresas() {
    const empresas = await empresaModel.buscarEmpresas();

    return empresas;
}
module.exports = { insertEmpresa, buscarEmpresas };
