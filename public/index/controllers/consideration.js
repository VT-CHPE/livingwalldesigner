'use strict';

angular.module('index').controller('ConsiderationCtrl', ['$scope', 'CurrentTopicService', function ($scope, CurrentTopicService) {

	$scope.getTitle = function () {
		return CurrentTopicService.getTitle();
	};

	$scope.getSections = function () {
		return CurrentTopicService.getSections();
	};
}]);