/*
	routes.js
	Handle New Messages	
*/
module.exports = function(app, messenger, content, config) {

	// Name call out bot
	var tagName = config.botTagName.toLowerCase();
	var callbackUrl = config.callbackUrl;

    // New GroupMe Message
	app.post(callbackUrl, function(req, res) {

		// Separate message
		var text = req.body.text.toLowerCase();
		var textArray = text.split(' ');
		
		// If message contains botname
		if (textArray[0] == tagName) {	
			// Get quote
			if (textArray[1] == 'inspire') {
				content.getQuote(function(quote) {
					messenger.postMessage(quote, function(msg) {
						res.status(200).end();
					})
				})
			// Get gif
			} else if (textArray[1] == 'gifme') {
				var query = textArray.slice(2);
				content.getGif(query, function(url) {
					messenger.postMessage(url, function() {
						res.status(200).end();
					});
				});
			}

		// No command found	
		} else  {
			res.status(404).end();
		}
	});
}