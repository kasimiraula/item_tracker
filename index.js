const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const itemsRouter = require('./controllers/items')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')

const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use('/api/items', itemsRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

logger.info(`connecting to ${config.MONGODB_URI}`)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })


app.get('/', (request, response) => {
  response.send('<h1>Hello World (or you)!</h1>')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
app.use(middleware.requestLogger)

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
