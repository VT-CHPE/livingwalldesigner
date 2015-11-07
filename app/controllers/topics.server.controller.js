'use strict';

var Topic = require('mongoose').model('Topic');

var getErrorMessage = function (err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Topic/subtopic name already exists, or duplicate orders';
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

exports.create = function (req, res) {
	var topic = new Topic(req.body);

	topic.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			return res.status(200).send({
				message: "Create success"
			});
		}
	});
};

exports.list = function (req, res) {
	Topic.find().sort('order')
	.exec(function (err, topics) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else if (typeof topics === 'undefined') {
			console.log('cannot find');
			return [];
		} else {
			res.json(topics);
		}
	});
};

exports.topicByID = function (req, res, next, id) {
	Topic.findById(id).exec(function (err, topic) {
		if (err) {
			return next(err);
		}
		if (!topic) {
			return next(new Error('Failed to load topic ' + id));
		}

		req.topic = topic;
		next();
	});
};

exports.read = function (req, res) {
	res.json(req.topic);
};

exports.update = function (req, res) {
	var topic = req.topic;

	topic.topicName = req.body.newTopic.topicName;
	topic.subTopicNames = req.body.newTopic.subTopicNames;
	topic.order = req.body.newTopic.order;

	topic.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).send({
				message: "Modify success"
			});
		}
	});
};

exports.delete = function (req, res) {
	var topic = req.topic;

	topic.remove(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(topic);
		}
	});
};