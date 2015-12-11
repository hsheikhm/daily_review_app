dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseObject', 'RatingFactory',
function($scope, $firebaseObject, RatingFactory) {

  var junior = new RatingFactory();
  var senior = new RatingFactory();


  $scope.juniorConfidenceNo = [];
  $scope.seniorConfidenceNo = [];

  $scope.show = function(cohort) {
    $scope.select = cohort;
  };


  var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

  var reviews = $firebaseObject(ref);

  reviews.$bindTo($scope, "users");

  $scope.getAverage = function(array){
      $scope.a = 0;
    array.forEach(function(ave){
      $scope.a+=ave;
    });
    return ($scope.a)/(array.length);
  };

  ref.on('child_added', function(dataSnapshot) {
    if (dataSnapshot.val().cohort === "Nov 2015") {
      junior.challengeRating.push(dataSnapshot.val().challenge);
      junior.feelingRating.push(dataSnapshot.val().feeling);
      junior.pairingRating.push(dataSnapshot.val().pairing);

        if(dataSnapshot.val().confidence === "Yes") {
          junior.confidenceYes.push(dataSnapshot.val().confidence);
        } else if (dataSnapshot.val().confidence === "No") {
          junior.confidenceNo.push(dataSnapshot.val().confidence);
        }

    } else if (dataSnapshot.val().cohort === "Oct 2015") {
      senior.challengeRating.push(dataSnapshot.val().challenge);
      senior.feelingRating.push(dataSnapshot.val().feeling);
      senior.pairingRating.push(dataSnapshot.val().pairing);

        if(dataSnapshot.val().confidence === "Yes") {
          senior.confidenceYes.push(dataSnapshot.val().confidence);
        } else if (dataSnapshot.val().confidence === "No") {
          senior.confidenceNo.push(dataSnapshot.val().confidence);
        }

    }
      $scope.seniorChallengeAverage = $scope.getAverage(senior.challengeRating);
      $scope.juniorChallengeAverage = $scope.getAverage(junior.challengeRating);
      $scope.seniorFeelingAverage = $scope.getAverage(senior.feelingRating);
      $scope.juniorFeelingAverage = $scope.getAverage(junior.feelingRating);
      $scope.seniorPairingAverage = $scope.getAverage(senior.pairingRating);
      $scope.juniorPairingAverage = $scope.getAverage(junior.pairingRating);

        if(junior.confidenceYes.length >= junior.confidenceNo.length) {
          $scope.juniorConfidenceAverage = "Yes";
        } else {
          $scope.juniorConfidenceAverage = "No";
        }
        if(senior.confidenceYes.length >= senior.confidenceNo.length) {
          $scope.seniorConfidenceAverage = "Yes";
        } else {
          $scope.seniorConfidenceAverage = "No";
        }
  });
}]);
