/* jshint esnext:true */
(function() {
	"use strict";
	let readline = require('readline');
	let rl = readline.createInterface(process.stdin, process.stdout);

	rl.setPrompt('foo');
	rl.prompt();
	rl.on('line', function(line) {
		if (line === 'right') {
			rl.close();
		}
		rl.setPrompt('wrong');
		rl.prompt();
	}).on('close', function() {
		process.exit(0);
	});
}());