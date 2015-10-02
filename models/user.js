var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
	username: String,
	password: String
});


User.plugin(passportLocalMongoose);
module.exports.user = mongoose.model('User', User);
