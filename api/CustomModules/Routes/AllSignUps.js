const {getDBConnection} = require('../HelperFunctions/HelperFunctions')

const allSignUps = async (request, response) => {
    try {
        const connection = await getDBConnection()
        const signUpData = await connection.query(`SELECT first_name AS firstName, last_name AS lastName, residence,
        profession, reason_for_joining AS reasonForJoining, date_joined AS dateJoined FROM sign_ups ORDER BY dateJoined`)
        connection.end()
        return response.json(signUpData)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {allSignUps: allSignUps}