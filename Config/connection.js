var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: process.env.SQL_PASS,
    database: "employee_tracker_db"

});

con.connect(function (err) {
    if (err) throw err;
    mainMenu()
});