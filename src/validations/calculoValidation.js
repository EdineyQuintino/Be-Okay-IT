const yup = require('yup')

const schemaCalculo = yup.object().shape({
  cnpj: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, 'CNPJ deve conter apenas numeros')
    .length(14, 'CNPJ deve conter 14 caracteres Numericos'),
  data_inicio: yup
    .date()
    .required('Data deve conter Ano, Mês e Dia'),
  data_fim: yup
    .date()
    .required('Data deve conter Ano, Mês e Dia')
})

const validationCalculo = async (body) => {
  await schemaCalculo.validate(body)
}

module.exports = { schemaCalculo, validationCalculo }
