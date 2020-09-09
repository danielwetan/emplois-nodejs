const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

router.patch('/talent/social', profileController.talent.updateSocialMedia);
router.patch('/partner/social', profileController.hiring_partner.updateSocialMedia);


module.exports = router;