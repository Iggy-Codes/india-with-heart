const express = require('express')
const router = express.Router()

const addOne = require('./handlers/addOne')
const getAll = require('./handlers/getAll')
const getById = require('./handlers/getById.js')
const updateOne = require('./handlers/updateOne.js')

router.post('/', addOne)
router.get('/', getAll)
router.get('/:id', getById)
router.put('/:id', updateOne)
module.exports = router
