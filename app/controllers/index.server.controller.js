'use strict';

exports.renderNormal = function (req, res) {
	res.render('index');
};

exports.renderAdmin = function (req, res) {
	res.render('admin-index');
};