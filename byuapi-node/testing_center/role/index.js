
var test = require('./test.js');

console.log('Has core? ' + (typeof core !== undefined));

exports.greet = 'Hello, ' + test.name;




exports.get = function(connection, resourceId, subResourceId, body, query) {
	//throw new Error('Error');
	return 5;
};
