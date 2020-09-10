// SQL query for models
module.exports = {
  auth: {
    talent: {
      register: "BEGIN; INSERT INTO talent SET ?; INSERT INTO social_media (user_id) VALUES (?); INSERT INTO portofolio (user_id) VALUES (?); INSERT INTO experience (user_id) VALUES (?); COMMIT;",
      login: "SELECT user_id, email, name, position, password FROM talent WHERE email = ?",
    },
    hiring_partner: {
      register: "INSERT INTO hiring_partner SET ?; INSERT INTO social_media (user_id) VALUES (?)",
      login: "SELECT user_id, email, name, company, password FROM hiring_partner WHERE email = ?",
    }
  },
  profile: {
    talent: {
      updateSocialMedia: "UPDATE social_media SET ? WHERE user_id=?",
      updateWorkExperience: "UPDATE experience SET ? WHERE user_id=?",
      updatePortofolio: "UPDATE portofolio SET ? WHERE user_id=?",
      updateGeneralInfo: "UPDATE talent SET ? WHERE user_id=?",
    },
    hiring_partner: {
      updateSocialMedia: "UPDATE social_media SET ? WHERE user_id=?"
    }
  }
}
