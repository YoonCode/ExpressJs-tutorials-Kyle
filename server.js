const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
  console.log('Home Page')
  res.send('Home Page')
})

app.get('/users', auth, (req, res) => {
  console.log('User Page')
  res.send('User Page')
})

function logger(req, res, next) {
  console.log('Log')
  next()
}

function auth(req, res, next) {
  if (req.query.admin === 'true') {
    next()
  } else {
    res.send('No auth')
  }
}

app.listen(3000)
