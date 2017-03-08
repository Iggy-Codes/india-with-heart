const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

console.log('api: ' + process.env.API_GOOGLE_MAPS)

var urlMaps = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.API_GOOGLE_MAPS + '&callback=initMap'
console.log(urlMaps)

app.get('/trip', (req, res) => {
  const photos = [
    { url: '/img/1280x760/india_1_1280x760.jpeg',
      des: 'Photo number 1' },
    { url: '/img/1280x760/india_2_1280x760.jpeg',
      des: 'Photo number 2' },
    { url: '/img/1280x760/india_3_1280x760.jpeg',
      des: 'Photo number 3' },
    { url: '/img/1280x760/india_4_1280x760.jpeg',
      des: 'Photo number 4' },
    { url: '/img/1280x760/india_5_1280x760.jpeg',
      des: 'Photo number 5' },
    { url: '/img/1280x760/india_6_1280x760.jpeg',
      des: 'Photo number 6' },
    { url: '/img/1280x760/india_7_1280x760.jpeg',
      des: 'Photo number 1' }
  ]
  res.render('trip', { urlMaps, photos })
})

// app.get('/home', (req, res) => {
app.use((req, res) => {
  res.render('index')
})

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))
