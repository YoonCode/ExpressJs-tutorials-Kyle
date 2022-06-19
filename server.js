const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
  console.log('Home Page')
  res.send('Home Page')
})

app.get('/users', (req, res) => {
  console.log('User Page')
  res.send('User Page')
})

function logger(req, res, next) {
  console.log('Log')
  next()
}

app.listen(3000)
