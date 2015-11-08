'use strict';

angular.module('index').controller('ImageCtrl', ['$scope', '$modal', 'CurrentTopicService', function ($scope, $modal, CurrentTopicService) {

	$scope.getImageUrl = function () {
		var url = CurrentTopicService.getPreviewImageUrl();
		$scope.noImage = (url === null ? true : false);
		return url;
	};

	$scope.expand = function (url) {
		$modal.open({
			templateUrl: '/index/views/image-modal.html',
			controller: ExpandImageCtrl,
			$scope: $scope.$new(true),
			resolve: {
				image: function () {
					return url;
				}
			},
			size: 'lg'
		}).result['finally'](function () {
			// after the modal is closed
		});
	};

	var ExpandImageCtrl = function ($scope, $modalInstance, image) {
		$scope.image = image;
		$scope.ok = function () {
			$modalInstance.close();
		};
	};

	ExpandImageCtrl.$inject = ['$scope', '$modalInstance', 'image'];
}]);