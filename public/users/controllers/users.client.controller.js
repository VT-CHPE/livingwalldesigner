'use strict';

angular.module('users').service('UsersService', ['Authentication', 'Users',
	function (Authentication, Users) {
		var authentication = Authentication;

		this.create = function (args) {
			var user = new Users({
				firstName: args.firstName,
				lastName: args.lastName,
				email: args.email,
				occupation: args.occupation,
				username: args.username,
				password: args.password
			});

			return user.$save().then(
				function (response) {
					return null;
				},
				function (errorResponse) {
					return {
						"status": errorResponse.status,
						"message": errorResponse.data.message
					};
				}
			);
		};

		this.login = function (args) {
			console.log(Authentication);
			var temp = Users.login({
				username: args.username,
				password: args.password
			});
			return temp.$promise.then(
				function (response) {
					return null;
				},
				function (errorResponse) {
					return {
						"status": errorResponse.status,
						"message": errorResponse.data.message
					};
				}
			);
		};

		this.find = function () {
			this.users = Users.query();
		};

		this.findOne = function (args) {
			this.user = Users.get({
				userId: args.userId
			});
		};

		this.update = function () {
			this.user.$update(
				function () {
					return {errorMessage: null};
				},
				function (errorResponse) {
					return {errorMessage: errorResponse.data.message};
				}
			);
		};

		this.delete = function (user) {
			if (user) {
				user.$remove(function () {
					for (var i in this.users) {
						if (this.users[i] === user) {
							this.users.splice(i, 1);
						}
					}
				});
			} else {
				this.user.$remove(function () {
					return {errorMessage: null};
				});
			}
		};
	}
]);