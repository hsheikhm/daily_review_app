dailyReviewApp.directive("cohortQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/cohort-question.html'
  };
});

dailyReviewApp.directive("pairingQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/pairing-question.html'
  };
});

dailyReviewApp.directive("challengeQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/challenge-question.html'
  };
});

dailyReviewApp.directive("confidenceQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/confidence-question.html'
  };
});

dailyReviewApp.directive("feelingQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/feeling-question.html'
  };
});

dailyReviewApp.directive("commentsQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/comments-question.html'
  };
});
