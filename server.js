// -------------- Express (main js) ------------//

// requiring express in this main file
// per documenation, run var app for express();
// create PORT [process.env.PORT for HEROKU]
// app use the express urlencoded to take in the parsed values of the URL
var express = require("express");
var path = require ("path");
var friends = require ("./app/data/friends.js");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ------------- route paths towards my other js files-------
// give my app a 'MAP'; depending when a user visits or seeking data

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//--------LISTENING------
//the application will not work if it doesnt listen to a port 


app.listen(PORT, function() {
    console.log("App listening on PORT: http://localhost: " + PORT);
  });