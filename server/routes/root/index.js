const express = require('express')
const router = express.Router()

const routerTrips = require('./handlers/trips')
// const routerDestination = require('./destination')
// const routerImg = require('./img')
// const routerTrip = require('./trip')

// router.use('/destination', routerDestination)
// router.use('/img', routerImg)
// router.use('/trip', routerTrip)

router.get('/trips', routerTrips)
module.exports = router
