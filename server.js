/* 
	server.js
	GroupMe Bot Starter 
*/
var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var request = require('request');
var content = require('./app/content');
var messenger = require('./app/messenger');
var config = require('./app/config');
var app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load Routes and Messenger
require('./app/routes')(app, messenger, content, config);
require('./app/cron')(content, messenger);

// Start server
var server = app.listen(80);
console.log('Bot listening on port 80');