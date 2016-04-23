/* 
	cron.js
	Register automatic posts
*/
module.exports = function(content, messenger) {

		var CronJob = require('cron').CronJob;
		var job = new CronJob('00 8 * * * *', function() {

			/*
			* Run Job Here
			*/

			// Runs everyday at 8:00am
			messenger.postMessage("Good morning GroupMe!");

		}, function () {
			/* This function is executed when the job stops */
		}, true /* Start the job */
		);

		/* More Jobs Here */
}