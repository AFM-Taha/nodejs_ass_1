const userControllers = require('../controllers/user.controller')

const express = require('express')

const router = express.Router()

// Home Route
router.route('/').get(userControllers.homePage)

// Random user from json
router.route('/random').get(userControllers.getRandomUser)

// All users from json
router.route('/all').get(userControllers.getAllUsers)

// Save an users in json
router.route('/save').post(userControllers.saveAUser)

// Update an users in json
router.route('/update').patch(userControllers.updateAnUser)

// Update Bulk User in json
router.route('/bulk-update').patch(userControllers.updateBulkUser)

// Delete an users in json
router.route('/delete').delete(userControllers.deleteAnUser)

module.exports = router
