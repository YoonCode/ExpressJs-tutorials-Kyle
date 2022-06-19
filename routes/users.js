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

router
  .route('/:userId')
  .get((req, res) => {
    console.log(req.user)
    res.send(`Create User With ID ${req.params.userId}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.userId}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.userId}`)
  })

const users = [{ name: 'Sangjin' }, { name: 'Jinsol' }]
router.param('userId', (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router
