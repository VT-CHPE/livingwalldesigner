/**
 * Entry point for Node.JS app
 */
 
var express = require('express');
var app = express();
 
 
/*Serve the static content*/
app.use(express.static(__dirname + '/app/'));
app.use('/bower_components', express.static(__dirname + '/bower_components'))
 
app.get('/api/', function(req, res){
	res.send('Hi, I\'m an API response!');	 
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Running on port %s', port);
	
});
