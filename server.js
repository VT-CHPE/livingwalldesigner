// Import Libs =========================================================
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var express = require('express');
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var genuid = require('uuid');
var mongoose = require('mongoose');

// Connect to mongodb ==================================================


var User = require('./models/user');

// Set up passport =====================================================
app.use(passport.initialize());
app.use(cookieParser());
app.use(bodyParser());
app.use(flash());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	genid: function(req) {
		return genuid.v4();
	},
	secret: 'livingwalldesigner',
	resave: false,
    saveUninitialized: false
}));

var User = mongoose.model('User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
mongoose.connect('mongodb://localhost/lwd');


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Route for login attempt =============================================
app.post('/login', passport.authenticate('local',{ 
	successRedirect: '/',
	failureRedirect: '/error',
	failureFlash: true 
	})
); 
app.get('/error', function(req, res){
	res.send(req.flash('error'));
});
 
// Serve static content ================================================
app.use(express.static(__dirname + '/app/'));
app.use('/bower_components', express.static(__dirname + '/bower_components'))
 


// Start server ========================================================
var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Running on port %s', port);
	
});