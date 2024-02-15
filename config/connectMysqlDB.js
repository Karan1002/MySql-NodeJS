require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.MYSQL_USER_HOST,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_USER_PASSWORD,
  database: process.env.MYSQL_USER_DB,
});

try {
  connection.connect();
  console.log("connected");
} catch (error) {
  console.log(error);
}

module.exports = { connection };
