'use strict';

angular.module('index').controller('SignInModalCtrl', ['$scope', '$modal', 'UsersService',
	function($scope, $modal, UsersService) {

		$scope.animationEnabled = true;
		var inText = 'Sign In';
		var outText = 'Sign Out';

		$scope.inOrOut = function () {
			UsersService.checkLogin().then(
				function (result) {
					if (result.status === 200) {
						if (!result.message) { // not logged in
							openSignInModal();
						} else { // logged in
							signOut();
						}
					} else {
						console.log('something went wrong');
					}
				}
			);
		};

		/*
			This function will return  modalInstance so it can be used to 
			create the signin modal
		*/
		var openSignInModal = function (size) {

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
				function () {	// sign in successfully
					$scope.buttonText = outText;
				},
				function () {	// user has dismissed the modal
					$scope.buttonText = inText;
				}
			);
		};

		var signOut = function () {
			UsersService.logout().then(
				function (result) {
					if (result.status === 200 && result.success) {
						$scope.buttonText = inText;
					} else {
						// something went wrong
						console.log(result);
					}
				}
			);
		};

		var init = function () {
			UsersService.checkLogin().then(
				function (result) {
					console.log('result = ' + result);
					if (result.status === 200) {
						if (result.message) {
							$scope.buttonText = outText;
						} else {
							$scope.buttonText = inText;
						}
					} else {
						console.log('something went wrong');
					}
				}
			);
		};

		init();
	}
]);

angular.module('index').controller('SignInModalInstanceCtrl', ['$scope', '$modalInstance', '$location', 'UsersService',
	function ($scope, $modalInstance, $location, UsersService) {

	$scope.signIn = function () {
		$scope.errorMessage = '';

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

	$scope.signUp = function () {
		$scope.errorMessage = '';

		UsersService.create($scope.reg).then(function (result) {
			if (result !== null) {
				$scope.errorMessage = result.message;
			} else {
				$modalInstance.close();
			}
		});
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.changeToSignIn = function () {
		$scope.errorMessage = '';
		$scope.username = '';
		$scope.password = '';
		$scope.isSignIn = true;
		$scope.modalTitle = 'Sign In';
	};

	$scope.changeToSignUp = function () {
		console.log('change');
		$scope.errorMessage = '';
		$scope.reg.username = '';
		$scope.reg.password = '';
		$scope.isSignIn = false;
		$scope.modalTitle = 'Sign Up';
	};

	// initialize the content of the sign in modal
	var init = function () {
		$scope.username = '';
		$scope.password = '';
		$scope.errorMessage = '';
		$scope.reg = {};
		$scope.reg.username = '';
		$scope.reg.password = '';
		$scope.rememberMe = false;
		$scope.isSignIn = true;
		$scope.modalTitle = "Sign In";
	};

	init();
}]);