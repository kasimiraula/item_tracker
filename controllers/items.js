
const itemsRouter =require('express').Router()
const Item = require('../models/item')
const User = require('../models/user')

const jwt = require('jsonwebtoken')

itemsRouter.get('/', async (request, response, next) => {
  try {
    const user_id = checkToken(request)
    const items = await Item.find({user: user_id })//.populate({username: 1, name:1})
  response.json(items.map(item=>item.toJSON()))
} catch (error) {
    next(error)
  }
})

itemsRouter.get('/:id', async (request, response, next) => {
  try {
    const user_id = checkToken(request)
    const item = await Item.find({_id:request.params.id, user: user_id })//.populate({username: 1, name:1})
    if (item) {
      response.json(item.toJSON())
    } else {
      response.status(404).end()
    }
} catch (error) {
    next(error)
  }
})

itemsRouter.post('/', async (request, response, next) => {

  const user_id = checkToken(request, response)

  const body=request.body
  const user = await User.findById(user_id)

  if (!body.name) {
    return response.status(400).json({
      error: 'item name is missing'
    })
  }

  const err = await validateItemParams(body, user_id)

  console.log(err)

  if (err.length > 0) {
    return response.status(400).json({
      error: err
    })
  }

  try {
    const item = new Item({
      name: body.name,
      units: body.units,
      use: [],
      common_usecases: body.common_usecases||[],
      user: user._id
    })

    const savedItem = await item.save()
    user.items = user.items.concat(savedItem._id)
    await user.save()
    response.status(200).json(savedItem.toJSON())

  } catch (error) {
    next(error)
  }
})

itemsRouter.post('/:id/use', async (request, response, next) => {
  const body = request.body
  const newUse = {
    date: body.date,
    amount: body.amount
  }
  try {

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

      if (!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
      }

    const item = await Item.findById(request.params.id)
    if (item) {
      item.use = item.use.concat(newUse)
      const updatedItem = await Item.findByIdAndUpdate(request.params.id, item, { new: true })
      response.json(updatedItem.toJSON())
    } else {
      response.status(400).end()
    }
  } catch (error) {
    next(error)
  }
})

itemsRouter.put('/:id', (request, response, next) => {

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

  const body = request.body
  const item = new Item({
    _id: request.params.id,
    name: body.name,
    units: body.units,
    use: body.use,
    common_usecases: body.common_usecases
  })

  Item.findByIdAndUpdate(request.params.id, item, { new: true })
    .then(updatedItem=> {
      response.json(updatedItem.toJSON())
    }).catch(error=>next(error))

})

itemsRouter.delete('/:id', (request, response, next) => {

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

  Item.findById(request.params.id).then(item => {
    if (item) {
      Item.remove(item).then(response.status(204).end())
    } else {
      response.status(404).end()
    }
  }).catch(error=>next(error))
})

const checkToken = (request, response) => {
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  return  decodedToken.id
}

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}


// have to heck that user doesnt have an item with the same name
const validateItemParams = async (body, user_id) => {
  let items = await Item.find({name: body.name, user: user_id})

  let err = ''

  if (items.length >0) {
    err = 'item name is already taken'
  } else if (body.name.length < 2) {
    err = 'item name has to be at least 2 digits long'
  }

  return err
}
module.exports = itemsRouter
