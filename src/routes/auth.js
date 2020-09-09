const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/talent/register', authController.talent.register);
router.post('/talent/login', authController.talent.login);
router.post('/company/register', authController.company.register);

module.exports = router;