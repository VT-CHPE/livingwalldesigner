'use strict';

angular.module('topics').controller('TopicModalCtrl', ['$scope', '$modal',
	function($scope, $modal) {

		$scope.animationEnabled = true;

		/*
			This function will return  modalInstance so it can be used to 
			create the new topic modal
		*/
		$scope.newTopicModal = function (size) {

			var modalInstance = $modal.open({
				animation: $scope.animationEnabled,
				templateUrl: '/topics/views/create-topic-modal.client.view.html',
				controller: 'NewTopicModalInstanceCtrl',
				size: size,
				resolve: {

				}
			});


			// when the new topic modal is closed, this will be called
			modalInstance.result.then(
				function () {	// create successfully
					console.log('successful');
				},
				function () {	// user has dismissed the modal
					console.log('dismiss');
				}
			);
		};

		$scope.modifyTopicModal = function (topic, size) {
			
			var modalInstance = $modal.open({
				animation: $scope.animationEnabled,
				templateUrl: '/topics/views/modify-topic-modal.client.view.html',
				controller: 'ModifyTopicModalInstanceCtrl',
				size: size,
				resolve: {
					topic: topic
				}
			});

			modalInstance.result.then(
				function () {
					
				},
				function () {
					
				}
			);
		};

		$scope.deleteTopicModal = function (topic, size) {
			
			var modalInstance = $modal.open({
				animation: $scope.animationEnabled,
				templateUrl: '/topics/views/delete-topic-modal.client.view.html',
				controller: 'DeleteTopicModalInstanceCtrl',
				size: size,
				resolve: {
					topic: topic
				}
			});

			modalInstance.result.then(
				function () {
					
				},
				function () {
					
				}
			);
		};

		var init = function () {

		};

		init();
	}
]);

angular.module('topics').controller('NewTopicModalInstanceCtrl', ['$scope', '$modalInstance', 'TopicsService',
	function ($scope, $modalInstance, TopicsService) {

		$scope.createTopic = function () {
			$scope.errorMessage = '';
			TopicsService.create($scope.create).then(
				function (result) {
					if (result.status === 200) {
						$modalInstance.close();
					} else {
						$scope.errorMessage = result.message;
					}
				}
			);
		};

		$scope.cancel = function () {
			$scope.errorMessage = '';
			$modalInstance.dismiss('cancel');
		};

		$scope.addSubTopics = function () {
			var len = $scope.create.subTopicNames.length;
			var order = len === 0 ? 1 : $scope.create.subTopicNames[len-1].order + 1;
			$scope.create.subTopicNames.push({
				"order": order,
				"name": ""
			});
		};

		$scope.removeSubTopic = function (sub) {
			var len = $scope.create.subTopicNames.length;
			for (var i = 0; i < len; i++) {
				var s = $scope.create.subTopicNames[i];
				if (s === sub) {
					$scope.create.subTopicNames.splice(i,1);
					break;
				}
			}
		};

		// initialize the content of the modal
		var init = function () {
			$scope.create = {};
			$scope.create.subTopicNames = [];
			$scope.create.layout = "1col";
			$scope.create.pos_left = true;
			$scope.create.pos_header = false;
			$scope.errorMessage = '';
			$scope.modalTitle = "New Topic";
		};

		init();
	}
]);

angular.module('topics').controller('ModifyTopicModalInstanceCtrl', ['$scope', '$modalInstance', 'TopicsService', 'topic',
	function ($scope, $modalInstance, TopicsService, topic) {

		$scope.modifyTopic = function () {
			$scope.errorMessage = '';
			TopicsService.update($scope.modify).then(
				function (result) {
					if (result.status === 200) {
						$modalInstance.close();
					} else {
						$scope.errorMessage = result.message;
					}
				}
			);
		};

		$scope.cancel = function () {
			$scope.errorMessage = '';
			$modalInstance.dismiss('cancel');
		};

		$scope.addSubTopics = function () {
			var len = $scope.modify.subTopicNames.length;
			var order = len === 0 ? 1 : $scope.modify.subTopicNames[len-1].order + 1;
			$scope.modify.subTopicNames.push({
				"order": order,
				"name": ""
			});
		};

		$scope.removeSubTopic = function (sub) {
			var len = $scope.modify.subTopicNames.length;
			for (var i = 0; i < len; i++) {
				var s = $scope.modify.subTopicNames[i];
				if (s === sub) {
					$scope.modify.subTopicNames.splice(i,1);
					break;
				}
			}
		};

		// initialize the content of the modal
		var init = function () {
			$scope.modify = topic;
			$scope.errorMessage = '';
			$scope.modalTitle = "Modify Topic";
		};

		init();
	}
]);


angular.module('topics').controller('DeleteTopicModalInstanceCtrl', ['$scope', '$modalInstance', 'TopicsService', 'topic',
	function ($scope, $modalInstance, TopicsService, topic) {

		$scope.deleteTopic = function () {
			$scope.errorMessage = '';
			TopicsService.delete($scope.delete).then(
				function (result) {
					if (result.status === 200) {
						$modalInstance.close();
					} else {
						$scope.errorMessage = result.message;
					}
				}
			);
		};

		$scope.cancel = function () {
			$scope.errorMessage = '';
			$modalInstance.dismiss('cancel');
		};

		// initialize the content of the modal
		var init = function () {
			$scope.delete = topic;
			$scope.errorMessage = '';
			$scope.modalTitle = "Delete Topic";
		};

		init();
	}
]);