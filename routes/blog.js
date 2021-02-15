const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blog')

router.get('/', blogController.list)
router.get('/why-copywriting', blogController.why_copywriting)
router.get('/why-own-marketing-agency', blogController.why_own_marketing_agency)
router.get('/what-is-copywriting', blogController.what_is_copywriting)

module.exports = router