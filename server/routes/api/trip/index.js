const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const getById = require('./handlers/getById')
const addOne = require('./handlers/addOne')
const removeById = require('./handlers/removeById')

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', addOne)
router.delete('/:id', removeById)

module.exports = router
