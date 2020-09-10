const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const multer = require('../helpers/multer');

router.post('/talent/register', multer.none(), authController.talent.register);
router.post('/talent/login', multer.none(), authController.talent.login);
router.post('/partner/register', multer.none(), authController.hiring_partner.register);
router.post('/partner/login', multer.none(), authController.hiring_partner.login);

module.exports = router;