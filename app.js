'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', route)
module.exports = app