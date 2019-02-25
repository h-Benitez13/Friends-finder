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
      var newUser = req.body;
      var userScore = newUser.score;
      var scoreArr = [];
      var findMatch = 0;
      var diff = 0;

      for (var i = 0; i< matchData.length; i++ ){
        diff = 0;
        console.log(JSON.stringify(matchData[i]));

        for (var j = 0; j < userScore.length; j++ ){
          diff += (Math.abs(parseInt(matchData[i].score[j]) - parseInt(userScore[j])));
        }
        scoreArr.push(diff);

      }

      for(var i=0; i <scoreArr.length; i++) {
        if (scoreArr[i] < scoreArr[findMatch]) {
          findMatch = i;
        }
      }

      var bff = matchData[findMatch];
      res.json(bff);
      
      console.log(req.body);
      matchData.push(req.body);
    
      
    })
    }