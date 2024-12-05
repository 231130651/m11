const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "universitas_xyz_db",
  port: 3306,
});

module.exports = db;
