// SQL query for models
module.exports = {
  auth: {
    talent: {
      register: 'BEGIN; INSERT INTO talent SET ?; INSERT INTO social_media (user_id) VALUES (?); INSERT INTO portofolio (user_id) VALUES (?); INSERT INTO experience (user_id) VALUES (?); COMMIT;',
      login: 'SELECT user_id, email, name, position, password FROM talent WHERE email = ?'
    },
    hiring_partner: {
      register: 'INSERT INTO hiring_partner SET ?; INSERT INTO social_media (user_id) VALUES (?)',
      login: 'SELECT user_id, email, name, company, password FROM hiring_partner WHERE email = ?'
    }
  },
  profile: {
    talent: {
      getPortofolio: 'SELECT * FROM portofolio WHERE user_id=? ORDER BY id DESC LIMIT 6',
      getWorkExperience: 'SELECT * FROM experience WHERE user_id=? ORDER BY id DESC LIMIT 6',
      getGeneralInfo: 'SELECT talent.id, talent.user_id, talent.email, talent.name, talent.phone_number, talent.position, talent.location, talent.job_type, talent.description, talent.skills, talent.image as portofolio, social_media.instagram, social_media.github, social_media.linkedin FROM talent INNER JOIN social_media ON social_media.user_id=talent.user_id WHERE talent.user_id=?',
      updateSocialMedia: 'UPDATE social_media SET ? WHERE user_id=?',
      updateWorkExperience: 'UPDATE experience SET ? WHERE user_id=?',
      updatePortofolio: 'UPDATE portofolio SET ? WHERE user_id=?',
      updateGeneralInfo: 'UPDATE talent SET ? WHERE user_id=?'
    },
    hiring_partner: {
      updateSocialMedia: 'UPDATE social_media SET ? WHERE user_id=?'
    }
  },
  home: {
    // getHomeData: "SELECT id, user_id, name, skills, location, position, job_type, image FROM talent WHERE skills LIKE ? OR location LIKE ? OR position LIKE ? OR job_type LIKE ? ORDER BY ? LIMIT 8 OFFSET ?",
    // getHomeData: "SELECT id, user_id, name, skills, location, position, job_type, image FROM talent WHERE job_type = ? ORDER BY ? LIMIT ? OFFSET ?",
    getHomeData: ''
  }
}
