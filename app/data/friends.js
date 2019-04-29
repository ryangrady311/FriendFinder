// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendData = [
    {
      userName: "Ryan Grady",
      userSocial: "https://www.facebook.com/ryan.grady.1234/",
      questionResponses: [5, 2, 5, 5, 4, 5, 3, 4, 3, 4]
      
      
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendData;
  