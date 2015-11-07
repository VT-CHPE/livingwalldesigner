'use strict';

var file = require('../controllers/file.server.controller.js');

module.exports = function (app) {
	app.post('/api/file/image', file.uploadConfig, file.upload);
};