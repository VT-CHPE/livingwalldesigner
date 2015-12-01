'use strict';

angular.module('users').service('CurrentUserService', ['UsersService',
	function (UsersService) {
		var currentUser = null;

		this.getCurrentUser = function () {
			return currentUser;
		};

		this.setCurrentUser = function (newUser) {
			console.log('set called');
			currentUser = newUser;
		};

		this.refreshCurrentUser = function () {
			UsersService.current().then(
				function (result) {
					if (result.status === 200) {
						currentUser = result.user;
					} else {
						console.log(result.message);
						console.log('Something went wrong');
					}
				}
			);
		};
	}
]);