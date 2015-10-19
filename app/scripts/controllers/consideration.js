'use strict';

angular.module('livingwalldesignerApp').controller('ConsiderationCtrl', ['$scope', 'SelectedItemService', function ($scope, SelectedItemService) {

	$scope.getTitle = function () {
		return SelectedItemService.getTitle();
	};

	var init = function () {
		$scope.title = $scope.getTitle();
	};

	init();
}]);