const { getRandomUser } = require('../controllers/user.controller')

const express = require('express')

const router = express.Router()

router.route('/random').get(getRandomUser)

module.exports = router
