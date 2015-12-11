dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseObject', 'RatingFactory',
function($scope, $firebaseObject, RatingFactory) {

  var ref = new Firebase("https://shining-fire-9962.firebaseio.com");
  var reviews = $firebaseObject(ref);
  reviews.$bindTo($scope, "users");

  var junior = new RatingFactory();
  var senior = new RatingFactory();

  $scope.show = function(cohort) {
    $scope.select = cohort;
  };

  $scope.getAverage = function(array){
    $scope.a = 0;
    array.forEach(function(ave){
      $scope.a+=ave;
    });
    return ($scope.a)/(array.length);
  };

  $scope.updateAverages = function() {
    $scope.seniorChallengeAverage = $scope.getAverage(senior.challengeRating);
    $scope.juniorChallengeAverage = $scope.getAverage(junior.challengeRating);
    $scope.seniorFeelingAverage = $scope.getAverage(senior.feelingRating);
    $scope.juniorFeelingAverage = $scope.getAverage(junior.feelingRating);
    $scope.seniorPairingAverage = $scope.getAverage(senior.pairingRating);
    $scope.juniorPairingAverage = $scope.getAverage(junior.pairingRating);
  };

  $scope.updateConfidenceAverages = function() {
    if (junior.moreConfident()) { $scope.juniorConfidenceAverage = "Yes"; }
    else { $scope.juniorConfidenceAverage = "No"; }
    if (senior.moreConfident()) { $scope.seniorConfidenceAverage = "Yes"; }
    else { $scope.seniorConfidenceAverage = "No"; }
  };

  ref.on('child_added', function(dataSnapshot) {
    if (dataSnapshot.val().cohort === "Nov 2015") {
      junior.collectRatings(dataSnapshot);
    } else if (dataSnapshot.val().cohort === "Oct 2015") {
      senior.collectRatings(dataSnapshot);
    }
    $scope.updateAverages(); $scope.updateConfidenceAverages();
  });
}]);
