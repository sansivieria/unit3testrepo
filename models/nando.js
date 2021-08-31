const { Schema, model } = require('mongoose');


const nandoSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  comment: { type: String, required: true},
}, {
  timestamps: true
})

module.exports = model('Smack', nandoSchema)
