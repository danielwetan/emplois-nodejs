// SQL query for models
module.exports = {
  auth: {
    talent: {
      register: "INSERT INTO talent SET ?",
      login: "SELECT * FROM talent WHERE email = ?",
    },
    hiring_partner: {
      register: "INSERT INTO hiring_partner SET ?",
      login: "SELECT * FROM hiring_partner WHERE email = ?",
    }
  }
}