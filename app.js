const express = require('express')
const checkListRouter = require('./src/routes/checkList')
require('./config/database')

const app = express()

// // Middlewares
app.use(express.json())

app.use('/checklist', checkListRouter)

//

app.listen('3000', () => {
  console.log('Servidor foi iniciado!!')
})