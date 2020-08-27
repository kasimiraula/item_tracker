
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    required: true
  },
  units: {
    type: String,
    minlength: 1,
    required: true
  },
  common_usecases: Array,
  use: [{
    amount : Number,
    date : String
     }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Item', itemSchema)
