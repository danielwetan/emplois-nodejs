const connection = require('../helpers/mysql');
const query = require('../helpers/query');

module.exports = {
  talent: {
    register: data => {
      return new Promise((resolve, reject) => {
        connection.query(query.auth.talent.register, data, (err, result) => {
          if (err) {
            reject(err);
          };
          const response = {
            message: 'Register success!'
          }
          resolve(response);
        })
      })
    },
    login: email => {
      return new Promise((resolve, reject) => {
        connection.query(query.auth.talent.login, email, (err, result) => {
          if (err) {
            reject(err);
          };
          resolve(result);
        })
      })
    }
  },
  hiring_partner: {
    register: data => {
      return new Promise((resolve, reject) => {
        connection.query(query.auth.hiring_partner.register, data, (err, result) => {
          if (err) {
            reject(err);
          };
          const response = {
            message: 'Register success!'
          }
          resolve(response);
        })
      })
    },
    login: email => {
      return new Promise((resolve, reject) => {
        connection.query(query.auth.hiring_partner.login, email, (err, result) => {
          if (err) {
            reject(err);
          };
          resolve(result);
        })
      })
    }
  },
}
