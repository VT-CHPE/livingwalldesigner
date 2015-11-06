angular.module('users').factory('Users', [
	'$resource',

	function ($resource) {
		return $resource('api/users/:dest',
			{
				dest: "@dest"
			},
			{
				save: {method: "POST", params: {dest: "create"}},
				login: {method: "POST", params: {dest: "login"}}
			}
		);
	}
]);