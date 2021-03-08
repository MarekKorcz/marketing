const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.home)
// router.get('/pricing', mainController.pricing)
router.get('/about', mainController.about)
router.get('/contact', mainController.contact)

module.exports = router