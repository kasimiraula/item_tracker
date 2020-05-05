const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const User = mongoose.model('User', {
  username: String,
  name: String,
  passwordHash: String,
  adult: Boolean,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
})

module.exports = User
