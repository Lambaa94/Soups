var express = require("express");
var exphbs = require("express-handlebars");
const path = require('path')

// Importing connection if needed //
// var connection = require("./config/connection");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use public CSS
app.use(express.static(path.join(__dirname, '/public')));

// To use handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import Routes
var router = require("./controllers/soups_controller");



// Use express routes
app.use(router);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});