dailyReviewApp.controller('FindingsCtrl', ['$scope', '$firebaseObject', '$firebaseArray',
function($scope, $firebaseObject, $firebaseArray) {

  var ref = new Firebase("https://shining-fire-9962.firebaseio.com");

  var reviews = $firebaseObject(ref);

  reviews.$bindTo($scope, "users");

  $scope.users = [];




  // reviews.$loaded(function(data) {
    //   angular.forEach(data, function(value, key) {
      //     angular.forEach(value, function(val, ky) {
        //       $scope.users.push(val);
        //     });
        //   });
        // });


        // ref.on('child_added', function(childSnapshot, prevChildKey) {
          //   console.log(childSnapshot);
          // });


        }]);

        // $scope.getAverage = function(array) {
          //   var total = 0;
          //   for(var i = 0; i < array.length; i++) {
            //     total += array[i].pairing;
            //   }
            //   var avg = total / array.length;
            //   return avg;
            // };

            // fullDataObj.$bindTo($scope, "data");

            // $scope.seniors = 'Oct 2015';
            // $scope.juniors = 'Nov 2015';
            // $scope.cohorts = [];
            // $scope.juniorChallengeRatings = [];
            // $scope.seniorChallengeRatings = [];
            // $scope.juniorFeelingRatings = [];
            // $scope.seniorFeelingRatings = [];
            // $scope.juniorPairingRatings = [];
            // $scope.seniorPairingRatings = [];
            //
          // $scope.users = [{pairing: 1}, {pairing: 5}, {pairing: 2}, {pairing: 3}, {pairing: 4} ];


          //
          // fullDataObj.$bindTo($scope, "data").then(function() {
            //   angular.forEach($scope.data.cohorts, function(value, key) {
              //     $scope.cohorts.push(key);
              //     angular.forEach(value, function(v, k) {
                //       angular.forEach(v, function(vl, ky) {
                  //         // console.log(vl);
                  //         if(vl.cohort === $scope.juniors) {
                    //           $scope.juniorChallengeRatings.push(vl.challenge);
                    //           $scope.juniorFeelingRatings.push(vl.feeling);
                    //           $scope.juniorPairingRatings.push(vl.pairing);
                    //         } else {
                      //           $scope.seniorChallengeRatings.push(vl.challenge);
                      //           $scope.seniorFeelingRatings.push(vl.feeling);
                      //           $scope.seniorPairingRatings.push(vl.pairing);
                      //         }
                      //       });
                      //     });
                      //   });
                      // });
