require('dotenv').config();
const express = require('express');

const companyRoutes = require('./routes/company');
const calculationRoutes = require('./routes/calculation');
const app = express();

const PORT = process.env.PORT || 3334;
app.use(express.json());

app.use(companyRoutes);
app.use(calculationRoutes);

app.listen(PORT, ()=>{
    console.log('Running on port', PORT);
});