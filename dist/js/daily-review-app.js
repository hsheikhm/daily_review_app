var dailyReviewApp = angular.module("dailyReviewApp", ["firebase", "ngRoute"]);

dailyReviewApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'dist/partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/register', {
        templateUrl: 'dist/partials/register.html',
        controller: 'RegisterCtrl'
      }).
      when('/login-success-path-student', {
        templateUrl: 'dist/partials/student-form.html',
        controller: 'FormCtrl'
      }).
      when('/login-success-path-coach', {
        templateUrl: 'dist/partials/coach-findings.html',
        controller: 'FindingsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

// next file:
dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseObject', 'RatingFactory',
function($scope, $firebaseObject, RatingFactory) {

  var ref = new Firebase("https://shining-fire-9962.firebaseio.com");
  var reviews = $firebaseObject(ref);
  reviews.$bindTo($scope, "users");

  var junior = new RatingFactory();
  var senior = new RatingFactory();

  $scope.show = function(cohort) {
    $scope.select = cohort;
  };

  $scope.getAverage = function(array){
    $scope.a = 0;
    array.forEach(function(ave){
      $scope.a+=ave;
    });
    return ($scope.a)/(array.length);
  };

  $scope.updateAverages = function() {
    $scope.seniorChallengeAverage = $scope.getAverage(senior.challengeRating);
    $scope.juniorChallengeAverage = $scope.getAverage(junior.challengeRating);
    $scope.seniorFeelingAverage = $scope.getAverage(senior.feelingRating);
    $scope.juniorFeelingAverage = $scope.getAverage(junior.feelingRating);
    $scope.seniorPairingAverage = $scope.getAverage(senior.pairingRating);
    $scope.juniorPairingAverage = $scope.getAverage(junior.pairingRating);
  };

  $scope.updateConfidenceAverages = function() {
    if (junior.moreConfident()) { $scope.juniorConfidenceAverage = "Yes"; }
    else { $scope.juniorConfidenceAverage = "No"; }
    if (senior.moreConfident()) { $scope.seniorConfidenceAverage = "Yes"; }
    else { $scope.seniorConfidenceAverage = "No"; }
  };

  ref.on('child_added', function(dataSnapshot) {
    if (dataSnapshot.val().cohort === "Nov 2015") {
      junior.collectRatings(dataSnapshot);
    } else if (dataSnapshot.val().cohort === "Oct 2015") {
      senior.collectRatings(dataSnapshot);
    }
    $scope.updateAverages(); $scope.updateConfidenceAverages();
  });
}]);

// next file:
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

// next file:
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

// next file:
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
          if ($scope.makersAdmin()) {
            console.log("Successfully created user account with uid:", userData.uid);
            $scope.$apply(function() { $location.path("/login-success-path-coach"); });
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            $scope.$apply(function() { $location.path("/login-success-path-student"); });
          }
        }
      });
    };

    $scope.makersAdmin = function() {
      return $scope.email === "admin@makers.com";
    };

}]);

// next file:
dailyReviewApp.controller('ToggleCtrl', ['$scope',
  function($scope) {

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

// next file:
dailyReviewApp.directive("juniorsRatings", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/juniors-ratings.html'
  };
});

dailyReviewApp.directive("seniorsRatings", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/seniors-ratings.html'
  };
});

// next file:
dailyReviewApp.directive("cohortQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/cohort-question.html'
  };
});

dailyReviewApp.directive("pairingQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/pairing-question.html'
  };
});

dailyReviewApp.directive("challengeQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/challenge-question.html'
  };
});

dailyReviewApp.directive("confidenceQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/confidence-question.html'
  };
});

dailyReviewApp.directive("feelingQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/feeling-question.html'
  };
});

dailyReviewApp.directive("commentsQuestion", function() {
  return {
    restrict: 'E',
    templateUrl: '/views/comments-question.html'
  };
});

// next file:
dailyReviewApp.directive('sidebarDirective', function() {
  return {
    link : function(scope, element, attr) {
        scope.$watch(attr.sidebarDirective,function(newVal) {
          if(newVal){
            element.addClass('show');
            return;
          }
          element.removeClass('show');
        });
      }
    };
});

// next file:
dailyReviewApp.factory('RatingFactory', function() {
  function ratingFactory() {
    this.challengeRating = []; this.feelingRating = []; this.pairingRating = [];
    this.confidenceYes = []; this.confidenceNo = [];

    this.collectRatings = function(dataSnapshot) {
      this.challengeRating.push(dataSnapshot.val().challenge);
      this.feelingRating.push(dataSnapshot.val().feeling);
      this.pairingRating.push(dataSnapshot.val().pairing);
      this.collectConfidenceRatings(dataSnapshot);
    };

    this.collectConfidenceRatings = function(dataSnapshot) {
      if(dataSnapshot.val().confidence === "Yes") {
        this.confidenceYes.push(dataSnapshot.val().confidence);
      } else if (dataSnapshot.val().confidence === "No") {
        this.confidenceNo.push(dataSnapshot.val().confidence);
      }
    };

    this.moreConfident = function() {
      return this.confidenceYes.length >= this.confidenceNo.length;
    };
  }
  return ratingFactory;
});
