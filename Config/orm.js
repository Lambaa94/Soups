const connection = require("./connection")

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result)
        }
        );
    },
    insertOne: function (table, colName, name, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"

        connection.query(queryString, [table, colName, name], function (err, result) {
            if (err) throw err;
            cb(result)
        }
        );
    },

    updateOne: function(table, colName, boolean, colName2, id, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        console.log("Where am i?")
        console.log(cb, "asldfjk")
        connection.query(queryString, [table, colName, boolean, colName2, id], function (err, result) {
            if (err) { 
            throw err;
            }
            console.log(cb, "I win")
            cb(result)
            
        });
    },


};

module.exports = orm;