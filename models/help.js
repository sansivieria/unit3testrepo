const { Schema, model } = require('mongoose');


const seanSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true}
}, {
  timestamps: true
})

module.exports = model('Comment', seanSchema)
