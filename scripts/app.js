var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var PORT = 8080;
var app = express();

app.get('/', function(req,res){
	res.render('index.html')
})


app.listen(PORT, function(){console.log('Server started on port: '+PORT+'...')})