'use strict';

var lwdAppName = 'livingwalldesignerApp';

var lwdApp = angular.module(lwdAppName,
	[
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'toggle-switch',
		'parse-angular',
		'ui.bootstrap',
		'users',
		'currentTopic',
		'index'
	]
);

lwdApp.config(['$locationProvider', 
	function ($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

// if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function () {
	angular.bootstrap(document, [lwdAppName]);
});