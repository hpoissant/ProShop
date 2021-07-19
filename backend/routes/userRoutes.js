const express = require('express')
const router = express.Router()
import { authUser } from '../controllers/userController.js'

router.post('/login', authUser)

module.exports = router
