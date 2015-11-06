'use strict';

var users = require('../../app/controllers/users.server.controller'),
	index = require('../controllers/index.server.controller');

module.exports = function (app) {
	app.route('/')
		.get(index.renderNormal);

	app.route('/admin')
		.get(users.requiresLogin, users.requiresAdmin, index.renderAdmin);
};