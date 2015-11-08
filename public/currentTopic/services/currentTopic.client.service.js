'use strict';

angular.module('currentTopic').service('CurrentTopicService', function () {
	var currentTopic = null;

	this.getCurrentTopic = function () {
		return currentTopic;
	};

	this.setCurrentTopic = function (newTopic) {
		currentTopic = newTopic;
	};
});