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
            // what was suppose to go through was two loops
            // the first loop would be to go through each of the scores for my default data
            // as this loop goes through, my 'userscore' would be equal to zero
            // the next loop would go through each score in my default data and compare it to the user data input
            // subtract each score and take the absolute value 
            // once values are obtained
            // then will take the total sum of all the differences and compare it to the variable set to 100
            // i would then compare the total difference compared to the 100
            // whatever score is closest to 100, that would be the match, which would then post to my data to upload in the modal
          }


      }


      

      
    })
    }