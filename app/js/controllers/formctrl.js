dailyReviewApp.controller('FormCtrl', ['$scope', '$firebaseArray', '$rootScope', '$filter',
  function($scope, $firebaseArray, $rootScope, $filter) {

      var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

      var juniorsRef = ref.child("juniors");
      var seniorsRef = ref.child("seniors");

      $scope.addReview = function() {
        if($scope.cohort === 'Junior') {
            juniorsRef.child($rootScope.userEmail || $rootScope.userName).push({
              name: $rootScope.userEmail || $rootScope.userName,
              cohort: $scope.cohort,
              pairing: $scope.pairing,
              challenge: $scope.challenge,
              feeling: $scope.feeling,
              confidence: $scope.confidence,
              comments: $scope.comments,
              date: $filter('date')(new Date(), 'dd-MM-yy')
          });
        } else {
            seniorsRef.child($rootScope.userEmail || $rootScope.userName).push({
              name: $rootScope.userEmail || $rootScope.userName,
              cohort: $scope.cohort,
              pairing: $scope.pairing,
              challenge: $scope.challenge,
              feeling: $scope.feeling,
              confidence: $scope.confidence,
              comments: $scope.comments,
              date: $filter('date')(new Date(), 'dd-MM-yy')
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
