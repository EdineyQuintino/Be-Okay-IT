const yup = require('yup');

const schema = yup.object().shape({
    name: yup.string().min(5,'Nome de no minimo 5 caracteres').max(50,'Nome de no maximo de 50 caracteres').required('Nome da Empresa '),
    cnpj: yup.string().required().matches(/^[0-9]+$/, "CNPJ deve conter apenas numeros").length(14, 'CNPJ deve conter 14 caracteres Numericos'),
    data_fundacao: yup.date(new Date()).required('Data deve ser da sequinte forma ANO-MES-DIA'),
    valor_hora: yup.number().required('Valor hora')
});

module.exports = schema;