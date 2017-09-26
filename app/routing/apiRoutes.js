// Dependencies
// =============================================================
var lodash = require("lodash");
var characterData = require ( "../data/friends" );

module.exports = function ( app ) {

// A GET route with the url /api/friends. 
// This will be used to display a JSON of all possible friends.
  app.get ("/api/friends", function (req, res) {
    res.json ( characterData );
  });


// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
  app.post ("/api/friends", function (req, res) {
    var scores = req.body.scores;
    var comparisonScores = [];

    // for each character, get the score

    // check each score against the values and strip out the consistent ones (lodash)

    // with the remaining scores, calculate the absolute value

    // push the scores to the empty companion scores array

    // check against all the comparison score for the least difference and that is your best match, display in modal.
  });

};