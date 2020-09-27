const jwt = require('jsonwebtoken')
const config = require('../configs/global')
const helper = require('../helpers/response')

module.exports = {
  verifyJwtToken: (req, res, next) => {
    let token = config.jwt.mainToken
    token = req.headers.authorization
    try {
      const decoded = jwt.verify(token, config.jwt.secretKey)
      console.log(decoded)
      next()
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return helper.response(res, 'fail', 'Token expired!', 401)
      }
      return helper.response(res, 'fail', 'Invalid token', 401)
    }
  },
  refreshToken: (req, res) => {
    const token = req.headers.authorization
    try {
      const decoded = jwt.verify(token, config.jwt.refreshTokenSecretKey)
      return helper.response(res, 'success', decoded, 200)
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return helper.response(res, 'fail', 'Token expired!', 401)
      }
      return helper.response(res, 'fail', 'Invalid token', 401)
    }
  }
}
