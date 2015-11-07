'use strict';

angular.module('topics').factory('Topics', ['$resource',
	function ($resource) {
		return $resource('api/topics/:topicId',
			{
				topicId: '@_id'
			},
			{
				update: {method: 'POST'}
			}
		);
	}
]);

angular.module('topics').service('TopicsService', ['Topics',

	function (Topics) {
		
		this.create = function (args) {
			var topic = new Topics({
				topicName: args.topicName,
				order: args.order,
				subTopicNames: args.subTopicNames
			});

			return topic.$save().then(
				function (response) {
					console.log(response);
					return {
						"status": 200,
						"message": response.message
					};
				},
				function (errorResponse) {
					return {
						"status": errorResponse.status,
						"message": errorResponse.data.message
					};
				}
			);
		};

		this.list = function () {
			return Topics.query().$promise.then(
				function (response) {
					return {
						"status": 200,
						"topics": response
					};
				},
				function (errorResponse) {
					return {
						"status": errorResponse.status,
						"message": errorResponse.data.message
					};
				}
			);
		};

		this.findOne = function (args) {
			return Topics.get({
				"topicId": args._id
			}).$promise.then(
				function (response) {
					return {
						"status": 200,
						"topic": response
					};
				},
				function (errorResponse) {
					return {
						"status": errorResponse.status,
						"message": errorResponse.data.message
					};
				}
			);
		};

		this.update = function (args) {

			return Topics.update({
				"_id": args._id,
				"newTopic": args
			}).$promise.then(
				function (response) {
					return {
						"status": 200,
						"message": response.message
					};
				},
				function (errorResponse) {
					return {
						"status": errorResponse.status,
						"message": errorResponse.data.message
					};
				}
			);
		};
	}
]);