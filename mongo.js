const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://itemtracker:${password}@cluster1-p7n3s.mongodb.net/test?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const itemSchema = new mongoose.Schema({
  name: String,
  units: String,
  usage: Array,
  common_usage: Array,
})

const Item = mongoose.model('Item', itemSchema)

const item = new Item({
  name: "GT timberline",
  units: "km",
  usage: [],
  common_usage: [
    5,
    10,
    15,
    20,
    25
  ]
})

item.save().then(response => {
  console.log('item saved!')
  mongoose.connection.close()
})

/*
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
]*/
