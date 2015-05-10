'use strict';

var chalk = require('chalk');

var c = 0;

function levenshteinDistance (s, t) {

	console.info(chalk.green(s), "\t", chalk.red(t));

	if (s.length === 0) return t.length;
	if (t.length === 0) return s.length;

	var tempOut = Math.min(
		levenshteinDistance(s.substr(1), t) + 1,
		levenshteinDistance(t.substr(1), s) + 1,
		levenshteinDistance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0)
	);

	//var tempOut = levenshteinDistance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0);

	console.info("o", "\t", "c", "\t", "s", "\t", "t");
	console.info(chalk.green(tempOut), "\t", chalk.red(c), "\t", chalk.green(s), "\t", chalk.red(t));

	c++;

	return tempOut;
}

var o = levenshteinDistance("r", "n");

console.info("\n", o);

return;
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);