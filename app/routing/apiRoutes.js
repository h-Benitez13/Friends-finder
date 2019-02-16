// LOADING LE DATA
// FIRST create variable so you dont have to do it multiple times

var matchData = require("../data/friends");

// now we shall use the express app to GET the data and display
// when a user visits this page
// redirected to the friends pages which is the list of friends (default)

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(matchData);
      });
    }