const {getDBConnection} = require('../HelperFunctions/HelperFunctions')

const allCountries = async (request, response) => {
    try {
        const connection = await getDBConnection()
        const allCountries = await connection.query('SELECT id, name FROM countries')
        connection.end()
        return response.json(allCountries).status(200)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {allCountries: allCountries}