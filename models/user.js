const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const User = mongoose.model('User', {
  username: String,
  name: String,
  passwordHash: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Item', itemSchema)
module.exports = User
