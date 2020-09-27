const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const multer = require('../helpers/multer')
const authMiddleware = require('../middleware/auth')

router.post('/register', multer.none(), authController.talent.register)
router.post('/login', multer.none(), authController.talent.login)
router.post('/refresh-token', multer.none(), authMiddleware.refreshToken)

module.exports = router
