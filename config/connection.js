// set up connection
const { connection } = require("mongoose");
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Braves2020",
    database: "burgers_db",
  });
}
//updated
// Make connection

connection.connect(function (err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.end();

// Export connection for our ORM to use
module.exports = connection;
