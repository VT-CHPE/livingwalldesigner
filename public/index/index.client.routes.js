'use strict';

angular.module('index').config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
		.when('/home', {
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
		.when('/user', {
			templateUrl: '/users/views/users.client.manage.html',
			controller: 'UsersCtrl'
		})
		.when('/user/profile', {
			templateUrl: '/users/views/users.client.profile.html',
			controller: 'UsersCtrl'
		})
		.otherwise({
			redirectTo: '/',
			templateUrl: '/index/views/main.html'
		});
	}
]);