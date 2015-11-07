'use strict';

var multer = require('multer');

var storage = multer.diskStorage({
	destination: function (res, file, cb) {
		cb(null, './public/images/uploads');
	},
	filename: function (req, file, cb) {
		cb(null,  Date.now() + '-' + file.originalname);
	}
});

var m_upload = multer({storage: storage}).single('image');

exports.uploadConfig = m_upload;

exports.upload = function (req, res) {
	m_upload(req, res, function (err) {
		if (err) {
			return res.status(500).send({
				"message": "Error uploading file."
			});
		}
		res.status(200).send({
			message: "Upload successfully: " + req.file.originalname + '  ' + req.file.filename
		});
	});
};