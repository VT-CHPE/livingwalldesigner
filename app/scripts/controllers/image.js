'use strict';

angular.module('livingwalldesignerApp').controller('ImageCtrl', ['$scope', '$modal', 'SelectedItemService', function ($scope, $modal, SelectedItemService) {

	$scope.getImageUrl = function () {
		var url = SelectedItemService.getPreviewImageUrl();
		$scope.noImage = (url === null ? true : false);
		return url;
	};

	$scope.expand = function (url) {
		$modal.open({
			templateUrl: 'views/image-modal.html',
			controller: ExpandImageCtrl,
			$scope: $scope.$new(true),
			resolve: {
				image: function () {
					return parseImageUrl(url);
				}
			},
			size: 'lg'
		}).result['finally'](function () {
			// after the modal is closed
		});
	};

	var parseImageUrl = function (url) {
		var index = url.lastIndexOf("/");
		console.log('index = ' + index);

		// image name
		var imageName = url.slice(index + 1);

		// base
		var base = url.slice(0, index);
		index = base.lastIndexOf("/");
		base = base.slice(0, index);

		var newUrl = base + "/hg_res_imgs/" + imageName;

		return newUrl;
	};

	var ExpandImageCtrl = function ($scope, $modalInstance, image) {
		$scope.image = image;
		$scope.ok = function () {
			$modalInstance.close();
		};
	};

	ExpandImageCtrl.$inject = ['$scope', '$modalInstance', 'image'];
}]);