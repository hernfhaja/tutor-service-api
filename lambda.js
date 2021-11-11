const awsLambdaFastify = require('aws-lambda-fastify');
const app = require('./dist/server');

const proxy = awsLambdaFastify(app);

exports.handler = proxy
