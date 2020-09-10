// const homeModel = require('../models/home');
// const helper = require('../helpers/response');

// module.exports = {
//   getHomeData: async (req, res) => {
//     let { skills, location, position, job_type, order_by, page } = req.query;
//     try {
//       const result = await homeModel.getHomeData(skills, location, position, job_type, order_by, page);
//       return helper.response(res, 'success', result, 200);
//     } catch (err) {
//       console.log(err)
//       return helper.response(res, 'failed', 'Something error!', 500);
//     }
//   }
// }