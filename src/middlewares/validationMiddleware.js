const validation = (schema) => async (req, res, next) => {
    const company = req.body;
    try {
        await schema.validate(company);
        next();
    } catch (error) {
        return res.status(400).json({ error });
    }
};

module.exports = validation;
