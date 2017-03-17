const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'trips'

const TripSchema = new Schema({
  title: { type: String, required: true },
  titleUri: { type: String, required: true },
  description: { type: String, required: true },
  destinations: [{type: Schema.ObjectId, ref: 'Destination'}]
}, { collection })

module.exports = mongoose.model('Trip', TripSchema)
