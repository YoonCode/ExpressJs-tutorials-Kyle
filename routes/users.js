const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
  console.log(req.query.name)
  res.send(`User List : Hi, this is ${req.query.name}'s homepage!`)
})

router.get('/new', (req, res) => {
  res.render('users/new', { firstName: 'Test' })
})

router.post('/', (req, res) => {
  const isValid = true
  if (isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log('Error')
    res.redirect('users/new', { firstName: req.body.firstName })
  }
})

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user)
    res.send(`Create User with ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`)
  })

const users = [{ name: 'Sangjin' }, { name: 'Jinsol' }]
router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
