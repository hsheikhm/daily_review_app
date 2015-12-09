dailyReviewApp.controller('FormCtrl', ['$scope', '$rootScope', '$filter',
  function($scope, $rootScope, $filter) {

      var ref = new Firebase("https://shining-fire-9962.firebaseio.com");
      var cohortsRef = ref.child("cohorts");

      $scope.addReview = function() {
        ref.child($rootScope.userName).push({
          name: $rootScope.userName,
          cohort: $scope.cohort,
          pairing: $scope.pairing,
          challenge: $scope.challenge,
          feeling: $scope.feeling,
          confidence: $scope.confidence,
          comments: $scope.comments,
          date: $filter('date')(new Date(), 'dd-MM-yy')
        });
          $scope.name = '';
          $scope.pairing = '';
          $scope.challenge = '';
          $scope.feeling = '';
          $scope.confidence = '';
          $scope.comments = '';
        };

    }]);








// $scope.addReview = function() {
//   cohortsRef.child($scope.cohort).child($rootScope.userEmail || $rootScope.userName).push({
//     name: $rootScope.userEmail || $rootScope.userName,
//     cohort: $scope.cohort,
//     pairing: $scope.pairing,
//     challenge: $scope.challenge,
//     feeling: $scope.feeling,
//     confidence: $scope.confidence,
//     comments: $scope.comments,
//     date: $filter('date')(new Date(), 'dd-MM-yy')
//   });
//     $scope.name = '';
//     $scope.pairing = '';
//     $scope.challenge = '';
//     $scope.feeling = '';
//     $scope.confidence = '';
//     $scope.comments = '';
//   };
//
