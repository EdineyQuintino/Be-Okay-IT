const yup = require('yup');

const schema = yup.object().shape({
    name: yup.string.require('Nome da Empresa'),
    cnpj: yup.string().length(14, 'CNPJ deve conter 14 caracteres Numericos').required('CNPJ Requerido'),
    data_fundacao: yup.string(),
    valor_hora: yup.number().required('Valor hora')
});

module.exports = schema;