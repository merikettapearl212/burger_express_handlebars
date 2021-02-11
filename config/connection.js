// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

//    * Export the connection.
const mysql = require("mysql");
var connection;
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });
}
connection.connect();
module.exports = connection;