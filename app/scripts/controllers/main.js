'use strict';

angular.module('livingwalldesignerApp').controller('MainCtrl', function ($scope, PreviewImageService) {

	$scope.getImageUrl = function () {
		var url = PreviewImageService.getPreviewImageUrl();
		$scope.noImage = (url === null ? true : false);
		return url;
	};
});