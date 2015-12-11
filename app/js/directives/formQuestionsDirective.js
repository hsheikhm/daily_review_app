dailyReviewApp.directive("cohortQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: "/public/views/cohort-question.html"
  };
});

dailyReviewApp.directive("pairingQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/public/views/pairing-question.html'
  };
});
