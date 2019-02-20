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
    
    app.post("/api/friends", function (req,res){
      
      console.log("here! CHECK HERE!"+ req.body.score);
      console.log(req.body);
      var fiend = req.body;

      var totalDiff = 100;
      var userIndex= 0;

      for (var i = 0; i < matchData.length; i++) {
          console.log(matchData[i]);
          for (var j = 0; j< 10; j++ ) {
            console.log(matchData[i].score);
          }


      }


      

      
    })
    }