dailyReviewApp.controller('FormCtrl', ['$scope', '$rootScope', '$filter',
  function($scope, $rootScope, $filter) {

      var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

      $scope.addReview = function() {
        ref.push({
          name: $rootScope.userName,
          cohort: $scope.cohort,
          pairing: $scope.pairing,
          challenge: $scope.challenge,
          feeling: $scope.feeling,
          confidence: $scope.confidence,
          comments: $scope.comments,
          date: $filter('date')(new Date(), 'dd-MM-yy')
        });
          $scope.cohort = '';
          $scope.name = '';
          $scope.pairing = '';
          $scope.challenge = '';
          $scope.feeling = '';
          $scope.confidence = '';
          $scope.comments = '';
        };
    }]);
