const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      match: /^[0-9]{0,11}$/,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
})

const contact = mongoose.model('contact', postSchema)

module.exports = {
    contact
} 