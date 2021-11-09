'use strict'
const express = require('express')
const app = express()

import build from './app'

require('dotenv').config();
const server = build()
app.use(express.static('build'));

const PORT = process.env.PORT || 3000

if (require.main === module) {
  const start = async () => {
    try {
      await server.listen(PORT)
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
