'use strict';

var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

module.exports = function (app) {
	app.route('/api/users/create')
		.post(users.create);

	app.route('/api/users/login')
		.get(users.checkLogin)
		.post(users.login);

	app.route('/api/users/logout')
		.get(users.requiresLogin, users.logout);

	app.route('/api/users/update')
		.post(users.requiresLogin, users.update);

	app.route('/api/users/admin')
		.get(users.requiresLogin, users.checkAdmin);

	app.route('/api/users/current')
		.get(users.read);

	app.param('userId', users.userByID);
};