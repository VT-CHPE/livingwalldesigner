'use strict';

angular.module('admin').controller('AdminCtrl', ['$scope', '$window', 'UsersService',
	function ($scope, $window, UsersService) {

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
			$scope.topLevels.push(
				new TopLevel({
					title: "Manage Server Files",
					url: "#!/manage-server-files"
				})
			);
		};

		$scope.signOut = function () {
			UsersService.logout().then(
				function (result) {
					if (result.status === 200 && result.success) { // redirect to welcome page
						$window.location = '/';
					} else {
						// something went wrong
						console.log(result);
					}
				}
			);
		};

		var init = function () {
			createTopLevels();
		};

		init();
	}
]);