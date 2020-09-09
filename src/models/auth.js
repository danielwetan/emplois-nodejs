const connection = require('../helpers/mysql');
const query = require('../helpers/query');

const talent = {
  register: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.auth.talent.register, [data, id, id, id], (err, result) => {
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
}

const hiring_partner = {
  register: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.auth.hiring_partner.register, [data, id], (err, result) => {
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
}

module.exports = {
  talent,
  hiring_partner
}
