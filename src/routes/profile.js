const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const multer = require('../helpers/multer');

router.get('/talent/portofolio', profileController.talent.getPortofolio);

router.patch('/talent/me', multer.single('image'), profileController.talent.updateGeneralInfo);
router.patch('/talent/social', multer.none(), profileController.talent.updateSocialMedia);
router.patch('/talent/experience', multer.single('image'), profileController.talent.updateWorkExperience);
router.patch('/talent/portofolio', multer.single('image'), profileController.talent.updatePortofolio);

router.patch('/partner/social', profileController.hiring_partner.updateSocialMedia);

module.exports = router;