

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/items', (request, response) => {
  Item.find({}).then(items=>
    response.json(items.map(item=>item.toJSON()))
  )
})

app.get('/api/items/:id', (request, response) => {
  try {
    Item.findById(request.params.id).then(item=>{
      response.json(item.toJSON())
    })
  } catch (e) {
    response.status(404).end()
  }
})

app.post('/api/items', async (request, response) => {
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
    common_usecase: body.common_usecase||[]
  })

  const savedItem = await item.save()
  response.json(item.toJSON())
})

app.post('/api/items/:id/use', async (request, response) => {

})

app.delete('/api/items/:id', async (request, response) => {
  item = await Item.findById(request.params.id)
  await Item.remove(item)
  response.status(204).end()
})

app.put('/api/items/:id', (request, response) => {
  const body = request.body
  const item = new Item({
    name: body.name,
    units: body.units,
    usage: body.use,
    common_usecase: body.common_usecase
  })

  Item.findByIdAndUpdate(request.params.id, item, { new: true })
  response.status(204).end()
})
