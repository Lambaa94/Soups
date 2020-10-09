var orm = require("../config/orm")

const soups = {
    all: function (cb) {
        orm.selectAll("soups", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.insertOne("soups", "soup_name", name, function (res) {
            cb(res);
            console.log(res, "hey")
        });

    },
    update: function (id, cb) {
        orm.updateOne("soups", "slurped", "1", "id", id, function (result) {
              
            cb(result);
        });
    },
    delete: function (id, cb) {
        orm.deleteOne("soups", "id", id, function (result) {
            console.log("Im in here")
            
            cb(result);
        });
    }


};


module.exports = soups;