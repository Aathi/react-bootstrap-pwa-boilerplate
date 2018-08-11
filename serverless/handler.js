'use strict';

module.exports.schoolUserAuth = (event, context, callback) => {
	const response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify({
			message: 'Authenticated call!',
			input: event
		})
	};

	callback(null, response);
};