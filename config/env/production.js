var port = 1337;

module.exports = {
	port: port,
	db: 'mongodb://localhost/todos',
	facebook: {
		clientID: '1644466555770196',
		clientSecret: 'e3b52e66bf2cace213c27c1f7970a9a8',
		callbackURL: 'http://meantodo.com/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'wYilkwNnzhikd7dkdbmU9a34I',
		clientSecret: 'l766h2tbK1sBhbjfnm4xc089MyrfVFgj8kBSEVrY5ONhrYgxj8',
		callbackURL: 'http://meantodo.com/oauth/twitter/callback'
	}
};
