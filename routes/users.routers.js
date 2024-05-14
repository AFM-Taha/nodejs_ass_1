const userControllers = require('../controllers/user.controller')

const express = require('express')

const router = express.Router()

// Random user from json
router.route('/random').get(userControllers.getRandomUser)

// All users from json
router.route('/all').get(userControllers.getAllUsers)

// Save an users in json
router.route('/save').post(userControllers.saveAUser)

// Update an users in json
router.route('/update').patch(userControllers.updateAnUser)

// Delete an users in json
router.route('/delete').delete(userControllers.deleteAnUser)

module.exports = router
