// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

//    * Export the connection.
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Paco6969",
    database: "burgers_db"
  });
}
connection.connect();
module.exports = connection;