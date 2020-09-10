const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const multer = require('../helpers/multer');
const authMiddleware = require('../middleware/auth');
const verifyJwtToken = authMiddleware.verifyJwtToken
const redis = require('../middleware/redis');

router.get('/me/:user_id', redis.getCached('talent'), profileController.talent.getGeneralInfo);
router.get('/portofolio/:user_id', profileController.talent.getPortofolio);
router.get('/experience/:user_id', profileController.talent.getWorkExperience);

router.patch('/me', verifyJwtToken, multer.single('image'), profileController.talent.updateGeneralInfo);
router.patch('/social', verifyJwtToken, multer.none(), profileController.talent.updateSocialMedia);
router.patch('/experience', verifyJwtToken, multer.single('image'), profileController.talent.updateWorkExperience);
router.patch('/portofolio', verifyJwtToken, multer.single('image'), profileController.talent.updatePortofolio);

module.exports = router;