const userControllers = require('../controllers/user.controller')

const express = require('express')

const router = express.Router()

// Random user from json
router.route('/random').get(userControllers.getRandomUser)

// All users from json
router.route('/all').get(userControllers.getAllUsers)

// Save an users in json
router.route('/save').post(userControllers.saveAUser)

// Save an users in json
router.route('/update').post(userControllers.updateAnUser)

module.exports = router
