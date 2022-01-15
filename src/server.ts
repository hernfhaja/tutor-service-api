'use strict'

import build from './app'

require('dotenv').config();

const server = build()


var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

if (require.main === module) {
  const start = async () => {
    try {
      await server.listen(server_port, server_host);
      server.blipp()
    } catch (err) {
      server.log.error(err)
      process.exit(1)
    }
  }
  start()
} else {
  // required as a module => executed on aws lambda
  module.exports = server
}
