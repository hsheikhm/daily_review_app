dailyReviewApp.factory('RatingFactory', function() {
  function ratingFactory() {
    this.challengeRating = [];
    this.feelingRating = [];
    this.pairingRating = [];
    this.confidenceYes = [];
    this.confidenceNo = [];
  }

  return ratingFactory;
});
