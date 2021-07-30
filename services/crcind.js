'use strict'

const axios = require('axios');
const convert = require('xml-js')
function crcind(search) {
    return new Promise(async (resolve, reject) => {
        try {

            let searchXml = await axios.get(`${process.env.CRCIND}/?soap_method=GetByName&name=${search}`)
                .then(res => res.data)
                .catch(error => error)

            let convertJson = convert.xml2json(searchXml, { compact: false, spaces: 4 })
            let newFormat = format(JSON.parse(convertJson).elements[0].elements[0].elements[0].elements[0].elements[1].elements[0])
            return resolve(newFormat)
        } catch (error) {
            reject(error)
        }
    })
}

function format(data) {
    if (data.hasOwnProperty('elements'))
        return data.elements.map(element => {
            return {
                type: "other",
                url: "",
                name: element.elements[1].elements[0].text,
                genres: "",
                summary: "",
                origin: `${process.env.CRCIND}`
            }
        })
    else
        return []
}

module.exports = { crcind }