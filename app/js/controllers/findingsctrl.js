dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseArray', '$firebaseObject',
  function($scope, $firebaseArray, $firebaseObject) {

      var ref = new Firebase("https://shining-fire-9962.firebaseio.com");




    var obj = $firebaseObject(ref);
    $scope.cohorts = [];

    obj.$loaded().then(function() {
      angular.forEach(obj.cohorts, function(value, key) {
        $scope.cohorts.push(key);
      });
    });
<<<<<<< HEAD
=======
    $scope.data = obj;
    obj.$bindTo($scope, "data");




>>>>>>> master








    // $scope.object = $firebaseObject(ref);
    //
    // console.log($scope.object.cohorts);
    //



    // var sync = $firebase(firebaseObj);
    //
    // $scope.cohorts = sync.$asArray();



  //   $scope.information = {};
  //
  //   $scope.grabData = function() {
  //     ref.on("value", function(snapshot) {
  //       $scope.information = snapshot.val();
  //     console.log(snapshot.val());
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // };


  }]);
