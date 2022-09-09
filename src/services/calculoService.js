const datefns = require('date-fns');
const empresaModel = require('../models/empresaModel');
const feriadoModel = require('../models/feriadoModel');

const HORASDIA = 8;
function validaFeriado(feriados, dataAtual) {

    const dia = datefns.getDate(new Date(dataAtual))
    const mes = datefns.getMonth(new Date(dataAtual))
    const ano = datefns.getYear(new Date(dataAtual))

    const feriado = feriados.find((dataFeriado) => {

        const diaFeriado = datefns.getDate(dataFeriado.data)
        const mesFeriado = datefns.getMonth(dataFeriado.data)
        const anoFeriado = datefns.getYear(dataFeriado.data)

        return dia == diaFeriado && mes == mesFeriado && ano == anoFeriado
    })
    if (feriado) {
        return true
    } else {
        return false
    }
}

function formatarValorTotal(valor) {
  const valorFinal =  valor.toFixed(2).replace('.',',')
  return {valor_calculado:valorFinal}
}

async function calculoValorTotal({ cnpj, data_inicio, data_fim }) {
    const empresa = await empresaModel.buscarEmpresaPorCnpj(cnpj)

    const datainicio = new Date(`${data_inicio}T00:00:00`);
    const datafim = new Date(`${data_fim}T00:00:00`);

    const intervaloDeDatas = datefns.eachDayOfInterval({
        start: datainicio,
        end: datafim
    })
    const intervaloDeDias = intervaloDeDatas.length;
    const feriados = await feriadoModel.buscarFeriados()

    let diasUteis = 0;
    let dataAtual = datainicio;

    for (let index = 0; index < intervaloDeDias; index++) {
        if (datefns.isWeekend(dataAtual)) {
            diasUteis = diasUteis
        } else {
            const feriadoValido = validaFeriado(feriados, dataAtual)
            if (feriadoValido) {
                diasUteis = diasUteis
            } else {
                diasUteis++;
            }
        }
        dataAtual = datefns.add(dataAtual, { days: 1 })
    }
    const valorTotal = diasUteis * empresa.valor_hora * HORASDIA;
    return formatarValorTotal(valorTotal);
};

module.exports = { calculoValorTotal };
