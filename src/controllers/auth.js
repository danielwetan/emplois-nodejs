const authModel = require('../models/auth');
const helper = require('../helpers/response');
const bcrypt = require('bcrypt');
const userID = require('shortid');
const jwt = require('jsonwebtoken');
const config = require('../configs/global');

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
    login: async (req, res) => {
      const data = req.body;
      try {
        const result = await authModel.talent.login(data.email);
        if (result.length > 0) {
          const hashPass = result[0].password;
          const checkPass = bcrypt.compareSync(data.password, hashPass);
          if (checkPass) {
            delete result[0].password;
            const mainTokenData = {
              ...result[0],
              tokenType: 'main'
            }
            const mainToken = jwt.sign(mainTokenData, config.jwt.secretKey, { expiresIn: config.jwt.mainTokenLife });
            result[0].token = mainToken
            return helper.response(res, 'success', result, 200);
          }
          return helper.response(res, 'failed', 'Username or password is wrong!', 400);
        }
        return helper.response(res, 'failed', 'Username or password is wrong!', 400);
      } catch (err) {
        console.log(err);
        return helper.response(res, 'failed', 'Username or password is wrong!', 400);
      }
    }
  }
}