const Item = require('./models/item')
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/items', (request, response, next) => {
  Item.find({}).then(items=>
    response.json(items.map(item=>item.toJSON()))
  ).catch(error=>next(error))
})

app.get('/api/items/:id', (request, response, next) => {
  Item.findById(request.params.id).then(item=>{
    if (item) {
      response.json(item.toJSON())
    } else {
      response.status(404).end()
    }
  }).catch(error=>next(error))
})

app.post('/api/items', (request, response, next) => {

  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'item name is missing'
    })
  }

  const item = new Item({
    name: body.name,
    units: body.units,
    use: [],
    common_usecases: body.common_usecases||[]
  })

  item.save().then(savedItem => {
    response.json(item.toJSON())
  })
})

app.post('/api/items/:id/use', async (request, response) => {
  const body = request.body
  const newUse = {
    date: body.date,
    amount: body.amount
  }
  console.log(newUse)
  try {
    const item = await Item.findById(request.params.id)
    if (item) {
      item.use = item.use.concat(newUse)
      console.log(item.use)
      const updatedItem = await item.save()
      response.json(updatedItem.toJSON())
    } else {
      response.status(400).end()
    }
  } catch (error) {
    next(error)
  }
})

app.put('/api/items/:id', (request, response, next) => {
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

app.delete('/api/items/:id', (request, response, next) => {
  Item.findById(request.params.id).then(item => {
    if (item) {
      Item.remove(item).then(response.status(204).end())
    } else {
      response.status(404).end()
    }
  }).catch(error=>next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
  return response.status(400).json({ error: error.message })
}

  next(error)
}

app.use(errorHandler)

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' }
  )}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
