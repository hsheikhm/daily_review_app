dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseObject', '$firebaseArray',
function($scope, $firebaseObject, $firebaseArray) {

  $scope.juniorChallengeRating = [];
  $scope.seniorChallengeRating = [];

  $scope.juniorFeelingRating = [];
  $scope.seniorFeelingRating = [];

  $scope.juniorPairingRating = [];
  $scope.seniorPairingRating = [];

  $scope.juniorConfidenceYes = [];
  $scope.juniorConfidenceNo = [];
  $scope.seniorConfidenceYes = [];
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
      $scope.juniorChallengeRating.push(dataSnapshot.val().challenge);
      $scope.juniorFeelingRating.push(dataSnapshot.val().feeling);
      $scope.juniorPairingRating.push(dataSnapshot.val().pairing);

        if(dataSnapshot.val().confidence === "Yes") {
          $scope.juniorConfidenceYes.push(dataSnapshot.val().confidence);
        } else if (dataSnapshot.val().confidence === "No") {
          $scope.juniorConfidenceNo.push(dataSnapshot.val().confidence);
        }

    } else if (dataSnapshot.val().cohort === "Oct 2015") {
      $scope.seniorChallengeRating.push(dataSnapshot.val().challenge);
      $scope.seniorFeelingRating.push(dataSnapshot.val().feeling);
      $scope.seniorPairingRating.push(dataSnapshot.val().pairing);

        if(dataSnapshot.val().confidence === "Yes") {
          $scope.seniorConfidenceYes.push(dataSnapshot.val().confidence);
        } else if (dataSnapshot.val().confidence === "No") {
          $scope.seniorConfidenceNo.push(dataSnapshot.val().confidence);
        }

    }
      $scope.seniorChallengeAverage = $scope.getAverage($scope.seniorChallengeRating);
      $scope.juniorChallengeAverage = $scope.getAverage($scope.juniorChallengeRating);
      $scope.seniorFeelingAverage = $scope.getAverage($scope.seniorFeelingRating);
      $scope.juniorFeelingAverage = $scope.getAverage($scope.juniorFeelingRating);
      $scope.seniorPairingAverage = $scope.getAverage($scope.seniorPairingRating);
      $scope.juniorPairingAverage = $scope.getAverage($scope.juniorPairingRating);

        if($scope.juniorConfidenceYes.length >= $scope.juniorConfidenceNo.length) {
          $scope.juniorConfidenceAverage = "Yes";
        } else {
          $scope.juniorConfidenceAverage = "No";
        }
        if($scope.seniorConfidenceYes.length >= $scope.seniorConfidenceNo.length) {
          $scope.seniorConfidenceAverage = "Yes";
        } else {
          $scope.seniorConfidenceAverage = "No";
        }
  });
}]);
