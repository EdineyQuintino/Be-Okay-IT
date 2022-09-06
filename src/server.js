require('dotenv').config();
const express = require('express');

const CompanyRoutes = require('./routes/Company');
const CalculationRoutes = require('./routes/Calculation');
const app = express();

const PORT = process.env.PORT || 3334;
app.use(express.json());

app.use(CompanyRoutes);
app.use(CalculationRoutes);

app.listen(PORT, ()=>{
    console.log('Running on port', PORT);
});