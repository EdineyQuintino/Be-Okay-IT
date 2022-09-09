const yup = require('yup')

const schemaEmpresa = yup.object().shape({
  cnpj: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, 'CNPJ deve conter apenas numeros')
    .length(14, 'CNPJ deve conter 14 caracteres Numericos'),
  nome: yup
    .string()
    .min(5, 'Nome de no minimo 5 caracteres')
    .max(50, 'Nome de no maximo de 50 caracteres')
    .required('Nome da Empresa '),
  data_fundacao: yup
    .date('Data deve ser no formato yyy-mm-dd')
    .min(new Date('1900-01-01'), 'Data da fundação deve ser maior que 1900-01-01')
    .max(new Date(), `Data da fundação deve ser menor que data atual - ${new Date().toLocaleString()}`)
    .required('Data e Obrigatoria'),
  valor_hora: yup
    .number()
    .required('Valor hora')
})
const validationEmpresa = async (body) => {
  await schemaEmpresa.validate(body)
}

module.exports = { schemaEmpresa, validationEmpresa }
