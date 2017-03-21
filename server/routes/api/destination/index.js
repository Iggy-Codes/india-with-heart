const express = require('express')
const router = express.Router()

const addOne = require('./handlers/addOne')
const getAll = require('./handlers/getAll')
const getById = require('./handlers/getById')
const removeById = require('./handlers/removeById')
const updateOne = require('./handlers/updateOne')

router.post('/', addOne)
router.get('/', getAll)
router.get('/:id', getById)
router.delete('/:id', removeById)
router.put('/:id', updateOne)
module.exports = router
