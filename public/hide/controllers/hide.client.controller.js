'use strict';

angular.module('hide').controller('HideCtrl',['$scope', '$location', 

	function ($scope, $location) {

		$scope.hideNav = function () {
			var path = $location.path();
			if (path === '/' ||
				path === '/user' ||
				path === '/user/profile') {
				return true;
			} else {
				return false;
			}
		};
	}
]);