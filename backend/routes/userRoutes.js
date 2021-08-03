const express = require('express')
const router = express.Router()
import {
    authUser,
    getUserProfile
} from '../controllers/userController.js'
import {
    protect
} from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

module.exports = router