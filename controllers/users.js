const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  .populate('items')

  response.json(users.map(user=>user.toJSON()))
})

usersRouter.post('/', async (request, response) => {

  try {
    const body = request.body
    // fix this later
    // const body = await validateParams(request.body, response)
    if (body === null) {
      return response.status(400).send()
    } else {
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(body.password, saltRounds)
      const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
      })

      const savedUser = await user.save()
      response.json(savedUser)
    }
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

const validateParams = async (body, response) => {

  let err = await validateUsername(body)
  console.log(err)
  //err ? true : err = validatePassword(body)

  if (err.length > 0)  {
    response.status(400).send({ error: err})
    body = null
  }
  return body
}

const validatePassword = (body) => {
  let err = ''
  body.password.lengh > 3 ? true : err = 'password has to be at least 3 digits'
  return err
}

const validateUsername = async (body) => {
  let users = await User.find({username: body.username})

  let err = ''

  if (users.length >0) {
    err = 'username is already taken'
  } else if (body.username.length < 3) {
    err = 'username has to be at least 3 digits long'
  }

  return err
}

module.exports = usersRouter
