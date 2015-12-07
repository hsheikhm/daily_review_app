dailyReviewApp.controller('FormCtrl', ['$scope', '$firebaseArray',
  function($scope, $firebaseArray) {

      var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

      $scope.reviews = $firebaseArray(ref);

      $scope.addReview = function() {
        $scope.reviews.$add({
          name: $scope.name
        });
      }


}]);
