const express = require('express')
const router = express.Router()

const routerTrips = require('./handlers/trips')
const routerDetailTrip = require('./handlers/detail-trip')
const sendMail = require('./handlers/sendMail')

router.get('/trip/:trip', (req, res, next) => {
  res.redirect('/trip/' + req.params.trip + '/_')
  next()
})

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/contact', (req, res) => {
  res.render('contact-form')
})

router.get('/trip/:tripUri/:city', routerDetailTrip)
router.get('/trips', routerTrips)
router.post('/sendmail', sendMail)

module.exports = router
