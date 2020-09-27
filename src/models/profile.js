const connection = require('../helpers/mysql')
const query = require('../helpers/query')

// Talent
const talent = {
  getPortofolio: id => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.getPortofolio, id, (err, result) => {
        if (err) {
          reject(err)
        };
        resolve(result)
      })
    })
  },
  getWorkExperience: id => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.getWorkExperience, id, (err, result) => {
        if (err) {
          reject(err)
        };
        resolve(result)
      })
    })
  },
  getGeneralInfo: id => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.getGeneralInfo, id, (err, result) => {
        if (err) {
          reject(err)
        };
        resolve(result)
      })
    })
  },
  updateSocialMedia: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.updateSocialMedia, [data, id], (err, result) => {
        if (err) {
          reject(err)
        };
        const response = {
          message: 'Update success!'
        }
        resolve(response)
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
        resolve(response)
      })
    })
  },
  updatePortofolio: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.updatePortofolio, [data, id], (err, result) => {
        if (err) {
          reject(err)
        }
        const response = {
          message: 'Update success!'
        }
        resolve(response)
      })
    })
  },
  updateGeneralInfo: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(query.profile.talent.updateGeneralInfo, [data, id], (err, result) => {
        if (err) {
          reject(err)
        }
        const response = {
          message: 'Update success!'
        }
        resolve(response)
      })
    })
  }
}

// Hiring partner
// const hiringPartner = {
//   updateSocialMedia: (data, id) => {
//     return new Promise((resolve, reject) => {
//       connection.query(query.profile.hiring_partner.updateSocialMedia, [data, id], (err, result) => {
//         if (err) {
//           reject(err)
//         };
//         const response = {
//           message: 'Update success!'
//         }
//         resolve(response)
//       })
//     })
//   }
// }

module.exports = {
  talent
  // hiringPartner
}
