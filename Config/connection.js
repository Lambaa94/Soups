var mysql = require("mysql");
require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",

        port: 3306,

        user: "root",

        password: process.env.SQL_PASS,

        database: "soups_db"

    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected")
});

module.exports = connection;