'use strict';

angular.module('users').controller('UsersCtrl', ['$scope', '$location', 'UsersService',
	function ($scope, $location, UsersService) {
		
		$scope.isAdmin = false;

		var init = function () {
			UsersService.checkAdmin().then(
				function (result) {
					if (result.status === 401) {
						// not logged in
						$scope.isAdmin = false;
						console.log('result = ' + result);
					} else if (result.status === 200) {
						if (result.message) {
							$scope.isAdmin = true;
						} else {
							$scope.isAdmin = false;
						}
					}
				}
			);
		};

		$scope.templateUrl = function () {
			var path = $location.path();
			if (path !== '/admin') {
				return "index/views/nav.html";
			} else {
				return "admin/views/nav.html";
			}
		};

		init();
	}
]);