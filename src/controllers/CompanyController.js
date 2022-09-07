const connection = require('../database/prismaClient');

module.exports = {
    async index(req, res) {
        try {
            const company = await connection.company.findMany();

            return res.status(200).json(company);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
    async create(req, res) {
        try {
            const { name, cnpj, date_foundation, value_hour } = req.body;
            const date = new Date(date_foundation);

            const company = await connection.company.create({
                data: {
                    name,
                    cnpj,
                    date_foundation: date,
                    value_hour
                }
            })
            return res.status(200).json(company);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};
