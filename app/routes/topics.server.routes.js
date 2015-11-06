'use strict';

var topics = require('../../app/controllers/topics.server.controller'),
	users = require('../../app/controllers/users.server.controller');

module.exports = function (app) {
	app.route('/api/topics')
		.get(topics.list)
		.post(users.requiresLogin, users.requiresAdmin, topics.create);

	app.route('/api/topics/:topicId')
		.get(topics.read)
		.post(users.requiresLogin, users.requiresAdmin, topics.update)
		.delete(users.requiresLogin, users.requiresAdmin, topics.delete);

	app.param('topicId', topics.topicByID);
};