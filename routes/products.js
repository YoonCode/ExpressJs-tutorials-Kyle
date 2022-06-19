const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Product List')
})

router.get('/new', (req, res) => {
  res.send('Product New Form')
})

router.post('/', (req, res) => {
  res.send('Create Product')
})

router.get('/:prodId', (req, res) => {
  res.send(`Create Product With ID ${req.params.prodId}`)
})

module.exports = router
