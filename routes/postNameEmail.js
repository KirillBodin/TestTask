const express = require('express')
const controller = require('../controllers/postNameEmail')
const router = express.Router()


router.post('/checkage', controller.postNameEmail)


module.exports = router