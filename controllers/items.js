
const itemsRouter =require('express').Router()
const Item = require('../models/item')

itemsRouter.get('/', (request, response, next) => {
  Item.find({}).then(items=>
    response.json(items.map(item=>item.toJSON()))
  ).catch(error=>next(error))
})

itemsRouter.get('/:id', (request, response, next) => {
  Item.findById(request.params.id).then(item=>{
    if (item) {
      response.json(item.toJSON())
    } else {
      response.status(404).end()
    }
  }).catch(error=>next(error))
})

itemsRouter.post('/', async (request, response, next) => {
  const body=request.body
  console.log(body)
  if (!body.name) {
    return response.status(400).json({
      error: 'item name is missing'
    })
  }

  const err = validateItemParams(body)

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
      common_usecases: body.common_usecases||[]
    })

    const savedItem = await item.save()
    response.json(savedItem.toJSON())

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
  Item.findById(request.params.id).then(item => {
    if (item) {
      Item.remove(item).then(response.status(204).end())
    } else {
      response.status(404).end()
    }
  }).catch(error=>next(error))
})

const validateItemParams = async (body) => {
  let items = await Item.find({name: body.name})

  let err = ''

  if (items.length >0) {
    err = 'item name is already taken'
  } else if (body.name.length < 2) {
    err = 'item name has to be at least 2 digits long'
  }

  return err
}
module.exports = itemsRouter
