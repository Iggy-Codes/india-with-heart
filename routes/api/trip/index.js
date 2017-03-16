const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addTrip = require('./handlers/addTrip')

router.get('/', getAll)
router.post('/', addTrip)

module.exports = router
