const express = require('express')
const app = express()

// para setarmos rotas fazemos da seguinte maneira -->

app.get('/', (req, res) => {
  res.send('<h1>Minha lista de tarefas</h1>')
})

// como devolver respostas JSON

app.get('/json', (req, res) => {
  res.json({title: 'Tarefa X', done: true})
})

app.listen('3000', () => {
  console.log('Servidor foi iniciado!!')
})