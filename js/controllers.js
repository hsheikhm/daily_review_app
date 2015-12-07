dailyReviewApp.controller('FormCtrl', ['$scope', '$firebaseArray',
  function($scope, $firebaseArray) {

    var ref = new Firebase("https://hblk9gef8nj.firebaseio-demo.com");

    $scope.messages = $firebaseArray(ref);

  }]);
