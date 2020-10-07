var mysql = require("mysql");
require("dotenv").config();

var con = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: process.env.SQL_PASS,
    database: "soups_db"

});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected")
});