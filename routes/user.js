const express = require('express')
const controller = require('../controllers/user')
const router = express.Router()


router.post('/', controller.auth)
router.get('/', controller.getByEmail)


module.exports = router