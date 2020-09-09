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
        connection.query(query.auth.talent.login, `${email}`, (err, result) => {
          if (err) {
            reject(err);
          };
          const response = {
            ...result,
            message: 'Login success!'
          }
          resolve(result);
        })
      })
    }
  },
  company: {
    register: data => {
      return new Promise((resolve, reject) => {
        connection.query(query.auth.company.register, data, (err, result) => {
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
  }
}