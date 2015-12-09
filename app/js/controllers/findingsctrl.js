dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseObject', '$firebaseArray',
function($scope, $firebaseObject, $firebaseArray) {

  $scope.juniorChallengeRating = [];
  $scope.seniorChallengeRating = [];
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

    } else if (dataSnapshot.val().cohort === "Oct 2015") {
      $scope.seniorChallengeRating.push(dataSnapshot.val().challenge);
    }
      $scope.seniorChallengeAverage = $scope.getAverage($scope.seniorChallengeRating);
      $scope.juniorChallengeAverage = $scope.getAverage($scope.juniorChallengeRating);
  });

}]);
