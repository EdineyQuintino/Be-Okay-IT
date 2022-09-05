require('dotenv').config();
const express = require('express');

const CompanyRoutes = require('./routes/Company');

const app = express();

const PORT = process.env.PORT || 3334;
app.use(express.json());

app.use(CompanyRoutes);

app.listen(PORT, ()=>{
    console.log('Running on port', PORT);
});