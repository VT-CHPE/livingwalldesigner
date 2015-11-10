'use strict';

angular.module('users').controller('UsersCtrl', ['$scope', '$location', 'UsersService',
	function ($scope, $location, UsersService) {
		
		$scope.current = null;

		$scope.gotoUserPanel = function () {
			$location.path('/user');
		};

		$scope.gotoProfile = function () {
			$location.path('/user/profile');
		};

		var currentUser = function () {
			UsersService.current().then(
				function (result) {
					if (result.status === 200) {
						$scope.current = result.user;
					} else {
						$scope.current = null;
						console.log(result.message);
						console.log('Something went wrong');
					}
				}
			);
		};

		var init = function () {
			currentUser();
		};

		init();
	}
]);