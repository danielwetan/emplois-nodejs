const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

router.patch('/talent/social', profileController.talent.updateSocial);

module.exports = router;