const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('Here')
  // res.send('Hi')
  // res.sendStatus(500)
  // res.status(500).send('Helllo')
  res.status(500).json({ message: 'Error' })
})

app.listen(3000)
