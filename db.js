var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

// Conditional to handle heroku deployment
if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/scores.sqlite'
	});
}

var db = {};

db.score = sequelize.import(__dirname + '/models/score.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;