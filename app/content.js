/*
	Request content:
	- Inspirational Quotes
	- Giphy Gifs
*/
var request = require('request');
module.exports = {

	getQuote: function(callback) {
		request('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', function(error, response, data) {
			data = JSON.parse(data);
			data = data.quoteText;
			callback(data);
		})
	},

	getGif: function(query, callback) {
		query = query.toString();
		query = query.replace(',','+');
		console.log(query);
		request('http://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=dc6zaTOxFJmzC', function(error, response, body) {
			body = JSON.parse(body);
			var id = body.data[0].id;
			var url = "http://i.giphy.com/" + id + ".gif";
			callback(url);
		})
	}

	/* Add more services here */

}