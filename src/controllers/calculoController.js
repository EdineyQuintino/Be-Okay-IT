const connection = require('../database/prismaClient');

module.exports = {
    async create(req, res) {
        try {
            const { cnpj_id, date_start, date_theend } = req.body;
            const dateStart = new Date(date_start);
            const dateTheend = new Date(date_theend);

            const calculation = await connection.calculation.create({
                data: {
                    cnpj_id,
                    date_start: dateStart,
                    date_theend: dateTheend,
                }
            });
            const result = await connection.$queryRaw`SELECT TIMESTAMPDIFF(DAY,date_start,date_theend-8)*8*value_hour as 'Calculo' from calculation join company on calculation.cnpj_id = company.cnpj where cnpj_id = ${cnpj_id};`

            return res.status(200).json({ calculation, result });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};
