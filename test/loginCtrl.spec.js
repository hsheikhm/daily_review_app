describe('LoginCtrl', function() {

  var ctrl, scope, ref;
  var FirebaseServer = require('firebase-server');

  new FirebaseServer(5000, 'test.firebase.localhost', {
    users: {
      "Hamza Sheikh": "hamza@makers.com"
    }
  });

  beforeEach(module("dailyReviewApp"));

  beforeEach(inject(function($controller) {
    ctrl = $controller('LoginCtrl');
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope;
  }));

  describe('When creating a new user', function() {

    it('it gets stored in the database', function() {
      var client = new Firebase('ws://test.firebase.localhost:5000');
      client.on('value', function(snap) {
          console.log('Got value: ', snap.val());
      });
    });
  });

});
