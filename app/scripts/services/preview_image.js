'use strict';

angular.module('livingwalldesignerApp').service('PreviewImageService', function () {
	var previewImageUrl = null;

	this.getPreviewImageUrl = function () {
		return previewImageUrl;
	};

	this.setPreviewImageUrl = function (url) {
		// console.log("url is " + url);
		previewImageUrl = url;
	};
});