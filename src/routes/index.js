const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const profileRouter = require('./profile');

router.use('/auth', authRouter);
router.use('/profile', profileRouter);

module.exports = router;


/*
Talent
----
talent => data
social => user_id
portofolio => user_id
experience => user_id


Partner
----
hiring_partner => data
social => user_id

*/