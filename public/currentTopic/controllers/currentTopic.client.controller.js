'use strict';

angular.module('currentTopic').controller('CurrentTopicCtrl', ['$scope', 'CurrentTopicService',

	function ($scope, CurrentTopicService) {
		$scope.currentTopic = function () {
			return CurrentTopicService.getCurrentTopic();
		};

		$scope.setCurrentTopic = function (topic) {
			CurrentTopicService.setCurrentTopic(topic);
		};

		$scope.layout = function () {
			var cur = $scope.currentTopic();
			if (cur === null) {
				return null;
			}
			if (typeof cur.layout === "undefined") {
				return null;
			} else {
				console.log('layout = ' + cur.layout);
				return cur.layout;
			}
		};
	}

]);