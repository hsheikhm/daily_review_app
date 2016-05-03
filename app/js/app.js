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
