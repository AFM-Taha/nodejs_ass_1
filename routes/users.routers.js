const userControllers = require('../controllers/user.controller')

const express = require('express')

const router = express.Router()

router.route('/random').get(userControllers.getRandomUser)
router.route('/all').get(userControllers.getAllUsers)

module.exports = router
