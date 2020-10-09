var express = require("express");
var soups = require("../models/soupsModel")

var router = express.Router();


// Render all Soups
router.get("/", function (req, res) {

    soups.all(function (data) {
        var allSoup = {
            soups: data
        };

        res.render("index", allSoup)
    });
});

// POST new Soup
router.post("/api/soups", function (req, res) {
    const newSoup = req.body;

    // console.log(newSoup, "Here is the new soup");

    soups.create([newSoup.soup_name], function (result) {
        
        res.json({ soup_name: result.soup_name })

    });
});

// Slurp DA Soup
router.put("/api/soups/:id", function (req, res) {

    var id = req.params.id;

    // console.log("slurp", id)

    soups.update(id, function (result) {

        if (result.changedRows == 0) {
            return res.status(404).end();

        } else {
            res.status(200).end()
        }
    });
});

router.delete("/api/soups/:id", function (req, res) {
    var id = req.body.id;
    
    console.log(id, "delete")

    soups.delete(id, function (result) {

        if (result.affectedRows == 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;