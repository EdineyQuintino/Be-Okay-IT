const connection = require('../database/prismaClient');

module.exports = {
async index(req,res){
    try {
        const company = await connection.company.findMany();

        return res.status(200).json(company);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
},
async create(req,res){
    try {
        const {name,cnpj,data_fundacao,valor_hora} = req.body;
        const data = new Date(data_fundacao);
   
       
        const company = await connection.company.create({
            data: {
                name,
                cnpj,
                data_fundacao:data,
                valor_hora
            }
        })
        return res.status(200).json(company); 
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
};