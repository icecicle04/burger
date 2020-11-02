// set up connection
var mysql = require("mysql");

if (process.env.JAQSDB_URI) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Braves2020",
    database: "burgers_db",
  });
}

// Make connection

connection.connect(function (err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;
