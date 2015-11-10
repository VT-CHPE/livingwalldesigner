'use strict';

angular.module('users').factory('Users', [
	'$resource',

	function ($resource) {
		return $resource('api/users/:dest',
			{
				dest: "@dest"
			},
			{
				save: {method: "POST", params: {dest: "create"}},
				login: {method: "POST", params: {dest: "login"}},
				checkLogin: {method: "GET", params: {dest: "login"}},
				logout: {method: "GET", params: {dest: "logout"}},
				checkAdmin: {method: "GET", params: {dest: "admin"}},
				current: {method: "GET", params: {dest: "current"}}
			}
		);
	}
]);

angular.module('users').service('UsersService', ['Users',
	function (Users) {

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
			return Users.login({
				username: args.username,
				password: args.password
			})
			.$promise
			.then(
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

		this.logout = function () {
			return Users.logout()
				.$promise
				.then(
					function (response) {
						return {
							"status": 200,
							"success": true
						};
					},
					function (errorResponse) {
						return {
							"status": errorResponse.status,
							"message": errorResponse.data.message
						};
					}
				);
		};

		this.checkLogin = function () {
			return Users.checkLogin()
				.$promise
				.then(
					function (response) {
						return {
							"status": 200,
							"message": response.isLogin
						};
					},
					function (errorResponse) {
						return {
							"status": errorResponse.status,
							"message": errorResponse.data.message
						};
					}
				);
		};

		this.checkAdmin = function () {
			return Users.checkAdmin()
				.$promise
				.then(
					function (response) {
						return {
							"status": 200,
							"message": response.message
						};
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

		this.current = function () {
			return Users.current()
				.$promise
				.then(
					function (response) {
						return {
							"status": 200,
							"user": response.user,
							"message": response.message
						};
					},
					function (errorResponse) { // shouldn't happen
						return {
							"status": errorResponse.status,
							"message": errorResponse.data.message
						};
					}
				);
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