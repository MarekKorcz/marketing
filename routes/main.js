const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.home)

router.get('/social-media-pricing', mainController.social_media_pricing)

module.exports = router