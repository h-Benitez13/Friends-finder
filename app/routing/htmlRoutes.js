// --------HTML path -------
// requiring path to grab the correct path for my html 
var path = require("path");


// actual routing
// HTML GET requests
// search for the specific file and display to user
module.exports = function (app) {

  // for the survey
  // GET request and direct to the survey HTML
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });


  // If no matching route is found --> redirect to le  home page
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};