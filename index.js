const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static('build'))
app.use(cors())

let items = [
  {
    "name": "Bristol",
    "units": "km",
    "usage": [
      {
        "date": "2020-04-30T09:24:19.933Z",
        "amount": 5
      },
      {
        "date": "2020-05-01T09:24:19.933Z",
        "amount": 5
      }
    ],
    "common_usage": [
      1,
      3,
      5,
      10,
      15
    ],
    "id": 1
  },
  {
    "name": "Pelago Stavanger Taxi ",
    "units": "km",
    "usage": [
      {
        "date": "2020-04-30T09:32:14.822Z",
        "amount": 30
      },
      {
        "date": "2020-05-02T09:32:14.822Z",
        "amount": 30
      }
    ],
    "common_usage": [
      5,
      10,
      15,
      30,
      50
    ],
    "id": 2
  },
  {
    "name": "Pelago Stavanger commuter",
    "units": "km",
    "usage": [],
    "common_usage": [
      7,
      15,
      20,
      40
    ],
    "id": 3
  },
  {
    "name": "Surly Karate Monkey",
    "units": "km",
    "usage": [],
    "common_usage": [
      1,
      5,
      10,
      20
    ],
    "id": 4
  },
  {
    "name": "Pelago San Sebastian",
    "units": "km",
    "usage": [],
    "common_usage": [
      1,
      5,
      10,
      15,
      20
    ],
    "id": 5
  },
  {
    "name": "Cinelli Experience",
    "units": "km",
    "usage": [],
    "common_usage": [
      10,
      20,
      30,
      50,
      70
    ],
    "id": 6
  },
  {
    "name": "GT timberline",
    "units": "km",
    "usage": [],
    "common_usage": [
      5,
      10,
      15,
      20,
      25
    ],
    "id": 7
  }
]

  const generateId = () => {
    const maxId = items.length > 0
      ? Math.max(...items.map(n => n.id))
      : 0
    return maxId+1
  }

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  app.get('/api/items', (request, response) => {
    response.json(items)
  })

  app.get('/api/items/:id', (request, response) => {
    const id = Number(request.params.id)
    const item = items.find(item => item.id === id)
    if (item) {
      response.json(item)
    } else {
      response.status(404).end()
    }

  })

  app.delete('/api/items/:id', (request, response) => {
  const id = Number(request.params.id)
  items = items.filter(item => item.id !== id)

  response.status(204).end()
})

  app.post('/api/items', (request, response) => {

    const body = request.body

    if (!body.name) {
      return response.status(400).json({
        error: 'item name is missing'
      })
    }

    const item = {
      name: body.name,
      units: body.units || "km",
      common_usages: body.common_usages||[],
      usages: [],
      id: generateId(),
    }

    items = items.concat(item)

    response.json(item)
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
