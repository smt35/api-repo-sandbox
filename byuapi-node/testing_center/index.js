var q = require('q');

exports.get = function(connection, resources, request, response) {

    console.log('Hello');

	//throw new Error('blah');
	return connection.ces.execute('SELECT * FROM TESTING_CNTR.ROLE')
		.then(function(data) {
			return data.rows;
		});
};