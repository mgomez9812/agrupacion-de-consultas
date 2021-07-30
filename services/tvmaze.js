'use strict'
const fetch = require('node-fetch')

function tvmazeSearch(search) {
    return new Promise(async (resolve, reject) => {
        try {
            fetch(`${process.env.URL_TVMAZE}search/shows?q=${search}`)
                .then(response => response.json())
                .then(json => {
                    let resultFormat = formationDataShows(json)
                    resolve(resultFormat)
                })
        } catch (error) {
            console.log(error)
            reject({ error: error.toString() })
        }

    })
}

async function formationDataShows(shows) {
    /* Que debe de devolver */
    return shows.map(show => {
        return {
            type: 'show',
            url: show.show.url,
            name: show.show.name,
            language: show.show.language,
            genres: show.show.genres,
            summary: show.show.summary,
            origin: `${process.env.URL_TVMAZE}`
        }
    })







}

module.exports = { tvmazeSearch }