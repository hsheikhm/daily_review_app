dailyReviewApp.controller('RegisterCtrl', ['$scope', '$location',
  function($scope, $location) {

    var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

    $scope.addUser = function() {
      ref.createUser({
      email    : $scope.email,
      password : $scope.password
    }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          if ($scope.email === "admin@makers.com") {
            console.log("Successfully created user account with uid:", userData.uid);
            $scope.$apply(function() { $location.path("/login-success-path-coach"); });
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            $scope.$apply(function() { $location.path("/login-success-path-student"); });
          }
        }
      });
    };

  }]);
