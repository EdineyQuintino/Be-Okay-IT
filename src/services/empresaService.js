const cnpjValida = require('js-cnpj-validation'); 
const empresaModel = require('../models/empresaModel');

function validaCnpj(cnpj){
const c =   cnpjValida.isValidCNPJ(cnpj)
console.log(c)
return c
    }
       
async function insertEmpresa(empresa) {
    const { cnpj, nome, data_fundacao, valor_hora } = empresa;
    const date = new Date(data_fundacao);
     
    const cnpjValido = validaCnpj(cnpj);
    if(cnpjValido==false){
        throw { message: "CNPJ invalido"}
    }

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
