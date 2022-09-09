require('dotenv').config()
const express = require('express')

const empresaRoutes = require('./routes/empresa')
const calculoRoutes = require('./routes/calculo')
const app = express()

const PORT = process.env.PORT || 3334
app.use(express.json())

app.use(empresaRoutes)
app.use(calculoRoutes)

app.listen(PORT, () => {
  console.log('Running on port', PORT)
})
