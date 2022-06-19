const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Product List')
})

router.get('/new', (req, res) => {
  res.send('Product New Form')
})

module.exports = router
