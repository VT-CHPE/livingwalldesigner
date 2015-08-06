angular.module('livingwalldesignerApp').directive('auth', function(User) {
  return {
    restrict: 'E',
    scope: { 
      formType: '=',
      then: '='
    },
    // transclude: true,
    replace: true,
    templateUrl: 'scripts/directives/auth.html',
    link: function (scope, iElement, iAttrs, controller) {
      console.log(scope.then);
      console.log(scope, iElement, iAttrs, controller);
      // scope.panelTitle = iAttrs.panelTitle;

      scope.userInfo = {
        fullname: '',
        email: '',
        pw: '',
        pwconfirm: '',
      };

      scope.auth = function (then) {
        console.log('then', then);
        if (scope.formType === 'login') {
          scope.login(then);
        } else {
          scope.register(then);
        }
      };

      scope.register = function (then) {
        User.register({
          fullname: scope.userInfo.fullname,
          email: scope.userInfo.email,
          pw: scope.userInfo.pw,
          then: then
        });
      };

      scope.login = function (then) {
        User.login({
          email: scope.userInfo.email,
          pw: scope.userInfo.pw,
          then: then
        });
      };

      scope.fbLogin = function (then) {
        User.fbLogin({ then:then });
      };

      scope.isValid = function () {
        if (scope.formType === 'login') {
          return scope.hasOwnProperty('userInfo')
            && scope.userInfo.hasOwnProperty('email')
            && scope.userInfo.email
            && scope.userInfo.email.length > 0 
            && scope.userInfo.hasOwnProperty('pw')
            && scope.userInfo.pw.length > 0;
        } else {
          return scope.hasOwnProperty('userInfo')
            && scope.userInfo.hasOwnProperty('fullname')
            && scope.userInfo.fullname.length > 0 
            && scope.userInfo.hasOwnProperty('email')
            && scope.userInfo.email && scope.userInfo.email.length > 0 
            && scope.userInfo.hasOwnProperty('pw')
            && scope.userInfo.pw.length > 0
            && scope.userInfo.hasOwnProperty('pwconfirm')
            && scope.userInfo.pwconfirm === scope.userInfo.pw;
        }
      };
    }
  };
});