const authModel = require('../models/auth');
const helper = require('../helpers/response');
const bcrypt = require('bcrypt');
const userID = require('shortid');
// const jwt = require('jsonwebtoken');
// const config = require('../configs/global');

module.exports = {
  talent: {
    register: async (req, res) => {
      const data = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(data.password, salt);
      data.password = hashPass;
      data.user_id = userID.generate();
      try {
        const result = await authModel.talent.register(data);
        delete result.password;
        return helper.response(res, 'success', result, 200);
      } catch (err) {
        console.log(err);
        return helper.response(res, 'failed', 'Something error!', 200);
      }
    },
  }
}