var middleware = {
	getUsername: function(req, res, next){
		console.log('Whats your name?');
		console.log(req);
		next();
	}
}

module.exports = middleware;