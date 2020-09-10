const connection = require('../helpers/mysql');
const query = require('../helpers/query');

const talent = {
  updateSocialMedia: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.updateSocialMedia, [data, id], (err, result) => {
        if (err) {
          reject(err);
        };
        const response = {
          message: 'Update success!'
        }
        resolve(response);
      })
    })
  },
  updateWorkExperience: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.updateWorkExperience, [data, id], (err, result) => {
        if (err) {
          reject(err)
        }
        const response = {
          message: 'Update success!'
        }
        resolve(response);
      })
    })
  }
}

const hiring_partner = {
  updateSocialMedia: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.hiring_partner.updateSocialMedia, [data, id], (err, result) => {
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
  talent,
  hiring_partner
}