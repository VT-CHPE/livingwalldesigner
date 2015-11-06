var users = require('../../app/controllers/users.server.controller')
	passport = require('passport');

module.exports = function (app) {
/*	app.route('/users')
		.post(users.create)
		.get(users.list);

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);*/
	app.route('/api/users/create')
		.post(users.create);

	app.route('/api/users/login')
		.post(users.login);

	app.route('/api/users/logout')
		.get(users.logout);

	app.route('/api/users/update')
		.post(users.update);

	app.param('userId', users.userByID);
};