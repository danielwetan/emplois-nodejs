const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const multer = require('../helpers/multer');

router.patch('/talent/social', profileController.talent.updateSocialMedia);
router.patch('/partner/social', profileController.hiring_partner.updateSocialMedia);
router.patch('/talent/experience', multer.single('image'), profileController.talent.updateWorkExperience);

module.exports = router;