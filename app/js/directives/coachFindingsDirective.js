dailyReviewApp.directive("juniorsRatings", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/juniors-ratings.html'
  };
});

dailyReviewApp.directive("seniorsRatings", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/seniors-ratings.html'
  };
});
