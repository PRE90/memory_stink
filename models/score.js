// Docs at http://docs.sequelizejs.com/en/1.7.0/docs/models/

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('score', {
		username: {
			type: DataTypes.STRING,
			validate: {
				isAlphanumeric: true,
				notEmpty: false,
				len: [3, 14]
			}
		},
		score: {
			type: DataTypes.INTEGER
		}
	});
};