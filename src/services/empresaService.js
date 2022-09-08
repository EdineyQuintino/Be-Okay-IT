const empresaModel = require('../models/empresaModel');

async function insertEmpresa(empresa) {
    const { cnpj, nome, data_fundacao, valor_hora } = empresa;
    const date = new Date(data_fundacao);

    const empresaExiste = await empresaModel.buscarEmpresaPorCnpj(cnpj);
    if (empresaExiste) {
        throw { message: "CNPJ ja Existe" };
    };

    const novaEmpresa = await empresaModel.createEmpresa({
        cnpj,
        nome,
        data_fundacao: date,
        valor_hora
    });
    return novaEmpresa;
};

async function buscarEmpresas() {
    const empresas = await empresaModel.buscarEmpresas();

    return empresas;
}
module.exports = { insertEmpresa, buscarEmpresas };
