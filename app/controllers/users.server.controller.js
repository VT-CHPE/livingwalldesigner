'use strict';

var User = require('mongoose').model('User'),
	passport = require('passport');

var getErrorMessage = function (err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) {
				message = err.errors[errName].message;
			}
		}
	}

	return message;
};

exports.logout = function (req, res) {
	req.logout();
	return res.status(200).send({
		message: "logout success"
	});
};

exports.create = function (req, res) {
	// if not logged in
	if (!req.user) {
		var user = new User(req.body);

		user.provider = 'local';
		user.role = 'User';

		user.save(function (err) {
			if (err) {
				return res.status(400).send({
					message: getErrorMessage(err)
				});
			} else {
				// provided by passport, login after sign up
				req.login(user, function (err) {
					if (err) {
						return res.status(400).send({
							message: getErrorMessage(err)
						});
					}
					return res.status(200).send({
						message: "Authenticated"
					});
				});
			}
		});
	} else {	// if logged in already
		return res.status(200).send({
			message: "already logged in"
		});
	}
};

exports.login = function (req, res) {
	// if not logged in
	if (typeof req.user !== 'undefined') {
		return res.status(200).send({
			message: "already logged in"
		});
	}
	passport.authenticate('local', function (err, user) {
		if (err) {
			return res.status(400).send({
				message: err.errors
			});
		} else if (!user) {
			return res.status(404).send({
				message: "Not authenticated"
			});
		} else {
			req.login(user, function (err) {
				if (err) {
					return res.status(400).send({
						message: getErrorMessage(err)
					});
				}
				return res.status(200).send({
					message: "Authenticated"
				});
			});
		}
	})(req, res);
};

exports.checkLogin = function (req, res) {
	var user = req.user;
	if (typeof user === 'undefined') {
		return res.status(200).send({
			isLogin: false
		});
	} else {
		return res.status(200).send({
			isLogin: true
		});
	}
};

exports.checkAdmin = function (req, res) {
	var user = req.user;
	if (user.role === "Admin") {
		return res.status(200).send({
			message: true
		});
	} else {
		return res.status(200).send({
			message: false
		});
	}
};

exports.list = function (req, res, next) {
	User.find({}, function (err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.read = function (req, res) {
	res.json(req.user);
};

exports.userByID = function (req, res, next, id) {
	User.findOne({
		_id: id
	}, function (err, user) {
		if (err) {
			return next(err);
		} else {
			req.user = user;
			next();
		}
	});
};

exports.update = function (req, res, next) {
	var user = req.user;
	if (typeof user === 'undefined') {
		return res.status(403).send({
			message: "you are not logged in"
		});
	}
	User.findByIdAndUpdate(user.id, req.body, function (err, user) {
		if (err) {
			return next(err);
		} else {
			res.status(200).json(user);
		}
	});
};

exports.delete = function (req, res, next) {
	req.user.remove(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.user);
		}
	});
};

exports.requiresLogin = function (req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(401).send({
			message: 'User is not logged in'
		});
	}

	next();
};

exports.requiresAdmin = function (req, res, next) {
	if (req.user.role !== 'Admin') {
		return res.status(401).send({
			message: 'Admin privilege is required'
		});
	}

	next();
};