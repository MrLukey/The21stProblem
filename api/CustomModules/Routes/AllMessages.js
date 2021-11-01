const {getDBConnection} = require('../HelperFunctions/HelperFunctions')

const allMessages = async (request, response) => {
    try {
        const connection = await getDBConnection()
        const messageData = await connection.query(`SELECT id, first_name AS firstName, last_name AS lastName, email,
        message, date, time, seen_by_admin AS seenByAdmin, reply_sent AS replySent, to_delete AS toDelete FROM messages`)
        connection.end()
        return response.json(messageData)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {allMessages: allMessages}