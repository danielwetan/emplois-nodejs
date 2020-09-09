const profileModel = require('../models/profile');
const helper = require('../helpers/response');

const talent = {
  updateSocialMedia: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    try {
      const result = await profileModel.talent.updateSocialMedia(data, id);
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  }
}

const hiring_partner = {
  updateSocialMedia: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    try {
      const result = await profileModel.hiring_partner.updateSocialMedia(data, id);
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  }
}

module.exports = {
  talent,
  hiring_partner
}