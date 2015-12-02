'use strict';

angular.module('topics').filter('headnav', function () {
	return function (input) {
		var retVal = [];
		if (typeof input === "undefined") {
			return null;
		}
		for (var i = 0; i < input.length; i++) {
			if (input[i].pos_header) {
				retVal.push(input[i]);
			}
		}
		return retVal;
	};
});

angular.module('topics').filter('leftnav', function () {
	return function (input) {
		var retVal = [];
		if (typeof input === "undefined") {
			return null;
		}
		for (var i = 0; i < input.length; i++) {
			if (input[i].pos_left) {
				retVal.push(input[i]);
			}
		}
		return retVal;
	};
});