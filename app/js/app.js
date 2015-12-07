var dailyReviewApp = angular.module("dailyReviewApp", ["firebase", "ngRoute"]);

dailyReviewApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/partials/register.html',
        controller: 'RegisterCtrl'
      }).
      when('/login', {
        templateUrl: 'app/partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/login-success-path-student', {
        templateUrl: 'app/partials/student-form.html',
        controller: 'FormCtrl'
      }).
      when('/login-success-path-coach', {
        templateUrl: 'app/partials/coach-findings.html',
        controller: 'FindingsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
