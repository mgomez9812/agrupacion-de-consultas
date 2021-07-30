'use strict'
const { itunes } = require('../../services/itunes')
const { tvmazeSearch } = require('../../services/tvmaze')
const { crcind } = require('../../services/crcind')


async function search(req, res) {
    let { query } = req.query;
    if (!query) {
        return res.status(200).json({
            success: true,
            data: []
        })
    }
    let itunesResult = await itunes(query)
    let shows = await tvmazeSearch(query)
    let crcindResult = await crcind(query)
    return res.status(200).json({
        success: true,
        data: itunesResult.concat(shows, crcindResult)
    })
}

module.exports = {
    search
}