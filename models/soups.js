var orm = require("../config/orm")

orm.selectAll("soup_name", "soups")
orm.insertOne("soups","soup_name", "Manhattan Clam Chowder")
orm.updateOne("soups","slurped","true","1" )

module.exports = model;