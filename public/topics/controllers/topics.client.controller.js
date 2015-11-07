'use strict';

angular.module('topics').controller('TopicsCtrl', ['$scope', 'TopicsService', 

	function ($scope, TopicsService) {

		$scope.changeTopic = function (topic) {
			updateTopic(topic);
		};

		$scope.refreshTopics = function () {
			updateTopics();
		};

		$scope.refreshSubTopics = function () {
			if ($scope.currentTopic) {
				updateTopic($scope.currentTopic);
			}
		};

		var updateTopic = function (topic) {
			TopicsService.findOne(topic).then(
				function (result) {
					$scope.currentTopic = result.topic;
				}
			);
		};

		var updateTopics = function () {
			TopicsService.list().then(
				function (result) {
					$scope.topics = result.topics;
				}
			);
		};
		
		var init = function () {
			updateTopics();

			$scope.currentTopic = null;
		};

		init();
	}
]);