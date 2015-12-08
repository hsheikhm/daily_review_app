dailyReviewApp.controller('FormCtrl', ['$scope', '$firebaseArray', '$rootScope',
  function($scope, $firebaseArray, $rootScope) {

      var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

      // $scope.juniorReviews = $firebaseArray(juniorsRef);
      // $scope.seniorReviews = $firebaseArray(seniorsRef);

      var juniorsRef = ref.child("juniors");
      var seniorsRef = ref.child("seniors");

      $scope.addReview = function() {
        if($scope.cohort === 'Junior') {
            juniorsRef.set({
              name: $rootScope.userEmail || $rootScope.userName,
              cohort: $scope.cohort,
              pairing: $scope.pairing,
              challenge: $scope.challenge,
              feeling: $scope.feeling,
              confidence: $scope.confidence,
              comments: $scope.comments
          });
        } else {
            seniorsRef.set({
              name: $rootScope.userEmail || $rootScope.userName,
              cohort: $scope.cohort,
              pairing: $scope.pairing,
              challenge: $scope.challenge,
              feeling: $scope.feeling,
              confidence: $scope.confidence,
              comments: $scope.comments
            });
        }
          $scope.name = '';
          $scope.pairing = '';
          $scope.challenge = '';
          $scope.feeling = '';
          $scope.confidence = '';
          $scope.comments = '';
        };
}]);
