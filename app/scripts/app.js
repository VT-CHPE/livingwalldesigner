'use strict';

/**
 * @ngdoc overview
 * @name livingwalldesignerApp
 * @description
 * # livingwalldesignerApp
 *
 * Main module of the application.
 */
angular
  .module('livingwalldesignerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toggle-switch',
    'parse-angular',
    'livingwalldesignerAux'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/auth', {
        templateUrl: 'views/user-authentication.html',
        controller: 'UserAuthCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
