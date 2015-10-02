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
    'ngTouch'
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
      .when('/login', {
		  templateUrl: 'views/login.html',
		  controller: 'LoginCtrl',
		  controllerAs: 'login'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });
