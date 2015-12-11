dailyReviewApp.factory('RatingFactory', function() {
  function ratingFactory() {
    this.challengeRating = [];
    this.feelingRating = [];
    this.pairingRating = [];
    this.confidenceYes = [];
    this.confidenceNo = [];

    this.collectJuniorRatings = function(dataSnapshot) {
      this.challengeRating.push(dataSnapshot.val().challenge);
      this.feelingRating.push(dataSnapshot.val().feeling);
      this.pairingRating.push(dataSnapshot.val().pairing);

      if(dataSnapshot.val().confidence === "Yes") {
        this.confidenceYes.push(dataSnapshot.val().confidence);
      } else if (dataSnapshot.val().confidence === "No") {
        this.confidenceNo.push(dataSnapshot.val().confidence);
      }
    };
  }

  return ratingFactory;
});
