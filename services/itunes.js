'use strict'
const fetch = require('node-fetch')

function itunes(search) {
    return new Promise(async (resolve, reject) => {
        try {
            fetch(`${process.env.URL_ITUNES}search?term=${search}`)
                .then(response => response.json())
                .then(json => {
                    resolve(format(json.results))
                })
        } catch (error) {
            console.log('error', error)
            reject(error.toString())
        }

    })
}

function format(results) {
    return results.map(result => {
        return {
            type: result.kind,
            url: result.artistViewUrl,
            name: result.artistName,
            genres: [result.primaryGenreName],
            summary: "",
            origin: `${process.env.URL_ITUNES}`
        }
    })
}

module.exports = { itunes }