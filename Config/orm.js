const connection = require("connection.js")

var orm = {
    selectAll: function (soupNames, soupTable) {
        var queryString = "SELECT ?? FROM ??"

        connection.query(queryString, [soupNames, soupTable], function (err, result) 
        {
            if (err) throw err;
            console.log(result)
        }
        );
    },
    insertOne: function (soupTable, soupCol, soupType) {
        var queryString = "INSERT INTO ?? (??) VALUES ?"

        connection.query(queryString, [soupTable,soupCol, soupType], function (err, result) 
        {
            if (err) throw err;
            console.log(result)
        }
        );
    },

    updateOne: function (soupTable, slurpCol, isSlurped, soupId) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"

        connection.query(queryString, [soupTable, slurpCol, isSlurped, soupId], function (err, result) {
            if (err) throw err;
            console.log(result)
        }
        );
    }


};

module.exports = orm;