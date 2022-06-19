const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.send('User New Form')
})

router.post('/', (req, res) => {
  res.send('Create User')
})

router.get('/:userId', (req, res) => {
  res.send(`Create User With ID ${req.params.userId}`)
})

module.exports = router
