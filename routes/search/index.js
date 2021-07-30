'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const searchCtrl = require('../../controllers/search') /* controllers exports */

route.get("/", searchCtrl.search) /* get all users  */
module.exports = route; /* exports route from administrator user */