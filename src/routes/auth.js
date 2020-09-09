const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/talent/register', authController.talent.register);
router.post('/talent/login', authController.talent.login);
router.post('/partner/register', authController.hiring_partner.register);
router.post('/partner/login', authController.hiring_partner.login);

module.exports = router;