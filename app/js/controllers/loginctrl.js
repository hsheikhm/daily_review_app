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
        } else {
          if ($scope.email === "admin@makers.com") {
            console.log("Authenticated successfully with payload:", authData);
            $scope.$apply(function() { $location.path("/login-success-path-coach"); });
          } else {
            console.log("Authenticated successfully with payload:", authData);
            $scope.$apply(function() { $location.path("/login-success-path-student"); });
            $rootScope.userEmail = authData.password.email;
          }
        }
      });
    };


    $scope.loginGitHub = function() {
        ref.authWithOAuthPopup("github", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData.github.displayName);
          $scope.$apply(function() { $location.path("/login-success-path-student"); });
          $rootScope.userName = authData.github.displayName;
        }
      });
    };
  }]);
