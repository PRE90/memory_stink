var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.get('/', function(req,res){
	res.render('index.html')
})