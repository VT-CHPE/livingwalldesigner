'use strict';

angular.module('index').controller('SignInModalCtrl', ['$scope', '$modal', 'UsersService',
	function($scope, $modal, UsersService) {

		$scope.animationEnabled = true;

		$scope.loggedIn = function () {
			var auth = UsersService.authentication;
			if (typeof auth === 'undefined' || auth === null) {
				return false;
			}
			return true;
		};

		/*
			This function will return  modalInstance so it can be used to 
			create the signin modal
		*/
		$scope.openSignInModal = function (size) {

			var modalInstance = $modal.open({
				animation: $scope.animationEnabled,
				templateUrl: '/index/views/signin_modal.html',
				controller: 'SignInModalInstanceCtrl',
				size: size,
				resolve: {

				}
			});


			// when the signin modal is closed, this will be called
			modalInstance.result.then(
				function () {
					console.log('result');
				}
			);
		};
	}
]);

angular.module('index').controller('SignInModalInstanceCtrl', ['$scope', '$modalInstance', '$location', 'UsersService',
	function ($scope, $modalInstance, $location, UsersService) {

	$scope.signIn = function () {
		console.log('signin');
		// the logic for auth and form validation goes here
		// admin
		UsersService.login($scope.login).then(
			function (result) {
				if (result !== null) {
					$scope.errorMessage = result.message;
				} else {
					$modalInstance.close();
				}
			}
		);
	};

	var admin = function (username, password) {
		if (username === "admin" && password === "admin") {
			return true;
		}
		return false;
	}

	$scope.signUp = function () {
		console.log('signup');
		UsersService.create($scope.reg).then(function (result) {
			if (result !== null) {
				$scope.errorMessage = result.message;
			} else {
				$modalInstance.close();
			}
		});/*
		console.log('errorMessage = ' + errorMessage);
		if (errorMessage) {
			console.log('errorMessage = ' + errorMessage);
		} else {
			$modalInstance.close();
		}*/
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.changeToSignIn = function () {
		$scope.username = '';
		$scope.password = '';
		$scope.isSignIn = true;
		$scope.modalTitle = 'Sign In';
	};

	$scope.changeToSignUp = function () {
		console.log('change');
		$scope.regUsername = '';
		$scope.regPassword = '';
		$scope.isSignIn = false;
		$scope.modalTitle = 'Sign Up';
	};

	// initialize the content of the sign in modal
	var init = function () {
		$scope.username = '';
		$scope.password = '';
		$scope.regUsername = '';
		$scope.regPassword = '';
		$scope.rememberMe = false;
		$scope.isSignIn = true;
		$scope.modalTitle = "Sign In";
	};

	init();
}]);