var orm = require("../config/orm")

const soups = {
    // SELECT *
    all: function (cb) {
        orm.selectAll("soups", function (res) {
            cb(res);
        });
    },
    // INSERT
    create: function (name, cb) {
        orm.insertOne("soups", "soup_name", name, function (res) {
            cb(res);
            
        });

    },
    // SLURP
    update: function (id, cb) {
        orm.updateOne("soups", "slurped", "1", "id", id, function (result) {

            cb(result);
        });
    },
    // DELETE
    delete: function (id, cb) {
        orm.deleteOne("soups", "id", id, function (result) {
            

            cb(result);
        });
    }


};


module.exports = soups;