const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Destination = mongoose.model('Destination')
const collection = 'trips'

const CustomerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  titleUri: { type: String, required: true },
  description: { type: String, required: true },
  destinations: [{type: Schema.ObjectId, ref: 'Destination'}]
}, { collection })

module.exports = mongoose.model('Trip', CustomerSchema)
// { "atrips":
//   [
//     { "title": "deluxe trip",
//       "title-uri": "deluxe-trip",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam modi laudantium, optio molestias, veniam, fugit nisi debitis explicabo repudiandae fugiat incidunt similique atque dolorum, dicta accusantium facilis doloremque necessitatibus omnis.",
//       "cities": [
//         {"name": "Delhi"}, {"name": "Jodhpur"}, {"name": "Udaipur"}, {"name": "Bundi"}, {"name": "Jaipur"}, {"name": "Agra"}]
// },
//   { "title": "family trip",
//     "title-uri": "family-trip",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam modi laudantium, optio molestias, veniam, fugit nisi debitis explicabo repudiandae fugiat incidunt similique atque dolorum, dicta accusantium facilis doloremque necessitatibus omnis.",
//     "cities": [{"name": "Delhi"}, {"name": "Jodhpur"}, {"name": "Udaipur"}, {"name": "Bundi"}, {"name": "Jaipur"}]
//   },
//   {"title": "economy trip",
//   "title-uri": "economy-trip",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam modi laudantium, optio molestias, veniam, fugit nisi debitis explicabo repudiandae fugiat incidunt similique atque dolorum, dicta accusantium facilis doloremque necessitatibus omnis.",
//     "cities": [{"name": "Delhi"}, {"name": "Jodhpur"}, {"name": "Udaipur"}, {"name": "Bundi"}]
//   }]}
