const mongoose = require('mongoose')
const collection = 'destinations'

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coord: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  blocks: [{
    title: String,
    description: String,
    img: String,
    visible: Boolean,
    section: String
  }]
}, { collection })

module.exports = mongoose.model('Destination', DestinationSchema)
