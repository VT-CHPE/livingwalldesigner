'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SubTopicNameSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Subtopic name is required'
	},
	order: {
		type: Number,
		min: 1
	},
	contentUrl: {
		type: String
	},
	lwImageUrl: {
		type: String
	},
	hgImageUrl: {
		type: String
	}
});

var TopicSchema = new Schema({
	topicName: {
		type: String,
		trim: true,
		unique: true,
		required: 'Topic name is required'
	},
	subTopicNames: [SubTopicNameSchema],
	contentUrl: {
		type: String,
	},
	order: {
		type: Number,
		unique: true,
		min: 1,
	},
	lwImageUrl: {
		type: String
	},
	hgImageUrl: {
		type: String
	},
	layout: {
		type: String,
		enum: ['2cols', '1col'],
		default: '1col',
		required: 'Layout type is required'
	},
	pos_header: {
		type: Boolean,
		default: false
	},
	pos_left: {
		type: Boolean,
		default: true
	},
	created: {
		type: Date,
		default: Date.now
	},
});

mongoose.model('Topic', TopicSchema);