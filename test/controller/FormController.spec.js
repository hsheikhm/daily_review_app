describe("Form Controller Spec", function() {
  var MockFirebase = require('mockfirebase').MockFirebase;
  window.MockFirebase.override();

  var firebaseRef, scope;

  beforeEach(function() {
    module("dailyReviewApp")
    inject(function ($rootscope, $controller, $firebaseObject, $filter) {
      scope = $rootScope.$new();

      $controller("FormCtrl", {
        $scope : scope,
        $firebaseObject: $firebaseObject
      });

      firebaseRef = new Firebase("https://shining-fire-9962.firebaseio.com");
    });
  });

  it('should save the data to firebase', function(){
    var response;
    firebaseRef.on("value", function(data) {
      response = data.val();
    });

    firebaseRef.flush();
    scope.digest();
    console.log(response);
  })
});
