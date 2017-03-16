const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addOne = require('./handlers/addOne')

router.get('/', getAll)
router.post('/', addOne)

module.exports = router
