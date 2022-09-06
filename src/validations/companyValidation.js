const yup = require('yup');

const schema = yup.object().shape({
    name: yup.string().required('Nome da Empresa'),
    cnpj: yup.string().length(14, 'CNPJ deve conter 14 caracteres Numericos'),
    data_fundacao: yup.string().required(),
    valor_hora: yup.number().required('Valor hora')
});

module.exports = schema;