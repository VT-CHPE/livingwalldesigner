'use strict';

angular.module('admin').config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'admin/views/home.html',
		})
		.when('/manage-site-content', {
			templateUrl: 'admin/views/manage-site-content.html'
		})
		.when('/manage-users', {
			templateUrl: 'admin/views/manage-users.html'
		})
		.when('/manage-server-files', {
			templateUrl: 'admin/views/manage-server-files.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);