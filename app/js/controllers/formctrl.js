dailyReviewApp.controller('FormCtrl', ['$scope', '$rootScope', '$filter',
  function($scope, $rootScope, $filter) {

    var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

    $scope.addReview = function() {
      ref.push({
        name: $rootScope.userName,
        cohort: $scope.cohort,
        pairing: $scope.pairing,
        pairingExtra: $scope.pairingExtra || '',
        challenge: $scope.challenge,
        challengeExtra: $scope.challengeExtra || '',
        feeling: $scope.feeling,
        feelingExtra: $scope.feelingExtra || '',
        confidence: $scope.confidence,
        comments: $scope.comments || '',
        date: $filter('date')(new Date(), 'dd-MM-yy')
      });
    };

    $scope.thankYou = function() {
        $scope.done = true;
    };
}]);
