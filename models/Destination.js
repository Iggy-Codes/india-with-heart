const mongoose = require('mongoose')
const collection = 'destinations'

const CustomerSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Destination', CustomerSchema)

    //   "name": "Delhi",
    //   "coor": {
    //      "lat": 28.6618976,
    //       "lng": 77.22739580000007 },
    //   "tourismTitle":  "La Venecia del Este",
    //   "tourismDescription": "Por la ma&ntilde;ana, visitaremos uno de los fuertes mejor conservados del Rajasthan, el impresionante fuerte amurallado Mehrangarh del S. XVII, con su museo interior que protege el palacio de los Rajputs. A la hora convenida, partiremos hacia Udaipur, conocida como la Venecia del Este por sus preciosos lagos dentro de la ciudad. De camino visitaremos uno de los m&aacute;s importantes e impresionantes templos jainistas, el templo de Ranakpur que fueron construidos entre los siglos XII y XV y est&aacute;n dedicadas a Rikhabdev y Sambhavanth. Hay 1444 columnas en el templo y ningunos son similares.",
    //   "tourismImg": "/img/trip/udaipur-1.png",
    //   "npoTitle": "Los proyectos solidarios en Udaipur",
    //   "npoDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   "npoImg": "/img/trip/udaipur-2.png",
    //   "heartTitle": "Los latidos de nuestros viajeros",
    //   "heartMessages": [{"message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante", "author": "Anonymous"}],
    //   "heartImg": "/img/corason-color.png",
    //   "photos":
    //     [
    //       { "url": "/img/gallery/001.jpg",
    //       "des": "Photo number 1" },
    //       { "url": "/img/gallery/002.jpg",
    //       "des": "Photo number 2" },
    //       { "url": "/img/gallery/003.jpg",
    //       "des": "Photo number 3" },
    //       { "url": "/img/gallery/004.jpg",
    //       "des": "Photo number 4" },
    //       { "url": "/img/gallery/005.jpg",
    //       "des": "Photo number 5" },
    //       { "url": "/img/gallery/006.jpg",
    //       "des": "Photo number 6" },
    //       { "url": "/img/gallery/007.jpg",
    //       "des": "Photo number 7" }
    //     ]
    // },
