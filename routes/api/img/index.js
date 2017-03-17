const express = require('express')
const router = express.Router()

const getImgs = require('./handlers/getAll')
router.get('/:folder', getImgs)
router.get('/', getImgs) // will serve the images from public/img/trip

module.exports = router
