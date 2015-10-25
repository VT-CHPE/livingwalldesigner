'use strict';

angular.module('livingwalldesignerApp').controller('SignInModalCtrl', function($scope, $modal) {

	$scope.animationEnabled = true;

	/*
		This function will return  modalInstance so it can be used to 
		create the signin modal
	*/
	$scope.openSignInModal = function (size) {

		var modalInstance = $modal.open({
			animation: $scope.animationEnabled,
			templateUrl: 'views/signin_modal.html',
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
});

angular.module('livingwalldesignerApp').controller('SignInModalInstanceCtrl', function ($scope, $modalInstance) {

	$scope.signIn = function () {
		console.log('signin');
		console.log($scope.username);
		console.log($scope.password);
		// the logic for auth and form validation goes here
		$modalInstance.close();
	};

	$scope.signUp = function () {
		console.log('signup');
		console.log($scope.regUsername);
		console.log($scope.regPassword);
		// the logic for signing up and form validation goes here
		$modalInstance.close();
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
});