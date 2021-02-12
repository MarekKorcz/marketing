const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blog')

router.get('/', blogController.list)

router.get('/why-copywriting', blogController.why_copywriting)

module.exports = router