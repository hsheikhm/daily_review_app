dailyReviewApp.controller('FormCtrl', ['$scope', '$firebaseObject',
  function($scope, $firebaseObject) {

    var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

    $scope.data = $firebaseObject(ref);

  }]);
