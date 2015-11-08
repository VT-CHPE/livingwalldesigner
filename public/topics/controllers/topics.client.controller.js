'use strict';

angular.module('topics').controller('TopicsCtrl', ['$scope', 'TopicsService', 

	function ($scope, TopicsService) {
		$scope.isSub = null;

		$scope.selected = function (topic) {
			if ($scope.currentTopic === null) {
				return false;
			}
			return $scope.currentTopic._id === topic._id ? true : false;
		};

		$scope.selectedSub = function (sub) {
			if ($scope.currentSub === null) {
				return false;
			}
			return $scope.currentSub._id === sub._id ? true : false;
		};

		$scope.hasDetails = function () {
			return $scope.isSub !== null;
		};

		$scope.currentName = function () {
			if ($scope.isSub) {
				return $scope.currentSub === null ? '' : $scope.currentSub.name;
			} else {
				return $scope.currentTopic === null ? '' : $scope.currentTopic.topicName;
			}
		};

		$scope.changeTopic = function (topic) {
			updateTopic(topic);
			$scope.isSub = false;
		};

		$scope.changeSubTopic = function (sub) {
			$scope.currentSub = sub;
			$scope.isSub = true;
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

		$scope.modifyTopic = function () {
			$scope.errorMessage = '';
			TopicsService.update($scope.currentTopic).then(
				function (result) {
					if (result.status === 200) {

					} else {
						$scope.errorMessage = result.message;
					}
				}
			);
		};

		$scope.modifySub = function () {
			$scope.errorMessage = '';
			var subTopicNames = $scope.currentTopic.subTopicNames;
			for (var i = 0; i < subTopicNames.length; i++) {
				if ($scope.currentSub._id === subTopicNames[i]._id) {
					$scope.currentTopic.subTopicNames[i] = $scope.currentSub;
					break;
				}
			}
			$scope.modifyTopic();
		};
		
		var init = function () {
			updateTopics();

			$scope.errorMessage = '';
			$scope.currentSub = null;
			$scope.currentTopic = null;
		};

		init();
	}
]);