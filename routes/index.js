'use strict'

const express = require('express')
const api = express()

const searchRoute = require('./search') /* import administrator user  route*/


api.use('/search', searchRoute)

module.exports = api