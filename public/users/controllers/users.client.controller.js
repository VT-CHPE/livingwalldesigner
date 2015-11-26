'use strict';

angular.module('users').controller('UsersCtrl', ['$scope', '$location', 'UsersService',
	function ($scope, $location, UsersService) {

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
					} else {
						$scope.updateProfileResult.message = "Update Fail";
						$scope.updateProfileResult.success = false;
					}
					$scope.updateProfileResult.show = true;
					console.log('here');
				}
			);
		};

		$scope.updateSuccess = function () {
			return $scope.updateProfileResult.success;
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