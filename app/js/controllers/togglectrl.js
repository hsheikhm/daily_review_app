dailyReviewApp.controller('ToggleCtrl',['$scope', function($scope) {

  $scope.state = false;

  $scope.toggleState = function() {
    $scope.state = !$scope.state;
  };

  $scope.hoverOn = function() {
    this.showStats = true;
  };

  $scope.hoverNot = function() {
    this.showStats = false;
  };

}]);
