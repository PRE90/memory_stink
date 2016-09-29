var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var middleware = require('./middleware.js');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(middleware.getUsername);

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){
	console.log('Server running...')
});