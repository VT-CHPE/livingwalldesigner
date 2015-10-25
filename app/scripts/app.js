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
    'livingwalldesignerAux',
    'ui.bootstrap'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/chpe', {
        templateUrl: 'views/chpe.html',
      })
      .when('/help', {
        templateUrl: 'views/help.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/auth', {
        templateUrl: 'views/user-authentication.html',
        controller: 'UserAuthCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });