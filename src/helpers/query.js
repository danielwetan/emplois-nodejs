// SQL query for models
module.exports = {
  auth: {
    talent: {
      register: "INSERT INTO talent SET ?",
      login: "SELECT * FROM talent WHERE name = ?",
    },
  }
}