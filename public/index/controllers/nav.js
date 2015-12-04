'use strict';

angular.module('index').controller('NavCtrl', ['$scope', '$location', 'TopicsService', 'CurrentTopicService',
	function ($scope, $location, TopicsService, CurrentTopicService) {
		var currentActive = null;

		$scope.hasSub = function (topic) {
			return topic.subTopicNames.length !== 0;
		};

		$scope.expandTopic = function (topic) {
			if ($scope.hasSub(topic)) {
				topic.isExpanded = !topic.isExpanded;
			}
		};

		$scope.isActive = function (args) {
			currentActive = CurrentTopicService.getCurrentTopic();
			if (currentActive === null) {
				return false;
			}
			return args._id === currentActive._id ? true : false;
		};

		$scope.activeTopic = function (topic) {
			currentActive = topic;
			CurrentTopicService.setCurrentTopic(currentActive);
			$location.path('/topic');
		};

		$scope.activeSub = function (sub) {
			currentActive = sub;
			CurrentTopicService.setCurrentTopic(currentActive);
			$location.path('/sub-topic');
		};

		var updateTopics = function () {
			TopicsService.list().then(
				function (result) {
					$scope.topics = result.topics;
					for (var i = 0; i < $scope.topics.length; i++) {
						$scope.topics[i].isExpanded = false;
					}
					
				}
			);
		};

		var init = function () {
			console.log("nav js");
			updateTopics();
			currentActive = CurrentTopicService.getCurrentTopic();
		};

		init();
	}
]);