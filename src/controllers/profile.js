const profileModel = require('../models/profile');
const helper = require('../helpers/response');

const talent = {
  updateSocial: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    try {
      const result = await profileModel.talent.updateSocial(data, id);
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  }
}

module.exports = {
  talent
}