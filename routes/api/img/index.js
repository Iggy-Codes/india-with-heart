const express = require('express')
const router = express.Router()

const getImgs = require('./handlers/getImgs')
router.get('/', getImgs)

module.exports = router
