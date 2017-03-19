const express = require('express')
const router = express.Router()

const routerDestination = require('./destination')
const routerImg = require('./img')
const routerTrip = require('./trip')

router.use('/destination', routerDestination)
router.use('/img', routerImg)
router.use('/trip', routerTrip)

module.exports = router
