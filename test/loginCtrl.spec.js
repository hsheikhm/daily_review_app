var MockFirebase = require('mockfirebase').MockFirebase;

describe('LoginCtrl', function() {

  var ctrl, scope, ref;

  // beforeEach(module("dailyReviewApp"));

  beforeEach(angular.mock.module("dailyReviewApp"));

  beforeEach(inject(function($controller) {
    ctrl = $controller('LoginCtrl');
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope;
  }));

  beforeEach(function() {
    MockFirebase.override();
    ref = ctrl.ref;
    ref.create({
      email: 'makers@example.com',
      password: 'makers'
    });
    ref.flush();
  });

  describe('When creating a new user', function() {

    it('it gets stored in the database', function() {
      console.assert(ref.getEmailUser('makers@example.com'), 'makers was created');
    });
  });

});
