const connection = require('../database/prismaClient');

async function calculo(body) {
    const { cnpj, data_inicio, data_fim } = body;
    const dataInicio = new Date(data_inicio);
    const dataFim = new Date(data_fim);

    const calculo = {
        data: {
            cnpj,
            data_inicio: dataInicio,
            data_fim: dataFim,
        }
    };
    /*console.log(calculo)
    //const result = await connection.$queryRaw`SELECT TIMESTAMPDIFF(DAY,${data_inicio},${data_fim}-8)*8*valor_hora as 'Calculo' from Empresa where cnpj = ${cnpj};`
    const result = await connection.$queryRaw`SELECT valor_hora from Empresa where cnpj = ${cnpj};`*/
    return cal = TIMESTAMPDIFF(DAY,data_inicio,data_fim-8)*8;  
}

module.exports = { calculo };