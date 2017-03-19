const express = require('express')
const router = express.Router()

const routerTrips = require('./handlers/trips')
const routerTripCity = require('./handlers/trip-city')
// const routerDestination = require('./destination')
// const routerImg = require('./img')
// const routerTrip = require('./trip')

// router.use('/destination', routerDestination)
// router.use('/img', routerImg)
// router.use('/trip', routerTrip)

router.get('/trip/:trip', (req, res, next) => {
  res.redirect('/trip/' + req.params.trip + '/_')
  next()
})
router.get('/trip/:tripUri/:city', routerTripCity)
router.get('/trips', routerTrips)
module.exports = router
