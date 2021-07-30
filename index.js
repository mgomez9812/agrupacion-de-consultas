'use strict'
require('dotenv').config()

const app = require('./app')
const port = process.env.PORT

var server = app.listen(port, () => {
    console.log('ejecutando express')
})

server.setTimeout(500000)