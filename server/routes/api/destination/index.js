const express = require('express')
const router = express.Router()

const addOne = require('./handlers/addOne')
const getAll = require('./handlers/getAll')
const getById = require('./handlers/getById.js')

router.post('/', addOne)
router.get('/', getAll)
router.get('/:id', getById)

module.exports = router
