'use strict';

angular.module('index').config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'index/views/home.html',
		})
		.when('/topic', {
			templateUrl: 'index/views/topic.html',
			controller: 'CurrentTopicCtrl',
		})
		.when('/sub-topic', {
			templateUrl: 'index/views/sub-topic.html',
			controller: 'CurrentTopicCtrl'
		})
		.when('/contact', {
			templateUrl: 'index/views/contact.html',
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);