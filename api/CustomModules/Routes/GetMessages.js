const {getDBConnection, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')
const {body, validationResult} = require('express-validator')

const validateMessageRequest = [
    body('startDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
    body('endDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
]

const getMessages = async (request, response) => {
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('message_request_validation_failed')
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        const messageData = await connection.query(`SELECT id, first_name AS firstName, last_name AS lastName, 
        email,message, date, time, seen_by_admin AS seenByAdmin, reply_sent AS replySent, to_delete AS toDelete 
        FROM messages WHERE STR_TO_DATE(date, '%d/%m/%Y') >= STR_TO_DATE('` + request.body.startDate + `', '%d/%m/%Y') 
                      AND STR_TO_DATE(date, '%d/%m/%Y') <= STR_TO_DATE('` + request.body.endDate + `', '%d/%m/%Y')`)
        connection.end()
        return response.json(messageData).status(200)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {
    validateMessageRequest: validateMessageRequest,
    getMessages: getMessages
}