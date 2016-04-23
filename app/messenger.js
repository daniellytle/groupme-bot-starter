/*
	messenger.js
	Post to groupme groups
*/
var request = require('request');
var config = require('./config');
module.exports = {
	
	// Sends message to groupme
	postMessage: function(text, callback) {
		request.post({
			url: config.apiUrl,
			form: {
				"text": text,
				"bot_id" : config.botId
			}
		}, callback);
	}

}