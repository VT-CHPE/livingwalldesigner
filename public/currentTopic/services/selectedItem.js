'use strict';

angular.module('currentTopic').service('CurrentTopicService', function () {
	var selectedItem = null;

	this.getSelectedItem = function () {
		return selectedItem;
	};

	this.setSelectedItem = function (newSelect) {
		// console.log("url is " + url);
		selectedItem = newSelect;
	};

	this.getPreviewImageUrl = function () {
		return (selectedItem === null ? null : selectedItem.image);
	};

	this.getTitle = function () {
		return (selectedItem === null ? null : selectedItem.title);
	};

	this.getSections = function () {
		return (selectedItem === null ? null : selectedItem.sections);
	};

});