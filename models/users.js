const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory'],
  },
  age: {
    type: Number,
    required: [true, 'Age is mandatory'],
  },
})

module.exports = mongoose.model('Users', userSchema)

// module.exports = userModel
