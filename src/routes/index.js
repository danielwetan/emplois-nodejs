const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const profileRouter = require('./profile');
const homeRouter = require('./home');
const profileController = require('../controllers/profile')

router.use('/talent/auth', authRouter);
router.use('/talent/profile', profileRouter);
// router.use('/talent/home', homeRouter);
router.use('*', profileController.talent.getPageNotFound);

module.exports = router;

