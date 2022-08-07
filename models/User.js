const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18, max: 65
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('users', userSchema)