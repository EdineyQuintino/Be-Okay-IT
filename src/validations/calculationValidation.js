const yup = require('yup');

const schema = yup.object().shape({
    cnpj_id: yup.string().required().matches(/^[0-9]+$/, "CNPJ deve conter apenas numeros").length(14, 'CNPJ deve conter 14 caracteres Numericos'),
    date_start: yup.date(new Date()).required('Data deve conter Ano, Mês e Dia'),
    date_theend: yup.date(new Date()).required('Data deve conter Ano, Mês e Dia'),
});

module.exports = schema;
