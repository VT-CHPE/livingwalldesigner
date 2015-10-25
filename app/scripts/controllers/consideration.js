'use strict';

angular.module('livingwalldesignerApp').controller('ConsiderationCtrl', ['$scope', 'SelectedItemService', function ($scope, SelectedItemService) {

	$scope.getTitle = function () {
		return SelectedItemService.getTitle();
	};

	$scope.getSections = function () {
		return SelectedItemService.getSections();
	};
}]);