const yup = require('yup');

const schema = yup.object().shape({
    cnpj_id: yup.string().required().matches(/^[0-9]+$/, "CNPJ deve conter apenas numeros").length(14, 'CNPJ deve conter 14 caracteres Numericos'),
    data_inicio: yup.date(new Date()).required('Data deve ser da sequinte forma ANO-MES-DIA'),
    data_fim: yup.date(new Date()).required('Data deve ser da sequinte forma ANO-MES-DIA'),
});

module.exports = schema;