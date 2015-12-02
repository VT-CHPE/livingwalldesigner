'use strict';

angular.module('currentTopic').controller('CurrentTopicCtrl', ['$scope', 'CurrentTopicService',

	function ($scope, CurrentTopicService) {
		$scope.currentTopic = function () {
			return CurrentTopicService.getCurrentTopic();
		};

		$scope.setCurrentTopic = function (topic) {
			CurrentTopicService.setCurrentTopic(topic);
		};
	}

]);