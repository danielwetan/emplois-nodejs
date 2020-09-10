const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const multer = require('../helpers/multer');

// router.patch('/partner/social', profileController.hiring_partner.updateSocialMedia);
router.patch('/talent/me', multer.single('image'), profileController.talent.updateGeneralInfo);
router.patch('/talent/social', profileController.talent.updateSocialMedia);
router.patch('/talent/experience', multer.single('image'), profileController.talent.updateWorkExperience);
router.patch('/talent/portofolio', multer.single('image'), profileController.talent.updatePortofolio);
// talent/me -> general information
// 
module.exports = router;