var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
var PORT = process.env.PORT || 8080;
var app = express();

var scores = [];

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

// GET sorted high scores
app.get('/scores', function (req,res){
	db.score.findAll({
		limit: 10,
		order: ['score', 'DESC']
	}).then(function(scores){
		res.json(scores);
	}, function(error){
		res.status(500).send();
	});
});

// POST SCORES
app.post('/scores', function (req, res) {
	var body = req.body;

	db.score.create(body).then(function(score){
		res.json(score.toJSON());
	}, function(error){
		res.status(400).json(error);
	});
});


db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log('Server running on port: '+PORT+'...')
	});
});