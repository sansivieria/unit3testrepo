const { Schema, model } = require('mongoose');



const locustSchema = new Schema({
  title: { type: String, required: true, unique: true },
  body: String,
  comments: [ { type: Schema.Types.ObjectId, ref: 'Ask' } ]
}, {
  timestamps: true
})


module.exports = model('Ask', locustSchema )
