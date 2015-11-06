'use strict';

angular.module('admin').controller('AdminCtrl', ['$scope', 
	function ($scope) {

		function TopLevel (args) {
			this.title = args.title;
			this.url = args.url;
		}

		var createTopLevels = function () {
			$scope.topLevels = [];
			$scope.topLevels.push(
				new TopLevel({
					title: "Manage Site Content",
					url: "#!/manage-site-content"
				})
			);
			$scope.topLevels.push(
				new TopLevel({
					title: "Manage Users",
					url: "#!/manage-users"
				})
			);
		};

		var init = function () {
			createTopLevels();
		};

		init();
	}
]);