// Database connection
const mysql = require('mysql');
const config = require('../configs/global');

const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  multipleStatements: true
})

module.exports = connection;