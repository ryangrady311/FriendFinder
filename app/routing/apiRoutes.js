


// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  

  app.post("/api/friends", function(req, res) {
    

    //ADD code to get find friend compatability here here!
    
    for (var i=0;i<req.body.questionResponses.length;i++){
        req.body.questionResponses[i] = parseInt(req.body.questionResponses[i]);
    }
    //console.log(req.body);

    var friendDifference = 0;
    var lowestFriendDifference = 100000;
    var mostCompatibleFriend = 0;

// i loops through all previous records 

    for (var i=0;i<friendData.length;i++){

// j loops through all each instance of the array

    for (var j=0;j<req.body.questionResponses.length;j++){
        friendDifference = friendDifference + Math.abs(friendData[i].questionResponses[j]-req.body.questionResponses[j]);
    }

//if the friend difference is lower thann the lowest friend difference, and the name doesn't equal itself, then update the most compatible friend

    if (friendDifference<lowestFriendDifference && req.body.userName != friendData[i].userName){

        mostCompatibleFriend = i;
        lowestFriendDifference = friendDifference;
    }

    friendDifference = 0;
    }
  
    var userResponse = req.body;

    //console.log(userResponse);

    //Add the user response to the database, and return the most compatible friend
    console.log(req.body);
      friendData.push(req.body);
      res.json(friendData[mostCompatibleFriend]);
      console.log(friendData[mostCompatibleFriend]);
    
    
  });

 

  
};
