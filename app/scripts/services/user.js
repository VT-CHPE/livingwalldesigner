'use strict';
angular.module('livingwalldesignerApp').service('User', function ($rootScope, $http, $cookies, $location, $q, ParseInfo) {
  //ParseInfo define in file excluded from git (to protect against public viewing on github)
  var userService = this;

  this.current = {};
  // this.current
  this.enrollments = [];

  if (Parse.User.current()) {
    this.current = Parse.User.current();
  }

  this.register = function (options) {
    var user = new Parse.User();
    user.set("username", options.email);
    user.set("fullname", options.fullname);
    user.set("password", options.pw);
    user.set("email", options.email);
    console.log('register user:', user);
     
    // other fields can be set just like with Parse.Object
    // user.set("phone", "415-392-0202");
     
    user.signUp(null, {
      success: function(user) {
        console.log('BOO-YOW!', user);
        userService.current = user;
        $rootScope.$apply(function() {
          console.log('redirecting to', options.then);
          $location.path(options.then);
        });
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        console.error("Error: " + error.code + " " + error.message);
      }
    });
  };

  this.login = function (userInfo) {
    console.log('login', userInfo);
    Parse.User.logIn(userInfo.email, userInfo.pw, {
      success: function(user) {
        // Do stuff after successful login.
        console.log('GREAT success!', user);
        userService.current = user;
        $rootScope.$apply(function() {
          console.log('redirecting to', userInfo.then);
          $location.path(userInfo.then);
        });
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        console.error('loginerror', user, error);
      }
    });
  };
});