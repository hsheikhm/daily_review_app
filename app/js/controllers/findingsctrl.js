dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseArray', '$firebaseObject',
  function($scope, $firebaseArray, $firebaseObject) {

      var ref = new Firebase("https://shining-fire-9962.firebaseio.com");
      var cohortsRef = new Firebase("https://shining-fire-9962.firebaseio.com/cohorts");

      var obj = $firebaseObject(ref);
      $scope.cohorts = [];

      obj.$loaded().then(function() {
        angular.forEach(obj.cohorts, function(value, key) {
          $scope.cohorts.push(key);

        });
        console.log(obj.cohorts);
      });







  }]);

// console.log(value["Chuka Ebi"]["-K51nc6HhFWLtZUuzV9X"].pairing);

// var chukasArray = $firebaseObject(chukasRef);
//
// chukasArray.$loaded().then(function() {
//   console.log(chukasArray);
// });
