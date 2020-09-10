const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const profileRouter = require('./profile');
const profileController = require('../controllers/profile')

router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('*', profileController.talent.getPageNotFound);

module.exports = router;

