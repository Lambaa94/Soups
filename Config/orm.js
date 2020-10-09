const connection = require("./connection")

var orm = {
    // SELECT *
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result)
        }
        );
    },
    // INSERT
    insertOne: function (table, colName, name, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"

        connection.query(queryString, [table, colName, name], function (err, result) {
            if (err) throw err;
            cb(result)
        }
        );
    },
    // UPDATE
    updateOne: function (table, colName, boolean, colName2, id, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        
        // console.log("We're in update")
        connection.query(queryString, [table, colName, boolean, colName2, id], function (err, result) {
            if (err) {
                throw err;
            }
            
            cb(result)

        });
    },
    // DELETE
    deleteOne: function (table, colName, value, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?"

        connection.query(queryString, [table, colName, value, cb], function (err, result) {
            if (err) {
                throw err;
            }
            // console.log("We're in delete")
            cb(result)

        });
    }

};



//DELETE FROM ?? WHERE ?? = ?
//DELETE FROM soups WHERE id = 1
module.exports = orm;