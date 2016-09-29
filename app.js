var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;

app.get('/', function(req, res){
	res.send('Hello Express, you hit route /');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){
	console.log('Server running...')
});