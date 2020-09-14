const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const multer = require('../helpers/multer');

router.post('/register', multer.none(), authController.talent.register);
router.post('/login', multer.none(), authController.talent.login);

module.exports = router;
