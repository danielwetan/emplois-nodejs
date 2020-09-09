const connection = require('../helpers/mysql');
const query = require('../helpers/query');

const talent = {
  updateSocial: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.updateSocial, [data, id], (err, result) => {
        if (err) {
          reject(err);
        };
        const response = {
          message: 'Update success!'
        }
        resolve(response);
      })
    })
  }
}

module.exports = {
  talent
}