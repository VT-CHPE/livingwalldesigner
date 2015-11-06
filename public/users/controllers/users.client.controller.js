'use strict';

angular.module('users').controller('UsersCtrl', ['$scope', 'UsersService',
	function ($scope, UsersService) {
		
		$scope.isAdmin = false;

		var init = function () {
			UsersService.checkAdmin().then(
				function (result) {
					if (result.status === 401) {
						// not logged in
						$scope.isAdmin = false;
						console.log('result = ' + result);
					} else if (result.status === 200) {
						$scope.isAdmin = result.message;
					}
				}
			);
		};

		init();
	}
]);