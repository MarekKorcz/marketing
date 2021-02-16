const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.home)

router.get('/pricing', mainController.pricing)

module.exports = router