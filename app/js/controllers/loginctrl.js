dailyReviewApp.controller('LoginCtrl', ['$scope', '$location', '$rootScope',
  function($scope, $location, $rootScope) {

    var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

    $scope.loginUser = function() {
      ref.authWithPassword({
        email    : $scope.email,
        password : $scope.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else { $scope.allowLogin(authData); }
      });
    };

    $scope.allowLogin = function(authData) {
      if ($scope.makersAdmin()) {
        console.log("Authenticated successfully with:", authData);
        $scope.$apply(function() { $location.path("/login-success-path-coach"); });
      } else {
        console.log("Authenticated successfully with:", authData);
        $scope.$apply(function() { $location.path("/login-success-path-student"); });
      }
    };

    $scope.makersAdmin = function() {
      return $scope.email === "admin@makers.com";
    };

    $scope.loginGitHub = function() {
      ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with:", authData.github.displayName);
        $scope.$apply(function() { $location.path("/login-success-path-student"); });
        $rootScope.userName = authData.github.displayName;
      }
    });
  };
}]);
