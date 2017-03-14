const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addDestination = require('./handlers/addDestination')

router.get('/', getAll)
router.post('/', addDestination)

module.exports = router
