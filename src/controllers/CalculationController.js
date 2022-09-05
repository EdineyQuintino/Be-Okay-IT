const connection = require('../database/prismaClient');

module.exports = {
    async create(req,res){
       try {
        const {cnpj,data_inicio,data_fim} = req.body;
        const calculation = await connection.calculation.create({
            data: {
                cnpj,
                data_inicio,
                data_fim
            }
        })
        return res.status(200).json(calculation);
       } catch (error) {
        
       }
    }
}