const mysql = require("mysql2/promise")

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_pegawai"
  });
  
module.exports = connection;