const homeModel = require('../models/home');
const helper = require('../helpers/response');
const query = require('../helpers/query');

module.exports = {
  getHomeData: async (req, res) => {
    let { job_type, sort_by, page, search } = req.query;
    try {
      const limit = 8
      page = page || 1
      const offset = `${page * limit - limit}`
      // const baseQuery = `SELECT id, user_id, name, skills, location, position, job_type, image, description FROM talent`
      const baseQuery = `SELECT talent.id, talent.user_id, talent.email, talent.name, talent.phone_number, talent.position, talent.location, talent.job_type, talent.description, talent.skills, talent.image, social_media.instagram, social_media.github, social_media.linkedin, portofolio.image as portofolio_image, experience.position as experience_position, experience.company as experience_company, experience.date as experience_date, experience.description as experience_description FROM talent INNER JOIN social_media ON social_media.user_id=talent.user_id INNER JOIN portofolio ON portofolio.user_id=talent.user_id INNER JOIN experience ON experience.user_id=talent.user_id`


      job_type && sort_by ? query.home.getHomeData = `${baseQuery} WHERE job_type = ${job_type} ORDER BY ${sort_by} LIMIT ${limit} OFFSET ${offset}`
        : job_type ? query.home.getHomeData = `${baseQuery} WHERE job_type = ${job_type} LIMIT ${limit} OFFSET ${offset}`
          : sort_by ? query.home.getHomeData = `${baseQuery} ORDER BY ${sort_by} ASC LIMIT ${limit} OFFSET ${offset}`
            : search ? query.home.getHomeData = `${baseQuery} WHERE name LIKE '%${search}%' OR position LIKE '%${search}%' ORDER BY id DESC  LIMIT ${limit} OFFSET ${offset}`
              : query.home.getHomeData = `${baseQuery} ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`

      const result = await homeModel.getHomeData()
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err)
      return helper.response(res, 'failed', 'Something error!', 500);
    }
  }
}
