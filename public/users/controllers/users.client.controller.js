'use strict';

angular.module('users').controller('UsersCtrl', ['$scope', '$location', 'UsersService', 'CurrentUserService',
	function ($scope, $location, UsersService, CurrentUserService) {

		$scope.updateProfileResult = {
			"message": "",
			"success": false,
			"show": false
		};
		$scope.current = null;
		$scope.settings = [
			{"title": "Profile", "detail-title": "Public Profile", "url": "users/views/users.client.set-profile.html"},
			{"title": "Account Settings", "detail-title": "Account Settings", "url": "users/views/users.client.set-account.html"},
			{"title": "Emails", "detail-title": "Emails", "url": "users/views/users.client.set-emails.html"}
		];

		$scope.currentEdit = $scope.settings[0];

		$scope.gotoUserPanel = function () {
			$location.path('/user');
		};

		$scope.gotoProfile = function () {
			$location.path('/user/profile');
		};

		$scope.changeEdit = function (sts) {
			$scope.currentEdit = sts;
		};

		$scope.updateNames = function () {
			UsersService.update($scope.current).then(
				function (result) {
					if (result.status === 200) {
						$scope.updateProfileResult.message = "Update Succeed";
						$scope.updateProfileResult.success = true;
						CurrentUserService.refreshCurrentUser();
						console.log('here1');
					} else {
						$scope.updateProfileResult.message = "Update Fail";
						$scope.updateProfileResult.success = false;
						console.log('here2');
					}
					$scope.updateProfileResult.show = true;
					console.log('here');
				}
			);
		};

		$scope.updateSuccess = function () {
			return $scope.updateProfileResult.success;
		};

		$scope.getCurrentUser = function () {
			return CurrentUserService.getCurrentUser();
		};

		var init = function () {
			$scope.current = CurrentUserService.getCurrentUser();
			if ($scope.current === null) {
				var path = $location.path();
				if (path === '/user/profile' ||
					path === '/user') {
					$location.path("/");
				}
			}
			console.log('init');
		};

		init();
	}
]);