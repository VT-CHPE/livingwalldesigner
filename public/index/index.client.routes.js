'use strict';

angular.module('index').config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'index/views/home.html',
		})
		.when('/topic', {
			templateUrl: 'index/views/topic.html',
		})
		.when('/chpe', {
			templateUrl: 'index/views/chpe.html',
		})
		.when('/help', {
			templateUrl: 'index/views/help.html',
		})
		.when('/about', {
			templateUrl: 'index/views/about.html',
		})
		.when('/contact', {
			templateUrl: 'index/views/contact.html',
		})
		.when('/admin', {
			templateUrl: 'admin/views/home.html',
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);