const homeModel = require('../models/home');
const helper = require('../helpers/response');
const query = require('../helpers/query');

module.exports = {
  getHomeData: async (req, res) => {
    let { job_type, sort_by, page, search } = req.query;
    try {
      const limit = 2
      page = page || 1
      const offset = `${page * limit - limit}`
      const baseQuery = `SELECT id, user_id, name, skills, location, position, job_type, image FROM talent`

      job_type && sort_by ? query.home.getHomeData = `${baseQuery} WHERE job_type = ${job_type} ORDER BY ${sort_by} LIMIT ${limit} OFFSET ${offset}`
        : job_type ? query.home.getHomeData = `${baseQuery} WHERE job_type = ${job_type} LIMIT ${limit} OFFSET ${offset}`
          : sort_by ? query.home.getHomeData = `${baseQuery} ORDER BY ${sort_by} ASC LIMIT ${limit} OFFSET ${offset}`
            : search ? query.home.getHomeData = `${baseQuery} WHERE name LIKE '%${search}%' ORDER BY id DESC  LIMIT ${limit} OFFSET ${offset}`
              : query.home.getHomeData = `${baseQuery} ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`

      const result = await homeModel.getHomeData()
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err)
      return helper.response(res, 'failed', 'Something error!', 500);
    }
  }
}