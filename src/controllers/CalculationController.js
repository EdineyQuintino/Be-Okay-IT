const connection = require('../database/prismaClient');

module.exports = {
    async create(req, res) {
        try {
            const { cnpj_id, data_inicio, data_fim} = req.body;

            const dataInicio = new Date(data_inicio);
            const dataFim = new Date(data_fim);

            const calculation = await connection.Calculation.create({
                data: {
                    cnpj_id,
                    data_inicio:dataInicio,
                    data_fim:dataFim,
                    
                }
            })
            return res.status(200).json(calculation);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};