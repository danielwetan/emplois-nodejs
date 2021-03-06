const helper = require('../helpers/response');
const redis = require('redis');
require('dotenv').config();
const client = redis.createClient(process.env.REDIS_PORT);

module.exports = {
  getCached: (name) => {
    return (req, res, next) => {
      const { user_id } = req.params;
      client.hgetall(`${name}:` + user_id, (err, data) => {
        if (err) throw err;
        if (data != null) {
          console.log("Hello from Redis");
          return helper.response(res, 'success', data, 200);
        } else {
          next();
        }
      })
    }
  },
  caching: (name, key, data) => {
    client.hmset(`${name}` + key, data);
  },
  deleteCache: (key) => {
    client.del(key);
  }
}